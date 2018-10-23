import { Vessel, Port } from './models';
export class SampleData {
    public ports: Map<string, Port> = new Map<string, Port>();
    public vessels: Map<string, Vessel> = new Map<string, Vessel>();
    constructor() {
        this.ports.set('Hungnam', { id: 1, name: 'Hungnam', city: 'Hungnam', lng: 127.61254682695312, lat: 39.7663357672761 });
        this.ports.set('Chabahar', { id: 2, name: 'Chabahar', city: 'Chabahar', lng: 60.611754700000006, lat: 25.2973393 });
        this.ports.set('Hodeidah', { id: 3, name: 'Hodeidah', city: 'Hodeidah', lng: 42.93584509632342, lat: 14.834107670722394 });
        this.vessels.set('vessel1', {
            id: 1,
            name: 'vessel1',
            flag: 'Panama',
            type: 'shipping',
            tracks: [
                {
                    id: 1, desc: 'vessel stayed for two weeks',
                    lng: 127.61254682695312, lat: 39.7663357672761,
                    start_date: new Date('2018-10-02'),
                    end_date: new Date('2018-10-02')
                },
                {
                    id: 2, desc: 'vessel spoted',
                    lng: 130.47549529641606, lat: 35.18045079226479,
                    start_date: new Date('2018-10-03'),
                    end_date: new Date('2018-10-03')
                },
                {
                    id: 3, desc: 'vessel spoted',
                    lng: 128.41406210034825, lat: 33.79088148453528,
                    start_date: new Date('2018-10-04'),
                    end_date: new Date('2018-10-04')
                },
                {
                    id: 4, desc: 'vessel spoted',
                    lng: 126.00106640428044, lat: 28.900766593238597,
                    start_date: new Date('2018-10-05'),
                    end_date: new Date('2018-10-05')
                },
                {
                    id: 5, desc: 'vessel spoted',
                    lng: 120.02850039571263, lat: 19.190577388933473,
                    start_date: new Date('2018-10-06'),
                    end_date: new Date('2018-10-06')
                },
                {
                    id: 6, desc: 'vessel spoted',
                    lng: 113.70437188714482, lat: 19.190577388933473,
                    start_date: new Date('2018-10-07'),
                    end_date: new Date('2018-10-07')
                },
                {
                    id: 7, desc: 'vessel spoted',
                    lng: 105.7582633075092, lat: 0.2198576225718173,
                    start_date: new Date('2018-10-08'),
                    end_date: new Date('2018-10-08')
                },
                {
                    id: 8, desc: 'vessel spoted',
                    lng: 103.94951565831639, lat: 0.6048669665229407,
                    start_date: new Date('2018-10-09'),
                    end_date: new Date('2018-10-09')
                },
                {
                    id: 9, desc: 'vessel spoted',
                    lng: 100.48495393389999, lat: 3.275702903218348,
                    start_date: new Date('2018-10-10'),
                    end_date: new Date('2018-10-10')
                },
                {
                    id: 10, desc: 'vessel spoted',
                    lng: 95.15179799360476, lat: 7.656116470219062,
                    start_date: new Date('2018-10-11'),
                    end_date: new Date('2018-10-11')
                },
                {
                    id: 11, desc: 'vessel spoted',
                    lng: 86.51720549591198, lat: 6.570907606663565,
                    start_date: new Date('2018-10-12'),
                    end_date: new Date('2018-10-12')
                },
                {
                    id: 12, desc: 'vessel spoted',
                    lng: 78.79082347877636, lat: 3.1799596485204646,
                    start_date: new Date('2018-10-13'),
                    end_date: new Date('2018-10-13')
                },
                {
                    id: 13, desc: 'vessel spoted',
                    lng: 63.59373833664074, lat: 17.26439247887133,
                    start_date: new Date('2018-10-14'),
                    end_date: new Date('2018-10-14')
                },
               {
                    id: 14, desc: 'vessel docked on port',
                    lng: 60.611754700000006, lat: 25.2973393,
                    start_date: new Date('2018-10-15'),
                    end_date: new Date('2018-10-15')
                },
                {
                    id: 15, desc: 'vessel spoted',
                    lng: 60.87712194450512, lat: 22.654156800795846,
                    start_date: new Date('2018-10-16'),
                    end_date: new Date('2018-10-16')
                },
                {
                    id: 16, desc: 'vessel spoted',
                    lng: 58.6878493023695, lat: 16.300535602822777,
                    start_date: new Date('2018-10-17'),
                    end_date: new Date('2018-10-17')
                },
                {
                    id: 17, desc: 'vessel spoted',
                    lng: 50.60990478523388, lat: 13.09363017679789,
                    start_date: new Date('2018-10-18'),
                    end_date: new Date('2018-10-18')
                },
                {
                    id: 18, desc: 'vessel spoted',
                    lng: 43.6586883178411, lat: 12.37861041836148,
                    start_date: new Date('2018-10-19'),
                    end_date: new Date('2018-10-19')
                },

                {
                    id: 19, desc: 'vessel spoted',
                    lng: 42.82572562605719, lat: 13.831383097389784,
                    start_date: new Date('2018-10-20'),
                    end_date: new Date('2018-10-20')
                },
                {
                    id: 20, desc: 'vessel docked',
                    lng: 42.93584509632342, lat: 14.834107670722394,
                    start_date: new Date('2018-10-21'), end_date: new Date('2018-10-21')
                }
            ]
        });
        console.log(this.vessels.get('vessel1'));
    }


}
