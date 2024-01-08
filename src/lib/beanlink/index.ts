export async function followBeanLink(link: string): Promise<string> {
    const response = await fetch(link);
    return response.url;
}
