import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "summary"
})
export class SummaryPipe implements PipeTransform{
    // No Argument is mandatory
    // transform(value: string) : string {
    //     console.log(value)

        // return "I Love Angular"
        // return value.slice(0,50) + "..."


//////////######################################/////
        // one Argument is mandatory
        // transform(value: string, limit : number) : string {
        // return value.slice(0,limit) + "..."

//////////######################################/////
         // one Argument is mandatory
    //     transform(value: string, limit : number) : string {
    //     let newLimit = limit ? limit : 50
    //     return value.slice(0,newLimit) + "..."
    // }

            //OR

    transform(value: string, limit : number = 50) : string {
         return value.slice(0,limit) + "..."
     }


}