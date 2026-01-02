// MiniMax Transformer - 支持 MiniMax Coding Plan API

class MiniMaxTransformer {
  name = "minimax";

  async transformRequestIn(req, provider) {
    const headers = {
      ...(req.headers || {}),
      "x-api-key": provider.apiKey,
    };

    delete headers.authorization;
    delete headers.Authorization;

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
