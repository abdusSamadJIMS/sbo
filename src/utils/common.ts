export const convertSlugToKey = (slug: string) => {
    return slug
        .split('-') // Split the slug by hyphens
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize subsequent words
        )
        .join('');
}

