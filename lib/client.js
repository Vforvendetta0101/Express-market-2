import sanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
    projectId: "ejsof3r6",
    dataset: 'production',
    apiVersion: "2022-07-16",
    useCdn: true,
    token: 
    "sk5OmRRIRbtCvwvpoUUyRo94pmBg71zHcZtFZ4tW7a2fixPxgHw5jXUbwjJAlkrLz9lEz3nEVDpYjjcgcHeqqrGGYW6Lpg3k7zr4y2SHzliwh8IvG8Lco6UHOLYimPWFVk0hCM7ffAmKq7wRb5NHwkjzJlbDAmIe4QsdFhWnX6WV9WFmW3pZ"
})

const builder = ImageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);