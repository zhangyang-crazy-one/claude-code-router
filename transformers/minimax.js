// MiniMax Transformer - 支持 MiniMax Anthropic API 兼容接口

class MiniMaxTransformer {
  name = "minimax";

  async transformRequestIn(req, provider) {
    const headers = { ...(req.headers || {}) };
    
    delete headers["x-api-key"];
    delete headers["X-Api-Key"];
    delete headers.authorization;
    delete headers.Authorization;
    
    headers["Authorization"] = `Bearer ${provider.apiKey}`;

    return {
      ...req,
      headers,
    };
  }

  async transformRequestOut(req) {
    return req;
  }

  async transformResponseOut(res) {
    return res;
  }

  async transformResponseIn(res) {
    return res;
  }
}

module.exports = MiniMaxTransformer;
