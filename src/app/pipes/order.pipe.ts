import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

    transform(value: any[], args?: any): any[] {
       // Crear una copia de la lista original
       let sortedList = [...value];
       // Ordenar la copia
       sortedList.sort((a, b) => {
         if (a[args.property] < b[args.property]) {
           return -1 * args.direction;
         } else if (a[args.property] > b[args.property]) {
           return 1 * args.direction;
         } else {
           return 0;
         }
       });
       // Devolver la lista ordenada
       console.log('la lista',sortedList);
       return sortedList;
      }
    

}
