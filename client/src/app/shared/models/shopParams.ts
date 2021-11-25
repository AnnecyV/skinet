export class ShopParams {
    brandId: number = 0;
    typeId: number = 0 ;
    sort : string |number= 'name';
    pageNumber : number | string | any = 1;
    pageSize: number | string | any = 6;
    search: string | any;
}