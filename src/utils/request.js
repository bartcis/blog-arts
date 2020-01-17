export class Request {
  request(path, { method, headers, body, ...otherConfigs } = {}) {
    return fetch(path, {
      ...otherConfigs,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body,
    });
  }

  async get({ path, config }) {
    const response = await this.request(path, {
      ...config,
      method: 'GET',
    });
    const data = await response.json();

    return data;
  }

  delete({ path, config }) {
    return this.request(path, { ...config, method: 'DELETE' });
  }

  post({ path, payload, config }) {
    return this.request(path, {
      ...config,
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  put({ path, payload, config }) {
    return this.request(path, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  patch({ path, payload, config }) {
    return this.request(path, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  }
}
