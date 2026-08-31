import { repoToSlug } from "@/data/projects";

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  portfolioPath?: string;
};

const HIDDEN = new Set([
  "22I-2253-Lab08",
  "Abdul-Samad-Saleem-CV",
  "Samad-CV",
  "CV-Website",
  "Pakistan-parks-webpage",
  "Login",
  "streamlit-hex-comparator",
]);

export function mapRepoToPortfolio(repo: GithubRepo): GithubRepo {
  const slug = repoToSlug[repo.name];
  return {
    ...repo,
    portfolioPath: slug ? `/work/${slug}` : undefined,
  };
}

export function filterRepos(repos: GithubRepo[]) {
  return repos
    .filter((repo) => !repo.fork && !HIDDEN.has(repo.name))
    .map(mapRepoToPortfolio);
}
