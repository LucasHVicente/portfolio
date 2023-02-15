export interface Education {
  title: string;
  college: {
    name: string;
    link: string;
  };
  startYear: string;
  endYear?: string;
}
