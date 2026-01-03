//Sat Jan 03 2026 06:06:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
process.env;
process.noDeprecation = true;
process.on("warning", _0x3efb18 => {
  if (_0x3efb18.code === "DEP0040" || _0x3efb18.message.includes("punycode")) {
    return;
  }
  console.warn(_0x3efb18);
});
const _0x4c4dcf = {
  REQUIRED_DEPENDENCIES: [{
    name: "request",
    package: "request"
  }, {
    name: "querystring",
    package: "querystring"
  }],
  API_BASE_URL: "https://api.e.kuaishou.com",
  VERSION_CHECK_URL: "http://n2ks.xiangjiandao.top:3000",
  QUEUE_STATUS_PATH: "/queue_status",
  PROXY_API_PATH: "/proxySign",
  USER_INFO_COLLECT_PATH: "/user_info_collector/collect.php",
  DEFAULT_USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  ANDROID_USER_AGENT: "kwai-android aegon/4.9.1",
  DEFAULT_PROXY_PORT: 1080,
  LOW_REWARD_THRESHOLD: 1,
  LOW_REWARD_LIMIT: 300,
  MAX_RETRY_COUNT: 3,
  MAX_TASK_RETRY: 3,
  ksjsb_xc: 10,
  DEFAULT_MIN_COIN_THRESHOLD: 600000,
  TASK_CONFIGS: {
    box: {
      name: "宝箱广告",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 606,
      posId: 20346,
      subPageId: 100024064,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    box2: {
      name: "宝箱广告",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7032,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    box1: {
      name: "宝箱广告[追加]",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 606,
      posId: 20346,
      subPageId: 100024064,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    look: {
      name: "看广告得金币",
      encDataKey: "encData",
      signKey: "sign",
      businessId: 672,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    look1: {
      name: "看广告得金币[追加]",
      encDataKey: "encData",
      signKey: "sign",
      businessId: 672,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    food: {
      name: "饭补广告",
      encDataKey: "fbencData",
      signKey: "fbsign",
      businessId: 9362,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    food1: {
      name: "饭补广告[追加]",
      encDataKey: "fbencData",
      signKey: "fbsign",
      businessId: 9362,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    search: {
      name: "搜索广告",
      encDataKey: "skencData",
      signKey: "sksign",
      businessId: 7038,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    search1: {
      name: "搜索广告[追加]",
      encDataKey: "skencData",
      signKey: "sksign",
      businessId: 7038,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    cn: {
      name: "内容广告",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7072,
      posId: 10854,
      subPageId: 100017920,
      requestSceneType: 1,
      taskType: 1,
      pageId: 100017919
    },
    cn1: {
      name: "内容广告1",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7078,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    cn2: {
      name: "内容广告3",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7052,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11014
    },
    cn3: {
      name: "内容广告4",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7058,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11014
    },
    cn4: {
      name: "内容广告5",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7060,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11014
    },
    cn5: {
      name: "内容广告6",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7062,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11014
    },
    cn6: {
      name: "内容广告7",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7064,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11014
    },
    play: {
      name: "短剧广告",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7036,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    play1: {
      name: "短剧广告[追加]",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7036,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    see: {
      name: "看广告得奖励",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7041,
      posId: 20577,
      subPageId: 100024208,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    see1: {
      name: "看广告得奖励[追加]",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7041,
      posId: 20577,
      subPageId: 100024208,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    see2: {
      name: "看广告得奖励2",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7002,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    },
    zb: {
      name: "直播广告",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7032,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 1,
      taskType: 1,
      pageId: 11101
    },
    zb1: {
      name: "直播广告[追加]",
      encDataKey: "boxencData",
      signKey: "boxsign",
      businessId: 7032,
      posId: 96134,
      subPageId: 100074584,
      requestSceneType: 7,
      taskType: 2,
      pageId: 11101
    }
  },
  CURRENT_VERSION: "1.2.5",
  APP_NAME: "快手极速版",
  TASK_LOGGER_NAME: "快速任务"
};
function _0x3899ea() {
  const _0x3abd30 = [];
  for (const _0x4df883 of _0x4c4dcf.REQUIRED_DEPENDENCIES) {
    try {
      require(_0x4df883.name);
    } catch (_0x44cfee) {
      _0x3abd30.push(_0x4df883.package);
    }
  }
  if (_0x3abd30.length > 0) {
    console.log("❌ 缺少以下必需的库依赖:");
    _0x3abd30.forEach(_0x27c1dd => console.log("   - " + _0x27c1dd));
    console.log("\n请运行以下命令安装缺失的依赖:");
    console.log("npm install " + _0x3abd30.join(" "));
    console.log("\n或者运行以下命令安装所有依赖:");
    console.log("npm install");
    process.exit(1);
  }
  console.log("✅ 所有必需的库依赖检查通过");
}
const _0x38ea2d = require("request");
const _0xaef41a = require("querystring");
const {
  SocksProxyAgent: _0x845be7
} = require("socks-proxy-agent");
const _0x4982e6 = {
  parseProxyConfig(_0x2abf9d) {
    if (!_0x2abf9d || !_0x2abf9d.trim()) {
      return null;
    }
    try {
      if (_0x2abf9d.includes("|")) {
        const _0x3ab83f = _0x2abf9d.split("|");
        if (_0x3ab83f.length >= 2) {
          const [_0x162edd, _0x332975, _0x1a3562, _0x39ec96] = _0x3ab83f;
          return {
            host: _0x162edd.trim(),
            port: parseInt(_0x332975.trim(), 10) || _0x4c4dcf.DEFAULT_PROXY_PORT,
            auth: _0x1a3562 && _0x39ec96 ? _0x1a3562.trim() + ":" + _0x39ec96.trim() : undefined
          };
        }
      }
      if (_0x2abf9d.includes(":")) {
        const [_0x127009, _0x5c8da4] = _0x2abf9d.split(":");
        return {
          host: _0x127009.trim(),
          port: parseInt(_0x5c8da4.trim(), 10) || _0x4c4dcf.DEFAULT_PROXY_PORT
        };
      }
      return {
        host: _0x2abf9d.trim(),
        port: _0x4c4dcf.DEFAULT_PROXY_PORT
      };
    } catch (_0x3d5571) {
      console.log("代理配置解析失败: " + _0x2abf9d + ", 错误: " + _0x3d5571.message);
      return null;
    }
  },
  compareVersion(_0x132f8a, _0x20b569) {
    try {
      const _0x403e3e = _0x132f8a.split(".").map(_0x251fb9 => parseInt(_0x251fb9, 10) || 0);
      const _0x129273 = _0x20b569.split(".").map(_0x2c1485 => parseInt(_0x2c1485, 10) || 0);
      const _0xb535bd = Math.max(_0x403e3e.length, _0x129273.length);
      for (let _0x6e91a0 = 0; _0x6e91a0 < _0xb535bd; _0x6e91a0++) {
        const _0x318312 = _0x403e3e[_0x6e91a0] || 0;
        const _0x237dc4 = _0x129273[_0x6e91a0] || 0;
        if (_0x318312 > _0x237dc4) {
          return 1;
        }
        if (_0x318312 < _0x237dc4) {
          return -1;
        }
      }
      return 0;
    } catch (_0x5b9c3d) {
      return 0;
    }
  },
  getRandomDelay() {
    return Math.floor(10 * Math.random()) + 10;
  },
  isNodeEnv() {
    return typeof process !== "undefined" && process.versions?.["node"];
  },
  getEnv(_0x46e38b, _0xc464de = []) {
    if (!this.isNodeEnv()) {
      return _0xc464de;
    }
    const _0x595dc0 = process.env[_0x46e38b];
    if (!_0x595dc0) {
      return _0xc464de;
    }
    return _0x595dc0.split("&").map(_0x495210 => _0x495210.trim()).filter(_0x1e1c07 => _0x1e1c07 !== "");
  },
  formatNumber(_0x37cd3c) {
    return _0x37cd3c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
class _0x2530e3 {
  constructor(_0x1e8c29) {
    this.name = _0x1e8c29;
    this.logs = [];
    console.log("🔔 " + this.name + ", 开始!");
  }
  log(..._0x5ea41f) {
    this.logs.push(..._0x5ea41f);
    console.log(..._0x5ea41f);
  }
  done() {
    console.log("🔔 " + this.name + ", 结束!");
    process.exit(0);
  }
  getData(_0xc616d0) {
    return null;
  }
}
class _0x59277b {
  static async makeRequest(_0x8ffd83, _0x48625b = null) {
    if (_0x48625b) {
      try {
        let _0x4a7518 = "socks5://" + _0x48625b.host + ":" + _0x48625b.port;
        _0x48625b.auth && (_0x4a7518 = "socks5://" + _0x48625b.auth + "@" + _0x48625b.host + ":" + _0x48625b.port);
        const _0xf95ced = new _0x845be7(_0x4a7518);
        _0x8ffd83.agent = _0xf95ced;
        this.isDevMode() && console.log("使用代理: " + _0x48625b.host + ":" + _0x48625b.port);
      } catch (_0xc89a68) {
        console.log("代理配置错误: " + _0xc89a68.message);
      }
    }
    return new Promise(_0x5a7209 => {
      _0x38ea2d(_0x8ffd83, (_0x182669, _0x1f081b, _0x121005) => {
        if (_0x182669) {
          console.log("请求错误: " + _0x182669.message);
          this.isDevMode() && (console.log("错误类型: " + (_0x182669.code || "未知")), this._logErrorDetail(_0x182669.code));
          return _0x5a7209(null);
        }
        _0x1f081b && _0x1f081b.statusCode && _0x1f081b.statusCode !== 200 && (console.log("HTTP状态码错误: " + _0x1f081b.statusCode), this.isDevMode() && (console.log("响应头: " + JSON.stringify(_0x1f081b.headers, null, 2)), this._logStatusCodeDetail(_0x1f081b.statusCode)));
        try {
          const _0x5b2f26 = JSON.parse(_0x121005);
          _0x5a7209(_0x5b2f26);
        } catch (_0x24edcf) {
          console.log("JSON解析失败: " + _0x24edcf.message);
          this.isDevMode() && console.log("原始响应内容: " + _0x121005.substring(0, 200) + "...");
          _0x5a7209(_0x121005);
        }
      });
    });
  }
  static isDevMode() {
    const _0x3e957d = _0x4982e6.getEnv("DEV_MODE")[0];
    return _0x3e957d === "true" || _0x3e957d === "1";
  }
  static _logErrorDetail(_0x39e963) {
    const _0xc965ea = {
      ECONNREFUSED: "连接被拒绝，可能是服务器不可用或网络问题",
      ETIMEDOUT: "请求超时，网络连接缓慢",
      ENOTFOUND: "域名解析失败，检查网络连接"
    };
    _0xc965ea[_0x39e963] && console.log(_0xc965ea[_0x39e963]);
  }
  static _logStatusCodeDetail(_0x3c9723) {
    const _0x2ae2f3 = {
      404: "资源未找到，请检查URL是否正确",
      403: "访问被禁止，可能需要认证或权限不足",
      500: "服务器内部错误",
      "5xx": "服务器错误，请稍后重试"
    };
    if (_0x2ae2f3[_0x3c9723]) {
      console.log(_0x2ae2f3[_0x3c9723]);
    } else {
      _0x3c9723 >= 500 && console.log("服务器错误，请稍后重试");
    }
  }
}
class _0x15b000 {
  constructor(_0x19467f) {
    this.index = _0x19467f.index;
    this.salt = _0x19467f.salt;
    this.cookie = _0x19467f.cookie;
    this.proxyConfig = _0x19467f.proxyConfig || null;
    this.remark = _0x19467f.remark || "未获取昵称";
    this.accountTag = "账号" + this.index + "[" + this.remark + "]";
    this.minCoinThreshold = _0x19467f.minCoinThreshold || _0x4c4dcf.DEFAULT_MIN_COIN_THRESHOLD;
    this._extractCookieInfo();
    this.headers = this._buildBaseHeaders();
    this.query = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.path = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 25000;
    this.taskConfigs = this._initTaskConfigs();
    this.taskStats = this._initTaskStats();
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x4c4dcf.LOW_REWARD_THRESHOLD;
    this.lowRewardLimit = _0x4c4dcf.LOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = this._initTaskLimitStatus();
    this.totalRewards = 0;
    if (_0x59277b.isDevMode()) {
      const _0x39cb66 = Object.keys(this.taskConfigs).map(_0x2c820e => this.taskConfigs[_0x2c820e].name).join(",");
      console.log(this.accountTag + " 已启用任务: " + (_0x39cb66 || "无"));
      console.log(this.accountTag + " 金币阈值: " + this.minCoinThreshold);
    }
  }
  _extractCookieInfo() {
    try {
      const _0x5ed9ef = this.cookie;
      this.egid = this._matchCookieValue(_0x5ed9ef, "egid=([^;]+)");
      this.did = this._matchCookieValue(_0x5ed9ef, "did=([^;]+)");
      this.userId = this._matchCookieValue(_0x5ed9ef, "userId=([^;]+)");
      this.kuaishouApiSt = this._matchCookieValue(_0x5ed9ef, "kuaishou.api_st=([^;]+)");
      this.appver = this._matchCookieValue(_0x5ed9ef, "appver=([^;]+)");
      this.sys = this._matchCookieValue(_0x5ed9ef, "sys=([^;s]+)") || "ANDROID_15";
      (!this.egid || !this.did) && console.log(this.accountTag + " cookie格式错误，缺少必要信息（egid/did）");
    } catch (_0x3f0432) {
      console.log(this.accountTag + " 解析cookie失败: " + _0x3f0432.message);
    }
  }
  _matchCookieValue(_0x4db5cc, _0x5a9d21) {
    const _0x30cd3e = _0x4db5cc.match(new RegExp(_0x5a9d21));
    return _0x30cd3e ? _0x30cd3e[1] : "";
  }
  _buildBaseHeaders() {
    return {
      Host: "nebula.kuaishou.com",
      Connection: "keep-alive",
      "User-Agent": _0x4c4dcf.ANDROID_USER_AGENT,
      Cookie: this.cookie,
      "content-type": "application/json"
    };
  }
  _initTaskConfigs() {
    const _0x3b08d3 = new Set(this._getEnabledTaskTypes());
    const _0x5076a6 = new Set(this._getDisabledTaskTypes());
    const _0x224c0b = {};
    const _0x557f98 = ["cn1", "cn2", "cn3", "cn4", "cn5", "cn6", "see2", "box", "play", "see", "zb1", "box1", "box2", "look", "food", "search", "look1", "food1", "search1", "play1", "see1"];
    Object.keys(_0x4c4dcf.TASK_CONFIGS).forEach(_0xfa8530 => {
      const _0x343a56 = _0x4c4dcf.TASK_CONFIGS[_0xfa8530];
      const _0x928fc0 = _0x3b08d3.size > 0 ? _0x3b08d3.has(_0xfa8530) : _0x557f98.includes(_0xfa8530);
      _0x928fc0 && !_0x5076a6.has(_0xfa8530) && (_0x224c0b[_0xfa8530] = _0x343a56);
    });
    return _0x224c0b;
  }
  _getEnabledTaskTypes() {
    const _0x3f4d43 = _0x4982e6.getEnv("KS_TASKS_ENABLE") || _0x4982e6.getEnv("KS_TASKS_ENABLED") || [];
    return this._parseTaskList(_0x3f4d43);
  }
  _getDisabledTaskTypes() {
    const _0x5e26b3 = _0x4982e6.getEnv("KS_TASKS_DISABLE") || _0x4982e6.getEnv("KS_TASKS_DISABLED") || [];
    return this._parseTaskList(_0x5e26b3);
  }
  _parseTaskList(_0x49304a) {
    try {
      const _0x1fb605 = new RegExp("[,;\\s]+");
      return _0x49304a.flatMap(_0x2f5c2b => _0x2f5c2b.split(_0x1fb605).map(_0x5f398e => _0x5f398e.trim().toLowerCase()).filter(Boolean));
    } catch (_0x5129b6) {
      return [];
    }
  }
  _initTaskStats() {
    const _0x681d89 = {};
    Object.keys(this.taskConfigs).forEach(_0x2b2587 => {
      _0x681d89[_0x2b2587] = {
        success: 0,
        failed: 0,
        totalReward: 0
      };
    });
    return _0x681d89;
  }
  _initTaskLimitStatus() {
    const _0x28f800 = {};
    Object.keys(this.taskConfigs).forEach(_0x57e99f => {
      _0x28f800[_0x57e99f] = false;
    });
    return _0x28f800;
  }
  async _retryOperation(_0x1ec82c, _0x4128c6, _0x14bc39) {
    let _0x1a3f47 = 0;
    let _0x5cf3e2 = null;
    while (_0x1a3f47 < _0x14bc39) {
      try {
        const _0x54f788 = await _0x1ec82c();
        if (_0x54f788) {
          return _0x54f788;
        }
        _0x5cf3e2 = new Error(_0x4128c6 + "返回空结果");
      } catch (_0x10ac76) {
        _0x5cf3e2 = _0x10ac76;
        console.log(this.accountTag + " " + _0x4128c6 + "异常: " + _0x10ac76.message);
        _0x59277b.isDevMode() && _0x10ac76.stack && console.log("错误堆栈: " + _0x10ac76.stack.split("\n").slice(1, 4).join("\n"));
      }
      _0x1a3f47++;
      _0x1a3f47 < _0x14bc39 && (console.log(this.accountTag + " " + _0x4128c6 + "失败，重试" + _0x1a3f47 + "/" + _0x14bc39), await new Promise(_0x40f724 => setTimeout(_0x40f724, 3000)));
    }
    console.log(this.accountTag + " " + _0x4128c6 + "失败，已达到最大重试次数");
    if (_0x59277b.isDevMode() && _0x5cf3e2) {
      console.log("最终失败原因: " + _0x5cf3e2.message);
      if (_0x5cf3e2.code) {
        console.log("错误代码: " + _0x5cf3e2.code);
      }
    }
    return null;
  }
  async _pollQueueStatus(_0x4f9112, _0x25a288, _0x4347f9 = 60000, _0x55a11a = 2000) {
    const _0x399709 = Date.now();
    while (Date.now() - _0x399709 < _0x4347f9) {
      try {
        const _0xd9bb31 = {
          method: "get",
          url: "" + _0x25a288 + _0x4c4dcf.QUEUE_STATUS_PATH + "?queue_id=" + encodeURIComponent(_0x4f9112),
          headers: {
            "User-Agent": _0x4c4dcf.DEFAULT_USER_AGENT
          }
        };
        const _0x2088aa = await _0x59277b.makeRequest(_0xd9bb31);
        if (_0x2088aa && _0x2088aa.success) {
          if (_0x2088aa.status === "completed" || _0x2088aa.status === "processed") {
            return _0x2088aa;
          }
          if (_0x2088aa.status === "failed") {
            return _0x2088aa;
          }
        }
      } catch (_0x4b8dc3) {
        console.log(this.accountTag + " 队列状态查询异常: " + _0x4b8dc3.message);
      }
      await new Promise(_0x3b5cbc => setTimeout(_0x3b5cbc, _0x55a11a));
    }
    return {
      success: false,
      status: "failed",
      error: "queue_timeout"
    };
  }
  async _requestProxyWithQueue(_0x3f78d2) {
    try {
      const _0x238c62 = _0x4982e6.getEnv("km")[0];
      if (!_0x238c62) {
        console.log(this.accountTag + " 未配置卡密(ks_km)环境变量，无法请求加密服务");
        return null;
      }
      const _0x5d8b80 = _0x4c4dcf.VERSION_CHECK_URL;
      const _0x496df5 = {
        method: "post",
        url: "" + _0x5d8b80 + _0x4c4dcf.PROXY_API_PATH + "?card_key=" + encodeURIComponent(_0x238c62),
        headers: {
          "User-Agent": _0x4c4dcf.DEFAULT_USER_AGENT,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x3f78d2)
      };
      const _0x3d58cc = await _0x59277b.makeRequest(_0x496df5);
      if (!_0x3d58cc) {
        console.log(this.accountTag + " 加密代理服务无响应");
        return null;
      }
      if (_0x3d58cc.success) {
        if (!_0x3d58cc.status || _0x3d58cc.status === "processed" || _0x3d58cc.status === "completed") {
          return _0x3d58cc.data || _0x3d58cc;
        }
        if (_0x3d58cc.status === "queued" && _0x3d58cc.queue_id) {
          const _0x236719 = await this._pollQueueStatus(_0x3d58cc.queue_id, _0x5d8b80);
          if (_0x236719 && _0x236719.success && (_0x236719.status === "completed" || _0x236719.status === "processed")) {
            return _0x236719.data || _0x236719;
          }
          console.log(this.accountTag + " 加密队列处理失败: " + (_0x236719.error || _0x236719.message || _0x236719.status));
          return null;
        }
      }
      console.log(this.accountTag + " 加密代理返回失败: " + (_0x3d58cc.error || _0x3d58cc.message || _0x3d58cc.status || "未知错误"));
      return null;
    } catch (_0x21f0fb) {
      console.log(this.accountTag + " 加密代理请求异常: " + _0x21f0fb.message);
      return null;
    }
  }
  async _generateSignature(_0x328245, _0x425e95, _0x4eab20, _0x569777) {
    try {
      const _0x1ad4ed = "bizStr={\"businessId\":" + _0x569777.businessId + ",\"endTime\":" + this.endTime + ",\"extParams\":\"\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + _0x328245 + ",\"extInfo\":\"\",\"llsid\":" + _0x425e95 + ",\"requestSceneType\":" + _0x569777.requestSceneType + ",\"taskType\":" + _0x569777.taskType + ",\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":" + _0x569777.pageId + ",\"posId\":" + _0x569777.posId + ",\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + this.startTime + ",\"subPageId\":" + _0x569777.subPageId + "}&cs=false&client_key=2ac2a76d";
      const _0x1d9df0 = {
        urldata: this.query + "&" + _0x1ad4ed,
        api_client_salt: this.salt,
        urlpath: this.path
      };
      const _0x19cd62 = await this._requestProxyWithQueue(_0x1d9df0);
      if (_0x19cd62) {
        const _0x44d2fb = _0x19cd62.data || _0x19cd62;
        return {
          sig: _0x44d2fb.sig,
          sig3: _0x44d2fb.__NS_sig3,
          sigtoken: _0x44d2fb.__NStokensig,
          post: _0x1ad4ed
        };
      }
      return null;
    } catch (_0x270530) {
      console.log(this.accountTag + " 生成" + _0x569777.name + "签名异常: " + _0x270530.message);
      return null;
    }
  }
  async _generateSignature2(_0x47b0b2, _0x173d9f, _0x536aee, _0x116643) {
    try {
      const _0xce06c6 = {
        urlpath: _0x47b0b2,
        urldata: _0x173d9f,
        api_client_salt: _0x536aee,
        req_str: _0x116643
      };
      const _0xa21d30 = await this._requestProxyWithQueue(_0xce06c6);
      if (!_0xa21d30) {
        console.log(this.accountTag + " 签名生成失败");
        return null;
      }
      return _0xa21d30.data || _0xa21d30;
    } catch (_0x5be96c) {
      console.log(this.accountTag + " 生成签名异常: " + _0x5be96c.message);
      _0x59277b.isDevMode() && _0x5be96c.stack && console.log("错误堆栈: " + _0x5be96c.stack.split("\n").slice(1, 4).join("\n"));
      return null;
    }
  }
  async _getAdInfo(_0x496754) {
    try {
      const _0x2f96e1 = {
        method: "post",
        url: _0x4c4dcf.API_BASE_URL + "/rest/e/reward/mixed/ad",
        headers: {
          Host: "api.e.kuaishou.com",
          Connection: "keep-alive",
          "User-Agent": _0x4c4dcf.ANDROID_USER_AGENT,
          Cookie: "kuaishou_api_st=" + this.kuaishouApiSt,
          kaw: "MDHkM+9FrbzBSEAqyw6KYGqGa3b3Y2gIZq3YJZrGkTfaYzm10bLlDdGjxtTP/Vsn9qY6EtUMxCHt4jSsI+tFr9Ghm+r+KqHlnsOvBH0tCt4Ooik1wJGFzJpMJlsk/JeN79ww0w+eSy/M9oLfga/mji6Accpfu1wNXI1lYVZ3blsdkEud+hPR1c9Qj/CgplRmsM+Tmu37HcBisfMQFIszemGwXI2U+aRzBNCli/sJt3/RWyBFmtkwDIFoTyTZoMd0+TUA",
          kas: "0016df70b7d4e188b70eea1ecf158ad175"
        },
        form: {
          encData: "|encData|",
          sign: "|sign|",
          cs: "false",
          client_key: "2ac2a76d",
          videoModelCrowdTag: "1_100",
          os: "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          uQaTag: "66243#33333333338888888888#cmWns:21#swRs:79#swLdgl:-9#ecPp:59#cmNt:-0#cmHs:10#cmMnsl:-0#cmAu:-3"
        }
      };
      const _0x583d5a = this._buildDeviceParams();
      const _0x4f05dd = this._buildAdRequestParams(_0x496754);
      const _0x2bd303 = JSON.stringify(_0x4f05dd);
      const _0x316532 = {
        ..._0x583d5a,
        ..._0x2f96e1.form
      };
      const _0x141d09 = await this._generateSignature2("/rest/e/reward/mixed/ad", _0xaef41a.stringify(_0x316532), this.salt, Buffer.from(_0x2bd303).toString("base64"));
      if (!_0x141d09) {
        console.log(this.accountTag + " 生成签名失败，无法获取" + _0x496754.name + "信息");
        return null;
      }
      _0x583d5a.sig = _0x141d09.sig;
      _0x583d5a.__NS_sig3 = _0x141d09.__NS_sig3;
      _0x583d5a.__NS_xfalcon = "";
      _0x583d5a.__NStokensig = _0x141d09.__NStokensig;
      _0x2f96e1.form.encData = _0x141d09.encData;
      _0x2f96e1.form.sign = _0x141d09.sign;
      _0x2f96e1.url = _0x2f96e1.url + "?" + _0xaef41a.stringify(_0x583d5a);
      const _0x1ee63a = await _0x59277b.makeRequest(_0x2f96e1, this.proxyConfig);
      if (!_0x1ee63a) {
        console.log(this.accountTag + " 请求" + _0x496754.name + "接口失败，无响应");
        return null;
      }
      if (_0x1ee63a.errorMsg === "OK") {
        const _0x13bcc1 = Number(_0x1ee63a.feedType);
        const _0x346af7 = isNaN(_0x13bcc1) ? 1 : _0x13bcc1;
        const _0x325fc5 = _0x1ee63a.feeds?.[0]?.["ext_params"]?.["video"];
        const _0x5e4c2a = Number(_0x325fc5);
        const _0x23b08f = isNaN(_0x5e4c2a) ? 30000 : _0x5e4c2a;
        const _0x2a1ad4 = _0x23b08f / 1000;
        const _0xecd0ba = process.env.spsc !== undefined ? Number(process.env.spsc) : 60;
        const _0x40e782 = _0x1ee63a.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo || "{}";
        const _0x70fa2 = _0x1ee63a.feeds[0].ad.adDataV2.inspireAdInfo.inspirePersonalize.neoValue;
        if (!_0x1ee63a.feeds || !_0x1ee63a.feeds[0] || !_0x1ee63a.feeds[0].ad) {
          console.log(this.accountTag + " " + _0x496754.name + "响应数据格式错误");
          _0x59277b.isDevMode() && console.log("详细响应:", JSON.stringify(_0x1ee63a, null, 2));
          return null;
        }
        const _0x24f166 = _0x1ee63a.feeds[0].exp_tag.split("/")[1].split("_")[0];
        return {
          cid: _0x1ee63a.feeds[0].ad.creativeId,
          llsid: _0x24f166,
          mediaScene: "video",
          materialTime: _0x5e4c2a,
          adExtInfo: _0x40e782
        };
      } else {
        console.log(this.accountTag + " " + _0x496754.name + "接口返回错误");
        if (_0x1ee63a.errorMsg) {
          console.log("错误信息: " + _0x1ee63a.errorMsg);
        }
        if (_0x1ee63a.errorCode) {
          console.log("错误代码: " + _0x1ee63a.errorCode);
        }
        _0x59277b.isDevMode() && console.log("完整响应:", JSON.stringify(_0x1ee63a, null, 2));
        return null;
      }
    } catch (_0x3f7f6f) {
      console.log(this.accountTag + " 获取" + _0x496754.name + "信息异常: " + _0x3f7f6f.message);
      _0x59277b.isDevMode() && _0x3f7f6f.stack && console.log("错误堆栈: " + _0x3f7f6f.stack.split("\n").slice(1, 4).join("\n"));
      return null;
    }
  }
  _buildDeviceParams() {
    return {
      earphoneMode: "1",
      mod: "Xiaomi(23116PN5BC)",
      appver: this.appver,
      isp: "CUCC",
      language: "zh-cn",
      ud: this.userId,
      did_tag: "0",
      thermal: "10000",
      net: "WIFI",
      kcv: "1599",
      app: "0",
      kpf: "ANDROID_PHONE",
      bottom_navigation: "true",
      ver: "11.6",
      android_os: "0",
      boardPlatform: "pineapple",
      kpn: "NEBULA",
      newOc: "VIVO",
      androidApiLevel: "35",
      slh: "0",
      country_code: "cn",
      nbh: "0",
      hotfix_ver: "",
      did_gt: "1754845543387",
      keyconfig_state: "2",
      cdid_tag: "2",
      sys: this.sys,
      max_memory: "256",
      oc: "VIVO",
      sh: "2400",
      deviceBit: "0",
      browseType: "3",
      ddpi: "410",
      socName: "Qualcomm Snapdragon 8650",
      is_background: "0",
      c: "VIVO",
      sw: "1080",
      ftt: "",
      apptype: "22",
      abi: "arm64",
      userRecoBit: "0",
      device_abi: "arm64",
      totalMemory: "15160",
      grant_browse_type: "AUTHORIZED",
      iuid: "",
      sbh: "110",
      darkMode: "false"
    };
  }
  _buildAdRequestParams(_0x37474) {
    let _0x27e085;
    if (_0x37474.name == "搜索广告") {
      const _0x1b04ed = {
        openH5AdCount: 2,
        sessionLookedCompletedCount: "1",
        sessionType: "1",
        searchKey: "短剧小说",
        triggerType: "2",
        disableReportToast: "true",
        businessEnterAction: "7",
        neoParams: {
          pageId: 11101,
          subPageId: 100074584,
          posId: 96134,
          businessId: 7038,
          extParams: "4bbb1b590bd5b0a076e53168918c0d95cc3b96656eb0ef6bb4f9b880d793ce8f9c00509aeb71de0e7cfd6ac6cc02172547e5e134ffacc8e49d93bab38e7bc4b7b2e0f620019c7587f2d3c38aeabd632d7bcf07c56cb8059644be9d217937f37c",
          customData: {
            exitInfo: {
              toastDesc: null,
              toastImgUrl: null
            }
          },
          pendantType: 1,
          displayType: 2,
          singlePageId: 0,
          singleSubPageId: 0,
          channel: 0,
          countdownReport: true,
          themeType: 0,
          mixedAd: true,
          fullMixed: true,
          autoReport: true,
          fromTaskCenter: true,
          searchInspireSchemeInfo: {
            searchQuery: "短剧小说",
            searchSessionId: "MTc1NzM1NTM3ODcxNF9jbG91ZC0yMjY0MTc1LTEyMjE4NjYtMTA4NDc5Ny0yMDAtZGVwbG95LTg1OGI5NzVmNDYtbDlzYmxf5aW96LSnXzAuMDE0MDM1MzAwNjQ3MDc4MDM",
            enterSource: "ACT_renwu_ad_box_single_col"
          },
          amount: 2500
        }
      };
      const _0x2f3077 = JSON.stringify(_0x1b04ed.neoParams);
      const _0x4eb6d0 = Buffer.from(_0x2f3077).toString("base64");
      const _0xf3dba9 = {
        ..._0x1b04ed,
        neoParams: _0x4eb6d0
      };
      const _0xc239a9 = JSON.stringify(_0xf3dba9);
      _0x27e085 = _0xc239a9;
    } else {
      _0x27e085 = "{}";
    }
    let _0xf5f93b = {
      appInfo: {
        appId: "kuaishou_nebula",
        name: _0x4c4dcf.APP_NAME,
        packageName: "com.kuaishou.nebula",
        version: this.appver,
        versionCode: -1
      },
      deviceInfo: {
        oaid: "",
        osType: 1,
        osVersion: "15",
        language: "zh",
        deviceId: this.did,
        screenSize: {
          width: 1080,
          height: 2249
        },
        ftt: ""
      },
      networkInfo: {
        ip: "192.168.1.43",
        connectionType: 100
      },
      geoInfo: {
        latitude: 0,
        longitude: 0
      },
      userInfo: {
        userId: this.userId,
        age: 0,
        gender: ""
      },
      impInfo: [{
        pageId: _0x37474.pageId,
        subPageId: _0x37474.subPageId,
        action: 0,
        width: 0,
        height: 0,
        browseType: 3,
        impExtData: _0x27e085,
        mediaExtData: "{}"
      }]
    };
    return _0xf5f93b;
  }
  async _submitReport(_0x40f882, _0x531309, _0x456549, _0xb3c575, _0x55f2cd, _0x333b11) {
    try {
      const _0x435bb5 = {
        method: "post",
        url: _0x4c4dcf.API_BASE_URL + "/rest/r/ad/task/report?" + this.query + "&sig=" + _0x40f882 + "&__NS_sig3=" + _0x531309 + "&__NS_xfalcon=&__NStokensig=" + _0x456549,
        headers: {
          Host: "api.e.kuaishou.com",
          "User-Agent": _0x4c4dcf.ANDROID_USER_AGENT,
          Cookie: this.cookie,
          "Content-Type": "application/x-www-form-urlencoded",
          kaw: "1",
          kas: "0"
        },
        body: _0xb3c575
      };
      const _0x22170a = await _0x59277b.makeRequest(_0x435bb5, this.proxyConfig);
      if (!_0x22170a) {
        console.log(this.accountTag + " 提交" + _0x333b11.name + "报告失败，无响应");
        return {
          success: false,
          reward: 0
        };
      }
      if (_0x22170a.result === 1) {
        const _0x12914d = _0x22170a.data.neoAmount || 0;
        this.totalRewards += _0x12914d;
        console.log(this.accountTag + " [32m获得" + _0x12914d + "金币奖励！当前已累计获得" + this.totalRewards + "金币[0m");
        return {
          success: true,
          reward: _0x12914d
        };
      } else {
        if (_0x22170a.result === 415 || _0x22170a.result === 1003) {
          console.log(this.accountTag + " " + _0x333b11.name + "奖励失败，此任务已达上限");
          this.taskLimitReached[_0x55f2cd] = true;
          console.log(this.accountTag + " 跳过" + _0x333b11.name + "任务");
          return {
            success: false,
            reward: 0
          };
        } else {
          console.log(this.accountTag + " " + _0x333b11.name + "奖励失败，多次失败请先手动点击" + _0x333b11.name + "的广告是否正常");
          if (_0x22170a.result !== undefined) {
            console.log("返回结果码: " + _0x22170a.result);
          }
          if (_0x22170a.errorMsg) {
            console.log("错误信息: " + _0x22170a.errorMsg);
          }
          if (_0x22170a.errorCode) {
            console.log("错误代码: " + _0x22170a.errorCode);
          }
          if (_0x22170a.data) {
            console.log("返回数据: " + JSON.stringify(_0x22170a.data, null, 2));
          }
          _0x59277b.isDevMode() && (console.log("请求配置:", JSON.stringify(_0x435bb5, null, 2)), console.log("完整响应:", JSON.stringify(_0x22170a, null, 2)));
          return {
            success: false,
            reward: 0
          };
        }
      }
    } catch (_0x393201) {
      console.log(this.accountTag + " 提交" + _0x333b11.name + "报告异常: " + _0x393201.message);
      _0x59277b.isDevMode() && _0x393201.stack && console.log("错误堆栈: " + _0x393201.stack.split("\n").slice(1, 4).join("\n"));
      return {
        success: false,
        reward: 0
      };
    }
  }
  async _executeSearchTask(_0x1a19b8, _0x381e96) {
    try {
      const _0x4ac23f = await this._retryOperation(() => this._generateSignature(_0x1a19b8.cid, _0x1a19b8.llsid, "seek", _0x381e96), "生成" + _0x381e96.name + "签名", 10);
      if (!_0x4ac23f) {
        console.log(this.accountTag + " 生成" + _0x381e96.name + "签名失败");
        return false;
      }
      const _0x23f7c0 = "bizStr={\"businessId\":" + _0x381e96.businessId + ",\"endTime\":" + (Date.now() - 25000) + ",\"extParams\":\"\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + _0x1a19b8.cid + ",\"extInfo\":\"\",\"llsid\":" + _0x1a19b8.llsid + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":" + _0x381e96.pageId + ",\"posId\":" + _0x381e96.posId + ",\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + Date.now() + ",\"subPageId\":" + _0x381e96.subPageId + "}&cs=false&client_key=2ac2a76d";
      const _0x1b908a = {
        method: "post",
        url: _0x4c4dcf.API_BASE_URL + "/rest/e/reward/task/report?sig=" + _0x4ac23f.sig + "&__NS_sig3=" + _0x4ac23f.sig3 + "&__NS_xfalcon=&__NStokensig=" + _0x4ac23f.sigtoken,
        headers: {
          Host: "api.e.kuaishou.com",
          Connection: "keep-alive",
          "User-Agent": _0x4c4dcf.ANDROID_USER_AGENT,
          Cookie: "kuaishou_api_st=" + this.kuaishouApiSt,
          "page-code": "NEW_TASK_CENTER",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
        },
        body: _0x23f7c0
      };
      const _0x19bab3 = await _0x59277b.makeRequest(_0x1b908a, this.proxyConfig);
      if (!_0x19bab3) {
        console.log(this.accountTag + " " + _0x381e96.name + "提交报告失败，无响应");
        return false;
      }
      if (_0x19bab3.result === 1) {
        const _0x4a098f = _0x19bab3.data.neoAmount || 0;
        console.log(this.accountTag + " " + _0x381e96.name + "完成，获得" + _0x4a098f + "金币奖励！");
        console.log(this.accountTag + " " + _0x381e96.name + "返回值详情:");
        console.log(JSON.stringify(_0x19bab3, null, 2));
        const _0x48d872 = Math.floor(5001 * Math.random()) + 5000;
        console.log(this.accountTag + " 防黑号延迟：" + Math.round(_0x48d872 / 1000) + "秒");
        await new Promise(_0x2f4e5a => setTimeout(_0x2f4e5a, _0x48d872));
        return true;
      } else {
        if (_0x19bab3.result === 415 || _0x19bab3.result === 1003) {
          console.log(this.accountTag + " " + _0x381e96.name + "奖励失败，此任务已达上限");
          this.taskLimitReached.seek = true;
          console.log(this.accountTag + " 跳过" + _0x381e96.name + "任务");
          return false;
        } else {
          const _0x402c45 = _0x19bab3.message || _0x19bab3.error_msg || "未知错误";
          console.log(this.accountTag + " " + _0x381e96.name + "失败：" + _0x402c45);
          if (_0x19bab3.result !== undefined) {
            console.log("返回结果码: " + _0x19bab3.result);
          }
          _0x59277b.isDevMode() && (console.log("请求配置:", JSON.stringify(_0x1b908a, null, 2)), console.log("完整响应:", JSON.stringify(_0x19bab3, null, 2)));
          return false;
        }
      }
    } catch (_0x464eef) {
      console.log(this.accountTag + " " + _0x381e96.name + "执行异常: " + _0x464eef.message);
      _0x59277b.isDevMode() && _0x464eef.stack && console.log("错误堆栈: " + _0x464eef.stack.split("\n").slice(1, 4).join("\n"));
      return false;
    }
  }
  async executeTask(_0x4a4247) {
    const _0x195801 = this.taskConfigs[_0x4a4247];
    if (!_0x195801) {
      console.log(this.accountTag + " 未知任务类型: " + _0x4a4247);
      return false;
    }
    if (this.taskLimitReached[_0x4a4247]) {
      return false;
    }
    try {
      const _0x2b3150 = await this._retryOperation(() => this._getAdInfo(_0x195801), "获取" + _0x195801.name + "信息", _0x4c4dcf.MAX_RETRY_COUNT);
      if (!_0x2b3150) {
        console.log(this.accountTag + " 获取" + _0x195801.name + "信息失败");
        this.taskStats[_0x4a4247].failed++;
        return false;
      }
      if (_0x4a4247 === "seek") {
        const _0x592eb2 = await this._executeSearchTask(_0x2b3150, _0x195801);
        _0x592eb2 ? this.taskStats[_0x4a4247].success++ : this.taskStats[_0x4a4247].failed++;
        return _0x592eb2;
      }
      const _0x331123 = _0x4982e6.getRandomDelay();
      await new Promise(_0x11056 => setTimeout(_0x11056, _0x331123));
      const _0x68ebc4 = await this._retryOperation(() => this._generateSignature(_0x2b3150.cid, _0x2b3150.llsid, _0x4a4247, _0x195801), "生成" + _0x195801.name + "签名", 10);
      if (!_0x68ebc4) {
        console.log(this.accountTag + " 生成" + _0x195801.name + "签名失败");
        this.taskStats[_0x4a4247].failed++;
        return false;
      }
      const _0x41a64c = await this._retryOperation(() => this._submitReport(_0x68ebc4.sig, _0x68ebc4.sig3, _0x68ebc4.sigtoken, _0x68ebc4.post, _0x4a4247, _0x195801), "提交" + _0x195801.name + "报告", _0x4c4dcf.MAX_RETRY_COUNT);
      _0x41a64c.success ? (this.taskStats[_0x4a4247].success++, this.taskStats[_0x4a4247].totalReward += _0x41a64c.reward || 0, (_0x41a64c.reward || 0) <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (console.log(this.accountTag + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "金币，停止该账号所有任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0) : this.taskStats[_0x4a4247].failed++;
      return _0x41a64c.success;
    } catch (_0x3a621c) {
      console.log(this.accountTag + " " + _0x195801.name + "任务执行失败: " + _0x3a621c.message);
      this.taskStats[_0x4a4247].failed++;
      return false;
    }
  }
  async executeTaskSmart(_0x1a5208) {
    const _0x482523 = this.taskConfigs[_0x1a5208];
    if (!_0x482523) {
      console.log(this.accountTag + " 未知任务类型: " + _0x1a5208);
      return false;
    }
    if (this.taskLimitReached[_0x1a5208]) {
      return false;
    }
    const _0x457180 = this.taskStats[_0x1a5208];
    const _0x59e5e2 = _0x457180.success + _0x457180.failed;
    const _0x19a711 = _0x59e5e2 > 0 ? _0x457180.success / _0x59e5e2 : 1;
    let _0x49d5bc = 5;
    if (_0x19a711 < 0.3) {
      _0x49d5bc = 3;
    } else {
      if (_0x19a711 > 0.8) {
        _0x49d5bc = 1;
      }
    }
    try {
      const _0xf8a25f = await this._retryOperation(() => this._getAdInfo(_0x482523), "获取" + _0x482523.name + "信息", _0x49d5bc);
      if (!_0xf8a25f) {
        console.log(this.accountTag + " 获取" + _0x482523.name + "信息失败");
        this.taskStats[_0x1a5208].failed++;
        return false;
      }
      let _0x58a4f0 = _0x4982e6.getRandomDelay();
      if (_0x19a711 < 0.5) {
        _0x58a4f0 = Math.floor(_0x58a4f0 * 1.5);
      } else {
        if (_0x19a711 > 0.9) {
          _0x58a4f0 = Math.floor(_0x58a4f0 * 0.8);
        }
      }
      await new Promise(_0x3a01f3 => setTimeout(_0x3a01f3, _0x58a4f0));
      const _0x2b0293 = await this._retryOperation(() => this._generateSignature(_0xf8a25f.cid, _0xf8a25f.llsid, _0x1a5208, _0x482523), "生成" + _0x482523.name + "签名", Math.min(_0x49d5bc + 5, 15));
      if (!_0x2b0293) {
        console.log(this.accountTag + " 生成" + _0x482523.name + "签名失败");
        this.taskStats[_0x1a5208].failed++;
        return false;
      }
      const _0x4dc472 = await this._retryOperation(() => this._submitReport(_0x2b0293.sig, _0x2b0293.sig3, _0x2b0293.sigtoken, _0x2b0293.post, _0x1a5208, _0x482523), "提交" + _0x482523.name + "报告", _0x49d5bc);
      _0x4dc472.success ? (this.taskStats[_0x1a5208].success++, this.taskStats[_0x1a5208].totalReward += _0x4dc472.reward || 0, (_0x4dc472.reward || 0) <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (console.log(this.accountTag + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "金币，停止该账号所有任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0) : this.taskStats[_0x1a5208].failed++;
      return _0x4dc472.success;
    } catch (_0x181f6e) {
      console.log(this.accountTag + " " + _0x482523.name + "任务执行失败: " + _0x181f6e.message);
      this.taskStats[_0x1a5208].failed++;
      return false;
    }
  }
  _getTaskPriority(_0x1117be) {
    const _0x5df21e = this.taskStats[_0x1117be];
    const _0x222fbd = _0x5df21e.success + _0x5df21e.failed;
    const _0x342868 = _0x222fbd > 0 ? _0x5df21e.success / _0x222fbd : 0.5;
    const _0x1986e5 = _0x5df21e.success > 0 ? _0x5df21e.totalReward / _0x5df21e.success : 0;
    return _0x342868 * 0.6 + Math.min(_0x1986e5 / 100, 1) * 0.4;
  }
  getTaskExecutionOrder() {
    const _0xe3f3c0 = Object.keys(this.taskConfigs);
    if (_0xe3f3c0.length === 0) {
      return [];
    }
    return _0xe3f3c0.sort((_0x16f8b0, _0x2e8850) => {
      const _0x570a53 = this._getTaskPriority(_0x16f8b0);
      const _0x1c3833 = this._getTaskPriority(_0x2e8850);
      return _0x1c3833 - _0x570a53;
    });
  }
  async executeAllTasksByPriority() {
    const _0x5487a3 = this.getTaskExecutionOrder();
    if (_0x5487a3.length === 0) {
      console.log(this.accountTag + " 未启用任何任务，跳过执行");
      return {};
    }
    const _0x41532e = _0x5487a3.map(_0x37b021 => this.taskConfigs[_0x37b021].name || _0x37b021);
    const _0x4cbd88 = {};
    if (this.stopAllTasks) {
      console.log(this.accountTag + " 已被标记停止，跳过所有任务");
      return _0x4cbd88;
    }
    for (let _0x39785c = 0; _0x39785c < _0x5487a3.length; _0x39785c++) {
      const _0x5ac47a = _0x5487a3[_0x39785c];
      const _0x3cb74a = this.taskConfigs[_0x5ac47a];
      if (this.taskLimitReached[_0x5ac47a]) {
        _0x4cbd88[_0x5ac47a] = false;
        continue;
      }
      const _0xc996ba = await this.executeTaskSmart(_0x5ac47a);
      _0x4cbd88[_0x5ac47a] = _0xc996ba;
      if (this.stopAllTasks) {
        console.log(this.accountTag + " 已被标记停止，终止剩余任务");
        break;
      }
      if (_0x39785c !== _0x5487a3.length - 1) {
        const _0x48dff8 = Math.floor(2000 * Math.random()) + 3000;
      }
    }
    return _0x4cbd88;
  }
  async getAccountBasicInfo() {
    try {
      const _0x5d4be2 = {
        method: "get",
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        headers: {
          Host: "nebula.kuaishou.com",
          "User-Agent": _0x4c4dcf.ANDROID_USER_AGENT,
          Cookie: this.cookie,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      const _0x5c05ae = await _0x59277b.makeRequest(_0x5d4be2, this.proxyConfig);
      if (!_0x5c05ae) {
        console.log(this.accountTag + " 获取账号基本信息失败，无响应");
        return {
          success: false
        };
      }
      return _0x5c05ae.result === 1 ? {
        success: true,
        data: {
          totalCash: _0x5c05ae.data.totalCash,
          totalCoin: _0x5c05ae.data.totalCoin,
          allCash: _0x5c05ae.data.allCash,
          userData: _0x5c05ae.data.userData
        }
      } : (console.log(this.accountTag + " 获取账号基本信息失败"), {
        success: false
      });
    } catch (_0x1ff9d7) {
      console.log(this.accountTag + " 获取账号基本信息异常: " + _0x1ff9d7.message);
      _0x59277b.isDevMode() && _0x1ff9d7.stack && console.log("错误堆栈: " + _0x1ff9d7.stack.split("\n").slice(1, 4).join("\n"));
      return {
        success: false
      };
    }
  }
  async reportUserInfo(_0x578a47) {
    try {
      const _0x1a7692 = _0x4982e6.getEnv("km")[0];
      const _0x498d66 = {
        method: "post",
        url: "" + _0x4c4dcf.VERSION_CHECK_URL + _0x4c4dcf.USER_INFO_COLLECT_PATH,
        headers: {
          "Content-Type": "application/json",
          ...(_0x1a7692 ? {
            "X-Card-Key": _0x1a7692
          } : {})
        },
        body: JSON.stringify(_0x578a47)
      };
      await _0x59277b.makeRequest(_0x498d66);
      return {
        success: true
      };
    } catch (_0x17e6b1) {
      console.log(this.accountTag + " 用户信息上报异常: " + _0x17e6b1.message);
      return {
        success: false,
        error: _0x17e6b1.message
      };
    }
  }
  getTaskStats() {
    return JSON.parse(JSON.stringify(this.taskStats));
  }
  printTaskStats() {
    console.log(this.accountTag + " 任务执行统计:");
    Object.entries(this.taskStats).forEach(([_0x53eaec, _0x5cdadd]) => {
      const _0x8f11ce = this.taskConfigs[_0x53eaec].name || _0x53eaec;
      console.log("  " + _0x8f11ce + ": 成功" + _0x5cdadd.success + "次, 失败" + _0x5cdadd.failed + "次, 总奖励" + _0x5cdadd.totalReward + "金币");
    });
  }
  async executeFoodTask() {
    return this.executeTask("food");
  }
  async executeBoxTask() {
    return this.executeTask("box");
  }
  async executeLookAdTask() {
    return this.executeTask("look");
  }
  async executeFoodTaskSmart() {
    return this.executeTaskSmart("food");
  }
  async executeBoxTaskSmart() {
    return this.executeTaskSmart("box");
  }
  async executeLookAdTaskSmart() {
    return this.executeTaskSmart("look");
  }
}
class _0x4d2cf0 {
  static initAccountConfigs(_0x4fa50c, _0x2f7c31) {
    const _0x230437 = [];
    if (!_0x4fa50c || !_0x4fa50c.length) {
      return _0x230437;
    }
    let _0x125c30 = 0;
    for (const _0x1208cf of _0x4fa50c) {
      const _0x17dd9b = _0x1208cf.trim();
      if (!_0x17dd9b) {
        continue;
      }
      const _0x1a5acb = _0x17dd9b.split("#");
      if (_0x1a5acb.length < 3) {
        console.log("账号格式错误，跳过: " + _0x17dd9b);
        continue;
      }
      _0x125c30++;
      const _0x5bf433 = _0x1a5acb[0];
      const _0x2c066e = _0x1a5acb[1];
      const _0x4503c9 = _0x1a5acb[2];
      let _0x15e927 = null;
      _0x1a5acb.length >= 4 && (_0x15e927 = _0x1a5acb.slice(3).join("#"));
      let _0x3ff5a6 = null;
      _0x15e927 && _0x15e927.trim() && (_0x3ff5a6 = _0x4982e6.parseProxyConfig(_0x15e927.trim()), _0x3ff5a6 ? console.log(_0x5bf433 + " 配置代理: " + _0x3ff5a6.host + ":" + _0x3ff5a6.port) : console.log(_0x5bf433 + " 代理配置解析失败: " + _0x15e927));
      _0x230437.push({
        index: _0x125c30,
        remark: _0x5bf433,
        salt: _0x4503c9,
        cookie: _0x2c066e,
        proxyConfig: _0x3ff5a6,
        minCoinThreshold: _0x2f7c31
      });
    }
    console.log("共找到" + _0x230437.length + "个有效账号");
    return _0x230437;
  }
  static async runSingleAccountTask(_0x3c53ba, _0xd98727 = 100) {
    const {
      index: _0x40a85e,
      salt: _0x522a02,
      cookie: _0x46c574,
      proxyConfig: _0x24157f,
      remark: _0x1772a2
    } = _0x3c53ba;
    let _0x3b9538 = "账号" + _0x40a85e + "[" + (_0x1772a2 || "未获取备注") + "]";
    let _0x45ca00 = 0;
    let _0x1bf4b1 = 0;
    try {
      const _0x3a1195 = new _0x15b000({
        index: _0x40a85e,
        salt: _0x522a02,
        cookie: _0x46c574,
        proxyConfig: _0x24157f,
        remark: _0x3c53ba.remark,
        minCoinThreshold: _0x3c53ba.minCoinThreshold
      });
      const _0x1d50f3 = await _0x3a1195.getAccountBasicInfo();
      if (_0x1d50f3.success) {
        _0x45ca00 = _0x1d50f3.data.totalCoin || 0;
        _0x1bf4b1 = _0x1d50f3.data.allCash || 0;
        console.log(_0x3b9538 + " 初始金币: " + _0x45ca00 + " 初始余额: " + _0x1bf4b1);
        if (_0x45ca00 >= _0x3a1195.minCoinThreshold) {
          console.log(_0x3b9538 + " 初始金币(" + _0x45ca00 + ")已达到或超过阈值(" + _0x3a1195.minCoinThreshold + ")，停止所有任务流程");
          return {
            success: true,
            accountIndex: _0x40a85e,
            accountTag: _0x3b9538,
            stats: _0x3a1195.getTaskStats(),
            initialCoins: _0x45ca00,
            initialBalance: _0x1bf4b1,
            finalCoins: _0x45ca00,
            finalBalance: _0x1bf4b1,
            message: "初始金币达到阈值，未执行任务"
          };
        }
      } else {
        console.log(_0x3b9538 + " 无法获取账号基本信息，可能影响金币阈值判断");
      }
      console.log(_0x3b9538 + " 线程启动，开始执行任务（共" + _0xd98727 + "轮）");
      for (let _0xd0288 = 0; _0xd0288 < _0xd98727; _0xd0288++) {
        if (_0x3a1195.stopAllTasks) {
          break;
        }
        let _0x47c7e8 = false;
        let _0x33f266 = 0;
        while (!_0x47c7e8 && _0x33f266 < _0x4c4dcf.MAX_TASK_RETRY) {
          try {
            const _0x324da7 = _0x4982e6.getRandomDelay();
            const _0x2cbe56 = _0x33f266 > 0 ? "(重试" + _0x33f266 + "/" + _0x4c4dcf.MAX_TASK_RETRY + ")" : "";
            _0xd0288 + 1 != 1;
            const _0x631b14 = await _0x3a1195.executeAllTasksByPriority();
            const _0x49f7ba = Object.values(_0x631b14).some(Boolean);
            if (Object.keys(_0x631b14).length === 0) {
              console.log(_0x3b9538 + " 未启用任何任务，跳过该轮");
              _0x47c7e8 = true;
              break;
            }
            if (_0x49f7ba) {
              _0x47c7e8 = true;
            } else {
              _0x33f266++;
              if (_0x33f266 < _0x4c4dcf.MAX_TASK_RETRY) {
                const _0x5ab4d9 = Math.floor(3000 * Math.random()) + 10000;
                console.log(_0x3b9538 + " 第" + (_0xd0288 + 1) + "轮任务执行失败，" + (_0x4c4dcf.MAX_TASK_RETRY - _0x33f266) + "次重试机会剩余");
                console.log(_0x3b9538 + " 等待 " + Math.round(_0x5ab4d9 / 1000) + " 秒后重试...");
                await new Promise(_0x875067 => setTimeout(_0x875067, _0x5ab4d9));
              } else {
                console.log(_0x3b9538 + " 第" + (_0xd0288 + 1) + "轮任务执行失败，已达到最大重试次数(" + _0x4c4dcf.MAX_TASK_RETRY + ")");
              }
            }
          } catch (_0x28adf9) {
            _0x33f266++;
            console.log(_0x3b9538 + " 第" + (_0xd0288 + 1) + "轮任务执行异常: " + _0x28adf9.message);
            if (_0x3a1195.stopAllTasks) {
              console.log(_0x3b9538 + " 连续低奖励已触发停止，结束该账号所有任务");
              break;
            }
            if (_0x33f266 < _0x4c4dcf.MAX_TASK_RETRY) {
              const _0x9f4c07 = Math.floor(5000 * Math.random()) + 10000;
              console.log(_0x3b9538 + " 还有" + (_0x4c4dcf.MAX_TASK_RETRY - _0x33f266) + "次重试机会");
              console.log(_0x3b9538 + " 等待 " + Math.round(_0x9f4c07 / 1000) + " 秒后重试...");
              await new Promise(_0x2e6d2d => setTimeout(_0x2e6d2d, _0x9f4c07));
            } else {
              console.log(_0x3b9538 + " 第" + (_0xd0288 + 1) + "轮任务执行失败，已达到最大重试次数(" + _0x4c4dcf.MAX_TASK_RETRY + ")");
            }
          }
        }
        if (_0xd0288 < _0xd98727 - 1 && !_0x3a1195.stopAllTasks) {
          const _0x4360ea = Math.floor(5000 * Math.random()) + 10000;
        }
      }
      const _0x333d9c = await _0x3a1195.getAccountBasicInfo();
      let _0x4a5f9d = 0;
      let _0x4d855f = 0;
      _0x333d9c.success ? (_0x4a5f9d = _0x333d9c.data.totalCoin || 0, _0x4d855f = _0x333d9c.data.allCash || 0, console.log(_0x3b9538 + " 最终金币: " + _0x4a5f9d + " 最终余额: " + _0x4d855f)) : console.log(_0x3b9538 + " 无法获取最终金币和余额信息");
      _0x3a1195.printTaskStats();
      console.log(_0x3b9538 + " 所有任务执行完成");
      return {
        success: true,
        accountIndex: _0x40a85e,
        accountTag: _0x3b9538,
        stats: _0x3a1195.getTaskStats(),
        initialCoins: _0x45ca00,
        initialBalance: _0x1bf4b1,
        finalCoins: _0x4a5f9d,
        finalBalance: _0x4d855f
      };
    } catch (_0x24e3be) {
      console.log(_0x3b9538 + " 任务执行异常: " + _0x24e3be.message);
      return {
        success: false,
        accountIndex: _0x40a85e,
        accountTag: _0x3b9538,
        error: _0x24e3be.message,
        initialCoins: _0x45ca00,
        initialBalance: _0x1bf4b1,
        finalCoins: 0,
        finalBalance: 0
      };
    }
  }
  static async runConcurrentAccountTasks(_0x369cc3, _0x45670a = 100, _0x5a64cc = _0x4c4dcf.ksjsb_xc) {
    const _0x26f4b0 = new Array(_0x369cc3.length);
    let _0x221f40 = 0;
    const _0x5a4518 = Math.min(_0x5a64cc, _0x369cc3.length);
    const _0x130e70 = async () => {
      while (_0x221f40 < _0x369cc3.length) {
        const _0x2a090f = _0x221f40++;
        const _0x2fad9e = _0x369cc3[_0x2a090f];
        try {
          _0x26f4b0[_0x2a090f] = await this.runSingleAccountTask(_0x2fad9e, _0x45670a);
        } catch (_0x48d15b) {
          _0x26f4b0[_0x2a090f] = {
            success: false,
            accountIndex: _0x2fad9e.index,
            accountTag: "账号" + _0x2fad9e.index + "[执行异常]",
            error: "并发执行异常: " + _0x48d15b.message,
            initialCoins: 0,
            initialBalance: 0,
            finalCoins: 0,
            finalBalance: 0
          };
          console.log("账号" + _0x2fad9e.index + " 并发执行异常: " + _0x48d15b.message);
        }
      }
    };
    const _0x37d3f0 = Array.from({
      length: _0x5a4518
    }, () => _0x130e70());
    await Promise.all(_0x37d3f0);
    return _0x26f4b0;
  }
  static generateOverallStats(_0x434f9e) {
    const _0x28cabf = {};
    Object.keys(_0x4c4dcf.TASK_CONFIGS).forEach(_0x9a2c94 => {
      _0x28cabf[_0x9a2c94] = {
        success: 0,
        failed: 0,
        totalReward: 0
      };
    });
    _0x434f9e.forEach(_0x58b116 => {
      _0x58b116.success && _0x58b116.stats && Object.entries(_0x58b116.stats).forEach(([_0x4b91fb, _0x3bbd99]) => {
        _0x28cabf[_0x4b91fb] && (_0x28cabf[_0x4b91fb].success += _0x3bbd99.success || 0, _0x28cabf[_0x4b91fb].failed += _0x3bbd99.failed || 0, _0x28cabf[_0x4b91fb].totalReward += _0x3bbd99.totalReward || 0);
      });
    });
    return _0x28cabf;
  }
  static printOverallStats(_0x5c8e5b) {
    console.log("\n================== 总体任务统计 ==================");
    Object.entries(_0x5c8e5b).forEach(([_0x3c0f0e, _0x4d42c2]) => {
      const _0x5cc048 = _0x4c4dcf.TASK_CONFIGS[_0x3c0f0e];
      const _0x14be66 = _0x5cc048 ? _0x5cc048.name : _0x3c0f0e;
      const _0x1638e3 = _0x4d42c2.success + _0x4d42c2.failed;
      const _0xa316e3 = _0x1638e3 > 0 ? (_0x4d42c2.success / _0x1638e3 * 100).toFixed(1) : "0.0";
      console.log("- " + _0x14be66 + ":");
      console.log("  总执行: " + _0x1638e3 + "次, 成功: " + _0x4d42c2.success + "次, 失败: " + _0x4d42c2.failed + "次, 成功率: " + _0xa316e3 + "%");
      console.log("  总奖励: " + _0x4d42c2.totalReward + "金币");
    });
  }
  static printAccountBalanceTable(_0x1acba3) {
    console.log("\n================== 账号最终结果 ==================");
    let _0x4d5d95 = "账号标识".length;
    let _0x5778b3 = "当前金币".length;
    let _0x204d0b = "当前余额".length;
    _0x1acba3.forEach(_0x4a545c => {
      _0x4a545c.success && (_0x4d5d95 = Math.max(_0x4d5d95, _0x4a545c.accountTag.length, 10), _0x5778b3 = Math.max(_0x5778b3, _0x4a545c.finalCoins.toString().length, 6), _0x204d0b = Math.max(_0x204d0b, _0x4a545c.finalBalance.toString().length, 6));
    });
    const _0x1d6bc3 = (_0x5b2d6f, _0x55699c, _0x166ec4 = "left") => {
      const _0x44390c = String(_0x5b2d6f);
      if (_0x44390c.length > _0x55699c) {
        return _0x44390c.substring(0, _0x55699c - 2) + "..";
      }
      if (_0x166ec4 === "right") {
        return _0x44390c.padStart(_0x55699c);
      }
      return _0x44390c.padEnd(_0x55699c);
    };
    const _0x1dde41 = "+" + "-".repeat(_0x4d5d95 + 2) + "+" + "-".repeat(_0x5778b3 + 2) + "+" + "-".repeat(_0x204d0b + 2) + "+";
    console.log(_0x1dde41);
    console.log("| " + _0x1d6bc3("账号标识", _0x4d5d95) + " | " + _0x1d6bc3("当前金币", _0x5778b3, "right") + " | " + _0x1d6bc3("当前余额", _0x204d0b, "right") + " |");
    console.log(_0x1dde41);
    _0x1acba3.forEach(_0x285a8d => {
      _0x285a8d.success && console.log("| " + _0x1d6bc3(_0x285a8d.accountTag, _0x4d5d95) + " | " + _0x1d6bc3(_0x285a8d.finalCoins, _0x5778b3, "right") + " | " + _0x1d6bc3(_0x285a8d.finalBalance, _0x204d0b, "right") + " |");
    });
    console.log(_0x1dde41);
  }
}
class _0x19449a {
  static async checkVersionUpdate() {
    try {
      const _0x1bab5a = {
        method: "get",
        url: _0x4c4dcf.VERSION_CHECK_URL,
        headers: {
          "User-Agent": _0x4c4dcf.DEFAULT_USER_AGENT
        }
      };
      const _0x1b54e8 = await _0x59277b.makeRequest(_0x1bab5a);
      if (!_0x1b54e8 || typeof _0x1b54e8 !== "object") {
        console.log("版本检查失败：无响应，请联系tg：https://t.me/+pGksv96SJjVjZTQ1");
        return;
      }
      const _0x3d123e = _0x1b54e8.name || _0x4c4dcf.APP_NAME;
      const _0x645c04 = _0x1b54e8.latest_version || "";
      const _0x4d2afc = _0x1b54e8.release_notes || "";
      const _0x51cc68 = _0x1b54e8.notes || "";
      if (!_0x645c04) {
        console.log("版本检查失败：缺少 latest_version 字段");
        return;
      }
      const _0xa6712 = _0x4982e6.compareVersion(_0x4c4dcf.CURRENT_VERSION, _0x645c04);
      if (_0xa6712 < 0) {
        console.log(_0x3d123e + " 发现新版本 v" + _0x645c04 + "（当前 v" + _0x4c4dcf.CURRENT_VERSION + "）");
        if (_0x4d2afc) {
          console.log("更新说明: " + _0x4d2afc);
        }
      } else {
        _0xa6712 > 0 ? console.log(_0x3d123e + " 当前版本 v" + _0x4c4dcf.CURRENT_VERSION + " 新于远端 v" + _0x645c04) : console.log(_0x3d123e + " 已是最新版本 v" + _0x4c4dcf.CURRENT_VERSION);
      }
      if (_0x51cc68) {
        console.log(_0x51cc68);
      }
    } catch (_0x4dfa7d) {
      console.log("版本检查异常：" + _0x4dfa7d.message + "，不明错误，请联系tg：https://t.me/+pGksv96SJjVjZTQ1");
    }
  }
}
async function _0x2a7c08() {
  console.log("\n================== 快手极速版启动10.28 ==================\n");
  try {
    _0x3899ea();
    const _0x3d4771 = _0x4982e6.getEnv("ksck");
    if (!_0x3d4771.length) {
      console.log("未找到 ksck 账号环境变量，请检查环境变量");
      console.log("青龙面板格式要求：salt#cookie 或 salt#cookie#代理配置，多账号会自动用 & 分隔");
      console.log("代理配置格式: 地址|端口|账户|密码 或 地址:端口");
      return;
    }
    const _0x10d3b9 = _0x4982e6.getEnv("MIN_COIN_THRESHOLD")[0];
    const _0x5d60ac = _0x10d3b9 ? parseInt(_0x10d3b9, 10) : _0x4c4dcf.DEFAULT_MIN_COIN_THRESHOLD;
    (isNaN(_0x5d60ac) || _0x5d60ac < 0) && (console.log("金币阈值设置无效: " + _0x10d3b9 + "，使用默认值 " + _0x4c4dcf.DEFAULT_MIN_COIN_THRESHOLD), _0x5d60ac = _0x4c4dcf.DEFAULT_MIN_COIN_THRESHOLD);
    const _0x4657b5 = _0x4d2cf0.initAccountConfigs(_0x3d4771, _0x5d60ac);
    if (_0x4657b5.length === 0) {
      console.log("未解析到有效账号，程序退出");
      return;
    }
    const _0x5ea1f2 = parseInt(_0x4982e6.getEnv("ksjsb_xc")[0] || _0x4982e6.getEnv("ksjsb_xc")[0] || _0x4c4dcf.ksjsb_xc, 10) || _0x4c4dcf.ksjsb_xc;
    const _0x40c4ff = parseInt(_0x4982e6.getEnv("TASK_ROUNDS")[0] || "99999", 99999) || 99999;
    console.log("\n运行配置：");
    console.log("- 最大并发账号数: [32m" + _0x5ea1f2 + "[0m");
    console.log("- 每账号任务轮次: [32m" + _0x40c4ff + "[0m");
    console.log("- 初始金币阈值: [32m" + _0x5d60ac + "[0m（达到或超过此值将停止任务）");
    console.log("\n        [32m* ksck账号环境变量，格式为: 备注#ck#salt 或 备注#ck#salt#代理配置\n        * km卡密变量\n        * TASK_ROUNDS运行任务次数变量，不填默认为10次\n        * MIN_COIN_THRESHOLD初始金币阈值变量，不填默认为600000\n        * spsc 跳广告变量，墨粉60秒\n        * 宝箱广告：box\n        * 看广告得金币：look\n        * 看广告得金币[追加]：looks\n        * 饭补广告：food\n        * 搜索广告：seek\n        * 默认程序是全部启动\n        * 启用看广告得金币和饭补广告：KS_TASKS_ENABLE=look,food\n        * 启用看广告得金币和搜索广告：KS_TASKS_ENABLE=look,seek\n        * 同时禁用宝箱和看广告任务：KS_TASKS_DISABLE=box,look[0m\n        ");
    console.log("代理配置格式: 地址|端口|账户|密码 或 地址:端口");
    console.log("多账号用换行符分隔，不要有空格");
    const _0x1422c9 = await _0x4d2cf0.runConcurrentAccountTasks(_0x4657b5, _0x40c4ff, _0x5ea1f2);
    const _0x3627dc = _0x4d2cf0.generateOverallStats(_0x1422c9);
    _0x4d2cf0.printOverallStats(_0x3627dc);
    _0x4d2cf0.printAccountBalanceTable(_0x1422c9);
    process.exit(0);
  } catch (_0x545106) {
    console.log("程序执行异常:", _0x545106.message);
    process.exit(1);
  }
}
const _0x441dc0 = new _0x2530e3(_0x4c4dcf.TASK_LOGGER_NAME);
(async () => {
  try {
    await _0x2a7c08();
  } catch (_0x247e22) {
    console.log("初始化失败，", _0x247e22);
  } finally {
    _0x441dc0.done();
  }
})().catch(_0x3bc1e2 => console.log(_0x3bc1e2));
module.exports = {
  runAccountTask: _0x4d2cf0.runSingleAccountTask,
  KuaishouAdTaskWorker: _0x15b000,
  getRandomDelay: _0x4982e6.getRandomDelay,
  makeRequest: _0x59277b.makeRequest,
  parseProxyConfig: _0x4982e6.parseProxyConfig
};