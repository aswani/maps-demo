export interface Port {
       id?: number;
       lat?: number;
       lng?: number;
       city?: string;
       name?: string;
    }
export class Vessel {
    constructor(
        public id?: number,
        public name?: string,
        public flag?: string,
        public type?: string,
        public tracks?: Array<VesselMovment>
    ) {
    }
}
export class VesselMovment {
    constructor(
        public id?: number,
        public lat?: number,
        public lng?: number,
        public desc?: string,
        public start_date?: Date,
        public end_date?: Date,
    ) {
    }
}
