//Thu Oct 16 2025 18:48:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x42c113 = require("fs"),
  _0x5c7e87 = require("path"),
  _0x462e78 = require("child_process");
(!process.env.ptkm || process.env.ptkm.trim() === "") && (console.log("❌ 未检测到 ptkm 环境变量，请先在环境变量中新增 ptkm 变量（普通版卡密）"), process.exit(1));
function _0x427aa2(_0x4366d0, _0x25b637 = "") {
  try {
    require.resolve(_0x4366d0);
    console.log("[依赖检查] " + _0x4366d0 + " 已安装.");
  } catch (_0xc391b7) {
    console.log("[依赖检查] " + _0x4366d0 + " 缺失，正在自动安装" + (_0x25b637 ? " (" + _0x25b637 + ")" : "") + "...");
    try {
      _0x462e78.execSync("npm install " + _0x4366d0 + _0x25b637, {
        "stdio": "inherit"
      });
      console.log("[依赖修补] " + _0x4366d0 + " 安装成功，继续运行.");
    } catch (_0x58130d) {
      console.error("[依赖修补失败] 无法安装 " + _0x4366d0 + ": " + _0x58130d.message);
      process.exit(1);
    }
  }
}
const _0x3c71b8 = process.versions.node,
  [_0x4a8cdb, _0x83dc0b] = _0x3c71b8.split(".").map(Number);
console.log("[Node.js 版本检测] 当前版本: " + _0x3c71b8 + " (major: " + _0x4a8cdb + ", minor: " + _0x83dc0b + ")");
let _0x1c090b = "",
  _0x4751e4 = "";
if (_0x4a8cdb >= 18) console.log("[Node.js 版本兼容] Node.js 18+ 检测到，使用 request 默认版本（若有警告，可忽略或升级脚本）"), process.noDeprecation = true;else _0x4a8cdb < 14 ? (_0x4751e4 = "@^5.0.0", console.log("[Node.js 版本兼容] Node.js < 14 检测到，使用 socks-proxy-agent 旧版以兼容.")) : console.log("[Node.js 版本兼容] Node.js 14-17 检测到，使用默认依赖版本.");
_0x427aa2("request", _0x1c090b);
_0x427aa2("socks-proxy-agent", _0x4751e4);
const _0x2f07e7 = require("request"),
  _0x2e836d = require("querystring"),
  {
    SocksProxyAgent: _0x3e73bb
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function _0x562ad4() {
  const _0x225dbd = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x225dbd[Math.floor(Math.random() * _0x225dbd.length)];
}
const _0x273e0d = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function _0x595bd3(_0x5d8f38, _0x2c1602) {
  const _0x510624 = parseInt(process.env[_0x5d8f38], 10);
  return isNaN(_0x510624) ? _0x2c1602 : _0x510624;
}
const _0x2f6c13 = _0x595bd3("KSLOW_REWARD_THRESHOLD", 10),
  _0x5049e7 = _0x595bd3("KSROUNDS", 35),
  _0x51f3be = _0x595bd3("KSCOIN_LIMIT", 500000),
  _0x33e15e = _0x595bd3("KSLOW_REWARD_LIMIT", 3);
function _0x209634() {
  const _0x2c68c2 = process.env.Task;
  if (!_0x2c68c2) {
    console.log("未设置Task环境变量，将执行所有任务 (food, box, look)");
    return ["food", "box", "look"];
  }
  const _0x26f294 = _0x2c68c2.split(",").map(_0xe28363 => _0xe28363.trim().toLowerCase()).filter(Boolean),
    _0x9201d6 = ["food", "box", "look"],
    _0x3432d8 = _0x26f294.filter(_0x129e8a => _0x9201d6.includes(_0x129e8a));
  if (_0x3432d8.length === 0) {
    console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)");
    return ["food", "box", "look"];
  }
  console.log("从Task环境变量中解析到要执行的任务: " + _0x3432d8.join(", "));
  return _0x3432d8;
}
function _0x7a72e1() {
  const _0x4f335d = [],
    _0x3b6249 = new Set();
  if (process.env.ksck) {
    {
      const ksckValue = process.env.ksck,
        _0x14f679 = ksckValue.split("&").map(_0x4fac55 => _0x4fac55.trim()).filter(Boolean);
      _0x4f335d.push(..._0x14f679);
    }
  }
  for (let _0x1aefa2 = 1; _0x1aefa2 <= 666; _0x1aefa2++) {
    const ksckKey = "ksck" + _0x1aefa2;
    if (process.env[ksckKey]) {
      {
        const ksckValue = process.env[ksckKey],
          _0x1c84e6 = ksckValue.split("&").map(_0x2bdf7a => _0x2bdf7a.trim()).filter(Boolean);
        _0x4f335d.push(..._0x1c84e6);
      }
    }
  }
  const _0x18390a = [];
  for (const _0x3cde11 of _0x4f335d) {
    !_0x3b6249.has(_0x3cde11) && (_0x3b6249.add(_0x3cde11), _0x18390a.push(_0x3cde11));
  }
  console.log("从ksck及ksck1到ksck666环境变量中解析到 " + _0x18390a.length + " 个唯一配置");
  return _0x18390a;
}
const _0x11ef0d = _0x7a72e1(),
  _0x455a8 = _0x11ef0d.length,
  _0x61f184 = _0x209634();
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊普通版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("================🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + _0x455a8 + "个账号");
console.log("🎯 将执行以下任务：" + _0x61f184.join(", "));
console.log("🎯 配置参数：轮数=" + _0x5049e7 + ", 金币上限=" + _0x51f3be + ", 低奖励阈值=" + _0x2f6c13 + ", 连续低奖励上限=" + _0x33e15e);
_0x455a8 > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + _0x455a8 + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
const _0x212fbd = "http://110.42.98.174:32081",
  _0x54d635 = _0x212fbd + "/sign1.php",
  _0x1278e9 = _0x212fbd + "/queue_status";
function _0x4d73d9() {
  try {
    const _0x5f1bf2 = _0x507663 => {
        const _0x17ca7c = "0123456789abcdef";
        let _0x4f0124 = "";
        for (let _0x4378e6 = 0; _0x4378e6 < _0x507663; _0x4378e6++) {
          _0x4f0124 += _0x17ca7c.charAt(Math.floor(Math.random() * _0x17ca7c.length));
        }
        return _0x4f0124;
      },
      _0xadc819 = _0x5f1bf2(16),
      _0xb9ae31 = "ANDROID_" + _0xadc819;
    return _0xb9ae31;
  } catch (_0x2919f1) {
    {
      console.log("生成did失败: " + _0x2919f1.message);
      const _0xea4b7d = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0xea4b7d.substring(0, 16);
    }
  }
}
async function _0x19ef7f(_0x57b089, _0x4e2c15 = null, _0x232f6f = "Unknown Request") {
  const _0x4550ba = {
    ..._0x57b089
  };
  if (_0x4e2c15) try {
    _0x4550ba.agent = new _0x3e73bb(_0x4e2c15);
    if (_0x273e0d) {}
  } catch (_0x2acb75) {
    console.log("[错误] " + _0x232f6f + " 代理URL无效(" + _0x2acb75.message + ")，尝试直连模式");
    if (_0x273e0d) {
      console.log("[调试] 代理无效，自动切换到直连模式");
    }
  } else {
    _0x273e0d && console.log("[调试] 未配置代理，使用直连模式");
  }
  if (_0x273e0d) {
    const _0x52ae6b = _0x4550ba.method || "GET";
  }
  return new Promise(_0x339dba => {
    _0x2f07e7(_0x4550ba, (_0x363f7b, _0x3b410b, _0x5d235f) => {
      {
        if (_0x363f7b) {
          {
            if (_0x363f7b.name === "AggregateError" && Array.isArray(_0x363f7b.errors)) console.log("[调试] " + _0x232f6f + " 请求错误: AggregateError\n" + _0x363f7b.errors.map((_0x46cd30, _0x27e47b) => "  [" + _0x27e47b + "] " + (_0x46cd30?.["message"] || _0x46cd30)).join("\n"));else {}
            return _0x339dba({
              "response": null,
              "body": null
            });
          }
        }
        if (!_0x3b410b || _0x3b410b.statusCode !== 200) {
          {
            const _0x1e5022 = _0x3b410b ? _0x3b410b.statusCode : "无响应";
            return _0x339dba({
              "response": _0x3b410b,
              "body": null
            });
          }
        }
        try {
          _0x339dba({
            "response": _0x3b410b,
            "body": JSON.parse(_0x5d235f)
          });
        } catch {
          _0x339dba({
            "response": _0x3b410b,
            "body": _0x5d235f
          });
        }
      }
    });
  });
}
async function _0x1f3e39(_0x1bad43, _0x2510b4 = "代理连通性检测") {
  if (!_0x1bad43) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  const {
    response: _0x24759b,
    body: _0x368154
  } = await _0x19ef7f({
    "method": "GET",
    "url": "https://www.baidu.com",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x1bad43, _0x2510b4 + " → baidu.com");
  if (!_0x24759b || _0x24759b.statusCode !== 200) {
    return {
      "ok": false,
      "msg": "❌ 无法通过代理访问 baidu.com，状态码: " + (_0x24759b?.["statusCode"] || "无响应"),
      "ip": ""
    };
  }
  const {
      response: _0x9d078a,
      body: _0x310186
    } = await _0x19ef7f({
      "method": "GET",
      "url": "https://api.ipify.org?format=json",
      "headers": {
        "User-Agent": "ProxyTester/1.0"
      },
      "timeout": 8000
    }, _0x1bad43, _0x2510b4 + " → ipify.org"),
    _0x59c6b1 = _0x310186?.["ip"] || "未知";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，成功访问 baidu.com，出口IP: " + _0x59c6b1,
    "ip": _0x59c6b1
  };
}
const _0xca8a18 = new Set();
async function _0x15773d(_0x59b31e, _0x20f72a, _0x57a0be = "?") {
  const _0x1b08be = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
    {
      response: _0x4c03af,
      body: _0xef8f8a
    } = await _0x19ef7f({
      "method": "GET",
      "url": _0x1b08be,
      "headers": {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x59b31e,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x20f72a, "账号[" + _0x57a0be + "] 获取基本信息");
  if (_0xef8f8a && _0xef8f8a.result === 1 && _0xef8f8a.data) return {
    "nickname": _0xef8f8a.data.userData?.["nickname"] || _0x57a0be,
    "totalCoin": _0xef8f8a.data.coinAmount ?? null,
    "allCash": _0xef8f8a.data.cashAmountDisplay ?? null
  };
  return null;
}
function _0x5d4142(_0x3aefe8, _0x47c8f5) {
  _0x3aefe8 = String(_0x3aefe8);
  if (_0x3aefe8.length >= _0x47c8f5) return _0x3aefe8.substring(0, _0x47c8f5);
  const _0x342383 = _0x47c8f5 - _0x3aefe8.length,
    _0x88c1de = Math.floor(_0x342383 / 2),
    _0x1f5e40 = _0x342383 - _0x88c1de;
  return " ".repeat(_0x88c1de) + _0x3aefe8 + " ".repeat(_0x1f5e40);
}
class _0x33cd33 {
  constructor({
    index: _0x43ddfc,
    salt: _0x2e0f82,
    cookie: _0x16572e,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x43ddfc;
    this.salt = _0x2e0f82;
    this.cookie = _0x16572e;
    this.nickname = nickname || "账号" + _0x43ddfc;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x51f3be;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 604,
        "posId": 20347,
        "subPageId": 100024063,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "看广告得金币1",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x48e5f5 => {
      this.taskConfigs[_0x48e5f5] && (this.taskStats[_0x48e5f5] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x2f6c13;
    this.lowRewardLimit = _0x33e15e;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x38f5c7 => {
      this.taskConfigs[_0x38f5c7] && (this.taskLimitReached[_0x38f5c7] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x363197 = await _0x15773d(this.cookie, this.proxyUrl, this.index);
      if (_0x363197 && _0x363197.totalCoin) {
        const _0x57430b = parseInt(_0x363197.totalCoin);
        if (_0x57430b >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x57430b + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x27793c) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x27793c.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x1f98b1 = this.cookie.match(/egid=([^;]+)/),
          _0x20e3ce = this.cookie.match(/did=([^;]+)/),
          _0x18970d = this.cookie.match(/userId=([^;]+)/),
          _0x2ed7a5 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x1ece4d = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x1f98b1 ? _0x1f98b1[1] : "";
        this.did = _0x20e3ce ? _0x20e3ce[1] : "";
        this.userId = _0x18970d ? _0x18970d[1] : "";
        this.kuaishouApiSt = _0x2ed7a5 ? _0x2ed7a5[1] : "";
        this.appver = _0x1ece4d ? _0x1ece4d[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x4df74a) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x4df74a.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x49c704, _0x2e99bb] of Object.entries(this.taskStats)) {
      const _0x112090 = this.taskConfigs[_0x49c704].name;
      console.log("  " + _0x112090 + ": 成功" + _0x2e99bb.success + "次, 失败" + _0x2e99bb.failed + "次, 总奖励" + _0x2e99bb.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x56db0a, _0x5119d3, _0x1c8ed6 = 3, _0x39e10b = 2000) {
    let _0xdf98e4 = 0,
      _0x1f275e = null;
    while (_0xdf98e4 < _0x1c8ed6) {
      try {
        {
          const _0x330c4e = await _0x56db0a();
          if (_0x330c4e) return _0x330c4e;
          _0x1f275e = new Error(_0x5119d3 + " 返回空结果");
        }
      } catch (_0x2c7c04) {
        _0x1f275e = _0x2c7c04;
        console.log("账号[" + this.nickname + "] " + _0x5119d3 + " 异常: " + _0x2c7c04.message);
      }
      _0xdf98e4++;
      _0xdf98e4 < _0x1c8ed6 && (console.log("账号[" + this.nickname + "] " + _0x5119d3 + " 失败，重试 " + _0xdf98e4 + "/" + _0x1c8ed6), await new Promise(_0x492672 => setTimeout(_0x492672, _0x39e10b)));
    }
    if (_0x273e0d && _0x1f275e) {}
    return null;
  }
  async ["getAdInfo"](_0x423d8a) {
    try {
      {
        const _0x138b47 = "/rest/e/reward/mixed/ad",
          _0x1a98f6 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "3c2cd3f3",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x2f9506 = {
            "earphoneMode": "1",
            "mod": "Xiaomi(23116PN5BC)",
            "appver": this.appver,
            "isp": "CUCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "11.6",
            "android_os": "0",
            "boardPlatform": "pineapple",
            "kpn": "KUAISHOU",
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": "ANDROID_15",
            "sw": "1080",
            "sh": "2400",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0x2691ec = {
            "appInfo": {
              "appId": "kuaishou",
              "name": "快手",
              "packageName": "com.smile.gifmaker",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 100011251,
              "subPageId": _0x423d8a.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x579f56 = Buffer.from(JSON.stringify(_0x2691ec)).toString("base64"),
          _0x22df73 = _0x2e836d.stringify(_0x2f9506) + "&" + _0x2e836d.stringify(_0x1a98f6),
          _0x4ee498 = await this.generateSignature2(_0x138b47, _0x22df73, this.salt, _0x579f56);
        if (!_0x4ee498) return console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x423d8a.name), null;
        const _0x2faa7d = {
          ..._0x2f9506,
          "sig": _0x4ee498.sig,
          "__NS_sig3": _0x4ee498.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x4ee498.__NStokensig
        };
        _0x1a98f6.encData = _0x4ee498.encData;
        _0x1a98f6.sign = _0x4ee498.sign;
        const _0x262fd4 = "https://api.e.kuaishou.com" + _0x138b47 + "?" + _0x2e836d.stringify(_0x2faa7d),
          {
            response: _0x3e6554,
            body: _0x4ba9a9
          } = await _0x19ef7f({
            "method": "POST",
            "url": _0x262fd4,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x1a98f6,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x4ba9a9) return null;
        if (_0x4ba9a9.errorMsg === "OK" && _0x4ba9a9.feeds && _0x4ba9a9.feeds[0] && _0x4ba9a9.feeds[0].ad) {
          {
            const _0x30ec17 = _0x4ba9a9.feeds[0].caption || _0x4ba9a9.feeds[0].ad?.["caption"] || "";
            _0x30ec17 && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x30ec17);
            const _0x47e14f = _0x4ba9a9.feeds[0].exp_tag || "",
              _0x39dc31 = _0x47e14f.split("/")[1]?.["split"]("_")?.[0] || "";
            return {
              "cid": _0x4ba9a9.feeds[0].ad.creativeId,
              "llsid": _0x39dc31
            };
          }
        }
        if (_0x273e0d) {}
        return null;
      }
    } catch (_0x2575d5) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x2575d5.message);
      return null;
    }
  }
  async ["generateSignature"](_0x4d3827, _0x3b4fc8, _0x16b400, _0x179a12) {
    try {
      const _0x3e694e = JSON.stringify({
          "businessId": _0x179a12.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x4d3827,
            "extInfo": "",
            "llsid": _0x3b4fc8,
            "requestSceneType": _0x179a12.requestSceneType,
            "taskType": _0x179a12.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 100011251,
          "posId": _0x179a12.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x179a12.subPageId
        }),
        _0x50de96 = "bizStr=" + encodeURIComponent(_0x3e694e) + "&cs=false&client_key=3c2cd3f3&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x1962d0 = this.queryParams + "&" + _0x50de96,
        _0x1e3af3 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "urldata": _0x1962d0,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "] 生成报告签名");
      if (!_0x1e3af3 || !_0x1e3af3.data) return null;
      return {
        "sig": _0x1e3af3.data.sig,
        "sig3": _0x1e3af3.data.__NS_sig3,
        "sigtoken": _0x1e3af3.data.__NStokensig,
        "post": _0x50de96
      };
    } catch (_0x10c907) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x10c907.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x140884, _0x42f95e, _0xfcf42f, _0x10e814) {
    const _0x128478 = await this.requestSignService({
      "urlpath": _0x140884,
      "urldata": _0x42f95e,
      "api_client_salt": _0xfcf42f,
      "req_str": _0x10e814
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x128478) return null;
    return _0x128478.data || _0x128478;
  }
  async ["submitReport"](_0x320c85, _0x19ae82, _0x4e9273, _0x55ce0c, _0x1332af, _0x2e05eb) {
    try {
      const _0x1f9b45 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x320c85 + "&__NS_sig3=" + _0x19ae82 + "&__NS_xfalcon=&__NStokensig=" + _0x4e9273),
        {
          response: _0x509ced,
          body: _0x4286c1
        } = await _0x19ef7f({
          "method": "POST",
          "url": _0x1f9b45,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x55ce0c,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
      if (!_0x4286c1) return {
        "success": false,
        "reward": 0
      };
      if (_0x4286c1.result === 1) {
        {
          const _0x38b9ae = _0x4286c1.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "] " + _0x2e05eb.name + "获得" + _0x38b9ae + "金币奖励！");
          if (_0x38b9ae <= this.lowRewardThreshold) this.lowRewardStreak++, this.did = _0x4d73d9(), console.log("⚠️ 账号[" + this.nickname + "] 金币奖励(" + _0x38b9ae + ")低于阈值(" + this.lowRewardThreshold + ")，模拟下载应用提升权重，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);else {
            this.lowRewardStreak = 0;
          }
          return {
            "success": true,
            "reward": _0x38b9ae
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x4286c1.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0x2e05eb.name + " 已达上限"), this.taskLimitReached[_0x1332af] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "] " + _0x2e05eb.name + " 奖励失败，result=" + _0x4286c1.result + " msg=" + (_0x4286c1.data || ""));
      if (_0x273e0d) {}
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0xc34619) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0xc34619.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x41a63f, _0x12e024) {
    const _0x205ef4 = (process.env.ptkm || "").trim();
    if (!_0x205ef4) return console.log("❌ 账号[" + this.nickname + "] 签名失败: 未提供卡密"), null;
    const {
      response: _0x39e4c5,
      body: _0x5676e6
    } = await _0x19ef7f({
      "method": "POST",
      "url": _0x54d635 + "?card_key=" + encodeURIComponent(_0x205ef4),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x205ef4
      },
      "body": JSON.stringify(_0x41a63f),
      "timeout": 15000
    }, null, _0x12e024 + "（签名服务）");
    if (!_0x5676e6) {
      if (_0x39e4c5 && [403, 405, 502].includes(_0x39e4c5.statusCode)) {
        _0x39e4c5.statusCode === 403 ? console.log("❌ 账号[" + this.nickname + "] 签名失败: HTTP状态码 403 - 卡密过期，请检查或更换卡密") : console.log("❌ 账号[" + this.nickname + "] 签名失败: HTTP状态码 " + _0x39e4c5.statusCode + "，自动停止脚本运行");
        process.exit(1);
      }
      console.log("❌ 账号[" + this.nickname + "] 签名失败: 无响应");
      return null;
    }
    if (_0x5676e6.success && _0x5676e6.status === "queued" && _0x5676e6.queue_id) {
      {
        const _0x5420c8 = await this.pollQueueStatus(_0x5676e6.queue_id);
        if (_0x5420c8 && _0x5420c8.success && (_0x5420c8.status === "completed" || _0x5420c8.status === "processed")) {
          return _0x5420c8;
        }
        console.log("账号[" + this.nickname + "] 签名失败: " + (_0x5420c8?.["error"] || _0x5420c8?.["status"] || "未知"));
        return null;
      }
    }
    if (_0x5676e6.success && (!_0x5676e6.status || _0x5676e6.status === "processed" || _0x5676e6.status === "completed")) return _0x5676e6;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x5676e6.error || _0x5676e6.message || _0x5676e6.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x276477, _0x55fc27 = 30000, _0x4ac715 = 2000) {
    const _0x5c0ff8 = Date.now();
    while (Date.now() - _0x5c0ff8 < _0x55fc27) {
      const {
        response: _0x234c6c,
        body: _0x263aa6
      } = await _0x19ef7f({
        "method": "GET",
        "url": _0x1278e9 + "?queue_id=" + encodeURIComponent(_0x276477),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x263aa6?.["success"]) {
        {
          if (_0x263aa6.status === "completed" || _0x263aa6.status === "processed") return _0x263aa6;
          if (_0x263aa6.status === "failed") return _0x263aa6;
        }
      }
      await new Promise(_0x57ee43 => setTimeout(_0x57ee43, _0x4ac715));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x4d736a) {
    const _0x537db5 = this.taskConfigs[_0x4d736a];
    if (!_0x537db5) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x4d736a), false;
    if (this.taskLimitReached[_0x4d736a]) return false;
    try {
      const _0x3b1313 = await this.retryOperation(() => this.getAdInfo(_0x537db5), "获取" + _0x537db5.name + "信息", 3);
      if (!_0x3b1313) return this.taskStats[_0x4d736a].failed++, false;
      const _0x33a3b4 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x537db5.name + " " + _0x562ad4() + " " + Math.round(_0x33a3b4 / 1000) + " 秒");
      await new Promise(_0xca901d => setTimeout(_0xca901d, _0x33a3b4));
      const _0x5c8220 = await this.retryOperation(() => this.generateSignature(_0x3b1313.cid, _0x3b1313.llsid, _0x4d736a, _0x537db5), "生成" + _0x537db5.name + "签名", 3);
      if (!_0x5c8220) return this.taskStats[_0x4d736a].failed++, false;
      const _0x1bbc5b = await this.retryOperation(() => this.submitReport(_0x5c8220.sig, _0x5c8220.sig3, _0x5c8220.sigtoken, _0x5c8220.post, _0x4d736a, _0x537db5), "提交" + _0x537db5.name + "报告", 3);
      if (_0x1bbc5b?.["success"]) return this.taskStats[_0x4d736a].success++, this.taskStats[_0x4d736a].totalReward += _0x1bbc5b.reward || 0, true;
      this.taskStats[_0x4d736a].failed++;
      return false;
    } catch (_0x40900d) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x4d736a + "): " + _0x40900d.message);
      this.taskStats[_0x4d736a].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x10017b = {};
    for (const _0xa6c7a5 of this.tasksToExecute) {
      {
        if (this.stopAllTasks) break;
        if (!this.taskConfigs[_0xa6c7a5]) {
          {
            console.log("⚠️ 账号[" + this.nickname + "] 跳过未知任务: " + _0xa6c7a5);
            continue;
          }
        }
        console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0xa6c7a5].name);
        _0x10017b[_0xa6c7a5] = await this.executeTask(_0xa6c7a5);
        if (this.stopAllTasks) {
          break;
        }
        if (_0xa6c7a5 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          const _0x9e2af9 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x9e2af9 / 1000) + " 秒");
          await new Promise(_0x15a0cc => setTimeout(_0x15a0cc, _0x9e2af9));
        }
      }
    }
    return _0x10017b;
  }
}
function _0xdb566b(_0x54c4cd) {
  const _0x3c77c3 = String(_0x54c4cd || "").trim().split("#");
  if (_0x3c77c3.length < 2) {
    return null;
  }
  let _0x319e28 = _0x3c77c3[0];
  _0x319e28 = _0x319e28.replace("kpn=NEBULA", "kpn=KUAISHOU");
  const _0x4b3f0d = _0x3c77c3.slice(1, _0x3c77c3.length - (_0x3c77c3.length >= 3 ? 1 : 0)).join("#");
  let _0x21c883 = null;
  if (_0x3c77c3.length >= 3) {
    {
      const _0xae56f1 = _0x3c77c3[_0x3c77c3.length - 1].trim();
      if (_0xae56f1.includes("|")) {
        {
          console.log("开始解析格式1 " + _0xae56f1);
          const _0x5b2215 = _0xae56f1.split("|");
          if (_0x5b2215.length >= 2) {
            {
              const [_0x208e97, _0x5a15d2, _0x4fcab1, _0x19afa6] = _0x5b2215;
              _0x21c883 = "socks5://" + _0x4fcab1 + ":" + _0x19afa6 + "@" + _0x208e97 + ":" + _0x5a15d2;
            }
          }
        }
      } else _0x21c883 = /^socks5:\/\/.+/i.test(_0xae56f1) ? _0xae56f1 : null;
      !_0x21c883 && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0xae56f1);
    }
  }
  return {
    "salt": _0x4b3f0d,
    "cookie": _0x319e28,
    "proxyUrl": _0x21c883
  };
}
function _0x53f92e() {
  const _0x28db25 = _0x7a72e1(),
    _0x489089 = [];
  for (const _0x2f1a99 of _0x28db25) {
    {
      const _0x1d9335 = _0xdb566b(_0x2f1a99);
      if (_0x1d9335) _0x489089.push(_0x1d9335);else {
        console.log("账号格式错误：" + _0x2f1a99);
      }
    }
  }
  _0x489089.forEach((_0x37ef2e, _0x359d8c) => {
    _0x37ef2e.index = _0x359d8c + 1;
  });
  return _0x489089;
}
async function _0x181c42(_0x3bc4d4, _0x868ff9, _0x59b6eb) {
  const _0x186d3d = new Array(_0x3bc4d4.length);
  let _0x1510fe = 0;
  async function _0x4f5761() {
    while (true) {
      const _0x46a0bd = _0x1510fe++;
      if (_0x46a0bd >= _0x3bc4d4.length) return;
      const _0x1c6172 = _0x3bc4d4[_0x46a0bd];
      try {
        _0x186d3d[_0x46a0bd] = await _0x59b6eb(_0x1c6172, _0x46a0bd);
      } catch (_0x479990) {
        console.log("并发执行异常（index=" + (_0x46a0bd + 1) + "）：" + _0x479990.message);
        _0x186d3d[_0x46a0bd] = null;
      }
    }
  }
  const _0x5bc0d8 = Array.from({
    "length": Math.min(_0x868ff9, _0x3bc4d4.length)
  }, _0x4f5761);
  await Promise.all(_0x5bc0d8);
  return _0x186d3d;
}
async function _0x5ed8f2(_0x29027e) {
  if (_0x29027e.proxyUrl) {
    {
      console.log("账号[" + _0x29027e.index + "]" + (_0x29027e.remark ? "（" + _0x29027e.remark + "）" : "") + " 🔌 测试代理连接中...");
      const _0x5d5c23 = await _0x1f3e39(_0x29027e.proxyUrl, "账号[" + _0x29027e.index + "]");
      console.log("  - " + (_0x5d5c23.ok ? "✅ 代理验证通过，IP: " + _0x5d5c23.ip : "❌ 代理验证失败") + ": " + _0x5d5c23.msg);
      if (_0x5d5c23.ok && _0x5d5c23.ip && _0x5d5c23.ip !== "localhost") {
        {
          if (_0xca8a18.has(_0x5d5c23.ip)) {
            console.log("\n⚠️ 存在相同代理IP（" + _0x5d5c23.ip + "），请立即检查！");
            process.exit(1);
          }
          _0xca8a18.add(_0x5d5c23.ip);
        }
      }
    }
  } else console.log("账号[" + _0x29027e.index + "] 未配置代理，走直连");
  console.log("账号[" + _0x29027e.index + "]" + (_0x29027e.remark ? "（" + _0x29027e.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x216d79 = await _0x15773d(_0x29027e.cookie, _0x29027e.proxyUrl, _0x29027e.index),
    _0x3855a6 = _0x216d79?.["nickname"] || "账号" + _0x29027e.index;
  if (_0x216d79) {
    const _0x3cf9e5 = _0x216d79.totalCoin != null ? _0x216d79.totalCoin : "未知",
      _0x26ec4f = _0x216d79.allCash != null ? _0x216d79.allCash : "未知";
    console.log("账号[" + _0x3855a6 + "] ✅ 登录成功，💰 当前金币: " + _0x3cf9e5 + "，💸 当前余额: " + _0x26ec4f);
  } else console.log("账号[" + _0x3855a6 + "] ❌ 基本信息获取失败，继续执行");
  const _0x1c040d = new _0x33cd33({
    ..._0x29027e,
    "nickname": _0x3855a6,
    "tasksToExecute": _0x61f184
  });
  await _0x1c040d.checkCoinLimit();
  if (_0x1c040d.coinExceeded) {
    {
      console.log("账号[" + _0x1c040d.nickname + "] 初始金币已超过阈值，不执行任务");
      const _0x705c02 = await _0x15773d(_0x29027e.cookie, _0x29027e.proxyUrl, _0x29027e.index),
        _0x335e73 = _0x216d79?.["totalCoin"] || 0,
        _0x37bf09 = _0x705c02?.["totalCoin"] || 0,
        _0x4610b5 = _0x37bf09 - _0x335e73,
        _0xf9002 = _0x216d79?.["allCash"] || 0,
        _0x2b02ab = _0x705c02?.["allCash"] || 0,
        _0x3ed773 = _0x2b02ab - _0xf9002;
      return {
        "index": _0x29027e.index,
        "nickname": _0x3855a6,
        "initialCoin": _0x335e73,
        "finalCoin": _0x37bf09,
        "coinChange": _0x4610b5,
        "initialCash": _0xf9002,
        "finalCash": _0x2b02ab,
        "cashChange": _0x3ed773,
        "stats": _0x1c040d.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x2f095e = 0; _0x2f095e < _0x5049e7; _0x2f095e++) {
    const _0x3efced = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x1c040d.nickname + "] ⌛ 第" + (_0x2f095e + 1) + "轮，先随机等待 " + Math.round(_0x3efced / 1000) + " 秒");
    await new Promise(_0xc412e => setTimeout(_0xc412e, _0x3efced));
    console.log("账号[" + _0x1c040d.nickname + "] 🚀 开始第" + (_0x2f095e + 1) + "轮任务");
    const _0x55a3b4 = await _0x1c040d.executeAllTasksByPriority();
    Object.values(_0x55a3b4).some(Boolean) ? console.log("账号[" + _0x1c040d.nickname + "] ✅ 第" + (_0x2f095e + 1) + "轮执行完成") : console.log("账号[" + _0x1c040d.nickname + "] ⚠️ 第" + (_0x2f095e + 1) + "轮没有成功任务");
    if (_0x1c040d.stopAllTasks) {
      {
        console.log("账号[" + _0x1c040d.nickname + "] 🏁 达到停止条件，终止后续轮次");
        break;
      }
    }
    if (_0x2f095e < _0x5049e7 - 1) {
      const _0xa1e552 = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x1c040d.nickname + "] ⌛ 等待 " + Math.round(_0xa1e552 / 1000) + " 秒进入下一轮");
      await new Promise(_0x55d71d => setTimeout(_0x55d71d, _0xa1e552));
    }
  }
  const _0x57f4cc = await _0x15773d(_0x29027e.cookie, _0x29027e.proxyUrl, _0x29027e.index),
    _0x339b12 = _0x216d79?.["totalCoin"] || 0,
    _0x9d964c = _0x57f4cc?.["totalCoin"] || 0,
    _0xae3e0 = _0x9d964c - _0x339b12,
    _0x3121f0 = _0x216d79?.["allCash"] || 0,
    _0x435576 = _0x57f4cc?.["allCash"] || 0,
    _0x3c8925 = _0x435576 - _0x3121f0;
  _0x1c040d.printTaskStats();
  return {
    "index": _0x29027e.index,
    "nickname": _0x3855a6,
    "initialCoin": _0x339b12,
    "finalCoin": _0x9d964c,
    "coinChange": _0xae3e0,
    "initialCash": _0x3121f0,
    "finalCash": _0x435576,
    "cashChange": _0x3c8925,
    "stats": _0x1c040d.getTaskStats(),
    "coinLimitExceeded": _0x1c040d.coinExceeded
  };
}
function _0x2d3dad(_0x2b8aee) {
  if (!_0x2b8aee.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0x1596bb = _0x2b8aee.reduce((_0x58b02e, _0x53af96) => {
      return _0x58b02e + (parseInt(_0x53af96.initialCoin) || 0);
    }, 0),
    _0x51f6be = _0x2b8aee.reduce((_0x4641eb, _0x14672c) => {
      return _0x4641eb + (parseInt(_0x14672c.finalCoin) || 0);
    }, 0),
    _0x2af8b4 = _0x51f6be - _0x1596bb,
    _0x1a2f1e = _0x2b8aee.reduce((_0x48977e, _0x3b980e) => {
      return _0x48977e + (parseFloat(_0x3b980e.initialCash) || 0);
    }, 0),
    _0x3b8788 = _0x2b8aee.reduce((_0x231123, _0x659f2d) => {
      return _0x231123 + (parseFloat(_0x659f2d.finalCash) || 0);
    }, 0),
    _0x82bc3a = _0x3b8788 - _0x1a2f1e;
  let _0xe3a433 = 0,
    _0x2f637f = 0,
    _0x370a0c = 0;
  _0x2b8aee.forEach(_0x129c4c => {
    _0x129c4c.stats && Object.values(_0x129c4c.stats).forEach(_0x2ad7bc => {
      _0xe3a433 += _0x2ad7bc.success + _0x2ad7bc.failed;
      _0x2f637f += _0x2ad7bc.success;
      _0x370a0c += _0x2ad7bc.totalReward;
    });
  });
  const _0x133655 = _0xe3a433 > 0 ? (_0x2f637f / _0xe3a433 * 100).toFixed(1) : "0.0",
    _0x2051f9 = _0x2b8aee.filter(_0x599dcb => _0x599dcb.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x5d4142("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x2b8aee.length).padEnd(22) + ("超过金币阈值账号: " + _0x2051f9).padEnd(22) + ("总任务数: " + _0xe3a433).padEnd(22) + ("任务成功率: " + _0x133655 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x2af8b4).padEnd(26) + ("总金币奖励: " + _0x370a0c).padEnd(26) + ("总余额变化: " + _0x82bc3a.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x1bfb1d = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x12a4b3 = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x37fed7 = "|";
  _0x1bfb1d.forEach((_0x21e8c6, _0x4ac821) => {
    _0x37fed7 += _0x5d4142(_0x21e8c6, _0x12a4b3[_0x4ac821]) + "|";
  });
  console.log(_0x37fed7);
  let _0x163bcb = "|";
  _0x12a4b3.forEach(_0xae3101 => {
    _0x163bcb += "-".repeat(_0xae3101) + "|";
  });
  console.log(_0x163bcb);
  _0x2b8aee.forEach(_0xd4ee4a => {
    let _0x47b042 = "|";
    _0x47b042 += _0x5d4142(_0xd4ee4a.index, _0x12a4b3[0]) + "|";
    const _0x5777e8 = (_0xd4ee4a.nickname || "-") + (_0xd4ee4a.coinLimitExceeded ? " ⚠️" : "");
    _0x47b042 += _0x5d4142(_0x5777e8.substring(0, _0x12a4b3[1] - 2), _0x12a4b3[1]) + "|";
    _0x47b042 += _0x5d4142(_0xd4ee4a.initialCoin, _0x12a4b3[2]) + "|";
    _0x47b042 += _0x5d4142(_0xd4ee4a.finalCoin, _0x12a4b3[3]) + "|";
    const _0x307bed = _0xd4ee4a.coinChange >= 0 ? "+" + _0xd4ee4a.coinChange : _0xd4ee4a.coinChange;
    _0x47b042 += _0x5d4142(_0x307bed, _0x12a4b3[4]) + "|";
    _0x47b042 += _0x5d4142(_0xd4ee4a.initialCash, _0x12a4b3[5]) + "|";
    _0x47b042 += _0x5d4142(_0xd4ee4a.finalCash, _0x12a4b3[6]) + "|";
    const _0x8b6a4a = _0xd4ee4a.cashChange >= 0 ? "+" + _0xd4ee4a.cashChange.toFixed(2) : _0xd4ee4a.cashChange.toFixed(2);
    _0x47b042 += _0x5d4142(_0x8b6a4a, _0x12a4b3[7]) + "|";
    console.log(_0x47b042);
  });
  console.log("=".repeat(80));
  console.log("|" + _0x5d4142("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x5248e2 = _0x53f92e();
  console.log("共找到 " + _0x5248e2.length + " 个有效账号");
  if (!_0x5248e2.length) {
    process.exit(1);
  }
  const _0x4aa743 = _0x595bd3("MAX_CONCURRENCY", 888);
  console.log("\n防黑并发：" + _0x4aa743 + "    防黑轮数：" + _0x5049e7 + "\n");
  const _0x2d6dc9 = [];
  await _0x181c42(_0x5248e2, _0x4aa743, async _0x574fba => {
    console.log("\n—— 🚀 开始账号[" + _0x574fba.index + "]" + (_0x574fba.remark ? "（" + _0x574fba.remark + "）" : "") + " ——");
    try {
      {
        const _0x2f9e2c = await _0x5ed8f2(_0x574fba);
        _0x2d6dc9.push({
          "index": _0x574fba.index,
          "remark": _0x574fba.remark || "无备注",
          "nickname": _0x2f9e2c?.["nickname"] || "账号" + _0x574fba.index,
          "initialCoin": _0x2f9e2c?.["initialCoin"] || 0,
          "finalCoin": _0x2f9e2c?.["finalCoin"] || 0,
          "coinChange": _0x2f9e2c?.["coinChange"] || 0,
          "initialCash": _0x2f9e2c?.["initialCash"] || 0,
          "finalCash": _0x2f9e2c?.["finalCash"] || 0,
          "cashChange": _0x2f9e2c?.["cashChange"] || 0,
          "stats": _0x2f9e2c?.["stats"] || {},
          "coinLimitExceeded": _0x2f9e2c?.["coinLimitExceeded"] || false
        });
      }
    } catch (_0x42664d) {
      console.log("账号[" + _0x574fba.index + "] ❌ 执行异常：" + _0x42664d.message);
      _0x2d6dc9.push({
        "index": _0x574fba.index,
        "remark": _0x574fba.remark || "无备注",
        "nickname": "账号" + _0x574fba.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x42664d.message
      });
    }
  });
  _0x2d6dc9.sort((_0x3593de, _0xec8fd4) => _0x3593de.index - _0xec8fd4.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x2d3dad(_0x2d6dc9);
})();