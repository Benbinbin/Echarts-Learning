var date = ['01/02/2018', '01/03/2018', '01/04/2018', '01/05/2018', '01/08/2018', '01/09/2018', '01/10/2018', '01/11/2018', '01/12/2018', '01/15/2018', '01/16/2018', '01/17/2018', '01/18/2018', '01/19/2018', '01/22/2018', '01/23/2018', '01/24/2018', '01/25/2018', '01/26/2018', '01/29/2018', '01/30/2018', '01/31/2018', '02/01/2018', '02/02/2018', '02/05/2018', '02/06/2018', '02/07/2018', '02/08/2018', '02/09/2018', '02/12/2018', '02/13/2018', '02/14/2018', '02/22/2018', '02/23/2018', '02/26/2018', '02/27/2018', '02/28/2018', '03/01/2018', '03/02/2018', '03/05/2018', '03/06/2018', '03/07/2018', '03/08/2018', '03/09/2018', '03/12/2018', '03/13/2018', '03/14/2018', '03/15/2018', '03/16/2018', '03/19/2018', '03/20/2018', '03/21/2018', '03/22/2018', '03/23/2018', '03/26/2018', '03/27/2018', '03/28/2018', '03/29/2018', '03/30/2018', '04/02/2018', '04/03/2018', '04/04/2018', '04/09/2018', '04/10/2018', '04/11/2018', '04/12/2018', '04/13/2018', '04/16/2018', '04/17/2018', '04/18/2018', '04/19/2018', '04/20/2018', '04/23/2018', '04/24/2018', '04/25/2018', '04/26/2018', '04/27/2018', '05/02/2018', '05/03/2018', '05/04/2018', '05/07/2018', '05/08/2018', '05/09/2018', '05/10/2018', '05/11/2018', '05/14/2018', '05/15/2018', '05/16/2018', '05/17/2018', '05/18/2018', '05/21/2018', '05/22/2018', '05/23/2018', '05/24/2018', '05/25/2018', '05/28/2018', '05/29/2018', '05/30/2018', '05/31/2018', '06/01/2018', '06/04/2018', '06/05/2018', '06/06/2018', '06/07/2018', '06/08/2018', '06/11/2018', '06/12/2018', '06/13/2018', '06/14/2018', '06/15/2018', '06/19/2018', '06/20/2018', '06/21/2018', '06/22/2018', '06/25/2018', '06/26/2018', '06/27/2018', '06/28/2018', '06/29/2018', '07/02/2018', '07/03/2018', '07/04/2018', '07/05/2018', '07/06/2018', '07/09/2018', '07/10/2018', '07/11/2018', '07/12/2018', '07/13/2018', '07/16/2018', '07/17/2018', '07/18/2018', '07/19/2018', '07/20/2018', '07/23/2018', '07/24/2018', '07/25/2018', '07/26/2018', '07/27/2018', '07/30/2018', '07/31/2018', '08/01/2018', '08/02/2018', '08/03/2018', '08/06/2018', '08/07/2018', '08/08/2018', '08/09/2018', '08/10/2018', '08/13/2018', '08/14/2018', '08/15/2018', '08/16/2018', '08/17/2018', '08/20/2018', '08/21/2018', '08/22/2018', '08/23/2018', '08/24/2018', '08/27/2018', '08/28/2018', '08/29/2018', '08/30/2018', '08/31/2018', '09/03/2018', '09/04/2018', '09/05/2018', '09/06/2018', '09/07/2018', '09/10/2018', '09/11/2018', '09/12/2018', '09/13/2018', '09/14/2018', '09/17/2018', '09/18/2018', '09/19/2018', '09/20/2018', '09/21/2018', '09/25/2018', '09/26/2018', '09/27/2018', '09/28/2018', '10/08/2018', '10/09/2018', '10/10/2018', '10/11/2018', '10/12/2018', '10/15/2018', '10/16/2018', '10/17/2018', '10/18/2018', '10/19/2018', '10/22/2018', '10/23/2018', '10/24/2018', '10/25/2018', '10/26/2018', '10/29/2018', '10/30/2018', '10/31/2018', '11/01/2018', '11/02/2018', '11/05/2018', '11/06/2018', '11/07/2018', '11/08/2018', '11/09/2018', '11/12/2018', '11/13/2018', '11/14/2018', '11/15/2018', '11/16/2018', '11/19/2018', '11/20/2018', '11/21/2018', '11/22/2018', '11/23/2018', '11/26/2018', '11/27/2018', '11/28/2018', '11/29/2018', '11/30/2018', '12/03/2018', '12/04/2018', '12/05/2018', '12/06/2018', '12/07/2018'];

var price = [
  [8.69, 8.99, 8.66, 8.96],
  [8.98, 9.2, 8.88, 8.93],
  [8.91, 9.14, 8.9, 8.94],
  [8.96, 9.02, 8.81, 8.87],
  [8.87, 9.34, 8.83, 9.29],
  [9.29, 9.29, 9.01, 9.1],
  [9, 9.13, 8.94, 9.05],
  [9.05, 9.06, 8.78, 8.83],
  [8.88, 9.11, 8.81, 9.09],
  [9.03, 9.04, 8.75, 8.82],
  [8.82, 8.89, 8.75, 8.87],
  [8.85, 9.09, 8.78, 8.95],
  [8.95, 9.34, 8.86, 9.22],
  [9.25, 9.65, 9.15, 9.31],
  [9.4, 9.51, 9.23, 9.32],
  [9.31, 9.33, 9.13, 9.24],
  [9.26, 9.47, 9.19, 9.3],
  [9.31, 9.77, 9.26, 9.74],
  [9.73, 9.96, 9.54, 9.71],
  [9.87, 10.21, 9.86, 10.01],
  [10.01, 10.17, 9.73, 9.77],
  [9.73, 10.03, 9.58, 9.98],
  [10.18, 10.55, 10.03, 10.28],
  [10.18, 11.13, 10.01, 11.1],
  [10.92, 11.45, 10.87, 11.23],
  [10.85, 11.1, 10.7, 11.07],
  [11.3, 11.48, 10.42, 10.65],
  [10.4, 10.49, 9.82, 10.14],
  [9.8, 10.06, 9.24, 10],
  [9.76, 10.05, 9.61, 9.99],
  [10.04, 10.25, 9.83, 9.99],
  [9.99, 10.35, 9.92, 10.28],
  [10.41, 10.46, 10.03, 10.42],
  [10.31, 10.56, 10.24, 10.5],
  [10.75, 10.93, 10.52, 10.62],
  [10.57, 10.6, 9.97, 10.14],
  [10.02, 10.13, 9.8, 10.04],
  [9.95, 10.11, 9.9, 10],
  [9.79, 9.79, 9.46, 9.61],
  [9.62, 9.65, 9.33, 9.51],
  [9.57, 9.69, 9.38, 9.64],
  [9.61, 9.66, 9.36, 9.42],
  [9.38, 9.45, 9.28, 9.38],
  [9.42, 9.43, 9, 9.1],
  [9.11, 9.28, 9.01, 9.21],
  [9.18, 9.36, 9.14, 9.23],
  [9.19, 9.58, 9.12, 9.53],
  [9.48, 9.59, 9.37, 9.54],
  [9.55, 9.59, 9.4, 9.41],
  [9.28, 9.28, 9.07, 9.12],
  [9.01, 9.22, 8.99, 9.17],
  [9.19, 9.23, 9.04, 9.16],
  [9.15, 9.17, 9, 9.05],
  [8.6, 8.7, 8.35, 8.68],
  [8.5, 8.5, 8.18, 8.33],
  [8.43, 8.49, 8.34, 8.4],
  [8.2, 8.51, 8.18, 8.35],
  [8.45, 8.69, 8.27, 8.64],
  [8.65, 8.68, 8.4, 8.52],
  [8.59, 8.78, 8.54, 8.56],
  [8.49, 8.51, 8.35, 8.37],
  [8.42, 8.47, 8.21, 8.23],
  [8.26, 8.58, 8.26, 8.56],
  [8.63, 8.9, 8.63, 8.88],
  [8.92, 9.05, 8.76, 8.78],
  [8.81, 8.81, 8.69, 8.72],
  [8.79, 8.81, 8.65, 8.75],
  [8.71, 8.75, 8.36, 8.5],
  [8.47, 8.62, 8.37, 8.45],
  [8.64, 8.96, 8.64, 8.74],
  [8.88, 9.13, 8.81, 9.12],
  [9.05, 9.26, 8.96, 9.09],
  [9.05, 9.29, 9.01, 9.13],
  [9.3, 9.56, 9.21, 9.25],
  [9.17, 9.24, 9.06, 9.21],
  [9.23, 9.27, 9.03, 9.19],
  [9.2, 9.3, 8.98, 9.24],
  [9, 9.18, 8.61, 8.79],
  [8.8, 8.95, 8.75, 8.94],
  [8.96, 9.08, 8.91, 9],
  [9.03, 9.15, 8.85, 9.05],
  [9.08, 9.17, 9.03, 9.07],
  [9.09, 9.13, 8.8, 8.9],
  [8.91, 8.98, 8.85, 8.93],
  [9, 9.04, 8.86, 9.01],
  [9.02, 9.15, 9, 9.14],
  [9.16, 9.16, 8.86, 8.98],
  [8.91, 8.94, 8.82, 8.86],
  [8.86, 8.89, 8.7, 8.71],
  [8.71, 8.81, 8.64, 8.78],
  [8.87, 8.93, 8.7, 8.78],
  [8.78, 8.79, 8.59, 8.63],
  [8.63, 8.63, 8.43, 8.45],
  [8.46, 8.5, 8.41, 8.46],
  [8.48, 8.53, 8.33, 8.46],
  [8.43, 8.5, 8.38, 8.42],
  [8.4, 8.62, 8.33, 8.57],
  [8.46, 8.48, 8.24, 8.25],
  [8.3, 8.44, 8.29, 8.42],
  [8.38, 8.65, 8.37, 8.53],
  [8.67, 8.81, 8.62, 8.77],
  [8.8, 8.81, 8.7, 8.78],
  [8.8, 8.92, 8.79, 8.9],
  [8.95, 9.23, 8.95, 9.19],
  [8.72, 8.76, 8.57, 8.71],
  [8.63, 9, 8.61, 8.82],
  [8.86, 8.97, 8.69, 8.93],
  [8.82, 9.07, 8.8, 8.92],
  [8.85, 9.05, 8.64, 8.91],
  [8.86, 9.06, 8.82, 8.97],
  [8.82, 8.94, 8.43, 8.58],
  [8.6, 8.7, 8.43, 8.66],
  [8.62, 8.95, 8.61, 8.69],
  [8.62, 8.75, 8.41, 8.69],
  [8.68, 8.72, 8.45, 8.46],
  [8.35, 8.35, 7.97, 8.09],
  [8.09, 8.14, 7.71, 7.73],
  [7.77, 7.87, 7.6, 7.66],
  [7.7, 7.84, 7.61, 7.79],
  [7.74, 7.76, 7.28, 7.34],
  [7.39, 7.43, 6.98, 7.25],
  [7.25, 7.49, 7.24, 7.27],
  [7.21, 7.24, 7.01, 7.08],
  [7.09, 7.28, 7.05, 7.2],
  [7.25, 7.53, 7.23, 7.49],
  [7.48, 7.66, 7.43, 7.61],
  [7.4, 7.48, 7.27, 7.42],
  [7.5, 7.68, 7.5, 7.61],
  [7.68, 7.72, 7.56, 7.64],
  [7.65, 7.66, 7.42, 7.51],
  [7.46, 7.51, 7.27, 7.35],
  [7.4, 7.54, 7.37, 7.38],
  [7.49, 7.74, 7.47, 7.73],
  [7.72, 7.94, 7.63, 7.9],
  [7.83, 8.29, 7.8, 8.18],
  [8.47, 8.89, 8.47, 8.54],
  [8.62, 8.76, 8.48, 8.62],
  [8.63, 8.7, 8.29, 8.39],
  [8.54, 8.58, 8.35, 8.52],
  [8.53, 8.95, 8.5, 8.77],
  [8.7, 8.77, 8.55, 8.69],
  [8.88, 8.94, 8.32, 8.36],
  [8.36, 8.49, 8.17, 8.28],
  [8.33, 8.54, 8.26, 8.29],
  [8.33, 8.41, 7.96, 8.18],
  [8.25, 8.58, 8.21, 8.56],
  [8.6, 8.83, 8.54, 8.66],
  [8.58, 8.77, 8.43, 8.67],
  [8.69, 8.72, 8.52, 8.59],
  [8.5, 8.75, 8.42, 8.71],
  [8.68, 8.68, 8.42, 8.46],
  [8.48, 8.51, 8.22, 8.23],
  [8.14, 8.24, 7.97, 8.08],
  [8.21, 8.25, 8.06, 8.1],
  [8.2, 8.35, 8.11, 8.35],
  [8.34, 8.49, 8.31, 8.35],
  [8.3, 8.43, 8.3, 8.33],
  [8.31, 8.33, 8.06, 8.12],
  [8.09, 8.16, 8.01, 8.07],
  [8.11, 8.23, 8, 8.19],
  [8.2, 8.25, 8.11, 8.18],
  [8.15, 8.17, 8.03, 8.06],
  [8.06, 8.09, 7.85, 7.93],
  [7.89, 7.92, 7.76, 7.88],
  [7.81, 7.85, 7.61, 7.69],
  [7.67, 7.82, 7.63, 7.78],
  [7.74, 7.77, 7.55, 7.55],
  [7.51, 7.64, 7.4, 7.44],
  [7.52, 7.67, 7.51, 7.56],
  [7.6, 7.66, 7.52, 7.61],
  [7.55, 7.55, 7.12, 7.17],
  [7.15, 7.26, 7.05, 7.2],
  [7.3, 7.33, 7.13, 7.24],
  [7.25, 7.34, 7.18, 7.34],
  [7.31, 7.31, 7.22, 7.23],
  [7.26, 7.61, 7.23, 7.59],
  [7.56, 7.72, 7.55, 7.67],
  [7.67, 7.76, 7.61, 7.7],
  [7.68, 8.01, 7.64, 7.95],
  [7.86, 7.86, 7.75, 7.79],
  [7.95, 8.02, 7.88, 7.88],
  [7.95, 7.99, 7.89, 7.91],
  [7.82, 7.9, 7.68, 7.85],
  [7.66, 7.73, 7.28, 7.37],
  [7.35, 7.42, 7.34, 7.38],
  [7.39, 7.54, 7.38, 7.48],
  [7.27, 7.35, 7.14, 7.18],
  [7.22, 7.5, 7.13, 7.48],
  [7.48, 7.5, 7.25, 7.3],
  [7.3, 7.47, 7.21, 7.25],
  [7.35, 7.42, 7.25, 7.41],
  [7.31, 7.37, 7.17, 7.19],
  [7.14, 7.42, 7.06, 7.42],
  [7.51, 7.77, 7.44, 7.76],
  [7.68, 7.71, 7.37, 7.42],
  [7.42, 7.63, 7.35, 7.46],
  [7.3, 7.58, 7.21, 7.56],
  [7.59, 7.74, 7.52, 7.58],
  [7.6, 7.63, 7.35, 7.39],
  [7.45, 7.56, 7.39, 7.51],
  [7.5, 7.7, 7.44, 7.65],
  [7.75, 7.77, 7.55, 7.57],
  [7.65, 7.75, 7.55, 7.74],
  [7.7, 7.74, 7.57, 7.66],
  [7.65, 7.65, 7.56, 7.62],
  [7.65, 7.7, 7.51, 7.55],
  [7.61, 7.63, 7.5, 7.56],
  [7.52, 7.6, 7.47, 7.47],
  [7.44, 7.5, 7.39, 7.49],
  [7.41, 7.54, 7.4, 7.48],
  [7.47, 7.59, 7.41, 7.43],
  [7.43, 7.49, 7.39, 7.48],
  [7.47, 7.49, 7.41, 7.43],
  [7.45, 7.48, 7.36, 7.45],
  [7.4, 7.4, 7.27, 7.3],
  [7.19, 7.55, 7.18, 7.43],
  [7.3, 7.34, 7.25, 7.27],
  [7.25, 7.27, 7.11, 7.11],
  [7.09, 7.09, 6.92, 6.94],
  [6.97, 6.99, 6.81, 6.84],
  [6.83, 6.87, 6.78, 6.85],
  [6.92, 6.92, 6.7, 6.7],
  [6.68, 6.75, 6.62, 6.72],
  [6.86, 6.91, 6.82, 6.84],
  [6.86, 7.05, 6.83, 7],
  [6.9, 6.98, 6.87, 6.94],
  [6.87, 6.92, 6.84, 6.88],
  [6.88, 6.94, 6.85, 6.92]
];

var volume = [109164700, 84272900, 74872500, 64615700, 143478000, 102535100, 68646000, 84626100, 95494100, 105289600, 71990900, 104756400, 232239700, 422988900, 289735800, 285206200, 232513700, 309145600, 325586300, 259255800, 178116800, 162056600, 220958500, 278474600, 268171200, 322676900, 324132400, 250429300, 329374700, 161543000, 161950900, 115947900, 162821900, 136747900, 158688000, 215780900, 130882500, 103207300, 140520000, 135995300, 121046200, 80130900, 73081400, 176672400, 141394100, 101973200, 127380200, 80977700, 65121600, 89529700, 55274000, 67154300, 58929500, 208309000, 144048100, 87699300, 61517700, 101619000, 80508500, 84930100, 57249100, 57237900, 76406500, 100182100, 75174400, 37682900, 48376900, 85864500, 54866600, 108155500, 109241300, 86934800, 61494000, 118223000, 46917900, 52527300, 60382600, 135665600, 66185200, 55476200, 49580700, 50976800, 68506500, 31710600, 51922400, 59925300, 79998400, 42423300, 45353900, 43251200, 64449300, 47988300, 48845800, 25468400, 45993800, 27826600, 65336600, 57751600, 57102900, 58476700, 74532200, 42042300, 62774400, 105624100, 74280000, 67088700, 51851200, 60352000, 84167500, 86554600, 109533500, 60239900, 69219500, 59638400, 58451200, 71883000, 87798500, 62250600, 69049600, 66220500, 82646900, 56570600, 45499400, 55962900, 62861200, 77489400, 47674400, 61036300, 45434400, 43539800, 44785600, 51842500, 128320900, 81700000, 74837700, 142025800, 74141400, 73806000, 50623900, 104876400, 40091200, 93131400, 92569300, 54393100, 49730700, 59507200, 78031900, 56295100, 35103400, 56442800, 64455300, 41730800, 51008300, 35892300, 44750600, 47582000, 23507500, 52067800, 37869000, 54683600, 54908700, 36903100, 73630900, 59563500, 48906700, 40025100, 45976200, 52520400, 46375200, 33763800, 123265500, 54091200, 44403500, 41323300, 24853900, 58317400, 56743600, 29374300, 46598000, 26148000, 57336100, 30475600, 64099300, 93943400, 41476200, 42267400, 61234800, 70450100, 43886800, 37232300, 38142900, 44329200, 50197200, 99450800, 74577900, 56423700, 54850500, 47905800, 41874700, 43704100, 61280600, 53284800, 52158400, 37338000, 23062200, 26778100, 29207100, 22203100, 22581000, 33180700, 43233800, 30225500, 30566500, 47467000, 55588400, 74793900, 41287400, 42798700, 48294400, 37149500, 34196900, 41677500, 42962700, 66513200, 68804700, 33760600, 25447700, 23335800];