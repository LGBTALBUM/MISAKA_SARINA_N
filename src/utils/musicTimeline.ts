import type { ResolvedMusicRelease } from './musicCatalogue';
import { isMainCatalogueEntry, isProfileEntry } from './musicVisibility';

export type TimelineYearGroup = {
  year: string;
  releases: ResolvedMusicRelease[];
  mainCount: number;
  secondaryCount: number;
  manualCount: number;
};

const getReleaseYear = (release: ResolvedMusicRelease) => {
  const date = new Date(release.releaseDate);
  return Number.isNaN(date.valueOf()) ? 'Unknown' : String(date.getUTCFullYear());
};

export const getTimelineReleases = (releases: ResolvedMusicRelease[]) =>
  releases.filter((release) => !isProfileEntry(release));

export const getTimelineYearGroups = (releases: ResolvedMusicRelease[]): TimelineYearGroup[] => {
  const groups = new Map<string, ResolvedMusicRelease[]>();

  getTimelineReleases(releases).forEach((release) => {
    const year = getReleaseYear(release);
    groups.set(year, [...(groups.get(year) ?? []), release]);
  });

  return [...groups.entries()]
    .map(([year, yearReleases]) => {
      const sortedReleases = [...yearReleases].sort(
        (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
      );

      return {
        year,
        releases: sortedReleases,
        mainCount: sortedReleases.filter((release) => isMainCatalogueEntry(release)).length,
        secondaryCount: sortedReleases.filter((release) => !isMainCatalogueEntry(release)).length,
        manualCount: sortedReleases.filter((release) => release.source?.label === 'Manual catalogue').length
      };
    })
    .sort((a, b) => {
      if (a.year === 'Unknown') return 1;
      if (b.year === 'Unknown') return -1;
      return Number(b.year) - Number(a.year);
    });
};

export const getTimelineStats = (groups: TimelineYearGroup[]) => {
  const releases = groups.flatMap((group) => group.releases);

  return {
    years: groups.length,
    releases: releases.length,
    main: releases.filter((release) => isMainCatalogueEntry(release)).length,
    manual: releases.filter((release) => release.source?.label === 'Manual catalogue').length
  };
};
