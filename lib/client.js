import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "dv1u90x5",
    dataset: 'production',
    apiVesrion: "2023-01-16",
    useCdn: true,
    token: 
    "skDtjFb5gMpvsr1gaexECgIiaU4LjEDy6dcZAJPSxRR9fmgJxtvPSYqxUQBCHDCKZdZwNNNSuJOa98w9KyLQ9TIzdPPdNphia84PtM5zqVqrTxdpsjqABja8YLtfXLzaoR0v9juyxn8sK73JzrrZVsRybrbBnrG4xpN63e99NmQyqX24tavs"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source)=> builder