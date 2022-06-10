let name = "pongpon";
let age = 18;
let nickname = "O";
console.log(new Date);
let array2 = {};
let array = {
    item : 25
}
let phone = '992478951';
phone = phone.slice(0,10)
console.log(phone);
let fulfillment = [
    {
        "deliveryOrderId": "0CG-DO2206-00713",
        "propertiesJson": "{\"launchpadBatchNumber\":1654673253758}",
        "code": "2206-0CG-00713-1",
        "courierTrackingCode": null,
        "id": "0CG-FF2206-00333",
        "deliveryOrder": {
            "items": [
                {
                    "sku": {
                        "id": "0CG-nRgmC-UPMZuP2cj9ELQgtF",
                        "accountId": "0CG",
                        "productId": "0CG-uXQFFtusOZu7l-H6VhUSP-",
                        "code": "DRJP",
                        "shortName": "Dr.Jill G5 Essence Plus",
                        "internalCode": "0CG00006",
                        "barcode": "0CG00006",
                        "name": "DRJP-Dr.Jill G5 Essence Plus/-/-/",
                        "unit": null,
                        "description": null,
                        "width": null,
                        "length": null,
                        "height": null,
                        "weight": 30001.00,
                        "qcCost": null,
                        "cost": null,
                        "price": null,
                        "skuTypeId": "06W00095",
                        "attributesJson": "{\"attr1\":\"-\",\"attr2\":\"-\"}",
                        "active": true,
                        "propertiesJson": "{\"IFP\":{\"itemsPerLabel\":0},\"__conversion\":{},\"transferableItems\":[{\"accountId\":\"0CG\",\"account\":{\"name\":\"Test_Siam Outlet\"},\"items\":[{\"skuId\":\"0CG-IIPvZajT7Z1wQh_sjXRHp-\",\"sku\":{\"name\":\"GL-0001-แก้วคริสตัล///\",\"internalCode\":\"0CG00013\"},\"amount\":20}]}]}"
                    },
                    "deliveryOrderId": "0CG-DO2206-00713",
                    "itemId": 1,
                    "skuId": "0CG-nRgmC-UPMZuP2cj9ELQgtF",
                    "code": "DRJP",
                    "name": "DRJP-Dr.Jill G5 Essence Plus/-/-/",
                    "internalCode": "0CG00006",
                    "barcode": "0CG00006",
                    "amount": 1.00,
                    "match": 1.00,
                    "note": null,
                    "propertiesJson": null,
                    "rowVersion": "AAAAAAIGHc8="
                }
            ],
            "id": "0CG-DO2206-00713",
            "code": "2206-0CG-00713",
            "reference": "78",
            "type": "DeliveryOrder",
            "documentDate": "2022-06-08T07:27:21.833Z",
            "userId": "pongpon@tony.co.th",
            "createAccountId": "000",
            "dueDate": null,
            "accountId": "0CG",
            "status": "picked",
            "createdDate": "2022-06-08T07:27:21.833Z",
            "updatedDate": "2022-06-08T07:27:49.157Z",
            "note": null,
            "itemCount": 1.00,
            "propertiesJson": null,
            "rowVersion": "AAAAAAIGeTc=",
            "salesOrderId": null,
            "representativeName": null,
            "customerNickName": null,
            "customerName": "test78",
            "customerPhone": "0881935322",
            "customerEmail": null,
            "courierTrackingCode": null,
            "deliveryAddress": {
                "address": "992/41 ต.ทับมา อ.เมือง",
                "countryId": "th",
                "provinceId": "th21",
                "postalCode": "21000"
            },
            "courierId": "TH.FlashExpressTest",
            "change": 0.00,
            "cod": 0.00,
            "codFee": 0.00,
            "codRemittanceValue": null,
            "codRemittanceDate": null,
            "codRemittanceReference": null,
            "codTransferValue": null,
            "codTransferDate": null,
            "codStatus": null,
            "codTransferReference": null,
            "packingFee": null,
            "deliveryFee": null,
            "printCount": 33,
            "fulfillmentCount": 1,
            "dispatchDate": null,
            "dispatchBatchNumber": null,
            "returned": null
        }
    }
]
let fulfillment2 = fulfillment[0];
console.log(fulfillment2);
let deliveryOrder;
deliveryOrder = fulfillment2.deliveryOrder;
console.log(deliveryOrder);
//for(let item of deliveryOrder.items)
{
    //let sku = item.sku;
    //console.log(sku.weight);
}