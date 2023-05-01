export default {
    name: 'product',
    title: 'პროდუქტები',
    type: "document",
    fields: [
        {
            name: 'image',
            title: 'სურათი',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'სახელი',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'სლაგი',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'ფასი',
            type: 'array',
            of: [{type: 'number'}]
        },
        {
            name: 'details',
            title: 'დეტალები',
            type: 'string'
        }
    ]
}