export interface Humanoid {
  name: string;
  gender: string;
  age: number;
  occupations: string[];
  race: string;
}

export interface Race {
  id: number;
  name: string;
}

export interface Occupation {
  id: number;
  name: string;
}
