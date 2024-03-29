parcelRequire = function(e, r, t, n) {
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n) {
		if(!r[t]) {
			if(!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if(!n && i) return i(t, !0);
				if(o) return o(t, !0);
				if(u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function(r) {
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e) {
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function(e) {
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
		e[r] = [function(e, r) {
			r.exports = t
		}, {}]
	};
	for(var c = 0; c < t.length; c++) try {
		f(t[c])
	} catch(e) {
		i || (i = e)
	}
	if(t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
			return l
		}) : n && (this[n] = l)
	}
	if(parcelRequire = f, i) throw i;
	return f
}({
	"G7Dp": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = function() {
				return {
					nested: {
						easemob: {
							nested: {
								pb: {
									nested: {
										MessageBody: {
											fields: {
												type: {
													type: "Type",
													id: 1
												},
												from: {
													type: "JID",
													id: 2
												},
												to: {
													type: "JID",
													id: 3
												},
												contents: {
													rule: "repeated",
													type: "Content",
													id: 4
												},
												ext: {
													rule: "repeated",
													type: "KeyValue",
													id: 5
												},
												ackMessageId: {
													type: "uint64",
													id: 6
												}
											},
											nested: {
												Content: {
													fields: {
														type: {
															type: "Type",
															id: 1
														},
														text: {
															type: "string",
															id: 2
														},
														latitude: {
															type: "double",
															id: 3
														},
														longitude: {
															type: "double",
															id: 4
														},
														address: {
															type: "string",
															id: 5
														},
														displayName: {
															type: "string",
															id: 6
														},
														remotePath: {
															type: "string",
															id: 7
														},
														secretKey: {
															type: "string",
															id: 8
														},
														fileLength: {
															type: "int32",
															id: 9
														},
														action: {
															type: "string",
															id: 10
														},
														params: {
															rule: "repeated",
															type: "KeyValue",
															id: 11
														},
														duration: {
															type: "int32",
															id: 12
														},
														size: {
															type: "Size",
															id: 13
														},
														thumbnailRemotePath: {
															type: "string",
															id: 14
														},
														thumbnailSecretKey: {
															type: "string",
															id: 15
														},
														thumbnailDisplayName: {
															type: "string",
															id: 16
														},
														thumbnailFileLength: {
															type: "int32",
															id: 17
														},
														thumbnailSize: {
															type: "Size",
															id: 18
														}
													},
													nested: {
														Type: {
															values: {
																TEXT: 0,
																IMAGE: 1,
																VIDEO: 2,
																LOCATION: 3,
																VOICE: 4,
																FILE: 5,
																COMMAND: 6
															}
														},
														Size: {
															fields: {
																width: {
																	type: "double",
																	id: 1
																},
																height: {
																	type: "double",
																	id: 2
																}
															}
														}
													}
												},
												Type: {
													values: {
														NORMAL: 0,
														CHAT: 1,
														GROUPCHAT: 2,
														CHATROOM: 3,
														READ_ACK: 4,
														DELIVER_ACK: 5,
														RECALL: 6
													}
												}
											}
										},
										KeyValue: {
											oneofs: {
												value: {
													oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"]
												}
											},
											fields: {
												key: {
													type: "string",
													id: 1
												},
												type: {
													type: "ValueType",
													id: 2
												},
												varintValue: {
													type: "int64",
													id: 3
												},
												floatValue: {
													type: "float",
													id: 4
												},
												doubleValue: {
													type: "double",
													id: 5
												},
												stringValue: {
													type: "string",
													id: 6
												}
											},
											nested: {
												ValueType: {
													values: {
														BOOL: 1,
														INT: 2,
														UINT: 3,
														LLINT: 4,
														FLOAT: 5,
														DOUBLE: 6,
														STRING: 7,
														JSON_STRING: 8
													}
												}
											}
										},
										JID: {
											fields: {
												appKey: {
													type: "string",
													id: 1
												},
												name: {
													type: "string",
													id: 2
												},
												domain: {
													type: "string",
													id: 3
												},
												clientResource: {
													type: "string",
													id: 4
												}
											}
										},
										ConferenceBody: {
											fields: {
												sessionId: {
													type: "string",
													id: 1
												},
												operation: {
													type: "Operation",
													id: 2
												},
												conferenceId: {
													type: "string",
													id: 3
												},
												type: {
													type: "Type",
													id: 4
												},
												content: {
													type: "string",
													id: 5
												},
												network: {
													type: "string",
													id: 6
												},
												version: {
													type: "string",
													id: 7
												},
												identity: {
													type: "Identity",
													id: 8
												},
												duration: {
													type: "string",
													id: 9
												},
												peerName: {
													type: "string",
													id: 10
												},
												endReason: {
													type: "EndReason",
													id: 11
												},
												status: {
													type: "Status",
													id: 12
												},
												isDirect: {
													type: "bool",
													id: 13
												},
												controlType: {
													type: "StreamControlType",
													id: 14
												},
												routeFlag: {
													type: "int32",
													id: 15
												},
												routeKey: {
													type: "string",
													id: 16
												}
											},
											nested: {
												Status: {
													fields: {
														errorCode: {
															type: "int32",
															id: 1
														}
													}
												},
												Operation: {
													values: {
														JOIN: 0,
														INITIATE: 1,
														ACCEPT_INITIATE: 2,
														ANSWER: 3,
														TERMINATE: 4,
														REMOVE: 5,
														STREAM_CONTROL: 6,
														MEDIA_REQUEST: 7
													}
												},
												Type: {
													values: {
														VOICE: 0,
														VIDEO: 1
													}
												},
												Identity: {
													values: {
														CALLER: 0,
														CALLEE: 1
													}
												},
												EndReason: {
													values: {
														HANGUP: 0,
														NORESPONSE: 1,
														REJECT: 2,
														BUSY: 3,
														FAIL: 4,
														UNSUPPORTED: 5,
														OFFLINE: 6
													}
												},
												StreamControlType: {
													values: {
														PAUSE_VOICE: 0,
														RESUME_VOICE: 1,
														PAUSE_VIDEO: 2,
														RESUME_VIDEO: 3
													}
												}
											}
										},
										MSync: {
											fields: {
												version: {
													type: "Version",
													id: 1,
													options: {
														default: "MSYNC_V1"
													}
												},
												guid: {
													type: "JID",
													id: 2
												},
												auth: {
													type: "string",
													id: 3
												},
												compressAlgorimth: {
													type: "uint32",
													id: 4
												},
												crypto: {
													type: "uint32",
													id: 5
												},
												userAgent: {
													type: "string",
													id: 6
												},
												pov: {
													type: "uint64",
													id: 7
												},
												command: {
													type: "Command",
													id: 8
												},
												deviceId: {
													type: "uint32",
													id: 10
												},
												encryptType: {
													rule: "repeated",
													type: "EncryptType",
													id: 11,
													options: {
														packed: !1
													}
												},
												encryptKey: {
													type: "string",
													id: 12
												},
												payload: {
													type: "bytes",
													id: 9
												}
											},
											nested: {
												Version: {
													values: {
														MSYNC_V1: 0,
														MSYNC_V2: 1
													}
												},
												Command: {
													values: {
														SYNC: 0,
														UNREAD: 1,
														NOTICE: 2,
														PROVISION: 3
													}
												}
											}
										},
										EncryptType: {
											values: {
												ENCRYPT_NONE: 0,
												ENCRYPT_AES_128_CBC: 1,
												ENCRYPT_AES_256_CBC: 2
											}
										},
										CommSyncUL: {
											fields: {
												meta: {
													type: "Meta",
													id: 1
												},
												key: {
													type: "uint64",
													id: 2
												},
												queue: {
													type: "JID",
													id: 3
												},
												isRoam: {
													type: "bool",
													id: 4
												},
												lastFullRoamKey: {
													type: "uint64",
													id: 5
												}
											}
										},
										CommSyncDL: {
											fields: {
												status: {
													type: "Status",
													id: 1
												},
												metaId: {
													type: "uint64",
													id: 2
												},
												serverId: {
													type: "uint64",
													id: 3
												},
												metas: {
													rule: "repeated",
													type: "Meta",
													id: 4
												},
												nextKey: {
													type: "uint64",
													id: 5
												},
												queue: {
													type: "JID",
													id: 6
												},
												isLast: {
													type: "bool",
													id: 7
												},
												timestamp: {
													type: "uint64",
													id: 8
												},
												isRoam: {
													type: "bool",
													id: 9
												}
											}
										},
										CommNotice: {
											fields: {
												queue: {
													type: "JID",
													id: 1
												}
											}
										},
										CommUnreadUL: {
											fields: {}
										},
										CommUnreadDL: {
											fields: {
												status: {
													type: "Status",
													id: 1
												},
												unread: {
													rule: "repeated",
													type: "MetaQueue",
													id: 2
												},
												timestamp: {
													type: "uint64",
													id: 3
												}
											}
										},
										MetaQueue: {
											fields: {
												queue: {
													type: "JID",
													id: 1
												},
												n: {
													type: "uint32",
													id: 2
												}
											}
										},
										Meta: {
											fields: {
												id: {
													type: "uint64",
													id: 1
												},
												from: {
													type: "JID",
													id: 2
												},
												to: {
													type: "JID",
													id: 3
												},
												timestamp: {
													type: "uint64",
													id: 4
												},
												ns: {
													type: "NameSpace",
													id: 5
												},
												payload: {
													type: "bytes",
													id: 6
												},
												routetype: {
													type: "RouteType",
													id: 7
												}
											},
											nested: {
												NameSpace: {
													values: {
														STATISTIC: 0,
														CHAT: 1,
														MUC: 2,
														ROSTER: 3,
														CONFERENCE: 4
													}
												},
												RouteType: {
													values: {
														ROUTE_ALL: 0,
														ROUTE_ONLINE: 1
													}
												}
											}
										},
										Status: {
											fields: {
												errorCode: {
													type: "ErrorCode",
													id: 1
												},
												reason: {
													type: "string",
													id: 2
												},
												redirectInfo: {
													rule: "repeated",
													type: "RedirectInfo",
													id: 3
												}
											},
											nested: {
												ErrorCode: {
													values: {
														OK: 0,
														FAIL: 1,
														UNAUTHORIZED: 2,
														MISSING_PARAMETER: 3,
														WRONG_PARAMETER: 4,
														REDIRECT: 5,
														TOKEN_EXPIRED: 6,
														PERMISSION_DENIED: 7,
														NO_ROUTE: 8,
														UNKNOWN_COMMAND: 9,
														PB_PARSER_ERROR: 10,
														BIND_ANOTHER_DEVICE: 11,
														IM_FORBIDDEN: 12,
														TOO_MANY_DEVICES: 13,
														PLATFORM_LIMIT: 14,
														USER_MUTED: 15,
														ENCRYPT_DISABLE: 16,
														ENCRYPT_ENABLE: 17,
														DECRYPT_FAILURE: 18
													}
												}
											}
										},
										RedirectInfo: {
											fields: {
												host: {
													type: "string",
													id: 1
												},
												port: {
													type: "uint32",
													id: 2
												}
											}
										},
										Provision: {
											fields: {
												osType: {
													type: "OsType",
													id: 1
												},
												version: {
													type: "string",
													id: 2
												},
												networkType: {
													type: "NetworkType",
													id: 3
												},
												appSign: {
													type: "string",
													id: 4
												},
												compressType: {
													rule: "repeated",
													type: "CompressType",
													id: 5,
													options: {
														packed: !1
													}
												},
												encryptType: {
													rule: "repeated",
													type: "EncryptType",
													id: 6,
													options: {
														packed: !1
													}
												},
												encryptKey: {
													type: "string",
													id: 7
												},
												status: {
													type: "Status",
													id: 8
												},
												deviceUuid: {
													type: "string",
													id: 9
												},
												isManualLogin: {
													type: "bool",
													id: 10
												},
												password: {
													type: "string",
													id: 11
												},
												deviceName: {
													type: "string",
													id: 12
												},
												resource: {
													type: "string",
													id: 13
												},
												auth: {
													type: "string",
													id: 14
												}
											},
											nested: {
												OsType: {
													values: {
														OS_IOS: 0,
														OS_ANDROID: 1,
														OS_LINUX: 2,
														OS_OSX: 3,
														OS_WIN: 4,
														OS_OTHER: 16
													}
												},
												NetworkType: {
													values: {
														NETWORK_NONE: 0,
														NETWORK_WIFI: 1,
														NETWORK_4G: 2,
														NETWORK_3G: 3,
														NETWORK_2G: 4,
														NETWORK_WIRE: 5
													}
												},
												CompressType: {
													values: {
														COMPRESS_NONE: 0,
														COMPRESS_ZLIB: 1
													}
												}
											}
										},
										MUCBody: {
											fields: {
												mucId: {
													type: "JID",
													id: 1
												},
												operation: {
													type: "Operation",
													id: 2
												},
												from: {
													type: "JID",
													id: 3
												},
												to: {
													rule: "repeated",
													type: "JID",
													id: 4
												},
												setting: {
													type: "Setting",
													id: 5
												},
												reason: {
													type: "string",
													id: 6
												},
												isChatroom: {
													type: "bool",
													id: 7
												},
												status: {
													type: "Status",
													id: 8
												}
											},
											nested: {
												Operation: {
													values: {
														CREATE: 0,
														DESTROY: 1,
														JOIN: 2,
														LEAVE: 3,
														APPLY: 4,
														APPLY_ACCEPT: 5,
														APPLY_DECLINE: 6,
														INVITE: 7,
														INVITE_ACCEPT: 8,
														INVITE_DECLINE: 9,
														KICK: 10,
														GET_BLACKLIST: 11,
														BAN: 12,
														ALLOW: 13,
														UPDATE: 14,
														BLOCK: 15,
														UNBLOCK: 16,
														PRESENCE: 17,
														ABSENCE: 18,
														DIRECT_JOINED: 19,
														ASSIGN_OWNER: 20,
														ADD_ADMIN: 21,
														REMOVE_ADMIN: 22,
														ADD_MUTE: 23,
														REMOVE_MUTE: 24,
														UPDATE_ANNOUNCEMENT: 25,
														DELETE_ANNOUNCEMENT: 26,
														UPLOAD_FILE: 27,
														DELETE_FILE: 28
													}
												},
												Setting: {
													fields: {
														name: {
															type: "string",
															id: 1
														},
														desc: {
															type: "string",
															id: 2
														},
														type: {
															type: "Type",
															id: 3
														},
														maxUsers: {
															type: "int32",
															id: 4
														},
														owner: {
															type: "string",
															id: 5
														}
													},
													nested: {
														Type: {
															values: {
																PRIVATE_OWNER_INVITE: 0,
																PRIVATE_MEMBER_INVITE: 1,
																PUBLIC_JOIN_APPROVAL: 2,
																PUBLIC_JOIN_OPEN: 3,
																PUBLIC_ANONYMOUS: 4
															}
														}
													}
												},
												Status: {
													fields: {
														errorCode: {
															type: "ErrorCode",
															id: 1
														},
														description: {
															type: "string",
															id: 2
														}
													},
													nested: {
														ErrorCode: {
															values: {
																OK: 0,
																PERMISSION_DENIED: 1,
																WRONG_PARAMETER: 2,
																MUC_NOT_EXIST: 3,
																USER_NOT_EXIST: 4,
																UNKNOWN: 5
															}
														}
													}
												}
											}
										},
										RosterBody: {
											fields: {
												operation: {
													type: "Operation",
													id: 1
												},
												status: {
													type: "Status",
													id: 2
												},
												from: {
													type: "JID",
													id: 3
												},
												to: {
													rule: "repeated",
													type: "JID",
													id: 4
												},
												reason: {
													type: "string",
													id: 5
												},
												rosterVer: {
													type: "string",
													id: 6
												},
												biDirection: {
													type: "bool",
													id: 7
												}
											},
											nested: {
												Operation: {
													values: {
														GET_ROSTER: 0,
														GET_BLACKLIST: 1,
														ADD: 2,
														REMOVE: 3,
														ACCEPT: 4,
														DECLINE: 5,
														BAN: 6,
														ALLOW: 7,
														REMOTE_ACCEPT: 8,
														REMOTE_DECLINE: 9
													}
												},
												Status: {
													fields: {
														errorCode: {
															type: "ErrorCode",
															id: 1
														},
														description: {
															type: "string",
															id: 2
														}
													},
													nested: {
														ErrorCode: {
															values: {
																OK: 0,
																USER_NOT_EXIST: 1,
																USER_ALREADY_FRIEND: 2,
																USER_ALREADY_BLACKLIST: 3
															}
														}
													}
												}
											}
										},
										StatisticsBody: {
											fields: {
												operation: {
													type: "Operation",
													id: 1
												},
												os: {
													type: "OsType",
													id: 2
												},
												version: {
													type: "string",
													id: 3
												},
												network: {
													type: "NetworkType",
													id: 4
												},
												imTime: {
													type: "uint32",
													id: 5
												},
												chatTime: {
													type: "uint32",
													id: 6
												},
												location: {
													type: "string",
													id: 7
												}
											},
											nested: {
												Operation: {
													values: {
														INFORMATION: 0,
														USER_REMOVED: 1,
														USER_LOGIN_ANOTHER_DEVICE: 2,
														USER_KICKED_BY_CHANGE_PASSWORD: 3,
														USER_KICKED_BY_OTHER_DEVICE: 4
													}
												},
												OsType: {
													values: {
														OS_IOS: 0,
														OS_ANDROID: 1,
														OS_LINUX: 2,
														OS_OSX: 3,
														OS_WIN: 4,
														OS_OTHER: 16
													}
												},
												NetworkType: {
													values: {
														NETWORK_NONE: 0,
														NETWORK_WIFI: 1,
														NETWORK_4G: 2,
														NETWORK_3G: 3,
														NETWORK_2G: 4,
														NETWORK_WIRE: 5
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			t = e;
		exports.default = t;
	}, {}],
	"5Ezc": [function(require, module, exports) {
		"use strict";

		function n(n, e) {
			for(var r = new Array(arguments.length - 1), t = 0, l = 2, o = !0; l < arguments.length;) r[t++] = arguments[l++];
			return new Promise(function(l, u) {
				r[t] = function(n) {
					if(o)
						if(o = !1, n) u(n);
						else {
							for(var e = new Array(arguments.length - 1), r = 0; r < e.length;) e[r++] = arguments[r];
							l.apply(null, e)
						}
				};
				try {
					n.apply(e || null, r)
				} catch(a) {
					o && (o = !1, u(a))
				}
			})
		}
		module.exports = n;
	}, {}],
	"20Fs": [function(require, module, exports) {
		"use strict";
		var r = exports;
		r.length = function(r) {
			var e = r.length;
			if(!e) return 0;
			for(var a = 0; --e % 4 > 1 && "=" === r.charAt(e);) ++a;
			return Math.ceil(3 * r.length) / 4 - a
		};
		for(var e = new Array(64), a = new Array(123), t = 0; t < 64;) a[e[t] = t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t - 59 | 43] = t++;
		r.encode = function(r, a, t) {
			for(var n, i = null, o = [], c = 0, s = 0; a < t;) {
				var h = r[a++];
				switch(s) {
					case 0:
						o[c++] = e[h >> 2], n = (3 & h) << 4, s = 1;
						break;
					case 1:
						o[c++] = e[n | h >> 4], n = (15 & h) << 2, s = 2;
						break;
					case 2:
						o[c++] = e[n | h >> 6], o[c++] = e[63 & h], s = 0
				}
				c > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), c = 0)
			}
			return s && (o[c++] = e[n], o[c++] = 61, 1 === s && (o[c++] = 61)), i ? (c && i.push(String.fromCharCode.apply(String, o.slice(0, c))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, c))
		};
		var n = "invalid encoding";
		r.decode = function(r, e, t) {
			for(var i, o = t, c = 0, s = 0; s < r.length;) {
				var h = r.charCodeAt(s++);
				if(61 === h && c > 1) break;
				if(void 0 === (h = a[h])) throw Error(n);
				switch(c) {
					case 0:
						i = h, c = 1;
						break;
					case 1:
						e[t++] = i << 2 | (48 & h) >> 4, i = h, c = 2;
						break;
					case 2:
						e[t++] = (15 & i) << 4 | (60 & h) >> 2, i = h, c = 3;
						break;
					case 3:
						e[t++] = (3 & i) << 6 | h, c = 0
				}
			}
			if(1 === c) throw Error(n);
			return t - o
		}, r.test = function(r) {
			return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r)
		};
	}, {}],
	"JI1+": [function(require, module, exports) {
		"use strict";

		function t() {
			this._listeners = {}
		}
		module.exports = t, t.prototype.on = function(t, s, e) {
			return(this._listeners[t] || (this._listeners[t] = [])).push({
				fn: s,
				ctx: e || this
			}), this
		}, t.prototype.off = function(t, s) {
			if(void 0 === t) this._listeners = {};
			else if(void 0 === s) this._listeners[t] = [];
			else
				for(var e = this._listeners[t], i = 0; i < e.length;) e[i].fn === s ? e.splice(i, 1) : ++i;
			return this
		}, t.prototype.emit = function(t) {
			var s = this._listeners[t];
			if(s) {
				for(var e = [], i = 1; i < arguments.length;) e.push(arguments[i++]);
				for(i = 0; i < s.length;) s[i].fn.apply(s[i++].ctx, e)
			}
			return this
		};
	}, {}],
	"M11I": [function(require, module, exports) {
		"use strict";

		function n(n) {
			return "undefined" != typeof Float32Array ? function() {
				var e = new Float32Array([-0]),
					t = new Uint8Array(e.buffer),
					r = 128 === t[3];

				function o(n, r, o) {
					e[0] = n, r[o] = t[0], r[o + 1] = t[1], r[o + 2] = t[2], r[o + 3] = t[3]
				}

				function u(n, r, o) {
					e[0] = n, r[o] = t[3], r[o + 1] = t[2], r[o + 2] = t[1], r[o + 3] = t[0]
				}

				function i(n, r) {
					return t[0] = n[r], t[1] = n[r + 1], t[2] = n[r + 2], t[3] = n[r + 3], e[0]
				}

				function a(n, r) {
					return t[3] = n[r], t[2] = n[r + 1], t[1] = n[r + 2], t[0] = n[r + 3], e[0]
				}
				n.writeFloatLE = r ? o : u, n.writeFloatBE = r ? u : o, n.readFloatLE = r ? i : a, n.readFloatBE = r ? a : i
			}() : function() {
				function u(n, e, t, r) {
					var o = e < 0 ? 1 : 0;
					if(o && (e = -e), 0 === e) n(1 / e > 0 ? 0 : 2147483648, t, r);
					else if(isNaN(e)) n(2143289344, t, r);
					else if(e > 3.4028234663852886e38) n((o << 31 | 2139095040) >>> 0, t, r);
					else if(e < 1.1754943508222875e-38) n((o << 31 | Math.round(e / 1.401298464324817e-45)) >>> 0, t, r);
					else {
						var u = Math.floor(Math.log(e) / Math.LN2);
						n((o << 31 | u + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -u) * 8388608)) >>> 0, t, r)
					}
				}

				function i(n, e, t) {
					var r = n(e, t),
						o = 2 * (r >> 31) + 1,
						u = r >>> 23 & 255,
						i = 8388607 & r;
					return 255 === u ? i ? NaN : o * (1 / 0) : 0 === u ? 1.401298464324817e-45 * o * i : o * Math.pow(2, u - 150) * (i + 8388608)
				}
				n.writeFloatLE = u.bind(null, e), n.writeFloatBE = u.bind(null, t), n.readFloatLE = i.bind(null, r), n.readFloatBE = i.bind(null, o)
			}(), "undefined" != typeof Float64Array ? function() {
				var e = new Float64Array([-0]),
					t = new Uint8Array(e.buffer),
					r = 128 === t[7];

				function o(n, r, o) {
					e[0] = n, r[o] = t[0], r[o + 1] = t[1], r[o + 2] = t[2], r[o + 3] = t[3], r[o + 4] = t[4], r[o + 5] = t[5], r[o + 6] = t[6], r[o + 7] = t[7]
				}

				function u(n, r, o) {
					e[0] = n, r[o] = t[7], r[o + 1] = t[6], r[o + 2] = t[5], r[o + 3] = t[4], r[o + 4] = t[3], r[o + 5] = t[2], r[o + 6] = t[1], r[o + 7] = t[0]
				}

				function i(n, r) {
					return t[0] = n[r], t[1] = n[r + 1], t[2] = n[r + 2], t[3] = n[r + 3], t[4] = n[r + 4], t[5] = n[r + 5], t[6] = n[r + 6], t[7] = n[r + 7], e[0]
				}

				function a(n, r) {
					return t[7] = n[r], t[6] = n[r + 1], t[5] = n[r + 2], t[4] = n[r + 3], t[3] = n[r + 4], t[2] = n[r + 5], t[1] = n[r + 6], t[0] = n[r + 7], e[0]
				}
				n.writeDoubleLE = r ? o : u, n.writeDoubleBE = r ? u : o, n.readDoubleLE = r ? i : a, n.readDoubleBE = r ? a : i
			}() : function() {
				function u(n, e, t, r, o, u) {
					var i = r < 0 ? 1 : 0;
					if(i && (r = -r), 0 === r) n(0, o, u + e), n(1 / r > 0 ? 0 : 2147483648, o, u + t);
					else if(isNaN(r)) n(0, o, u + e), n(2146959360, o, u + t);
					else if(r > 1.7976931348623157e308) n(0, o, u + e), n((i << 31 | 2146435072) >>> 0, o, u + t);
					else {
						var a;
						if(r < 2.2250738585072014e-308) n((a = r / 5e-324) >>> 0, o, u + e), n((i << 31 | a / 4294967296) >>> 0, o, u + t);
						else {
							var l = Math.floor(Math.log(r) / Math.LN2);
							1024 === l && (l = 1023), n(4503599627370496 * (a = r * Math.pow(2, -l)) >>> 0, o, u + e), n((i << 31 | l + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, u + t)
						}
					}
				}

				function i(n, e, t, r, o) {
					var u = n(r, o + e),
						i = n(r, o + t),
						a = 2 * (i >> 31) + 1,
						l = i >>> 20 & 2047,
						f = 4294967296 * (1048575 & i) + u;
					return 2047 === l ? f ? NaN : a * (1 / 0) : 0 === l ? 5e-324 * a * f : a * Math.pow(2, l - 1075) * (f + 4503599627370496)
				}
				n.writeDoubleLE = u.bind(null, e, 0, 4), n.writeDoubleBE = u.bind(null, t, 4, 0), n.readDoubleLE = i.bind(null, r, 0, 4), n.readDoubleBE = i.bind(null, o, 4, 0)
			}(), n
		}

		function e(n, e, t) {
			e[t] = 255 & n, e[t + 1] = n >>> 8 & 255, e[t + 2] = n >>> 16 & 255, e[t + 3] = n >>> 24
		}

		function t(n, e, t) {
			e[t] = n >>> 24, e[t + 1] = n >>> 16 & 255, e[t + 2] = n >>> 8 & 255, e[t + 3] = 255 & n
		}

		function r(n, e) {
			return(n[e] | n[e + 1] << 8 | n[e + 2] << 16 | n[e + 3] << 24) >>> 0
		}

		function o(n, e) {
			return(n[e] << 24 | n[e + 1] << 16 | n[e + 2] << 8 | n[e + 3]) >>> 0
		}
		module.exports = n(n);
	}, {}],
	"MXG9": [function(require, module, exports) {
		"use strict";

		function inquire(moduleName) {
			try {
				var mod = eval("quire".replace(/^/, "re"))(moduleName);
				if(mod && (mod.length || Object.keys(mod).length)) return mod
			} catch(e) {}
			return null
		}
		module.exports = inquire;
	}, {}],
	"HIDA": [function(require, module, exports) {
		"use strict";
		var r = exports;
		r.length = function(r) {
			for(var t = 0, n = 0, e = 0; e < r.length; ++e)(n = r.charCodeAt(e)) < 128 ? t += 1 : n < 2048 ? t += 2 : 55296 == (64512 & n) && 56320 == (64512 & r.charCodeAt(e + 1)) ? (++e, t += 4) : t += 3;
			return t
		}, r.read = function(r, t, n) {
			if(n - t < 1) return "";
			for(var e, o = null, a = [], i = 0; t < n;)(e = r[t++]) < 128 ? a[i++] = e : e > 191 && e < 224 ? a[i++] = (31 & e) << 6 | 63 & r[t++] : e > 239 && e < 365 ? (e = ((7 & e) << 18 | (63 & r[t++]) << 12 | (63 & r[t++]) << 6 | 63 & r[t++]) - 65536, a[i++] = 55296 + (e >> 10), a[i++] = 56320 + (1023 & e)) : a[i++] = (15 & e) << 12 | (63 & r[t++]) << 6 | 63 & r[t++], i > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, a)), i = 0);
			return o ? (i && o.push(String.fromCharCode.apply(String, a.slice(0, i))), o.join("")) : String.fromCharCode.apply(String, a.slice(0, i))
		}, r.write = function(r, t, n) {
			for(var e, o, a = n, i = 0; i < r.length; ++i)(e = r.charCodeAt(i)) < 128 ? t[n++] = e : e < 2048 ? (t[n++] = e >> 6 | 192, t[n++] = 63 & e | 128) : 55296 == (64512 & e) && 56320 == (64512 & (o = r.charCodeAt(i + 1))) ? (e = 65536 + ((1023 & e) << 10) + (1023 & o), ++i, t[n++] = e >> 18 | 240, t[n++] = e >> 12 & 63 | 128, t[n++] = e >> 6 & 63 | 128, t[n++] = 63 & e | 128) : (t[n++] = e >> 12 | 224, t[n++] = e >> 6 & 63 | 128, t[n++] = 63 & e | 128);
			return n - a
		};
	}, {}],
	"0yq+": [function(require, module, exports) {
		"use strict";

		function r(r, n, t) {
			var u = t || 8192,
				e = u >>> 1,
				l = null,
				c = u;
			return function(t) {
				if(t < 1 || t > e) return r(t);
				c + t > u && (l = r(u), c = 0);
				var i = n.call(l, c, c += t);
				return 7 & c && (c = 1 + (7 | c)), i
			}
		}
		module.exports = r;
	}, {}],
	"mM8D": [function(require, module, exports) {
		"use strict";
		module.exports = i;
		var t = require("../util/minimal");

		function i(t, i) {
			this.lo = t >>> 0, this.hi = i >>> 0
		}
		var o = i.zero = new i(0, 0);
		o.toNumber = function() {
			return 0
		}, o.zzEncode = o.zzDecode = function() {
			return this
		}, o.length = function() {
			return 1
		};
		var r = i.zeroHash = "\0\0\0\0\0\0\0\0";
		i.fromNumber = function(t) {
			if(0 === t) return o;
			var r = t < 0;
			r && (t = -t);
			var h = t >>> 0,
				n = (t - h) / 4294967296 >>> 0;
			return r && (n = ~n >>> 0, h = ~h >>> 0, ++h > 4294967295 && (h = 0, ++n > 4294967295 && (n = 0))), new i(h, n)
		}, i.from = function(r) {
			if("number" == typeof r) return i.fromNumber(r);
			if(t.isString(r)) {
				if(!t.Long) return i.fromNumber(parseInt(r, 10));
				r = t.Long.fromString(r)
			}
			return r.low || r.high ? new i(r.low >>> 0, r.high >>> 0) : o
		}, i.prototype.toNumber = function(t) {
			if(!t && this.hi >>> 31) {
				var i = 1 + ~this.lo >>> 0,
					o = ~this.hi >>> 0;
				return i || (o = o + 1 >>> 0), -(i + 4294967296 * o)
			}
			return this.lo + 4294967296 * this.hi
		}, i.prototype.toLong = function(i) {
			return t.Long ? new t.Long(0 | this.lo, 0 | this.hi, Boolean(i)) : {
				low: 0 | this.lo,
				high: 0 | this.hi,
				unsigned: Boolean(i)
			}
		};
		var h = String.prototype.charCodeAt;
		i.fromHash = function(t) {
			return t === r ? o : new i((h.call(t, 0) | h.call(t, 1) << 8 | h.call(t, 2) << 16 | h.call(t, 3) << 24) >>> 0, (h.call(t, 4) | h.call(t, 5) << 8 | h.call(t, 6) << 16 | h.call(t, 7) << 24) >>> 0)
		}, i.prototype.toHash = function() {
			return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
		}, i.prototype.zzEncode = function() {
			var t = this.hi >> 31;
			return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
		}, i.prototype.zzDecode = function() {
			var t = -(1 & this.lo);
			return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
		}, i.prototype.length = function() {
			var t = this.lo,
				i = (this.lo >>> 28 | this.hi << 4) >>> 0,
				o = this.hi >>> 24;
			return 0 === o ? 0 === i ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : o < 128 ? 9 : 10
		};
	}, {
		"../util/minimal": "+OqZ"
	}],
	"FRly": [function(require, module, exports) {
		"use strict";
		exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;
		for(var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) r[o] = n[o], t[n.charCodeAt(o)] = o;

		function h(r) {
			var t = r.length;
			if(t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var e = r.indexOf("=");
			return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4]
		}

		function u(r) {
			var t = h(r),
				e = t[0],
				n = t[1];
			return 3 * (e + n) / 4 - n
		}

		function c(r, t, e) {
			return 3 * (t + e) / 4 - e
		}

		function i(r) {
			for(var n, o = h(r), a = o[0], u = o[1], i = new e(c(r, a, u)), f = 0, A = u > 0 ? a - 4 : a, d = 0; d < A; d += 4) n = t[r.charCodeAt(d)] << 18 | t[r.charCodeAt(d + 1)] << 12 | t[r.charCodeAt(d + 2)] << 6 | t[r.charCodeAt(d + 3)], i[f++] = n >> 16 & 255, i[f++] = n >> 8 & 255, i[f++] = 255 & n;
			return 2 === u && (n = t[r.charCodeAt(d)] << 2 | t[r.charCodeAt(d + 1)] >> 4, i[f++] = 255 & n), 1 === u && (n = t[r.charCodeAt(d)] << 10 | t[r.charCodeAt(d + 1)] << 4 | t[r.charCodeAt(d + 2)] >> 2, i[f++] = n >> 8 & 255, i[f++] = 255 & n), i
		}

		function f(t) {
			return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
		}

		function A(r, t, e) {
			for(var n, o = [], a = t; a < e; a += 3) n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n));
			return o.join("")
		}

		function d(t) {
			for(var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383) a.push(A(t, h, h + 16383 > u ? u : h + 16383));
			return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("")
		}
		t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
	}, {}],
	"Quj6": [function(require, module, exports) {
		exports.read = function(a, o, t, r, h) {
			var M, p, w = 8 * h - r - 1,
				f = (1 << w) - 1,
				e = f >> 1,
				i = -7,
				N = t ? h - 1 : 0,
				n = t ? -1 : 1,
				s = a[o + N];
			for(N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8);
			for(p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8);
			if(0 === M) M = 1 - e;
			else {
				if(M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
				p += Math.pow(2, r), M -= e
			}
			return(s ? -1 : 1) * p * Math.pow(2, M - r)
		}, exports.write = function(a, o, t, r, h, M) {
			var p, w, f, e = 8 * M - h - 1,
				i = (1 << e) - 1,
				N = i >> 1,
				n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				s = r ? 0 : M - 1,
				u = r ? 1 : -1,
				l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
			for(o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8);
			for(p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8);
			a[t + s - u] |= 128 * l
		};
	}, {}],
	"aq/z": [function(require, module, exports) {
		var r = {}.toString;
		module.exports = Array.isArray || function(t) {
			return "[object Array]" == r.call(t)
		};
	}, {}],
	"aMB2": [function(require, module, exports) {

		var global = arguments[3];
		var t = arguments[3],
			r = require("base64-js"),
			e = require("ieee754"),
			n = require("isarray");

		function i() {
			try {
				var t = new Uint8Array(1);
				return t.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42
					}
				}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
			} catch(r) {
				return !1
			}
		}

		function o() {
			return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
		}

		function u(t, r) {
			if(o() < r) throw new RangeError("Invalid typed array length");
			return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r), t
		}

		function f(t, r, e) {
			if(!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, r, e);
			if("number" == typeof t) {
				if("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");
				return c(this, t)
			}
			return s(this, t, r, e)
		}

		function s(t, r, e, n) {
			if("number" == typeof r) throw new TypeError('"value" argument must not be a number');
			return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r)
		}

		function h(t) {
			if("number" != typeof t) throw new TypeError('"size" argument must be a number');
			if(t < 0) throw new RangeError('"size" argument must not be negative')
		}

		function a(t, r, e, n) {
			return h(r), r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r)
		}

		function c(t, r) {
			if(h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT)
				for(var e = 0; e < r; ++e) t[e] = 0;
			return t
		}

		function l(t, r, e) {
			if("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
			var n = 0 | v(r, e),
				i = (t = u(t, n)).write(r, e);
			return i !== n && (t = t.slice(0, i)), t
		}

		function p(t, r) {
			var e = r.length < 0 ? 0 : 0 | w(r.length);
			t = u(t, e);
			for(var n = 0; n < e; n += 1) t[n] = 255 & r[n];
			return t
		}

		function g(t, r, e, n) {
			if(r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
			if(r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
			return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r), t
		}

		function y(t, r) {
			if(f.isBuffer(r)) {
				var e = 0 | w(r.length);
				return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t)
			}
			if(r) {
				if("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
				if("Buffer" === r.type && n(r.data)) return p(t, r.data)
			}
			throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
		}

		function w(t) {
			if(t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
			return 0 | t
		}

		function d(t) {
			return +t != t && (t = 0), f.alloc(+t)
		}

		function v(t, r) {
			if(f.isBuffer(t)) return t.length;
			if("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
			"string" != typeof t && (t = "" + t);
			var e = t.length;
			if(0 === e) return 0;
			for(var n = !1;;) switch(r) {
				case "ascii":
				case "latin1":
				case "binary":
					return e;
				case "utf8":
				case "utf-8":
				case void 0:
					return $(t).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * e;
				case "hex":
					return e >>> 1;
				case "base64":
					return K(t).length;
				default:
					if(n) return $(t).length;
					r = ("" + r).toLowerCase(), n = !0
			}
		}

		function E(t, r, e) {
			var n = !1;
			if((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
			if((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
			if((e >>>= 0) <= (r >>>= 0)) return "";
			for(t || (t = "utf8");;) switch(t) {
				case "hex":
					return x(this, r, e);
				case "utf8":
				case "utf-8":
					return Y(this, r, e);
				case "ascii":
					return L(this, r, e);
				case "latin1":
				case "binary":
					return D(this, r, e);
				case "base64":
					return S(this, r, e);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return C(this, r, e);
				default:
					if(n) throw new TypeError("Unknown encoding: " + t);
					t = (t + "").toLowerCase(), n = !0
			}
		}

		function b(t, r, e) {
			var n = t[r];
			t[r] = t[e], t[e] = n
		}

		function R(t, r, e, n, i) {
			if(0 === t.length) return -1;
			if("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
				if(i) return -1;
				e = t.length - 1
			} else if(e < 0) {
				if(!i) return -1;
				e = 0
			}
			if("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)) return 0 === r.length ? -1 : _(t, r, e, n, i);
			if("number" == typeof r) return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i);
			throw new TypeError("val must be string, number or Buffer")
		}

		function _(t, r, e, n, i) {
			var o, u = 1,
				f = t.length,
				s = r.length;
			if(void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
				if(t.length < 2 || r.length < 2) return -1;
				u = 2, f /= 2, s /= 2, e /= 2
			}

			function h(t, r) {
				return 1 === u ? t[r] : t.readUInt16BE(r * u)
			}
			if(i) {
				var a = -1;
				for(o = e; o < f; o++)
					if(h(t, o) === h(r, -1 === a ? 0 : o - a)) {
						if(-1 === a && (a = o), o - a + 1 === s) return a * u
					} else -1 !== a && (o -= o - a), a = -1
			} else
				for(e + s > f && (e = f - s), o = e; o >= 0; o--) {
					for(var c = !0, l = 0; l < s; l++)
						if(h(t, o + l) !== h(r, l)) {
							c = !1;
							break
						}
					if(c) return o
				}
			return -1
		}

		function A(t, r, e, n) {
			e = Number(e) || 0;
			var i = t.length - e;
			n ? (n = Number(n)) > i && (n = i) : n = i;
			var o = r.length;
			if(o % 2 != 0) throw new TypeError("Invalid hex string");
			n > o / 2 && (n = o / 2);
			for(var u = 0; u < n; ++u) {
				var f = parseInt(r.substr(2 * u, 2), 16);
				if(isNaN(f)) return u;
				t[e + u] = f
			}
			return u
		}

		function m(t, r, e, n) {
			return Q($(r, t.length - e), t, e, n)
		}

		function P(t, r, e, n) {
			return Q(G(r), t, e, n)
		}

		function T(t, r, e, n) {
			return P(t, r, e, n)
		}

		function B(t, r, e, n) {
			return Q(K(r), t, e, n)
		}

		function U(t, r, e, n) {
			return Q(H(r, t.length - e), t, e, n)
		}

		function S(t, e, n) {
			return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
		}

		function Y(t, r, e) {
			e = Math.min(t.length, e);
			for(var n = [], i = r; i < e;) {
				var o, u, f, s, h = t[i],
					a = null,
					c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
				if(i + c <= e) switch(c) {
					case 1:
						h < 128 && (a = h);
						break;
					case 2:
						128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
						break;
					case 3:
						o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s);
						break;
					case 4:
						o = t[i + 1], u = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s)
				}
				null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += c
			}
			return O(n)
		}
		exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), exports.kMaxLength = o(), f.poolSize = 8192, f._augment = function(t) {
			return t.__proto__ = f.prototype, t
		}, f.from = function(t, r, e) {
			return s(null, t, r, e)
		}, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
			value: null,
			configurable: !0
		})), f.alloc = function(t, r, e) {
			return a(null, t, r, e)
		}, f.allocUnsafe = function(t) {
			return c(null, t)
		}, f.allocUnsafeSlow = function(t) {
			return c(null, t)
		}, f.isBuffer = function(t) {
			return !(null == t || !t._isBuffer)
		}, f.compare = function(t, r) {
			if(!f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
			if(t === r) return 0;
			for(var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
				if(t[i] !== r[i]) {
					e = t[i], n = r[i];
					break
				}
			return e < n ? -1 : n < e ? 1 : 0
		}, f.isEncoding = function(t) {
			switch(String(t).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;
				default:
					return !1
			}
		}, f.concat = function(t, r) {
			if(!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
			if(0 === t.length) return f.alloc(0);
			var e;
			if(void 0 === r)
				for(r = 0, e = 0; e < t.length; ++e) r += t[e].length;
			var i = f.allocUnsafe(r),
				o = 0;
			for(e = 0; e < t.length; ++e) {
				var u = t[e];
				if(!f.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
				u.copy(i, o), o += u.length
			}
			return i
		}, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function() {
			var t = this.length;
			if(t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for(var r = 0; r < t; r += 2) b(this, r, r + 1);
			return this
		}, f.prototype.swap32 = function() {
			var t = this.length;
			if(t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for(var r = 0; r < t; r += 4) b(this, r, r + 3), b(this, r + 1, r + 2);
			return this
		}, f.prototype.swap64 = function() {
			var t = this.length;
			if(t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for(var r = 0; r < t; r += 8) b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
			return this
		}, f.prototype.toString = function() {
			var t = 0 | this.length;
			return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments)
		}, f.prototype.equals = function(t) {
			if(!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			return this === t || 0 === f.compare(this, t)
		}, f.prototype.inspect = function() {
			var t = "",
				r = exports.INSPECT_MAX_BYTES;
			return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
		}, f.prototype.compare = function(t, r, e, n, i) {
			if(!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			if(void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
			if(n >= i && r >= e) return 0;
			if(n >= i) return -1;
			if(r >= e) return 1;
			if(this === t) return 0;
			for(var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c)
				if(h[c] !== a[c]) {
					o = h[c], u = a[c];
					break
				}
			return o < u ? -1 : u < o ? 1 : 0
		}, f.prototype.includes = function(t, r, e) {
			return -1 !== this.indexOf(t, r, e)
		}, f.prototype.indexOf = function(t, r, e) {
			return R(this, t, r, e, !0)
		}, f.prototype.lastIndexOf = function(t, r, e) {
			return R(this, t, r, e, !1)
		}, f.prototype.write = function(t, r, e, n) {
			if(void 0 === r) n = "utf8", e = this.length, r = 0;
			else if(void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;
			else {
				if(!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
				r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
			}
			var i = this.length - r;
			if((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			n || (n = "utf8");
			for(var o = !1;;) switch(n) {
				case "hex":
					return A(this, t, r, e);
				case "utf8":
				case "utf-8":
					return m(this, t, r, e);
				case "ascii":
					return P(this, t, r, e);
				case "latin1":
				case "binary":
					return T(this, t, r, e);
				case "base64":
					return B(this, t, r, e);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return U(this, t, r, e);
				default:
					if(o) throw new TypeError("Unknown encoding: " + n);
					n = ("" + n).toLowerCase(), o = !0
			}
		}, f.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};
		var I = 4096;

		function O(t) {
			var r = t.length;
			if(r <= I) return String.fromCharCode.apply(String, t);
			for(var e = "", n = 0; n < r;) e += String.fromCharCode.apply(String, t.slice(n, n += I));
			return e
		}

		function L(t, r, e) {
			var n = "";
			e = Math.min(t.length, e);
			for(var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
			return n
		}

		function D(t, r, e) {
			var n = "";
			e = Math.min(t.length, e);
			for(var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
			return n
		}

		function x(t, r, e) {
			var n = t.length;
			(!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
			for(var i = "", o = r; o < e; ++o) i += Z(t[o]);
			return i
		}

		function C(t, r, e) {
			for(var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
			return i
		}

		function M(t, r, e) {
			if(t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
			if(t + r > e) throw new RangeError("Trying to access beyond buffer length")
		}

		function k(t, r, e, n, i, o) {
			if(!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if(r > i || r < o) throw new RangeError('"value" argument is out of bounds');
			if(e + n > t.length) throw new RangeError("Index out of range")
		}

		function N(t, r, e, n) {
			r < 0 && (r = 65535 + r + 1);
			for(var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
		}

		function z(t, r, e, n) {
			r < 0 && (r = 4294967295 + r + 1);
			for(var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255
		}

		function F(t, r, e, n, i, o) {
			if(e + n > t.length) throw new RangeError("Index out of range");
			if(e < 0) throw new RangeError("Index out of range")
		}

		function j(t, r, n, i, o) {
			return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), e.write(t, r, n, i, 23, 4), n + 4
		}

		function q(t, r, n, i, o) {
			return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), e.write(t, r, n, i, 52, 8), n + 8
		}
		f.prototype.slice = function(t, r) {
			var e, n = this.length;
			if((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, r)).__proto__ = f.prototype;
			else {
				var i = r - t;
				e = new f(i, void 0);
				for(var o = 0; o < i; ++o) e[o] = this[o + t]
			}
			return e
		}, f.prototype.readUIntLE = function(t, r, e) {
			t |= 0, r |= 0, e || M(t, r, this.length);
			for(var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
			return n
		}, f.prototype.readUIntBE = function(t, r, e) {
			t |= 0, r |= 0, e || M(t, r, this.length);
			for(var n = this[t + --r], i = 1; r > 0 && (i *= 256);) n += this[t + --r] * i;
			return n
		}, f.prototype.readUInt8 = function(t, r) {
			return r || M(t, 1, this.length), this[t]
		}, f.prototype.readUInt16LE = function(t, r) {
			return r || M(t, 2, this.length), this[t] | this[t + 1] << 8
		}, f.prototype.readUInt16BE = function(t, r) {
			return r || M(t, 2, this.length), this[t] << 8 | this[t + 1]
		}, f.prototype.readUInt32LE = function(t, r) {
			return r || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
		}, f.prototype.readUInt32BE = function(t, r) {
			return r || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
		}, f.prototype.readIntLE = function(t, r, e) {
			t |= 0, r |= 0, e || M(t, r, this.length);
			for(var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
			return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n
		}, f.prototype.readIntBE = function(t, r, e) {
			t |= 0, r |= 0, e || M(t, r, this.length);
			for(var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
			return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o
		}, f.prototype.readInt8 = function(t, r) {
			return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
		}, f.prototype.readInt16LE = function(t, r) {
			r || M(t, 2, this.length);
			var e = this[t] | this[t + 1] << 8;
			return 32768 & e ? 4294901760 | e : e
		}, f.prototype.readInt16BE = function(t, r) {
			r || M(t, 2, this.length);
			var e = this[t + 1] | this[t] << 8;
			return 32768 & e ? 4294901760 | e : e
		}, f.prototype.readInt32LE = function(t, r) {
			return r || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
		}, f.prototype.readInt32BE = function(t, r) {
			return r || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
		}, f.prototype.readFloatLE = function(t, r) {
			return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4)
		}, f.prototype.readFloatBE = function(t, r) {
			return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4)
		}, f.prototype.readDoubleLE = function(t, r) {
			return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8)
		}, f.prototype.readDoubleBE = function(t, r) {
			return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8)
		}, f.prototype.writeUIntLE = function(t, r, e, n) {
			(t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
			var i = 1,
				o = 0;
			for(this[r] = 255 & t; ++o < e && (i *= 256);) this[r + o] = t / i & 255;
			return r + e
		}, f.prototype.writeUIntBE = function(t, r, e, n) {
			(t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
			var i = e - 1,
				o = 1;
			for(this[r + i] = 255 & t; --i >= 0 && (o *= 256);) this[r + i] = t / o & 255;
			return r + e
		}, f.prototype.writeUInt8 = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1
		}, f.prototype.writeUInt16LE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2
		}, f.prototype.writeUInt16BE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2
		}, f.prototype.writeUInt32LE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0), r + 4
		}, f.prototype.writeUInt32BE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4
		}, f.prototype.writeIntLE = function(t, r, e, n) {
			if(t = +t, r |= 0, !n) {
				var i = Math.pow(2, 8 * e - 1);
				k(this, t, r, e, i - 1, -i)
			}
			var o = 0,
				u = 1,
				f = 0;
			for(this[r] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
			return r + e
		}, f.prototype.writeIntBE = function(t, r, e, n) {
			if(t = +t, r |= 0, !n) {
				var i = Math.pow(2, 8 * e - 1);
				k(this, t, r, e, i - 1, -i)
			}
			var o = e - 1,
				u = 1,
				f = 0;
			for(this[r + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
			return r + e
		}, f.prototype.writeInt8 = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
		}, f.prototype.writeInt16LE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2
		}, f.prototype.writeInt16BE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2
		}, f.prototype.writeInt32LE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0), r + 4
		}, f.prototype.writeInt32BE = function(t, r, e) {
			return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4
		}, f.prototype.writeFloatLE = function(t, r, e) {
			return j(this, t, r, !0, e)
		}, f.prototype.writeFloatBE = function(t, r, e) {
			return j(this, t, r, !1, e)
		}, f.prototype.writeDoubleLE = function(t, r, e) {
			return q(this, t, r, !0, e)
		}, f.prototype.writeDoubleBE = function(t, r, e) {
			return q(this, t, r, !1, e)
		}, f.prototype.copy = function(t, r, e, n) {
			if(e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
			if(0 === t.length || 0 === this.length) return 0;
			if(r < 0) throw new RangeError("targetStart out of bounds");
			if(e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
			if(n < 0) throw new RangeError("sourceEnd out of bounds");
			n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
			var i, o = n - e;
			if(this === t && e < r && r < n)
				for(i = o - 1; i >= 0; --i) t[i + r] = this[i + e];
			else if(o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
				for(i = 0; i < o; ++i) t[i + r] = this[i + e];
			else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
			return o
		}, f.prototype.fill = function(t, r, e, n) {
			if("string" == typeof t) {
				if("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) {
					var i = t.charCodeAt(0);
					i < 256 && (t = i)
				}
				if(void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
				if("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
			} else "number" == typeof t && (t &= 255);
			if(r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
			if(e <= r) return this;
			var o;
			if(r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
				for(o = r; o < e; ++o) this[o] = t;
			else {
				var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
					s = u.length;
				for(o = 0; o < e - r; ++o) this[o + r] = u[o % s]
			}
			return this
		};
		var V = /[^+\/0-9A-Za-z-_]/g;

		function X(t) {
			if((t = J(t).replace(V, "")).length < 2) return "";
			for(; t.length % 4 != 0;) t += "=";
			return t
		}

		function J(t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		}

		function Z(t) {
			return t < 16 ? "0" + t.toString(16) : t.toString(16)
		}

		function $(t, r) {
			var e;
			r = r || 1 / 0;
			for(var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
				if((e = t.charCodeAt(u)) > 55295 && e < 57344) {
					if(!i) {
						if(e > 56319) {
							(r -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						if(u + 1 === n) {
							(r -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						i = e;
						continue
					}
					if(e < 56320) {
						(r -= 3) > -1 && o.push(239, 191, 189), i = e;
						continue
					}
					e = 65536 + (i - 55296 << 10 | e - 56320)
				} else i && (r -= 3) > -1 && o.push(239, 191, 189);
				if(i = null, e < 128) {
					if((r -= 1) < 0) break;
					o.push(e)
				} else if(e < 2048) {
					if((r -= 2) < 0) break;
					o.push(e >> 6 | 192, 63 & e | 128)
				} else if(e < 65536) {
					if((r -= 3) < 0) break;
					o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
				} else {
					if(!(e < 1114112)) throw new Error("Invalid code point");
					if((r -= 4) < 0) break;
					o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
				}
			}
			return o
		}

		function G(t) {
			for(var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
			return r
		}

		function H(t, r) {
			for(var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u) n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
			return o
		}

		function K(t) {
			return r.toByteArray(X(t))
		}

		function Q(t, r, e, n) {
			for(var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
			return i
		}

		function W(t) {
			return t != t
		}
	}, {
		"base64-js": "FRly",
		"ieee754": "Quj6",
		"isarray": "aq/z",
		"buffer": "aMB2"
	}],
	"+OqZ": [function(require, module, exports) {
		var global = arguments[3];
		var Buffer = require("buffer").Buffer;
		var e = arguments[3],
			r = require("buffer").Buffer,
			t = exports;

		function n(e, r, t) {
			for(var n = Object.keys(r), o = 0; o < n.length; ++o) void 0 !== e[n[o]] && t || (e[n[o]] = r[n[o]]);
			return e
		}

		function o(e) {
			function r(e, t) {
				if(!(this instanceof r)) return new r(e, t);
				Object.defineProperty(this, "message", {
					get: function() {
						return e
					}
				}), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", {
					value: (new Error).stack || ""
				}), t && n(this, t)
			}
			return(r.prototype = Object.create(Error.prototype)).constructor = r, Object.defineProperty(r.prototype, "name", {
				get: function() {
					return e
				}
			}), r.prototype.toString = function() {
				return this.name + ": " + this.message
			}, r
		}
		t.asPromise = require("@protobufjs/aspromise"), t.base64 = require("@protobufjs/base64"), t.EventEmitter = require("@protobufjs/eventemitter"), t.float = require("@protobufjs/float"), t.inquire = require("@protobufjs/inquire"), t.utf8 = require("@protobufjs/utf8"), t.pool = require("@protobufjs/pool"), t.LongBits = require("./longbits"), t.global = "undefined" != typeof window && window || void 0 !== e && e || "undefined" != typeof self && self || this, t.emptyArray = Object.freeze ? Object.freeze([]) : [], t.emptyObject = Object.freeze ? Object.freeze({}) : {}, t.isNode = Boolean(t.global.process && t.global.process.versions && t.global.process.versions.node), t.isInteger = Number.isInteger || function(e) {
			return "number" == typeof e && isFinite(e) && Math.floor(e) === e
		}, t.isString = function(e) {
			return "string" == typeof e || e instanceof String
		}, t.isObject = function(e) {
			return e && "object" == typeof e
		}, t.isset = t.isSet = function(e, r) {
			var t = e[r];
			return !(null == t || !e.hasOwnProperty(r)) && ("object" != typeof t || (Array.isArray(t) ? t.length : Object.keys(t).length) > 0)
		}, t.Buffer = function() {
			try {
				var e = t.inquire("buffer").Buffer;
				return e.prototype.utf8Write ? e : null
			} catch(r) {
				return null
			}
		}(), t._Buffer_from = null, t._Buffer_allocUnsafe = null, t.newBuffer = function(e) {
			return "number" == typeof e ? t.Buffer ? t._Buffer_allocUnsafe(e) : new t.Array(e) : t.Buffer ? t._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
		}, t.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, t.Long = t.global.dcodeIO && t.global.dcodeIO.Long || t.global.Long || t.inquire("long"), t.key2Re = /^true|false|0|1$/, t.key32Re = /^-?(?:0|[1-9][0-9]*)$/, t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, t.longToHash = function(e) {
			return e ? t.LongBits.from(e).toHash() : t.LongBits.zeroHash
		}, t.longFromHash = function(e, r) {
			var n = t.LongBits.fromHash(e);
			return t.Long ? t.Long.fromBits(n.lo, n.hi, r) : n.toNumber(Boolean(r))
		}, t.merge = n, t.lcFirst = function(e) {
			return e.charAt(0).toLowerCase() + e.substring(1)
		}, t.newError = o, t.ProtocolError = o("ProtocolError"), t.oneOfGetter = function(e) {
			for(var r = {}, t = 0; t < e.length; ++t) r[e[t]] = 1;
			return function() {
				for(var e = Object.keys(this), t = e.length - 1; t > -1; --t)
					if(1 === r[e[t]] && void 0 !== this[e[t]] && null !== this[e[t]]) return e[t]
			}
		}, t.oneOfSetter = function(e) {
			return function(r) {
				for(var t = 0; t < e.length; ++t) e[t] !== r && delete this[e[t]]
			}
		}, t.toJSONOptions = {
			longs: String,
			enums: String,
			bytes: String,
			json: !0
		}, t._configure = function() {
			var e = t.Buffer;
			e ? (t._Buffer_from = e.from !== Uint8Array.from && e.from || function(r, t) {
				return new e(r, t)
			}, t._Buffer_allocUnsafe = e.allocUnsafe || function(r) {
				return new e(r)
			}) : t._Buffer_from = t._Buffer_allocUnsafe = null
		};
	}, {
		"@protobufjs/aspromise": "5Ezc",
		"@protobufjs/base64": "20Fs",
		"@protobufjs/eventemitter": "JI1+",
		"@protobufjs/float": "M11I",
		"@protobufjs/inquire": "MXG9",
		"@protobufjs/utf8": "HIDA",
		"@protobufjs/pool": "0yq+",
		"./longbits": "mM8D",
		"buffer": "aMB2"
	}],
	"uteQ": [function(require, module, exports) {
		"use strict";
		module.exports = u;
		var t, i = require("./util/minimal"),
			n = i.LongBits,
			e = i.base64,
			o = i.utf8;

		function r(t, i, n) {
			this.fn = t, this.len = i, this.next = void 0, this.val = n
		}

		function s() {}

		function h(t) {
			this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
		}

		function u() {
			this.len = 0, this.head = new r(s, 0, 0), this.tail = this.head, this.states = null
		}

		function l(t, i, n) {
			i[n] = 255 & t
		}

		function p(t, i, n) {
			for(; t > 127;) i[n++] = 127 & t | 128, t >>>= 7;
			i[n] = t
		}

		function a(t, i) {
			this.len = t, this.next = void 0, this.val = i
		}

		function f(t, i, n) {
			for(; t.hi;) i[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
			for(; t.lo > 127;) i[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
			i[n++] = t.lo
		}

		function c(t, i, n) {
			i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
		}
		u.create = i.Buffer ? function() {
			return(u.create = function() {
				return new t
			})()
		} : function() {
			return new u
		}, u.alloc = function(t) {
			return new i.Array(t)
		}, i.Array !== Array && (u.alloc = i.pool(u.alloc, i.Array.prototype.subarray)), u.prototype._push = function(t, i, n) {
			return this.tail = this.tail.next = new r(t, i, n), this.len += i, this
		}, a.prototype = Object.create(r.prototype), a.prototype.fn = p, u.prototype.uint32 = function(t) {
			return this.len += (this.tail = this.tail.next = new a((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
		}, u.prototype.int32 = function(t) {
			return t < 0 ? this._push(f, 10, n.fromNumber(t)) : this.uint32(t)
		}, u.prototype.sint32 = function(t) {
			return this.uint32((t << 1 ^ t >> 31) >>> 0)
		}, u.prototype.uint64 = function(t) {
			var i = n.from(t);
			return this._push(f, i.length(), i)
		}, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(t) {
			var i = n.from(t).zzEncode();
			return this._push(f, i.length(), i)
		}, u.prototype.bool = function(t) {
			return this._push(l, 1, t ? 1 : 0)
		}, u.prototype.fixed32 = function(t) {
			return this._push(c, 4, t >>> 0)
		}, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(t) {
			var i = n.from(t);
			return this._push(c, 4, i.lo)._push(c, 4, i.hi)
		}, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(t) {
			return this._push(i.float.writeFloatLE, 4, t)
		}, u.prototype.double = function(t) {
			return this._push(i.float.writeDoubleLE, 8, t)
		};
		var y = i.Array.prototype.set ? function(t, i, n) {
			i.set(t, n)
		} : function(t, i, n) {
			for(var e = 0; e < t.length; ++e) i[n + e] = t[e]
		};
		u.prototype.bytes = function(t) {
			var n = t.length >>> 0;
			if(!n) return this._push(l, 1, 0);
			if(i.isString(t)) {
				var o = u.alloc(n = e.length(t));
				e.decode(t, o, 0), t = o
			}
			return this.uint32(n)._push(y, n, t)
		}, u.prototype.string = function(t) {
			var i = o.length(t);
			return i ? this.uint32(i)._push(o.write, i, t) : this._push(l, 1, 0)
		}, u.prototype.fork = function() {
			return this.states = new h(this), this.head = this.tail = new r(s, 0, 0), this.len = 0, this
		}, u.prototype.reset = function() {
			return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new r(s, 0, 0), this.len = 0), this
		}, u.prototype.ldelim = function() {
			var t = this.head,
				i = this.tail,
				n = this.len;
			return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = i, this.len += n), this
		}, u.prototype.finish = function() {
			for(var t = this.head.next, i = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, i, n), n += t.len, t = t.next;
			return i
		}, u._configure = function(i) {
			t = i
		};
	}, {
		"./util/minimal": "+OqZ"
	}],
	"CkBE": [function(require, module, exports) {

		"use strict";
		module.exports = n;
		var t = require("./writer");
		(n.prototype = Object.create(t.prototype)).constructor = n;
		var e = require("./util/minimal"),
			r = e.Buffer;

		function n() {
			t.call(this)
		}
		n.alloc = function(t) {
			return(n.alloc = e._Buffer_allocUnsafe)(t)
		};
		var i = r && r.prototype instanceof Uint8Array && "set" === r.prototype.set.name ? function(t, e, r) {
			e.set(t, r)
		} : function(t, e, r) {
			if(t.copy) t.copy(e, r, 0, t.length);
			else
				for(var n = 0; n < t.length;) e[r++] = t[n++]
		};

		function o(t, r, n) {
			t.length < 40 ? e.utf8.write(t, r, n) : r.utf8Write(t, n)
		}
		n.prototype.bytes = function(t) {
			e.isString(t) && (t = e._Buffer_from(t, "base64"));
			var r = t.length >>> 0;
			return this.uint32(r), r && this._push(i, r, t), this
		}, n.prototype.string = function(t) {
			var e = r.byteLength(t);
			return this.uint32(e), e && this._push(o, e, t), this
		};
	}, {
		"./writer": "uteQ",
		"./util/minimal": "+OqZ"
	}],
	"nX4I": [function(require, module, exports) {
		"use strict";
		module.exports = h;
		var t, i = require("./util/minimal"),
			s = i.LongBits,
			r = i.utf8;

		function o(t, i) {
			return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len)
		}

		function h(t) {
			this.buf = t, this.pos = 0, this.len = t.length
		}
		var n = "undefined" != typeof Uint8Array ? function(t) {
			if(t instanceof Uint8Array || Array.isArray(t)) return new h(t);
			throw Error("illegal buffer")
		} : function(t) {
			if(Array.isArray(t)) return new h(t);
			throw Error("illegal buffer")
		};

		function e() {
			var t = new s(0, 0),
				i = 0;
			if(!(this.len - this.pos > 4)) {
				for(; i < 3; ++i) {
					if(this.pos >= this.len) throw o(this);
					if(t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t
				}
				return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0, t
			}
			for(; i < 4; ++i)
				if(t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t;
			if(t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
			if(i = 0, this.len - this.pos > 4) {
				for(; i < 5; ++i)
					if(t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
			} else
				for(; i < 5; ++i) {
					if(this.pos >= this.len) throw o(this);
					if(t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
				}
			throw Error("invalid varint encoding")
		}

		function u(t, i) {
			return(t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0
		}

		function f() {
			if(this.pos + 8 > this.len) throw o(this, 8);
			return new s(u(this.buf, this.pos += 4), u(this.buf, this.pos += 4))
		}
		h.create = i.Buffer ? function(s) {
			return(h.create = function(s) {
				return i.Buffer.isBuffer(s) ? new t(s) : n(s)
			})(s)
		} : n, h.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, h.prototype.uint32 = function() {
			var t = 4294967295;
			return function() {
				if(t = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return t;
				if(t = (t | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return t;
				if(t = (t | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return t;
				if(t = (t | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return t;
				if(t = (t | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return t;
				if((this.pos += 5) > this.len) throw this.pos = this.len, o(this, 10);
				return t
			}
		}(), h.prototype.int32 = function() {
			return 0 | this.uint32()
		}, h.prototype.sint32 = function() {
			var t = this.uint32();
			return t >>> 1 ^ -(1 & t) | 0
		}, h.prototype.bool = function() {
			return 0 !== this.uint32()
		}, h.prototype.fixed32 = function() {
			if(this.pos + 4 > this.len) throw o(this, 4);
			return u(this.buf, this.pos += 4)
		}, h.prototype.sfixed32 = function() {
			if(this.pos + 4 > this.len) throw o(this, 4);
			return 0 | u(this.buf, this.pos += 4)
		}, h.prototype.float = function() {
			if(this.pos + 4 > this.len) throw o(this, 4);
			var t = i.float.readFloatLE(this.buf, this.pos);
			return this.pos += 4, t
		}, h.prototype.double = function() {
			if(this.pos + 8 > this.len) throw o(this, 4);
			var t = i.float.readDoubleLE(this.buf, this.pos);
			return this.pos += 8, t
		}, h.prototype.bytes = function() {
			var t = this.uint32(),
				i = this.pos,
				s = this.pos + t;
			if(s > this.len) throw o(this, t);
			return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, s) : i === s ? new this.buf.constructor(0) : this._slice.call(this.buf, i, s)
		}, h.prototype.string = function() {
			var t = this.bytes();
			return r.read(t, 0, t.length)
		}, h.prototype.skip = function(t) {
			if("number" == typeof t) {
				if(this.pos + t > this.len) throw o(this, t);
				this.pos += t
			} else
				do {
					if(this.pos >= this.len) throw o(this)
				} while (128 & this.buf[this.pos++]);
			return this
		}, h.prototype.skipType = function(t) {
			switch(t) {
				case 0:
					this.skip();
					break;
				case 1:
					this.skip(8);
					break;
				case 2:
					this.skip(this.uint32());
					break;
				case 3:
					for(; 4 != (t = 7 & this.uint32());) this.skipType(t);
					break;
				case 5:
					this.skip(4);
					break;
				default:
					throw Error("invalid wire type " + t + " at offset " + this.pos)
			}
			return this
		}, h._configure = function(s) {
			t = s;
			var r = i.Long ? "toLong" : "toNumber";
			i.merge(h.prototype, {
				int64: function() {
					return e.call(this)[r](!1)
				},
				uint64: function() {
					return e.call(this)[r](!0)
				},
				sint64: function() {
					return e.call(this).zzDecode()[r](!1)
				},
				fixed64: function() {
					return f.call(this)[r](!0)
				},
				sfixed64: function() {
					return f.call(this)[r](!1)
				}
			})
		};
	}, {
		"./util/minimal": "+OqZ"
	}],
	"4pJQ": [function(require, module, exports) {
		"use strict";
		module.exports = r;
		var t = require("./reader");
		(r.prototype = Object.create(t.prototype)).constructor = r;
		var e = require("./util/minimal");

		function r(e) {
			t.call(this, e)
		}
		e.Buffer && (r.prototype._slice = e.Buffer.prototype.slice), r.prototype.string = function() {
			var t = this.uint32();
			return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
		};
	}, {
		"./reader": "nX4I",
		"./util/minimal": "+OqZ"
	}],
	"uviC": [function(require, module, exports) {
		"use strict";
		module.exports = t;
		var e = require("../util/minimal");

		function t(t, r, i) {
			if("function" != typeof t) throw TypeError("rpcImpl must be a function");
			e.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(r), this.responseDelimited = Boolean(i)
		}(t.prototype = Object.create(e.EventEmitter.prototype)).constructor = t, t.prototype.rpcCall = function t(r, i, n, o, l) {
			if(!o) throw TypeError("request must be specified");
			var u = this;
			if(!l) return e.asPromise(t, u, r, i, n, o);
			if(u.rpcImpl) try {
				return u.rpcImpl(r, i[u.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(e, t) {
					if(e) return u.emit("error", e, r), l(e);
					if(null !== t) {
						if(!(t instanceof n)) try {
							t = n[u.responseDelimited ? "decodeDelimited" : "decode"](t)
						} catch(e) {
							return u.emit("error", e, r), l(e)
						}
						return u.emit("data", t, r), l(null, t)
					}
					u.end(!0)
				})
			} catch(c) {
				return u.emit("error", c, r), void setTimeout(function() {
					l(c)
				}, 0)
			} else setTimeout(function() {
				l(Error("already ended"))
			}, 0)
		}, t.prototype.end = function(e) {
			return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
		};
	}, {
		"../util/minimal": "+OqZ"
	}],
	"j3cJ": [function(require, module, exports) {
		"use strict";
		var e = exports;
		e.Service = require("./rpc/service");
	}, {
		"./rpc/service": "uviC"
	}],
	"S/PD": [function(require, module, exports) {
		"use strict";
		module.exports = {};
	}, {}],
	"6BiI": [function(require, module, exports) {
		"use strict";
		var r = exports;

		function e() {
			r.Reader._configure(r.BufferReader), r.util._configure()
		}
		r.build = "minimal", r.Writer = require("./writer"), r.BufferWriter = require("./writer_buffer"), r.Reader = require("./reader"), r.BufferReader = require("./reader_buffer"), r.util = require("./util/minimal"), r.rpc = require("./rpc"), r.roots = require("./roots"), r.configure = e, r.Writer._configure(r.BufferWriter), e();
	}, {
		"./writer": "uteQ",
		"./writer_buffer": "CkBE",
		"./reader": "nX4I",
		"./reader_buffer": "4pJQ",
		"./util/minimal": "+OqZ",
		"./rpc": "j3cJ",
		"./roots": "S/PD"
	}],
	"YmP9": [function(require, module, exports) {
		"use strict";

		function r(n, e) {
			"string" == typeof n && (e = n, n = void 0);
			var t = [];

			function o(n) {
				if("string" != typeof n) {
					var e = i();
					if(r.verbose && console.log("codegen: " + e), e = "return " + e, n) {
						for(var u = Object.keys(n), a = new Array(u.length + 1), c = new Array(u.length), s = 0; s < u.length;) a[s] = u[s], c[s] = n[u[s++]];
						return a[s] = e, Function.apply(null, a).apply(null, c)
					}
					return Function(e)()
				}
				for(var l = new Array(arguments.length - 1), f = 0; f < l.length;) l[f] = arguments[++f];
				if(f = 0, n = n.replace(/%([%dfijs])/g, function(r, n) {
						var e = l[f++];
						switch(n) {
							case "d":
							case "f":
								return String(Number(e));
							case "i":
								return String(Math.floor(e));
							case "j":
								return JSON.stringify(e);
							case "s":
								return String(e)
						}
						return "%"
					}), f !== l.length) throw Error("parameter count mismatch");
				return t.push(n), o
			}

			function i(r) {
				return "function " + (r || e || "") + "(" + (n && n.join(",") || "") + "){\n  " + t.join("\n  ") + "\n}"
			}
			return o.toString = i, o
		}
		module.exports = r, r.verbose = !1;
	}, {}],
	"h5wE": [function(require, module, exports) {
		"use strict";
		module.exports = n;
		var e = require("@protobufjs/aspromise"),
			r = require("@protobufjs/inquire"),
			t = r("fs");

		function n(r, s, i) {
			return "function" == typeof s ? (i = s, s = {}) : s || (s = {}), i ? !s.xhr && t && t.readFile ? t.readFile(r, function(e, t) {
				return e && "undefined" != typeof XMLHttpRequest ? n.xhr(r, s, i) : e ? i(e) : i(null, s.binary ? t : t.toString("utf8"))
			}) : n.xhr(r, s, i) : e(n, this, r, s)
		}
		n.xhr = function(e, r, t) {
			var n = new XMLHttpRequest;
			n.onreadystatechange = function() {
				if(4 === n.readyState) {
					if(0 !== n.status && 200 !== n.status) return t(Error("status " + n.status));
					if(r.binary) {
						var e = n.response;
						if(!e) {
							e = [];
							for(var s = 0; s < n.responseText.length; ++s) e.push(255 & n.responseText.charCodeAt(s))
						}
						return t(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
					}
					return t(null, n.responseText)
				}
			}, r.binary && ("overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined"), n.responseType = "arraybuffer"), n.open("GET", e), n.send()
		};
	}, {
		"@protobufjs/aspromise": "5Ezc",
		"@protobufjs/inquire": "MXG9"
	}],
	"Mao7": [function(require, module, exports) {
		"use strict";
		var e = exports,
			r = e.isAbsolute = function(e) {
				return /^(?:\/|\w+:)/.test(e)
			},
			t = e.normalize = function(e) {
				var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
					n = r(e),
					i = "";
				n && (i = t.shift() + "/");
				for(var l = 0; l < t.length;) ".." === t[l] ? l > 0 && ".." !== t[l - 1] ? t.splice(--l, 2) : n ? t.splice(l, 1) : ++l : "." === t[l] ? t.splice(l, 1) : ++l;
				return i + t.join("/")
			};
		e.resolve = function(e, n, i) {
			return i || (n = t(n)), r(n) ? n : (i || (e = t(e)), (e = e.replace(/(?:\/|^)[^\/]+$/, "")).length ? t(e + "/" + n) : n)
		};
	}, {}],
	"eiCH": [function(require, module, exports) {
		"use strict";
		var t = exports,
			e = require("./util"),
			i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

		function n(t, e) {
			var n = 0,
				r = {};
			for(e |= 0; n < t.length;) r[i[n + e]] = t[n++];
			return r
		}
		t.basic = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), t.defaults = n([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", e.emptyArray, null]), t.long = n([0, 0, 0, 1, 1], 7), t.mapKey = n([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), t.packed = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
	}, {
		"./util": "CVja"
	}],
	"+iVu": [function(require, module, exports) {
		"use strict";
		module.exports = n;
		var t = require("./object");
		((n.prototype = Object.create(t.prototype)).constructor = n).className = "Field";
		var e, i = require("./enum"),
			s = require("./types"),
			o = require("./util"),
			r = /^required|optional|repeated$/;

		function n(e, i, n, p, l, u, a) {
			if(o.isObject(p) ? (a = l, u = p, p = l = void 0) : o.isObject(l) && (a = u, u = l, l = void 0), t.call(this, e, u), !o.isInteger(i) || i < 0) throw TypeError("id must be a non-negative integer");
			if(!o.isString(n)) throw TypeError("type must be a string");
			if(void 0 !== p && !r.test(p = p.toString().toLowerCase())) throw TypeError("rule must be a string rule");
			if(void 0 !== l && !o.isString(l)) throw TypeError("extend must be a string");
			this.rule = p && "optional" !== p ? p : void 0, this.type = n, this.id = i, this.extend = l || void 0, this.required = "required" === p, this.optional = !this.required, this.repeated = "repeated" === p, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!o.Long && void 0 !== s.long[n], this.bytes = "bytes" === n, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = a
		}
		n.fromJSON = function(t, e) {
			return new n(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
		}, Object.defineProperty(n.prototype, "packed", {
			get: function() {
				return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
			}
		}), n.prototype.setOption = function(e, i, s) {
			return "packed" === e && (this._packed = null), t.prototype.setOption.call(this, e, i, s)
		}, n.prototype.toJSON = function(t) {
			var e = !!t && Boolean(t.keepComments);
			return o.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
		}, n.prototype.resolve = function() {
			if(this.resolved) return this;
			if(void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof e ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = o.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
			else if(this.bytes && "string" == typeof this.typeDefault) {
				var r;
				o.base64.test(this.typeDefault) ? o.base64.decode(this.typeDefault, r = o.newBuffer(o.base64.length(this.typeDefault)), 0) : o.utf8.write(this.typeDefault, r = o.newBuffer(o.utf8.length(this.typeDefault)), 0), this.typeDefault = r
			}
			return this.map ? this.defaultValue = o.emptyObject : this.repeated ? this.defaultValue = o.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof e && (this.parent.ctor.prototype[this.name] = this.defaultValue), t.prototype.resolve.call(this)
		}, n.d = function(t, e, i, s) {
			return "function" == typeof e ? e = o.decorateType(e).name : e && "object" == typeof e && (e = o.decorateEnum(e).name),
				function(r, p) {
					o.decorateType(r.constructor).add(new n(p, t, e, i, {
						default: s
					}))
				}
		}, n._configure = function(t) {
			e = t
		};
	}, {
		"./object": "lIB1",
		"./enum": "QVBM",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"Iv+k": [function(require, module, exports) {
		"use strict";
		module.exports = f;
		var t = require("./object");
		((f.prototype = Object.create(t.prototype)).constructor = f).className = "Namespace";
		var e, r, n, o = require("./field"),
			i = require("./util");

		function s(t, e) {
			if(t && t.length) {
				for(var r = {}, n = 0; n < t.length; ++n) r[t[n].name] = t[n].toJSON(e);
				return r
			}
		}

		function f(e, r) {
			t.call(this, e, r), this.nested = void 0, this._nestedArray = null
		}

		function u(t) {
			return t._nestedArray = null, t
		}
		f.fromJSON = function(t, e) {
			return new f(t, e.options).addJSON(e.nested)
		}, f.arrayToJSON = s, f.isReservedId = function(t, e) {
			if(t)
				for(var r = 0; r < t.length; ++r)
					if("string" != typeof t[r] && t[r][0] <= e && t[r][1] >= e) return !0;
			return !1
		}, f.isReservedName = function(t, e) {
			if(t)
				for(var r = 0; r < t.length; ++r)
					if(t[r] === e) return !0;
			return !1
		}, Object.defineProperty(f.prototype, "nestedArray", {
			get: function() {
				return this._nestedArray || (this._nestedArray = i.toArray(this.nested))
			}
		}), f.prototype.toJSON = function(t) {
			return i.toObject(["options", this.options, "nested", s(this.nestedArray, t)])
		}, f.prototype.addJSON = function(t) {
			if(t)
				for(var i, s = Object.keys(t), u = 0; u < s.length; ++u) i = t[s[u]], this.add((void 0 !== i.fields ? e.fromJSON : void 0 !== i.values ? n.fromJSON : void 0 !== i.methods ? r.fromJSON : void 0 !== i.id ? o.fromJSON : f.fromJSON)(s[u], i));
			return this
		}, f.prototype.get = function(t) {
			return this.nested && this.nested[t] || null
		}, f.prototype.getEnum = function(t) {
			if(this.nested && this.nested[t] instanceof n) return this.nested[t].values;
			throw Error("no such enum: " + t)
		}, f.prototype.add = function(t) {
			if(!(t instanceof o && void 0 !== t.extend || t instanceof e || t instanceof n || t instanceof r || t instanceof f)) throw TypeError("object must be a valid nested object");
			if(this.nested) {
				var i = this.get(t.name);
				if(i) {
					if(!(i instanceof f && t instanceof f) || i instanceof e || i instanceof r) throw Error("duplicate name '" + t.name + "' in " + this);
					for(var s = i.nestedArray, a = 0; a < s.length; ++a) t.add(s[a]);
					this.remove(i), this.nested || (this.nested = {}), t.setOptions(i.options, !0)
				}
			} else this.nested = {};
			return this.nested[t.name] = t, t.onAdd(this), u(this)
		}, f.prototype.remove = function(e) {
			if(!(e instanceof t)) throw TypeError("object must be a ReflectionObject");
			if(e.parent !== this) throw Error(e + " is not a member of " + this);
			return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = void 0), e.onRemove(this), u(this)
		}, f.prototype.define = function(t, e) {
			if(i.isString(t)) t = t.split(".");
			else if(!Array.isArray(t)) throw TypeError("illegal path");
			if(t && t.length && "" === t[0]) throw Error("path must be relative");
			for(var r = this; t.length > 0;) {
				var n = t.shift();
				if(r.nested && r.nested[n]) {
					if(!((r = r.nested[n]) instanceof f)) throw Error("path conflicts with non-namespace objects")
				} else r.add(r = new f(n))
			}
			return e && r.addJSON(e), r
		}, f.prototype.resolveAll = function() {
			for(var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof f ? t[e++].resolveAll() : t[e++].resolve();
			return this.resolve()
		}, f.prototype.lookup = function(t, e, r) {
			if("boolean" == typeof e ? (r = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), i.isString(t) && t.length) {
				if("." === t) return this.root;
				t = t.split(".")
			} else if(!t.length) return this;
			if("" === t[0]) return this.root.lookup(t.slice(1), e);
			var n = this.get(t[0]);
			if(n) {
				if(1 === t.length) {
					if(!e || e.indexOf(n.constructor) > -1) return n
				} else if(n instanceof f && (n = n.lookup(t.slice(1), e, !0))) return n
			} else
				for(var o = 0; o < this.nestedArray.length; ++o)
					if(this._nestedArray[o] instanceof f && (n = this._nestedArray[o].lookup(t, e, !0))) return n;
			return null === this.parent || r ? null : this.parent.lookup(t, e)
		}, f.prototype.lookupType = function(t) {
			var r = this.lookup(t, [e]);
			if(!r) throw Error("no such type: " + t);
			return r
		}, f.prototype.lookupEnum = function(t) {
			var e = this.lookup(t, [n]);
			if(!e) throw Error("no such Enum '" + t + "' in " + this);
			return e
		}, f.prototype.lookupTypeOrEnum = function(t) {
			var r = this.lookup(t, [e, n]);
			if(!r) throw Error("no such Type or Enum '" + t + "' in " + this);
			return r
		}, f.prototype.lookupService = function(t) {
			var e = this.lookup(t, [r]);
			if(!e) throw Error("no such Service '" + t + "' in " + this);
			return e
		}, f._configure = function(t, o, i) {
			e = t, r = o, n = i
		};
	}, {
		"./object": "lIB1",
		"./field": "+iVu",
		"./util": "CVja"
	}],
	"tCFY": [function(require, module, exports) {
		"use strict";
		module.exports = o;
		var e = require("./object");
		((o.prototype = Object.create(e.prototype)).constructor = o).className = "OneOf";
		var t = require("./field"),
			r = require("./util");

		function o(t, r, o, n) {
			if(Array.isArray(r) || (o = r, r = void 0), e.call(this, t, o), void 0 !== r && !Array.isArray(r)) throw TypeError("fieldNames must be an Array");
			this.oneof = r || [], this.fieldsArray = [], this.comment = n
		}

		function n(e) {
			if(e.parent)
				for(var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
		}
		o.fromJSON = function(e, t) {
			return new o(e, t.oneof, t.options, t.comment)
		}, o.prototype.toJSON = function(e) {
			var t = !!e && Boolean(e.keepComments);
			return r.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : void 0])
		}, o.prototype.add = function(e) {
			if(!(e instanceof t)) throw TypeError("field must be a Field");
			return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), e.partOf = this, n(this), this
		}, o.prototype.remove = function(e) {
			if(!(e instanceof t)) throw TypeError("field must be a Field");
			var r = this.fieldsArray.indexOf(e);
			if(r < 0) throw Error(e + " is not a member of " + this);
			return this.fieldsArray.splice(r, 1), (r = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(r, 1), e.partOf = null, this
		}, o.prototype.onAdd = function(t) {
			e.prototype.onAdd.call(this, t);
			for(var r = 0; r < this.oneof.length; ++r) {
				var o = t.get(this.oneof[r]);
				o && !o.partOf && (o.partOf = this, this.fieldsArray.push(o))
			}
			n(this)
		}, o.prototype.onRemove = function(t) {
			for(var r, o = 0; o < this.fieldsArray.length; ++o)(r = this.fieldsArray[o]).parent && r.parent.remove(r);
			e.prototype.onRemove.call(this, t)
		}, o.d = function() {
			for(var e = new Array(arguments.length), t = 0; t < arguments.length;) e[t] = arguments[t++];
			return function(t, n) {
				r.decorateType(t.constructor).add(new o(n, e)), Object.defineProperty(t, n, {
					get: r.oneOfGetter(e),
					set: r.oneOfSetter(e)
				})
			}
		};
	}, {
		"./object": "lIB1",
		"./field": "+iVu",
		"./util": "CVja"
	}],
	"fBNh": [function(require, module, exports) {
		"use strict";
		module.exports = r;
		var e = require("./field");
		((r.prototype = Object.create(e.prototype)).constructor = r).className = "MapField";
		var t = require("./types"),
			o = require("./util");

		function r(t, r, i, n, p, s) {
			if(e.call(this, t, r, n, void 0, void 0, p, s), !o.isString(i)) throw TypeError("keyType must be a string");
			this.keyType = i, this.resolvedKeyType = null, this.map = !0
		}
		r.fromJSON = function(e, t) {
			return new r(e, t.id, t.keyType, t.type, t.options, t.comment)
		}, r.prototype.toJSON = function(e) {
			var t = !!e && Boolean(e.keepComments);
			return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
		}, r.prototype.resolve = function() {
			if(this.resolved) return this;
			if(void 0 === t.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
			return e.prototype.resolve.call(this)
		}, r.d = function(e, t, i) {
			return "function" == typeof i ? i = o.decorateType(i).name : i && "object" == typeof i && (i = o.decorateEnum(i).name),
				function(n, p) {
					o.decorateType(n.constructor).add(new r(p, e, t, i))
				}
		};
	}, {
		"./field": "+iVu",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"7LdZ": [function(require, module, exports) {
		"use strict";
		module.exports = s;
		var e = require("./object");
		((s.prototype = Object.create(e.prototype)).constructor = s).className = "Method";
		var t = require("./util");

		function s(s, r, o, p, i, n, u, y) {
			if(t.isObject(i) ? (u = i, i = n = void 0) : t.isObject(n) && (u = n, n = void 0), void 0 !== r && !t.isString(r)) throw TypeError("type must be a string");
			if(!t.isString(o)) throw TypeError("requestType must be a string");
			if(!t.isString(p)) throw TypeError("responseType must be a string");
			e.call(this, s, u), this.type = r || "rpc", this.requestType = o, this.requestStream = !!i || void 0, this.responseType = p, this.responseStream = !!n || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = y
		}
		s.fromJSON = function(e, t) {
			return new s(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment)
		}, s.prototype.toJSON = function(e) {
			var s = !!e && Boolean(e.keepComments);
			return t.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", s ? this.comment : void 0])
		}, s.prototype.resolve = function() {
			return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), e.prototype.resolve.call(this))
		};
	}, {
		"./object": "lIB1",
		"./util": "CVja"
	}],
	"FvRI": [function(require, module, exports) {
		"use strict";
		module.exports = s;
		var e = require("./namespace");
		((s.prototype = Object.create(e.prototype)).constructor = s).className = "Service";
		var t = require("./method"),
			r = require("./util"),
			o = require("./rpc");

		function s(t, r) {
			e.call(this, t, r), this.methods = {}, this._methodsArray = null
		}

		function n(e) {
			return e._methodsArray = null, e
		}
		s.fromJSON = function(e, r) {
			var o = new s(e, r.options);
			if(r.methods)
				for(var n = Object.keys(r.methods), i = 0; i < n.length; ++i) o.add(t.fromJSON(n[i], r.methods[n[i]]));
			return r.nested && o.addJSON(r.nested), o.comment = r.comment, o
		}, s.prototype.toJSON = function(t) {
			var o = e.prototype.toJSON.call(this, t),
				s = !!t && Boolean(t.keepComments);
			return r.toObject(["options", o && o.options || void 0, "methods", e.arrayToJSON(this.methodsArray, t) || {}, "nested", o && o.nested || void 0, "comment", s ? this.comment : void 0])
		}, Object.defineProperty(s.prototype, "methodsArray", {
			get: function() {
				return this._methodsArray || (this._methodsArray = r.toArray(this.methods))
			}
		}), s.prototype.get = function(t) {
			return this.methods[t] || e.prototype.get.call(this, t)
		}, s.prototype.resolveAll = function() {
			for(var t = this.methodsArray, r = 0; r < t.length; ++r) t[r].resolve();
			return e.prototype.resolve.call(this)
		}, s.prototype.add = function(r) {
			if(this.get(r.name)) throw Error("duplicate name '" + r.name + "' in " + this);
			return r instanceof t ? (this.methods[r.name] = r, r.parent = this, n(this)) : e.prototype.add.call(this, r)
		}, s.prototype.remove = function(r) {
			if(r instanceof t) {
				if(this.methods[r.name] !== r) throw Error(r + " is not a member of " + this);
				return delete this.methods[r.name], r.parent = null, n(this)
			}
			return e.prototype.remove.call(this, r)
		}, s.prototype.create = function(e, t, s) {
			for(var n, i = new o.Service(e, t, s), a = 0; a < this.methodsArray.length; ++a) {
				var h = r.lcFirst((n = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
				i[h] = r.codegen(["r", "c"], r.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({
					m: n,
					q: n.resolvedRequestType.ctor,
					s: n.resolvedResponseType.ctor
				})
			}
			return i
		};
	}, {
		"./namespace": "Iv+k",
		"./method": "7LdZ",
		"./util": "CVja",
		"./rpc": "j3cJ"
	}],
	"DGUL": [function(require, module, exports) {
		"use strict";
		module.exports = e;
		var t = require("./util/minimal");

		function e(t) {
			if(t)
				for(var e = Object.keys(t), i = 0; i < e.length; ++i) this[e[i]] = t[e[i]]
		}
		e.create = function(t) {
			return this.$type.create(t)
		}, e.encode = function(t, e) {
			return this.$type.encode(t, e)
		}, e.encodeDelimited = function(t, e) {
			return this.$type.encodeDelimited(t, e)
		}, e.decode = function(t) {
			return this.$type.decode(t)
		}, e.decodeDelimited = function(t) {
			return this.$type.decodeDelimited(t)
		}, e.verify = function(t) {
			return this.$type.verify(t)
		}, e.fromObject = function(t) {
			return this.$type.fromObject(t)
		}, e.toObject = function(t, e) {
			return this.$type.toObject(t, e)
		}, e.prototype.toJSON = function() {
			return this.$type.toObject(this, t.toJSONOptions)
		};
	}, {
		"./util/minimal": "+OqZ"
	}],
	"8DjC": [function(require, module, exports) {
		"use strict";
		module.exports = t;
		var e = require("./enum"),
			r = require("./types"),
			s = require("./util");

		function i(e) {
			return "missing required '" + e.name + "'"
		}

		function t(t) {
			var o = s.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function(e) {
				return e.map
			}).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
			t.group && o("if((t&7)===4)")("break"), o("switch(t>>>3){");
			for(var n = 0; n < t.fieldsArray.length; ++n) {
				var a = t._fieldsArray[n].resolve(),
					d = a.resolvedType instanceof e ? "int32" : a.type,
					p = "m" + s.safeProp(a.name);
				o("case %i:", a.id), a.map ? (o("r.skip().pos++")("if(%s===util.emptyObject)", p)("%s={}", p)("k=r.%s()", a.keyType)("r.pos++"), void 0 !== r.long[a.keyType] ? void 0 === r.basic[d] ? o('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', p, n) : o('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', p, d) : void 0 === r.basic[d] ? o("%s[k]=types[%i].decode(r,r.uint32())", p, n) : o("%s[k]=r.%s()", p, d)) : a.repeated ? (o("if(!(%s&&%s.length))", p, p)("%s=[]", p), void 0 !== r.packed[d] && o("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", p, d)("}else"), void 0 === r.basic[d] ? o(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", p, n) : o("%s.push(r.%s())", p, d)) : void 0 === r.basic[d] ? o(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", p, n) : o("%s=r.%s()", p, d), o("break")
			}
			for(o("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < t._fieldsArray.length; ++n) {
				var u = t._fieldsArray[n];
				u.required && o("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", i(u))
			}
			return o("return m")
		}
	}, {
		"./enum": "QVBM",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"y8ff": [function(require, module, exports) {
		"use strict";
		module.exports = a;
		var e = require("./enum"),
			r = require("./util");

		function t(e, r) {
			return e.name + ": " + r + (e.repeated && "array" !== r ? "[]" : e.map && "object" !== r ? "{k:" + e.keyType + "}" : "") + " expected"
		}

		function s(r, s, i, a) {
			if(s.resolvedType)
				if(s.resolvedType instanceof e) {
					r("switch(%s){", a)("default:")("return%j", t(s, "enum value"));
					for(var n = Object.keys(s.resolvedType.values), u = 0; u < n.length; ++u) r("case %i:", s.resolvedType.values[n[u]]);
					r("break")("}")
				} else r("{")("var e=types[%i].verify(%s);", i, a)("if(e)")("return%j+e", s.name + ".")("}");
			else switch(s.type) {
				case "int32":
				case "uint32":
				case "sint32":
				case "fixed32":
				case "sfixed32":
					r("if(!util.isInteger(%s))", a)("return%j", t(s, "integer"));
					break;
				case "int64":
				case "uint64":
				case "sint64":
				case "fixed64":
				case "sfixed64":
					r("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", a, a, a, a)("return%j", t(s, "integer|Long"));
					break;
				case "float":
				case "double":
					r('if(typeof %s!=="number")', a)("return%j", t(s, "number"));
					break;
				case "bool":
					r('if(typeof %s!=="boolean")', a)("return%j", t(s, "boolean"));
					break;
				case "string":
					r("if(!util.isString(%s))", a)("return%j", t(s, "string"));
					break;
				case "bytes":
					r('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', a, a, a)("return%j", t(s, "buffer"))
			}
			return r
		}

		function i(e, r, s) {
			switch(r.keyType) {
				case "int32":
				case "uint32":
				case "sint32":
				case "fixed32":
				case "sfixed32":
					e("if(!util.key32Re.test(%s))", s)("return%j", t(r, "integer key"));
					break;
				case "int64":
				case "uint64":
				case "sint64":
				case "fixed64":
				case "sfixed64":
					e("if(!util.key64Re.test(%s))", s)("return%j", t(r, "integer|Long key"));
					break;
				case "bool":
					e("if(!util.key2Re.test(%s))", s)("return%j", t(r, "boolean key"))
			}
			return e
		}

		function a(e) {
			var a = r.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
				n = {};
			e.oneofsArray.length && a("var p={}");
			for(var u = 0; u < e.fieldsArray.length; ++u) {
				var f = e._fieldsArray[u].resolve(),
					l = "m" + r.safeProp(f.name);
				if(f.optional && a("if(%s!=null&&m.hasOwnProperty(%j)){", l, f.name), f.map) a("if(!util.isObject(%s))", l)("return%j", t(f, "object"))("var k=Object.keys(%s)", l)("for(var i=0;i<k.length;++i){"), i(a, f, "k[i]"), s(a, f, u, l + "[k[i]]")("}");
				else if(f.repeated) a("if(!Array.isArray(%s))", l)("return%j", t(f, "array"))("for(var i=0;i<%s.length;++i){", l), s(a, f, u, l + "[i]")("}");
				else {
					if(f.partOf) {
						var o = r.safeProp(f.partOf.name);
						1 === n[f.partOf.name] && a("if(p%s===1)", o)("return%j", f.partOf.name + ": multiple values"), n[f.partOf.name] = 1, a("p%s=1", o)
					}
					s(a, f, u, l)
				}
				f.optional && a("}")
			}
			return a("return null")
		}
	}, {
		"./enum": "QVBM",
		"./util": "CVja"
	}],
	"Qtsa": [function(require, module, exports) {
		"use strict";
		var e = exports,
			s = require("./enum"),
			t = require("./util");

		function r(e, t, r, o) {
			if(t.resolvedType)
				if(t.resolvedType instanceof s) {
					e("switch(d%s){", o);
					for(var a = t.resolvedType.values, n = Object.keys(a), i = 0; i < n.length; ++i) t.repeated && a[n[i]] === t.typeDefault && e("default:"), e("case%j:", n[i])("case %i:", a[n[i]])("m%s=%j", o, a[n[i]])("break");
					e("}")
				} else e('if(typeof d%s!=="object")', o)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", o, r, o);
			else {
				var l = !1;
				switch(t.type) {
					case "double":
					case "float":
						e("m%s=Number(d%s)", o, o);
						break;
					case "uint32":
					case "fixed32":
						e("m%s=d%s>>>0", o, o);
						break;
					case "int32":
					case "sint32":
					case "sfixed32":
						e("m%s=d%s|0", o, o);
						break;
					case "uint64":
						l = !0;
					case "int64":
					case "sint64":
					case "fixed64":
					case "sfixed64":
						e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", o, o, l)('else if(typeof d%s==="string")', o)("m%s=parseInt(d%s,10)", o, o)('else if(typeof d%s==="number")', o)("m%s=d%s", o, o)('else if(typeof d%s==="object")', o)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", o, o, o, l ? "true" : "");
						break;
					case "bytes":
						e('if(typeof d%s==="string")', o)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", o, o, o)("else if(d%s.length)", o)("m%s=d%s", o, o);
						break;
					case "string":
						e("m%s=String(d%s)", o, o);
						break;
					case "bool":
						e("m%s=Boolean(d%s)", o, o)
				}
			}
			return e
		}

		function o(e, t, r, o) {
			if(t.resolvedType) t.resolvedType instanceof s ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", o, r, o, o) : e("d%s=types[%i].toObject(m%s,o)", o, r, o);
			else {
				var a = !1;
				switch(t.type) {
					case "double":
					case "float":
						e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", o, o, o, o);
						break;
					case "uint64":
						a = !0;
					case "int64":
					case "sint64":
					case "fixed64":
					case "sfixed64":
						e('if(typeof m%s==="number")', o)("d%s=o.longs===String?String(m%s):m%s", o, o, o)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", o, o, o, o, a ? "true" : "", o);
						break;
					case "bytes":
						e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", o, o, o, o, o);
						break;
					default:
						e("d%s=m%s", o, o)
				}
			}
			return e
		}
		e.fromObject = function(e) {
			var o = e.fieldsArray,
				a = t.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
			if(!o.length) return a("return new this.ctor");
			a("var m=new this.ctor");
			for(var n = 0; n < o.length; ++n) {
				var i = o[n].resolve(),
					l = t.safeProp(i.name);
				i.map ? (a("if(d%s){", l)('if(typeof d%s!=="object")', l)("throw TypeError(%j)", i.fullName + ": object expected")("m%s={}", l)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", l), r(a, i, n, l + "[ks[i]]")("}")("}")) : i.repeated ? (a("if(d%s){", l)("if(!Array.isArray(d%s))", l)("throw TypeError(%j)", i.fullName + ": array expected")("m%s=[]", l)("for(var i=0;i<d%s.length;++i){", l), r(a, i, n, l + "[i]")("}")("}")) : (i.resolvedType instanceof s || a("if(d%s!=null){", l), r(a, i, n, l), i.resolvedType instanceof s || a("}"))
			}
			return a("return m")
		}, e.toObject = function(e) {
			var r = e.fieldsArray.slice().sort(t.compareFieldsById);
			if(!r.length) return t.codegen()("return {}");
			for(var a = t.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], i = [], l = [], f = 0; f < r.length; ++f) r[f].partOf || (r[f].resolve().repeated ? n : r[f].map ? i : l).push(r[f]);
			if(n.length) {
				for(a("if(o.arrays||o.defaults){"), f = 0; f < n.length; ++f) a("d%s=[]", t.safeProp(n[f].name));
				a("}")
			}
			if(i.length) {
				for(a("if(o.objects||o.defaults){"), f = 0; f < i.length; ++f) a("d%s={}", t.safeProp(i[f].name));
				a("}")
			}
			if(l.length) {
				for(a("if(o.defaults){"), f = 0; f < l.length; ++f) {
					var d = l[f],
						u = t.safeProp(d.name);
					if(d.resolvedType instanceof s) a("d%s=o.enums===String?%j:%j", u, d.resolvedType.valuesById[d.typeDefault], d.typeDefault);
					else if(d.long) a("if(util.Long){")("var n=new util.Long(%i,%i,%j)", d.typeDefault.low, d.typeDefault.high, d.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", u)("}else")("d%s=o.longs===String?%j:%i", u, d.typeDefault.toString(), d.typeDefault.toNumber());
					else if(d.bytes) {
						var m = "[" + Array.prototype.slice.call(d.typeDefault).join(",") + "]";
						a("if(o.bytes===String)d%s=%j", u, String.fromCharCode.apply(String, d.typeDefault))("else{")("d%s=%s", u, m)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", u, u)("}")
					} else a("d%s=%j", u, d.typeDefault)
				}
				a("}")
			}
			var c = !1;
			for(f = 0; f < r.length; ++f) {
				d = r[f];
				var p = e._fieldsArray.indexOf(d);
				u = t.safeProp(d.name);
				d.map ? (c || (c = !0, a("var ks2")), a("if(m%s&&(ks2=Object.keys(m%s)).length){", u, u)("d%s={}", u)("for(var j=0;j<ks2.length;++j){"), o(a, d, p, u + "[ks2[j]]")("}")) : d.repeated ? (a("if(m%s&&m%s.length){", u, u)("d%s=[]", u)("for(var j=0;j<m%s.length;++j){", u), o(a, d, p, u + "[j]")("}")) : (a("if(m%s!=null&&m.hasOwnProperty(%j)){", u, d.name), o(a, d, p, u), d.partOf && a("if(o.oneofs)")("d%s=%j", t.safeProp(d.partOf.name), d.name)), a("}")
			}
			return a("return d")
		};
	}, {
		"./enum": "QVBM",
		"./util": "CVja"
	}],
	"XU0z": [function(require, module, exports) {
		"use strict";
		var t = exports,
			e = require("./message");
		t[".google.protobuf.Any"] = {
			fromObject: function(t) {
				if(t && t["@type"]) {
					var e = this.lookup(t["@type"]);
					if(e) {
						var r = "." === t["@type"].charAt(0) ? t["@type"].substr(1) : t["@type"];
						return this.create({
							type_url: "/" + r,
							value: e.encode(e.fromObject(t)).finish()
						})
					}
				}
				return this.fromObject(t)
			},
			toObject: function(t, r) {
				if(r && r.json && t.type_url && t.value) {
					var o = t.type_url.substring(t.type_url.lastIndexOf("/") + 1),
						u = this.lookup(o);
					u && (t = u.decode(t.value))
				}
				if(!(t instanceof this.ctor) && t instanceof e) {
					var s = t.$type.toObject(t, r);
					return s["@type"] = t.$type.fullName, s
				}
				return this.toObject(t, r)
			}
		};
	}, {
		"./message": "DGUL"
	}],
	"/lgn": [function(require, module, exports) {
		"use strict";
		module.exports = y;
		var e = require("./namespace");
		((y.prototype = Object.create(e.prototype)).constructor = y).className = "Type";
		var t = require("./enum"),
			r = require("./oneof"),
			i = require("./field"),
			o = require("./mapfield"),
			s = require("./service"),
			n = require("./message"),
			d = require("./reader"),
			f = require("./writer"),
			h = require("./util"),
			l = require("./encoder"),
			a = require("./decoder"),
			u = require("./verifier"),
			c = require("./converter"),
			p = require("./wrappers");

		function y(t, r) {
			e.call(this, t, r), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
		}

		function v(e) {
			return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, delete e.decode, delete e.verify, e
		}
		Object.defineProperties(y.prototype, {
			fieldsById: {
				get: function() {
					if(this._fieldsById) return this._fieldsById;
					this._fieldsById = {};
					for(var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
						var r = this.fields[e[t]],
							i = r.id;
						if(this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);
						this._fieldsById[i] = r
					}
					return this._fieldsById
				}
			},
			fieldsArray: {
				get: function() {
					return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields))
				}
			},
			oneofsArray: {
				get: function() {
					return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs))
				}
			},
			ctor: {
				get: function() {
					return this._ctor || (this.ctor = y.generateConstructor(this)())
				},
				set: function(e) {
					var t = e.prototype;
					t instanceof n || ((e.prototype = new n).constructor = e, h.merge(e.prototype, t)), e.$type = e.prototype.$type = this, h.merge(e, n, !0), this._ctor = e;
					for(var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
					var i = {};
					for(r = 0; r < this.oneofsArray.length; ++r) i[this._oneofsArray[r].resolve().name] = {
						get: h.oneOfGetter(this._oneofsArray[r].oneof),
						set: h.oneOfSetter(this._oneofsArray[r].oneof)
					};
					r && Object.defineProperties(e.prototype, i)
				}
			}
		}), y.generateConstructor = function(e) {
			for(var t, r = h.codegen(["p"], e.name), i = 0; i < e.fieldsArray.length; ++i)(t = e._fieldsArray[i]).map ? r("this%s={}", h.safeProp(t.name)) : t.repeated && r("this%s=[]", h.safeProp(t.name));
			return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
		}, y.fromJSON = function(n, d) {
			var f = new y(n, d.options);
			f.extensions = d.extensions, f.reserved = d.reserved;
			for(var h = Object.keys(d.fields), l = 0; l < h.length; ++l) f.add((void 0 !== d.fields[h[l]].keyType ? o.fromJSON : i.fromJSON)(h[l], d.fields[h[l]]));
			if(d.oneofs)
				for(h = Object.keys(d.oneofs), l = 0; l < h.length; ++l) f.add(r.fromJSON(h[l], d.oneofs[h[l]]));
			if(d.nested)
				for(h = Object.keys(d.nested), l = 0; l < h.length; ++l) {
					var a = d.nested[h[l]];
					f.add((void 0 !== a.id ? i.fromJSON : void 0 !== a.fields ? y.fromJSON : void 0 !== a.values ? t.fromJSON : void 0 !== a.methods ? s.fromJSON : e.fromJSON)(h[l], a))
				}
			return d.extensions && d.extensions.length && (f.extensions = d.extensions), d.reserved && d.reserved.length && (f.reserved = d.reserved), d.group && (f.group = !0), d.comment && (f.comment = d.comment), f
		}, y.prototype.toJSON = function(t) {
			var r = e.prototype.toJSON.call(this, t),
				i = !!t && Boolean(t.keepComments);
			return h.toObject(["options", r && r.options || void 0, "oneofs", e.arrayToJSON(this.oneofsArray, t), "fields", e.arrayToJSON(this.fieldsArray.filter(function(e) {
				return !e.declaringField
			}), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", r && r.nested || void 0, "comment", i ? this.comment : void 0])
		}, y.prototype.resolveAll = function() {
			for(var t = this.fieldsArray, r = 0; r < t.length;) t[r++].resolve();
			var i = this.oneofsArray;
			for(r = 0; r < i.length;) i[r++].resolve();
			return e.prototype.resolveAll.call(this)
		}, y.prototype.get = function(e) {
			return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
		}, y.prototype.add = function(t) {
			if(this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
			if(t instanceof i && void 0 === t.extend) {
				if(this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
				if(this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
				if(this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
				return t.parent && t.parent.remove(t), this.fields[t.name] = t, t.message = this, t.onAdd(this), v(this)
			}
			return t instanceof r ? (this.oneofs || (this.oneofs = {}), this.oneofs[t.name] = t, t.onAdd(this), v(this)) : e.prototype.add.call(this, t)
		}, y.prototype.remove = function(t) {
			if(t instanceof i && void 0 === t.extend) {
				if(!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
				return delete this.fields[t.name], t.parent = null, t.onRemove(this), v(this)
			}
			if(t instanceof r) {
				if(!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
				return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), v(this)
			}
			return e.prototype.remove.call(this, t)
		}, y.prototype.isReservedId = function(t) {
			return e.isReservedId(this.reserved, t)
		}, y.prototype.isReservedName = function(t) {
			return e.isReservedName(this.reserved, t)
		}, y.prototype.create = function(e) {
			return new this.ctor(e)
		}, y.prototype.setup = function() {
			for(var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) t.push(this._fieldsArray[r].resolve().resolvedType);
			this.encode = l(this)({
				Writer: f,
				types: t,
				util: h
			}), this.decode = a(this)({
				Reader: d,
				types: t,
				util: h
			}), this.verify = u(this)({
				types: t,
				util: h
			}), this.fromObject = c.fromObject(this)({
				types: t,
				util: h
			}), this.toObject = c.toObject(this)({
				types: t,
				util: h
			});
			var i = p[e];
			if(i) {
				var o = Object.create(this);
				o.fromObject = this.fromObject, this.fromObject = i.fromObject.bind(o), o.toObject = this.toObject, this.toObject = i.toObject.bind(o)
			}
			return this
		}, y.prototype.encode = function(e, t) {
			return this.setup().encode(e, t)
		}, y.prototype.encodeDelimited = function(e, t) {
			return this.encode(e, t && t.len ? t.fork() : t).ldelim()
		}, y.prototype.decode = function(e, t) {
			return this.setup().decode(e, t)
		}, y.prototype.decodeDelimited = function(e) {
			return e instanceof d || (e = d.create(e)), this.decode(e, e.uint32())
		}, y.prototype.verify = function(e) {
			return this.setup().verify(e)
		}, y.prototype.fromObject = function(e) {
			return this.setup().fromObject(e)
		}, y.prototype.toObject = function(e, t) {
			return this.setup().toObject(e, t)
		}, y.d = function(e) {
			return function(t) {
				h.decorateType(t, e)
			}
		};
	}, {
		"./namespace": "Iv+k",
		"./enum": "QVBM",
		"./oneof": "tCFY",
		"./field": "+iVu",
		"./mapfield": "fBNh",
		"./service": "FvRI",
		"./message": "DGUL",
		"./reader": "nX4I",
		"./writer": "uteQ",
		"./util": "CVja",
		"./encoder": "bDtv",
		"./decoder": "8DjC",
		"./verifier": "y8ff",
		"./converter": "Qtsa",
		"./wrappers": "XU0z"
	}],
	"g5I+": [function(require, module, exports) {

		var t, e, n = module.exports = {};

		function r() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function i(e) {
			if(t === setTimeout) return setTimeout(e, 0);
			if((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
			try {
				return t(e, 0)
			} catch(n) {
				try {
					return t.call(null, e, 0)
				} catch(n) {
					return t.call(this, e, 0)
				}
			}
		}

		function u(t) {
			if(e === clearTimeout) return clearTimeout(t);
			if((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
			try {
				return e(t)
			} catch(n) {
				try {
					return e.call(null, t)
				} catch(n) {
					return e.call(this, t)
				}
			}
		}! function() {
			try {
				t = "function" == typeof setTimeout ? setTimeout : r
			} catch(n) {
				t = r
			}
			try {
				e = "function" == typeof clearTimeout ? clearTimeout : o
			} catch(n) {
				e = o
			}
		}();
		var c, s = [],
			l = !1,
			a = -1;

		function f() {
			l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
		}

		function h() {
			if(!l) {
				var t = i(f);
				l = !0;
				for(var e = s.length; e;) {
					for(c = s, s = []; ++a < e;) c && c[a].run();
					a = -1, e = s.length
				}
				c = null, l = !1, u(t)
			}
		}

		function m(t, e) {
			this.fun = t, this.array = e
		}

		function p() {}
		n.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if(arguments.length > 1)
				for(var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			s.push(new m(t, e)), 1 !== s.length || l || i(h)
		}, m.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
			return []
		}, n.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, n.cwd = function() {
			return "/"
		}, n.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, n.umask = function() {
			return 0
		};
	}, {}],
	"Jato": [function(require, module, exports) {
		var process = require("process");
		var e = require("process");
		module.exports = l;
		var t = require("./namespace");
		((l.prototype = Object.create(t.prototype)).constructor = l).className = "Root";
		var n, r, i, o = require("./field"),
			s = require("./enum"),
			a = require("./oneof"),
			f = require("./util");

		function l(e) {
			t.call(this, "", e), this.deferred = [], this.files = []
		}

		function d() {}
		l.fromJSON = function(e, t) {
			return t || (t = new l), e.options && t.setOptions(e.options), t.addJSON(e.nested)
		}, l.prototype.resolvePath = f.path.resolve, l.prototype.load = function e(t, n, o) {
			"function" == typeof n && (o = n, n = void 0);
			var s = this;
			if(!o) return f.asPromise(e, s, t, n);
			var a = o === d;

			function l(e, t) {
				if(o) {
					var n = o;
					if(o = null, a) throw e;
					n(e, t)
				}
			}

			function u(e, t) {
				try {
					if(f.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), f.isString(t)) {
						r.filename = e;
						var i, o = r(t, s, n),
							d = 0;
						if(o.imports)
							for(; d < o.imports.length; ++d)(i = s.resolvePath(e, o.imports[d])) && p(i);
						if(o.weakImports)
							for(d = 0; d < o.weakImports.length; ++d)(i = s.resolvePath(e, o.weakImports[d])) && p(i, !0)
					} else s.setOptions(t.options).addJSON(t.nested)
				} catch(u) {
					l(u)
				}
				a || c || l(null, s)
			}

			function p(e, t) {
				var n = e.lastIndexOf("google/protobuf/");
				if(n > -1) {
					var r = e.substring(n);
					r in i && (e = r)
				}
				if(!(s.files.indexOf(e) > -1))
					if(s.files.push(e), e in i) a ? u(e, i[e]) : (++c, setTimeout(function() {
						--c, u(e, i[e])
					}));
					else if(a) {
					var d;
					try {
						d = f.fs.readFileSync(e).toString("utf8")
					} catch(p) {
						return void(t || l(p))
					}
					u(e, d)
				} else ++c, f.fetch(e, function(n, r) {
					--c, o && (n ? t ? c || l(null, s) : l(n) : u(e, r))
				})
			}
			var c = 0;
			f.isString(t) && (t = [t]);
			for(var h, v = 0; v < t.length; ++v)(h = s.resolvePath("", t[v])) && p(h);
			if(a) return s;
			c || l(null, s)
		}, l.prototype.loadSync = function(e, t) {
			if(!f.isNode) throw Error("not supported");
			return this.load(e, t, d)
		}, l.prototype.resolveAll = function() {
			if(this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
				return "'extend " + e.extend + "' in " + e.parent.fullName
			}).join(", "));
			return t.prototype.resolveAll.call(this)
		};
		var u = /^[A-Z]/;

		function p(e, t) {
			var n = t.parent.lookup(t.extend);
			if(n) {
				var r = new o(t.fullName, t.id, t.type, t.rule, void 0, t.options);
				return r.declaringField = t, t.extensionField = r, n.add(r), !0
			}
			return !1
		}
		l.prototype._handleAdd = function(e) {
			if(e instanceof o) void 0 === e.extend || e.extensionField || p(this, e) || this.deferred.push(e);
			else if(e instanceof s) u.test(e.name) && (e.parent[e.name] = e.values);
			else if(!(e instanceof a)) {
				if(e instanceof n)
					for(var t = 0; t < this.deferred.length;) p(this, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
				for(var r = 0; r < e.nestedArray.length; ++r) this._handleAdd(e._nestedArray[r]);
				u.test(e.name) && (e.parent[e.name] = e)
			}
		}, l.prototype._handleRemove = function(e) {
			if(e instanceof o) {
				if(void 0 !== e.extend)
					if(e.extensionField) e.extensionField.parent.remove(e.extensionField), e.extensionField = null;
					else {
						var n = this.deferred.indexOf(e);
						n > -1 && this.deferred.splice(n, 1)
					}
			} else if(e instanceof s) u.test(e.name) && delete e.parent[e.name];
			else if(e instanceof t) {
				for(var r = 0; r < e.nestedArray.length; ++r) this._handleRemove(e._nestedArray[r]);
				u.test(e.name) && delete e.parent[e.name]
			}
		}, l._configure = function(e, t, o) {
			n = e, r = t, i = o
		};
	}, {
		"./namespace": "Iv+k",
		"./field": "+iVu",
		"./enum": "QVBM",
		"./oneof": "tCFY",
		"./util": "CVja",
		"process": "g5I+"
	}],
	"CVja": [function(require, module, exports) {
		"use strict";
		var e, t, r = module.exports = require("./util/minimal"),
			n = require("./roots");
		r.codegen = require("@protobufjs/codegen"), r.fetch = require("@protobufjs/fetch"), r.path = require("@protobufjs/path"), r.fs = r.inquire("fs"), r.toArray = function(e) {
			if(e) {
				for(var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length;) r[n] = e[t[n++]];
				return r
			}
			return []
		}, r.toObject = function(e) {
			for(var t = {}, r = 0; r < e.length;) {
				var n = e[r++],
					o = e[r++];
				void 0 !== o && (t[n] = o)
			}
			return t
		};
		var o = /\\/g,
			u = /"/g;
		r.isReserved = function(e) {
			return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
		}, r.safeProp = function(e) {
			return !/^[$\w_]+$/.test(e) || r.isReserved(e) ? '["' + e.replace(o, "\\\\").replace(u, '\\"') + '"]' : "." + e
		}, r.ucFirst = function(e) {
			return e.charAt(0).toUpperCase() + e.substring(1)
		};
		var a = /_([a-z])/g;
		r.camelCase = function(e) {
			return e.substring(0, 1) + e.substring(1).replace(a, function(e, t) {
				return t.toUpperCase()
			})
		}, r.compareFieldsById = function(e, t) {
			return e.id - t.id
		}, r.decorateType = function(t, n) {
			if(t.$type) return n && t.$type.name !== n && (r.decorateRoot.remove(t.$type), t.$type.name = n, r.decorateRoot.add(t.$type)), t.$type;
			e || (e = require("./type"));
			var o = new e(n || t.name);
			return r.decorateRoot.add(o), o.ctor = t, Object.defineProperty(t, "$type", {
				value: o,
				enumerable: !1
			}), Object.defineProperty(t.prototype, "$type", {
				value: o,
				enumerable: !1
			}), o
		};
		var i = 0;
		r.decorateEnum = function(e) {
			if(e.$type) return e.$type;
			t || (t = require("./enum"));
			var n = new t("Enum" + i++, e);
			return r.decorateRoot.add(n), Object.defineProperty(e, "$type", {
				value: n,
				enumerable: !1
			}), n
		}, Object.defineProperty(r, "decorateRoot", {
			get: function() {
				return n.decorated || (n.decorated = new(require("./root")))
			}
		});
	}, {
		"./util/minimal": "+OqZ",
		"./roots": "S/PD",
		"@protobufjs/codegen": "YmP9",
		"@protobufjs/fetch": "h5wE",
		"@protobufjs/path": "Mao7",
		"./type": "/lgn",
		"./enum": "QVBM",
		"./root": "Jato"
	}],
	"lIB1": [function(require, module, exports) {
		"use strict";
		module.exports = e, e.className = "ReflectionObject";
		var t, o = require("./util");

		function e(t, e) {
			if(!o.isString(t)) throw TypeError("name must be a string");
			if(e && !o.isObject(e)) throw TypeError("options must be an object");
			this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
		}
		Object.defineProperties(e.prototype, {
			root: {
				get: function() {
					for(var t = this; null !== t.parent;) t = t.parent;
					return t
				}
			},
			fullName: {
				get: function() {
					for(var t = [this.name], o = this.parent; o;) t.unshift(o.name), o = o.parent;
					return t.join(".")
				}
			}
		}), e.prototype.toJSON = function() {
			throw Error()
		}, e.prototype.onAdd = function(o) {
			this.parent && this.parent !== o && this.parent.remove(this), this.parent = o, this.resolved = !1;
			var e = o.root;
			e instanceof t && e._handleAdd(this)
		}, e.prototype.onRemove = function(o) {
			var e = o.root;
			e instanceof t && e._handleRemove(this), this.parent = null, this.resolved = !1
		}, e.prototype.resolve = function() {
			return this.resolved ? this : (this.root instanceof t && (this.resolved = !0), this)
		}, e.prototype.getOption = function(t) {
			if(this.options) return this.options[t]
		}, e.prototype.setOption = function(t, o, e) {
			return e && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = o), this
		}, e.prototype.setOptions = function(t, o) {
			if(t)
				for(var e = Object.keys(t), n = 0; n < e.length; ++n) this.setOption(e[n], t[e[n]], o);
			return this
		}, e.prototype.toString = function() {
			var t = this.constructor.className,
				o = this.fullName;
			return o.length ? t + " " + o : t
		}, e._configure = function(o) {
			t = o
		};
	}, {
		"./util": "CVja"
	}],
	"QVBM": [function(require, module, exports) {
		"use strict";
		module.exports = r;
		var e = require("./object");
		((r.prototype = Object.create(e.prototype)).constructor = r).className = "Enum";
		var t = require("./namespace"),
			s = require("./util");

		function r(t, s, r, i, o) {
			if(e.call(this, t, r), s && "object" != typeof s) throw TypeError("values must be an object");
			if(this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, this.comments = o || {}, this.reserved = void 0, s)
				for(var n = Object.keys(s), h = 0; h < n.length; ++h) "number" == typeof s[n[h]] && (this.valuesById[this.values[n[h]] = s[n[h]]] = n[h])
		}
		r.fromJSON = function(e, t) {
			var s = new r(e, t.values, t.options, t.comment, t.comments);
			return s.reserved = t.reserved, s
		}, r.prototype.toJSON = function(e) {
			var t = !!e && Boolean(e.keepComments);
			return s.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0])
		}, r.prototype.add = function(e, t, r) {
			if(!s.isString(e)) throw TypeError("name must be a string");
			if(!s.isInteger(t)) throw TypeError("id must be an integer");
			if(void 0 !== this.values[e]) throw Error("duplicate name '" + e + "' in " + this);
			if(this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
			if(this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
			if(void 0 !== this.valuesById[t]) {
				if(!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
				this.values[e] = t
			} else this.valuesById[this.values[e] = t] = e;
			return this.comments[e] = r || null, this
		}, r.prototype.remove = function(e) {
			if(!s.isString(e)) throw TypeError("name must be a string");
			var t = this.values[e];
			if(null == t) throw Error("name '" + e + "' does not exist in " + this);
			return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this
		}, r.prototype.isReservedId = function(e) {
			return t.isReservedId(this.reserved, e)
		}, r.prototype.isReservedName = function(e) {
			return t.isReservedName(this.reserved, e)
		};
	}, {
		"./object": "lIB1",
		"./namespace": "Iv+k",
		"./util": "CVja"
	}],
	"bDtv": [function(require, module, exports) {
		"use strict";
		module.exports = n;
		var e = require("./enum"),
			i = require("./types"),
			r = require("./util");

		function s(e, i, r, s) {
			return i.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, s, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, s, (i.id << 3 | 2) >>> 0)
		}

		function n(n) {
			for(var t, o = r.codegen(["m", "w"], n.name + "$encode")("if(!w)")("w=Writer.create()"), d = n.fieldsArray.slice().sort(r.compareFieldsById), l = 0; l < d.length; ++l) {
				var u = d[l].resolve(),
					a = n._fieldsArray.indexOf(u),
					p = u.resolvedType instanceof e ? "int32" : u.type,
					f = i.basic[p];
				t = "m" + r.safeProp(u.name), u.map ? (o("if(%s!=null&&m.hasOwnProperty(%j)){", t, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, 8 | i.mapKey[u.keyType], u.keyType), void 0 === f ? o("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", a, t) : o(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | f, p, t), o("}")("}")) : u.repeated ? (o("if(%s!=null&&%s.length){", t, t), u.packed && void 0 !== i.packed[p] ? o("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", p, t)("w.ldelim()") : (o("for(var i=0;i<%s.length;++i)", t), void 0 === f ? s(o, u, a, t + "[i]") : o("w.uint32(%i).%s(%s[i])", (u.id << 3 | f) >>> 0, p, t)), o("}")) : (u.optional && o("if(%s!=null&&m.hasOwnProperty(%j))", t, u.name), void 0 === f ? s(o, u, a, t) : o("w.uint32(%i).%s(%s)", (u.id << 3 | f) >>> 0, p, t))
			}
			return o("return w")
		}
	}, {
		"./enum": "QVBM",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"wgyk": [function(require, module, exports) {
		"use strict";
		var e = module.exports = require("./index-minimal");

		function r(r, i, o) {
			return "function" == typeof i ? (o = i, i = new e.Root) : i || (i = new e.Root), i.load(r, o)
		}

		function i(r, i) {
			return i || (i = new e.Root), i.loadSync(r)
		}
		e.build = "light", e.load = r, e.loadSync = i, e.encoder = require("./encoder"), e.decoder = require("./decoder"), e.verifier = require("./verifier"), e.converter = require("./converter"), e.ReflectionObject = require("./object"), e.Namespace = require("./namespace"), e.Root = require("./root"), e.Enum = require("./enum"), e.Type = require("./type"), e.Field = require("./field"), e.OneOf = require("./oneof"), e.MapField = require("./mapfield"), e.Service = require("./service"), e.Method = require("./method"), e.Message = require("./message"), e.wrappers = require("./wrappers"), e.types = require("./types"), e.util = require("./util"), e.ReflectionObject._configure(e.Root), e.Namespace._configure(e.Type, e.Service, e.Enum), e.Root._configure(e.Type), e.Field._configure(e.Type);
	}, {
		"./index-minimal": "6BiI",
		"./encoder": "bDtv",
		"./decoder": "8DjC",
		"./verifier": "y8ff",
		"./converter": "Qtsa",
		"./object": "lIB1",
		"./namespace": "Iv+k",
		"./root": "Jato",
		"./enum": "QVBM",
		"./type": "/lgn",
		"./field": "+iVu",
		"./oneof": "tCFY",
		"./mapfield": "fBNh",
		"./service": "FvRI",
		"./method": "7LdZ",
		"./message": "DGUL",
		"./wrappers": "XU0z",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"BwgP": [function(require, module, exports) {
		"use strict";
		module.exports = c;
		var n = /[\s{}=;:[\],'"()<>]/g,
			r = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
			t = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
			e = /^ *[*\/]+ */,
			i = /^\s*\*?\/*/,
			u = /\n/g,
			l = /\s/,
			f = /\\(.?)/g,
			o = {
				0: "\0",
				r: "\r",
				n: "\n",
				t: "\t"
			};

		function s(n) {
			return n.replace(f, function(n, r) {
				switch(r) {
					case "\\":
					case "":
						return r;
					default:
						return o[r] || ""
				}
			})
		}

		function c(f, o) {
			f = f.toString();
			var c = 0,
				a = f.length,
				h = 1,
				g = null,
				v = null,
				d = 0,
				p = !1,
				m = [],
				w = null;

			function x(n) {
				return Error("illegal " + n + " (line " + h + ")")
			}

			function b(n) {
				return f.charAt(n)
			}

			function k(n, r) {
				g = f.charAt(n++), d = h, p = !1;
				var t, l = n - (o ? 2 : 3);
				do {
					if(--l < 0 || "\n" === (t = f.charAt(l))) {
						p = !0;
						break
					}
				} while (" " === t || "\t" === t);
				for(var s = f.substring(n, r).split(u), c = 0; c < s.length; ++c) s[c] = s[c].replace(o ? i : e, "").trim();
				v = s.join("\n").trim()
			}

			function A(n) {
				var r = I(n),
					t = f.substring(n, r);
				return /^\s*\/{1,2}/.test(t)
			}

			function I(n) {
				for(var r = n; r < a && "\n" !== b(r);) r++;
				return r
			}

			function j() {
				if(m.length > 0) return m.shift();
				if(w) return function() {
					var n = "'" === w ? t : r;
					n.lastIndex = c - 1;
					var e = n.exec(f);
					if(!e) throw x("string");
					return c = n.lastIndex, y(w), w = null, s(e[1])
				}();
				var e, i, u, g, v;
				do {
					if(c === a) return null;
					for(e = !1; l.test(u = b(c));)
						if("\n" === u && ++h, ++c === a) return null;
					if("/" === b(c)) {
						if(++c === a) throw x("comment");
						if("/" === b(c))
							if(o) {
								if(g = c, v = !1, A(c)) {
									v = !0;
									do {
										if((c = I(c)) === a) break;
										c++
									} while (A(c))
								} else c = Math.min(a, I(c) + 1);
								v && k(g, c), h++, e = !0
							} else {
								for(v = "/" === b(g = c + 1);
									"\n" !== b(++c);)
									if(c === a) return null;
								++c, v && k(g, c - 1), ++h, e = !0
							}
						else {
							if("*" !== (u = b(c))) return "/";
							g = c + 1, v = o || "*" === b(g);
							do {
								if("\n" === u && ++h, ++c === a) throw x("comment");
								i = u, u = b(c)
							} while ("*" !== i || "/" !== u);
							++c, v && k(g, c - 2), e = !0
						}
					}
				} while (e);
				var d = c;
				if(n.lastIndex = 0, !n.test(b(d++)))
					for(; d < a && !n.test(b(d));) ++d;
				var p = f.substring(c, c = d);
				return '"' !== p && "'" !== p || (w = p), p
			}

			function y(n) {
				m.push(n)
			}

			function E() {
				if(!m.length) {
					var n = j();
					if(null === n) return null;
					y(n)
				}
				return m[0]
			}
			return Object.defineProperty({
				next: j,
				peek: E,
				push: y,
				skip: function(n, r) {
					var t = E();
					if(t === n) return j(), !0;
					if(!r) throw x("token '" + t + "', '" + n + "' expected");
					return !1
				},
				cmnt: function(n) {
					var r = null;
					return void 0 === n ? d === h - 1 && (o || "*" === g || p) && (r = v) : (d < n && E(), d !== n || p || !o && "/" !== g || (r = v)), r
				}
			}, "line", {
				get: function() {
					return h
				}
			})
		}
		c.unescape = s;
	}, {}],
	"9lF6": [function(require, module, exports) {
		"use strict";
		module.exports = q, q.filename = null, q.defaults = {
			keepCase: !1
		};
		var e = require("./tokenize"),
			t = require("./root"),
			r = require("./type"),
			n = require("./field"),
			a = require("./mapfield"),
			i = require("./oneof"),
			o = require("./enum"),
			s = require("./service"),
			c = require("./method"),
			f = require("./types"),
			u = require("./util"),
			p = /^[1-9][0-9]*$/,
			w = /^-?[1-9][0-9]*$/,
			h = /^0[x][0-9a-fA-F]+$/,
			d = /^-?0[x][0-9a-fA-F]+$/,
			l = /^0[0-7]+$/,
			m = /^-?0[0-7]+$/,
			v = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
			k = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
			b = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
			A = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

		function q(x, y, $) {
			y instanceof t || ($ = y, y = new t), $ || ($ = q.defaults);
			var g, z, I, N, Z, _ = e(x, $.alternateCommentMode || !1),
				F = _.next,
				E = _.push,
				C = _.peek,
				M = _.skip,
				O = _.cmnt,
				j = !0,
				K = !1,
				L = y,
				R = $.keepCase ? function(e) {
					return e
				} : u.camelCase;

			function S(e, t, r) {
				var n = q.filename;
				return r || (q.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + _.line + ")")
			}

			function T() {
				var e, t = [];
				do {
					if('"' !== (e = F()) && "'" !== e) throw S(e);
					t.push(F()), M(e), e = C()
				} while ('"' === e || "'" === e);
				return t.join("")
			}

			function U(e) {
				var t = F();
				switch(t) {
					case "'":
					case '"':
						return E(t), T();
					case "true":
					case "TRUE":
						return !0;
					case "false":
					case "FALSE":
						return !1
				}
				try {
					return function(e, t) {
						var r = 1;
						"-" === e.charAt(0) && (r = -1, e = e.substring(1));
						switch(e) {
							case "inf":
							case "INF":
							case "Inf":
								return r * (1 / 0);
							case "nan":
							case "NAN":
							case "Nan":
							case "NaN":
								return NaN;
							case "0":
								return 0
						}
						if(p.test(e)) return r * parseInt(e, 10);
						if(h.test(e)) return r * parseInt(e, 16);
						if(l.test(e)) return r * parseInt(e, 8);
						if(v.test(e)) return r * parseFloat(e);
						throw S(e, "number", t)
					}(t, !0)
				} catch(r) {
					if(e && b.test(t)) return t;
					throw S(t, "value")
				}
			}

			function X(e, t) {
				var r, n;
				do {
					!t || '"' !== (r = C()) && "'" !== r ? e.push([n = B(F()), M("to", !0) ? B(F()) : n]) : e.push(T())
				} while (M(",", !0));
				M(";")
			}

			function B(e, t) {
				switch(e) {
					case "max":
					case "MAX":
					case "Max":
						return 536870911;
					case "0":
						return 0
				}
				if(!t && "-" === e.charAt(0)) throw S(e, "id");
				if(w.test(e)) return parseInt(e, 10);
				if(d.test(e)) return parseInt(e, 16);
				if(m.test(e)) return parseInt(e, 8);
				throw S(e, "id")
			}

			function D() {
				if(void 0 !== g) throw S("package");
				if(g = F(), !b.test(g)) throw S(g, "name");
				L = L.define(g), M(";")
			}

			function G() {
				var e, t = C();
				switch(t) {
					case "weak":
						e = I || (I = []), F();
						break;
					case "public":
						F();
					default:
						e = z || (z = [])
				}
				t = T(), M(";"), e.push(t)
			}

			function H() {
				if(M("="), N = T(), !(K = "proto3" === N) && "proto2" !== N) throw S(N, "syntax");
				M(";")
			}

			function J(e, t) {
				switch(t) {
					case "option":
						return V(e, t), M(";"), !0;
					case "message":
						return function(e, t) {
							if(!k.test(t = F())) throw S(t, "type name");
							var n = new r(t);
							P(n, function(e) {
								if(!J(n, e)) switch(e) {
									case "map":
										! function(e) {
											M("<");
											var t = F();
											if(void 0 === f.mapKey[t]) throw S(t, "type");
											M(",");
											var r = F();
											if(!b.test(r)) throw S(r, "type");
											M(">");
											var n = F();
											if(!k.test(n)) throw S(n, "name");
											M("=");
											var i = new a(R(n), B(F()), t, r);
											P(i, function(e) {
												if("option" !== e) throw S(e);
												V(i, e), M(";")
											}, function() {
												ee(i)
											}), e.add(i)
										}(n);
										break;
									case "required":
									case "optional":
									case "repeated":
										Q(n, e);
										break;
									case "oneof":
										! function(e, t) {
											if(!k.test(t = F())) throw S(t, "name");
											var r = new i(R(t));
											P(r, function(e) {
												"option" === e ? (V(r, e), M(";")) : (E(e), Q(r, "optional"))
											}), e.add(r)
										}(n, e);
										break;
									case "extensions":
										X(n.extensions || (n.extensions = []));
										break;
									case "reserved":
										X(n.reserved || (n.reserved = []), !0);
										break;
									default:
										if(!K || !b.test(e)) throw S(e);
										E(e), Q(n, "optional")
								}
							}), e.add(n)
						}(e, t), !0;
					case "enum":
						return function(e, t) {
							if(!k.test(t = F())) throw S(t, "name");
							var r = new o(t);
							P(r, function(e) {
								switch(e) {
									case "option":
										V(r, e), M(";");
										break;
									case "reserved":
										X(r.reserved || (r.reserved = []), !0);
										break;
									default:
										! function(e, t) {
											if(!k.test(t)) throw S(t, "name");
											M("=");
											var r = B(F(), !0),
												n = {};
											P(n, function(e) {
												if("option" !== e) throw S(e);
												V(n, e), M(";")
											}, function() {
												ee(n)
											}), e.add(t, r, n.comment)
										}(r, e)
								}
							}), e.add(r)
						}(e, t), !0;
					case "service":
						return function(e, t) {
							if(!k.test(t = F())) throw S(t, "service name");
							var r = new s(t);
							P(r, function(e) {
								if(!J(r, e)) {
									if("rpc" !== e) throw S(e);
									! function(e, t) {
										var r = t;
										if(!k.test(t = F())) throw S(t, "name");
										var n, a, i, o, s = t;
										M("("), M("stream", !0) && (a = !0);
										if(!b.test(t = F())) throw S(t);
										n = t, M(")"), M("returns"), M("("), M("stream", !0) && (o = !0);
										if(!b.test(t = F())) throw S(t);
										i = t, M(")");
										var f = new c(s, r, n, i, a, o);
										P(f, function(e) {
											if("option" !== e) throw S(e);
											V(f, e), M(";")
										}), e.add(f)
									}(r, e)
								}
							}), e.add(r)
						}(e, t), !0;
					case "extend":
						return function(e, t) {
							if(!b.test(t = F())) throw S(t, "reference");
							var r = t;
							P(null, function(t) {
								switch(t) {
									case "required":
									case "repeated":
									case "optional":
										Q(e, t, r);
										break;
									default:
										if(!K || !b.test(t)) throw S(t);
										E(t), Q(e, "optional", r)
								}
							})
						}(e, t), !0
				}
				return !1
			}

			function P(e, t, r) {
				var n = _.line;
				if(e && (e.comment = O(), e.filename = q.filename), M("{", !0)) {
					for(var a;
						"}" !== (a = F());) t(a);
					M(";", !0)
				} else r && r(), M(";"), e && "string" != typeof e.comment && (e.comment = O(n))
			}

			function Q(e, t, a) {
				var i = F();
				if("group" !== i) {
					if(!b.test(i)) throw S(i, "type");
					var o = F();
					if(!k.test(o)) throw S(o, "name");
					o = R(o), M("=");
					var s = new n(o, B(F()), i, t, a);
					P(s, function(e) {
						if("option" !== e) throw S(e);
						V(s, e), M(";")
					}, function() {
						ee(s)
					}), e.add(s), K || !s.repeated || void 0 === f.packed[i] && void 0 !== f.basic[i] || s.setOption("packed", !1, !0)
				} else ! function(e, t) {
					var a = F();
					if(!k.test(a)) throw S(a, "name");
					var i = u.lcFirst(a);
					a === i && (a = u.ucFirst(a));
					M("=");
					var o = B(F()),
						s = new r(a);
					s.group = !0;
					var c = new n(i, o, a, t);
					c.filename = q.filename, P(s, function(e) {
						switch(e) {
							case "option":
								V(s, e), M(";");
								break;
							case "required":
							case "optional":
							case "repeated":
								Q(s, e);
								break;
							default:
								throw S(e)
						}
					}), e.add(s).add(c)
				}(e, t)
			}

			function V(e, t) {
				var r = M("(", !0);
				if(!b.test(t = F())) throw S(t, "name");
				var n = t;
				r && (M(")"), n = "(" + n + ")", t = C(), A.test(t) && (n += t, F())), M("="), W(e, n)
			}

			function W(e, t) {
				if(M("{", !0))
					do {
						if(!k.test(Z = F())) throw S(Z, "name");
						"{" === C() ? W(e, t + "." + Z) : (M(":"), "{" === C() ? W(e, t + "." + Z) : Y(e, t + "." + Z, U(!0))), M(",", !0)
					} while (!M("}", !0));
				else Y(e, t, U(!0))
			}

			function Y(e, t, r) {
				e.setOption && e.setOption(t, r)
			}

			function ee(e) {
				if(M("[", !0)) {
					do {
						V(e, "option")
					} while (M(",", !0));
					M("]")
				}
				return e
			}
			for(; null !== (Z = F());) switch(Z) {
				case "package":
					if(!j) throw S(Z);
					D();
					break;
				case "import":
					if(!j) throw S(Z);
					G();
					break;
				case "syntax":
					if(!j) throw S(Z);
					H();
					break;
				case "option":
					if(!j) throw S(Z);
					V(L, Z), M(";");
					break;
				default:
					if(J(L, Z)) {
						j = !1;
						continue
					}
					throw S(Z)
			}
			return q.filename = null, {
				package: g,
				imports: z,
				weakImports: I,
				syntax: N,
				root: y
			}
		}
	}, {
		"./tokenize": "BwgP",
		"./root": "Jato",
		"./type": "/lgn",
		"./field": "+iVu",
		"./mapfield": "fBNh",
		"./oneof": "tCFY",
		"./enum": "QVBM",
		"./service": "FvRI",
		"./method": "7LdZ",
		"./types": "eiCH",
		"./util": "CVja"
	}],
	"A41Z": [function(require, module, exports) {
		"use strict";
		module.exports = t;
		var e, l = /\/|\./;

		function t(e, u) {
			l.test(e) || (e = "google/protobuf/" + e + ".proto", u = {
				nested: {
					google: {
						nested: {
							protobuf: {
								nested: u
							}
						}
					}
				}
			}), t[e] = u
		}
		t("any", {
			Any: {
				fields: {
					type_url: {
						type: "string",
						id: 1
					},
					value: {
						type: "bytes",
						id: 2
					}
				}
			}
		}), t("duration", {
			Duration: e = {
				fields: {
					seconds: {
						type: "int64",
						id: 1
					},
					nanos: {
						type: "int32",
						id: 2
					}
				}
			}
		}), t("timestamp", {
			Timestamp: e
		}), t("empty", {
			Empty: {
				fields: {}
			}
		}), t("struct", {
			Struct: {
				fields: {
					fields: {
						keyType: "string",
						type: "Value",
						id: 1
					}
				}
			},
			Value: {
				oneofs: {
					kind: {
						oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
					}
				},
				fields: {
					nullValue: {
						type: "NullValue",
						id: 1
					},
					numberValue: {
						type: "double",
						id: 2
					},
					stringValue: {
						type: "string",
						id: 3
					},
					boolValue: {
						type: "bool",
						id: 4
					},
					structValue: {
						type: "Struct",
						id: 5
					},
					listValue: {
						type: "ListValue",
						id: 6
					}
				}
			},
			NullValue: {
				values: {
					NULL_VALUE: 0
				}
			},
			ListValue: {
				fields: {
					values: {
						rule: "repeated",
						type: "Value",
						id: 1
					}
				}
			}
		}), t("wrappers", {
			DoubleValue: {
				fields: {
					value: {
						type: "double",
						id: 1
					}
				}
			},
			FloatValue: {
				fields: {
					value: {
						type: "float",
						id: 1
					}
				}
			},
			Int64Value: {
				fields: {
					value: {
						type: "int64",
						id: 1
					}
				}
			},
			UInt64Value: {
				fields: {
					value: {
						type: "uint64",
						id: 1
					}
				}
			},
			Int32Value: {
				fields: {
					value: {
						type: "int32",
						id: 1
					}
				}
			},
			UInt32Value: {
				fields: {
					value: {
						type: "uint32",
						id: 1
					}
				}
			},
			BoolValue: {
				fields: {
					value: {
						type: "bool",
						id: 1
					}
				}
			},
			StringValue: {
				fields: {
					value: {
						type: "string",
						id: 1
					}
				}
			},
			BytesValue: {
				fields: {
					value: {
						type: "bytes",
						id: 1
					}
				}
			}
		}), t("field_mask", {
			FieldMask: {
				fields: {
					paths: {
						rule: "repeated",
						type: "string",
						id: 1
					}
				}
			}
		}), t.get = function(e) {
			return t[e] || null
		};
	}, {}],
	"Xb+b": [function(require, module, exports) {
		"use strict";
		var e = module.exports = require("./index-light");
		e.build = "full", e.tokenize = require("./tokenize"), e.parse = require("./parse"), e.common = require("./common"), e.Root._configure(e.Type, e.parse, e.common);
	}, {
		"./index-light": "wgyk",
		"./tokenize": "BwgP",
		"./parse": "9lF6",
		"./common": "A41Z"
	}],
	"fN30": [function(require, module, exports) {
		"use strict";
		module.exports = require("./src/index");
	}, {
		"./src/index": "Xb+b"
	}],
	"IK+g": [function(require, module, exports) {
		var global = arguments[3];
		var r = arguments[3];
		r.crypto && r.crypto.getRandomValues ? module.exports.randomBytes = function(o) {
			var t = new Uint8Array(o);
			return r.crypto.getRandomValues(t), t
		} : module.exports.randomBytes = function(r) {
			for(var o = new Array(r), t = 0; t < r; t++) o[t] = Math.floor(256 * Math.random());
			return o
		};
	}, {}],
	"kvjH": [function(require, module, exports) {
		"use strict";
		var r = require("crypto"),
			n = "abcdefghijklmnopqrstuvwxyz012345";
		module.exports = {
			string: function(t) {
				for(var e = n.length, u = r.randomBytes(t), o = [], i = 0; i < t; i++) o.push(n.substr(u[i] % e, 1));
				return o.join("")
			},
			number: function(r) {
				return Math.floor(Math.random() * r)
			},
			numberString: function(r) {
				var n = ("" + (r - 1)).length;
				return(new Array(n + 1).join("0") + this.number(r)).slice(-n)
			}
		};
	}, {
		"crypto": "IK+g"
	}],
	"q8Q2": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			t = require("./random"),
			n = {},
			a = !1,
			o = e.chrome && e.chrome.app && e.chrome.app.runtime;
		module.exports = {
			attachEvent: function(t, n) {
				void 0 !== e.addEventListener ? e.addEventListener(t, n, !1) : e.document && e.attachEvent && (e.document.attachEvent("on" + t, n), e.attachEvent("on" + t, n))
			},
			detachEvent: function(t, n) {
				void 0 !== e.addEventListener ? e.removeEventListener(t, n, !1) : e.document && e.detachEvent && (e.document.detachEvent("on" + t, n), e.detachEvent("on" + t, n))
			},
			unloadAdd: function(e) {
				if(o) return null;
				var r = t.string(8);
				return n[r] = e, a && setTimeout(this.triggerUnloadCallbacks, 0), r
			},
			unloadDel: function(e) {
				e in n && delete n[e]
			},
			triggerUnloadCallbacks: function() {
				for(var e in n) n[e](), delete n[e]
			}
		};
		var r = function() {
			a || (a = !0, module.exports.triggerUnloadCallbacks())
		};
		o || module.exports.attachEvent("unload", r);
	}, {
		"./random": "kvjH"
	}],
	"qggR": [function(require, module, exports) {
		"use strict";
		module.exports = function(e, t) {
			if(t = t.split(":")[0], !(e = +e)) return !1;
			switch(t) {
				case "http":
				case "ws":
					return 80 !== e;
				case "https":
				case "wss":
					return 443 !== e;
				case "ftp":
					return 21 !== e;
				case "gopher":
					return 70 !== e;
				case "file":
					return !1
			}
			return 0 !== e
		};
	}, {}],
	"o5xf": [function(require, module, exports) {
		"use strict";
		var n, e = Object.prototype.hasOwnProperty;

		function t(n) {
			try {
				return decodeURIComponent(n.replace(/\+/g, " "))
			} catch(e) {
				return null
			}
		}

		function r(n) {
			try {
				return encodeURIComponent(n)
			} catch(e) {
				return null
			}
		}

		function o(n) {
			for(var e, r = /([^=?&]+)=?([^&]*)/g, o = {}; e = r.exec(n);) {
				var u = t(e[1]),
					c = t(e[2]);
				null === u || null === c || u in o || (o[u] = c)
			}
			return o
		}

		function u(t, r) {
			r = r || "";
			var o, u, c = [];
			for(u in "string" != typeof r && (r = "?"), t)
				if(e.call(t, u)) {
					if((o = t[u]) || null !== o && o !== n && !isNaN(o) || (o = ""), u = encodeURIComponent(u), o = encodeURIComponent(o), null === u || null === o) continue;
					c.push(u + "=" + o)
				}
			return c.length ? r + c.join("&") : ""
		}
		exports.stringify = u, exports.parse = o;
	}, {}],
	"WxRL": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			o = require("requires-port"),
			t = require("querystringify"),
			s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
			r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
			a = [
				["#", "hash"],
				["?", "query"],
				function(e) {
					return e.replace("\\", "/")
				},
				["/", "pathname"],
				["@", "auth", 1],
				[NaN, "host", void 0, 1, 1],
				[/:(\d+)$/, "port", void 0, 1],
				[NaN, "hostname", void 0, 1, 1]
			],
			n = {
				hash: 1,
				query: 1
			};

		function i(o) {
			var t, s = ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}).location || {},
				a = {},
				i = typeof(o = o || s);
			if("blob:" === o.protocol) a = new l(unescape(o.pathname), {});
			else if("string" === i)
				for(t in a = new l(o, {}), n) delete a[t];
			else if("object" === i) {
				for(t in o) t in n || (a[t] = o[t]);
				void 0 === a.slashes && (a.slashes = r.test(o.href))
			}
			return a
		}

		function h(e) {
			var o = s.exec(e);
			return {
				protocol: o[1] ? o[1].toLowerCase() : "",
				slashes: !!o[2],
				rest: o[3]
			}
		}

		function p(e, o) {
			for(var t = (o || "/").split("/").slice(0, -1).concat(e.split("/")), s = t.length, r = t[s - 1], a = !1, n = 0; s--;) "." === t[s] ? t.splice(s, 1) : ".." === t[s] ? (t.splice(s, 1), n++) : n && (0 === s && (a = !0), t.splice(s, 1), n--);
			return a && t.unshift(""), "." !== r && ".." !== r || t.push(""), t.join("/")
		}

		function l(e, s, r) {
			if(!(this instanceof l)) return new l(e, s, r);
			var n, c, u, f, m, y, d = a.slice(),
				g = typeof s,
				v = this,
				w = 0;
			for("object" !== g && "string" !== g && (r = s, s = null), r && "function" != typeof r && (r = t.parse), s = i(s), n = !(c = h(e || "")).protocol && !c.slashes, v.slashes = c.slashes || n && s.slashes, v.protocol = c.protocol || s.protocol || "", e = c.rest, c.slashes || (d[3] = [/(.*)/, "pathname"]); w < d.length; w++) "function" != typeof(f = d[w]) ? (u = f[0], y = f[1], u != u ? v[y] = e : "string" == typeof u ? ~(m = e.indexOf(u)) && ("number" == typeof f[2] ? (v[y] = e.slice(0, m), e = e.slice(m + f[2])) : (v[y] = e.slice(m), e = e.slice(0, m))) : (m = u.exec(e)) && (v[y] = m[1], e = e.slice(0, m.index)), v[y] = v[y] || n && f[3] && s[y] || "", f[4] && (v[y] = v[y].toLowerCase())) : e = f(e);
			r && (v.query = r(v.query)), n && s.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== s.pathname) && (v.pathname = p(v.pathname, s.pathname)), o(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (f = v.auth.split(":"), v.username = f[0] || "", v.password = f[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString()
		}

		function c(e, s, r) {
			var n = this;
			switch(e) {
				case "query":
					"string" == typeof s && s.length && (s = (r || t.parse)(s)), n[e] = s;
					break;
				case "port":
					n[e] = s, o(s, n.protocol) ? s && (n.host = n.hostname + ":" + s) : (n.host = n.hostname, n[e] = "");
					break;
				case "hostname":
					n[e] = s, n.port && (s += ":" + n.port), n.host = s;
					break;
				case "host":
					n[e] = s, /:\d+$/.test(s) ? (s = s.split(":"), n.port = s.pop(), n.hostname = s.join(":")) : (n.hostname = s, n.port = "");
					break;
				case "protocol":
					n.protocol = s.toLowerCase(), n.slashes = !r;
					break;
				case "pathname":
				case "hash":
					if(s) {
						var i = "pathname" === e ? "/" : "#";
						n[e] = s.charAt(0) !== i ? i + s : s
					} else n[e] = s;
					break;
				default:
					n[e] = s
			}
			for(var h = 0; h < a.length; h++) {
				var p = a[h];
				p[4] && (n[p[1]] = n[p[1]].toLowerCase())
			}
			return n.origin = n.protocol && n.host && "file:" !== n.protocol ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n
		}

		function u(e) {
			e && "function" == typeof e || (e = t.stringify);
			var o, s = this,
				r = s.protocol;
			r && ":" !== r.charAt(r.length - 1) && (r += ":");
			var a = r + (s.slashes ? "//" : "");
			return s.username && (a += s.username, s.password && (a += ":" + s.password), a += "@"), a += s.host + s.pathname, (o = "object" == typeof s.query ? e(s.query) : s.query) && (a += "?" !== o.charAt(0) ? "?" + o : o), s.hash && (a += s.hash), a
		}
		l.prototype = {
			set: c,
			toString: u
		}, l.extractProtocol = h, l.location = i, l.qs = t, module.exports = l;
	}, {
		"requires-port": "qggR",
		"querystringify": "o5xf"
	}],
	"prkv": [function(require, module, exports) {
		"use strict";
		var r = require("url-parse"),
			t = function() {};
		module.exports = {
			getOrigin: function(t) {
				if(!t) return null;
				var n = new r(t);
				if("file:" === n.protocol) return null;
				var i = n.port;
				return i || (i = "https:" === n.protocol ? "443" : "80"), n.protocol + "//" + n.hostname + ":" + i
			},
			isOriginEqual: function(r, n) {
				var i = this.getOrigin(r) === this.getOrigin(n);
				return t("same", r, n, i), i
			},
			isSchemeEqual: function(r, t) {
				return r.split(":")[0] === t.split(":")[0]
			},
			addPath: function(r, t) {
				var n = r.split("?");
				return n[0] + t + (n[1] ? "?" + n[1] : "")
			},
			addQuery: function(r, t) {
				return r + (-1 === r.indexOf("?") ? "?" + t : "&" + t)
			}
		};
	}, {
		"url-parse": "WxRL"
	}],
	"oxw+": [function(require, module, exports) {
		"function" == typeof Object.create ? module.exports = function(t, e) {
			t.super_ = e, t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : module.exports = function(t, e) {
			t.super_ = e;
			var o = function() {};
			o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t
		};
	}, {}],
	"PUqX": [function(require, module, exports) {
		"use strict";

		function t() {
			this._listeners = {}
		}
		t.prototype.addEventListener = function(t, e) {
			t in this._listeners || (this._listeners[t] = []);
			var s = this._listeners[t]; - 1 === s.indexOf(e) && (s = s.concat([e])), this._listeners[t] = s
		}, t.prototype.removeEventListener = function(t, e) {
			var s = this._listeners[t];
			if(s) {
				var i = s.indexOf(e); - 1 === i || (s.length > 1 ? this._listeners[t] = s.slice(0, i).concat(s.slice(i + 1)) : delete this._listeners[t])
			}
		}, t.prototype.dispatchEvent = function() {
			var t = arguments[0],
				e = t.type,
				s = 1 === arguments.length ? [t] : Array.apply(null, arguments);
			if(this["on" + e] && this["on" + e].apply(this, s), e in this._listeners)
				for(var i = this._listeners[e], n = 0; n < i.length; n++) i[n].apply(this, s)
		}, module.exports = t;
	}, {}],
	"6GPx": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			t = require("./eventtarget");

		function r() {
			t.call(this)
		}
		e(r, t), r.prototype.removeAllListeners = function(e) {
			e ? delete this._listeners[e] : this._listeners = {}
		}, r.prototype.once = function(e, t) {
			var r = this,
				o = !1;
			this.on(e, function i() {
				r.removeListener(e, i), o || (o = !0, t.apply(this, arguments))
			})
		}, r.prototype.emit = function() {
			var e = arguments[0],
				t = this._listeners[e];
			if(t) {
				for(var r = arguments.length, o = new Array(r - 1), i = 1; i < r; i++) o[i - 1] = arguments[i];
				for(var n = 0; n < t.length; n++) t[n].apply(this, o)
			}
		}, r.prototype.on = r.prototype.addListener = t.prototype.addEventListener, r.prototype.removeListener = t.prototype.removeEventListener, module.exports.EventEmitter = r;
	}, {
		"inherits": "oxw+",
		"./eventtarget": "PUqX"
	}],
	"xNcg": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			o = e.WebSocket || e.MozWebSocket;
		module.exports = o ? function(e) {
			return new o(e)
		} : void 0;
	}, {}],
	"c80l": [function(require, module, exports) {
		"use strict";
		var e = require("../utils/event"),
			s = require("../utils/url"),
			t = require("inherits"),
			n = require("events").EventEmitter,
			o = require("./driver/websocket"),
			r = function() {};

		function i(t, l, c) {
			if(!i.enabled()) throw new Error("Transport created when disabled");
			n.call(this), r("constructor", t);
			var u = this,
				a = s.addPath(t, "/websocket");
			a = "https" === a.slice(0, 5) ? "wss" + a.slice(5) : "ws" + a.slice(4), this.url = a, this.ws = new o(this.url, [], c), this.ws.onmessage = function(e) {
				r("message event", e.data), u.emit("message", e.data)
			}, this.unloadRef = e.unloadAdd(function() {
				r("unload"), u.ws.close()
			}), this.ws.onclose = function(e) {
				r("close event", e.code, e.reason), u.emit("close", e.code, e.reason), u._cleanup()
			}, this.ws.onerror = function(e) {
				r("error event", e), u.emit("close", 1006, "WebSocket connection broken"), u._cleanup()
			}
		}
		t(i, n), i.prototype.send = function(e) {
			var s = "[" + e + "]";
			r("send", s), this.ws.send(s)
		}, i.prototype.close = function() {
			r("close");
			var e = this.ws;
			this._cleanup(), e && e.close()
		}, i.prototype._cleanup = function() {
			r("_cleanup");
			var s = this.ws;
			s && (s.onmessage = s.onclose = s.onerror = null), e.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
		}, i.enabled = function() {
			return r("enabled"), !!o
		}, i.transportName = "websocket", i.roundTrips = 2, module.exports = i;
	}, {
		"../utils/event": "q8Q2",
		"../utils/url": "prkv",
		"inherits": "oxw+",
		"events": "6GPx",
		"./driver/websocket": "xNcg"
	}],
	"o1fQ": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			t = require("events").EventEmitter,
			n = function() {};

		function s(e, s) {
			n(e), t.call(this), this.sendBuffer = [], this.sender = s, this.url = e
		}
		e(s, t), s.prototype.send = function(e) {
			n("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
		}, s.prototype.sendScheduleWait = function() {
			n("sendScheduleWait");
			var e, t = this;
			this.sendStop = function() {
				n("sendStop"), t.sendStop = null, clearTimeout(e)
			}, e = setTimeout(function() {
				n("timeout"), t.sendStop = null, t.sendSchedule()
			}, 25)
		}, s.prototype.sendSchedule = function() {
			n("sendSchedule", this.sendBuffer.length);
			var e = this;
			if(this.sendBuffer.length > 0) {
				var t = "[" + this.sendBuffer.join(",") + "]";
				this.sendStop = this.sender(this.url, t, function(t) {
					e.sendStop = null, t ? (n("error", t), e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
				}), this.sendBuffer = []
			}
		}, s.prototype._cleanup = function() {
			n("_cleanup"), this.removeAllListeners()
		}, s.prototype.close = function() {
			n("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
		}, module.exports = s;
	}, {
		"inherits": "oxw+",
		"events": "6GPx"
	}],
	"4XFA": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			s = require("events").EventEmitter,
			t = function() {};

		function i(e, i, l) {
			t(i), s.call(this), this.Receiver = e, this.receiveUrl = i, this.AjaxObject = l, this._scheduleReceiver()
		}
		e(i, s), i.prototype._scheduleReceiver = function() {
			t("_scheduleReceiver");
			var e = this,
				s = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
			s.on("message", function(s) {
				t("message", s), e.emit("message", s)
			}), s.once("close", function(i, l) {
				t("close", i, l, e.pollIsClosing), e.poll = s = null, e.pollIsClosing || ("network" === l ? e._scheduleReceiver() : (e.emit("close", i || 1006, l), e.removeAllListeners()))
			})
		}, i.prototype.abort = function() {
			t("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
		}, module.exports = i;
	}, {
		"inherits": "oxw+",
		"events": "6GPx"
	}],
	"sju2": [function(require, module, exports) {
		"use strict";
		var l = require("inherits"),
			e = require("../../utils/url"),
			o = require("./buffered-sender"),
			s = require("./polling"),
			t = function() {};

		function i(l, i, r, n, c) {
			var u = e.addPath(l, i);
			t(u);
			var p = this;
			o.call(this, l, r), this.poll = new s(n, u, c), this.poll.on("message", function(l) {
				t("poll message", l), p.emit("message", l)
			}), this.poll.once("close", function(l, e) {
				t("poll close", l, e), p.poll = null, p.emit("close", l, e), p.close()
			})
		}
		l(i, o), i.prototype.close = function() {
			o.prototype.close.call(this), t("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
		}, module.exports = i;
	}, {
		"inherits": "oxw+",
		"../../utils/url": "prkv",
		"./buffered-sender": "o1fQ",
		"./polling": "4XFA"
	}],
	"h4sR": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("../../utils/url"),
			n = require("./sender-receiver"),
			t = function() {};

		function i(e) {
			return function(n, i, u) {
				t("create ajax sender", n, i);
				var o = {};
				"string" == typeof i && (o.headers = {
					"Content-type": "text/plain"
				});
				var s = r.addPath(n, "/xhr_send"),
					a = new e("POST", s, i, o);
				return a.once("finish", function(e) {
						if(t("finish", e), a = null, 200 !== e && 204 !== e) return u(new Error("http status " + e));
						u()
					}),
					function() {
						t("abort"), a.close(), a = null;
						var e = new Error("Aborted");
						e.code = 1e3, u(e)
					}
			}
		}

		function u(e, r, t, u) {
			n.call(this, e, r, i(u), t, u)
		}
		e(u, n), module.exports = u;
	}, {
		"inherits": "oxw+",
		"../../utils/url": "prkv",
		"./sender-receiver": "sju2"
	}],
	"kyBw": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			i = require("events").EventEmitter,
			n = function() {};

		function t(e, t) {
			n(e), i.call(this);
			var s = this;
			this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(e, i) {
				n("finish", e, i), s._chunkHandler(e, i), s.xo = null;
				var t = 200 === e ? "network" : "permanent";
				n("close", t), s.emit("close", null, t), s._cleanup()
			})
		}
		e(t, i), t.prototype._chunkHandler = function(e, i) {
			if(n("_chunkHandler", e), 200 === e && i)
				for(var t = -1;; this.bufferPosition += t + 1) {
					var s = i.slice(this.bufferPosition);
					if(-1 === (t = s.indexOf("\n"))) break;
					var o = s.slice(0, t);
					o && (n("message", o), this.emit("message", o))
				}
		}, t.prototype._cleanup = function() {
			n("_cleanup"), this.removeAllListeners()
		}, t.prototype.abort = function() {
			n("abort"), this.xo && (this.xo.close(), n("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup()
		}, module.exports = t;
	}, {
		"inherits": "oxw+",
		"events": "6GPx"
	}],
	"TbCi": [function(require, module, exports) {
		var global = arguments[3];
		var t = arguments[3],
			e = require("events").EventEmitter,
			i = require("inherits"),
			n = require("../../utils/event"),
			r = require("../../utils/url"),
			s = t.XMLHttpRequest,
			h = function() {};

		function a(t, i, n, r) {
			h(t, i);
			var s = this;
			e.call(this), setTimeout(function() {
				s._start(t, i, n, r)
			}, 0)
		}
		i(a, e), a.prototype._start = function(t, e, i, u) {
			var o = this;
			try {
				this.xhr = new s
			} catch(l) {}
			if(!this.xhr) return h("no xhr"), this.emit("finish", 0, "no xhr support"), void this._cleanup();
			e = r.addQuery(e, "t=" + +new Date), this.unloadRef = n.unloadAdd(function() {
				h("unload cleanup"), o._cleanup(!0)
			});
			try {
				this.xhr.open(t, e, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
					h("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1)
				})
			} catch(d) {
				return h("exception", d), this.emit("finish", 0, ""), void this._cleanup(!1)
			}
			if(u && u.noCredentials || !a.supportsCORS || (h("withCredentials"), this.xhr.withCredentials = !0), u && u.headers)
				for(var c in u.headers) this.xhr.setRequestHeader(c, u.headers[c]);
			this.xhr.onreadystatechange = function() {
				if(o.xhr) {
					var t, e, i = o.xhr;
					switch(h("readyState", i.readyState), i.readyState) {
						case 3:
							try {
								e = i.status, t = i.responseText
							} catch(d) {}
							h("status", e), 1223 === e && (e = 204), 200 === e && t && t.length > 0 && (h("chunk"), o.emit("chunk", e, t));
							break;
						case 4:
							e = i.status, h("status", e), 1223 === e && (e = 204), 12005 !== e && 12029 !== e || (e = 0), h("finish", e, i.responseText), o.emit("finish", e, i.responseText), o._cleanup(!1)
					}
				}
			};
			try {
				o.xhr.send(i)
			} catch(d) {
				o.emit("finish", 0, ""), o._cleanup(!1)
			}
		}, a.prototype._cleanup = function(t) {
			if(h("cleanup"), this.xhr) {
				if(this.removeAllListeners(), n.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), t) try {
					this.xhr.abort()
				} catch(e) {}
				this.unloadRef = this.xhr = null
			}
		}, a.prototype.close = function() {
			h("close"), this._cleanup(!0)
		}, a.enabled = !!s;
		var u = ["Active"].concat("Object").join("X");
		!a.enabled && u in t && (h("overriding xmlhttprequest"), s = function() {
			try {
				return new t[u]("Microsoft.XMLHTTP")
			} catch(e) {
				return null
			}
		}, a.enabled = !!new s);
		var o = !1;
		try {
			o = "withCredentials" in new s
		} catch(c) {}
		a.supportsCORS = o, module.exports = a;
	}, {
		"events": "6GPx",
		"inherits": "oxw+",
		"../../utils/event": "q8Q2",
		"../../utils/url": "prkv"
	}],
	"TBnt": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("../driver/xhr");

		function i(e, i, s, t) {
			r.call(this, e, i, s, t)
		}
		e(i, r), i.enabled = r.enabled && r.supportsCORS, module.exports = i;
	}, {
		"inherits": "oxw+",
		"../driver/xhr": "TbCi"
	}],
	"9mX/": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("../driver/xhr");

		function i(e, i, n) {
			r.call(this, e, i, n, {
				noCredentials: !0
			})
		}
		e(i, r), i.enabled = r.enabled, module.exports = i;
	}, {
		"inherits": "oxw+",
		"../driver/xhr": "TbCi"
	}],
	"+JeF": [function(require, module, exports) {
		var global = arguments[3];
		var r = arguments[3];
		module.exports = {
			isOpera: function() {
				return r.navigator && /opera/i.test(r.navigator.userAgent)
			},
			isKonqueror: function() {
				return r.navigator && /konqueror/i.test(r.navigator.userAgent)
			},
			hasDomain: function() {
				if(!r.document) return !0;
				try {
					return !!r.document.domain
				} catch(n) {
					return !1
				}
			}
		};
	}, {}],
	"a/LL": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			r = require("inherits"),
			n = require("./lib/ajax-based"),
			i = require("./receiver/xhr"),
			a = require("./sender/xhr-cors"),
			s = require("./sender/xhr-local"),
			t = require("../utils/browser");

		function d(e) {
			if(!s.enabled && !a.enabled) throw new Error("Transport created when disabled");
			n.call(this, e, "/xhr_streaming", i, a)
		}
		r(d, n), d.enabled = function(e) {
			return !e.nullOrigin && (!t.isOpera() && a.enabled)
		}, d.transportName = "xhr-streaming", d.roundTrips = 2, d.needBody = !!e.document, module.exports = d;
	}, {
		"inherits": "oxw+",
		"./lib/ajax-based": "h4sR",
		"./receiver/xhr": "kyBw",
		"./sender/xhr-cors": "TBnt",
		"./sender/xhr-local": "9mX/",
		"../utils/browser": "+JeF"
	}],
	"VmyL": [function(require, module, exports) {
		var global = arguments[3];
		var t = arguments[3],
			e = require("events").EventEmitter,
			r = require("inherits"),
			o = require("../../utils/event"),
			i = require("../../utils/browser"),
			n = require("../../utils/url"),
			s = function() {};

		function u(t, r, o) {
			s(t, r);
			var i = this;
			e.call(this), setTimeout(function() {
				i._start(t, r, o)
			}, 0)
		}
		r(u, e), u.prototype._start = function(e, r, i) {
			s("_start");
			var u = this,
				a = new t.XDomainRequest;
			r = n.addQuery(r, "t=" + +new Date), a.onerror = function() {
				s("onerror"), u._error()
			}, a.ontimeout = function() {
				s("ontimeout"), u._error()
			}, a.onprogress = function() {
				s("progress", a.responseText), u.emit("chunk", 200, a.responseText)
			}, a.onload = function() {
				s("load"), u.emit("finish", 200, a.responseText), u._cleanup(!1)
			}, this.xdr = a, this.unloadRef = o.unloadAdd(function() {
				u._cleanup(!0)
			});
			try {
				this.xdr.open(e, r), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(i)
			} catch(h) {
				this._error()
			}
		}, u.prototype._error = function() {
			this.emit("finish", 0, ""), this._cleanup(!1)
		}, u.prototype._cleanup = function(t) {
			if(s("cleanup", t), this.xdr) {
				if(this.removeAllListeners(), o.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, t) try {
					this.xdr.abort()
				} catch(e) {}
				this.unloadRef = this.xdr = null
			}
		}, u.prototype.close = function() {
			s("close"), this._cleanup(!0)
		}, u.enabled = !(!t.XDomainRequest || !i.hasDomain()), module.exports = u;
	}, {
		"events": "6GPx",
		"inherits": "oxw+",
		"../../utils/event": "q8Q2",
		"../../utils/browser": "+JeF",
		"../../utils/url": "prkv"
	}],
	"UfBN": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("./lib/ajax-based"),
			i = require("./receiver/xhr"),
			n = require("./sender/xdr");

		function a(e) {
			if(!n.enabled) throw new Error("Transport created when disabled");
			r.call(this, e, "/xhr_streaming", i, n)
		}
		e(a, r), a.enabled = function(e) {
			return !e.cookie_needed && !e.nullOrigin && (n.enabled && e.sameScheme)
		}, a.transportName = "xdr-streaming", a.roundTrips = 2, module.exports = a;
	}, {
		"inherits": "oxw+",
		"./lib/ajax-based": "h4sR",
		"./receiver/xhr": "kyBw",
		"./sender/xdr": "VmyL"
	}],
	"YxpD": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3];
		module.exports = e.EventSource;
	}, {}],
	"pVdQ": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			t = require("events").EventEmitter,
			r = require("eventsource"),
			n = function() {};

		function o(e) {
			n(e), t.call(this);
			var o = this,
				s = this.es = new r(e);
			s.onmessage = function(e) {
				n("message", e.data), o.emit("message", decodeURI(e.data))
			}, s.onerror = function(e) {
				n("error", s.readyState, e);
				var t = 2 !== s.readyState ? "network" : "permanent";
				o._cleanup(), o._close(t)
			}
		}
		e(o, t), o.prototype.abort = function() {
			n("abort"), this._cleanup(), this._close("user")
		}, o.prototype._cleanup = function() {
			n("cleanup");
			var e = this.es;
			e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
		}, o.prototype._close = function(e) {
			n("close", e);
			var t = this;
			setTimeout(function() {
				t.emit("close", null, e), t.removeAllListeners()
			}, 200)
		}, module.exports = o;
	}, {
		"inherits": "oxw+",
		"events": "6GPx",
		"eventsource": "YxpD"
	}],
	"DuLI": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("./lib/ajax-based"),
			n = require("./receiver/eventsource"),
			t = require("./sender/xhr-cors"),
			i = require("eventsource");

		function s(e) {
			if(!s.enabled()) throw new Error("Transport created when disabled");
			r.call(this, e, "/eventsource", n, t)
		}
		e(s, r), s.enabled = function() {
			return !!i
		}, s.transportName = "eventsource", s.roundTrips = 2, module.exports = s;
	}, {
		"inherits": "oxw+",
		"./lib/ajax-based": "h4sR",
		"./receiver/eventsource": "pVdQ",
		"./sender/xhr-cors": "TBnt",
		"eventsource": "YxpD"
	}],
	"r5wZ": [function(require, module, exports) {
		var define;
		var global = arguments[3];
		var t, e = arguments[3];
		(function() {
			var r = "function" == typeof t && t.amd,
				n = {
					function: !0,
					object: !0
				},
				o = n[typeof exports] && exports && !exports.nodeType && exports,
				c = n[typeof window] && window || this,
				i = o && n[typeof module] && module && !module.nodeType && "object" == typeof e && e;

			function a(t, e) {
				t || (t = c.Object()), e || (e = c.Object());
				var r = t.Number || c.Number,
					o = t.String || c.String,
					i = t.Object || c.Object,
					l = t.Date || c.Date,
					f = t.SyntaxError || c.SyntaxError,
					u = t.TypeError || c.TypeError,
					s = t.Math || c.Math,
					h = t.JSON || c.JSON;
				"object" == typeof h && h && (e.stringify = h.stringify, e.parse = h.parse);
				var p, g, y, b = i.prototype,
					j = b.toString,
					d = new l(-0xc782b5b800cec);
				try {
					d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds()
				} catch(P) {}

				function v(t) {
					if(v[t] !== y) return v[t];
					var n;
					if("bug-string-char-index" == t) n = "a" != "a" [0];
					else if("json" == t) n = v("json-stringify") && v("json-parse");
					else {
						var c, i = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
						if("json-stringify" == t) {
							var a = e.stringify,
								f = "function" == typeof a && d;
							if(f) {
								(c = function() {
									return 1
								}).toJSON = c;
								try {
									f = "0" === a(0) && "0" === a(new r) && '""' == a(new o) && a(j) === y && a(y) === y && a() === y && "1" === a(c) && "[1]" == a([c]) && "[null]" == a([y]) && "null" == a(null) && "[null,null,null]" == a([y, j, null]) && a({
										a: [c, !0, !1, null, "\0\b\n\f\r\t"]
									}) == i && "1" === a(null, c) && "[\n 1,\n 2\n]" == a([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == a(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == a(new l(-1))
								} catch(P) {
									f = !1
								}
							}
							n = f
						}
						if("json-parse" == t) {
							var u = e.parse;
							if("function" == typeof u) try {
								if(0 === u("0") && !u(!1)) {
									var s = 5 == (c = u(i)).a.length && 1 === c.a[0];
									if(s) {
										try {
											s = !u('"\t"')
										} catch(P) {}
										if(s) try {
											s = 1 !== u("01")
										} catch(P) {}
										if(s) try {
											s = 1 !== u("1.")
										} catch(P) {}
									}
								}
							} catch(P) {
								s = !1
							}
							n = s
						}
					}
					return v[t] = !!n
				}
				if(!v("json")) {
					var C = v("bug-string-char-index");
					if(!d) var S = s.floor,
						O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
						A = function(t, e) {
							return O[e] + 365 * (t - 1970) + S((t - 1969 + (e = +(e > 1))) / 4) - S((t - 1901 + e) / 100) + S((t - 1601 + e) / 400)
						};
					if((p = b.hasOwnProperty) || (p = function(t) {
							var e, r = {};
							return(r.__proto__ = null, r.__proto__ = {
								toString: 1
							}, r).toString != j ? p = function(t) {
								var e = this.__proto__,
									r = t in (this.__proto__ = null, this);
								return this.__proto__ = e, r
							} : (e = r.constructor, p = function(t) {
								var r = (this.constructor || e).prototype;
								return t in this && !(t in r && this[t] === r[t])
							}), r = null, p.call(this, t)
						}), g = function(t, e) {
							var r, o, c, i = 0;
							for(c in (r = function() {
									this.valueOf = 0
								}).prototype.valueOf = 0, o = new r) p.call(o, c) && i++;
							return r = o = null, i ? g = 2 == i ? function(t, e) {
								var r, n = {},
									o = "[object Function]" == j.call(t);
								for(r in t) o && "prototype" == r || p.call(n, r) || !(n[r] = 1) || !p.call(t, r) || e(r)
							} : function(t, e) {
								var r, n, o = "[object Function]" == j.call(t);
								for(r in t) o && "prototype" == r || !p.call(t, r) || (n = "constructor" === r) || e(r);
								(n || p.call(t, r = "constructor")) && e(r)
							} : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function(t, e) {
								var r, c, i = "[object Function]" == j.call(t),
									a = !i && "function" != typeof t.constructor && n[typeof t.hasOwnProperty] && t.hasOwnProperty || p;
								for(r in t) i && "prototype" == r || !a.call(t, r) || e(r);
								for(c = o.length; r = o[--c]; a.call(t, r) && e(r));
							}), g(t, e)
						}, !v("json-stringify")) {
						var w = {
								92: "\\\\",
								34: '\\"',
								8: "\\b",
								12: "\\f",
								10: "\\n",
								13: "\\r",
								9: "\\t"
							},
							T = function(t, e) {
								return("000000" + (e || 0)).slice(-t)
							},
							_ = function(t) {
								for(var e = '"', r = 0, n = t.length, o = !C || n > 10, c = o && (C ? t.split("") : t); r < n; r++) {
									var i = t.charCodeAt(r);
									switch(i) {
										case 8:
										case 9:
										case 10:
										case 12:
										case 13:
										case 34:
										case 92:
											e += w[i];
											break;
										default:
											if(i < 32) {
												e += "\\u00" + T(2, i.toString(16));
												break
											}
											e += o ? c[r] : t.charAt(r)
									}
								}
								return e + '"'
							},
							N = function(t, e, r, n, o, c, i) {
								var a, l, f, s, h, b, d, v, C, O, w, U, m, J, x, M;
								try {
									a = e[t]
								} catch(P) {}
								if("object" == typeof a && a)
									if("[object Date]" != (l = j.call(a)) || p.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || p.call(a, "toJSON")) && (a = a.toJSON(t));
									else if(a > -1 / 0 && a < 1 / 0) {
									if(A) {
										for(h = S(a / 864e5), f = S(h / 365.2425) + 1970 - 1; A(f + 1, 0) <= h; f++);
										for(s = S((h - A(f, 0)) / 30.42); A(f, s + 1) <= h; s++);
										h = 1 + h - A(f, s), d = S((b = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, v = S(b / 6e4) % 60, C = S(b / 1e3) % 60, O = b % 1e3
									} else f = a.getUTCFullYear(), s = a.getUTCMonth(), h = a.getUTCDate(), d = a.getUTCHours(), v = a.getUTCMinutes(), C = a.getUTCSeconds(), O = a.getUTCMilliseconds();
									a = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + T(6, f < 0 ? -f : f) : T(4, f)) + "-" + T(2, s + 1) + "-" + T(2, h) + "T" + T(2, d) + ":" + T(2, v) + ":" + T(2, C) + "." + T(3, O) + "Z"
								} else a = null;
								if(r && (a = r.call(e, t, a)), null === a) return "null";
								if("[object Boolean]" == (l = j.call(a))) return "" + a;
								if("[object Number]" == l) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
								if("[object String]" == l) return _("" + a);
								if("object" == typeof a) {
									for(J = i.length; J--;)
										if(i[J] === a) throw u();
									if(i.push(a), w = [], x = c, c += o, "[object Array]" == l) {
										for(m = 0, J = a.length; m < J; m++) U = N(m, a, r, n, o, c, i), w.push(U === y ? "null" : U);
										M = w.length ? o ? "[\n" + c + w.join(",\n" + c) + "\n" + x + "]" : "[" + w.join(",") + "]" : "[]"
									} else g(n || a, function(t) {
										var e = N(t, a, r, n, o, c, i);
										e !== y && w.push(_(t) + ":" + (o ? " " : "") + e)
									}), M = w.length ? o ? "{\n" + c + w.join(",\n" + c) + "\n" + x + "}" : "{" + w.join(",") + "}" : "{}";
									return i.pop(), M
								}
							};
						e.stringify = function(t, e, r) {
							var o, c, i, a;
							if(n[typeof e] && e)
								if("[object Function]" == (a = j.call(e))) c = e;
								else if("[object Array]" == a) {
								i = {};
								for(var l, f = 0, u = e.length; f < u; l = e[f++], ("[object String]" == (a = j.call(l)) || "[object Number]" == a) && (i[l] = 1));
							}
							if(r)
								if("[object Number]" == (a = j.call(r))) {
									if((r -= r % 1) > 0)
										for(o = "", r > 10 && (r = 10); o.length < r; o += " ");
								} else "[object String]" == a && (o = r.length <= 10 ? r : r.slice(0, 10));
							return N("", ((l = {})[""] = t, l), c, i, o, "", [])
						}
					}
					if(!v("json-parse")) {
						var U, m, J = o.fromCharCode,
							x = {
								92: "\\",
								34: '"',
								47: "/",
								98: "\b",
								116: "\t",
								110: "\n",
								102: "\f",
								114: "\r"
							},
							M = function() {
								throw U = m = null, f()
							},
							F = function() {
								for(var t, e, r, n, o, c = m, i = c.length; U < i;) switch(o = c.charCodeAt(U)) {
									case 9:
									case 10:
									case 13:
									case 32:
										U++;
										break;
									case 123:
									case 125:
									case 91:
									case 93:
									case 58:
									case 44:
										return t = C ? c.charAt(U) : c[U], U++, t;
									case 34:
										for(t = "@", U++; U < i;)
											if((o = c.charCodeAt(U)) < 32) M();
											else if(92 == o) switch(o = c.charCodeAt(++U)) {
											case 92:
											case 34:
											case 47:
											case 98:
											case 116:
											case 110:
											case 102:
											case 114:
												t += x[o], U++;
												break;
											case 117:
												for(e = ++U, r = U + 4; U < r; U++)(o = c.charCodeAt(U)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || M();
												t += J("0x" + c.slice(e, U));
												break;
											default:
												M()
										} else {
											if(34 == o) break;
											for(o = c.charCodeAt(U), e = U; o >= 32 && 92 != o && 34 != o;) o = c.charCodeAt(++U);
											t += c.slice(e, U)
										}
										if(34 == c.charCodeAt(U)) return U++, t;
										M();
									default:
										if(e = U, 45 == o && (n = !0, o = c.charCodeAt(++U)), o >= 48 && o <= 57) {
											for(48 == o && ((o = c.charCodeAt(U + 1)) >= 48 && o <= 57) && M(), n = !1; U < i && ((o = c.charCodeAt(U)) >= 48 && o <= 57); U++);
											if(46 == c.charCodeAt(U)) {
												for(r = ++U; r < i && ((o = c.charCodeAt(r)) >= 48 && o <= 57); r++);
												r == U && M(), U = r
											}
											if(101 == (o = c.charCodeAt(U)) || 69 == o) {
												for(43 != (o = c.charCodeAt(++U)) && 45 != o || U++, r = U; r < i && ((o = c.charCodeAt(r)) >= 48 && o <= 57); r++);
												r == U && M(), U = r
											}
											return +c.slice(e, U)
										}
										if(n && M(), "true" == c.slice(U, U + 4)) return U += 4, !0;
										if("false" == c.slice(U, U + 5)) return U += 5, !1;
										if("null" == c.slice(U, U + 4)) return U += 4, null;
										M()
								}
								return "$"
							},
							k = function(t) {
								var e, r;
								if("$" == t && M(), "string" == typeof t) {
									if("@" == (C ? t.charAt(0) : t[0])) return t.slice(1);
									if("[" == t) {
										for(e = [];
											"]" != (t = F()); r || (r = !0)) r && ("," == t ? "]" == (t = F()) && M() : M()), "," == t && M(), e.push(k(t));
										return e
									}
									if("{" == t) {
										for(e = {};
											"}" != (t = F()); r || (r = !0)) r && ("," == t ? "}" == (t = F()) && M() : M()), "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == F() || M(), e[t.slice(1)] = k(F());
										return e
									}
									M()
								}
								return t
							},
							D = function(t, e, r) {
								var n = E(t, e, r);
								n === y ? delete t[e] : t[e] = n
							},
							E = function(t, e, r) {
								var n, o = t[e];
								if("object" == typeof o && o)
									if("[object Array]" == j.call(o))
										for(n = o.length; n--;) D(o, n, r);
									else g(o, function(t) {
										D(o, t, r)
									});
								return r.call(t, e, o)
							};
						e.parse = function(t, e) {
							var r, n;
							return U = 0, m = "" + t, r = k(F()), "$" != F() && M(), U = m = null, e && "[object Function]" == j.call(e) ? E(((n = {})[""] = r, n), "", e) : r
						}
					}
				}
				return e.runInContext = a, e
			}
			if(!i || i.global !== i && i.window !== i && i.self !== i || (c = i), o && !r) a(c, o);
			else {
				var l = c.JSON,
					f = c.JSON3,
					u = !1,
					s = a(c, c.JSON3 = {
						noConflict: function() {
							return u || (u = !0, c.JSON = l, c.JSON3 = f, l = f = null), s
						}
					});
				c.JSON = {
					parse: s.parse,
					stringify: s.stringify
				}
			}
			r && t(function() {
				return s
			})
		}).call(this);
	}, {}],
	"A8Oj": [function(require, module, exports) {
		module.exports = "1.3.0";
	}, {}],
	"lHOv": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			o = require("./event"),
			n = require("json3"),
			t = require("./browser"),
			r = function() {};
		module.exports = {
			WPrefix: "_jp",
			currentWindowId: null,
			polluteGlobalNamespace: function() {
				module.exports.WPrefix in e || (e[module.exports.WPrefix] = {})
			},
			postMessage: function(o, t) {
				e.parent !== e ? e.parent.postMessage(n.stringify({
					windowId: module.exports.currentWindowId,
					type: o,
					data: t || ""
				}), "*") : r("Cannot postMessage, no parent window.", o, t)
			},
			createIframe: function(n, t) {
				var i, u, a = e.document.createElement("iframe"),
					l = function() {
						r("unattach"), clearTimeout(i);
						try {
							a.onload = null
						} catch(e) {}
						a.onerror = null
					},
					c = function() {
						r("cleanup"), a && (l(), setTimeout(function() {
							a && a.parentNode.removeChild(a), a = null
						}, 0), o.unloadDel(u))
					},
					d = function(e) {
						r("onerror", e), a && (c(), t(e))
					};
				return a.src = n, a.style.display = "none", a.style.position = "absolute", a.onerror = function() {
					d("onerror")
				}, a.onload = function() {
					r("onload"), clearTimeout(i), i = setTimeout(function() {
						d("onload timeout")
					}, 2e3)
				}, e.document.body.appendChild(a), i = setTimeout(function() {
					d("timeout")
				}, 15e3), u = o.unloadAdd(c), {
					post: function(e, o) {
						r("post", e, o), setTimeout(function() {
							try {
								a && a.contentWindow && a.contentWindow.postMessage(e, o)
							} catch(n) {}
						}, 0)
					},
					cleanup: c,
					loaded: l
				}
			},
			createHtmlfile: function(n, t) {
				var i, u, a, l = ["Active"].concat("Object").join("X"),
					c = new e[l]("htmlfile"),
					d = function() {
						clearTimeout(i), a.onerror = null
					},
					s = function() {
						c && (d(), o.unloadDel(u), a.parentNode.removeChild(a), a = c = null, CollectGarbage())
					},
					p = function(e) {
						r("onerror", e), c && (s(), t(e))
					};
				c.open(), c.write('<html><script>document.domain="' + e.document.domain + '";<\/script></html>'), c.close(), c.parentWindow[module.exports.WPrefix] = e[module.exports.WPrefix];
				var m = c.createElement("div");
				return c.body.appendChild(m), a = c.createElement("iframe"), m.appendChild(a), a.src = n, a.onerror = function() {
					p("onerror")
				}, i = setTimeout(function() {
					p("timeout")
				}, 15e3), u = o.unloadAdd(s), {
					post: function(e, o) {
						try {
							setTimeout(function() {
								a && a.contentWindow && a.contentWindow.postMessage(e, o)
							}, 0)
						} catch(n) {}
					},
					cleanup: s,
					loaded: d
				}
			}
		}, module.exports.iframeEnabled = !1, e.document && (module.exports.iframeEnabled = ("function" == typeof e.postMessage || "object" == typeof e.postMessage) && !t.isKonqueror());
	}, {
		"./event": "q8Q2",
		"json3": "r5wZ",
		"./browser": "+JeF"
	}],
	"B5iP": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			i = require("json3"),
			s = require("events").EventEmitter,
			t = require("../version"),
			a = require("../utils/url"),
			r = require("../utils/iframe"),
			n = require("../utils/event"),
			o = require("../utils/random"),
			h = function() {};

		function d(e, i, t) {
			if(!d.enabled()) throw new Error("Transport created when disabled");
			s.call(this);
			var l = this;
			this.origin = a.getOrigin(t), this.baseUrl = t, this.transUrl = i, this.transport = e, this.windowId = o.string(8);
			var c = a.addPath(t, "/iframe.html") + "#" + this.windowId;
			h(e, i, c), this.iframeObj = r.createIframe(c, function(e) {
				h("err callback"), l.emit("close", 1006, "Unable to load an iframe (" + e + ")"), l.close()
			}), this.onmessageCallback = this._message.bind(this), n.attachEvent("message", this.onmessageCallback)
		}
		e(d, s), d.prototype.close = function() {
			if(h("close"), this.removeAllListeners(), this.iframeObj) {
				n.detachEvent("message", this.onmessageCallback);
				try {
					this.postMessage("c")
				} catch(e) {}
				this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
			}
		}, d.prototype._message = function(e) {
			if(h("message", e.data), a.isOriginEqual(e.origin, this.origin)) {
				var s;
				try {
					s = i.parse(e.data)
				} catch(n) {
					return void h("bad json", e.data)
				}
				if(s.windowId === this.windowId) switch(s.type) {
					case "s":
						this.iframeObj.loaded(), this.postMessage("s", i.stringify([t, this.transport, this.transUrl, this.baseUrl]));
						break;
					case "t":
						this.emit("message", s.data);
						break;
					case "c":
						var r;
						try {
							r = i.parse(s.data)
						} catch(n) {
							return void h("bad json", s.data)
						}
						this.emit("close", r[0], r[1]), this.close()
				} else h("mismatched window id", s.windowId, this.windowId)
			} else h("not same origin", e.origin, this.origin)
		}, d.prototype.postMessage = function(e, s) {
			h("postMessage", e, s), this.iframeObj.post(i.stringify({
				windowId: this.windowId,
				type: e,
				data: s || ""
			}), this.origin)
		}, d.prototype.send = function(e) {
			h("send", e), this.postMessage("m", e)
		}, d.enabled = function() {
			return r.iframeEnabled
		}, d.transportName = "iframe", d.roundTrips = 2, module.exports = d;
	}, {
		"inherits": "oxw+",
		"json3": "r5wZ",
		"events": "6GPx",
		"../version": "A8Oj",
		"../utils/url": "prkv",
		"../utils/iframe": "lHOv",
		"../utils/event": "q8Q2",
		"../utils/random": "kvjH"
	}],
	"ykCA": [function(require, module, exports) {
		"use strict";
		module.exports = {
			isObject: function(t) {
				var e = typeof t;
				return "function" === e || "object" === e && !!t
			},
			extend: function(t) {
				if(!this.isObject(t)) return t;
				for(var e, r, n = 1, o = arguments.length; n < o; n++)
					for(r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
				return t
			}
		};
	}, {}],
	"XHhf": [function(require, module, exports) {
		var global = arguments[3];
		var r = arguments[3],
			e = require("inherits"),
			n = require("../iframe"),
			t = require("../../utils/object");
		module.exports = function(a) {
			function i(r, e) {
				n.call(this, a.transportName, r, e)
			}
			return e(i, n), i.enabled = function(e, i) {
				if(!r.document) return !1;
				var u = t.extend({}, i);
				return u.sameOrigin = !0, a.enabled(u) && n.enabled()
			}, i.transportName = "iframe-" + a.transportName, i.needBody = !0, i.roundTrips = n.roundTrips + a.roundTrips - 1, i.facadeTransport = a, i
		};
	}, {
		"inherits": "oxw+",
		"../iframe": "B5iP",
		"../../utils/object": "ykCA"
	}],
	"4eIr": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			t = require("inherits"),
			i = require("../../utils/iframe"),
			l = require("../../utils/url"),
			n = require("events").EventEmitter,
			a = require("../../utils/random"),
			r = function() {};

		function s(t) {
			r(t), n.call(this);
			var o = this;
			i.polluteGlobalNamespace(), this.id = "a" + a.string(6), t = l.addQuery(t, "c=" + decodeURIComponent(i.WPrefix + "." + this.id)), r("using htmlfile", s.htmlfileEnabled);
			var c = s.htmlfileEnabled ? i.createHtmlfile : i.createIframe;
			e[i.WPrefix][this.id] = {
				start: function() {
					r("start"), o.iframeObj.loaded()
				},
				message: function(e) {
					r("message", e), o.emit("message", e)
				},
				stop: function() {
					r("stop"), o._cleanup(), o._close("network")
				}
			}, this.iframeObj = c(t, function() {
				r("callback"), o._cleanup(), o._close("permanent")
			})
		}
		t(s, n), s.prototype.abort = function() {
			r("abort"), this._cleanup(), this._close("user")
		}, s.prototype._cleanup = function() {
			r("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete e[i.WPrefix][this.id]
		}, s.prototype._close = function(e) {
			r("_close", e), this.emit("close", null, e), this.removeAllListeners()
		}, s.htmlfileEnabled = !1;
		var o = ["Active"].concat("Object").join("X");
		if(o in e) try {
			s.htmlfileEnabled = !!new e[o]("htmlfile")
		} catch(c) {}
		s.enabled = s.htmlfileEnabled || i.iframeEnabled, module.exports = s;
	}, {
		"inherits": "oxw+",
		"../../utils/iframe": "lHOv",
		"../../utils/url": "prkv",
		"events": "6GPx",
		"../../utils/random": "kvjH"
	}],
	"+TEV": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("./receiver/htmlfile"),
			i = require("./sender/xhr-local"),
			l = require("./lib/ajax-based");

		function n(e) {
			if(!r.enabled) throw new Error("Transport created when disabled");
			l.call(this, e, "/htmlfile", r, i)
		}
		e(n, l), n.enabled = function(e) {
			return r.enabled && e.sameOrigin
		}, n.transportName = "htmlfile", n.roundTrips = 2, module.exports = n;
	}, {
		"inherits": "oxw+",
		"./receiver/htmlfile": "4eIr",
		"./sender/xhr-local": "9mX/",
		"./lib/ajax-based": "h4sR"
	}],
	"G9AK": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			r = require("./lib/ajax-based"),
			n = require("./receiver/xhr"),
			i = require("./sender/xhr-cors"),
			a = require("./sender/xhr-local");

		function l(e) {
			if(!a.enabled && !i.enabled) throw new Error("Transport created when disabled");
			r.call(this, e, "/xhr", n, i)
		}
		e(l, r), l.enabled = function(e) {
			return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || i.enabled)
		}, l.transportName = "xhr-polling", l.roundTrips = 2, module.exports = l;
	}, {
		"inherits": "oxw+",
		"./lib/ajax-based": "h4sR",
		"./receiver/xhr": "kyBw",
		"./sender/xhr-cors": "TBnt",
		"./sender/xhr-local": "9mX/"
	}],
	"GwrO": [function(require, module, exports) {
		"use strict";
		var r = require("inherits"),
			e = require("./lib/ajax-based"),
			i = require("./xdr-streaming"),
			a = require("./receiver/xhr"),
			n = require("./sender/xdr");

		function d(r) {
			if(!n.enabled) throw new Error("Transport created when disabled");
			e.call(this, r, "/xhr", a, n)
		}
		r(d, e), d.enabled = i.enabled, d.transportName = "xdr-polling", d.roundTrips = 2, module.exports = d;
	}, {
		"inherits": "oxw+",
		"./lib/ajax-based": "h4sR",
		"./xdr-streaming": "UfBN",
		"./receiver/xhr": "kyBw",
		"./sender/xdr": "VmyL"
	}],
	"nruP": [function(require, module, exports) {
		var global = arguments[3];
		var t = arguments[3],
			e = require("../../utils/iframe"),
			r = require("../../utils/random"),
			i = require("../../utils/browser"),
			o = require("../../utils/url"),
			a = require("inherits"),
			s = require("events").EventEmitter,
			n = function() {};

		function c(i) {
			n(i);
			var a = this;
			s.call(this), e.polluteGlobalNamespace(), this.id = "a" + r.string(6);
			var l = o.addQuery(i, "c=" + encodeURIComponent(e.WPrefix + "." + this.id));
			t[e.WPrefix][this.id] = this._callback.bind(this), this._createScript(l), this.timeoutId = setTimeout(function() {
				n("timeout"), a._abort(new Error("JSONP script loaded abnormally (timeout)"))
			}, c.timeout)
		}
		a(c, s), c.prototype.abort = function() {
			if(n("abort"), t[e.WPrefix][this.id]) {
				var r = new Error("JSONP user aborted read");
				r.code = 1e3, this._abort(r)
			}
		}, c.timeout = 35e3, c.scriptErrorTimeout = 1e3, c.prototype._callback = function(t) {
			n("_callback", t), this._cleanup(), this.aborting || (t && (n("message", t), this.emit("message", t)), this.emit("close", null, "network"), this.removeAllListeners())
		}, c.prototype._abort = function(t) {
			n("_abort", t), this._cleanup(), this.aborting = !0, this.emit("close", t.code, t.message), this.removeAllListeners()
		}, c.prototype._cleanup = function() {
			if(n("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
				var r = this.script;
				r.parentNode.removeChild(r), r.onreadystatechange = r.onerror = r.onload = r.onclick = null, this.script = null
			}
			delete t[e.WPrefix][this.id]
		}, c.prototype._scriptError = function() {
			n("_scriptError");
			var t = this;
			this.errorTimer || (this.errorTimer = setTimeout(function() {
				t.loadedOkay || t._abort(new Error("JSONP script loaded abnormally (onerror)"))
			}, c.scriptErrorTimeout))
		}, c.prototype._createScript = function(e) {
			n("_createScript", e);
			var o, a = this,
				s = this.script = t.document.createElement("script");
			if(s.id = "a" + r.string(8), s.src = e, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = this._scriptError.bind(this), s.onload = function() {
					n("onload"), a._abort(new Error("JSONP script loaded abnormally (onload)"))
				}, s.onreadystatechange = function() {
					if(n("onreadystatechange", s.readyState), /loaded|closed/.test(s.readyState)) {
						if(s && s.htmlFor && s.onclick) {
							a.loadedOkay = !0;
							try {
								s.onclick()
							} catch(t) {}
						}
						s && a._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
					}
				}, void 0 === s.async && t.document.attachEvent)
				if(i.isOpera())(o = this.script2 = t.document.createElement("script")).text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = o.async = !1;
				else {
					try {
						s.htmlFor = s.id, s.event = "onclick"
					} catch(l) {}
					s.async = !0
				}
			void 0 !== s.async && (s.async = !0);
			var c = t.document.getElementsByTagName("head")[0];
			c.insertBefore(s, c.firstChild), o && c.insertBefore(o, c.firstChild)
		}, module.exports = c;
	}, {
		"../../utils/iframe": "lHOv",
		"../../utils/random": "kvjH",
		"../../utils/browser": "+JeF",
		"../../utils/url": "prkv",
		"inherits": "oxw+",
		"events": "6GPx"
	}],
	"76uW": [function(require, module, exports) {
		var global = arguments[3];
		var e, n, t = arguments[3],
			r = require("../../utils/random"),
			a = require("../../utils/url"),
			o = function() {};

		function d(e) {
			o("createIframe", e);
			try {
				return t.document.createElement('<iframe name="' + e + '">')
			} catch(r) {
				var n = t.document.createElement("iframe");
				return n.name = e, n
			}
		}

		function c() {
			o("createForm"), (e = t.document.createElement("form")).style.display = "none", e.style.position = "absolute", e.method = "POST", e.enctype = "application/x-www-form-urlencoded", e.acceptCharset = "UTF-8", (n = t.document.createElement("textarea")).name = "d", e.appendChild(n), t.document.body.appendChild(e)
		}
		module.exports = function(t, u, i) {
			o(t, u), e || c();
			var l = "a" + r.string(8);
			e.target = l, e.action = a.addQuery(a.addPath(t, "/jsonp_send"), "i=" + l);
			var m = d(l);
			m.id = l, m.style.display = "none", e.appendChild(m);
			try {
				n.value = u
			} catch(p) {}
			e.submit();
			var s = function(e) {
				o("completed", l, e), m.onerror && (m.onreadystatechange = m.onerror = m.onload = null, setTimeout(function() {
					o("cleaning up", l), m.parentNode.removeChild(m), m = null
				}, 500), n.value = "", i(e))
			};
			return m.onerror = function() {
					o("onerror", l), s()
				}, m.onload = function() {
					o("onload", l), s()
				}, m.onreadystatechange = function(e) {
					o("onreadystatechange", l, m.readyState, e), "complete" === m.readyState && s()
				},
				function() {
					o("aborted", l), s(new Error("Aborted"))
				}
		};
	}, {
		"../../utils/random": "kvjH",
		"../../utils/url": "prkv"
	}],
	"hI9h": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			r = require("inherits"),
			n = require("./lib/sender-receiver"),
			i = require("./receiver/jsonp"),
			o = require("./sender/jsonp");

		function s(e) {
			if(!s.enabled()) throw new Error("Transport created when disabled");
			n.call(this, e, "/jsonp", o, i)
		}
		r(s, n), s.enabled = function() {
			return !!e.document
		}, s.transportName = "jsonp-polling", s.roundTrips = 1, s.needBody = !0, module.exports = s;
	}, {
		"inherits": "oxw+",
		"./lib/sender-receiver": "sju2",
		"./receiver/jsonp": "nruP",
		"./sender/jsonp": "76uW"
	}],
	"jVqY": [function(require, module, exports) {
		"use strict";
		module.exports = [require("./transport/websocket"), require("./transport/xhr-streaming"), require("./transport/xdr-streaming"), require("./transport/eventsource"), require("./transport/lib/iframe-wrap")(require("./transport/eventsource")), require("./transport/htmlfile"), require("./transport/lib/iframe-wrap")(require("./transport/htmlfile")), require("./transport/xhr-polling"), require("./transport/xdr-polling"), require("./transport/lib/iframe-wrap")(require("./transport/xhr-polling")), require("./transport/jsonp-polling")];
	}, {
		"./transport/websocket": "c80l",
		"./transport/xhr-streaming": "a/LL",
		"./transport/xdr-streaming": "UfBN",
		"./transport/eventsource": "DuLI",
		"./transport/lib/iframe-wrap": "XHhf",
		"./transport/htmlfile": "+TEV",
		"./transport/xhr-polling": "G9AK",
		"./transport/xdr-polling": "GwrO",
		"./transport/jsonp-polling": "hI9h"
	}],
	"+ldi": [function(require, module, exports) {
		"use strict";
		var t, n = Array.prototype,
			e = Object.prototype,
			r = Function.prototype,
			i = String.prototype,
			o = n.slice,
			l = e.toString,
			c = function(t) {
				return "[object Function]" === e.toString.call(t)
			},
			a = function(t) {
				return "[object Array]" === l.call(t)
			},
			u = function(t) {
				return "[object String]" === l.call(t)
			},
			s = Object.defineProperty && function() {
				try {
					return Object.defineProperty({}, "x", {}), !0
				} catch(t) {
					return !1
				}
			}();
		t = s ? function(t, n, e, r) {
			!r && n in t || Object.defineProperty(t, n, {
				configurable: !0,
				enumerable: !1,
				writable: !0,
				value: e
			})
		} : function(t, n, e, r) {
			!r && n in t || (t[n] = e)
		};
		var p = function(n, r, i) {
				for(var o in r) e.hasOwnProperty.call(r, o) && t(n, o, r[o], i)
			},
			h = function(t) {
				if(null == t) throw new TypeError("can't convert " + t + " to object");
				return Object(t)
			};

		function f(t) {
			var n = +t;
			return n != n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n))), n
		}

		function g(t) {
			return t >>> 0
		}

		function y() {}
		p(r, {
			bind: function(t) {
				var n = this;
				if(!c(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
				for(var e = o.call(arguments, 1), r = Math.max(0, n.length - e.length), i = [], l = 0; l < r; l++) i.push("$" + l);
				var a = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this, arguments); }")(function() {
					if(this instanceof a) {
						var r = n.apply(this, e.concat(o.call(arguments)));
						return Object(r) === r ? r : this
					}
					return n.apply(t, e.concat(o.call(arguments)))
				});
				return n.prototype && (y.prototype = n.prototype, a.prototype = new y, y.prototype = null), a
			}
		}), p(Array, {
			isArray: a
		});
		var b = Object("a"),
			v = "a" !== b[0] || !(0 in b),
			d = function(t) {
				var n = !0,
					e = !0;
				return t && (t.call("foo", function(t, e, r) {
					"object" != typeof r && (n = !1)
				}), t.call([1], function() {
					e = "string" == typeof this
				}, "x")), !!t && n && e
			};
		p(n, {
			forEach: function(t) {
				var n = h(this),
					e = v && u(this) ? this.split("") : n,
					r = arguments[1],
					i = -1,
					o = e.length >>> 0;
				if(!c(t)) throw new TypeError;
				for(; ++i < o;) i in e && t.call(r, e[i], i, n)
			}
		}, !d(n.forEach));
		var x = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
		p(n, {
			indexOf: function(t) {
				var n = v && u(this) ? this.split("") : h(this),
					e = n.length >>> 0;
				if(!e) return -1;
				var r = 0;
				for(arguments.length > 1 && (r = f(arguments[1])), r = r >= 0 ? r : Math.max(0, e + r); r < e; r++)
					if(r in n && n[r] === t) return r;
				return -1
			}
		}, x);
		var j = i.split;
		2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
			var t = void 0 === /()??/.exec("")[1];
			i.split = function(e, r) {
				var i = this;
				if(void 0 === e && 0 === r) return [];
				if("[object RegExp]" !== l.call(e)) return j.call(this, e, r);
				var o, c, a, u, s = [],
					p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
					h = 0;
				for(e = new RegExp(e.source, p + "g"), i += "", t || (o = new RegExp("^" + e.source + "$(?!\\s)", p)), r = void 0 === r ? -1 >>> 0 : g(r);
					(c = e.exec(i)) && !((a = c.index + c[0].length) > h && (s.push(i.slice(h, c.index)), !t && c.length > 1 && c[0].replace(o, function() {
						for(var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (c[t] = void 0)
					}), c.length > 1 && c.index < i.length && n.push.apply(s, c.slice(1)), u = c[0].length, h = a, s.length >= r));) e.lastIndex === c.index && e.lastIndex++;
				return h === i.length ? !u && e.test("") || s.push("") : s.push(i.slice(h)), s.length > r ? s.slice(0, r) : s
			}
		}() : "0".split(void 0, 0).length && (i.split = function(t, n) {
			return void 0 === t && 0 === n ? [] : j.call(this, t, n)
		});
		var w = i.substr,
			O = "".substr && "b" !== "0b".substr(-1);
		p(i, {
			substr: function(t, n) {
				return w.call(this, t < 0 && (t = this.length + t) < 0 ? 0 : t, n)
			}
		}, O);
	}, {}],
	"80l2": [function(require, module, exports) {
		"use strict";
		var u, f = require("json3"),
			a = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
			e = function(u) {
				var f, a = {},
					e = [];
				for(f = 0; f < 65536; f++) e.push(String.fromCharCode(f));
				return u.lastIndex = 0, e.join("").replace(u, function(u) {
					return a[u] = "\\u" + ("0000" + u.charCodeAt(0).toString(16)).slice(-4), ""
				}), u.lastIndex = 0, a
			};
		module.exports = {
			quote: function(d) {
				var b = f.stringify(d);
				return a.lastIndex = 0, a.test(b) ? (u || (u = e(a)), b.replace(a, function(f) {
					return u[f]
				})) : b
			}
		};
	}, {
		"json3": "r5wZ"
	}],
	"3t+s": [function(require, module, exports) {
		"use strict";
		var e = function() {};
		module.exports = function(t) {
			return {
				filterToEnabled: function(a, r) {
					var n = {
						main: [],
						facade: []
					};
					return a ? "string" == typeof a && (a = [a]) : a = [], t.forEach(function(t) {
						t && ("websocket" !== t.transportName || !1 !== r.websocket ? a.length && -1 === a.indexOf(t.transportName) ? e("not in whitelist", t.transportName) : t.enabled(r) ? (e("enabled", t.transportName), n.main.push(t), t.facadeTransport && n.facade.push(t.facadeTransport)) : e("disabled", t.transportName) : e("disabled from server", "websocket"))
					}), n
				}
			}
		};
	}, {}],
	"YVir": [function(require, module, exports) {
		var global = arguments[3];
		var o = arguments[3],
			n = {};
		["log", "debug", "warn"].forEach(function(c) {
			var l;
			try {
				l = o.console && o.console[c] && o.console[c].apply
			} catch(e) {}
			n[c] = l ? function() {
				return o.console[c].apply(o.console, arguments)
			} : "log" === c ? function() {} : n.log
		}), module.exports = n;
	}, {}],
	"Vudx": [function(require, module, exports) {
		"use strict";

		function t(t) {
			this.type = t
		}
		t.prototype.initEvent = function(t, e, i) {
			return this.type = t, this.bubbles = e, this.cancelable = i, this.timeStamp = +new Date, this
		}, t.prototype.stopPropagation = function() {}, t.prototype.preventDefault = function() {}, t.CAPTURING_PHASE = 1, t.AT_TARGET = 2, t.BUBBLING_PHASE = 3, module.exports = t;
	}, {}],
	"sN6f": [function(require, module, exports) {
		var global = arguments[3];
		var o = arguments[3];
		module.exports = o.location || {
			origin: "http://localhost:80",
			protocol: "http:",
			host: "localhost",
			port: 80,
			href: "http://localhost/",
			hash: ""
		};
	}, {}],
	"Ry1i": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			i = require("./event");

		function t() {
			i.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
		}
		e(t, i), module.exports = t;
	}, {
		"inherits": "oxw+",
		"./event": "Vudx"
	}],
	"/fK0": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			t = require("./event");

		function i(e) {
			t.call(this), this.initEvent("message", !1, !1), this.data = e
		}
		e(i, t), module.exports = i;
	}, {
		"inherits": "oxw+",
		"./event": "Vudx"
	}],
	"950Q": [function(require, module, exports) {
		"use strict";
		var t = require("events").EventEmitter,
			e = require("inherits");

		function i() {
			var e = this;
			t.call(this), this.to = setTimeout(function() {
				e.emit("finish", 200, "{}")
			}, i.timeout)
		}
		e(i, t), i.prototype.close = function() {
			clearTimeout(this.to)
		}, i.timeout = 2e3, module.exports = i;
	}, {
		"events": "6GPx",
		"inherits": "oxw+"
	}],
	"2IH9": [function(require, module, exports) {
		"use strict";
		var e = require("events").EventEmitter,
			t = require("inherits"),
			i = require("json3"),
			s = require("./utils/object"),
			r = function() {};

		function n(t, n) {
			e.call(this);
			var o = this,
				c = +new Date;
			this.xo = new n("GET", t), this.xo.once("finish", function(e, t) {
				var n, u;
				if(200 === e) {
					if(u = +new Date - c, t) try {
						n = i.parse(t)
					} catch(h) {
						r("bad json", t)
					}
					s.isObject(n) || (n = {})
				}
				o.emit("finish", n, u), o.removeAllListeners()
			})
		}
		t(n, e), n.prototype.close = function() {
			this.removeAllListeners(), this.xo.close()
		}, module.exports = n;
	}, {
		"events": "6GPx",
		"inherits": "oxw+",
		"json3": "r5wZ",
		"./utils/object": "ykCA"
	}],
	"bZ+U": [function(require, module, exports) {
		"use strict";
		var e = require("inherits"),
			i = require("events").EventEmitter,
			r = require("json3"),
			t = require("./transport/sender/xhr-local"),
			s = require("./info-ajax");

		function n(e) {
			var n = this;
			i.call(this), this.ir = new s(e, t), this.ir.once("finish", function(e, i) {
				n.ir = null, n.emit("message", r.stringify([e, i]))
			})
		}
		e(n, i), n.transportName = "iframe-info-receiver", n.prototype.close = function() {
			this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
		}, module.exports = n;
	}, {
		"inherits": "oxw+",
		"events": "6GPx",
		"json3": "r5wZ",
		"./transport/sender/xhr-local": "9mX/",
		"./info-ajax": "2IH9"
	}],
	"/v8/": [function(require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
			i = require("events").EventEmitter,
			r = require("inherits"),
			t = require("json3"),
			n = require("./utils/event"),
			o = require("./transport/iframe"),
			s = require("./info-iframe-receiver"),
			a = function() {};

		function c(r, c) {
			var u = this;
			i.call(this);
			var f = function() {
				var e = u.ifr = new o(s.transportName, c, r);
				e.once("message", function(e) {
					if(e) {
						var i;
						try {
							i = t.parse(e)
						} catch(o) {
							return a("bad json", e), u.emit("finish"), void u.close()
						}
						var r = i[0],
							n = i[1];
						u.emit("finish", r, n)
					}
					u.close()
				}), e.once("close", function() {
					u.emit("finish"), u.close()
				})
			};
			e.document.body ? f() : n.attachEvent("load", f)
		}
		r(c, i), c.enabled = function() {
			return o.enabled()
		}, c.prototype.close = function() {
			this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
		}, module.exports = c;
	}, {
		"events": "6GPx",
		"inherits": "oxw+",
		"json3": "r5wZ",
		"./utils/event": "q8Q2",
		"./transport/iframe": "B5iP",
		"./info-iframe-receiver": "bZ+U"
	}],
	"cXIc": [function(require, module, exports) {
		"use strict";
		var e = require("events").EventEmitter,
			t = require("inherits"),
			i = require("./utils/url"),
			r = require("./transport/sender/xdr"),
			n = require("./transport/sender/xhr-cors"),
			o = require("./transport/sender/xhr-local"),
			s = require("./transport/sender/xhr-fake"),
			u = require("./info-iframe"),
			a = require("./info-ajax"),
			c = function() {};

		function h(t, i) {
			c(t);
			var r = this;
			e.call(this), setTimeout(function() {
				r.doXhr(t, i)
			}, 0)
		}
		t(h, e), h._getReceiver = function(e, t, i) {
			return i.sameOrigin ? new a(t, o) : n.enabled ? new a(t, n) : r.enabled && i.sameScheme ? new a(t, r) : u.enabled() ? new u(e, t) : new a(t, s)
		}, h.prototype.doXhr = function(e, t) {
			var r = this,
				n = i.addPath(e, "/info");
			c("doXhr", n), this.xo = h._getReceiver(e, n, t), this.timeoutRef = setTimeout(function() {
				c("timeout"), r._cleanup(!1), r.emit("finish")
			}, h.timeout), this.xo.once("finish", function(e, t) {
				c("finish", e, t), r._cleanup(!0), r.emit("finish", e, t)
			})
		}, h.prototype._cleanup = function(e) {
			c("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
		}, h.prototype.close = function() {
			c("close"), this.removeAllListeners(), this._cleanup(!1)
		}, h.timeout = 8e3, module.exports = h;
	}, {
		"events": "6GPx",
		"inherits": "oxw+",
		"./utils/url": "prkv",
		"./transport/sender/xdr": "VmyL",
		"./transport/sender/xhr-cors": "TBnt",
		"./transport/sender/xhr-local": "9mX/",
		"./transport/sender/xhr-fake": "950Q",
		"./info-iframe": "/v8/",
		"./info-ajax": "2IH9"
	}],
	"kS45": [function(require, module, exports) {
		"use strict";
		var t = require("json3"),
			s = require("./utils/iframe");

		function o(t) {
			this._transport = t, t.on("message", this._transportMessage.bind(this)), t.on("close", this._transportClose.bind(this))
		}
		o.prototype._transportClose = function(o, e) {
			s.postMessage("c", t.stringify([o, e]))
		}, o.prototype._transportMessage = function(t) {
			s.postMessage("t", t)
		}, o.prototype._send = function(t) {
			this._transport.send(t)
		}, o.prototype._close = function() {
			this._transport.close(), this._transport.removeAllListeners()
		}, module.exports = o;
	}, {
		"json3": "r5wZ",
		"./utils/iframe": "lHOv"
	}],
	"v+99": [function(require, module, exports) {
		"use strict";
		var r = require("./utils/url"),
			e = require("./utils/event"),
			a = require("json3"),
			i = require("./facade"),
			t = require("./info-iframe-receiver"),
			n = require("./utils/iframe"),
			o = require("./location"),
			s = function() {};
		module.exports = function(c, f) {
			var u, d = {};
			f.forEach(function(r) {
				r.facadeTransport && (d[r.facadeTransport.transportName] = r.facadeTransport)
			}), d[t.transportName] = t, c.bootstrap_iframe = function() {
				var t;
				n.currentWindowId = o.hash.slice(1);
				e.attachEvent("message", function(e) {
					if(e.source === parent && (void 0 === u && (u = e.origin), e.origin === u)) {
						var f;
						try {
							f = a.parse(e.data)
						} catch(w) {
							return void s("bad json", e.data)
						}
						if(f.windowId === n.currentWindowId) switch(f.type) {
							case "s":
								var h;
								try {
									h = a.parse(f.data)
								} catch(w) {
									s("bad json", f.data);
									break
								}
								var l = h[0],
									m = h[1],
									p = h[2],
									v = h[3];
								if(s(l, m, p, v), l !== c.version) throw new Error('Incompatible SockJS! Main site uses: "' + l + '", the iframe: "' + c.version + '".');
								if(!r.isOriginEqual(p, o.href) || !r.isOriginEqual(v, o.href)) throw new Error("Can't connect to different domain from within an iframe. (" + o.href + ", " + p + ", " + v + ")");
								t = new i(new d[m](p, v));
								break;
							case "m":
								t._send(f.data);
								break;
							case "c":
								t && t._close(), t = null
						}
					}
				}), n.postMessage("s")
			}
		};
	}, {
		"./utils/url": "prkv",
		"./utils/event": "q8Q2",
		"json3": "r5wZ",
		"./facade": "kS45",
		"./info-iframe-receiver": "bZ+U",
		"./utils/iframe": "lHOv",
		"./location": "sN6f"
	}],
	"FIM5": [function(require, module, exports) {
		var global = arguments[3];
		var t = arguments[3];
		require("./shims");
		var r, e = require("url-parse"),
			s = require("inherits"),
			i = require("json3"),
			o = require("./utils/random"),
			n = require("./utils/escape"),
			a = require("./utils/url"),
			h = require("./utils/event"),
			l = require("./utils/transport"),
			p = require("./utils/object"),
			c = require("./utils/browser"),
			u = require("./utils/log"),
			d = require("./event/event"),
			_ = require("./event/eventtarget"),
			f = require("./location"),
			m = require("./event/close"),
			y = require("./event/trans-message"),
			v = require("./info-receiver"),
			S = function() {};

		function w(t, r, s) {
			if(!(this instanceof w)) return new w(t, r, s);
			if(arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
			_.call(this), this.readyState = w.CONNECTING, this.extensions = "", this.protocol = "", (s = s || {}).protocols_whitelist && u.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = s.transports, this._transportOptions = s.transportOptions || {};
			var i = s.sessionId || 8;
			if("function" == typeof i) this._generateSessionId = i;
			else {
				if("number" != typeof i) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
				this._generateSessionId = function() {
					return o.string(i)
				}
			}
			this._server = s.server || o.numberString(1e3);
			var n = new e(t);
			if(!n.host || !n.protocol) throw new SyntaxError("The URL '" + t + "' is invalid");
			if(n.hash) throw new SyntaxError("The URL must not contain a fragment");
			if("http:" !== n.protocol && "https:" !== n.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + n.protocol + "' is not allowed.");
			var h = "https:" === n.protocol;
			if("https:" === f.protocol && !h) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
			r ? Array.isArray(r) || (r = [r]) : r = [];
			var l = r.sort();
			l.forEach(function(t, r) {
				if(!t) throw new SyntaxError("The protocols entry '" + t + "' is invalid.");
				if(r < l.length - 1 && t === l[r + 1]) throw new SyntaxError("The protocols entry '" + t + "' is duplicated.")
			});
			var p = a.getOrigin(f.href);
			this._origin = p ? p.toLowerCase() : null, n.set("pathname", n.pathname.replace(/\/+$/, "")), this.url = n.href, S("using url", this.url), this._urlInfo = {
				nullOrigin: !c.hasDomain(),
				sameOrigin: a.isOriginEqual(this.url, f.href),
				sameScheme: a.isSchemeEqual(this.url, f.href)
			}, this._ir = new v(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
		}

		function E(t) {
			return 1e3 === t || t >= 3e3 && t <= 4999
		}
		s(w, _), w.prototype.close = function(t, r) {
			if(t && !E(t)) throw new Error("InvalidAccessError: Invalid code");
			if(r && r.length > 123) throw new SyntaxError("reason argument has an invalid length");
			if(this.readyState !== w.CLOSING && this.readyState !== w.CLOSED) {
				this._close(t || 1e3, r || "Normal closure", !0)
			}
		}, w.prototype.send = function(t) {
			if("string" != typeof t && (t = "" + t), this.readyState === w.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
			this.readyState === w.OPEN && this._transport.send(n.quote(t))
		}, w.version = require("./version"), w.CONNECTING = 0, w.OPEN = 1, w.CLOSING = 2, w.CLOSED = 3, w.prototype._receiveInfo = function(t, e) {
			if(S("_receiveInfo", e), this._ir = null, t) {
				this._rto = this.countRTO(e), this._transUrl = t.base_url ? t.base_url : this.url, t = p.extend(t, this._urlInfo), S("info", t);
				var s = r.filterToEnabled(this._transportsWhitelist, t);
				this._transports = s.main, S(this._transports.length + " enabled transports"), this._connect()
			} else this._close(1002, "Cannot connect to server")
		}, w.prototype._connect = function() {
			for(var r = this._transports.shift(); r; r = this._transports.shift()) {
				if(S("attempt", r.transportName), r.needBody && (!t.document.body || void 0 !== t.document.readyState && "complete" !== t.document.readyState && "interactive" !== t.document.readyState)) return S("waiting for body"), this._transports.unshift(r), void h.attachEvent("load", this._connect.bind(this));
				var e = this._rto * r.roundTrips || 5e3;
				this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), e), S("using timeout", e);
				var s = a.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
					i = this._transportOptions[r.transportName];
				S("transport url", s);
				var o = new r(s, this._transUrl, i);
				return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = r.transportName, void(this._transport = o)
			}
			this._close(2e3, "All transports failed", !1)
		}, w.prototype._transportTimeout = function() {
			S("_transportTimeout"), this.readyState === w.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
		}, w.prototype._transportMessage = function(t) {
			S("_transportMessage", t);
			var r, e = this,
				s = t.slice(0, 1),
				o = t.slice(1);
			switch(s) {
				case "o":
					return void this._open();
				case "h":
					return this.dispatchEvent(new d("heartbeat")), void S("heartbeat", this.transport)
			}
			if(o) try {
				r = i.parse(o)
			} catch(n) {
				S("bad json", o)
			}
			if(void 0 !== r) switch(s) {
				case "a":
					Array.isArray(r) && r.forEach(function(t) {
						S("message", e.transport, t), e.dispatchEvent(new y(t))
					});
					break;
				case "m":
					S("message", this.transport, r), this.dispatchEvent(new y(r));
					break;
				case "c":
					Array.isArray(r) && 2 === r.length && this._close(r[0], r[1], !0)
			} else S("empty payload", o)
		}, w.prototype._transportClose = function(t, r) {
			S("_transportClose", this.transport, t, r), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), E(t) || 2e3 === t || this.readyState !== w.CONNECTING ? this._close(t, r) : this._connect()
		}, w.prototype._open = function() {
			S("_open", this._transport.transportName, this.readyState), this.readyState === w.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = w.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new d("open")), S("connected", this.transport)) : this._close(1006, "Server lost session")
		}, w.prototype._close = function(t, r, e) {
			S("_close", this.transport, t, r, e, this.readyState);
			var s = !1;
			if(this._ir && (s = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === w.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
			this.readyState = w.CLOSING, setTimeout(function() {
				this.readyState = w.CLOSED, s && this.dispatchEvent(new d("error"));
				var i = new m("close");
				i.wasClean = e || !1, i.code = t || 1e3, i.reason = r, this.dispatchEvent(i), this.onmessage = this.onclose = this.onerror = null, S("disconnected")
			}.bind(this), 0)
		}, w.prototype.countRTO = function(t) {
			return t > 100 ? 4 * t : 300 + t
		}, module.exports = function(t) {
			return r = l(t), require("./iframe-bootstrap")(w, t), w
		};
	}, {
		"./shims": "+ldi",
		"url-parse": "WxRL",
		"inherits": "oxw+",
		"json3": "r5wZ",
		"./utils/random": "kvjH",
		"./utils/escape": "80l2",
		"./utils/url": "prkv",
		"./utils/event": "q8Q2",
		"./utils/transport": "3t+s",
		"./utils/object": "ykCA",
		"./utils/browser": "+JeF",
		"./utils/log": "YVir",
		"./event/event": "Vudx",
		"./event/eventtarget": "PUqX",
		"./location": "sN6f",
		"./event/close": "Ry1i",
		"./event/trans-message": "/fK0",
		"./info-receiver": "cXIc",
		"./version": "A8Oj",
		"./iframe-bootstrap": "v+99"
	}],
	"EWtC": [function(require, module, exports) {
		var global = arguments[3];
		var o = arguments[3],
			e = require("./transport-list");
		module.exports = require("./main")(e), "_sockjs_onload" in o && setTimeout(o._sockjs_onload, 1);
	}, {
		"./transport-list": "jVqY",
		"./main": "FIM5"
	}],
	"wTgU": [function(require, module, exports) {
		! function() {
			var e = "object" == typeof exports && null !== exports && "number" != typeof exports.nodeType ? exports : "undefined" != typeof self ? self : $.global,
				t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

			function r(e) {
				this.message = e
			}
			r.prototype = new Error, r.prototype.name = "InvalidCharacterError", e.btoa || (e.btoa = function(e) {
				for(var o, n, a = String(e), i = 0, c = t, f = ""; a.charAt(0 | i) || (c = "=", i % 1); f += c.charAt(63 & o >> 8 - i % 1 * 8)) {
					if((n = a.charCodeAt(i += .75)) > 255) throw new r("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
					o = o << 8 | n
				}
				return f
			}), e.atob || (e.atob = function(e) {
				var o = String(e).replace(/[=]+$/, "");
				if(o.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
				for(var n, a, i = 0, c = 0, f = ""; a = o.charAt(c++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? f += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) a = t.indexOf(a);
				return f
			})
		}();
	}, {}],
	"KLYY": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var E = function() {
				return {
					WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR: 0,
					WEBIM_CONNCTION_OPEN_ERROR: 1,
					WEBIM_CONNCTION_AUTH_ERROR: 2,
					WEBIM_CONNCTION_OPEN_USERGRID_ERROR: 3,
					WEBIM_CONNCTION_ATTACH_ERROR: 4,
					WEBIM_CONNCTION_ATTACH_USERGRID_ERROR: 5,
					WEBIM_CONNCTION_REOPEN_ERROR: 6,
					WEBIM_CONNCTION_SERVER_CLOSE_ERROR: 7,
					WEBIM_CONNCTION_SERVER_ERROR: 8,
					WEBIM_CONNCTION_IQ_ERROR: 9,
					WEBIM_CONNCTION_USER_REMOVED: 207,
					WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE: 206,
					WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD: 216,
					WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE: 217,
					WEBIM_CONNCTION_PING_ERROR: 10,
					WEBIM_CONNCTION_NOTIFYVERSION_ERROR: 11,
					WEBIM_CONNCTION_GETROSTER_ERROR: 12,
					WEBIM_CONNCTION_CROSSDOMAIN_ERROR: 13,
					WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES: 14,
					WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR: 15,
					WEBIM_CONNCTION_DISCONNECTED: 16,
					WEBIM_CONNCTION_AJAX_ERROR: 17,
					WEBIM_CONNCTION_JOINROOM_ERROR: 18,
					WEBIM_CONNCTION_GETROOM_ERROR: 19,
					WEBIM_CONNCTION_GETROOMINFO_ERROR: 20,
					WEBIM_CONNCTION_GETROOMMEMBER_ERROR: 21,
					WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR: 22,
					WEBIM_CONNCTION_LOAD_CHATROOM_ERROR: 23,
					WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR: 24,
					WEBIM_CONNCTION_JOINCHATROOM_ERROR: 25,
					WEBIM_CONNCTION_QUITCHATROOM_ERROR: 26,
					WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR: 27,
					WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR: 28,
					WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR: 29,
					WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR: 30,
					WEBIM_CONNCTION_CALLBACK_INNER_ERROR: 31,
					WEBIM_CONNCTION_CLIENT_OFFLINE: 32,
					WEBIM_CONNCTION_CLIENT_LOGOUT: 33,
					WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR: 34,
					WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP: 35,
					WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP: 36,
					WEBIM_CONNECTION_ACCEPT_JOIN_GROUP: 37,
					WEBIM_CONNECTION_DECLINE_JOIN_GROUP: 38,
					WEBIM_CONNECTION_CLOSED: 39,
					WEBIM_UPLOADFILE_BROWSER_ERROR: 100,
					WEBIM_UPLOADFILE_ERROR: 101,
					WEBIM_UPLOADFILE_NO_LOGIN: 102,
					WEBIM_UPLOADFILE_NO_FILE: 103,
					WEBIM_DOWNLOADFILE_ERROR: 200,
					WEBIM_DOWNLOADFILE_NO_LOGIN: 201,
					WEBIM_DOWNLOADFILE_BROWSER_ERROR: 202,
					WEBIM_MESSAGE_REC_TEXT: 300,
					WEBIM_MESSAGE_REC_TEXT_ERROR: 301,
					WEBIM_MESSAGE_REC_EMOTION: 302,
					WEBIM_MESSAGE_REC_PHOTO: 303,
					WEBIM_MESSAGE_REC_AUDIO: 304,
					WEBIM_MESSAGE_REC_AUDIO_FILE: 305,
					WEBIM_MESSAGE_REC_VEDIO: 306,
					WEBIM_MESSAGE_REC_VEDIO_FILE: 307,
					WEBIM_MESSAGE_REC_FILE: 308,
					WEBIM_MESSAGE_SED_TEXT: 309,
					WEBIM_MESSAGE_SED_EMOTION: 310,
					WEBIM_MESSAGE_SED_PHOTO: 311,
					WEBIM_MESSAGE_SED_AUDIO: 312,
					WEBIM_MESSAGE_SED_AUDIO_FILE: 313,
					WEBIM_MESSAGE_SED_VEDIO: 314,
					WEBIM_MESSAGE_SED_VEDIO_FILE: 315,
					WEBIM_MESSAGE_SED_FILE: 316,
					WEBIM_MESSAGE_SED_ERROR: 317,
					STATUS_INIT: 400,
					STATUS_DOLOGIN_USERGRID: 401,
					STATUS_DOLOGIN_IM: 402,
					STATUS_OPENED: 403,
					STATUS_CLOSING: 404,
					STATUS_CLOSED: 405,
					STATUS_ERROR: 406
				}
			},
			_ = E;
		exports.default = _;
	}, {}],
	"K0yk": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = t(require("./status"));

		function t(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function r(e) {
			return(r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		var n = function() {},
			o = (0, e.default)(),
			a = 10485760,
			i = function() {
				try {
					return new window.XMLHttpRequest
				} catch(e) {
					return !1
				}
			},
			s = function() {
				try {
					return new window.ActiveXObject("Microsoft.XMLHTTP")
				} catch(e) {
					return !1
				}
			},
			l = function(e) {
				e = e || !0;
				var t = i() || s();
				if("withCredentials" in t) return t;
				if(!e) return t;
				if(void 0 === window.XDomainRequest) return t;
				var r = new XDomainRequest;
				return r.readyState = 0, r.status = 100, r.onreadystatechange = n, r.onload = function() {
					r.readyState = 4, r.status = 200;
					var e = new ActiveXObject("Microsoft.XMLDOM");
					e.async = "false", e.loadXML(r.responseText), r.responseXML = e, r.response = r.responseText, r.onreadystatechange()
				}, r.ontimeout = r.onerror = function() {
					r.readyState = 4, r.status = 500, r.onreadystatechange()
				}, r
			},
			d = function() {
				if("ActiveXObject" in window) try {
					return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
				} catch(e) {
					return 0
				} else if(navigator.plugins && navigator.plugins.length > 0) return navigator.plugins["Shockwave Flash"];
				return 0
			}(),
			p = l(),
			u = "undefined" != typeof FormData,
			c = "undefined" != typeof Blob,
			f = p.setRequestHeader || !1,
			y = p.overrideMimeType || !1,
			v = f && u,
			O = v || d,
			h = f && (c || y);
		Object.keys || (Object.keys = function() {
			var e = Object.prototype.hasOwnProperty,
				t = !{
					toString: null
				}.propertyIsEnumerable("toString"),
				n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				o = n.length;
			return function(a) {
				if("object" !== r(a) && ("function" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
				var i, s, l = [];
				for(i in a) e.call(a, i) && l.push(i);
				if(t)
					for(s = 0; s < o; s++) e.call(a, n[s]) && l.push(n[s]);
				return l
			}
		}());
		var m = {
				hasFormData: u,
				hasBlob: c,
				emptyfn: n,
				isCanSetRequestHeader: f,
				hasOverrideMimeType: y,
				isCanUploadFileAsync: v,
				isCanUploadFile: O,
				isCanDownLoadFile: h,
				isSupportWss: function() {
					var e = [/MQQBrowser[\/]5([.]\d+)?\sTBS/];
					if(!window.WebSocket) return !1;
					for(var t = window.navigator.userAgent, r = 0, n = e.length; r < n; r++)
						if(e[r].test(t)) return !1;
					return !0
				}(),
				getIEVersion: function() {
					var e, t = navigator.userAgent;
					return(e = t.match(/MSIE (\d+)/i)) && e[1] ? +e[1] : (e = t.match(/Trident\/(\d+)/i)) && e[1] && {
						4: 8,
						5: 9,
						6: 10,
						7: 11
					}[e[1]] || null
				}(),
				stringify: function(e) {
					if("undefined" != typeof JSON && JSON.stringify) return JSON.stringify(e);
					var t = "",
						n = [];
					return function e(o) {
						var a = !1;
						for(var i in "[object Array]" === Object.prototype.toString.call(o) ? (n.push("]", "["), a = !0) : "[object Object]" === Object.prototype.toString.call(o) && n.push("}", "{"), o) "[object Null]" === Object.prototype.toString.call(o[i]) ? o[i] = "null" : "[object Undefined]" === Object.prototype.toString.call(o[i]) && (o[i] = "undefined"), o[i] && "object" === r(o[i]) ? t += "," + (a ? "" : '"' + i + '":' + (a ? '"' : "")) + e(o[i]) : t += ',"' + (a ? "" : i + '":"') + o[i] + '"';
						return "" != t && (t = t.slice(1)), n.pop() + t + n.pop()
					}(e)
				},
				login: function(e) {
					var t = (e = e || {}).success || n,
						r = e.error || n,
						a = (e.appKey || "").split("#");
					if(2 !== a.length) return r({
						type: o.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
					}), !1;
					var i = a[0],
						s = a[1],
						l = l || e.https,
						d = e.user || "",
						p = e.pwd || "",
						u = e.apiUrl,
						c = {
							grant_type: "password",
							username: d,
							password: p,
							timestamp: +new Date
						};
					e = {
						url: u + "/" + i + "/" + s + "/token",
						dataType: "json",
						data: m.stringify(c),
						success: t,
						error: r
					};
					return m.ajax(e)
				},
				getFileUrl: function(e) {
					var t = {
							url: "",
							filename: "",
							filetype: "",
							data: ""
						},
						r = "string" == typeof e ? document.getElementById(e) : e;
					if(!m.isCanUploadFileAsync || !r) return t;
					try {
						if(window.URL.createObjectURL) {
							var n = r.files;
							if(n.length > 0) {
								var o = n.item(0);
								t.data = o, t.url = window.URL.createObjectURL(o), t.filename = o.name || ""
							}
						} else {
							o = document.getElementById(e).value;
							t.url = o;
							var a = o.lastIndexOf("/"),
								i = o.lastIndexOf("\\"),
								s = Math.max(a, i);
							t.filename = s < 0 ? o : o.substring(s + 1)
						}
						var l = t.filename.lastIndexOf(".");
						return -1 != l && (t.filetype = t.filename.substring(l + 1).toLowerCase()), t
					} catch(d) {
						throw d
					}
				},
				getFileSize: function(e) {
					var t = this.getFileLength(e);
					if(t > 1e7) return !1;
					var r = Math.round(t / 1e3);
					if(r < 1e3) t = r + " KB";
					else if(r >= 1e3) {
						var n = r / 1e3;
						if(n < 1e3) t = n.toFixed(1) + " MB";
						else t = (n / 1e3).toFixed(1) + " GB"
					}
					return t
				},
				getFileLength: function(e) {
					var t = 0;
					if(e)
						if(e.files) e.files.length > 0 && (t = e.files[0].size);
						else if(e.select && "ActiveXObject" in window) {
						e.select(), t = (e = new ActiveXObject("Scripting.FileSystemObject").GetFile(e.value)).Size
					}
					return t
				},
				hasFlash: d,
				trim: function(e) {
					return(e = "string" == typeof e ? e : "").trim ? e.trim() : e.replace(/^\s|\s$/g, "")
				},
				parseEmoji: function(e) {
					if(void 0 === WebIM.Emoji || void 0 === WebIM.Emoji.map) return e;
					var t = WebIM.Emoji;
					for(var r in t.map)
						if(t.map.hasOwnProperty(r))
							for(; e.indexOf(r) > -1;) e = e.replace(r, '<img class="emoji" src="' + t.path + t.map[r] + '" />');
					return e
				},
				parseLink: function(e) {
					return e = e.replace(/(https?\:\/\/|www\.)([a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+)(\:[0-9]{2,4})?\/?((\.[:_0-9a-zA-Z-]+)|[:_0-9a-zA-Z-]*\/?)*\??[:_#@*&%0-9a-zA-Z-\/=]*/gm, function(e) {
						return "<a href='" + (/^https?/gm.test(e) ? e : "//" + e) + "' target='_blank'>" + e + "</a>"
					})
				},
				parseJSON: function(e) {
					if(window.JSON && window.JSON.parse) return window.JSON.parse(e + "");
					var t, r = null,
						n = m.trim(e + "");
					return n && !m.trim(n.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, function(e, n, o, a) {
						return t && n && (r = 0), 0 === r ? e : (t = o || n, r += !a - !o, "")
					})) ? Function("return " + n)() : Function("Invalid JSON: " + e)()
				},
				parseUploadResponse: function(e) {
					return e.indexOf("callback") > -1 ? e.slice(9, -1) : e
				},
				parseDownloadResponse: function(e) {
					return e && e.type && "application/json" === e.type || 0 > Object.prototype.toString.call(e).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e)
				},
				uploadFile: function(e) {
					(e = e || {}).onFileUploadProgress = e.onFileUploadProgress || n, e.onFileUploadComplete = e.onFileUploadComplete || n, e.onFileUploadError = e.onFileUploadError || n, e.onFileUploadCanceled = e.onFileUploadCanceled || n;
					var t = e.accessToken || this.context.accessToken;
					if(t) {
						var r, i, s, l = e.appKey || this.context.appKey || "";
						if(l && (r = (s = l.split("#"))[0], i = s[1]), r || i) {
							var d = e.apiUrl + "/" + r + "/" + i + "/chatfiles";
							if(m.isCanUploadFileAsync) {
								var p = e.file.data ? e.file.data.size : void 0;
								if(p > a) e.onFileUploadError({
									type: o.WEBIM_UPLOADFILE_ERROR,
									id: e.id
								});
								else if(p <= 0) e.onFileUploadError({
									type: o.WEBIM_UPLOADFILE_ERROR,
									id: e.id
								});
								else {
									var u = m.xmlrequest();
									u.upload && u.upload.addEventListener("progress", e.onFileUploadProgress, !1), u.addEventListener ? (u.addEventListener("abort", e.onFileUploadCanceled, !1), u.addEventListener("load", function(t) {
										try {
											var r = m.parseJSON(u.responseText);
											try {
												e.onFileUploadComplete(r)
											} catch(t) {
												e.onFileUploadError({
													type: o.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
													data: t
												})
											}
										} catch(t) {
											e.onFileUploadError({
												type: o.WEBIM_UPLOADFILE_ERROR,
												data: u.responseText,
												id: e.id,
												xhr: u
											})
										}
									}, !1), u.addEventListener("error", function(t) {
										e.onFileUploadError({
											type: o.WEBIM_UPLOADFILE_ERROR,
											id: e.id,
											xhr: u
										})
									}, !1)) : u.onreadystatechange && (u.onreadystatechange = function() {
										if(4 === u.readyState)
											if(200 === ajax.status) try {
												var t = m.parseJSON(u.responseText);
												e.onFileUploadComplete(t)
											} catch(r) {
												e.onFileUploadError({
													type: o.WEBIM_UPLOADFILE_ERROR,
													data: u.responseText,
													id: e.id,
													xhr: u
												})
											} else e.onFileUploadError({
												type: o.WEBIM_UPLOADFILE_ERROR,
												data: u.responseText,
												id: e.id,
												xhr: u
											});
											else u.abort(), e.onFileUploadCanceled()
									}), u.open("POST", d), u.setRequestHeader("restrict-access", "true"), u.setRequestHeader("Accept", "*/*"), u.setRequestHeader("Authorization", "Bearer " + t);
									var c = new FormData;
									c.append("file", e.file.data), window.XDomainRequest && (u.readyState = 2), u.send(c)
								}
							} else m.hasFlash && "function" == typeof e.flashUpload ? e.flashUpload && e.flashUpload(d, e) : e.onFileUploadError({
								type: o.WEBIM_UPLOADFILE_BROWSER_ERROR,
								id: e.id
							})
						} else e.onFileUploadError({
							type: o.WEBIM_UPLOADFILE_ERROR,
							id: e.id
						})
					} else e.onFileUploadError({
						type: o.WEBIM_UPLOADFILE_NO_LOGIN,
						id: e.id
					})
				},
				download: function(e) {
					e.onFileDownloadComplete = e.onFileDownloadComplete || n, e.onFileDownloadError = e.onFileDownloadError || n;
					var t = e.accessToken || this.context.accessToken;
					if(t) {
						if(m.isCanDownLoadFile) {
							var r = m.xmlrequest();
							"addEventListener" in r ? (r.addEventListener("load", function(t) {
								e.onFileDownloadComplete(r.response, r)
							}, !1), r.addEventListener("error", function(t) {
								e.onFileDownloadError({
									type: o.WEBIM_DOWNLOADFILE_ERROR,
									id: e.id,
									xhr: r
								})
							}, !1)) : "onreadystatechange" in r && (r.onreadystatechange = function() {
								4 === r.readyState ? 200 === ajax.status ? e.onFileDownloadComplete(r.response, r) : e.onFileDownloadError({
									type: o.WEBIM_DOWNLOADFILE_ERROR,
									id: e.id,
									xhr: r
								}) : (r.abort(), e.onFileDownloadError({
									type: o.WEBIM_DOWNLOADFILE_ERROR,
									id: e.id,
									xhr: r
								}))
							});
							var a = e.method || "GET",
								i = e.responseType || "blob",
								s = e.mimeType || "text/plain; charset=x-user-defined";
							r.open(a, e.url), "undefined" != typeof Blob ? r.responseType = i : r.overrideMimeType(s);
							var l = {
									"X-Requested-With": "XMLHttpRequest",
									Accept: "application/octet-stream",
									"share-secret": e.secret,
									Authorization: "Bearer " + t
								},
								d = e.headers || {};
							for(var p in d) l[p] = d[p];
							for(var p in l) l[p] && r.setRequestHeader(p, l[p]);
							window.XDomainRequest && (r.readyState = 2), r.send(null)
						} else e.onFileDownloadComplete()
					} else e.onFileDownloadError({
						type: o.WEBIM_DOWNLOADFILE_NO_LOGIN,
						id: e.id
					})
				},
				parseTextMessage: function(e, t) {
					if("string" == typeof e) {
						if("[object Object]" !== Object.prototype.toString.call(t)) return {
							isemoji: !1,
							body: [{
								type: "txt",
								data: e
							}]
						};
						var r = e,
							n = [],
							o = r.match(/\[[^[\]]{2,3}\]/gm);
						if(!o || o.length < 1) return {
							isemoji: !1,
							body: [{
								type: "txt",
								data: e
							}]
						};
						for(var a = !1, i = 0; i < o.length; i++) {
							var s = r.substring(0, r.indexOf(o[i])),
								l = WebIM.Emoji.map[o[i]];
							if(s && n.push({
									type: "txt",
									data: s
								}), l) {
								var d = WebIM.Emoji.map ? WebIM.Emoji.path + l : null;
								d ? (a = !0, n.push({
									type: "emoji",
									data: d
								})) : n.push({
									type: "txt",
									data: o[i]
								});
								var p = r.indexOf(o[i]) + o[i].length;
								r = r.substring(p)
							} else n.push({
								type: "txt",
								data: o[i]
							})
						}
						return r && n.push({
							type: "txt",
							data: r
						}), a ? {
							isemoji: a,
							body: n
						} : {
							isemoji: !1,
							body: [{
								type: "txt",
								data: e
							}]
						}
					}
				},
				parseUri: function() {
					var e = {};
					if(window.location.search) {
						var t = window.location.search.match(/([^\?|&])\w+=([^&]+)/g);
						for(var r in t) {
							var n = t[r],
								o = n.indexOf("="),
								a = n.substr(0, o),
								i = n.substr(o + 1);
							e[a] = i
						}
					}
					return e
				},
				parseHrefHash: function() {
					var e = {};
					if(window.location.hash) {
						var t = window.location.hash.match(/([^\#|&])\w+=([^&]+)/g);
						for(var r in t) {
							var n = t[r],
								o = n.indexOf("="),
								a = n.substr(0, o),
								i = n.substr(o + 1);
							e[a] = i
						}
					}
					return e
				},
				xmlrequest: l,
				getXmlFirstChild: function(e, t) {
					var r = e.getElementsByTagName(t);
					return 0 == r.length ? null : r[0]
				},
				ajax: function(e) {
					var t = e.dataType || "text",
						r = e.success || n,
						a = e.error || n,
						i = m.xmlrequest();
					i.onreadystatechange = function() {
						if(4 !== i.readyState) 0 === i.readyState && a({
							type: o.WEBIM_CONNCTION_AJAX_ERROR,
							data: i.responseText
						});
						else {
							if(200 === (i.status || 0)) {
								try {
									switch(t) {
										case "text":
											return void r(i.responseText);
										case "json":
											var e = m.parseJSON(i.responseText);
											return void r(e, i);
										case "xml":
											return void(i.responseXML && i.responseXML.documentElement ? r(i.responseXML.documentElement, i) : a({
												type: o.WEBIM_CONNCTION_AJAX_ERROR,
												data: i.responseText
											}))
									}
									r(i.response || i.responseText, i)
								} catch(n) {
									a({
										type: o.WEBIM_CONNCTION_AJAX_ERROR,
										data: n
									})
								}
								return
							}
							a({
								type: o.WEBIM_CONNCTION_AJAX_ERROR,
								data: i.responseText
							})
						}
					}, e.responseType && i.responseType && (i.responseType = e.responseType), e.mimeType && m.hasOverrideMimeType && i.overrideMimeType(e.mimeType);
					var s = e.type || "POST",
						l = e.data || null,
						d = "";
					if("get" === s.toLowerCase() && l) {
						for(var p in l) l.hasOwnProperty(p) && (d += p + "=" + l[p] + "&");
						d = d ? d.slice(0, -1) : d, e.url += (e.url.indexOf("?") > 0 ? "&" : "?") + (d ? d + "&" : d) + "_v=" + (new Date).getTime(), l = null, d = null
					}
					if(i.open(s, e.url, m.isCanSetRequestHeader), m.isCanSetRequestHeader) {
						var u = e.headers || {};
						for(var c in u) u.hasOwnProperty(c) && i.setRequestHeader(c, u[c])
					}
					return window.XDomainRequest && (i.readyState = 2), i.send(l), i
				},
				ts: function() {
					var e = new Date,
						t = e.getHours(),
						r = e.getMinutes(),
						n = e.getSeconds();
					return(t < 10 ? "0" + t : t) + ":" + (r < 10 ? "0" + r : r) + ":" + (n < 10 ? "0" + n : n) + ":" + e.getMilliseconds() + " "
				},
				getObjectKey: function(e, t) {
					for(var r in e)
						if(e[r] == t) return r;
					return ""
				},
				sprintf: function() {
					var e, t, r = arguments,
						n = r[0] || "";
					for(e = 1, t = r.length; e < t; e++) n = n.replace(/%s/, r[e]);
					return n
				},
				setCookie: function(e, t, r) {
					var n = e + "=" + encodeURIComponent(t);
					"number" == typeof r && (n += "; max-age: " + 60 * r * 60 * 24), document.cookie = n
				},
				getCookie: function() {
					var e = {},
						t = document.cookie;
					if("" === t) return e;
					for(var r = t.split("; "), n = 0; n < r.length; n++) {
						var o = r[n],
							a = o.indexOf("="),
							i = o.substring(0, a),
							s = o.substring(a + 1);
						s = decodeURIComponent(s), e[i] = s
					}
					return e
				},
				reverse: function(e) {
					var t = [];
					if(Array.prototype.reverse) t = e.reverse();
					else
						for(var r = 0; r < e.length; r++) t.unshift(e[r]);
					return t
				}
			},
			E = m;
		exports.default = E;
	}, {
		"./status": "KLYY"
	}],
	"eUTO": [function(require, module, exports) {
		var define;
		var t;
		! function(n, i) {
			"object" == typeof exports ? module.exports = exports = i() : "function" == typeof t && t.amd ? t([], i) : n.CryptoJS = i()
		}(this, function() {
			var t = t || function(t, n) {
				var i = Object.create || function() {
						function t() {}
						return function(n) {
							var i;
							return t.prototype = n, i = new t, t.prototype = null, i
						}
					}(),
					r = {},
					e = r.lib = {},
					o = e.Base = {
						extend: function(t) {
							var n = i(this);
							return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
								n.$super.init.apply(this, arguments)
							}), n.init.prototype = n, n.$super = this, n
						},
						create: function() {
							var t = this.extend();
							return t.init.apply(t, arguments), t
						},
						init: function() {},
						mixIn: function(t) {
							for(var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
							t.hasOwnProperty("toString") && (this.toString = t.toString)
						},
						clone: function() {
							return this.init.prototype.extend(this)
						}
					},
					s = e.WordArray = o.extend({
						init: function(t, n) {
							t = this.words = t || [], this.sigBytes = null != n ? n : 4 * t.length
						},
						toString: function(t) {
							return(t || c).stringify(this)
						},
						concat: function(t) {
							var n = this.words,
								i = t.words,
								r = this.sigBytes,
								e = t.sigBytes;
							if(this.clamp(), r % 4)
								for(var o = 0; o < e; o++) {
									var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
									n[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
								} else
									for(o = 0; o < e; o += 4) n[r + o >>> 2] = i[o >>> 2];
							return this.sigBytes += e, this
						},
						clamp: function() {
							var n = this.words,
								i = this.sigBytes;
							n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, n.length = t.ceil(i / 4)
						},
						clone: function() {
							var t = o.clone.call(this);
							return t.words = this.words.slice(0), t
						},
						random: function(n) {
							for(var i, r = [], e = function(n) {
									n = n;
									var i = 987654321,
										r = 4294967295;
									return function() {
										var e = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & r) & r;
										return e /= 4294967296, (e += .5) * (t.random() > .5 ? 1 : -1)
									}
								}, o = 0; o < n; o += 4) {
								var a = e(4294967296 * (i || t.random()));
								i = 987654071 * a(), r.push(4294967296 * a() | 0)
							}
							return new s.init(r, n)
						}
					}),
					a = r.enc = {},
					c = a.Hex = {
						stringify: function(t) {
							for(var n = t.words, i = t.sigBytes, r = [], e = 0; e < i; e++) {
								var o = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
								r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
							}
							return r.join("")
						},
						parse: function(t) {
							for(var n = t.length, i = [], r = 0; r < n; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
							return new s.init(i, n / 2)
						}
					},
					u = a.Latin1 = {
						stringify: function(t) {
							for(var n = t.words, i = t.sigBytes, r = [], e = 0; e < i; e++) {
								var o = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
								r.push(String.fromCharCode(o))
							}
							return r.join("")
						},
						parse: function(t) {
							for(var n = t.length, i = [], r = 0; r < n; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
							return new s.init(i, n)
						}
					},
					f = a.Utf8 = {
						stringify: function(t) {
							try {
								return decodeURIComponent(escape(u.stringify(t)))
							} catch(n) {
								throw new Error("Malformed UTF-8 data")
							}
						},
						parse: function(t) {
							return u.parse(unescape(encodeURIComponent(t)))
						}
					},
					h = e.BufferedBlockAlgorithm = o.extend({
						reset: function() {
							this._data = new s.init, this._nDataBytes = 0
						},
						_append: function(t) {
							"string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
						},
						_process: function(n) {
							var i = this._data,
								r = i.words,
								e = i.sigBytes,
								o = this.blockSize,
								a = e / (4 * o),
								c = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o,
								u = t.min(4 * c, e);
							if(c) {
								for(var f = 0; f < c; f += o) this._doProcessBlock(r, f);
								var h = r.splice(0, c);
								i.sigBytes -= u
							}
							return new s.init(h, u)
						},
						clone: function() {
							var t = o.clone.call(this);
							return t._data = this._data.clone(), t
						},
						_minBufferSize: 0
					}),
					p = (e.Hasher = h.extend({
						cfg: o.extend(),
						init: function(t) {
							this.cfg = this.cfg.extend(t), this.reset()
						},
						reset: function() {
							h.reset.call(this), this._doReset()
						},
						update: function(t) {
							return this._append(t), this._process(), this
						},
						finalize: function(t) {
							return t && this._append(t), this._doFinalize()
						},
						blockSize: 16,
						_createHelper: function(t) {
							return function(n, i) {
								return new t.init(i).finalize(n)
							}
						},
						_createHmacHelper: function(t) {
							return function(n, i) {
								return new p.HMAC.init(t, i).finalize(n)
							}
						}
					}), r.algo = {});
				return r
			}(Math);
			return t
		});
	}, {}],
	"M95N": [function(require, module, exports) {
		var define;
		var t;
		! function(r, o) {
			"object" == typeof exports ? module.exports = exports = o(require("./core")) : "function" == typeof t && t.amd ? t(["./core"], o) : o(r.CryptoJS)
		}(this, function(t) {
			var r, o, e, n, i;
			return o = (r = t).lib, e = o.Base, n = o.WordArray, (i = r.x64 = {}).Word = e.extend({
				init: function(t, r) {
					this.high = t, this.low = r
				}
			}), i.WordArray = e.extend({
				init: function(t, r) {
					t = this.words = t || [], this.sigBytes = null != r ? r : 8 * t.length
				},
				toX32: function() {
					for(var t = this.words, r = t.length, o = [], e = 0; e < r; e++) {
						var i = t[e];
						o.push(i.high), o.push(i.low)
					}
					return n.create(o, this.sigBytes)
				},
				clone: function() {
					for(var t = e.clone.call(this), r = t.words = this.words.slice(0), o = r.length, n = 0; n < o; n++) r[n] = r[n].clone();
					return t
				}
			}), t
		});
	}, {
		"./core": "eUTO"
	}],
	"X5QY": [function(require, module, exports) {
		var define;
		var r;
		! function(n, t) {
			"object" == typeof exports ? module.exports = exports = t(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], t) : t(n.CryptoJS)
		}(this, function(r) {
			return function() {
				if("function" == typeof ArrayBuffer) {
					var n = r.lib.WordArray,
						t = n.init;
					(n.init = function(r) {
						if(r instanceof ArrayBuffer && (r = new Uint8Array(r)), (r instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength)), r instanceof Uint8Array) {
							for(var n = r.byteLength, e = [], a = 0; a < n; a++) e[a >>> 2] |= r[a] << 24 - a % 4 * 8;
							t.call(this, e, n)
						} else t.apply(this, arguments)
					}).prototype = n
				}
			}(), r.lib.WordArray
		});
	}, {
		"./core": "eUTO"
	}],
	"0xZK": [function(require, module, exports) {
		var define;
		var r;
		! function(t, n) {
			"object" == typeof exports ? module.exports = exports = n(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], n) : n(t.CryptoJS)
		}(this, function(r) {
			return function() {
				var t = r,
					n = t.lib.WordArray,
					o = t.enc;
				o.Utf16 = o.Utf16BE = {
					stringify: function(r) {
						for(var t = r.words, n = r.sigBytes, o = [], e = 0; e < n; e += 2) {
							var f = t[e >>> 2] >>> 16 - e % 4 * 8 & 65535;
							o.push(String.fromCharCode(f))
						}
						return o.join("")
					},
					parse: function(r) {
						for(var t = r.length, o = [], e = 0; e < t; e++) o[e >>> 1] |= r.charCodeAt(e) << 16 - e % 2 * 16;
						return n.create(o, 2 * t)
					}
				};

				function e(r) {
					return r << 8 & 4278255360 | r >>> 8 & 16711935
				}
				o.Utf16LE = {
					stringify: function(r) {
						for(var t = r.words, n = r.sigBytes, o = [], f = 0; f < n; f += 2) {
							var i = e(t[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
							o.push(String.fromCharCode(i))
						}
						return o.join("")
					},
					parse: function(r) {
						for(var t = r.length, o = [], f = 0; f < t; f++) o[f >>> 1] |= e(r.charCodeAt(f) << 16 - f % 2 * 16);
						return n.create(o, 2 * t)
					}
				}
			}(), r.enc.Utf16
		});
	}, {
		"./core": "eUTO"
	}],
	"/pJa": [function(require, module, exports) {
		var define;
		var r;
		! function(e, t) {
			"object" == typeof exports ? module.exports = exports = t(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], t) : t(e.CryptoJS)
		}(this, function(r) {
			return function() {
				var e = r,
					t = e.lib.WordArray;
				e.enc.Base64 = {
					stringify: function(r) {
						var e = r.words,
							t = r.sigBytes,
							a = this._map;
						r.clamp();
						for(var o = [], n = 0; n < t; n += 3)
							for(var i = (e[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (e[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | e[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, c = 0; c < 4 && n + .75 * c < t; c++) o.push(a.charAt(i >>> 6 * (3 - c) & 63));
						var f = a.charAt(64);
						if(f)
							for(; o.length % 4;) o.push(f);
						return o.join("")
					},
					parse: function(r) {
						var e = r.length,
							a = this._map,
							o = this._reverseMap;
						if(!o) {
							o = this._reverseMap = [];
							for(var n = 0; n < a.length; n++) o[a.charCodeAt(n)] = n
						}
						var i = a.charAt(64);
						if(i) {
							var c = r.indexOf(i); - 1 !== c && (e = c)
						}
						return function(r, e, a) {
							for(var o = [], n = 0, i = 0; i < e; i++)
								if(i % 4) {
									var c = a[r.charCodeAt(i - 1)] << i % 4 * 2,
										f = a[r.charCodeAt(i)] >>> 6 - i % 4 * 2;
									o[n >>> 2] |= (c | f) << 24 - n % 4 * 8, n++
								}
							return t.create(o, n)
						}(r, e, o)
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
				}
			}(), r.enc.Base64
		});
	}, {
		"./core": "eUTO"
	}],
	"GVDV": [function(require, module, exports) {
		var define;
		var r;
		! function(t, n) {
			"object" == typeof exports ? module.exports = exports = n(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], n) : n(t.CryptoJS)
		}(this, function(r) {
			return function(t) {
				var n = r,
					e = n.lib,
					o = e.WordArray,
					a = e.Hasher,
					s = n.algo,
					i = [];
				! function() {
					for(var r = 0; r < 64; r++) i[r] = 4294967296 * t.abs(t.sin(r + 1)) | 0
				}();
				var c = s.MD5 = a.extend({
					_doReset: function() {
						this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
					},
					_doProcessBlock: function(r, t) {
						for(var n = 0; n < 16; n++) {
							var e = t + n,
								o = r[e];
							r[e] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
						}
						var a = this._hash.words,
							s = r[t + 0],
							c = r[t + 1],
							l = r[t + 2],
							_ = r[t + 3],
							d = r[t + 4],
							p = r[t + 5],
							y = r[t + 6],
							D = r[t + 7],
							H = r[t + 8],
							M = r[t + 9],
							g = r[t + 10],
							m = r[t + 11],
							w = r[t + 12],
							x = r[t + 13],
							B = r[t + 14],
							b = r[t + 15],
							j = a[0],
							k = a[1],
							q = a[2],
							z = a[3];
						j = h(j, k, q, z, s, 7, i[0]), z = h(z, j, k, q, c, 12, i[1]), q = h(q, z, j, k, l, 17, i[2]), k = h(k, q, z, j, _, 22, i[3]), j = h(j, k, q, z, d, 7, i[4]), z = h(z, j, k, q, p, 12, i[5]), q = h(q, z, j, k, y, 17, i[6]), k = h(k, q, z, j, D, 22, i[7]), j = h(j, k, q, z, H, 7, i[8]), z = h(z, j, k, q, M, 12, i[9]), q = h(q, z, j, k, g, 17, i[10]), k = h(k, q, z, j, m, 22, i[11]), j = h(j, k, q, z, w, 7, i[12]), z = h(z, j, k, q, x, 12, i[13]), q = h(q, z, j, k, B, 17, i[14]), j = u(j, k = h(k, q, z, j, b, 22, i[15]), q, z, c, 5, i[16]), z = u(z, j, k, q, y, 9, i[17]), q = u(q, z, j, k, m, 14, i[18]), k = u(k, q, z, j, s, 20, i[19]), j = u(j, k, q, z, p, 5, i[20]), z = u(z, j, k, q, g, 9, i[21]), q = u(q, z, j, k, b, 14, i[22]), k = u(k, q, z, j, d, 20, i[23]), j = u(j, k, q, z, M, 5, i[24]), z = u(z, j, k, q, B, 9, i[25]), q = u(q, z, j, k, _, 14, i[26]), k = u(k, q, z, j, H, 20, i[27]), j = u(j, k, q, z, x, 5, i[28]), z = u(z, j, k, q, l, 9, i[29]), q = u(q, z, j, k, D, 14, i[30]), j = f(j, k = u(k, q, z, j, w, 20, i[31]), q, z, p, 4, i[32]), z = f(z, j, k, q, H, 11, i[33]), q = f(q, z, j, k, m, 16, i[34]), k = f(k, q, z, j, B, 23, i[35]), j = f(j, k, q, z, c, 4, i[36]), z = f(z, j, k, q, d, 11, i[37]), q = f(q, z, j, k, D, 16, i[38]), k = f(k, q, z, j, g, 23, i[39]), j = f(j, k, q, z, x, 4, i[40]), z = f(z, j, k, q, s, 11, i[41]), q = f(q, z, j, k, _, 16, i[42]), k = f(k, q, z, j, y, 23, i[43]), j = f(j, k, q, z, M, 4, i[44]), z = f(z, j, k, q, w, 11, i[45]), q = f(q, z, j, k, b, 16, i[46]), j = v(j, k = f(k, q, z, j, l, 23, i[47]), q, z, s, 6, i[48]), z = v(z, j, k, q, D, 10, i[49]), q = v(q, z, j, k, B, 15, i[50]), k = v(k, q, z, j, p, 21, i[51]), j = v(j, k, q, z, w, 6, i[52]), z = v(z, j, k, q, _, 10, i[53]), q = v(q, z, j, k, g, 15, i[54]), k = v(k, q, z, j, c, 21, i[55]), j = v(j, k, q, z, H, 6, i[56]), z = v(z, j, k, q, b, 10, i[57]), q = v(q, z, j, k, y, 15, i[58]), k = v(k, q, z, j, x, 21, i[59]), j = v(j, k, q, z, d, 6, i[60]), z = v(z, j, k, q, m, 10, i[61]), q = v(q, z, j, k, l, 15, i[62]), k = v(k, q, z, j, M, 21, i[63]), a[0] = a[0] + j | 0, a[1] = a[1] + k | 0, a[2] = a[2] + q | 0, a[3] = a[3] + z | 0
					},
					_doFinalize: function() {
						var r = this._data,
							n = r.words,
							e = 8 * this._nDataBytes,
							o = 8 * r.sigBytes;
						n[o >>> 5] |= 128 << 24 - o % 32;
						var a = t.floor(e / 4294967296),
							s = e;
						n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), r.sigBytes = 4 * (n.length + 1), this._process();
						for(var i = this._hash, c = i.words, h = 0; h < 4; h++) {
							var u = c[h];
							c[h] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
						}
						return i
					},
					clone: function() {
						var r = a.clone.call(this);
						return r._hash = this._hash.clone(), r
					}
				});

				function h(r, t, n, e, o, a, s) {
					var i = r + (t & n | ~t & e) + o + s;
					return(i << a | i >>> 32 - a) + t
				}

				function u(r, t, n, e, o, a, s) {
					var i = r + (t & e | n & ~e) + o + s;
					return(i << a | i >>> 32 - a) + t
				}

				function f(r, t, n, e, o, a, s) {
					var i = r + (t ^ n ^ e) + o + s;
					return(i << a | i >>> 32 - a) + t
				}

				function v(r, t, n, e, o, a, s) {
					var i = r + (n ^ (t | ~e)) + o + s;
					return(i << a | i >>> 32 - a) + t
				}
				n.MD5 = a._createHelper(c), n.HmacMD5 = a._createHmacHelper(c)
			}(Math), r.MD5
		});
	}, {
		"./core": "eUTO"
	}],
	"yxyM": [function(require, module, exports) {
		var define;
		var e;
		! function(t, r) {
			"object" == typeof exports ? module.exports = exports = r(require("./core")) : "function" == typeof e && e.amd ? e(["./core"], r) : r(t.CryptoJS)
		}(this, function(e) {
			var t, r, o, s, a, n, i;
			return r = (t = e).lib, o = r.WordArray, s = r.Hasher, a = t.algo, n = [], i = a.SHA1 = s.extend({
				_doReset: function() {
					this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
				},
				_doProcessBlock: function(e, t) {
					for(var r = this._hash.words, o = r[0], s = r[1], a = r[2], i = r[3], h = r[4], c = 0; c < 80; c++) {
						if(c < 16) n[c] = 0 | e[t + c];
						else {
							var l = n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16];
							n[c] = l << 1 | l >>> 31
						}
						var _ = (o << 5 | o >>> 27) + h + n[c];
						_ += c < 20 ? 1518500249 + (s & a | ~s & i) : c < 40 ? 1859775393 + (s ^ a ^ i) : c < 60 ? (s & a | s & i | a & i) - 1894007588 : (s ^ a ^ i) - 899497514, h = i, i = a, a = s << 30 | s >>> 2, s = o, o = _
					}
					r[0] = r[0] + o | 0, r[1] = r[1] + s | 0, r[2] = r[2] + a | 0, r[3] = r[3] + i | 0, r[4] = r[4] + h | 0
				},
				_doFinalize: function() {
					var e = this._data,
						t = e.words,
						r = 8 * this._nDataBytes,
						o = 8 * e.sigBytes;
					return t[o >>> 5] |= 128 << 24 - o % 32, t[14 + (o + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (o + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash
				},
				clone: function() {
					var e = s.clone.call(this);
					return e._hash = this._hash.clone(), e
				}
			}), t.SHA1 = s._createHelper(i), t.HmacSHA1 = s._createHmacHelper(i), e.SHA1
		});
	}, {
		"./core": "eUTO"
	}],
	"MS2N": [function(require, module, exports) {
		var define;
		var r;
		! function(t, e) {
			"object" == typeof exports ? module.exports = exports = e(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], e) : e(t.CryptoJS)
		}(this, function(r) {
			return function(t) {
				var e = r,
					o = e.lib,
					n = o.WordArray,
					s = o.Hasher,
					i = e.algo,
					a = [],
					c = [];
				! function() {
					function r(r) {
						for(var e = t.sqrt(r), o = 2; o <= e; o++)
							if(!(r % o)) return !1;
						return !0
					}

					function e(r) {
						return 4294967296 * (r - (0 | r)) | 0
					}
					for(var o = 2, n = 0; n < 64;) r(o) && (n < 8 && (a[n] = e(t.pow(o, .5))), c[n] = e(t.pow(o, 1 / 3)), n++), o++
				}();
				var h = [],
					f = i.SHA256 = s.extend({
						_doReset: function() {
							this._hash = new n.init(a.slice(0))
						},
						_doProcessBlock: function(r, t) {
							for(var e = this._hash.words, o = e[0], n = e[1], s = e[2], i = e[3], a = e[4], f = e[5], u = e[6], l = e[7], _ = 0; _ < 64; _++) {
								if(_ < 16) h[_] = 0 | r[t + _];
								else {
									var p = h[_ - 15],
										d = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
										v = h[_ - 2],
										H = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
									h[_] = d + h[_ - 7] + H + h[_ - 16]
								}
								var y = o & n ^ o & s ^ n & s,
									w = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
									A = l + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & f ^ ~a & u) + c[_] + h[_];
								l = u, u = f, f = a, a = i + A | 0, i = s, s = n, n = o, o = A + (w + y) | 0
							}
							e[0] = e[0] + o | 0, e[1] = e[1] + n | 0, e[2] = e[2] + s | 0, e[3] = e[3] + i | 0, e[4] = e[4] + a | 0, e[5] = e[5] + f | 0, e[6] = e[6] + u | 0, e[7] = e[7] + l | 0
						},
						_doFinalize: function() {
							var r = this._data,
								e = r.words,
								o = 8 * this._nDataBytes,
								n = 8 * r.sigBytes;
							return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = t.floor(o / 4294967296), e[15 + (n + 64 >>> 9 << 4)] = o, r.sigBytes = 4 * e.length, this._process(), this._hash
						},
						clone: function() {
							var r = s.clone.call(this);
							return r._hash = this._hash.clone(), r
						}
					});
				e.SHA256 = s._createHelper(f), e.HmacSHA256 = s._createHmacHelper(f)
			}(Math), r.SHA256
		});
	}, {
		"./core": "eUTO"
	}],
	"OEnX": [function(require, module, exports) {
		var define;
		var e;
		! function(r, t, o) {
			"object" == typeof exports ? module.exports = exports = t(require("./core"), require("./sha256")) : "function" == typeof e && e.amd ? e(["./core", "./sha256"], t) : t(r.CryptoJS)
		}(this, function(e) {
			var r, t, o, i, n;
			return t = (r = e).lib.WordArray, o = r.algo, i = o.SHA256, n = o.SHA224 = i.extend({
				_doReset: function() {
					this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
				},
				_doFinalize: function() {
					var e = i._doFinalize.call(this);
					return e.sigBytes -= 4, e
				}
			}), r.SHA224 = i._createHelper(n), r.HmacSHA224 = i._createHmacHelper(n), e.SHA224
		});
	}, {
		"./core": "eUTO",
		"./sha256": "MS2N"
	}],
	"xA62": [function(require, module, exports) {
		var define;
		var i;
		! function(h, o, e) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./x64-core")) : "function" == typeof i && i.amd ? i(["./core", "./x64-core"], o) : o(h.CryptoJS)
		}(this, function(i) {
			return function() {
				var h = i,
					o = h.lib.Hasher,
					e = h.x64,
					t = e.Word,
					n = e.WordArray,
					r = h.algo;

				function l() {
					return t.create.apply(t, arguments)
				}
				var a = [l(1116352408, 3609767458), l(1899447441, 602891725), l(3049323471, 3964484399), l(3921009573, 2173295548), l(961987163, 4081628472), l(1508970993, 3053834265), l(2453635748, 2937671579), l(2870763221, 3664609560), l(3624381080, 2734883394), l(310598401, 1164996542), l(607225278, 1323610764), l(1426881987, 3590304994), l(1925078388, 4068182383), l(2162078206, 991336113), l(2614888103, 633803317), l(3248222580, 3479774868), l(3835390401, 2666613458), l(4022224774, 944711139), l(264347078, 2341262773), l(604807628, 2007800933), l(770255983, 1495990901), l(1249150122, 1856431235), l(1555081692, 3175218132), l(1996064986, 2198950837), l(2554220882, 3999719339), l(2821834349, 766784016), l(2952996808, 2566594879), l(3210313671, 3203337956), l(3336571891, 1034457026), l(3584528711, 2466948901), l(113926993, 3758326383), l(338241895, 168717936), l(666307205, 1188179964), l(773529912, 1546045734), l(1294757372, 1522805485), l(1396182291, 2643833823), l(1695183700, 2343527390), l(1986661051, 1014477480), l(2177026350, 1206759142), l(2456956037, 344077627), l(2730485921, 1290863460), l(2820302411, 3158454273), l(3259730800, 3505952657), l(3345764771, 106217008), l(3516065817, 3606008344), l(3600352804, 1432725776), l(4094571909, 1467031594), l(275423344, 851169720), l(430227734, 3100823752), l(506948616, 1363258195), l(659060556, 3750685593), l(883997877, 3785050280), l(958139571, 3318307427), l(1322822218, 3812723403), l(1537002063, 2003034995), l(1747873779, 3602036899), l(1955562222, 1575990012), l(2024104815, 1125592928), l(2227730452, 2716904306), l(2361852424, 442776044), l(2428436474, 593698344), l(2756734187, 3733110249), l(3204031479, 2999351573), l(3329325298, 3815920427), l(3391569614, 3928383900), l(3515267271, 566280711), l(3940187606, 3454069534), l(4118630271, 4000239992), l(116418474, 1914138554), l(174292421, 2731055270), l(289380356, 3203993006), l(460393269, 320620315), l(685471733, 587496836), l(852142971, 1086792851), l(1017036298, 365543100), l(1126000580, 2618297676), l(1288033470, 3409855158), l(1501505948, 4234509866), l(1607167915, 987167468), l(1816402316, 1246189591)],
					w = [];
				! function() {
					for(var i = 0; i < 80; i++) w[i] = l()
				}();
				var s = r.SHA512 = o.extend({
					_doReset: function() {
						this._hash = new n.init([new t.init(1779033703, 4089235720), new t.init(3144134277, 2227873595), new t.init(1013904242, 4271175723), new t.init(2773480762, 1595750129), new t.init(1359893119, 2917565137), new t.init(2600822924, 725511199), new t.init(528734635, 4215389547), new t.init(1541459225, 327033209)])
					},
					_doProcessBlock: function(i, h) {
						for(var o = this._hash.words, e = o[0], t = o[1], n = o[2], r = o[3], l = o[4], s = o[5], c = o[6], g = o[7], u = e.high, f = e.low, _ = t.high, v = t.low, d = n.high, p = n.low, H = r.high, y = r.low, x = l.high, S = l.low, A = s.high, m = s.low, B = c.high, b = c.low, k = g.high, q = g.low, z = u, W = f, j = _, C = v, D = d, F = p, J = H, M = y, P = x, R = S, X = A, E = m, G = B, I = b, K = k, L = q, N = 0; N < 80; N++) {
							var O = w[N];
							if(N < 16) var Q = O.high = 0 | i[h + 2 * N],
								T = O.low = 0 | i[h + 2 * N + 1];
							else {
								var U = w[N - 15],
									V = U.high,
									Y = U.low,
									Z = (V >>> 1 | Y << 31) ^ (V >>> 8 | Y << 24) ^ V >>> 7,
									$ = (Y >>> 1 | V << 31) ^ (Y >>> 8 | V << 24) ^ (Y >>> 7 | V << 25),
									ii = w[N - 2],
									hi = ii.high,
									oi = ii.low,
									ei = (hi >>> 19 | oi << 13) ^ (hi << 3 | oi >>> 29) ^ hi >>> 6,
									ti = (oi >>> 19 | hi << 13) ^ (oi << 3 | hi >>> 29) ^ (oi >>> 6 | hi << 26),
									ni = w[N - 7],
									ri = ni.high,
									li = ni.low,
									ai = w[N - 16],
									wi = ai.high,
									si = ai.low;
								Q = (Q = (Q = Z + ri + ((T = $ + li) >>> 0 < $ >>> 0 ? 1 : 0)) + ei + ((T = T + ti) >>> 0 < ti >>> 0 ? 1 : 0)) + wi + ((T = T + si) >>> 0 < si >>> 0 ? 1 : 0);
								O.high = Q, O.low = T
							}
							var ci, gi = P & X ^ ~P & G,
								ui = R & E ^ ~R & I,
								fi = z & j ^ z & D ^ j & D,
								_i = W & C ^ W & F ^ C & F,
								vi = (z >>> 28 | W << 4) ^ (z << 30 | W >>> 2) ^ (z << 25 | W >>> 7),
								di = (W >>> 28 | z << 4) ^ (W << 30 | z >>> 2) ^ (W << 25 | z >>> 7),
								pi = (P >>> 14 | R << 18) ^ (P >>> 18 | R << 14) ^ (P << 23 | R >>> 9),
								Hi = (R >>> 14 | P << 18) ^ (R >>> 18 | P << 14) ^ (R << 23 | P >>> 9),
								yi = a[N],
								xi = yi.high,
								Si = yi.low,
								Ai = K + pi + ((ci = L + Hi) >>> 0 < L >>> 0 ? 1 : 0),
								mi = di + _i;
							K = G, L = I, G = X, I = E, X = P, E = R, P = J + (Ai = (Ai = (Ai = Ai + gi + ((ci = ci + ui) >>> 0 < ui >>> 0 ? 1 : 0)) + xi + ((ci = ci + Si) >>> 0 < Si >>> 0 ? 1 : 0)) + Q + ((ci = ci + T) >>> 0 < T >>> 0 ? 1 : 0)) + ((R = M + ci | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0, J = D, M = F, D = j, F = C, j = z, C = W, z = Ai + (vi + fi + (mi >>> 0 < di >>> 0 ? 1 : 0)) + ((W = ci + mi | 0) >>> 0 < ci >>> 0 ? 1 : 0) | 0
						}
						f = e.low = f + W, e.high = u + z + (f >>> 0 < W >>> 0 ? 1 : 0), v = t.low = v + C, t.high = _ + j + (v >>> 0 < C >>> 0 ? 1 : 0), p = n.low = p + F, n.high = d + D + (p >>> 0 < F >>> 0 ? 1 : 0), y = r.low = y + M, r.high = H + J + (y >>> 0 < M >>> 0 ? 1 : 0), S = l.low = S + R, l.high = x + P + (S >>> 0 < R >>> 0 ? 1 : 0), m = s.low = m + E, s.high = A + X + (m >>> 0 < E >>> 0 ? 1 : 0), b = c.low = b + I, c.high = B + G + (b >>> 0 < I >>> 0 ? 1 : 0), q = g.low = q + L, g.high = k + K + (q >>> 0 < L >>> 0 ? 1 : 0)
					},
					_doFinalize: function() {
						var i = this._data,
							h = i.words,
							o = 8 * this._nDataBytes,
							e = 8 * i.sigBytes;
						return h[e >>> 5] |= 128 << 24 - e % 32, h[30 + (e + 128 >>> 10 << 5)] = Math.floor(o / 4294967296), h[31 + (e + 128 >>> 10 << 5)] = o, i.sigBytes = 4 * h.length, this._process(), this._hash.toX32()
					},
					clone: function() {
						var i = o.clone.call(this);
						return i._hash = this._hash.clone(), i
					},
					blockSize: 32
				});
				h.SHA512 = o._createHelper(s), h.HmacSHA512 = o._createHmacHelper(s)
			}(), i.SHA512
		});
	}, {
		"./core": "eUTO",
		"./x64-core": "M95N"
	}],
	"YkB8": [function(require, module, exports) {
		var define;
		var e;
		! function(i, n, t) {
			"object" == typeof exports ? module.exports = exports = n(require("./core"), require("./x64-core"), require("./sha512")) : "function" == typeof e && e.amd ? e(["./core", "./x64-core", "./sha512"], n) : n(i.CryptoJS)
		}(this, function(e) {
			var i, n, t, r, o, a, c;
			return n = (i = e).x64, t = n.Word, r = n.WordArray, o = i.algo, a = o.SHA512, c = o.SHA384 = a.extend({
				_doReset: function() {
					this._hash = new r.init([new t.init(3418070365, 3238371032), new t.init(1654270250, 914150663), new t.init(2438529370, 812702999), new t.init(355462360, 4144912697), new t.init(1731405415, 4290775857), new t.init(2394180231, 1750603025), new t.init(3675008525, 1694076839), new t.init(1203062813, 3204075428)])
				},
				_doFinalize: function() {
					var e = a._doFinalize.call(this);
					return e.sigBytes -= 16, e
				}
			}), i.SHA384 = a._createHelper(c), i.HmacSHA384 = a._createHmacHelper(c), e.SHA384
		});
	}, {
		"./core": "eUTO",
		"./x64-core": "M95N",
		"./sha512": "xA62"
	}],
	"F6e3": [function(require, module, exports) {
		var define;
		var r;
		! function(o, t, e) {
			"object" == typeof exports ? module.exports = exports = t(require("./core"), require("./x64-core")) : "function" == typeof r && r.amd ? r(["./core", "./x64-core"], t) : t(o.CryptoJS)
		}(this, function(r) {
			return function(o) {
				var t = r,
					e = t.lib,
					i = e.WordArray,
					h = e.Hasher,
					a = t.x64.Word,
					n = t.algo,
					s = [],
					c = [],
					f = [];
				! function() {
					for(var r = 1, o = 0, t = 0; t < 24; t++) {
						s[r + 5 * o] = (t + 1) * (t + 2) / 2 % 64;
						var e = (2 * r + 3 * o) % 5;
						r = o % 5, o = e
					}
					for(r = 0; r < 5; r++)
						for(o = 0; o < 5; o++) c[r + 5 * o] = o + (2 * r + 3 * o) % 5 * 5;
					for(var i = 1, h = 0; h < 24; h++) {
						for(var n = 0, l = 0, g = 0; g < 7; g++) {
							if(1 & i) {
								var v = (1 << g) - 1;
								v < 32 ? l ^= 1 << v : n ^= 1 << v - 32
							}
							128 & i ? i = i << 1 ^ 113 : i <<= 1
						}
						f[h] = a.create(n, l)
					}
				}();
				var l = [];
				! function() {
					for(var r = 0; r < 25; r++) l[r] = a.create()
				}();
				var g = n.SHA3 = h.extend({
					cfg: h.cfg.extend({
						outputLength: 512
					}),
					_doReset: function() {
						for(var r = this._state = [], o = 0; o < 25; o++) r[o] = new a.init;
						this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
					},
					_doProcessBlock: function(r, o) {
						for(var t = this._state, e = this.blockSize / 2, i = 0; i < e; i++) {
							var h = r[o + 2 * i],
								a = r[o + 2 * i + 1];
							h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), (B = t[i]).high ^= a, B.low ^= h
						}
						for(var n = 0; n < 24; n++) {
							for(var g = 0; g < 5; g++) {
								for(var v = 0, u = 0, w = 0; w < 5; w++) {
									v ^= (B = t[g + 5 * w]).high, u ^= B.low
								}
								var p = l[g];
								p.high = v, p.low = u
							}
							for(g = 0; g < 5; g++) {
								var _ = l[(g + 4) % 5],
									d = l[(g + 1) % 5],
									H = d.high,
									x = d.low;
								for(v = _.high ^ (H << 1 | x >>> 31), u = _.low ^ (x << 1 | H >>> 31), w = 0; w < 5; w++) {
									(B = t[g + 5 * w]).high ^= v, B.low ^= u
								}
							}
							for(var S = 1; S < 25; S++) {
								var y = (B = t[S]).high,
									b = B.low,
									A = s[S];
								if(A < 32) v = y << A | b >>> 32 - A, u = b << A | y >>> 32 - A;
								else v = b << A - 32 | y >>> 64 - A, u = y << A - 32 | b >>> 64 - A;
								var k = l[c[S]];
								k.high = v, k.low = u
							}
							var m = l[0],
								z = t[0];
							m.high = z.high, m.low = z.low;
							for(g = 0; g < 5; g++)
								for(w = 0; w < 5; w++) {
									var B = t[S = g + 5 * w],
										L = l[S],
										q = l[(g + 1) % 5 + 5 * w],
										W = l[(g + 2) % 5 + 5 * w];
									B.high = L.high ^ ~q.high & W.high, B.low = L.low ^ ~q.low & W.low
								}
							B = t[0];
							var j = f[n];
							B.high ^= j.high, B.low ^= j.low
						}
					},
					_doFinalize: function() {
						var r = this._data,
							t = r.words,
							e = (this._nDataBytes, 8 * r.sigBytes),
							h = 32 * this.blockSize;
						t[e >>> 5] |= 1 << 24 - e % 32, t[(o.ceil((e + 1) / h) * h >>> 5) - 1] |= 128, r.sigBytes = 4 * t.length, this._process();
						for(var a = this._state, n = this.cfg.outputLength / 8, s = n / 8, c = [], f = 0; f < s; f++) {
							var l = a[f],
								g = l.high,
								v = l.low;
							g = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8), v = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8), c.push(v), c.push(g)
						}
						return new i.init(c, n)
					},
					clone: function() {
						for(var r = h.clone.call(this), o = r._state = this._state.slice(0), t = 0; t < 25; t++) o[t] = o[t].clone();
						return r
					}
				});
				t.SHA3 = h._createHelper(g), t.HmacSHA3 = h._createHmacHelper(g)
			}(Math), r.SHA3
		});
	}, {
		"./core": "eUTO",
		"./x64-core": "M95N"
	}],
	"Y8c+": [function(require, module, exports) {
		var define;
		var r;
		! function(e, t) {
			"object" == typeof exports ? module.exports = exports = t(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], t) : t(e.CryptoJS)
		}(this, function(r) {
			return function(e) {
				var t = r,
					o = t.lib,
					n = o.WordArray,
					s = o.Hasher,
					a = t.algo,
					c = n.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
					i = n.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
					u = n.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
					h = n.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
					f = n.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
					d = n.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
					l = a.RIPEMD160 = s.extend({
						_doReset: function() {
							this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
						},
						_doProcessBlock: function(r, e) {
							for(var t = 0; t < 16; t++) {
								var o = e + t,
									n = r[o];
								r[o] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
							}
							var s, a, l, H, M, P, R, g, m, x, B, E = this._hash.words,
								I = f.words,
								b = d.words,
								j = c.words,
								k = i.words,
								q = u.words,
								z = h.words;
							P = s = E[0], R = a = E[1], g = l = E[2], m = H = E[3], x = M = E[4];
							for(t = 0; t < 80; t += 1) B = s + r[e + j[t]] | 0, B += t < 16 ? _(a, l, H) + I[0] : t < 32 ? p(a, l, H) + I[1] : t < 48 ? v(a, l, H) + I[2] : t < 64 ? w(a, l, H) + I[3] : y(a, l, H) + I[4], B = (B = D(B |= 0, q[t])) + M | 0, s = M, M = H, H = D(l, 10), l = a, a = B, B = P + r[e + k[t]] | 0, B += t < 16 ? y(R, g, m) + b[0] : t < 32 ? w(R, g, m) + b[1] : t < 48 ? v(R, g, m) + b[2] : t < 64 ? p(R, g, m) + b[3] : _(R, g, m) + b[4], B = (B = D(B |= 0, z[t])) + x | 0, P = x, x = m, m = D(g, 10), g = R, R = B;
							B = E[1] + l + m | 0, E[1] = E[2] + H + x | 0, E[2] = E[3] + M + P | 0, E[3] = E[4] + s + R | 0, E[4] = E[0] + a + g | 0, E[0] = B
						},
						_doFinalize: function() {
							var r = this._data,
								e = r.words,
								t = 8 * this._nDataBytes,
								o = 8 * r.sigBytes;
							e[o >>> 5] |= 128 << 24 - o % 32, e[14 + (o + 64 >>> 9 << 4)] = 16711935 & (t << 8 | t >>> 24) | 4278255360 & (t << 24 | t >>> 8), r.sigBytes = 4 * (e.length + 1), this._process();
							for(var n = this._hash, s = n.words, a = 0; a < 5; a++) {
								var c = s[a];
								s[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
							}
							return n
						},
						clone: function() {
							var r = s.clone.call(this);
							return r._hash = this._hash.clone(), r
						}
					});

				function _(r, e, t) {
					return r ^ e ^ t
				}

				function p(r, e, t) {
					return r & e | ~r & t
				}

				function v(r, e, t) {
					return(r | ~e) ^ t
				}

				function w(r, e, t) {
					return r & t | e & ~t
				}

				function y(r, e, t) {
					return r ^ (e | ~t)
				}

				function D(r, e) {
					return r << e | r >>> 32 - e
				}
				t.RIPEMD160 = s._createHelper(l), t.HmacRIPEMD160 = s._createHmacHelper(l)
			}(Math), r.RIPEMD160
		});
	}, {
		"./core": "eUTO"
	}],
	"IKo8": [function(require, module, exports) {
		var define;
		var e;
		! function(t, i) {
			"object" == typeof exports ? module.exports = exports = i(require("./core")) : "function" == typeof e && e.amd ? e(["./core"], i) : i(t.CryptoJS)
		}(this, function(e) {
			var t, i, s;
			i = (t = e).lib.Base, s = t.enc.Utf8, t.algo.HMAC = i.extend({
				init: function(e, t) {
					e = this._hasher = new e.init, "string" == typeof t && (t = s.parse(t));
					var i = e.blockSize,
						r = 4 * i;
					t.sigBytes > r && (t = e.finalize(t)), t.clamp();
					for(var n = this._oKey = t.clone(), o = this._iKey = t.clone(), a = n.words, h = o.words, c = 0; c < i; c++) a[c] ^= 1549556828, h[c] ^= 909522486;
					n.sigBytes = o.sigBytes = r, this.reset()
				},
				reset: function() {
					var e = this._hasher;
					e.reset(), e.update(this._iKey)
				},
				update: function(e) {
					return this._hasher.update(e), this
				},
				finalize: function(e) {
					var t = this._hasher,
						i = t.finalize(e);
					return t.reset(), t.finalize(this._oKey.clone().concat(i))
				}
			})
		});
	}, {
		"./core": "eUTO"
	}],
	"/NfQ": [function(require, module, exports) {
		var define;
		var e;
		! function(r, t, o) {
			"object" == typeof exports ? module.exports = exports = t(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof e && e.amd ? e(["./core", "./sha1", "./hmac"], t) : t(r.CryptoJS)
		}(this, function(e) {
			var r, t, o, i, a, n, c, s;
			return t = (r = e).lib, o = t.Base, i = t.WordArray, a = r.algo, n = a.SHA1, c = a.HMAC, s = a.PBKDF2 = o.extend({
				cfg: o.extend({
					keySize: 4,
					hasher: n,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e)
				},
				compute: function(e, r) {
					for(var t = this.cfg, o = c.create(t.hasher, e), a = i.create(), n = i.create([1]), s = a.words, f = n.words, u = t.keySize, h = t.iterations; s.length < u;) {
						var d = o.update(r).finalize(n);
						o.reset();
						for(var p = d.words, g = p.length, l = d, y = 1; y < h; y++) {
							l = o.finalize(l), o.reset();
							for(var m = l.words, v = 0; v < g; v++) p[v] ^= m[v]
						}
						a.concat(d), f[0]++
					}
					return a.sigBytes = 4 * u, a
				}
			}), r.PBKDF2 = function(e, r, t) {
				return s.create(t).compute(e, r)
			}, e.PBKDF2
		});
	}, {
		"./core": "eUTO",
		"./sha1": "yxyM",
		"./hmac": "IKo8"
	}],
	"W9aa": [function(require, module, exports) {
		var define;
		var e;
		! function(t, r, i) {
			"object" == typeof exports ? module.exports = exports = r(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof e && e.amd ? e(["./core", "./sha1", "./hmac"], r) : r(t.CryptoJS)
		}(this, function(e) {
			var t, r, i, o, a, n, c;
			return r = (t = e).lib, i = r.Base, o = r.WordArray, a = t.algo, n = a.MD5, c = a.EvpKDF = i.extend({
				cfg: i.extend({
					keySize: 4,
					hasher: n,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e)
				},
				compute: function(e, t) {
					for(var r = this.cfg, i = r.hasher.create(), a = o.create(), n = a.words, c = r.keySize, s = r.iterations; n.length < c;) {
						u && i.update(u);
						var u = i.update(e).finalize(t);
						i.reset();
						for(var f = 1; f < s; f++) u = i.finalize(u), i.reset();
						a.concat(u)
					}
					return a.sigBytes = 4 * c, a
				}
			}), t.EvpKDF = function(e, t, r) {
				return c.create(r).compute(e, t)
			}, e.EvpKDF
		});
	}, {
		"./core": "eUTO",
		"./sha1": "yxyM",
		"./hmac": "IKo8"
	}],
	"uCLB": [function(require, module, exports) {
		var define;
		var e;
		! function(t, r, i) {
			"object" == typeof exports ? module.exports = exports = r(require("./core"), require("./evpkdf")) : "function" == typeof e && e.amd ? e(["./core", "./evpkdf"], r) : r(t.CryptoJS)
		}(this, function(e) {
			e.lib.Cipher || function(t) {
				var r = e,
					i = r.lib,
					n = i.Base,
					c = i.WordArray,
					o = i.BufferedBlockAlgorithm,
					s = r.enc,
					a = (s.Utf8, s.Base64),
					f = r.algo.EvpKDF,
					p = i.Cipher = o.extend({
						cfg: n.extend(),
						createEncryptor: function(e, t) {
							return this.create(this._ENC_XFORM_MODE, e, t)
						},
						createDecryptor: function(e, t) {
							return this.create(this._DEC_XFORM_MODE, e, t)
						},
						init: function(e, t, r) {
							this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset()
						},
						reset: function() {
							o.reset.call(this), this._doReset()
						},
						process: function(e) {
							return this._append(e), this._process()
						},
						finalize: function(e) {
							return e && this._append(e), this._doFinalize()
						},
						keySize: 4,
						ivSize: 4,
						_ENC_XFORM_MODE: 1,
						_DEC_XFORM_MODE: 2,
						_createHelper: function() {
							function e(e) {
								return "string" == typeof e ? x : v
							}
							return function(t) {
								return {
									encrypt: function(r, i, n) {
										return e(i).encrypt(t, r, i, n)
									},
									decrypt: function(r, i, n) {
										return e(i).decrypt(t, r, i, n)
									}
								}
							}
						}()
					}),
					h = (i.StreamCipher = p.extend({
						_doFinalize: function() {
							return this._process(!0)
						},
						blockSize: 1
					}), r.mode = {}),
					d = i.BlockCipherMode = n.extend({
						createEncryptor: function(e, t) {
							return this.Encryptor.create(e, t)
						},
						createDecryptor: function(e, t) {
							return this.Decryptor.create(e, t)
						},
						init: function(e, t) {
							this._cipher = e, this._iv = t
						}
					}),
					u = h.CBC = function() {
						var e = d.extend();

						function r(e, r, i) {
							var n = this._iv;
							if(n) {
								var c = n;
								this._iv = t
							} else c = this._prevBlock;
							for(var o = 0; o < i; o++) e[r + o] ^= c[o]
						}
						return e.Encryptor = e.extend({
							processBlock: function(e, t) {
								var i = this._cipher,
									n = i.blockSize;
								r.call(this, e, t, n), i.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n)
							}
						}), e.Decryptor = e.extend({
							processBlock: function(e, t) {
								var i = this._cipher,
									n = i.blockSize,
									c = e.slice(t, t + n);
								i.decryptBlock(e, t), r.call(this, e, t, n), this._prevBlock = c
							}
						}), e
					}(),
					l = (r.pad = {}).Pkcs7 = {
						pad: function(e, t) {
							for(var r = 4 * t, i = r - e.sigBytes % r, n = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4) o.push(n);
							var a = c.create(o, i);
							e.concat(a)
						},
						unpad: function(e) {
							var t = 255 & e.words[e.sigBytes - 1 >>> 2];
							e.sigBytes -= t
						}
					},
					_ = (i.BlockCipher = p.extend({
						cfg: p.cfg.extend({
							mode: u,
							padding: l
						}),
						reset: function() {
							p.reset.call(this);
							var e = this.cfg,
								t = e.iv,
								r = e.mode;
							if(this._xformMode == this._ENC_XFORM_MODE) var i = r.createEncryptor;
							else {
								i = r.createDecryptor;
								this._minBufferSize = 1
							}
							this._mode && this._mode.__creator == i ? this._mode.init(this, t && t.words) : (this._mode = i.call(r, this, t && t.words), this._mode.__creator = i)
						},
						_doProcessBlock: function(e, t) {
							this._mode.processBlock(e, t)
						},
						_doFinalize: function() {
							var e = this.cfg.padding;
							if(this._xformMode == this._ENC_XFORM_MODE) {
								e.pad(this._data, this.blockSize);
								var t = this._process(!0)
							} else {
								t = this._process(!0);
								e.unpad(t)
							}
							return t
						},
						blockSize: 4
					}), i.CipherParams = n.extend({
						init: function(e) {
							this.mixIn(e)
						},
						toString: function(e) {
							return(e || this.formatter).stringify(this)
						}
					})),
					y = (r.format = {}).OpenSSL = {
						stringify: function(e) {
							var t = e.ciphertext,
								r = e.salt;
							if(r) var i = c.create([1398893684, 1701076831]).concat(r).concat(t);
							else i = t;
							return i.toString(a)
						},
						parse: function(e) {
							var t = a.parse(e),
								r = t.words;
							if(1398893684 == r[0] && 1701076831 == r[1]) {
								var i = c.create(r.slice(2, 4));
								r.splice(0, 4), t.sigBytes -= 16
							}
							return _.create({
								ciphertext: t,
								salt: i
							})
						}
					},
					v = i.SerializableCipher = n.extend({
						cfg: n.extend({
							format: y
						}),
						encrypt: function(e, t, r, i) {
							i = this.cfg.extend(i);
							var n = e.createEncryptor(r, i),
								c = n.finalize(t),
								o = n.cfg;
							return _.create({
								ciphertext: c,
								key: r,
								iv: o.iv,
								algorithm: e,
								mode: o.mode,
								padding: o.padding,
								blockSize: e.blockSize,
								formatter: i.format
							})
						},
						decrypt: function(e, t, r, i) {
							return i = this.cfg.extend(i), t = this._parse(t, i.format), e.createDecryptor(r, i).finalize(t.ciphertext)
						},
						_parse: function(e, t) {
							return "string" == typeof e ? t.parse(e, this) : e
						}
					}),
					k = (r.kdf = {}).OpenSSL = {
						execute: function(e, t, r, i) {
							i || (i = c.random(8));
							var n = f.create({
									keySize: t + r
								}).compute(e, i),
								o = c.create(n.words.slice(t), 4 * r);
							return n.sigBytes = 4 * t, _.create({
								key: n,
								iv: o,
								salt: i
							})
						}
					},
					x = i.PasswordBasedCipher = v.extend({
						cfg: v.cfg.extend({
							kdf: k
						}),
						encrypt: function(e, t, r, i) {
							var n = (i = this.cfg.extend(i)).kdf.execute(r, e.keySize, e.ivSize);
							i.iv = n.iv;
							var c = v.encrypt.call(this, e, t, n.key, i);
							return c.mixIn(n), c
						},
						decrypt: function(e, t, r, i) {
							i = this.cfg.extend(i), t = this._parse(t, i.format);
							var n = i.kdf.execute(r, e.keySize, e.ivSize, t.salt);
							return i.iv = n.iv, v.decrypt.call(this, e, t, n.key, i)
						}
					})
			}()
		});
	}, {
		"./core": "eUTO",
		"./evpkdf": "W9aa"
	}],
	"dnNm": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, c) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			return e.mode.CFB = function() {
				var r = e.lib.BlockCipherMode.extend();

				function o(e, r, o, c) {
					var i = this._iv;
					if(i) {
						var t = i.slice(0);
						this._iv = void 0
					} else t = this._prevBlock;
					c.encryptBlock(t, 0);
					for(var n = 0; n < o; n++) e[r + n] ^= t[n]
				}
				return r.Encryptor = r.extend({
					processBlock: function(e, r) {
						var c = this._cipher,
							i = c.blockSize;
						o.call(this, e, r, i, c), this._prevBlock = e.slice(r, r + i)
					}
				}), r.Decryptor = r.extend({
					processBlock: function(e, r) {
						var c = this._cipher,
							i = c.blockSize,
							t = e.slice(r, r + i);
						o.call(this, e, r, i, c), this._prevBlock = t
					}
				}), r
			}(), e.mode.CFB
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"iAFA": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			var r, o;
			return e.mode.CTR = (r = e.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
				processBlock: function(e, r) {
					var o = this._cipher,
						t = o.blockSize,
						c = this._iv,
						i = this._counter;
					c && (i = this._counter = c.slice(0), this._iv = void 0);
					var n = i.slice(0);
					o.encryptBlock(n, 0), i[t - 1] = i[t - 1] + 1 | 0;
					for(var p = 0; p < t; p++) e[r + p] ^= n[p]
				}
			}), r.Decryptor = o, r), e.mode.CTR
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"Oy1Y": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			return e.mode.CTRGladman = function() {
				var r = e.lib.BlockCipherMode.extend();

				function o(e) {
					if(255 == (e >> 24 & 255)) {
						var r = e >> 16 & 255,
							o = e >> 8 & 255,
							t = 255 & e;
						255 === r ? (r = 0, 255 === o ? (o = 0, 255 === t ? t = 0 : ++t) : ++o) : ++r, e = 0, e += r << 16, e += o << 8, e += t
					} else e += 1 << 24;
					return e
				}
				var t = r.Encryptor = r.extend({
					processBlock: function(e, r) {
						var t = this._cipher,
							c = t.blockSize,
							i = this._iv,
							n = this._counter;
						i && (n = this._counter = i.slice(0), this._iv = void 0),
							function(e) {
								0 === (e[0] = o(e[0])) && (e[1] = o(e[1]))
							}(n);
						var u = n.slice(0);
						t.encryptBlock(u, 0);
						for(var p = 0; p < c; p++) e[r + p] ^= u[p]
					}
				});
				return r.Decryptor = t, r
			}(), e.mode.CTRGladman
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"/HXd": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			var r, o;
			return e.mode.OFB = (r = e.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
				processBlock: function(e, r) {
					var o = this._cipher,
						t = o.blockSize,
						i = this._iv,
						c = this._keystream;
					i && (c = this._keystream = i.slice(0), this._iv = void 0), o.encryptBlock(c, 0);
					for(var p = 0; p < t; p++) e[r + p] ^= c[p]
				}
			}), r.Decryptor = o, r), e.mode.OFB
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"QDS2": [function(require, module, exports) {
		var define;
		var e;
		! function(o, r, c) {
			"object" == typeof exports ? module.exports = exports = r(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], r) : r(o.CryptoJS)
		}(this, function(e) {
			var o;
			return e.mode.ECB = ((o = e.lib.BlockCipherMode.extend()).Encryptor = o.extend({
				processBlock: function(e, o) {
					this._cipher.encryptBlock(e, o)
				}
			}), o.Decryptor = o.extend({
				processBlock: function(e, o) {
					this._cipher.decryptBlock(e, o)
				}
			}), o), e.mode.ECB
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"1Hi7": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			return e.pad.AnsiX923 = {
				pad: function(e, r) {
					var o = e.sigBytes,
						t = 4 * r,
						i = t - o % t,
						s = o + i - 1;
					e.clamp(), e.words[s >>> 2] |= i << 24 - s % 4 * 8, e.sigBytes += i
				},
				unpad: function(e) {
					var r = 255 & e.words[e.sigBytes - 1 >>> 2];
					e.sigBytes -= r
				}
			}, e.pad.Ansix923
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"HttL": [function(require, module, exports) {
		var define;
		var r;
		! function(o, e, t) {
			"object" == typeof exports ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof r && r.amd ? r(["./core", "./cipher-core"], e) : e(o.CryptoJS)
		}(this, function(r) {
			return r.pad.Iso10126 = {
				pad: function(o, e) {
					var t = 4 * e,
						c = t - o.sigBytes % t;
					o.concat(r.lib.WordArray.random(c - 1)).concat(r.lib.WordArray.create([c << 24], 1))
				},
				unpad: function(r) {
					var o = 255 & r.words[r.sigBytes - 1 >>> 2];
					r.sigBytes -= o
				}
			}, r.pad.Iso10126
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"letQ": [function(require, module, exports) {
		var define;
		var e;
		! function(o, r, t) {
			"object" == typeof exports ? module.exports = exports = r(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], r) : r(o.CryptoJS)
		}(this, function(e) {
			return e.pad.Iso97971 = {
				pad: function(o, r) {
					o.concat(e.lib.WordArray.create([2147483648], 1)), e.pad.ZeroPadding.pad(o, r)
				},
				unpad: function(o) {
					e.pad.ZeroPadding.unpad(o), o.sigBytes--
				}
			}, e.pad.Iso97971
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"aieV": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			return e.pad.ZeroPadding = {
				pad: function(e, r) {
					var o = 4 * r;
					e.clamp(), e.sigBytes += o - (e.sigBytes % o || o)
				},
				unpad: function(e) {
					for(var r = e.words, o = e.sigBytes - 1; !(r[o >>> 2] >>> 24 - o % 4 * 8 & 255);) o--;
					e.sigBytes = o + 1
				}
			}, e.pad.ZeroPadding
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"GO8Y": [function(require, module, exports) {
		var define;
		var o;
		! function(e, r, n) {
			"object" == typeof exports ? module.exports = exports = r(require("./core"), require("./cipher-core")) : "function" == typeof o && o.amd ? o(["./core", "./cipher-core"], r) : r(e.CryptoJS)
		}(this, function(o) {
			return o.pad.NoPadding = {
				pad: function() {},
				unpad: function() {}
			}, o.pad.NoPadding
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"vtW7": [function(require, module, exports) {
		var define;
		var r;
		! function(e, t, o) {
			"object" == typeof exports ? module.exports = exports = t(require("./core"), require("./cipher-core")) : "function" == typeof r && r.amd ? r(["./core", "./cipher-core"], t) : t(e.CryptoJS)
		}(this, function(r) {
			var e, t, o;
			return t = (e = r).lib.CipherParams, o = e.enc.Hex, e.format.Hex = {
				stringify: function(r) {
					return r.ciphertext.toString(o)
				},
				parse: function(r) {
					var e = o.parse(r);
					return t.create({
						ciphertext: e
					})
				}
			}, r.format.Hex
		});
	}, {
		"./core": "eUTO",
		"./cipher-core": "uCLB"
	}],
	"Srb3": [function(require, module, exports) {
		var define;
		var e;
		! function(r, o, t) {
			"object" == typeof exports ? module.exports = exports = o(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS)
		}(this, function(e) {
			return function() {
				var r = e,
					o = r.lib.BlockCipher,
					t = r.algo,
					i = [],
					c = [],
					n = [],
					s = [],
					u = [],
					f = [],
					h = [],
					d = [],
					a = [],
					y = [];
				! function() {
					for(var e = [], r = 0; r < 256; r++) e[r] = r < 128 ? r << 1 : r << 1 ^ 283;
					var o = 0,
						t = 0;
					for(r = 0; r < 256; r++) {
						var p = t ^ t << 1 ^ t << 2 ^ t << 3 ^ t << 4;
						p = p >>> 8 ^ 255 & p ^ 99, i[o] = p, c[p] = o;
						var v = e[o],
							l = e[v],
							_ = e[l],
							k = 257 * e[p] ^ 16843008 * p;
						n[o] = k << 24 | k >>> 8, s[o] = k << 16 | k >>> 16, u[o] = k << 8 | k >>> 24, f[o] = k;
						k = 16843009 * _ ^ 65537 * l ^ 257 * v ^ 16843008 * o;
						h[p] = k << 24 | k >>> 8, d[p] = k << 16 | k >>> 16, a[p] = k << 8 | k >>> 24, y[p] = k, o ? (o = v ^ e[e[e[_ ^ v]]], t ^= e[e[t]]) : o = t = 1
					}
				}();
				var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
					v = t.AES = o.extend({
						_doReset: function() {
							if(!this._nRounds || this._keyPriorReset !== this._key) {
								for(var e = this._keyPriorReset = this._key, r = e.words, o = e.sigBytes / 4, t = 4 * ((this._nRounds = o + 6) + 1), c = this._keySchedule = [], n = 0; n < t; n++)
									if(n < o) c[n] = r[n];
									else {
										var s = c[n - 1];
										n % o ? o > 6 && n % o == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s], s ^= p[n / o | 0] << 24), c[n] = c[n - o] ^ s
									}
								for(var u = this._invKeySchedule = [], f = 0; f < t; f++) {
									n = t - f;
									if(f % 4) s = c[n];
									else s = c[n - 4];
									u[f] = f < 4 || n <= 4 ? s : h[i[s >>> 24]] ^ d[i[s >>> 16 & 255]] ^ a[i[s >>> 8 & 255]] ^ y[i[255 & s]]
								}
							}
						},
						encryptBlock: function(e, r) {
							this._doCryptBlock(e, r, this._keySchedule, n, s, u, f, i)
						},
						decryptBlock: function(e, r) {
							var o = e[r + 1];
							e[r + 1] = e[r + 3], e[r + 3] = o, this._doCryptBlock(e, r, this._invKeySchedule, h, d, a, y, c);
							o = e[r + 1];
							e[r + 1] = e[r + 3], e[r + 3] = o
						},
						_doCryptBlock: function(e, r, o, t, i, c, n, s) {
							for(var u = this._nRounds, f = e[r] ^ o[0], h = e[r + 1] ^ o[1], d = e[r + 2] ^ o[2], a = e[r + 3] ^ o[3], y = 4, p = 1; p < u; p++) {
								var v = t[f >>> 24] ^ i[h >>> 16 & 255] ^ c[d >>> 8 & 255] ^ n[255 & a] ^ o[y++],
									l = t[h >>> 24] ^ i[d >>> 16 & 255] ^ c[a >>> 8 & 255] ^ n[255 & f] ^ o[y++],
									_ = t[d >>> 24] ^ i[a >>> 16 & 255] ^ c[f >>> 8 & 255] ^ n[255 & h] ^ o[y++],
									k = t[a >>> 24] ^ i[f >>> 16 & 255] ^ c[h >>> 8 & 255] ^ n[255 & d] ^ o[y++];
								f = v, h = l, d = _, a = k
							}
							v = (s[f >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & a]) ^ o[y++], l = (s[h >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[255 & f]) ^ o[y++], _ = (s[d >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & h]) ^ o[y++], k = (s[a >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & d]) ^ o[y++];
							e[r] = v, e[r + 1] = l, e[r + 2] = _, e[r + 3] = k
						},
						keySize: 8
					});
				r.AES = o._createHelper(v)
			}(), e.AES
		});
	}, {
		"./core": "eUTO",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB"
	}],
	"ySCI": [function(require, module, exports) {
		var define;
		var e;
		! function(t, c, r) {
			"object" == typeof exports ? module.exports = exports = c(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], c) : c(t.CryptoJS)
		}(this, function(e) {
			return function() {
				var t = e,
					c = t.lib,
					r = c.WordArray,
					i = c.BlockCipher,
					o = t.algo,
					l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
					s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
					h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
					k = [{
						0: 8421888,
						268435456: 32768,
						536870912: 8421378,
						805306368: 2,
						1073741824: 512,
						1342177280: 8421890,
						1610612736: 8389122,
						1879048192: 8388608,
						2147483648: 514,
						2415919104: 8389120,
						2684354560: 33280,
						2952790016: 8421376,
						3221225472: 32770,
						3489660928: 8388610,
						3758096384: 0,
						4026531840: 33282,
						134217728: 0,
						402653184: 8421890,
						671088640: 33282,
						939524096: 32768,
						1207959552: 8421888,
						1476395008: 512,
						1744830464: 8421378,
						2013265920: 2,
						2281701376: 8389120,
						2550136832: 33280,
						2818572288: 8421376,
						3087007744: 8389122,
						3355443200: 8388610,
						3623878656: 32770,
						3892314112: 514,
						4160749568: 8388608,
						1: 32768,
						268435457: 2,
						536870913: 8421888,
						805306369: 8388608,
						1073741825: 8421378,
						1342177281: 33280,
						1610612737: 512,
						1879048193: 8389122,
						2147483649: 8421890,
						2415919105: 8421376,
						2684354561: 8388610,
						2952790017: 33282,
						3221225473: 514,
						3489660929: 8389120,
						3758096385: 32770,
						4026531841: 0,
						134217729: 8421890,
						402653185: 8421376,
						671088641: 8388608,
						939524097: 512,
						1207959553: 32768,
						1476395009: 8388610,
						1744830465: 2,
						2013265921: 33282,
						2281701377: 32770,
						2550136833: 8389122,
						2818572289: 514,
						3087007745: 8421888,
						3355443201: 8389120,
						3623878657: 0,
						3892314113: 33280,
						4160749569: 8421378
					}, {
						0: 1074282512,
						16777216: 16384,
						33554432: 524288,
						50331648: 1074266128,
						67108864: 1073741840,
						83886080: 1074282496,
						100663296: 1073758208,
						117440512: 16,
						134217728: 540672,
						150994944: 1073758224,
						167772160: 1073741824,
						184549376: 540688,
						201326592: 524304,
						218103808: 0,
						234881024: 16400,
						251658240: 1074266112,
						8388608: 1073758208,
						25165824: 540688,
						41943040: 16,
						58720256: 1073758224,
						75497472: 1074282512,
						92274688: 1073741824,
						109051904: 524288,
						125829120: 1074266128,
						142606336: 524304,
						159383552: 0,
						176160768: 16384,
						192937984: 1074266112,
						209715200: 1073741840,
						226492416: 540672,
						243269632: 1074282496,
						260046848: 16400,
						268435456: 0,
						285212672: 1074266128,
						301989888: 1073758224,
						318767104: 1074282496,
						335544320: 1074266112,
						352321536: 16,
						369098752: 540688,
						385875968: 16384,
						402653184: 16400,
						419430400: 524288,
						436207616: 524304,
						452984832: 1073741840,
						469762048: 540672,
						486539264: 1073758208,
						503316480: 1073741824,
						520093696: 1074282512,
						276824064: 540688,
						293601280: 524288,
						310378496: 1074266112,
						327155712: 16384,
						343932928: 1073758208,
						360710144: 1074282512,
						377487360: 16,
						394264576: 1073741824,
						411041792: 1074282496,
						427819008: 1073741840,
						444596224: 1073758224,
						461373440: 524304,
						478150656: 0,
						494927872: 16400,
						511705088: 1074266128,
						528482304: 540672
					}, {
						0: 260,
						1048576: 0,
						2097152: 67109120,
						3145728: 65796,
						4194304: 65540,
						5242880: 67108868,
						6291456: 67174660,
						7340032: 67174400,
						8388608: 67108864,
						9437184: 67174656,
						10485760: 65792,
						11534336: 67174404,
						12582912: 67109124,
						13631488: 65536,
						14680064: 4,
						15728640: 256,
						524288: 67174656,
						1572864: 67174404,
						2621440: 0,
						3670016: 67109120,
						4718592: 67108868,
						5767168: 65536,
						6815744: 65540,
						7864320: 260,
						8912896: 4,
						9961472: 256,
						11010048: 67174400,
						12058624: 65796,
						13107200: 65792,
						14155776: 67109124,
						15204352: 67174660,
						16252928: 67108864,
						16777216: 67174656,
						17825792: 65540,
						18874368: 65536,
						19922944: 67109120,
						20971520: 256,
						22020096: 67174660,
						23068672: 67108868,
						24117248: 0,
						25165824: 67109124,
						26214400: 67108864,
						27262976: 4,
						28311552: 65792,
						29360128: 67174400,
						30408704: 260,
						31457280: 65796,
						32505856: 67174404,
						17301504: 67108864,
						18350080: 260,
						19398656: 67174656,
						20447232: 0,
						21495808: 65540,
						22544384: 67109120,
						23592960: 256,
						24641536: 67174404,
						25690112: 65536,
						26738688: 67174660,
						27787264: 65796,
						28835840: 67108868,
						29884416: 67109124,
						30932992: 67174400,
						31981568: 4,
						33030144: 65792
					}, {
						0: 2151682048,
						65536: 2147487808,
						131072: 4198464,
						196608: 2151677952,
						262144: 0,
						327680: 4198400,
						393216: 2147483712,
						458752: 4194368,
						524288: 2147483648,
						589824: 4194304,
						655360: 64,
						720896: 2147487744,
						786432: 2151678016,
						851968: 4160,
						917504: 4096,
						983040: 2151682112,
						32768: 2147487808,
						98304: 64,
						163840: 2151678016,
						229376: 2147487744,
						294912: 4198400,
						360448: 2151682112,
						425984: 0,
						491520: 2151677952,
						557056: 4096,
						622592: 2151682048,
						688128: 4194304,
						753664: 4160,
						819200: 2147483648,
						884736: 4194368,
						950272: 4198464,
						1015808: 2147483712,
						1048576: 4194368,
						1114112: 4198400,
						1179648: 2147483712,
						1245184: 0,
						1310720: 4160,
						1376256: 2151678016,
						1441792: 2151682048,
						1507328: 2147487808,
						1572864: 2151682112,
						1638400: 2147483648,
						1703936: 2151677952,
						1769472: 4198464,
						1835008: 2147487744,
						1900544: 4194304,
						1966080: 64,
						2031616: 4096,
						1081344: 2151677952,
						1146880: 2151682112,
						1212416: 0,
						1277952: 4198400,
						1343488: 4194368,
						1409024: 2147483648,
						1474560: 2147487808,
						1540096: 64,
						1605632: 2147483712,
						1671168: 4096,
						1736704: 2147487744,
						1802240: 2151678016,
						1867776: 4160,
						1933312: 2151682048,
						1998848: 4194304,
						2064384: 4198464
					}, {
						0: 128,
						4096: 17039360,
						8192: 262144,
						12288: 536870912,
						16384: 537133184,
						20480: 16777344,
						24576: 553648256,
						28672: 262272,
						32768: 16777216,
						36864: 537133056,
						40960: 536871040,
						45056: 553910400,
						49152: 553910272,
						53248: 0,
						57344: 17039488,
						61440: 553648128,
						2048: 17039488,
						6144: 553648256,
						10240: 128,
						14336: 17039360,
						18432: 262144,
						22528: 537133184,
						26624: 553910272,
						30720: 536870912,
						34816: 537133056,
						38912: 0,
						43008: 553910400,
						47104: 16777344,
						51200: 536871040,
						55296: 553648128,
						59392: 16777216,
						63488: 262272,
						65536: 262144,
						69632: 128,
						73728: 536870912,
						77824: 553648256,
						81920: 16777344,
						86016: 553910272,
						90112: 537133184,
						94208: 16777216,
						98304: 553910400,
						102400: 553648128,
						106496: 17039360,
						110592: 537133056,
						114688: 262272,
						118784: 536871040,
						122880: 0,
						126976: 17039488,
						67584: 553648256,
						71680: 16777216,
						75776: 17039360,
						79872: 537133184,
						83968: 536870912,
						88064: 17039488,
						92160: 128,
						96256: 553910272,
						100352: 262272,
						104448: 553910400,
						108544: 0,
						112640: 553648128,
						116736: 16777344,
						120832: 262144,
						124928: 537133056,
						129024: 536871040
					}, {
						0: 268435464,
						256: 8192,
						512: 270532608,
						768: 270540808,
						1024: 268443648,
						1280: 2097152,
						1536: 2097160,
						1792: 268435456,
						2048: 0,
						2304: 268443656,
						2560: 2105344,
						2816: 8,
						3072: 270532616,
						3328: 2105352,
						3584: 8200,
						3840: 270540800,
						128: 270532608,
						384: 270540808,
						640: 8,
						896: 2097152,
						1152: 2105352,
						1408: 268435464,
						1664: 268443648,
						1920: 8200,
						2176: 2097160,
						2432: 8192,
						2688: 268443656,
						2944: 270532616,
						3200: 0,
						3456: 270540800,
						3712: 2105344,
						3968: 268435456,
						4096: 268443648,
						4352: 270532616,
						4608: 270540808,
						4864: 8200,
						5120: 2097152,
						5376: 268435456,
						5632: 268435464,
						5888: 2105344,
						6144: 2105352,
						6400: 0,
						6656: 8,
						6912: 270532608,
						7168: 8192,
						7424: 268443656,
						7680: 270540800,
						7936: 2097160,
						4224: 8,
						4480: 2105344,
						4736: 2097152,
						4992: 268435464,
						5248: 268443648,
						5504: 8200,
						5760: 270540808,
						6016: 270532608,
						6272: 270540800,
						6528: 270532616,
						6784: 8192,
						7040: 2105352,
						7296: 2097160,
						7552: 0,
						7808: 268435456,
						8064: 268443656
					}, {
						0: 1048576,
						16: 33555457,
						32: 1024,
						48: 1049601,
						64: 34604033,
						80: 0,
						96: 1,
						112: 34603009,
						128: 33555456,
						144: 1048577,
						160: 33554433,
						176: 34604032,
						192: 34603008,
						208: 1025,
						224: 1049600,
						240: 33554432,
						8: 34603009,
						24: 0,
						40: 33555457,
						56: 34604032,
						72: 1048576,
						88: 33554433,
						104: 33554432,
						120: 1025,
						136: 1049601,
						152: 33555456,
						168: 34603008,
						184: 1048577,
						200: 1024,
						216: 34604033,
						232: 1,
						248: 1049600,
						256: 33554432,
						272: 1048576,
						288: 33555457,
						304: 34603009,
						320: 1048577,
						336: 33555456,
						352: 34604032,
						368: 1049601,
						384: 1025,
						400: 34604033,
						416: 1049600,
						432: 1,
						448: 0,
						464: 34603008,
						480: 33554433,
						496: 1024,
						264: 1049600,
						280: 33555457,
						296: 34603009,
						312: 1,
						328: 33554432,
						344: 1048576,
						360: 1025,
						376: 34604032,
						392: 33554433,
						408: 34603008,
						424: 0,
						440: 34604033,
						456: 1049601,
						472: 1024,
						488: 33555456,
						504: 1048577
					}, {
						0: 134219808,
						1: 131072,
						2: 134217728,
						3: 32,
						4: 131104,
						5: 134350880,
						6: 134350848,
						7: 2048,
						8: 134348800,
						9: 134219776,
						10: 133120,
						11: 134348832,
						12: 2080,
						13: 0,
						14: 134217760,
						15: 133152,
						2147483648: 2048,
						2147483649: 134350880,
						2147483650: 134219808,
						2147483651: 134217728,
						2147483652: 134348800,
						2147483653: 133120,
						2147483654: 133152,
						2147483655: 32,
						2147483656: 134217760,
						2147483657: 2080,
						2147483658: 131104,
						2147483659: 134350848,
						2147483660: 0,
						2147483661: 134348832,
						2147483662: 134219776,
						2147483663: 131072,
						16: 133152,
						17: 134350848,
						18: 32,
						19: 2048,
						20: 134219776,
						21: 134217760,
						22: 134348832,
						23: 131072,
						24: 0,
						25: 131104,
						26: 134348800,
						27: 134219808,
						28: 134350880,
						29: 133120,
						30: 2080,
						31: 134217728,
						2147483664: 131072,
						2147483665: 2048,
						2147483666: 134348832,
						2147483667: 133152,
						2147483668: 32,
						2147483669: 134348800,
						2147483670: 134217728,
						2147483671: 134219808,
						2147483672: 134350880,
						2147483673: 134217760,
						2147483674: 134219776,
						2147483675: 0,
						2147483676: 133120,
						2147483677: 2080,
						2147483678: 131104,
						2147483679: 134350848
					}],
					_ = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
					n = o.DES = i.extend({
						_doReset: function() {
							for(var e = this._key.words, t = [], c = 0; c < 56; c++) {
								var r = l[c] - 1;
								t[c] = e[r >>> 5] >>> 31 - r % 32 & 1
							}
							for(var i = this._subKeys = [], o = 0; o < 16; o++) {
								var k = i[o] = [],
									_ = h[o];
								for(c = 0; c < 24; c++) k[c / 6 | 0] |= t[(s[c] - 1 + _) % 28] << 31 - c % 6, k[4 + (c / 6 | 0)] |= t[28 + (s[c + 24] - 1 + _) % 28] << 31 - c % 6;
								k[0] = k[0] << 1 | k[0] >>> 31;
								for(c = 1; c < 7; c++) k[c] = k[c] >>> 4 * (c - 1) + 3;
								k[7] = k[7] << 5 | k[7] >>> 27
							}
							var n = this._invSubKeys = [];
							for(c = 0; c < 16; c++) n[c] = i[15 - c]
						},
						encryptBlock: function(e, t) {
							this._doCryptBlock(e, t, this._subKeys)
						},
						decryptBlock: function(e, t) {
							this._doCryptBlock(e, t, this._invSubKeys)
						},
						_doCryptBlock: function(e, t, c) {
							this._lBlock = e[t], this._rBlock = e[t + 1], a.call(this, 4, 252645135), a.call(this, 16, 65535), B.call(this, 2, 858993459), B.call(this, 8, 16711935), a.call(this, 1, 1431655765);
							for(var r = 0; r < 16; r++) {
								for(var i = c[r], o = this._lBlock, l = this._rBlock, s = 0, h = 0; h < 8; h++) s |= k[h][((l ^ i[h]) & _[h]) >>> 0];
								this._lBlock = l, this._rBlock = o ^ s
							}
							var n = this._lBlock;
							this._lBlock = this._rBlock, this._rBlock = n, a.call(this, 1, 1431655765), B.call(this, 8, 16711935), B.call(this, 2, 858993459), a.call(this, 16, 65535), a.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock
						},
						keySize: 2,
						ivSize: 2,
						blockSize: 2
					});

				function a(e, t) {
					var c = (this._lBlock >>> e ^ this._rBlock) & t;
					this._rBlock ^= c, this._lBlock ^= c << e
				}

				function B(e, t) {
					var c = (this._rBlock >>> e ^ this._lBlock) & t;
					this._lBlock ^= c, this._rBlock ^= c << e
				}
				t.DES = i._createHelper(n);
				var p = o.TripleDES = i.extend({
					_doReset: function() {
						var e = this._key.words;
						this._des1 = n.createEncryptor(r.create(e.slice(0, 2))), this._des2 = n.createEncryptor(r.create(e.slice(2, 4))), this._des3 = n.createEncryptor(r.create(e.slice(4, 6)))
					},
					encryptBlock: function(e, t) {
						this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t)
					},
					decryptBlock: function(e, t) {
						this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t)
					},
					keySize: 6,
					ivSize: 2,
					blockSize: 2
				});
				t.TripleDES = i._createHelper(p)
			}(), e.TripleDES
		});
	}, {
		"./core": "eUTO",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB"
	}],
	"6pOM": [function(require, module, exports) {
		var define;
		var e;
		! function(r, t, i) {
			"object" == typeof exports ? module.exports = exports = t(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], t) : t(r.CryptoJS)
		}(this, function(e) {
			return function() {
				var r = e,
					t = r.lib.StreamCipher,
					i = r.algo,
					o = i.RC4 = t.extend({
						_doReset: function() {
							for(var e = this._key, r = e.words, t = e.sigBytes, i = this._S = [], o = 0; o < 256; o++) i[o] = o;
							o = 0;
							for(var c = 0; o < 256; o++) {
								var s = o % t,
									n = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
								c = (c + i[o] + n) % 256;
								var a = i[o];
								i[o] = i[c], i[c] = a
							}
							this._i = this._j = 0
						},
						_doProcessBlock: function(e, r) {
							e[r] ^= c.call(this)
						},
						keySize: 8,
						ivSize: 0
					});

				function c() {
					for(var e = this._S, r = this._i, t = this._j, i = 0, o = 0; o < 4; o++) {
						t = (t + e[r = (r + 1) % 256]) % 256;
						var c = e[r];
						e[r] = e[t], e[t] = c, i |= e[(e[r] + e[t]) % 256] << 24 - 8 * o
					}
					return this._i = r, this._j = t, i
				}
				r.RC4 = t._createHelper(o);
				var s = i.RC4Drop = o.extend({
					cfg: o.cfg.extend({
						drop: 192
					}),
					_doReset: function() {
						o._doReset.call(this);
						for(var e = this.cfg.drop; e > 0; e--) c.call(this)
					}
				});
				r.RC4Drop = t._createHelper(s)
			}(), e.RC4
		});
	}, {
		"./core": "eUTO",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB"
	}],
	"f+1H": [function(require, module, exports) {
		var define;
		var r;
		! function(e, i, t) {
			"object" == typeof exports ? module.exports = exports = i(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof r && r.amd ? r(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], i) : i(e.CryptoJS)
		}(this, function(r) {
			return function() {
				var e = r,
					i = e.lib.StreamCipher,
					t = e.algo,
					o = [],
					c = [],
					s = [],
					a = t.Rabbit = i.extend({
						_doReset: function() {
							for(var r = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++) r[i] = 16711935 & (r[i] << 8 | r[i] >>> 24) | 4278255360 & (r[i] << 24 | r[i] >>> 8);
							var t = this._X = [r[0], r[3] << 16 | r[2] >>> 16, r[1], r[0] << 16 | r[3] >>> 16, r[2], r[1] << 16 | r[0] >>> 16, r[3], r[2] << 16 | r[1] >>> 16],
								o = this._C = [r[2] << 16 | r[2] >>> 16, 4294901760 & r[0] | 65535 & r[1], r[3] << 16 | r[3] >>> 16, 4294901760 & r[1] | 65535 & r[2], r[0] << 16 | r[0] >>> 16, 4294901760 & r[2] | 65535 & r[3], r[1] << 16 | r[1] >>> 16, 4294901760 & r[3] | 65535 & r[0]];
							this._b = 0;
							for(i = 0; i < 4; i++) f.call(this);
							for(i = 0; i < 8; i++) o[i] ^= t[i + 4 & 7];
							if(e) {
								var c = e.words,
									s = c[0],
									a = c[1],
									n = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
									h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
									b = n >>> 16 | 4294901760 & h,
									u = h << 16 | 65535 & n;
								o[0] ^= n, o[1] ^= b, o[2] ^= h, o[3] ^= u, o[4] ^= n, o[5] ^= b, o[6] ^= h, o[7] ^= u;
								for(i = 0; i < 4; i++) f.call(this)
							}
						},
						_doProcessBlock: function(r, e) {
							var i = this._X;
							f.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
							for(var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8), r[e + t] ^= o[t]
						},
						blockSize: 4,
						ivSize: 2
					});

				function f() {
					for(var r = this._X, e = this._C, i = 0; i < 8; i++) c[i] = e[i];
					e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
					for(i = 0; i < 8; i++) {
						var t = r[i] + e[i],
							o = 65535 & t,
							a = t >>> 16,
							f = ((o * o >>> 17) + o * a >>> 15) + a * a,
							n = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
						s[i] = f ^ n
					}
					r[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, r[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, r[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, r[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, r[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, r[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, r[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, r[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
				}
				e.Rabbit = i._createHelper(a)
			}(), r.Rabbit
		});
	}, {
		"./core": "eUTO",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB"
	}],
	"vtgx": [function(require, module, exports) {
		var define;
		var e;
		! function(r, i, t) {
			"object" == typeof exports ? module.exports = exports = i(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof e && e.amd ? e(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], i) : i(r.CryptoJS)
		}(this, function(e) {
			return function() {
				var r = e,
					i = r.lib.StreamCipher,
					t = r.algo,
					o = [],
					c = [],
					a = [],
					s = t.RabbitLegacy = i.extend({
						_doReset: function() {
							var e = this._key.words,
								r = this.cfg.iv,
								i = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
								t = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
							this._b = 0;
							for(var o = 0; o < 4; o++) f.call(this);
							for(o = 0; o < 8; o++) t[o] ^= i[o + 4 & 7];
							if(r) {
								var c = r.words,
									a = c[0],
									s = c[1],
									n = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
									h = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
									b = n >>> 16 | 4294901760 & h,
									u = h << 16 | 65535 & n;
								t[0] ^= n, t[1] ^= b, t[2] ^= h, t[3] ^= u, t[4] ^= n, t[5] ^= b, t[6] ^= h, t[7] ^= u;
								for(o = 0; o < 4; o++) f.call(this)
							}
						},
						_doProcessBlock: function(e, r) {
							var i = this._X;
							f.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
							for(var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8), e[r + t] ^= o[t]
						},
						blockSize: 4,
						ivSize: 2
					});

				function f() {
					for(var e = this._X, r = this._C, i = 0; i < 8; i++) c[i] = r[i];
					r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
					for(i = 0; i < 8; i++) {
						var t = e[i] + r[i],
							o = 65535 & t,
							s = t >>> 16,
							f = ((o * o >>> 17) + o * s >>> 15) + s * s,
							n = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
						a[i] = f ^ n
					}
					e[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, e[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, e[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, e[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, e[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, e[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, e[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, e[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0
				}
				r.RabbitLegacy = i._createHelper(s)
			}(), e.RabbitLegacy
		});
	}, {
		"./core": "eUTO",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB"
	}],
	"M4F+": [function(require, module, exports) {
		var define;
		var e;
		! function(r, i, a) {
			"object" == typeof exports ? module.exports = exports = i(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy")) : "function" == typeof e && e.amd ? e(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], i) : r.CryptoJS = i(r.CryptoJS)
		}(this, function(e) {
			return e
		});
	}, {
		"./core": "eUTO",
		"./x64-core": "M95N",
		"./lib-typedarrays": "X5QY",
		"./enc-utf16": "0xZK",
		"./enc-base64": "/pJa",
		"./md5": "GVDV",
		"./sha1": "yxyM",
		"./sha256": "MS2N",
		"./sha224": "OEnX",
		"./sha512": "xA62",
		"./sha384": "YkB8",
		"./sha3": "F6e3",
		"./ripemd160": "Y8c+",
		"./hmac": "IKo8",
		"./pbkdf2": "/NfQ",
		"./evpkdf": "W9aa",
		"./cipher-core": "uCLB",
		"./mode-cfb": "dnNm",
		"./mode-ctr": "iAFA",
		"./mode-ctr-gladman": "Oy1Y",
		"./mode-ofb": "/HXd",
		"./mode-ecb": "QDS2",
		"./pad-ansix923": "1Hi7",
		"./pad-iso10126": "HttL",
		"./pad-iso97971": "letQ",
		"./pad-zeropadding": "aieV",
		"./pad-nopadding": "GO8Y",
		"./format-hex": "vtW7",
		"./aes": "Srb3",
		"./tripledes": "ySCI",
		"./rc4": "6pOM",
		"./rabbit": "f+1H",
		"./rabbit-legacy": "vtgx"
	}],
	"KTph": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = i(require("crypto-js")),
			t = i(require("./utils"));

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var o = function e(t, i) {
			return !this instanceof e ? new e(t) : (this._msg = {}, "function" == typeof e[t] && (e[t].prototype.setGroup = this.setGroup, this._msg = new e[t](i)), this._msg)
		};
		o.prototype.setGroup = function(e) {
			this.body.group = e
		}, o.read = function(e) {
			this.id = e, this.type = "read"
		}, o.read.prototype.set = function(e) {
			this.body = {
				id: this.id,
				type: this.type,
				ackId: e.id,
				to: e.to
			}
		}, o.delivery = function(e) {
			this.id = e, this.type = "delivery"
		}, o.delivery.prototype.set = function(e) {
			this.body = {
				id: this.id,
				type: this.type,
				bodyId: e.bodyId,
				to: e.to
			}
		}, o.txt = function(e) {
			this.id = e, this.type = "txt", this.body = {}
		}, o.txt.prototype.set = function(e) {
			this.value = e.msg, this.body = {
				id: this.id,
				to: e.to,
				msg: this.value,
				type: this.type,
				roomType: e.roomType,
				ext: e.ext || {},
				success: e.success,
				fail: e.fail
			}, !e.roomType && delete this.body.roomType
		}, o.cmd = function(e) {
			this.id = e, this.type = "cmd", this.body = {}
		}, o.cmd.prototype.set = function(e) {
			this.value = "", this.body = {
				to: e.to,
				action: e.action,
				msg: this.value,
				type: this.type,
				roomType: e.roomType,
				ext: e.ext || {},
				success: e.success
			}, !e.roomType && delete this.body.roomType
		}, o.location = function(e) {
			this.id = e, this.type = "loc", this.body = {}
		}, o.location.prototype.set = function(e) {
			this.body = {
				to: e.to,
				type: this.type,
				roomType: e.roomType,
				addr: e.addr,
				lat: e.lat,
				lng: e.lng,
				ext: e.ext || {}
			}
		}, o.img = function(e) {
			this.id = e, this.type = "img", this.body = {}
		}, o.img.prototype.set = function(e) {
			e.file = e.file || t.default.getFileUrl(e.fileInputId), this.value = e.file, this.body = {
				id: this.id,
				file: this.value,
				apiUrl: e.apiUrl,
				to: e.to,
				type: this.type,
				ext: e.ext || {},
				roomType: e.roomType,
				onFileUploadError: e.onFileUploadError,
				onFileUploadComplete: e.onFileUploadComplete,
				success: e.success,
				fail: e.fail,
				flashUpload: e.flashUpload,
				width: e.width,
				height: e.height,
				body: e.body,
				uploadError: e.uploadError,
				uploadComplete: e.uploadComplete
			}, !e.roomType && delete this.body.roomType
		}, o.audio = function(e) {
			this.id = e, this.type = "audio", this.body = {}
		}, o.audio.prototype.set = function(e) {
			e.file = e.file || t.default.getFileUrl(e.fileInputId), this.value = e.file, this.filename = e.filename || this.value.filename, this.body = {
				id: this.id,
				file: this.value,
				filename: this.filename,
				apiUrl: e.apiUrl,
				to: e.to,
				type: this.type,
				ext: e.ext || {},
				length: e.length || 0,
				roomType: e.roomType,
				file_length: e.file_length,
				onFileUploadError: e.onFileUploadError,
				onFileUploadComplete: e.onFileUploadComplete,
				success: e.success,
				fail: e.fail,
				flashUpload: e.flashUpload,
				body: e.body
			}, !e.roomType && delete this.body.roomType
		}, o.file = function(e) {
			this.id = e, this.type = "file", this.body = {}
		}, o.file.prototype.set = function(e) {
			e.file = e.file || t.default.getFileUrl(e.fileInputId), this.value = e.file, this.filename = e.filename || this.value.filename, this.body = {
				id: this.id,
				file: this.value,
				filename: this.filename,
				apiUrl: e.apiUrl,
				to: e.to,
				type: this.type,
				ext: e.ext || {},
				roomType: e.roomType,
				onFileUploadError: e.onFileUploadError,
				onFileUploadComplete: e.onFileUploadComplete,
				success: e.success,
				fail: e.fail,
				flashUpload: e.flashUpload,
				body: e.body
			}, !e.roomType && delete this.body.roomType
		}, o.video = function(e) {
			this.id = e, this.type = "video", this.body = {}
		}, o.video.prototype.set = function(e) {
			e.file = e.file || t.default.getFileUrl(e.fileInputId), this.value = e.file, this.filename = e.filename || this.value.filename, this.body = {
				id: this.id,
				file: this.value,
				filename: this.filename,
				apiUrl: e.apiUrl,
				to: e.to,
				type: this.type,
				ext: e.ext || {},
				length: e.length || 0,
				roomType: e.roomType,
				file_length: e.file_length,
				onFileUploadError: e.onFileUploadError,
				onFileUploadComplete: e.onFileUploadComplete,
				success: e.success,
				fail: e.fail,
				flashUpload: e.flashUpload,
				body: e.body
			}, !e.roomType && delete this.body.roomType
		};
		var s = function e(t) {
			if(!this instanceof e) return new e(t, conn);
			this.msg = t
		};
		s.prototype.send = function(e) {
			var i = this,
				o = function(i) {
					var o;
					i.ext = i.ext || {}, i.ext.weichat = i.ext.weichat || {}, i.ext.weichat.originType = i.ext.weichat.originType || "webim";
					var s = {
							from: e.context.userId || "",
							to: i.to,
							bodies: [i.body],
							ext: i.ext || {}
						},
						l = t.default.stringify(s);
					if(o = $msg({
							type: i.group || "chat",
							to: i.toJid,
							id: i.id,
							xmlns: "jabber:client"
						}).c("body").t(l), i.roomType && o.up().c("roomtype", {
							xmlns: "easemob:x:roomtype",
							type: "chatroom"
						}), i.bodyId) {
						o = $msg({
							from: e.context.jid || "",
							to: i.toJid,
							id: i.id,
							xmlns: "jabber:client"
						}).c("body").t(i.bodyId);
						var d = {
							xmlns: "urn:xmpp:receipts",
							id: i.bodyId
						};
						o.up().c("delivery", d)
					}
					if(i.ackId) {
						if(e.context.jid.indexOf(i.toJid) >= 0) return;
						o = $msg({
							from: e.context.jid || "",
							to: i.toJid,
							id: i.id,
							xmlns: "jabber:client"
						}).c("body").t(i.ackId);
						var n = {
							xmlns: "urn:xmpp:receipts",
							id: i.ackId
						};
						o.up().c("acked", n)
					}
					setTimeout(function() {
						"undefined" != typeof _msgHash && _msgHash[i.id] && _msgHash[i.id].msg.fail instanceof Function && _msgHash[i.id].msg.fail(i.id)
					}, 6e4), e.sendCommand(o.tree(), i.id)
				};
			if(i.msg.file) {
				if(i.msg.body && i.msg.body.url) return void o(i.msg);
				var s = i.msg.onFileUploadComplete;
				i.msg.onFileUploadComplete = function(t) {
					if(t.entities[0]["file-metadata"]) {
						var l = t.entities[0]["file-metadata"]["content-length"];
						i.msg.filetype = t.entities[0]["file-metadata"]["content-type"], l > 204800 && (i.msg.thumbnail = !0)
					}
					i.msg.body = {
						type: i.msg.type || "file",
						url: ("https:" != location.protocol && e.isHttpDNS ? e.apiUrl + t.uri.substr(t.uri.indexOf("/", 9)) : t.uri) + "/" + t.entities[0].uuid,
						secret: t.entities[0]["share-secret"],
						filename: i.msg.file.filename || i.msg.filename,
						size: {
							width: i.msg.width || 0,
							height: i.msg.height || 0
						},
						length: i.msg.length || 0,
						file_length: i.msg.ext.file_length || 0,
						filetype: i.msg.filetype
					}, o(i.msg), s instanceof Function && s(t, i.msg.id)
				}, t.default.uploadFile.call(e, i.msg)
			} else i.msg.body = {
				type: "chat" === i.msg.type ? "txt" : i.msg.type,
				msg: i.msg.msg
			}, "cmd" === i.msg.type ? i.msg.body.action = i.msg.action : "loc" === i.msg.type && (i.msg.body.addr = i.msg.addr, i.msg.body.lat = i.msg.lat, i.msg.body.lng = i.msg.lng), o(i.msg)
		};
		var l = {
				_msg: s,
				message: o
			},
			d = l;
		exports.default = d;
	}, {
		"crypto-js": "M4F+",
		"./utils": "K0yk"
	}],
	"RCHR": [function(require, module, exports) {
		"use strict";

		function t(t) {
			this.array = void 0 === t ? [] : new Array(t)
		}
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0, t.prototype = {
			length: function() {
				return this.array.length
			},
			at: function(t) {
				return this.array[t]
			},
			set: function(t, r) {
				this.array[t] = r
			},
			push: function(t) {
				return this.array.push(t)
			},
			slice: function(t, r) {
				return this.array = this.array.slice(t, r)
			},
			concat: function(t) {
				this.array = this.array.concat(t)
			},
			remove: function(t, r) {
				r = void 0 === r ? 1 : r, this.array.splice(t, r)
			},
			join: function(t) {
				return this.array.join(t)
			},
			clear: function() {
				this.array.length = 0
			}
		};
		var r = function() {
			this._array_h = new t
		};
		r.prototype = {
			_index: 0,
			push: function(t) {
				this._array_h.push(t)
			},
			pop: function() {
				var t = null;
				return this._array_h.length() && (t = this._array_h.at(this._index), 2 * ++this._index >= this._array_h.length() && (this._array_h.slice(this._index), this._index = 0)), t
			},
			head: function() {
				var t = null,
					r = this._array_h.length();
				return r && (t = this._array_h.at(r - 1)), t
			},
			tail: function() {
				var t = null;
				return this._array_h.length() && (t = this._array_h.at(this._index)), t
			},
			length: function() {
				return this._array_h.length() - this._index
			},
			empty: function() {
				return 0 === this._array_h.length()
			},
			clear: function() {
				this._array_h.clear()
			}
		};
		var n = r;
		exports.default = n;
	}, {}],
	"Aofe": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = o(require("../utils"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var t = function(e, o) {
				var t = [],
					a = o.context.root.lookup("easemob.pb.MessageBody.Content").decode(t);
				switch(e.type) {
					case "txt":
						a.type = 0, a.text = e.msg;
						break;
					case "img":
						a.type = 1, a.displayName = e.body.filename, a.remotePath = e.body.url, a.secretKey = e.body.secret, a.fileLength = e.body.file_length, a.size = e.body.size, a.thumbnailDisplayName = e.body.filename;
						break;
					case "audio":
						a.type = 2, a.displayName = e.body.filename, a.remotePath = e.body.url, a.secretKey = e.body.secret, a.fileLength = e.body.file_length, a.duration = e.body.length, a.thumbnailDisplayName = e.body.filename;
						break;
					case "loc":
						a.type = 3, a.latitude = e.lat, a.longitude = e.lng, a.address = e.addr, a.latitude = e.lat;
						break;
					case "video":
						a.type = 4, a.displayName = e.body.filename, a.remotePath = e.body.url, a.secretKey = e.body.secret, a.fileLength = e.body.file_length, a.duration = e.body.length, a.size = e.body.size, a.thumbnailDisplayName = e.body.filename;
						break;
					case "file":
						a.type = 5, a.displayName = e.body.filename, a.remotePath = e.body.url, a.secretKey = e.body.secret, a.fileLength = e.body.file_length, a.size = e.body.size, a.thumbnailDisplayName = e.body.filename;
						break;
					case "cmd":
						a.type = 6, a.action = e.action
				}
				var n = o.context.root.lookup("easemob.pb.MessageBody"),
					i = n.decode(t);
				"recall" === e.type ? (i.type = 6, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}, i.ackMessageId = e.ackId) : "delivery" === e.type ? (i.type = 5, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}, i.ackMessageId = e.ackId) : "read" === e.type ? (i.type = 4, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}, i.ackMessageId = e.ackId) : e.group || e.roomType ? "groupchat" !== e.group || e.roomType ? "groupchat" === e.group && e.roomType && (i.type = 3, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}) : (i.type = 2, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}) : (i.type = 1, i.from = {
					name: o.context.jid.name
				}, i.to = {
					name: e.to
				}), i.contents = [a], i.ext = e.ext, i = n.encode(i).finish();
				var m = o.context.root.lookup("easemob.pb.Meta").decode(t);
				m.id = e.id, "recall" === e.type ? (m.from = o.context.jid, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "easemob.com"
				}) : "delivery" === e.type ? (m.from = o.context.jid, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "easemob.com"
				}) : "read" === e.type ? (m.from = o.context.jid, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "easemob.com"
				}) : e.group || e.roomType ? "groupchat" !== e.group || e.roomType ? "groupchat" === e.group && e.roomType && (m.from = {
					appKey: o.appKey,
					name: o.user,
					domain: "conference.easemob.com"
				}, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "conference.easemob.com"
				}) : (m.from = {
					appKey: o.appKey,
					name: o.user,
					domain: "conference.easemob.com"
				}, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "conference.easemob.com"
				}) : (m.from = o.context.jid, m.to = {
					appKey: o.appKey,
					name: e.to,
					domain: "easemob.com"
				}), m.ns = 1, m.payload = i;
				var d = o.context.root.lookup("easemob.pb.CommSyncUL"),
					p = d.decode(t);
				p.meta = m, p = d.encode(p).finish();
				var s = o.context.root.lookup("easemob.pb.MSync"),
					r = s.decode(t);
				r.version = o.version, r.encryptType = o.encryptType, r.command = 0, r.guid = o.context.jid, r.payload = p, r = s.encode(r).finish(), o.sendMSync(r)
			},
			a = function(o, a) {
				var n = a || this;
				if(n.msg = o, o.file) {
					if(n.msg.body && n.msg.body.url) return void t(n.msg, a);
					var i = n.msg.onFileUploadComplete;
					n.msg.onFileUploadComplete = function(e) {
						if(e.entities[0]["file-metadata"]) {
							var o = e.entities[0]["file-metadata"]["content-length"];
							n.msg.filetype = e.entities[0]["file-metadata"]["content-type"], o > 204800 && (n.msg.thumbnail = !0)
						}
						n.msg.body = {
							type: n.msg.type || "file",
							url: ("https:" != location.protocol && a.isHttpDNS ? a.apiUrl + e.uri.substr(e.uri.indexOf("/", 9)) : e.uri) + "/" + e.entities[0].uuid,
							secret: e.entities[0]["share-secret"],
							filename: n.msg.file.filename || n.msg.filename,
							size: {
								width: n.msg.width || 0,
								height: n.msg.height || 0
							},
							length: n.msg.length || 0,
							file_length: n.msg.ext.file_length || 0,
							filetype: n.msg.filetype || n.msg.file.filetype
						}, t(n.msg, a), i instanceof Function && i(e, n.msg.id)
					}, e.default.uploadFile.call(a, n.msg)
				} else t(n.msg, a)
			},
			n = a;
		exports.default = n;
	}, {
		"../utils": "K0yk"
	}],
	"YA3p": [function(require, module, exports) {
		module.exports = t;
		var i = null;
		try {
			i = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
		} catch(L) {}

		function t(i, t, n) {
			this.low = 0 | i, this.high = 0 | t, this.unsigned = !!n
		}

		function n(i) {
			return !0 === (i && i.__isLong__)
		}
		t.prototype.__isLong__, Object.defineProperty(t.prototype, "__isLong__", {
			value: !0
		}), t.isLong = n;
		var h = {},
			s = {};

		function e(i, t) {
			var n, e, r;
			return t ? (r = 0 <= (i >>>= 0) && i < 256) && (e = s[i]) ? e : (n = u(i, (0 | i) < 0 ? -1 : 0, !0), r && (s[i] = n), n) : (r = -128 <= (i |= 0) && i < 128) && (e = h[i]) ? e : (n = u(i, i < 0 ? -1 : 0, !1), r && (h[i] = n), n)
		}

		function r(i, t) {
			if(isNaN(i)) return t ? N : m;
			if(t) {
				if(i < 0) return N;
				if(i >= c) return p
			} else {
				if(i <= -w) return _;
				if(i + 1 >= w) return q
			}
			return i < 0 ? r(-i, t).neg() : u(i % d | 0, i / d | 0, t)
		}

		function u(i, n, h) {
			return new t(i, n, h)
		}
		t.fromInt = e, t.fromNumber = r, t.fromBits = u;
		var o = Math.pow;

		function g(i, t, n) {
			if(0 === i.length) throw Error("empty string");
			if("NaN" === i || "Infinity" === i || "+Infinity" === i || "-Infinity" === i) return m;
			if("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
			var h;
			if((h = i.indexOf("-")) > 0) throw Error("interior hyphen");
			if(0 === h) return g(i.substring(1), t, n).neg();
			for(var s = r(o(n, 8)), e = m, u = 0; u < i.length; u += 8) {
				var f = Math.min(8, i.length - u),
					l = parseInt(i.substring(u, u + f), n);
				if(f < 8) {
					var a = r(o(n, f));
					e = e.mul(a).add(r(l))
				} else e = (e = e.mul(s)).add(r(l))
			}
			return e.unsigned = t, e
		}

		function f(i, t) {
			return "number" == typeof i ? r(i, t) : "string" == typeof i ? g(i, t) : u(i.low, i.high, "boolean" == typeof t ? t : i.unsigned)
		}
		t.fromString = g, t.fromValue = f;
		var l = 65536,
			a = 1 << 24,
			d = l * l,
			c = d * d,
			w = c / 2,
			v = e(a),
			m = e(0);
		t.ZERO = m;
		var N = e(0, !0);
		t.UZERO = N;
		var E = e(1);
		t.ONE = E;
		var y = e(1, !0);
		t.UONE = y;
		var b = e(-1);
		t.NEG_ONE = b;
		var q = u(-1, 2147483647, !1);
		t.MAX_VALUE = q;
		var p = u(-1, -1, !0);
		t.MAX_UNSIGNED_VALUE = p;
		var _ = u(0, -2147483648, !1);
		t.MIN_VALUE = _;
		var B = t.prototype;
		B.toInt = function() {
			return this.unsigned ? this.low >>> 0 : this.low
		}, B.toNumber = function() {
			return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0)
		}, B.toString = function(i) {
			if((i = i || 10) < 2 || 36 < i) throw RangeError("radix");
			if(this.isZero()) return "0";
			if(this.isNegative()) {
				if(this.eq(_)) {
					var t = r(i),
						n = this.div(t),
						h = n.mul(t).sub(this);
					return n.toString(i) + h.toInt().toString(i)
				}
				return "-" + this.neg().toString(i)
			}
			for(var s = r(o(i, 6), this.unsigned), e = this, u = "";;) {
				var g = e.div(s),
					f = (e.sub(g.mul(s)).toInt() >>> 0).toString(i);
				if((e = g).isZero()) return f + u;
				for(; f.length < 6;) f = "0" + f;
				u = "" + f + u
			}
		}, B.getHighBits = function() {
			return this.high
		}, B.getHighBitsUnsigned = function() {
			return this.high >>> 0
		}, B.getLowBits = function() {
			return this.low
		}, B.getLowBitsUnsigned = function() {
			return this.low >>> 0
		}, B.getNumBitsAbs = function() {
			if(this.isNegative()) return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
			for(var i = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (i & 1 << t); t--);
			return 0 != this.high ? t + 33 : t + 1
		}, B.isZero = function() {
			return 0 === this.high && 0 === this.low
		}, B.eqz = B.isZero, B.isNegative = function() {
			return !this.unsigned && this.high < 0
		}, B.isPositive = function() {
			return this.unsigned || this.high >= 0
		}, B.isOdd = function() {
			return 1 == (1 & this.low)
		}, B.isEven = function() {
			return 0 == (1 & this.low)
		}, B.equals = function(i) {
			return n(i) || (i = f(i)), (this.unsigned === i.unsigned || this.high >>> 31 != 1 || i.high >>> 31 != 1) && (this.high === i.high && this.low === i.low)
		}, B.eq = B.equals, B.notEquals = function(i) {
			return !this.eq(i)
		}, B.neq = B.notEquals, B.ne = B.notEquals, B.lessThan = function(i) {
			return this.comp(i) < 0
		}, B.lt = B.lessThan, B.lessThanOrEqual = function(i) {
			return this.comp(i) <= 0
		}, B.lte = B.lessThanOrEqual, B.le = B.lessThanOrEqual, B.greaterThan = function(i) {
			return this.comp(i) > 0
		}, B.gt = B.greaterThan, B.greaterThanOrEqual = function(i) {
			return this.comp(i) >= 0
		}, B.gte = B.greaterThanOrEqual, B.ge = B.greaterThanOrEqual, B.compare = function(i) {
			if(n(i) || (i = f(i)), this.eq(i)) return 0;
			var t = this.isNegative(),
				h = i.isNegative();
			return t && !h ? -1 : !t && h ? 1 : this.unsigned ? i.high >>> 0 > this.high >>> 0 || i.high === this.high && i.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(i).isNegative() ? -1 : 1
		}, B.comp = B.compare, B.negate = function() {
			return !this.unsigned && this.eq(_) ? _ : this.not().add(E)
		}, B.neg = B.negate, B.add = function(i) {
			n(i) || (i = f(i));
			var t = this.high >>> 16,
				h = 65535 & this.high,
				s = this.low >>> 16,
				e = 65535 & this.low,
				r = i.high >>> 16,
				o = 65535 & i.high,
				g = i.low >>> 16,
				l = 0,
				a = 0,
				d = 0,
				c = 0;
			return d += (c += e + (65535 & i.low)) >>> 16, a += (d += s + g) >>> 16, l += (a += h + o) >>> 16, l += t + r, u((d &= 65535) << 16 | (c &= 65535), (l &= 65535) << 16 | (a &= 65535), this.unsigned)
		}, B.subtract = function(i) {
			return n(i) || (i = f(i)), this.add(i.neg())
		}, B.sub = B.subtract, B.multiply = function(t) {
			if(this.isZero()) return m;
			if(n(t) || (t = f(t)), i) return u(i.mul(this.low, this.high, t.low, t.high), i.get_high(), this.unsigned);
			if(t.isZero()) return m;
			if(this.eq(_)) return t.isOdd() ? _ : m;
			if(t.eq(_)) return this.isOdd() ? _ : m;
			if(this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
			if(t.isNegative()) return this.mul(t.neg()).neg();
			if(this.lt(v) && t.lt(v)) return r(this.toNumber() * t.toNumber(), this.unsigned);
			var h = this.high >>> 16,
				s = 65535 & this.high,
				e = this.low >>> 16,
				o = 65535 & this.low,
				g = t.high >>> 16,
				l = 65535 & t.high,
				a = t.low >>> 16,
				d = 65535 & t.low,
				c = 0,
				w = 0,
				N = 0,
				E = 0;
			return N += (E += o * d) >>> 16, w += (N += e * d) >>> 16, N &= 65535, w += (N += o * a) >>> 16, c += (w += s * d) >>> 16, w &= 65535, c += (w += e * a) >>> 16, w &= 65535, c += (w += o * l) >>> 16, c += h * d + s * a + e * l + o * g, u((N &= 65535) << 16 | (E &= 65535), (c &= 65535) << 16 | (w &= 65535), this.unsigned)
		}, B.mul = B.multiply, B.divide = function(t) {
			if(n(t) || (t = f(t)), t.isZero()) throw Error("division by zero");
			var h, s, e;
			if(i) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? u((this.unsigned ? i.div_u : i.div_s)(this.low, this.high, t.low, t.high), i.get_high(), this.unsigned) : this;
			if(this.isZero()) return this.unsigned ? N : m;
			if(this.unsigned) {
				if(t.unsigned || (t = t.toUnsigned()), t.gt(this)) return N;
				if(t.gt(this.shru(1))) return y;
				e = N
			} else {
				if(this.eq(_)) return t.eq(E) || t.eq(b) ? _ : t.eq(_) ? E : (h = this.shr(1).div(t).shl(1)).eq(m) ? t.isNegative() ? E : b : (s = this.sub(t.mul(h)), e = h.add(s.div(t)));
				if(t.eq(_)) return this.unsigned ? N : m;
				if(this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
				if(t.isNegative()) return this.div(t.neg()).neg();
				e = m
			}
			for(s = this; s.gte(t);) {
				h = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
				for(var g = Math.ceil(Math.log(h) / Math.LN2), l = g <= 48 ? 1 : o(2, g - 48), a = r(h), d = a.mul(t); d.isNegative() || d.gt(s);) d = (a = r(h -= l, this.unsigned)).mul(t);
				a.isZero() && (a = E), e = e.add(a), s = s.sub(d)
			}
			return e
		}, B.div = B.divide, B.modulo = function(t) {
			return n(t) || (t = f(t)), i ? u((this.unsigned ? i.rem_u : i.rem_s)(this.low, this.high, t.low, t.high), i.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
		}, B.mod = B.modulo, B.rem = B.modulo, B.not = function() {
			return u(~this.low, ~this.high, this.unsigned)
		}, B.and = function(i) {
			return n(i) || (i = f(i)), u(this.low & i.low, this.high & i.high, this.unsigned)
		}, B.or = function(i) {
			return n(i) || (i = f(i)), u(this.low | i.low, this.high | i.high, this.unsigned)
		}, B.xor = function(i) {
			return n(i) || (i = f(i)), u(this.low ^ i.low, this.high ^ i.high, this.unsigned)
		}, B.shiftLeft = function(i) {
			return n(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? u(this.low << i, this.high << i | this.low >>> 32 - i, this.unsigned) : u(0, this.low << i - 32, this.unsigned)
		}, B.shl = B.shiftLeft, B.shiftRight = function(i) {
			return n(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? u(this.low >>> i | this.high << 32 - i, this.high >> i, this.unsigned) : u(this.high >> i - 32, this.high >= 0 ? 0 : -1, this.unsigned)
		}, B.shr = B.shiftRight, B.shiftRightUnsigned = function(i) {
			if(n(i) && (i = i.toInt()), 0 === (i &= 63)) return this;
			var t = this.high;
			return i < 32 ? u(this.low >>> i | t << 32 - i, t >>> i, this.unsigned) : u(32 === i ? t : t >>> i - 32, 0, this.unsigned)
		}, B.shru = B.shiftRightUnsigned, B.shr_u = B.shiftRightUnsigned, B.toSigned = function() {
			return this.unsigned ? u(this.low, this.high, !1) : this
		}, B.toUnsigned = function() {
			return this.unsigned ? this : u(this.low, this.high, !0)
		}, B.toBytes = function(i) {
			return i ? this.toBytesLE() : this.toBytesBE()
		}, B.toBytesLE = function() {
			var i = this.high,
				t = this.low;
			return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24]
		}, B.toBytesBE = function() {
			var i = this.high,
				t = this.low;
			return [i >>> 24, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
		}, t.fromBytes = function(i, n, h) {
			return h ? t.fromBytesLE(i, n) : t.fromBytesBE(i, n)
		}, t.fromBytesLE = function(i, n) {
			return new t(i[0] | i[1] << 8 | i[2] << 16 | i[3] << 24, i[4] | i[5] << 8 | i[6] << 16 | i[7] << 24, n)
		}, t.fromBytesBE = function(i, n) {
			return new t(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7], i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3], n)
		};
	}, {}],
	"TvlR": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = a(require("long")),
			t = a(require("../utils")),
			r = a(require("./sendChatMessage")),
			o = a(require("../status"));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = (0, o.default)(),
			d = function(e, t, o) {
				if(e.delivery) {
					var a = e.getUniqueId(),
						s = new WebIM.message("delivery", a);
					s.set({
						ackId: o,
						to: t.from
					}), (0, r.default)(s.body, e)
				}
			},
			i = function(r, o, a, i) {
				var l = a,
					n = l.context.root.lookup("easemob.pb.MessageBody").decode(r.payload),
					c = new e.default(r.id.low, r.id.high, r.id.unsigned).toString(),
					f = n.ackMessageId ? new e.default(n.ackMessageId.low, n.ackMessageId.high, n.ackMessageId.unsigned).toString() : "",
					u = null;
				if(1 === n.type) u = "chat";
				else if(2 === n.type) u = "groupchat";
				else if(3 === n.type) u = "chatroom";
				else {
					if(4 === n.type) return u = "read_ack", void a.onReadMessage({
						mid: f
					});
					if(5 === n.type) return u = "deliver_ack", void a.onDeliverdMessage({
						mid: f
					});
					if(6 === n.type) return u = "recall", void a.onRecallMessage({
						mid: f
					})
				}
				for(var y = 0; y < n.contents.length; y++) {
					var m = {},
						g = o.errorCode > 0,
						h = o.errorCode,
						p = o.reason,
						x = n.contents[y],
						M = n.from.name,
						k = n.to.name,
						b = n.ext || {};
					try {
						switch(x.type) {
							case 0:
								var v = n.contents[y].text,
									C = t.default.parseTextMessage(v, WebIM.Emoji);
								C.isemoji ? (!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									data: C.body,
									ext: b
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && l.onEmojiMessage(m)) : ((m = {
									id: c,
									type: u,
									from: M,
									to: k,
									data: x.text,
									ext: n.ext,
									sourceMsg: x.text
								}).error = g, m.errorText = p, m.errorCode = h, !i && a.onTextMessage(m));
								break;
							case 1:
								if(x.size) var _ = x.size.width || 0,
									P = x.size.height || 0;
								!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									url: x.remotePath && l.apiUrl + x.remotePath.substr(x.remotePath.indexOf("/", 9)),
									secret: x.secretKey,
									filename: x.displayName,
									thumb: x.thumbnailRemotePath,
									thumb_secret: x.thumbnailSecretKey,
									file_length: x.fileLength || "",
									width: _,
									height: P,
									filetype: x.filetype || "",
									accessToken: a.token || "",
									ext: b
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && a.onPictureMessage(m);
								break;
							case 2:
								!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									url: x.remotePath && l.apiUrl + x.remotePath.substr(x.remotePath.indexOf("/", 9)),
									secret: x.secretKey,
									filename: x.displayName,
									length: x.duration || "",
									file_length: x.fileLength || "",
									filetype: x.filetype || "",
									accessToken: a.token || "",
									ext: b
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && a.onVideoMessage(m);
								break;
							case 3:
								!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									addr: x.address,
									lat: x.latitude,
									lng: x.longitude,
									ext: b
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && a.onLocationMessage(m);
								break;
							case 4:
								!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									url: x.remotePath && l.apiUrl + x.remotePath.substr(x.remotePath.indexOf("/", 9)),
									secret: x.secretKey,
									filename: x.displayName,
									file_length: x.fileLength || "",
									accessToken: a.token || "",
									ext: b,
									length: x.duration
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && a.onAudioMessage(m);
								break;
							case 5:
								!(m = {
									id: c,
									type: u,
									from: M,
									to: k,
									url: x.remotePath && l.apiUrl + x.remotePath.substr(x.remotePath.indexOf("/", 9)),
									secret: x.secretKey,
									filename: x.displayName,
									file_length: x.fileLength,
									accessToken: a.token || "",
									ext: b
								}).delay && delete m.delay, m.error = g, m.errorText = p, m.errorCode = h, !i && a.onFileMessage(m);
								break;
							case 6:
								(m = {
									id: c,
									from: M,
									to: k,
									action: x.action,
									ext: b
								}).error = g, m.errorText = p, m.errorCode = h, !i && a.onCmdMessage(m)
						}
					} catch(T) {
						a.onError({
							type: s.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
							data: T
						})
					}
					if(console.log(m), !i && d(a, m, c), i) return m.message_type = u, m
				}
			},
			l = i;
		exports.default = l;
	}, {
		"long": "YA3p",
		"../utils": "K0yk",
		"./sendChatMessage": "Aofe",
		"../status": "KLYY"
	}],
	"wnFo": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = n(require("long"));

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var o = function(n, o, t) {
				var c = t.context.root.lookup("easemob.pb.MUCBody").decode(n.payload);
				new e.default(n.id.low, n.id.high, n.id.unsigned).toString();
				! function(e) {
					var n = {
						type: "",
						owner: c.from.name,
						gid: c.mucId.name,
						from: c.from.name,
						fromJid: c.from,
						to: c.to.length ? c.to[0].name : "",
						toJid: c.to,
						chatroom: c.isChatroom,
						status: c.status
					};
					({
						28: function() {
							n.type = "deleteFile", t.onPresence(n)
						},
						27: function() {
							n.type = "uploadFile", t.onPresence(n)
						},
						26: function() {
							n.type = "deleteAnnouncement", t.onPresence(n)
						},
						25: function() {
							n.type = "updateAnnouncement", t.onPresence(n)
						},
						24: function() {
							n.type = "removeMute", t.onPresence(n)
						},
						23: function() {
							n.type = "addMute", t.onPresence(n)
						},
						22: function() {
							n.type = "removeAdmin", t.onPresence(n)
						},
						21: function() {
							n.type = "addAdmin", t.onPresence(n)
						},
						20: function() {
							n.type = "changeOwner", t.onPresence(n)
						},
						19: function() {
							n.type = "direct_joined", t.onPresence(n)
						},
						18: function() {
							n.type = c.isChatroom ? "leaveChatRoom" : "leaveGroup", t.onPresence(n)
						},
						17: function() {
							n.type = c.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", t.onPresence(n)
						},
						16: function() {
							n.type = "unblock", t.onPresence(n)
						},
						15: function() {
							n.type = "block", t.onPresence(n)
						},
						14: function() {
							n.type = "update", t.onPresence(n)
						},
						13: function() {
							n.type = "allow", n.reason = c.reason, t.onPresence(n)
						},
						12: function() {
							n.type = "ban", t.onPresence(n)
						},
						11: function() {
							n.type = "getBlackList", t.onPresence(n)
						},
						10: function() {
							n.type = "removedFromGroup", n.kicked = n.to, t.onPresence(n)
						},
						9: function() {
							n.type = "invite_decline", n.kicked = n.to, t.onPresence(n)
						},
						8: function() {
							n.type = "invite_accept", n.kicked = n.to, t.onPresence(n)
						},
						7: function() {
							n.type = "invite", n.kicked = n.to, t.onPresence(n)
						},
						6: function() {
							n.type = "joinPublicGroupDeclined", t.onPresence(n)
						},
						5: function() {
							n.type = "joinPublicGroupSuccess", t.onPresence(n)
						},
						4: function() {
							n.type = "joinGroupNotifications", n.reason = c.reason, t.onPresence(n)
						},
						3: function() {
							n.type = "leave", t.onPresence(n)
						},
						2: function() {
							n.type = "join", t.onPresence(n)
						},
						1: function() {
							n.type = "deleteGroupChat", t.onPresence(n)
						}
					}[e] || function() {
						console.log("%c没有匹配".concat(e, "类型"), "background: green")
					})()
				}(c.operation), console.log(c)
			},
			t = o;
		exports.default = t;
	}, {
		"long": "YA3p"
	}],
	"UOYe": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = o(require("long"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var a = function(e, o, a) {
				var t = [],
					n = a.context.root.lookup("easemob.pb.RosterBody"),
					r = n.decode(t);
				"add" === o ? r.operation = 2 : "remove" === o ? r.operation = 3 : "accept" === o ? r.operation = 4 : "decline" === o ? r.operation = 5 : "ban" === o ? r.operation = 6 : "allow" === o && (r.operation = 7), r.from = a.context.jid, r.to = [{
					appKey: a.appKey,
					name: e.to,
					domain: "easemob.com"
				}], r.reason = e.message, r = n.encode(r).finish();
				var s = a.context.root.lookup("easemob.pb.Meta").decode(t);
				s.id = e.id || a.getUniqueId(), s.from = a.context.jid, s.to = {
					domain: "@easemob.com"
				}, s.ns = 3, s.payload = r;
				var d = a.context.root.lookup("easemob.pb.CommSyncUL"),
					c = d.decode(t);
				c.meta = s, c = d.encode(c).finish();
				var i = a.context.root.lookup("easemob.pb.MSync"),
					p = i.decode(t);
				p.version = a.version, p.encryptType = [0], p.command = 0, p.guid = a.jid, p.payload = c, p = i.encode(p).finish(), a.sendMSync(p)
			},
			t = function(o, a, t) {
				var n = t.context.root.lookup("easemob.pb.RosterBody").decode(o.payload),
					r = (new e.default(o.id.low, o.id.high, o.id.unsigned).toString(), {
						to: n.to[0].name,
						from: n.from.name,
						status: n.reason
					});
				switch(n.operation) {
					case 0:
						break;
					case 2:
						r.type = "subscribe";
						break;
					case 3:
						r.type = "unsubscribed";
						break;
					case 4:
						r.type = "subscribed";
						break;
					case 5:
						r.type = "unsubscribed";
						break;
					case 6:
					case 7:
						t.getBlacklist();
						break;
					case 8:
						r.type = "subscribed";
						break;
					case 9:
						r.type = "unsubscribed"
				}
				t.onPresence(r), console.log(n.operation)
			},
			n = {
				handleMessage: t,
				operatRoster: a
			},
			r = n;
		exports.default = r;
	}, {
		"long": "YA3p"
	}],
	"pE/p": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = t(require("long")),
			o = t(require("../utils")),
			r = t(require("../status"));

		function t(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var a = (0, r.default)(),
			_ = function(o, r, t) {
				var _ = t.context.root.lookup("easemob.pb.StatisticsBody").decode(o.payload);
				new e.default(o.id.low, o.id.high, o.id.unsigned).toString();
				switch(_.operation) {
					case 0:
						break;
					case 1:
						var u = {
							type: a.WEBIM_CONNCTION_USER_REMOVED
						};
						t.logOut = !0, t.onError(u);
						break;
					case 2:
						u = {
							type: a.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE
						};
						t.logOut = !0, t.onError(u);
						break;
					case 3:
						u = {
							type: a.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD
						};
						t.logOut = !0, t.onError(u);
						break;
					case 4:
						u = {
							type: a.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE
						};
						t.logOut = !0, t.onError(u)
				}
				console.log(_.operation)
			},
			u = _;
		exports.default = u;
	}, {
		"long": "YA3p",
		"../utils": "K0yk",
		"../status": "KLYY"
	}],
	"h12o": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var _allnode = _interopRequireDefault(require("./allnode")),
			_protobufjs = _interopRequireDefault(require("protobufjs")),
			_sockjsClient = _interopRequireDefault(require("sockjs-client")),
			_Base = _interopRequireDefault(require("Base64")),
			_status = _interopRequireDefault(require("./status")),
			_utils2 = _interopRequireDefault(require("./utils")),
			_message2 = _interopRequireDefault(require("./message")),
			_queue = _interopRequireDefault(require("./queue")),
			_sendChatMessage = _interopRequireDefault(require("./chat/sendChatMessage")),
			_handleChatMessage = _interopRequireDefault(require("./chat/handleChatMessage")),
			_HandleMucMessage = _interopRequireDefault(require("./muc/HandleMucMessage")),
			_HandleRosterMessage = _interopRequireDefault(require("./roster/HandleRosterMessage")),
			_HandleStatisticsMessage = _interopRequireDefault(require("./statistics/HandleStatisticsMessage")),
			_long = _interopRequireDefault(require("long"));

		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		_protobufjs.default.util.Long = _long.default, _protobufjs.default.configure();
		var _version = "1.4.13",
			all = (0, _allnode.default)(),
			_code = (0, _status.default)(),
			_message = _message2.default._msg,
			_msgHash = {},
			sock, mr_cache = {},
			root = _protobufjs.default.Root.fromJSON(all),
			Strophe = window.Strophe;
		window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
		var logMessage = function(e) {};
		window.XDomainRequest;
		var _listenNetwork = function(e, t) {
				window.addEventListener ? (window.addEventListener("online", e), window.addEventListener("offline", t)) : window.attachEvent && (document.body ? (document.body.attachEvent("ononline", e), document.body.attachEvent("onoffline", t)) : window.attachEvent("load", function() {
					document.body.attachEvent("ononline", e), document.body.attachEvent("onoffline", t)
				}))
			},
			_parseRoom = function(e) {
				var t = [],
					o = e.getElementsByTagName("item");
				if(o)
					for(var n = 0; n < o.length; n++) {
						var s = o[n],
							r = s.getAttribute("jid"),
							i = r.split("@")[0],
							a = {
								jid: r,
								name: s.getAttribute("name"),
								roomId: i.split("_")[1]
							};
						t.push(a)
					}
				return t
			},
			_parseRoomOccupants = function(e) {
				var t = [],
					o = e.getElementsByTagName("item");
				if(o)
					for(var n = 0; n < o.length; n++) {
						var s = o[n],
							r = {
								jid: s.getAttribute("jid"),
								name: s.getAttribute("name")
							};
						t.push(r)
					}
				return t
			},
			_parseNameFromJidFn = function(e, t) {
				return e.name
			},
			_getSock = function(e) {
				if("https:" != location.protocol && e.isHttpDNS) {
					var t = e.xmppHosts[e.xmppIndex],
						o = t.domain,
						n = t.ip;
					if(n) {
						url = n;
						var s = t.port;
						"80" != s && (url += ":" + s)
					} else url = o;
					url && (e.url = "//" + url + "/ws")
				}
				return new _sockjsClient.default(e.url)
			},
			_login = function(e, t) {
				if(e)
					if((sock = _getSock(t)).onopen = function() {
							var o = [],
								n = (new Date).valueOf(),
								s = root.lookup("easemob.pb.Provision"),
								r = s.decode(o);
							t.context.jid.clientResource = t.deviceId + "_" + n, r.compressType = t.compressType, r.encryptType = t.encryptType, r.osType = t.osType, r.version = t.version, r.deviceName = t.deviceId, r.resource = t.deviceId + "_" + n, r.deviceUuid = n, r.auth = "$t$" + e.access_token, r = s.encode(r).finish();
							var i = root.lookup("easemob.pb.MSync"),
								a = i.decode(o);
							if(a.version = t.version, a.guid = t.context.jid, a.auth = "$t$" + e.access_token, a.command = 3, a.deviceId = t.deviceId, a.encryptType = t.encryptType, a.payload = r, a = i.encode(a).finish(), base64transform(a), t.logOut = !1, t.offLineSendConnecting = !1, t.unSendMsgArr.length > 0)
								for(var u in console.log("unSendMesArr", t.unSendMsgArr), t.unSendMsgArr) {
									var c = t.unSendMsgArr[u];
									t.sendMSync(c), delete t.unSendMsgArr[u]
								}
							t.onOpened()
						}, sock.onclose = function(e) {
							if(!t.logOut && t.autoReconnectNumTotal <= t.autoReconnectNumMax && (t.autoReconnectNumTotal <= t.xmppHosts.length && t.isHttpDNS || !t.isHttpDNS)) {
								t.reconnect();
								var o = {
									type: _code.WEBIM_CONNCTION_DISCONNECTED
								};
								t.onError(o), t.onClosed(), console.log("close", e)
							}
						}, sock.onmessage = function(e) {
							console.log("返回消息" + e.data);
							for(var o = _Base.default.atob(e.data), n = [], s = 0, r = o.length; s < r; ++s) n.push(o.charCodeAt(s));
							var i = root.lookup("easemob.pb.MSync").decode(n);
							switch(i.command) {
								case 0:
									var a = root.lookup("easemob.pb.CommSyncDL");
									a = a.decode(i.payload);
									var u = new _long.default(a.serverId.low, a.serverId.high, a.serverId.unsigned).toString(),
										c = new _long.default(a.metaId.low, a.metaId.high, a.metaId.unsigned).toString();
									if(console.log(JSON.stringify(a)), 0 !== a.metas.length) metapayload(a.metas, a.status, t), lastsession(a.nextKey, a.queue, t);
									else if(a.isLast);
									else if(a.status && 0 === a.status.errorCode) {
										if(_msgHash[c]) {
											try {
												_msgHash[c].success instanceof Function && _msgHash[c].success(c, u)
											} catch(e) {
												this.onError({
													type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
													data: e
												})
											}
											delete _msgHash[c]
										}
										t.onReceivedMessage({
											id: c,
											mid: u
										})
									} else if(a.status && 15 === a.status.errorCode) t.onReceivedMessage({
										id: c,
										mid: u
									}), t.onMutedMessage({
										mid: u
									});
									else if(_msgHash[c]) {
										try {
											_msgHash[c].fail instanceof Function && _msgHash[c].fail(c, u)
										} catch(e) {
											this.onError({
												type: _code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
												data: e
											})
										}
										delete _msgHash[c]
									}
									break;
								case 1:
									var p = root.lookup("easemob.pb.CommUnreadDL");
									if(0 === (p = p.decode(i.payload)).unread.length);
									else
										for(s = 0; s < p.unread.length; s++) backqueue(p.unread[s].queue, t);
									break;
								case 2:
									var l = root.lookup("easemob.pb.CommNotice").decode(i.payload);
									backqueue(l.queue, t);
									break;
								case 3:
									receiveProvision(i, t)
							}
						}, "" != (e.access_token || "")) t.context.accessToken = e.access_token;
					else {
						_utils2.default.stringify(e);
						t.onError({
							type: _code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,
							data: e
						})
					}
			},
			lastsession = function(e, t, o) {
				console.log("队列"), console.log(t);
				var n = [],
					s = root.lookup("easemob.pb.CommSyncUL"),
					r = s.decode(n);
				r.queue = t, r.key = new _long.default(e.low, e.high, e.unsigned).toString(), r = s.encode(r).finish();
				var i = root.lookup("easemob.pb.MSync"),
					a = i.decode(n);
				if(a.version = o.version, a.encryptType = o.encryptType, a.command = 0, a.payload = r, a = i.encode(a).finish(), sock.readyState !== _sockjsClient.default.OPEN) {
					console.log("这里出错");
					var u = {
						type: _code.WEBIM_CONNCTION_DISCONNECTED
					};
					o.onError(u)
				} else base64transform(a)
			},
			metapayload = function(e, t, o) {
				for(var n = 0; n < e.length; n++) 1 === e[n].ns ? (0, _handleChatMessage.default)(e[n], t, o) : 2 === e[n].ns ? (0, _HandleMucMessage.default)(e[n], t, o) : 3 === e[n].ns ? _HandleRosterMessage.default.handleMessage(e[n], t, o) : 0 === e[n].ns ? (0, _HandleStatisticsMessage.default)(e[n], t, o) : 4 === e[n].ns && o.registerConfrIQHandler && o.registerConfrIQHandler(e[n], t, o)
			},
			rebuild = function() {
				var e = [],
					t = root.lookup("easemob.pb.StatisticsBody"),
					o = t.decode(e);
				o.operation = 0, o = t.encode(o).finish();
				var n = root.lookup("easemob.pb.Meta").decode(e);
				n.id = (new Date).valueOf(), n.ns = 0, n.payload = o;
				var s = root.lookup("easemob.pb.CommSyncUL"),
					r = s.decode(e);
				r.meta = n, r = s.encode(r).finish();
				var i = root.lookup("easemob.pb.MSync"),
					a = i.decode(e);
				a.version = "3.0.0", a.encryptType = [0], a.command = 0, a.payload = r, a = i.encode(a).finish(), base64transform(a)
			},
			backqueue = function(e, t) {
				var o = [],
					n = root.lookup("easemob.pb.CommSyncUL"),
					s = n.decode(o);
				s.queue = e, s = n.encode(s).finish();
				var r = root.lookup("easemob.pb.MSync"),
					i = r.decode(o);
				i.version = t.version, i.encryptType = t.encryptType, i.command = 0, i.payload = s, i = r.encode(i).finish(), base64transform(i)
			},
			receiveProvision = function(e, t) {
				var o = root.lookup("easemob.pb.Provision").decode(e.payload);
				t.context.jid.clientResource = o.resource, 0 == o.status.errorCode && unreadDeal(t)
			},
			unreadDeal = function(e) {
				var t = root.lookup("easemob.pb.MSync"),
					o = t.decode([]);
				o.version = e.version, o.encryptType = e.encryptType, o.command = 1, o = t.encode(o).finish(), base64transform(o)
			},
			base64transform = function(e) {
				for(var t = "", o = 0; o < e.length; o++) {
					t += String.fromCharCode(e[o])
				}
				t = _Base.default.btoa(t), console.log("转码发送" + t), sock.send(t)
			},
			_getJid = function(e, t) {
				var o = e.toJid || {};
				if(o === {}) {
					var n = {
						appKey: t.context.appKey || "",
						name: e.to,
						domain: t.domain,
						clientResource: t.clientResource
					};
					e.resource && (n.clientResource = e.resource), o = n
				}
				return o
			},
			_getJidByName = function(e, t) {
				return _getJid({
					to: e
				}, t)
			},
			_validCheck = function(e, t) {
				if("" == (e = e || {}).user) return t.onError({
					type: _code.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR
				}), !1;
				var o = e.user + "" || "",
					n = e.appKey || "",
					s = n.split("#");
				if(2 !== s.length) return t.onError({
					type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
				}), !1;
				var r = s[0],
					i = s[1];
				return r && i ? (t.context.jid = {
					appKey: n,
					name: o,
					domain: t.domain,
					clientResource: t.clientResource
				}, t.context.root = root, t.context.userId = o, t.context.appKey = n, t.context.appName = i, t.context.orgName = r, !0) : (t.onError({
					type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
				}), !1)
			},
			connection = function e(t) {
				if(!this instanceof e) return new e(t);
				t = t || {};
				this.isHttpDNS = t.isHttpDNS || !1, this.isMultiLoginSessions = t.isMultiLoginSessions || !1, this.wait = t.wait || 30, this.retry = t.retry || !1, this.https = t.https && "https:" === location.protocol, this.url = t.url, this.hold = t.hold || 1, this.route = t.route || null, this.inactivity = t.inactivity || 30, this.heartBeatWait = t.heartBeatWait || 4500, this.maxRetries = t.maxRetries || 5, this.isAutoLogin = !1 !== t.isAutoLogin, this.pollingTime = t.pollingTime || 800, this.stropheConn = !1, this.autoReconnectNumMax = t.autoReconnectNumMax || 0, this.autoReconnectNumTotal = 0, this.autoReconnectInterval = t.autoReconnectInterval || 0, this.context = {
					status: _code.STATUS_INIT
				}, this.sendQueue = new _queue.default, this.intervalId = null, this.apiUrl = t.apiUrl || "", this.isWindowSDK = t.isWindowSDK || !1, this.encrypt = t.encrypt || {
					encrypt: {
						type: "none"
					}
				}, this.delivery = t.delivery || !1, this.appKey = t.appKey || "easemob-demo#chatdemoui", this.domain = t.domain || "easemob.com", this.clientResource = "84ff3eba1", this.user = "", this.orgName = "", this.appName = "", this.token = "", this.unSendMsgArr = [], this.dnsArr = ["https://rs.easemob.com", "https://rsbak.easemob.com", "http://182.92.174.78", "http://112.126.66.111"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restIndex = 0, this.restTotal = 0, this.xmppHosts = [], this.xmppIndex = 0, this.xmppTotal = 0, this.groupOption = {}, this.version = t.version || "3.0.0", this.compressAlgorimth = t.compressAlgorimth || 0, this.userAgent = t.userAgent || 0, this.pov = t.pov || 0, this.command = t.command || 3, this.deviceId = t.deviceId || "webim", this.encryptKey = t.encryptKey || "", this.firstPayload = t.firstPayload || [], this.compressType = t.compressType || [0], this.encryptType = t.encryptType || [0], this.osType = 16, window.this = this
			};
		connection.prototype.registerUser = function(e) {
			"https:" != location.protocol && this.isHttpDNS ? (this.dnsIndex = 0, this.getHttpDNS(e, "signup")) : this.signup(e)
		}, connection.prototype.listen = function(e) {
			this.onOpened = e.onOpened || _utils2.default.emptyfn, this.onClosed = e.onClosed || _utils2.default.emptyfn, this.onTextMessage = e.onTextMessage || _utils2.default.emptyfn, this.onEmojiMessage = e.onEmojiMessage || _utils2.default.emptyfn, this.onPictureMessage = e.onPictureMessage || _utils2.default.emptyfn, this.onAudioMessage = e.onAudioMessage || _utils2.default.emptyfn, this.onVideoMessage = e.onVideoMessage || _utils2.default.emptyfn, this.onFileMessage = e.onFileMessage || _utils2.default.emptyfn, this.onLocationMessage = e.onLocationMessage || _utils2.default.emptyfn, this.onCmdMessage = e.onCmdMessage || _utils2.default.emptyfn, this.onPresence = e.onPresence || _utils2.default.emptyfn, this.onRoster = e.onRoster || _utils2.default.emptyfn, this.onError = e.onError || _utils2.default.emptyfn, this.onReceivedMessage = e.onReceivedMessage || _utils2.default.emptyfn, this.onInviteMessage = e.onInviteMessage || _utils2.default.emptyfn, this.onDeliverdMessage = e.onDeliveredMessage || _utils2.default.emptyfn, this.onReadMessage = e.onReadMessage || _utils2.default.emptyfn, this.onRecallMessage = e.onRecallMessage || _utils2.default.emptyfn, this.onMutedMessage = e.onMutedMessage || _utils2.default.emptyfn, this.onOffline = e.onOffline || _utils2.default.emptyfn, this.onOnline = e.onOnline || _utils2.default.emptyfn, this.onConfirmPop = e.onConfirmPop || _utils2.default.emptyfn, this.onCreateGroup = e.onCreateGroup || _utils2.default.emptyfn, this.onUpdateMyGroupList = e.onUpdateMyGroupList || _utils2.default.emptyfn, this.onUpdateMyRoster = e.onUpdateMyRoster || _utils2.default.emptyfn, this.onBlacklistUpdate = e.onBlacklistUpdate || _utils2.default.emptyfn, _listenNetwork(this.onOnline, this.onOffline)
		}, connection.prototype.getRestFromHttpDNS = function(e, t) {
			if(this.restIndex > this.restTotal) console.log("rest hosts all tried,quit");
			else {
				var o = "",
					n = this.restHosts[this.restIndex],
					s = n.domain,
					r = n.ip;
				if(r) {
					var i = n.port;
					o = ("https:" === location.protocol ? "https:" : "http:") + "//" + r + ":" + i
				} else o = ("https:" === location.protocol ? "https:" : "http:") + "//" + s;
				"" != o && (this.apiUrl = o, e.apiUrl = o), "login" == t ? this.login(e) : this.signup(e)
			}
		}, connection.prototype.getHttpDNS = function(e, t) {
			var o = this,
				n = {
					url: this.dnsArr[this.dnsIndex] + "/easemob/server.json",
					dataType: "json",
					type: "GET",
					data: {
						app_key: encodeURIComponent(e.appKey || this.appKey)
					},
					success: function(n, s) {
						var r = n.rest.hosts;
						if(r) {
							o.restHosts = r, o.restTotal = r.length;
							try {
								Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
							} catch(p) {}
							var i = n["msync-ws"].hosts;
							if(i) {
								for(var a = 0; a < i.length; a++) {
									var u = o.https ? "https" : "http";
									if(i[a].protocol === u) {
										var c = i[a];
										i.splice(a, 1), i.unshift(c)
									}
								}
								o.xmppHosts = i, o.xmppTotal = i.length, o.getRestFromHttpDNS(e, t)
							} else console.log("xmpp hosts error3")
						} else console.log("rest hosts error3")
					} || _utils2.default.emptyfn,
					error: function(n, s, r) {
						console.log("getHttpDNS error", n, r), o.dnsIndex++, o.dnsIndex < o.dnsTotal && o.getHttpDNS(e, t)
					} || _utils2.default.emptyfn
				};
			_utils2.default.ajax(n)
		}, connection.prototype.signup = function(e) {
			var t = this,
				o = e.orgName || "",
				n = e.appName || "",
				s = e.appKey || this.appKey,
				r = e.success || _utils2.default.emptyfn,
				i = e.error || _utils2.default.emptyfn;
			if(!o && !n && s) {
				var a = s.split("#");
				2 === a.length && (o = a[0], n = a[1])
			}
			if(o || n) {
				e.https || this.https;
				var u = (e.apiUrl || this.apiUrl) + "/" + o + "/" + n + "/users",
					c = {
						username: e.username,
						password: e.password,
						nickname: e.nickname || ""
					},
					p = {
						url: u,
						dataType: "json",
						data: _utils2.default.stringify(c),
						success: r,
						error: function(o, n, s) {
							if("https:" != location.protocol && t.isHttpDNS && t.restIndex + 1 < t.restTotal) return t.restIndex++, void t.getRestFromHttpDNS(e, "signup");
							t.clear(), i(o)
						}
					};
				_utils2.default.ajax(p)
			} else i({
				type: _code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
			})
		}, connection.prototype.open = function(e) {
			var t = e.appKey,
				o = t.split("#")[0],
				n = t.split("#")[1];
			this.orgName = o, this.appName = n, e.accessToken && (this.token = e.accessToken), "https:" != location.protocol && this.isHttpDNS ? (this.dnsIndex = 0, this.getHttpDNS(e, "login")) : this.login(e)
		}, connection.prototype.login = function(e) {
			if(this.user = e.user, _validCheck(e, this)) {
				var t = this;
				if(!t.isOpened())
					if(e.accessToken) e.access_token = e.accessToken, _login(e, t);
					else {
						var o = e.apiUrl,
							n = this.context.userId,
							s = e.pwd || "",
							r = this.context.appName,
							i = this.context.orgName,
							a = {
								grant_type: "password",
								username: n,
								password: s,
								timestamp: +new Date
							},
							u = {
								url: o + "/" + i + "/" + r + "/token",
								dataType: "json",
								data: _utils2.default.stringify(a),
								success: function(o, n) {
									e.success && e.success(o), t.token = o.access_token, t.context.restTokenData = o.access_token, _login(o, t)
								} || _utils2.default.emptyfn,
								error: function(o, n, s) {
									if(e.error && e.error(), "https:" != location.protocol && t.isHttpDNS && t.restIndex + 1 < t.restTotal) return t.restIndex++, void t.getRestFromHttpDNS(e, "login");
									t.clear(), o.error && o.error_description ? t.onError({
										type: _code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,
										data: o,
										xhr: n
									}) : t.onError({
										type: _code.WEBIM_CONNCTION_OPEN_ERROR,
										data: o,
										xhr: n
									})
								} || _utils2.default.emptyfn
							};
						_utils2.default.ajax(u)
					}
			}
		}, connection.prototype.close = function(e) {
			this.logOut = !0, this.context.status = _code.STATUS_CLOSING, sock.close(), this.context.status = _code.STATUS_CLOSING
		}, connection.prototype.recallMessage = function(e) {
			var t = {
				id: this.getUniqueId(),
				type: "recall",
				ackId: e.mid,
				to: e.to,
				success: e.success,
				fail: e.fail
			};
			this.send(t, this)
		}, connection.prototype.sendMSync = function(e) {
			for(var t = "", o = 0; o < e.length; o++) {
				t += String.fromCharCode(e[o])
			}
			t = _Base.default.btoa(t), console.log("转码发送" + t), sock.readyState === _sockjsClient.default.OPEN ? sock.send(t) : (this.unSendMsgArr.push(t), !this.logOut && this.autoReconnectNumTotal <= this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.xmppHosts.length && this.isHttpDNS || !this.isHttpDNS) && (this.offLineSendConnecting = !0, this.reconnect()), this.onError({
				type: _code.WEBIM_CONNCTION_DISCONNECTED,
				reconnect: !0
			}))
		}, connection.prototype.getUniqueId = function(e) {
			this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
			var t = new Date,
				o = new Date(2010, 1, 1);
			return t.getTime() - o.getTime() + this.autoIncrement
		}, connection.prototype.send = function(e) {
			(0, _sendChatMessage.default)(e, this), _msgHash[e.id] = e
		}, connection.prototype.addRoster = function(e) {
			var t = _getJid(e, this),
				o = e.name || "",
				n = e.groups || "",
				s = $iq({
					type: "set"
				});
			if(s.c("query", {
					xmlns: "jabber:iq:roster"
				}), s.c("item", {
					jid: t,
					name: o
				}), n)
				for(var r = 0; r < n.length; r++) s.c("group").t(n[r]).up();
			var i = e.success || _utils2.default.emptyfn,
				a = e.error || _utils2.default.emptyfn;
			this.context.stropheConn.sendIQ(s.tree(), i, a)
		}, connection.prototype.removeRoster = function(e) {
			_HandleRosterMessage.default.operatRoster(e, "remove", this)
		}, connection.prototype.getRoster = function(e) {
			e = e || {};
			var t = this;
			if(_utils2.default.isCanSetRequestHeader) {
				var o = this,
					n = e.accessToken || this.token;
				if(n) {
					var s = e.apiUrl || this.apiUrl,
						r = this.context.appName,
						i = this.context.orgName;
					if(!r || !i) return void o.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					var a = {
						url: s + "/" + i + "/" + r + "/users/" + this.user + "/contacts/users",
						dataType: "json",
						type: "GET",
						headers: {
							Authorization: "Bearer " + n
						},
						success: function(o, n) {
							var s = [];
							o.data.forEach(function(e, o) {
								s.push({
									name: e,
									subscription: "both",
									jid: t.context.jid
								})
							}), "function" == typeof e.success && e.success(s), this.onRoster && this.onRoster()
						} || _utils2.default.emptyfn,
						error: function(t, o, n) {
							"function" == typeof e.error && e.error(t)
						} || _utils2.default.emptyfn
					};
					_utils2.default.ajax(a)
				} else o.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				})
			} else o.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		}, connection.prototype.subscribe = function(e) {
			_HandleRosterMessage.default.operatRoster(e, "add", this)
		}, connection.prototype.subscribed = function(e) {
			_HandleRosterMessage.default.operatRoster(e, "accept", this)
		}, connection.prototype.unsubscribe = function(e) {
			var t = _getJid(e, this),
				o = $pres({
					to: t,
					type: "unsubscribe"
				});
			e.message && o.c("status").t(e.message), this.sendCommand(o.tree())
		}, connection.prototype.unsubscribed = function(e) {
			_HandleRosterMessage.default.operatRoster(e, "decline", this)
		}, connection.prototype.joinPublicGroup = function(e) {
			var t = this.context.appKey + "_" + e.roomId + "@conference." + this.domain + "/" + this.context.userId,
				o = e.success || _utils2.default.emptyfn,
				n = e.error || _utils2.default.emptyfn,
				s = $pres({
					from: this.context.jid,
					to: t
				}).c("x", {
					xmlns: Strophe.NS.MUC
				});
			this.context.stropheConn.sendIQ(s.tree(), o, function(e) {
				n({
					type: _code.WEBIM_CONNCTION_JOINROOM_ERROR,
					data: e
				})
			})
		}, connection.prototype.listRooms = function(e) {
			var t = $iq({
					to: e.server || "conference." + this.domain,
					from: this.context.jid,
					type: "get"
				}).c("query", {
					xmlns: Strophe.NS.DISCO_ITEMS
				}),
				o = e.success || _utils2.default.emptyfn,
				n = e.error || this.onError,
				s = e.error || _utils2.default.emptyfn;
			this.context.stropheConn.sendIQ(t.tree(), function(e) {
				var t;
				t = _parseRoom(e);
				try {
					o(t)
				} catch(s) {
					n({
						type: _code.WEBIM_CONNCTION_GETROOM_ERROR,
						data: s
					})
				}
			}, function(e) {
				s({
					type: _code.WEBIM_CONNCTION_GETROOM_ERROR,
					data: e
				})
			})
		}, connection.prototype.queryRoomMember = function(e) {
			this.domain;
			var t = [],
				o = $iq({
					to: this.context.appKey + "_" + e.roomId + "@conference." + this.domain,
					type: "get"
				}).c("query", {
					xmlns: Strophe.NS.MUC + "#admin"
				}).c("item", {
					affiliation: "member"
				}),
				n = e.success || _utils2.default.emptyfn,
				s = e.error || _utils2.default.emptyfn;
			this.context.stropheConn.sendIQ(o.tree(), function(e) {
				var o = e.getElementsByTagName("item");
				if(o)
					for(var s = 0; s < o.length; s++) {
						var r = {
							jid: o[s].getAttribute("jid"),
							affiliation: "member"
						};
						t.push(r)
					}
				n(t)
			}, function(e) {
				s({
					type: _code.WEBIM_CONNCTION_GETROOMMEMBER_ERROR,
					data: e
				})
			})
		}, connection.prototype.queryRoomInfo = function(e) {
			var t = this.domain,
				o = $iq({
					to: this.context.appKey + "_" + e.roomId + "@conference." + t,
					type: "get"
				}).c("query", {
					xmlns: Strophe.NS.DISCO_INFO
				}),
				n = e.success || _utils2.default.emptyfn,
				s = [],
				r = e.error || _utils2.default.emptyfn;
			this.context.stropheConn.sendIQ(o.tree(), function(e) {
				var o = "",
					r = e.getElementsByTagName("feature");
				switch(r && (o = r[1].getAttribute("var") + "|" + r[3].getAttribute("var") + "|" + r[4].getAttribute("var")), o) {
					case "muc_public|muc_membersonly|muc_notallowinvites":
						o = "PUBLIC_JOIN_APPROVAL";
						break;
					case "muc_public|muc_open|muc_notallowinvites":
						o = "PUBLIC_JOIN_OPEN";
						break;
					case "muc_hidden|muc_membersonly|muc_allowinvites":
						o = "PRIVATE_MEMBER_INVITE";
						break;
					case "muc_hidden|muc_membersonly|muc_notallowinvites":
						o = "PRIVATE_OWNER_INVITE"
				}
				var i = e.getElementsByTagName("field"),
					a = {};
				if(i) {
					for(var u = 0; u < i.length; u++) {
						var c = i[u],
							p = c.getAttribute("var"),
							l = p.split("_")[1];
						switch(p) {
							case "muc#roominfo_occupants":
							case "muc#roominfo_maxusers":
							case "muc#roominfo_affiliations":
							case "muc#roominfo_description":
								a[l] = c.textContent || c.text || "";
								break;
							case "muc#roominfo_owner":
								var d = {
									jid: (c.textContent || c.text) + "@" + t,
									affiliation: "owner"
								};
								s.push(d), a[l] = c.textContent || c.text
						}
					}
					a.name = e.getElementsByTagName("identity")[0].getAttribute("name")
				}
				n(o, s, a)
			}, function(e) {
				r({
					type: _code.WEBIM_CONNCTION_GETROOMINFO_ERROR,
					data: e
				})
			})
		}, connection.prototype.queryRoomOccupants = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = {
					xmlns: Strophe.NS.DISCO_ITEMS
				},
				s = $iq({
					from: this.context.jid,
					to: this.context.appKey + "_" + e.roomId + "@conference." + this.domain,
					type: "get"
				}).c("query", n);
			this.context.stropheConn.sendIQ(s.tree(), function(e) {
				var o;
				o = _parseRoomOccupants(e), t(o)
			}, function(e) {
				o({
					type: _code.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR,
					data: e
				})
			})
		}, connection.prototype.isOpened = function() {
			return sock && sock.readyState === _sockjsClient.default.OPEN
		}, connection.prototype.clear = function() {
			var e = this.context.appKey;
			if(this.errorType != _code.WEBIM_CONNCTION_DISCONNECTED && this.logOut && (this.unSendMsgArr = [], this.offLineSendConnecting = !1, this.context = {
					status: _code.STATUS_INIT,
					appKey: e
				}), this.intervalId && clearInterval(this.intervalId), this.restIndex = 0, this.xmppIndex = 0, this.errorType == _code.WEBIM_CONNCTION_CLIENT_LOGOUT || -1 == this.errorType) {
				var t = {
					data: {
						data: "logout"
					},
					type: _code.WEBIM_CONNCTION_CLIENT_LOGOUT
				};
				this.onError(t)
			}
		};
		var _fetchMessages = function(e) {
			var t = this,
				o = e.accessToken || this.context.accessToken;
			if(_utils2.default.isCanSetRequestHeader)
				if(o) {
					var n = this.apiUrl,
						s = this.context.appName,
						r = this.context.orgName;
					if(!s || !r) return void t.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					if(!e.queue) return void t.onError({
						type: "",
						msg: "queue is not specified"
					});
					var i = e.queue,
						a = mr_cache[i] || (mr_cache[i] = {
							msgs: []
						}),
						u = this.context.userId,
						c = -1;
					if(a.msgs.length >= e.count || a.is_last) return void("function" == typeof e.success && e.success(a));
					a && a.next_key && (c = a.next_key);
					var p = {
							queue: i + (e.isGroup ? "@conference.easemob.com" : "@easemob.com"),
							start: c,
							end: -1
						},
						l = {
							url: n + "/" + r + "/" + s + "/users/" + u + "/messageroaming",
							dataType: "json",
							type: "POST",
							headers: {
								Authorization: "Bearer " + o
							},
							data: JSON.stringify(p),
							success: function(o, n) {
								if(o && o.data) {
									var s = o.data,
										r = s.msgs,
										i = r.length;
									a.is_last = s.is_last, a.next_key = s.next_key;
									for(var u = function(e) {
											for(var o = [], n = 0, s = (e = _Base.default.atob(e)).length; n < s; ++n) o.push(e.charCodeAt(n));
											var r = t.context.root.lookup("easemob.pb.Meta");
											return r = r.decode(o), (0, _handleChatMessage.default)(r, {
												errorCode: 0,
												reason: ""
											}, t, !0)
										}, c = 0; c < i; c++) {
										var p = u(r[c].msg);
										p && a.msgs.push(p)
									}
									"function" == typeof e.success && e.success(a)
								}
							} || _utils2.default.emptyfn,
							error: function(e, o) {
								e.error && e.error_description && t.onError({
									type: _code.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,
									msg: e.error_description,
									data: e
								})
							} || _utils2.default.emptyfn
						};
					_utils2.default.ajax(l)
				} else t.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				});
			else t.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		};

		function _parsePrivacy(e) {
			var t = {},
				o = e.getElementsByTagName("item");
			if(o)
				for(var n = 0; n < o.length; n++) {
					var s = o[n],
						r = s.getAttribute("value"),
						i = s.getAttribute("order"),
						a = s.getAttribute("type");
					if(r) {
						var u = _parseNameFromJidFn(r);
						t[u] = {
							type: a,
							order: i,
							jid: r,
							name: u
						}
					}
				}
			return t
		}

		function _parseGroupBlacklist(e) {
			var t = {},
				o = e.getElementsByTagName("item");
			if(o)
				for(var n = 0; n < o.length; n++) {
					var s = o[n],
						r = s.getAttribute("jid"),
						i = s.getAttribute("affiliation"),
						a = s.getAttribute("nick");
					if(r) {
						var u = _parseNameFromJidFn(r);
						t[u] = {
							jid: r,
							affiliation: i,
							nick: a,
							name: u
						}
					}
				}
			return t
		}
		connection.prototype.fetchHistoryMessages = function(e) {
			if(e.queue) {
				var t = e.count || 20;
				! function o() {
					_fetchMessages({
						count: t,
						isGroup: !!e.isGroup,
						queue: e.queue,
						success: function(n) {
							n.msgs.length >= t || n.is_last ? e.success(_utils2.default.reverse(n.msgs.splice(0, t))) : o()
						}
					})
				}()
			} else this.onError({
				type: "",
				msg: "queue is not specified"
			})
		}, connection.prototype.getChatRooms = function(e) {
			if(_utils2.default.isCanSetRequestHeader) {
				var t = this,
					o = e.accessToken || this.context.accessToken;
				if(o) {
					var n = e.apiUrl,
						s = this.context.appName,
						r = this.context.orgName;
					if(!s || !r) return void t.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					var i = {
						url: n + "/" + r + "/" + s + "/chatrooms",
						dataType: "json",
						type: "GET",
						headers: {
							Authorization: "Bearer " + o
						},
						data: {
							pagenum: parseInt(e.pagenum) || 1,
							pagesize: parseInt(e.pagesize) || 20
						},
						success: function(t, o) {
							"function" == typeof e.success && e.success(t)
						} || _utils2.default.emptyfn,
						error: function(e, o, n) {
							e.error && e.error_description && t.onError({
								type: _code.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,
								msg: e.error_description,
								data: e,
								xhr: o
							})
						} || _utils2.default.emptyfn
					};
					_utils2.default.ajax(i)
				} else t.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				})
			} else t.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		}, connection.prototype.joinChatRoom = function(e) {
			e = e || {};
			if(_utils2.default.isCanSetRequestHeader) {
				var t = this,
					o = e.accessToken || this.token;
				if(o) {
					var n = e.apiUrl || this.apiUrl,
						s = this.context.appName,
						r = this.context.orgName,
						i = e.roomId,
						a = e.message || "";
					if(!s || !r) return void t.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					var u = {
						url: n + "/" + r + "/" + s + "/chatrooms/" + i + "/apply",
						dataType: "json",
						type: "POST",
						data: JSON.stringify({
							message: a
						}),
						headers: {
							Authorization: "Bearer " + o,
							"Content-Type": "application/json"
						},
						success: function(t, o) {
							"function" == typeof e.success && e.success(t)
						} || _utils2.default.emptyfn,
						error: function(t, o, n) {
							"function" == typeof e.error && e.error(t)
						} || _utils2.default.emptyfn
					};
					_utils2.default.ajax(u)
				} else t.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				})
			} else t.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		}, connection.prototype.quitChatRoom = function(e) {
			e = e || {};
			if(_utils2.default.isCanSetRequestHeader) {
				var t = this,
					o = e.accessToken || this.token;
				if(o) {
					var n = e.apiUrl || this.apiUrl,
						s = this.context.appName,
						r = this.context.orgName,
						i = e.roomId;
					if(!s || !r) return void t.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					var a = {
						url: n + "/" + r + "/" + s + "/chatrooms/" + i + "/quit",
						dataType: "json",
						type: "DELETE",
						headers: {
							Authorization: "Bearer " + o
						},
						success: function(t, o) {
							"function" == typeof e.success && e.success(t)
						} || _utils2.default.emptyfn,
						error: function(t, o, n) {
							"function" == typeof e.error && e.error(t)
						} || _utils2.default.emptyfn
					};
					_utils2.default.ajax(a)
				} else t.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				})
			} else t.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		}, connection.prototype._onReceiveInviteFromGroup = function(info) {
			info = eval("(" + info + ")");
			var self = this,
				options = {
					title: "Group invitation",
					msg: info.user + " invites you to join into group:" + info.group_id,
					agree: function() {
						WebIM.doQuery('{"type":"acceptInvitationFromGroup","id":"' + info.group_id + '","user":"' + info.user + '"}', function(e) {}, function(e, t) {
							var o = {
								data: {
									data: "acceptInvitationFromGroup error:" + t
								},
								type: _code.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP
							};
							self.onError(o)
						})
					},
					reject: function() {
						WebIM.doQuery('{"type":"declineInvitationFromGroup","id":"' + info.group_id + '","user":"' + info.user + '"}', function(e) {}, function(e, t) {
							var o = {
								data: {
									data: "declineInvitationFromGroup error:" + t
								},
								type: _code.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP
							};
							self.onError(o)
						})
					}
				};
			this.onConfirmPop(options)
		}, connection.prototype._onReceiveInviteAcceptionFromGroup = function(info) {
			info = eval("(" + info + ")");
			var options = {
				title: "Group invitation response",
				msg: info.user + " agreed to join into group:" + info.group_id,
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onReceiveInviteDeclineFromGroup = function(info) {
			info = eval("(" + info + ")");
			var options = {
				title: "Group invitation response",
				msg: info.user + " rejected to join into group:" + info.group_id,
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onAutoAcceptInvitationFromGroup = function(info) {
			info = eval("(" + info + ")");
			var options = {
				title: "Group invitation",
				msg: "You had joined into the group:" + info.group_name + " automatically.Inviter:" + info.user,
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onLeaveGroup = function(info) {
			info = eval("(" + info + ")");
			var options = {
				title: "Group notification",
				msg: "You have been out of the group:" + info.group_id + ".Reason:" + info.msg,
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onReceiveJoinGroupApplication = function(info) {
			info = eval("(" + info + ")");
			var self = this,
				options = {
					title: "Group join application",
					msg: info.user + " applys to join into group:" + info.group_id,
					agree: function() {
						WebIM.doQuery('{"type":"acceptJoinGroupApplication","id":"' + info.group_id + '","user":"' + info.user + '"}', function(e) {}, function(e, t) {
							var o = {
								data: {
									data: "acceptJoinGroupApplication error:" + t
								},
								type: _code.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP
							};
							self.onError(o)
						})
					},
					reject: function() {
						WebIM.doQuery('{"type":"declineJoinGroupApplication","id":"' + info.group_id + '","user":"' + info.user + '"}', function(e) {}, function(e, t) {
							var o = {
								data: {
									data: "declineJoinGroupApplication error:" + t
								},
								type: _code.WEBIM_CONNECTION_DECLINE_JOIN_GROUP
							};
							self.onError(o)
						})
					}
				};
			this.onConfirmPop(options)
		}, connection.prototype._onReceiveAcceptionFromGroup = function(info) {
			info = eval("(" + info + ")");
			var options = {
				title: "Group notification",
				msg: "You had joined into the group:" + info.group_name + ".",
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onReceiveRejectionFromGroup = function() {
			info = eval("(" + info + ")");
			var options = {
				title: "Group notification",
				msg: "You have been rejected to join into the group:" + info.group_name + ".",
				agree: function() {}
			};
			this.onConfirmPop(options)
		}, connection.prototype._onUpdateMyGroupList = function(e) {
			this.onUpdateMyGroupList(e)
		}, connection.prototype._onUpdateMyRoster = function(e) {
			this.onUpdateMyRoster(e)
		}, connection.prototype.reconnect = function(e) {
			var t = this;
			t.xmppIndex < t.xmppHosts.length - 1 && t.xmppIndex++, setTimeout(function() {
				_login({
					access_token: t.context.accessToken
				}, t)
			}, 1e3 * (0 == this.autoReconnectNumTotal ? 0 : this.autoReconnectInterval)), this.autoReconnectNumTotal++
		}, connection.prototype.closed = function() {
			var e = {
				data: {
					data: "Closed error"
				},
				type: _code.WEBIM_CONNECTION_CLOSED
			};
			this.onError(e)
		}, connection.prototype.getBlacklistOld = function(e) {
			e = e || {};
			var t = $iq({
					type: "get"
				}),
				o = e.success || _utils2.default.emptyfn,
				n = e.error || _utils2.default.emptyfn,
				s = this;
			t.c("query", {
				xmlns: "jabber:iq:privacy"
			}).c("list", {
				name: "special"
			}), this.context.stropheConn.sendIQ(t.tree(), function(e) {
				s.onBlacklistUpdate(_parsePrivacy(e)), o()
			}, function() {
				s.onBlacklistUpdate([]), n()
			})
		}, connection.prototype.getBlacklist = function(e) {
			var t = this;
			e = e || {};
			if(_utils2.default.isCanSetRequestHeader) {
				var o = this,
					n = e.accessToken || this.token;
				if(n) {
					var s = e.apiUrl || this.apiUrl,
						r = this.context.appName,
						i = this.context.orgName;
					if(!r || !i) return void o.onError({
						type: _code.WEBIM_CONNCTION_AUTH_ERROR
					});
					var a = {
						url: s + "/" + i + "/" + r + "/users/" + this.user + "/blocks/users",
						dataType: "json",
						type: "GET",
						headers: {
							Authorization: "Bearer " + n
						},
						success: function(o, n) {
							var s = {};
							o.data.forEach(function(e, t) {
								s[e] = {
									name: e
								}
							}), t.onBlacklistUpdate(s), "function" == typeof e.success && e.success(o)
						} || _utils2.default.emptyfn,
						error: function(o, n, s) {
							t.onBlacklistUpdate([]), "function" == typeof e.error && e.error(o)
						} || _utils2.default.emptyfn
					};
					_utils2.default.ajax(a)
				} else o.onError({
					type: _code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR
				})
			} else o.onError({
				type: _code.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR
			})
		}, connection.prototype.addToBlackList = function(e) {
			_HandleRosterMessage.default.operatRoster({
				to: e.name
			}, "ban", this)
		}, connection.prototype.removeFromBlackList = function(e) {
			_HandleRosterMessage.default.operatRoster({
				to: e.name
			}, "allow", this)
		}, connection.prototype._getGroupJid = function(e) {
			return(this.context.appKey || "") + "_" + e + "@conference." + this.domain
		}, connection.prototype.addToGroupBlackList = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = _getJid(e, this),
				s = this._getGroupJid(e.roomId),
				r = $iq({
					type: "set",
					to: s
				});
			r.c("query", {
				xmlns: "http://jabber.org/protocol/muc#admin"
			}).c("item", {
				affiliation: "outcast",
				jid: n
			}), this.context.stropheConn.sendIQ(r.tree(), t, o)
		}, connection.prototype.getGroupBlacklist = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = this._getGroupJid(e.roomId),
				s = $iq({
					type: "get",
					to: n
				});
			s.c("query", {
				xmlns: "http://jabber.org/protocol/muc#admin"
			}).c("item", {
				affiliation: "outcast"
			}), this.context.stropheConn.sendIQ(s.tree(), function(e) {
				t(_parseGroupBlacklist(e))
			}, function() {
				o()
			})
		}, connection.prototype.removeGroupMemberFromBlacklist = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = _getJid(e, this),
				s = this._getGroupJid(e.roomId),
				r = $iq({
					type: "set",
					to: s
				});
			r.c("query", {
				xmlns: "http://jabber.org/protocol/muc#admin"
			}).c("item", {
				affiliation: "none",
				jid: n
			}), this.context.stropheConn.sendIQ(r.tree(), function(e) {
				t()
			}, function() {
				o()
			})
		}, connection.prototype.changeGroupSubject = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = this._getGroupJid(e.roomId),
				s = $iq({
					type: "set",
					to: n
				});
			s.c("query", {
				xmlns: "http://jabber.org/protocol/muc#owner"
			}).c("x", {
				type: "submit",
				xmlns: "jabber:x:data"
			}).c("field", {
				var: "FORM_TYPE"
			}).c("value").t("http://jabber.org/protocol/muc#roomconfig").up().up().c("field", {
				var: "muc#roomconfig_roomname"
			}).c("value").t(e.subject).up().up().c("field", {
				var: "muc#roomconfig_roomdesc"
			}).c("value").t(e.description), this.context.stropheConn.sendIQ(s.tree(), function(e) {
				t()
			}, function() {
				o()
			})
		}, connection.prototype.destroyGroup = function(e) {
			var t = e.success || _utils2.default.emptyfn,
				o = e.error || _utils2.default.emptyfn,
				n = this._getGroupJid(e.roomId),
				s = $iq({
					type: "set",
					to: n
				});
			s.c("query", {
				xmlns: "http://jabber.org/protocol/muc#owner"
			}).c("destroy").c("reason").t(e.reason || ""), this.context.stropheConn.sendIQ(s.tree(), function(e) {
				t()
			}, function() {
				o()
			})
		}, connection.prototype.leaveGroupBySelf = function(e) {
			var t = this,
				o = e.success || _utils2.default.emptyfn,
				n = e.error || _utils2.default.emptyfn,
				s = _getJid(e, this),
				r = this._getGroupJid(e.roomId),
				i = $iq({
					type: "set",
					to: r
				});
			i.c("query", {
				xmlns: "http://jabber.org/protocol/muc#admin"
			}).c("item", {
				affiliation: "none",
				jid: s
			}), this.context.stropheConn.sendIQ(i.tree(), function(e) {
				o(e);
				var n = $pres({
					type: "unavailable",
					to: r + "/" + t.context.userId
				});
				t.sendCommand(n.tree())
			}, function(e) {
				n(e)
			})
		}, connection.prototype.leaveGroup = function(e) {
			for(var t = e.success || _utils2.default.emptyfn, o = e.error || _utils2.default.emptyfn, n = e.list || [], s = this._getGroupJid(e.roomId), r = $iq({
					type: "set",
					to: s
				}), i = r.c("query", {
					xmlns: "http://jabber.org/protocol/muc#admin"
				}), a = Object.keys(n), u = a.length, c = 0; c < u; c++) {
				var p = n[a[c]],
					l = _getJidByName(p, this);
				i = i.c("item", {
					affiliation: "none",
					jid: l
				}).up().c("item", {
					role: "none",
					jid: l
				}).up()
			}
			this.context.stropheConn.sendIQ(r.tree(), function(e) {
				t(e)
			}, function(e) {
				o(e)
			})
		}, connection.prototype.addGroupMembers = function(e) {
			for(var t = e.success || _utils2.default.emptyfn, o = e.error || _utils2.default.emptyfn, n = e.list || [], s = this._getGroupJid(e.roomId), r = $iq({
					type: "set",
					to: s
				}), i = r.c("query", {
					xmlns: "http://jabber.org/protocol/muc#admin"
				}), a = n.length, u = 0; u < a; u++) {
				var c = n[u],
					p = _getJidByName(c, this);
				i = i.c("item", {
					affiliation: "member",
					jid: p
				}).up();
				var l = $msg({
					to: s
				}).c("x", {
					xmlns: "http://jabber.org/protocol/muc#user"
				}).c("invite", {
					to: p
				}).c("reason").t(e.reason || "");
				this.sendCommand(l.tree())
			}
			this.context.stropheConn.sendIQ(r.tree(), function(e) {
				t(e)
			}, function(e) {
				o(e)
			})
		}, connection.prototype.acceptInviteFromGroup = function(e) {
			e.success = function() {}, this.addGroupMembers(e)
		}, connection.prototype.rejectInviteFromGroup = function(e) {}, connection.prototype.createGroupAsync = function(e) {
			var t = e.from,
				o = this,
				n = this._getGroupJid(t),
				s = (this.context.userId, this.groupOption),
				r = e.success || _utils2.default.emptyfn,
				i = $iq({
					type: "get",
					to: n
				}).c("query", {
					xmlns: "http://jabber.org/protocol/muc#owner"
				});
			o.context.stropheConn.sendIQ(i.tree(), function(e) {
				if("setAttribute" in e) {
					var i = e.getElementsByTagName("x")[0];
					i.setAttribute("type", "submit")
				} else Strophe.forEachChild(e, "x", function(e) {
					e.setAttribute("type", "submit")
				});
				Strophe.info("step 5 ----------"), Strophe.forEachChild(i, "field", function(e) {
					var t = e.getAttribute("var"),
						o = e.getElementsByTagName("value")[0];
					switch(Strophe.info(t), t) {
						case "muc#roomconfig_maxusers":
							_setText(o, s.optionsMaxUsers || 200);
							break;
						case "muc#roomconfig_roomname":
							_setText(o, s.subject || "");
							break;
						case "muc#roomconfig_roomdesc":
							_setText(o, s.description || "");
							break;
						case "muc#roomconfig_publicroom":
							_setText(o, +s.optionsPublic);
							break;
						case "muc#roomconfig_membersonly":
							_setText(o, +s.optionsMembersOnly);
							break;
						case "muc#roomconfig_moderatedroom":
							_setText(o, +s.optionsModerate);
							break;
						case "muc#roomconfig_persistentroom":
							_setText(o, 1);
							break;
						case "muc#roomconfig_allowinvites":
							_setText(o, +s.optionsAllowInvites);
							break;
						case "muc#roomconfig_allowvisitornickchange":
						case "muc#roomconfig_allowvisitorstatus":
						case "allow_private_messages":
							_setText(o, 0);
							break;
						case "allow_private_messages_from_visitors":
							_setText(o, "nobody")
					}
				});
				var a = $iq({
					to: n,
					type: "set"
				}).c("query", {
					xmlns: "http://jabber.org/protocol/muc#owner"
				}).cnode(i);
				o.context.stropheConn.sendIQ(a.tree(), function(e) {
					o.addGroupMembers({
						list: s.members,
						roomId: t
					}), r(s)
				}, function(e) {})
			}, function(e) {})
		}, connection.prototype.createGroup = function(e) {
			this.groupOption = e;
			var t = +new Date,
				o = this._getGroupJid(t) + "/" + this.context.userId,
				n = $pres({
					to: o
				}).c("x", {
					xmlns: "http://jabber.org/protocol/muc"
				}).up().c("create", {
					xmlns: "http://jabber.org/protocol/muc"
				}).up();
			this.sendCommand(n.tree())
		}, connection.prototype.createGroupNew = function(e) {
			e.data.owner = this.user, e.data.invite_need_confirm = !1;
			var t = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups",
				dataType: "json",
				type: "POST",
				data: JSON.stringify(e.data),
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			t.success = function(t) {
				e.success(t), this.onCreateGroup(t)
			}.bind(this), t.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(t)
		}, connection.prototype.blockGroup = function(e) {
			var t = e.groupId;
			t = "notification_ignore_" + t;
			var o = {
				entities: []
			};
			o.entities[0] = {}, o.entities[0][t] = !0;
			var n = {
				type: "PUT",
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users/" + this.user,
				data: JSON.stringify(o),
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.listGroups = function(e) {
			var t = [];
			if(t.limit = e.limit, t.cursor = e.cursor, t.cursor || delete t.cursor, isNaN(e.limit)) throw 'The parameter "limit" should be a number';
			var o = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/publicchatgroups",
				type: "GET",
				dataType: "json",
				data: t,
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.getGroup = function(e) {
			var t = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users/" + this.user + "/joined_chatgroups",
				dataType: "json",
				type: "GET",
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			t.success = e.success || _utils2.default.emptyfn, t.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(t)
		}, connection.prototype.changeOwner = function(e) {
			var t = {
					newowner: e.newOwner
				},
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + e.groupId,
					type: "PUT",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					},
					data: JSON.stringify(t)
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.getGroupInfo = function(e) {
			var t = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + e.groupId,
				type: "GET",
				dataType: "json",
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			t.success = e.success || _utils2.default.emptyfn, t.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(t)
		}, connection.prototype.modifyGroup = function(e) {
			var t = e.groupId,
				o = {
					groupname: e.groupName,
					description: e.description
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t,
					type: "PUT",
					data: JSON.stringify(o),
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.listGroupMember = function(e) {
			if(isNaN(e.pageNum) || e.pageNum <= 0) throw 'The parameter "pageNum" should be a positive number';
			if(isNaN(e.pageSize) || e.pageSize <= 0) throw 'The parameter "pageSize" should be a positive number';
			if(null === e.groupId && void 0 === e.groupId) throw 'The parameter "groupId" should be added';
			var t = [],
				o = e.groupId;
			t.pagenum = e.pageNum, t.pagesize = e.pageSize;
			var n = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + o + "/users",
				dataType: "json",
				type: "GET",
				data: t,
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.getGroupAdmin = function(e) {
			var t = e.groupId,
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/admin",
					dataType: "json",
					type: "GET",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.setAdmin = function(e) {
			var t = e.groupId,
				o = {
					newadmin: e.username
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/admin",
					type: "POST",
					dataType: "json",
					data: JSON.stringify(o),
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeAdmin = function(e) {
			var t = e.groupId,
				o = e.username,
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/admin/" + o,
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.dissolveGroup = function(e) {
			var t = e.groupId,
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "?version=v3",
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.quitGroup = function(e) {
			var t = e.groupId,
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/quit",
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.inviteToGroup = function(e) {
			var t = e.groupId,
				o = {
					usernames: e.users
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/invite",
					type: "POST",
					data: JSON.stringify(o),
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.joinGroup = function(e) {
			var t = {
				url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + e.groupId + "/apply",
				type: "POST",
				dataType: "json",
				data: JSON.stringify({
					message: "join group"
				}),
				headers: {
					Authorization: "Bearer " + this.token,
					"Content-Type": "application/json"
				}
			};
			t.success = e.success || _utils2.default.emptyfn, t.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(t)
		}, connection.prototype.agreeJoinGroup = function(e) {
			var t = e.groupId,
				o = {
					applicant: e.applicant,
					verifyResult: !0,
					reason: "no clue"
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/apply_verify",
					type: "POST",
					dataType: "json",
					data: JSON.stringify(o),
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.rejectJoinGroup = function(e) {
			var t = e.groupId,
				o = {
					applicant: e.applicant,
					verifyResult: !1,
					reason: "no clue"
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/apply_verify",
					type: "POST",
					dataType: "json",
					data: JSON.stringify(o),
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.agreeInviteIntoGroup = function(e) {
			var t = e.groupId,
				o = {
					invitee: e.invitee,
					verifyResult: !0
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/invite_verify",
					type: "POST",
					dataType: "json",
					data: JSON.stringify(o),
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.rejectInviteIntoGroup = function(e) {
			var t = e.groupId,
				o = {
					invitee: e.invitee,
					verifyResult: !1
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/invite_verify",
					type: "POST",
					dataType: "json",
					data: JSON.stringify(o),
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeSingleGroupMember = function(e) {
			var t = e.groupId,
				o = e.username,
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/users/" + o,
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeMultiGroupMember = function(e) {
			var t = e.groupId,
				o = e.users.join(","),
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/users/" + o,
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.mute = function(e) {
			var t = e.groupId,
				o = {
					usernames: [e.username],
					mute_duration: e.muteDuration
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/mute",
					dataType: "json",
					type: "POST",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					},
					data: JSON.stringify(o)
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeMute = function(e) {
			var t = e.groupId,
				o = e.username,
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/mute/" + o,
					dataType: "json",
					type: "DELETE",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.getMuted = function(e) {
			var t = e.groupId,
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/mute",
					dataType: "json",
					type: "GET",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		}, connection.prototype.groupBlockSingle = function(e) {
			var t = e.groupId,
				o = e.username,
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/blocks/users/" + o,
					type: "POST",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.groupBlockMulti = function(e) {
			var t = e.groupId,
				o = {
					usernames: e.usernames
				},
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/blocks/users",
					data: JSON.stringify(o),
					type: "POST",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeGroupBlockSingle = function(e) {
			var t = e.groupId,
				o = e.username,
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/blocks/users/" + o,
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.removeGroupBlockMulti = function(e) {
			var t = e.groupId,
				o = e.username.join(","),
				n = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/blocks/users/" + o,
					type: "DELETE",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			n.success = e.success || _utils2.default.emptyfn, n.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(n)
		}, connection.prototype.getGroupBlacklistNew = function(e) {
			var t = e.groupId,
				o = {
					url: this.apiUrl + "/" + this.orgName + "/" + this.appName + "/chatgroups/" + t + "/blocks/users",
					type: "GET",
					dataType: "json",
					headers: {
						Authorization: "Bearer " + this.token,
						"Content-Type": "application/json"
					}
				};
			o.success = e.success || _utils2.default.emptyfn, o.error = e.error || _utils2.default.emptyfn, WebIM.utils.ajax(o)
		};
		var WebIM = window.WebIM || {};
		WebIM.connection = connection, WebIM.utils = _utils2.default, WebIM.statusCode = _code, WebIM.message = _message2.default.message, WebIM.doQuery = function(e, t, o) {
			void 0 !== window.cefQuery && window.cefQuery({
				request: e,
				persistent: !1,
				onSuccess: t,
				onFailure: o
			})
		}, WebIM.debug = function(e) {}, window.WebIM = WebIM, module.hot && module.hot.accept();
		var _default = WebIM;
		exports.default = _default;
	}, {
		"./allnode": "G7Dp",
		"protobufjs": "fN30",
		"sockjs-client": "EWtC",
		"Base64": "wTgU",
		"./status": "KLYY",
		"./utils": "K0yk",
		"./message": "KTph",
		"./queue": "RCHR",
		"./chat/sendChatMessage": "Aofe",
		"./chat/handleChatMessage": "TvlR",
		"./muc/HandleMucMessage": "wnFo",
		"./roster/HandleRosterMessage": "UOYe",
		"./statistics/HandleStatisticsMessage": "pE/p",
		"long": "YA3p"
	}],
	"Focm": [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: !0
		}), exports.default = void 0;
		var e = t(require("./src/connection"));

		function t(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var r = e.default;
		exports.default = r;
	}, {
		"./src/connection": "h12o"
	}]
}, {}, ["Focm"], "WebIM")
//# sourceMappingURL=/webimSDK.js.map