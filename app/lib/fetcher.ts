
export async function fetcher<T>(url: string): Promise<T>{
    const res = await fetch(url, {
        next: {revalidate: 60}
    })

    if(!res.ok) throw new Error(`fetch failed ${res.status}`)

    return await res.json()
}



