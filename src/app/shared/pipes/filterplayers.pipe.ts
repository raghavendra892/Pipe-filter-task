import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/data';

@Pipe({
  name: 'filterplayers'
})
export class FilterplayersPipe implements PipeTransform {

  transform(value: Iplayer[], searchText : string): Iplayer[]  {
    if(!value){
      return []
    }
    if(!searchText){
      return value
    }
    let filterArray =  value.filter(playObj => {
      return playObj.country.toLowerCase().startsWith(searchText.toLowerCase())
    })
    return filterArray
  }

}
