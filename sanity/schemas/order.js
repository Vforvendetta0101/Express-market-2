export default {
    name: 'order',
    title: "შეკვეთები",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: "სახელი",
            type: "string",
            options: {
                maxLength: 40
            }
        },
        {
            name: 'phone',
            title: "ტელეფონის ნომერი", 
            type: "string",
            options: {
                maxLength: 20
            }
        },
        {
            name: 'address',
            title: "მისამართი", 
            type: "string",
            options: {
                maxLength: 90
            }
        },
        {
            name: 'total',
            title: "გადასახდელი",
            type: "number"
        },
        {
            name: 'method',
            title: "მეთოდი",
            type: 'number'
        },
        {
            name: 'status',
            title: "სტატუსი",
            type: "number"
        },
    ]
}
