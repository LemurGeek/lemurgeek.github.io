export interface IWork {
  id: number;
  company: string;
  positions: IPositions[];
}

export interface IPositions {
  id: number;
  position: string;
  description: string;
  logo: string;
  startDate: string;
  endDate: string;
}