export interface MovieProps {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date?: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
