export class ApiService {
    public async get<T>(url: string, headers: { [key: string]: string } = {}) {
        const client = await fetch(url, {
            headers: headers, method: 'GET'
        });

        if (!client || !(client.status === 200 || client.status === 201)) {
            throw new Error(await client.text());
        }

        return await client.json() as T;
    }

    public async post<T>(url: string, formData: any, headers: { [key: string]: string } = {}) {
        const client = await fetch(url, {
            headers: headers, method: 'POST', body: JSON.stringify(formData),
        });

        if (!client || !(client.status === 200 || client.status === 201)) {
            throw new Error(await client.text());
        }

        return await client.json() as T;
    }


    public async delete<T>(url: string, headers: { [key: string]: string } = {}, json = false) {
        const client = await fetch(url, {
            headers: headers, method: 'DELETE',
        });

        if (!client || !(client.status === 200 || client.status === 201)) {
            throw new Error(await client.text());
        }

        if (json) {
            return await client.json() as T;
        } else {
            return await client.text();
        }

    }
}
