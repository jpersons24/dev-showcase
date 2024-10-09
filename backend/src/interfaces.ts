export interface Driver {
  id: number;
  first_name: string;
  last_name: string;
  broadcast_name: string;
  team: string;
  team_color: string;
  country: string;
  number: number;
}

export interface Meeting {
  id: number;
  name: string;
  year: number;
  circuit_id: number;
  circuit_name: string;
  country_code: string;
  country_id: number;
  country_name: string;
  start_date: Date;
  location: string;
}

export interface Session {
  id: number;
  name: string;
  type: string;
  meeting_id: number;
  year: number;
  circuit_id: number;
  circuit_name: string;
  country_code: string;
  country_id: number;
  country_name: string;
  start_date: Date;
  end_date: Date;
  location: string;
}
