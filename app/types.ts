export type Driver = {
  session_key: number;
  meeting_key: number;
  broadcast_name: string;
  country_code: string;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  driver_number: number;
  team_colour: string;
  team_name: string;
  name_acronym: string;
};

export type Race = {
  circuit_key: number;
  circuit_short_name: string;
  meeting_key: number;
  meeting_code: string;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  meeting_name: string;
  meeting_official_name: string;
  gmt_offset: Date;
  date_start: Date;
  year: number;
};

export type Lap = {
  date_start: Date;
  driver_number: number;
  duration_sector_1: number;
  duration_sector_2: number;
  duration_sector_3: number;
  i1_speed: number;
  i2_speed: number;
  is_pit_out_lap: boolean;
  lap_duration: number;
  lap_number: number;
  meeting_key: number;
  segments_sector_1: number[];
  segments_sector_2: number[];
  segments_sector_3: number[];
  session_key: number;
  st_speed: number;
};

export type Session = {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: Date;
  date_start: Date;
  gmt_offset: Date;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
};
