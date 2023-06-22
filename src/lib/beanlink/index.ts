export const BEANLINK_RE = /^https:\/\/beanl.ink\/l\/.*$/;

export interface BeanLinkResponse {
    link: string;
    error?: string | undefined,
    name: string;
    roaster?: string | null;
}

export async function getBeanLink(link: string): Promise<BeanLinkResponse> {
    const response = await fetch("https://beanl.ink/add", {
        method: "POST",
        body: JSON.stringify({"link": link})
    });
    const data: BeanLinkResponse = await response.json();

    if (!!data.error) {
        throw new Error(data.error);
    }

    return data
}

export async function followBeanLink(link: string): Promise<string> {
    const response = await fetch(link);
    return response.url;
}