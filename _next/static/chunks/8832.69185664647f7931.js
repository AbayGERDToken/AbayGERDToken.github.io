"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8832],{77625:function(e){var r=Object.prototype.hasOwnProperty,a="~";function t(){}function o(e,r,a){this.fn=e,this.context=r,this.once=a||!1}function i(e,r,t,i,n){if("function"!=typeof t)throw TypeError("The listener must be a function");var s=new o(t,i||e,n),l=a?a+r:r;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function n(e,r){0==--e._eventsCount?e._events=new t:delete e._events[r]}function s(){this._events=new t,this._eventsCount=0}Object.create&&(t.prototype=Object.create(null),new t().__proto__||(a=!1)),s.prototype.eventNames=function(){var e,t,o=[];if(0===this._eventsCount)return o;for(t in e=this._events)r.call(e,t)&&o.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var r=a?a+e:e,t=this._events[r];if(!t)return[];if(t.fn)return[t.fn];for(var o=0,i=t.length,n=Array(i);o<i;o++)n[o]=t[o].fn;return n},s.prototype.listenerCount=function(e){var r=a?a+e:e,t=this._events[r];return t?t.fn?1:t.length:0},s.prototype.emit=function(e,r,t,o,i,n){var s=a?a+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,r),!0;case 3:return u.fn.call(u.context,r,t),!0;case 4:return u.fn.call(u.context,r,t,o),!0;case 5:return u.fn.call(u.context,r,t,o,i),!0;case 6:return u.fn.call(u.context,r,t,o,i,n),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var f,m=u.length;for(c=0;c<m;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,r);break;case 3:u[c].fn.call(u[c].context,r,t);break;case 4:u[c].fn.call(u[c].context,r,t,o);break;default:if(!l)for(f=1,l=Array(d-1);f<d;f++)l[f-1]=arguments[f];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,r,a){return i(this,e,r,a,!1)},s.prototype.once=function(e,r,a){return i(this,e,r,a,!0)},s.prototype.removeListener=function(e,r,t,o){var i=a?a+e:e;if(!this._events[i])return this;if(!r)return n(this,i),this;var s=this._events[i];if(s.fn)s.fn!==r||o&&!s.once||t&&s.context!==t||n(this,i);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==r||o&&!s[l].once||t&&s[l].context!==t)&&c.push(s[l]);c.length?this._events[i]=1===c.length?c[0]:c:n(this,i)}return this},s.prototype.removeAllListeners=function(e){var r;return e?(r=a?a+e:e,this._events[r]&&n(this,r)):(this._events=new t,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=a,s.EventEmitter=s,e.exports=s},87336:function(e,r,a){a.d(r,{v:function(){return t}});var t=a(77625);r.Z=t},8832:function(e,r,a){let t,o,i;a.r(r),a.d(r,{Abi:function(){return s},AbiConstructor:function(){return ec},AbiError:function(){return l},AbiEvent:function(){return c},AbiFunction:function(){return eD},AbiItem:function(){return eu},AbiParameters:function(){return ed},AccessList:function(){return u},AccountProof:function(){return d},Address:function(){return eE},AesGcm:function(){return f},Authorization:function(){return eQ},Base58:function(){return m},Base64:function(){return p},BinaryStateTree:function(){return b},Blobs:function(){return h},Block:function(){return y},BlockOverrides:function(){return r3},Bloom:function(){return x},Bls:function(){return k},BlsPoint:function(){return w},Bytes:function(){return ej},Caches:function(){return aQ},Cbor:function(){return z},ContractAddress:function(){return E},Ed25519:function(){return j},Ens:function(){return B},Errors:function(){return eB},Fee:function(){return P},Filter:function(){return I},Hash:function(){return eP},HdKey:function(){return A},Hex:function(){return ef},Json:function(){return oN},Keystore:function(){return S},Kzg:function(){return g},Log:function(){return q},Mnemonic:function(){return R},P256:function(){return N},PersonalMessage:function(){return U},Provider:function(){return H},PublicKey:function(){return oy},Rlp:function(){return tn},RpcRequest:function(){return G},RpcResponse:function(){return T},RpcSchema:function(){return K},RpcTransport:function(){return C},Secp256k1:function(){return O},Signature:function(){return rY},Siwe:function(){return F},Solidity:function(){return n6},StateOverrides:function(){return L},Transaction:function(){return v},TransactionEnvelope:function(){return _},TransactionReceipt:function(){return D},TransactionRequest:function(){return $},TxEnvelopeEip1559:function(){return M},TxEnvelopeEip2930:function(){return Z},TxEnvelopeEip4844:function(){return Y},TxEnvelopeEip7702:function(){return X},TxEnvelopeLegacy:function(){return J},TypedData:function(){return Q},ValidatorData:function(){return W},Value:function(){return V},WebAuthnP256:function(){return ee},WebCryptoP256:function(){return er},Withdrawal:function(){return r0},X25519:function(){return ea}});var n,s={};a.r(s),a.d(s,{format:function(){return es},from:function(){return el}});var l={};a.r(l),a.d(l,{decode:function(){return em},encode:function(){return ep},format:function(){return eb},from:function(){return eg},fromAbi:function(){return eh},getSelector:function(){return ev},panicReasons:function(){return ey},solidityError:function(){return ex},solidityErrorSelector:function(){return ek},solidityPanic:function(){return ew},solidityPanicSelector:function(){return ez}});var c={};a.r(c),a.d(c,{ArgsMismatchError:function(){return eH},DataMismatchError:function(){return eK},FilterTypeNotSupportedError:function(){return eL},InputNotFoundError:function(){return eG},SelectorTopicMismatchError:function(){return eF},TopicsMismatchError:function(){return eC},assertArgs:function(){return eA},decode:function(){return eS},encode:function(){return eq},format:function(){return eR},from:function(){return eN},fromAbi:function(){return eU},getSelector:function(){return eT}});var u={};a.r(u),a.d(u,{InvalidStorageKeySizeError:function(){return e_},fromTupleList:function(){return e$},toTupleList:function(){return eV}});var d={};a.r(d);var f={};a.r(f),a.d(f,{decrypt:function(){return eZ},encrypt:function(){return eY},getKey:function(){return eX},ivLength:function(){return eM},randomSalt:function(){return eJ}});var m={};a.r(m),a.d(m,{fromBytes:function(){return e1},fromHex:function(){return e2},fromString:function(){return e3},toBytes:function(){return e5},toHex:function(){return e8},toString:function(){return e6}});var p={};a.r(p),a.d(p,{fromBytes:function(){return rr},fromHex:function(){return ra},fromString:function(){return rt},toBytes:function(){return ro},toHex:function(){return ri},toString:function(){return rn}});var b={};a.r(b),a.d(b,{create:function(){return ry},insert:function(){return rx},merkelize:function(){return rk}});var g={};a.r(g),a.d(g,{from:function(){return rI},versionedHashVersion:function(){return rP}});var h={};a.r(h),a.d(h,{BlobSizeTooLargeError:function(){return r$},EmptyBlobError:function(){return rV},EmptyBlobVersionedHashesError:function(){return r_},InvalidVersionedHashSizeError:function(){return rM},InvalidVersionedHashVersionError:function(){return rZ},bytesPerBlob:function(){return rS},bytesPerFieldElement:function(){return rO},commitmentToVersionedHash:function(){return rN},commitmentsToVersionedHashes:function(){return rR},fieldElementsPerBlob:function(){return rA},from:function(){return rU},maxBytesPerTransaction:function(){return rq},sidecarsToVersionedHashes:function(){return rT},to:function(){return rH},toBytes:function(){return rK},toCommitments:function(){return rC},toHex:function(){return rG},toProofs:function(){return rF},toSidecars:function(){return rL},toVersionedHashes:function(){return rD}});var v={};a.r(v),a.d(v,{fromRpc:function(){return rQ},fromRpcType:function(){return rJ},toRpc:function(){return rW},toRpcType:function(){return rX}});var y={};a.r(y),a.d(y,{fromRpc:function(){return r2},toRpc:function(){return r1}});var x={};a.r(x),a.d(x,{contains:function(){return r5},validate:function(){return r8}});var k={};a.r(k),a.d(k,{aggregate:function(){return aL},createKeyPair:function(){return aD},getPublicKey:function(){return a$},noble:function(){return aF},randomPrivateKey:function(){return aV},sign:function(){return a_},verify:function(){return aM}});var w={};a.r(w),a.d(w,{fromBytes:function(){return aX},fromHex:function(){return aJ},toBytes:function(){return aZ},toHex:function(){return aY}});var z={};a.r(z),a.d(z,{ArrayTooLargeError:function(){return tr},ByteStringTooLargeError:function(){return tt},InvalidAdditionalInfoError:function(){return a2},InvalidIndefiniteLengthChunkError:function(){return a8},InvalidMajorTypeError:function(){return a1},InvalidSimpleValueError:function(){return a6},NumberTooLargeError:function(){return a7},ObjectTooLargeError:function(){return ta},StringTooLargeError:function(){return te},UnexpectedTokenError:function(){return a9},Unsupported64BitIntegerError:function(){return a3},UnsupportedBigIntError:function(){return a4},UnsupportedTagError:function(){return a5},decode:function(){return a0},encode:function(){return aW}});var E={};a.r(E),a.d(E,{from:function(){return ts},fromCreate:function(){return tl},fromCreate2:function(){return tc}});var j={};a.r(j),a.d(j,{createKeyPair:function(){return tK},getPublicKey:function(){return tC},noble:function(){return tG},randomPrivateKey:function(){return tF},sign:function(){return tL},verify:function(){return tD}});var B={};a.r(B),a.d(B,{labelhash:function(){return t_},namehash:function(){return tM},normalize:function(){return tZ}});var P={};a.r(P);var I={};a.r(I),a.d(I,{fromRpc:function(){return tY},toRpc:function(){return tX}});var O={};a.r(O),a.d(O,{createKeyPair:function(){return ok},getPublicKey:function(){return ow},getSharedSecret:function(){return oz},noble:function(){return ox},randomPrivateKey:function(){return oE},recoverAddress:function(){return oj},recoverPublicKey:function(){return oB},sign:function(){return oP},verify:function(){return oI}});var A={};a.r(A),a.d(A,{fromExtendedKey:function(){return oA},fromJson:function(){return oS},fromSeed:function(){return oq},path:function(){return oR}});var S={};a.r(S),a.d(S,{decrypt:function(){return ip},encrypt:function(){return ib},pbkdf2:function(){return ig},pbkdf2Async:function(){return ih},scrypt:function(){return iv},scryptAsync:function(){return iy},toKey:function(){return ix},toKeyAsync:function(){return ik}});var q={};a.r(q),a.d(q,{fromRpc:function(){return iz},toRpc:function(){return iE}});var R={};a.r(R),a.d(R,{czech:function(){return iq},english:function(){return iR},french:function(){return iN},italian:function(){return iU},japanese:function(){return iT},korean:function(){return iH},path:function(){return oR},portuguese:function(){return iG},random:function(){return iL},simplifiedChinese:function(){return iK},spanish:function(){return iC},toHdKey:function(){return iD},toPrivateKey:function(){return i$},toSeed:function(){return iV},traditionalChinese:function(){return iF},validate:function(){return i_}});var N={};a.r(N),a.d(N,{createKeyPair:function(){return i8},getPublicKey:function(){return i6},getSharedSecret:function(){return i4},noble:function(){return i5},randomPrivateKey:function(){return i9},recoverPublicKey:function(){return i7},sign:function(){return ne},verify:function(){return nr}});var U={};a.r(U),a.d(U,{encode:function(){return na},getSignPayload:function(){return nt}});var T={};a.r(T),a.d(T,{BaseError:function(){return nl},InternalError:function(){return ny},InvalidInputError:function(){return nc},InvalidParamsError:function(){return nv},InvalidRequestError:function(){return ng},LimitExceededError:function(){return np},MethodNotFoundError:function(){return nh},MethodNotSupportedError:function(){return nm},ParseError:function(){return nx},ResourceNotFoundError:function(){return nu},ResourceUnavailableError:function(){return nd},TransactionRejectedError:function(){return nf},VersionNotSupportedError:function(){return nb},from:function(){return ni},parse:function(){return nn},parseError:function(){return ns}});var H={};a.r(H),a.d(H,{AtomicReadyWalletRejectedUpgradeError:function(){return nR},AtomicityNotSupportedError:function(){return nN},BundleTooLargeError:function(){return nq},ChainDisconnectedError:function(){return nB},DisconnectedError:function(){return nj},DuplicateIdError:function(){return nA},IsUndefinedError:function(){return nG},ProviderRpcError:function(){return nk},SwitchChainError:function(){return nP},UnauthorizedError:function(){return nz},UnknownBundleIdError:function(){return nS},UnsupportedChainIdError:function(){return nO},UnsupportedMethodError:function(){return nE},UnsupportedNonOptionalCapabilityError:function(){return nI},UserRejectedRequestError:function(){return nw},createEmitter:function(){return nU},from:function(){return nT},parseError:function(){return nH}});var G={};a.r(G),a.d(G,{createStore:function(){return nK},from:function(){return nC}});var K={};a.r(K),a.d(K,{from:function(){return nF}});var C={};a.r(C),a.d(C,{HttpError:function(){return n$},MalformedResponseError:function(){return nV},fromHttp:function(){return nD}});var F={};a.r(F),a.d(F,{InvalidMessageFieldError:function(){return n8},createMessage:function(){return n0},domainRegex:function(){return nM},generateNonce:function(){return n1},ipRegex:function(){return nZ},isUri:function(){return n2},localhostRegex:function(){return nY},nonceRegex:function(){return nX},parseMessage:function(){return n3},prefixRegex:function(){return nQ},schemeRegex:function(){return nJ},suffixRegex:function(){return nW},validateMessage:function(){return n5}});var L={};a.r(L),a.d(L,{fromRpc:function(){return n4},toRpc:function(){return n9}});var D={};a.r(D),a.d(D,{fromRpc:function(){return st},fromRpcStatus:function(){return n7},fromRpcType:function(){return sr},toRpc:function(){return so},toRpcStatus:function(){return se},toRpcType:function(){return sa}});var $={};a.r($),a.d($,{fromRpc:function(){return si},toRpc:function(){return sn}});var V={};a.r(V),a.d(V,{InvalidDecimalNumberError:function(){return sp},exponents:function(){return ss},format:function(){return sl},formatEther:function(){return sc},formatGwei:function(){return su},from:function(){return sd},fromEther:function(){return sf},fromGwei:function(){return sm}});var _={};a.r(_),a.d(_,{FeeCapTooHighError:function(){return sb},GasPriceTooHighError:function(){return sg},InvalidChainIdError:function(){return sh},InvalidSerializedError:function(){return sv},TipAboveFeeCapError:function(){return sy}});var M={};a.r(M),a.d(M,{assert:function(){return sw},deserialize:function(){return sz},from:function(){return sE},getSignPayload:function(){return sj},hash:function(){return sB},serialize:function(){return sP},serializedType:function(){return sx},toRpc:function(){return sI},type:function(){return sk},validate:function(){return sO}});var Z={};a.r(Z),a.d(Z,{assert:function(){return sq},deserialize:function(){return sR},from:function(){return sN},getSignPayload:function(){return sU},hash:function(){return sT},serialize:function(){return sH},serializedType:function(){return sA},toRpc:function(){return sG},type:function(){return sS},validate:function(){return sK}});var Y={};a.r(Y),a.d(Y,{assert:function(){return sL},deserialize:function(){return sD},from:function(){return s$},getSignPayload:function(){return sV},hash:function(){return s_},serialize:function(){return sM},serializedType:function(){return sC},toRpc:function(){return sZ},type:function(){return sF},validate:function(){return sY}});var X={};a.r(X),a.d(X,{assert:function(){return sQ},deserialize:function(){return sW},from:function(){return s0},getSignPayload:function(){return s1},hash:function(){return s2},serialize:function(){return s3},serializedType:function(){return sX},type:function(){return sJ},validate:function(){return s5}});var J={};a.r(J),a.d(J,{assert:function(){return s6},deserialize:function(){return s4},from:function(){return s9},getSignPayload:function(){return s7},hash:function(){return le},serialize:function(){return lr},toRpc:function(){return la},type:function(){return s8},validate:function(){return lt}});var Q={};a.r(Q),a.d(Q,{BytesSizeMismatchError:function(){return lp},InvalidDomainError:function(){return lb},InvalidPrimaryTypeError:function(){return lg},InvalidStructTypeError:function(){return lh},assert:function(){return lo},domainSeparator:function(){return li},encode:function(){return ln},encodeData:function(){return lv},encodeField:function(){return lx},encodeType:function(){return ls},extractEip712DomainTypes:function(){return ll},findTypeDependencies:function(){return lk},getSignPayload:function(){return lc},hashDomain:function(){return lu},hashStruct:function(){return ld},hashType:function(){return ly},serialize:function(){return lf},validate:function(){return lm}});var W={};a.r(W),a.d(W,{encode:function(){return lw},getSignPayload:function(){return lz}});var ee={};a.r(ee),a.d(ee,{CredentialCreationFailedError:function(){return lN},CredentialRequestFailedError:function(){return lU},createChallenge:function(){return lj},createCredential:function(){return lB},getAuthenticatorData:function(){return lP},getClientDataJSON:function(){return lI},getCredentialCreationOptions:function(){return lO},getCredentialRequestOptions:function(){return lA},getSignPayload:function(){return lS},sign:function(){return lq},verify:function(){return lR}});var er={};a.r(er),a.d(er,{createKeyPair:function(){return lT},createKeyPairECDH:function(){return lH},getSharedSecret:function(){return lG},sign:function(){return lK},verify:function(){return lC}});var ea={};a.r(ea),a.d(ea,{createKeyPair:function(){return lL},getPublicKey:function(){return lD},getSharedSecret:function(){return l$},noble:function(){return lF},randomPrivateKey:function(){return lV}});var et=a(84092),eo=a(34271),ei=a(1050),en=a(40411);function es(e){return function(e){let r=[],a=e.length;for(let t=0;t<a;t++){let a=e[t],o=(0,et.t)(a);r.push(o)}return r}(e)}function el(e){return!function(e){for(let r of e)if("string"!=typeof r)return!1;return!0}(e)?e:function(e){let r=(0,ei.D)(e),a=[],t=e.length;for(let o=0;o<t;o++){let t=e[o];(0,eo.N0)(t)||a.push((0,en.cK)(t,r))}return a}(e)}var ec=a(6390),eu=a(99561),ed=a(1733),ef=a(19586);function em(...e){let[r,a,t={}]=(()=>{if(Array.isArray(e[0])){let[r,a,t,o]=e;return[eh(r,a),t,o]}return e})();if(4>ef.size(a))throw new eu.InvalidSelectorSizeError({data:a});if(r.inputs?.length===0)return;let o=ed.decode(r.inputs,ef.slice(a,4),t);return o&&1===Object.keys(o).length?Array.isArray(o)?o[0]:Object.values(o)[0]:o}function ep(...e){let[r,a]=(()=>{if(Array.isArray(e[0])){let[r,a,...t]=e;return[eh(r,a),t]}let[r,...a]=e;return[r,a]})(),t=ev(r),o=a.length>0?ed.encode(r.inputs,a[0]):void 0;return o?ef.concat(t,o):t}function eb(e){return et.t(e)}function eg(e,r={}){return eu.from(e,r)}function eh(e,r,a){if("Error"===r)return ex;if("Panic"===r)return ew;if(ef.validate(r,{strict:!1})){let e=ef.slice(r,0,4);if(e===ek)return ex;if(e===ez)return ew}let t=eu.fromAbi(e,r,a);if("error"!==t.type)throw new eu.NotFoundError({name:r,type:"error"});return t}function ev(e){return eu.getSelector(e)}let ey={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},ex=eg({inputs:[{name:"message",type:"string"}],name:"Error",type:"error"}),ek="0x08c379a0",ew=eg({inputs:[{name:"reason",type:"uint8"}],name:"Panic",type:"error"}),ez="0x4e487b71";var eE=a(76298),ej=a(79866),eB=a(71725),eP=a(99317),eI=a(44405),eO=a(41380);function eA(e,r,a){if(!r||!a)throw new eH({abiEvent:e,expected:r,given:a});function t(e,r,a){return"address"===e.type?eE.isEqual(r,a):"string"===e.type?eP.keccak256(ej.fromString(r))===a:"bytes"===e.type?eP.keccak256(r)===a:r===a}if(Array.isArray(r)&&Array.isArray(a))for(let[o,i]of a.entries()){if(null==i)continue;let n=e.inputs[o];if(!n)throw new eG({abiEvent:e,name:`${o}`});let s=Array.isArray(i)?i:[i],l=!1;for(let e of s)t(n,e,r[o])&&(l=!0);if(!l)throw new eH({abiEvent:e,expected:r,given:a})}if("object"==typeof r&&!Array.isArray(r)&&"object"==typeof a&&!Array.isArray(a))for(let[o,i]of Object.entries(a)){if(null==i)continue;let n=e.inputs.find(e=>e.name===o);if(!n)throw new eG({abiEvent:e,name:o});let s=Array.isArray(i)?i:[i],l=!1;for(let e of s)t(n,e,r[o])&&(l=!0);if(!l)throw new eH({abiEvent:e,expected:r,given:a})}}function eS(...e){let[r,a]=(()=>{if(Array.isArray(e[0])){let[r,a,t]=e;return[eU(r,a),t]}return e})(),{data:t,topics:o}=a,[i,...n]=o,s=eT(r);if(i!==s)throw new eF({abiEvent:r,actual:i,expected:s});let{inputs:l}=r,c=l?.every(e=>!("name"in e&&e.name)),u=c?[]:{},d=l.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<d.length;e++){let a=d[e],t=n[e];if(!t)throw new eC({abiEvent:r,param:a});u[c?e:a.name||e]="string"===a.type||"bytes"===a.type||"tuple"===a.type||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(ed.decode([a],t)||[])[0]}let f=l.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=ed.decode(f,t);if(e){if(c)u=[...u,...e];else for(let r=0;r<f.length;r++){let a=l.indexOf(f[r]);u[f[r].name||a]=e[r]}}}catch(e){if(e instanceof ed.DataSizeTooSmallError||e instanceof eI.lQ)throw new eK({abiEvent:r,data:t,parameters:f,size:ef.size(t)});throw e}else throw new eK({abiEvent:r,data:"0x",parameters:f,size:0})}return Object.values(u).length>0?u:void 0}function eq(...e){let[r,a]=(()=>{if(Array.isArray(e[0])){let[r,a,t]=e;return[eU(r,a),t]}let[r,a]=e;return[r,a]})(),t=[];if(a&&r.inputs){let e=r.inputs.filter(e=>"indexed"in e&&e.indexed),o=Array.isArray(a)?a:Object.values(a).length>0?e?.map((e,r)=>a[e.name??r])??[]:[];if(o.length>0){let r=(e,r)=>{if("string"===e.type)return eP.keccak256(ef.fromString(r));if("bytes"===e.type)return eP.keccak256(r);if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new eL(e.type);return ed.encode([e],[r])};t=e?.map((e,a)=>Array.isArray(o[a])?o[a].map((t,i)=>r(e,o[a][i])):void 0!==o[a]&&null!==o[a]?r(e,o[a]):null)??[]}}return{topics:[r.hash?r.hash:eT(r),...t]}}function eR(e){return et.t(e)}function eN(e,r={}){return eu.from(e,r)}function eU(e,r,a){let t=eu.fromAbi(e,r,a);if("event"!==t.type)throw new eu.NotFoundError({name:r,type:"event"});return t}function eT(e){return eu.getSignatureHash(e)}class eH extends eB.BaseError{constructor({abiEvent:e,expected:r,given:a}){super("Given arguments do not match the expected arguments.",{metaMessages:[`Event: ${eR(e)}`,`Expected Arguments: ${r?"":"None"}`,r?(0,eO.xr)(r):void 0,`Given Arguments: ${a?"":"None"}`,a?(0,eO.xr)(a):void 0]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.ArgsMismatchError"})}}class eG extends eB.BaseError{constructor({abiEvent:e,name:r}){super(`Parameter "${r}" not found on \`${eR(e)}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.InputNotFoundError"})}}class eK extends eB.BaseError{constructor({abiEvent:e,data:r,parameters:a,size:t}){super(`Data size of ${t} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Non-indexed Parameters: (${ed.format(a)})`,`Data:   ${r} (${t} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.DataMismatchError"}),Object.defineProperty(this,"abiEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"parameters",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiEvent=e,this.data=r,this.parameters=a,this.size=t}}class eC extends eB.BaseError{constructor({abiEvent:e,param:r}){super(`Expected a topic for indexed event parameter${r.name?` "${r.name}"`:""} for "${eR(e)}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.TopicsMismatchError"}),Object.defineProperty(this,"abiEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiEvent=e}}class eF extends eB.BaseError{constructor({abiEvent:e,actual:r,expected:a}){super(`topics[0]="${r}" does not match the expected topics[0]="${a}".`,{metaMessages:[`Event: ${eR(e)}`,`Selector: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.SelectorTopicMismatchError"})}}class eL extends eB.BaseError{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEvent.FilterTypeNotSupportedError"})}}var eD=a(69768);function e$(e){let r=[];for(let a=0;a<e.length;a++){let[t,o]=e[a];t&&eE.assert(t,{strict:!1}),r.push({address:t,storageKeys:o.map(e=>eP.validate(e)?e:ef.trimLeft(e))})}return r}function eV(e){if(!e||0===e.length)return[];let r=[];for(let{address:a,storageKeys:t}of e){for(let e=0;e<t.length;e++)if(32!==ef.size(t[e]))throw new e_({storageKey:t[e]});a&&eE.assert(a,{strict:!1}),r.push([a,t])}return r}class e_ extends eB.BaseError{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${ef.size(e)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccessList.InvalidStorageKeySizeError"})}}let eM=16;async function eZ(e,r,a={}){let{as:t="string"==typeof e?"Hex":"Bytes"}=a,o=ej.from(e),i=o.slice(0,eM),n=o.slice(eM),s=new Uint8Array(await globalThis.crypto.subtle.decrypt({name:"AES-GCM",iv:i},r,ej.from(n)));return"Bytes"===t?s:ef.from(s)}async function eY(e,r,a={}){let{as:t="string"==typeof e?"Hex":"Bytes"}=a,o=ej.random(eM),i=await globalThis.crypto.subtle.encrypt({name:"AES-GCM",iv:o},r,ej.from(e)),n=ej.concat(o,new Uint8Array(i));return"Bytes"===t?n:ef.from(n)}async function eX(e){let{iterations:r=9e5,password:a,salt:t=eJ(32)}=e,o=await globalThis.crypto.subtle.importKey("raw",ej.fromString(a),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);return await globalThis.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:r,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}function eJ(e=32){return ej.random(e)}var eQ=a(25506);let eW=Object.freeze({1:0n,2:1n,3:2n,4:3n,5:4n,6:5n,7:6n,8:7n,9:8n,A:9n,B:10n,C:11n,D:12n,E:13n,F:14n,G:15n,H:16n,J:17n,K:18n,L:19n,M:20n,N:21n,P:22n,Q:23n,R:24n,S:25n,T:26n,U:27n,V:28n,W:29n,X:30n,Y:31n,Z:32n,a:33n,b:34n,c:35n,d:36n,e:37n,f:38n,g:39n,h:40n,i:41n,j:42n,k:43n,m:44n,n:45n,o:46n,p:47n,q:48n,r:49n,s:50n,t:51n,u:52n,v:53n,w:54n,x:55n,y:56n,z:57n});function e0(e){let r,a=ej.from(e),t=(r=e,e instanceof Uint8Array&&(r=ef.fromBytes(a)),BigInt(r)),o="";for(;t>0n;){let e=Number(t%58n);t/=58n,o="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[e]+o}for(;a.length>1&&0===a[0];)o="1"+o,a=a.slice(1);return o}function e1(e){return e0(e)}function e2(e){return e0(e)}function e3(e){return e0(ej.fromString(e))}function e5(e){return ej.fromHex(e8(e))}function e8(e){let r=BigInt(0),a=0,t=!0;for(let o=0;o<e.length;o++){let i=e[o];if(t&&"1"===i?a++:t=!1,"bigint"!=typeof eW[i])throw Error("invalid base58 character: "+i);r*=58n,r+=eW[i]}return a?`0x${"0".repeat(2*a)}${r.toString(16)}`:`0x${r.toString(16)}`}function e6(e){return ef.toString(e8(e))}let e4=new TextEncoder,e9=new TextDecoder,e7=Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((e,r)=>[r,e.charCodeAt(0)])),re={...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((e,r)=>[e.charCodeAt(0),r])),61:0,45:62,95:63};function rr(e,r={}){let{pad:a=!0,url:t=!1}=r,o=new Uint8Array(4*Math.ceil(e.length/3));for(let r=0,a=0;a<e.length;r+=4,a+=3){let t=(e[a]<<16)+(e[a+1]<<8)+(0|e[a+2]);o[r]=e7[t>>18],o[r+1]=e7[t>>12&63],o[r+2]=e7[t>>6&63],o[r+3]=e7[63&t]}let i=e.length%3,n=4*Math.floor(e.length/3)+(i&&i+1),s=e9.decode(new Uint8Array(o.buffer,0,n));return a&&1===i&&(s+="=="),a&&2===i&&(s+="="),t&&(s=s.replaceAll("+","-").replaceAll("/","_")),s}function ra(e,r={}){return rr(ej.fromHex(e),r)}function rt(e,r={}){return rr(ej.fromString(e),r)}function ro(e){let r=e.replace(/=+$/,""),a=r.length,t=new Uint8Array(a+3);e4.encodeInto(r+"===",t);for(let e=0,a=0;e<r.length;e+=4,a+=3){let r=(re[t[e]]<<18)+(re[t[e+1]]<<12)+(re[t[e+2]]<<6)+re[t[e+3]];t[a]=r>>16,t[a+1]=r>>8&255,t[a+2]=255&r}return new Uint8Array(t.buffer,0,(a>>2)*3+(a%4&&a%4-1))}function ri(e){return ef.fromBytes(ro(e))}function rn(e){return ej.toString(ro(e))}var rs=a(45391),rl=a(44430),rc=a(42021);function ru(e,r,a,t,o){return e=e+r+o|0,a=a+(t=(0,rc.np)(t^e,16))|0,{a:e,b:r=(0,rc.np)(r^a,12),c:a,d:t}}function rd(e,r,a,t,o){return e=e+r+o|0,a=a+(t=(0,rc.np)(t^e,8))|0,{a:e,b:r=(0,rc.np)(r^a,7),c:a,d:t}}class rf extends rc.kb{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,(0,rc.k8)(e),(0,rc.k8)(r),this.blockLen=e,this.outputLen=r,this.buffer=new Uint8Array(e),this.buffer32=(0,rc.Jq)(this.buffer)}update(e){(0,rc.$h)(this),e=(0,rc.O0)(e),(0,rc.gk)(e);let{blockLen:r,buffer:a,buffer32:t}=this,o=e.length,i=e.byteOffset,n=e.buffer;for(let s=0;s<o;){this.pos===r&&((0,rc.Ux)(t),this.compress(t,0,!1),(0,rc.Ux)(t),this.pos=0);let l=Math.min(r-this.pos,o-s),c=i+s;if(l===r&&!(c%4)&&s+l<o){let e=new Uint32Array(n,c,Math.floor((o-s)/4));(0,rc.Ux)(e);for(let a=0;s+r<o;a+=t.length,s+=r)this.length+=r,this.compress(e,a,!1);(0,rc.Ux)(e);continue}a.set(e.subarray(s,s+l),this.pos),this.pos+=l,this.length+=l,s+=l}return this}digestInto(e){(0,rc.$h)(this),(0,rc.eB)(e,this);let{pos:r,buffer32:a}=this;this.finished=!0,(0,rc.ru)(this.buffer.subarray(r)),(0,rc.Ux)(a),this.compress(a,0,!0),(0,rc.Ux)(a);let t=(0,rc.Jq)(e);this.get().forEach((e,r)=>t[r]=(0,rc.N$)(e))}digest(){let{buffer:e,outputLen:r}=this;this.digestInto(e);let a=e.slice(0,r);return this.destroy(),a}_cloneInto(e){let{buffer:r,length:a,finished:t,destroyed:o,outputLen:i,pos:n}=this;return e||(e=new this.constructor({dkLen:i})),e.set(...this.get()),e.buffer.set(r),e.destroyed=o,e.finished=t,e.length=a,e.pos=n,e.outputLen=i,e}clone(){return this._cloneInto()}}function rm(e,r,a,t,o,i,n,s,l,c,u,d,f,m,p,b,g,h,v,y){let x=0;for(let k=0;k<t;k++)({a:o,b:l,c:f,d:g}=ru(o,l,f,g,a[r+e[x++]])),({a:o,b:l,c:f,d:g}=rd(o,l,f,g,a[r+e[x++]])),({a:i,b:c,c:m,d:h}=ru(i,c,m,h,a[r+e[x++]])),({a:i,b:c,c:m,d:h}=rd(i,c,m,h,a[r+e[x++]])),({a:n,b:u,c:p,d:v}=ru(n,u,p,v,a[r+e[x++]])),({a:n,b:u,c:p,d:v}=rd(n,u,p,v,a[r+e[x++]])),({a:s,b:d,c:b,d:y}=ru(s,d,b,y,a[r+e[x++]])),({a:s,b:d,c:b,d:y}=rd(s,d,b,y,a[r+e[x++]])),({a:o,b:c,c:p,d:y}=ru(o,c,p,y,a[r+e[x++]])),({a:o,b:c,c:p,d:y}=rd(o,c,p,y,a[r+e[x++]])),({a:i,b:u,c:b,d:g}=ru(i,u,b,g,a[r+e[x++]])),({a:i,b:u,c:b,d:g}=rd(i,u,b,g,a[r+e[x++]])),({a:n,b:d,c:f,d:h}=ru(n,d,f,h,a[r+e[x++]])),({a:n,b:d,c:f,d:h}=rd(n,d,f,h,a[r+e[x++]])),({a:s,b:l,c:m,d:v}=ru(s,l,m,v,a[r+e[x++]])),{a:s,b:l,c:m,d:v}=rd(s,l,m,v,a[r+e[x++]]);return{v0:o,v1:i,v2:n,v3:s,v4:l,v5:c,v6:u,v7:d,v8:f,v9:m,v10:p,v11:b,v12:g,v13:h,v14:v,v15:y}}rs.r$;let rp={CHUNK_START:1,CHUNK_END:2,PARENT:4,ROOT:8,KEYED_HASH:16,DERIVE_KEY_CONTEXT:32,DERIVE_KEY_MATERIAL:64},rb=rs.r$.slice(),rg=(()=>{let e=Array.from({length:16},(e,r)=>r),r=e=>[2,6,3,10,7,0,4,13,1,11,12,5,9,14,15,8].map(r=>e[r]),a=[];for(let t=0,o=e;t<7;t++,o=r(o))a.push(...o);return Uint8Array.from(a)})();class rh extends rf{constructor(e={},r=0){super(64,void 0===e.dkLen?32:e.dkLen),this.chunkPos=0,this.chunksDone=0,this.flags=0,this.stack=[],this.posOut=0,this.bufferOut32=new Uint32Array(16),this.chunkOut=0,this.enableXOF=!0;let{key:a,context:t}=e,o=void 0!==t;if(void 0!==a){if(o)throw Error('Only "key" or "context" can be specified at same time');let e=(0,rc.O0)(a).slice();(0,rc.gk)(e,32),this.IV=(0,rc.Jq)(e),(0,rc.Ux)(this.IV),this.flags=r|rp.KEYED_HASH}else if(o){let e=(0,rc.O0)(t),a=new rh({dkLen:32},rp.DERIVE_KEY_CONTEXT).update(e).digest();this.IV=(0,rc.Jq)(a),(0,rc.Ux)(this.IV),this.flags=r|rp.DERIVE_KEY_MATERIAL}else this.IV=rb.slice(),this.flags=r;this.state=this.IV.slice(),this.bufferOut=(0,rc.u8)(this.bufferOut32)}get(){return[]}set(){}b2Compress(e,r,a,t=0){let{state:o,pos:i}=this,{h:n,l:s}=(0,rl.Ev)(BigInt(e),!0),{v0:l,v1:c,v2:u,v3:d,v4:f,v5:m,v6:p,v7:b,v8:g,v9:h,v10:v,v11:y,v12:x,v13:k,v14:w,v15:z}=rm(rg,t,a,7,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],rb[0],rb[1],rb[2],rb[3],n,s,i,r);o[0]=l^g,o[1]=c^h,o[2]=u^v,o[3]=d^y,o[4]=f^x,o[5]=m^k,o[6]=p^w,o[7]=b^z}compress(e,r=0,a=!1){let t=this.flags;if(this.chunkPos||(t|=rp.CHUNK_START),(15===this.chunkPos||a)&&(t|=rp.CHUNK_END),a||(this.pos=this.blockLen),this.b2Compress(this.chunksDone,t,e,r),this.chunkPos+=1,16===this.chunkPos||a){let e=this.state;this.state=this.IV.slice();for(let r,t=this.chunksDone+1;(a||!(1&t))&&(r=this.stack.pop());t>>=1)this.buffer32.set(r,0),this.buffer32.set(e,8),this.pos=this.blockLen,this.b2Compress(0,this.flags|rp.PARENT,this.buffer32,0),e=this.state,this.state=this.IV.slice();this.chunksDone++,this.chunkPos=0,this.stack.push(e)}this.pos=0}_cloneInto(e){e=super._cloneInto(e);let{IV:r,flags:a,state:t,chunkPos:o,posOut:i,chunkOut:n,stack:s,chunksDone:l}=this;return e.state.set(t.slice()),e.stack=s.map(e=>Uint32Array.from(e)),e.IV.set(r),e.flags=a,e.chunkPos=o,e.chunksDone=l,e.posOut=i,e.chunkOut=n,e.enableXOF=this.enableXOF,e.bufferOut32.set(this.bufferOut32),e}destroy(){this.destroyed=!0,(0,rc.ru)(this.state,this.buffer32,this.IV,this.bufferOut32),(0,rc.ru)(...this.stack)}b2CompressOut(){let{state:e,pos:r,flags:a,buffer32:t,bufferOut32:o}=this,{h:i,l:n}=(0,rl.Ev)(BigInt(this.chunkOut++));(0,rc.Ux)(t);let{v0:s,v1:l,v2:c,v3:u,v4:d,v5:f,v6:m,v7:p,v8:b,v9:g,v10:h,v11:v,v12:y,v13:x,v14:k,v15:w}=rm(rg,0,t,7,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],rb[0],rb[1],rb[2],rb[3],n,i,r,a);o[0]=s^b,o[1]=l^g,o[2]=c^h,o[3]=u^v,o[4]=d^y,o[5]=f^x,o[6]=m^k,o[7]=p^w,o[8]=e[0]^b,o[9]=e[1]^g,o[10]=e[2]^h,o[11]=e[3]^v,o[12]=e[4]^y,o[13]=e[5]^x,o[14]=e[6]^k,o[15]=e[7]^w,(0,rc.Ux)(t),(0,rc.Ux)(o),this.posOut=0}finish(){if(this.finished)return;this.finished=!0,(0,rc.ru)(this.buffer.subarray(this.pos));let e=this.flags|rp.ROOT;this.stack.length?(e|=rp.PARENT,(0,rc.Ux)(this.buffer32),this.compress(this.buffer32,0,!0),(0,rc.Ux)(this.buffer32),this.chunksDone=0,this.pos=this.blockLen):e|=(this.chunkPos?0:rp.CHUNK_START)|rp.CHUNK_END,this.flags=e,this.b2CompressOut()}writeInto(e){(0,rc.$h)(this,!1),(0,rc.gk)(e),this.finish();let{blockLen:r,bufferOut:a}=this;for(let t=0,o=e.length;t<o;){this.posOut>=r&&this.b2CompressOut();let i=Math.min(r-this.posOut,o-t);e.set(a.subarray(this.posOut,this.posOut+i),t),this.posOut+=i,t+=i}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible after digest call");return this.writeInto(e)}xof(e){return(0,rc.k8)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,rc.eB)(e,this),this.finished)throw Error("digest() was already called");return this.enableXOF=!1,this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}}let rv=(0,rc.t3)(e=>new rh(e));function ry(){return{root:rw()}}function rx(e,r,a){let t=ej.slice(r,0,31),o=ej.slice(r,31)[0];if("empty"===e.root.type){e.root=rE(t),e.root.values[o]=a;return}e.root=function e(r,a,t,o,i){let n=r;if("empty"===n.type)return(n=rE(a)).values[t]=o,n;let s=rj(a);if("stem"===n.type){if(ej.isEqual(n.stem,a))return n.values[t]=o,n;let e=rj(n.stem);return function e(r,a,t,o,i,n){if(a[n]===t[n]){let s=rz();return 0===a[n]?s.left=e(r,a,t,o,i,n+1):s.right=e(r,a,t,o,i,n+1),s}let s=rz(),l=a[n],c=function(e){let r=new Uint8Array(e.length/8);for(let a=0;a<e.length;a+=8){let t=0;for(let r=0;r<8;r++)t|=e[a+r]<<7-r;r[a/8]=t}return r}(a);return 0===l?(s.left=rE(c),s.left.values[o]=i,s.right=r):(s.right=rE(c),s.right.values[o]=i,s.left=r),s}(n,s,e,t,o,i)}return"internal"===n.type?(0===s[i]?n.left=e(n.left,a,t,o,i+1):n.right=e(n.right,a,t,o,i+1),n):rw()}(e.root,t,o,a,0)}function rk(e){return function e(r){if("empty"===r.type)return new Uint8Array(32).fill(0);if("internal"===r.type){let a=e(r.left),t=e(r.right);return rB(ej.concat(a,t))}let a=r.values.map(rB);for(;a.length>1;){let e=[];for(let r=0;r<a.length;r+=2)e.push(rB(ej.concat(a[r],a[r+1])));a=e}return rB(ej.concat(r.stem,new Uint8Array(1).fill(0),a[0]))}(e.root)}function rw(){return{type:"empty"}}function rz(){return{left:rw(),right:rw(),type:"internal"}}function rE(e){return{stem:e,values:Array.from({length:256},()=>void 0),type:"stem"}}function rj(e){let r=[];for(let a of e)for(let e=0;e<8;e++)r.push(a>>7-e&1);return r}function rB(e){return e&&e.some(e=>0!==e)?rv(e):new Uint8Array(32).fill(0)}let rP=1;function rI(e){let{blobToKzgCommitment:r,computeBlobKzgProof:a}=e;return{blobToKzgCommitment:r,computeBlobKzgProof:a}}let rO=32,rA=4096,rS=131072,rq=761855;function rR(e,r={}){let{version:a}=r,t=r.as??("string"==typeof e[0]?"Hex":"Bytes"),o=[];for(let r of e)o.push(rN(r,{as:t,version:a}));return o}function rN(e,r={}){let{version:a=1}=r,t=r.as??("string"==typeof e?"Hex":"Bytes"),o=eP.sha256(e,{as:"Bytes"});return o.set([a],0),"Bytes"===t?o:ef.fromBytes(o)}function rU(e,r={}){let a=r.as??("string"==typeof e?"Hex":"Bytes"),t="string"==typeof e?ej.fromHex(e):e,o=ej.size(t);if(!o)throw new rV;if(o>rq)throw new r$({maxSize:rq,size:o});let i=[],n=!0,s=0;for(;n;){let e=eI.Ue(new Uint8Array(rS)),r=0;for(;r<rA;){let a=t.slice(s,s+(rO-1));if(e.pushByte(0),e.pushBytes(a),a.length<31){e.pushByte(128),n=!1;break}r++,s+=31}i.push(e)}return"Bytes"===a?i.map(e=>e.bytes):i.map(e=>ef.fromBytes(e.bytes))}function rT(e,r={}){let{version:a}=r,t=r.as??("string"==typeof e[0].blob?"Hex":"Bytes"),o=[];for(let{commitment:r}of e)o.push(rN(r,{as:t,version:a}));return o}function rH(e,r){let a=r??("string"==typeof e[0]?"Hex":"Bytes"),t="string"==typeof e[0]?e.map(e=>ej.fromHex(e)):e,o=t.reduce((e,r)=>e+r.length,0),i=eI.Ue(new Uint8Array(o)),n=!0;for(let e of t){let r=eI.Ue(e);for(;n&&r.position<e.length;){r.incrementPosition(1);let a=31;for(let t in e.length-r.position<31&&(a=e.length-r.position),Array.from({length:a})){let e=r.readByte();if(128===e&&!r.inspectBytes(r.remaining).includes(128)){n=!1;break}i.pushByte(e)}}}let s=i.bytes.slice(0,i.position);return"Hex"===a?ef.fromBytes(s):s}function rG(e){return rH(e,"Hex")}function rK(e){return rH(e,"Bytes")}function rC(e,r){let{kzg:a}=r,t=r.as??("string"==typeof e[0]?"Hex":"Bytes"),o="string"==typeof e[0]?e.map(e=>ej.fromHex(e)):e,i=[];for(let e of o)i.push(Uint8Array.from(a.blobToKzgCommitment(e)));return"Bytes"===t?i:i.map(e=>ef.fromBytes(e))}function rF(e,r){let{kzg:a}=r,t=r.as??("string"==typeof e[0]?"Hex":"Bytes"),o="string"==typeof e[0]?e.map(e=>ej.fromHex(e)):e,i="string"==typeof r.commitments[0]?r.commitments.map(e=>ej.fromHex(e)):r.commitments,n=[];for(let e=0;e<o.length;e++){let r=o[e],t=i[e];n.push(Uint8Array.from(a.computeBlobKzgProof(r,t)))}return"Bytes"===t?n:n.map(e=>ef.fromBytes(e))}function rL(e,r){let{kzg:a}=r,t=r.commitments??rC(e,{kzg:a}),o=r.proofs??rF(e,{commitments:t,kzg:a}),i=[];for(let r=0;r<e.length;r++)i.push({blob:e[r],commitment:t[r],proof:o[r]});return i}function rD(e,r){return rR(rC(e,r),r)}class r$ extends eB.BaseError{constructor({maxSize:e,size:r}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${r} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Blobs.BlobSizeTooLargeError"})}}class rV extends eB.BaseError{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Blobs.EmptyBlobError"})}}class r_ extends eB.BaseError{constructor(){super("Blob versioned hashes must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Blobs.EmptyBlobVersionedHashesError"})}}class rM extends eB.BaseError{constructor({hash:e,size:r}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Blobs.InvalidVersionedHashSizeError"})}}class rZ extends eB.BaseError{constructor({hash:e,version:r}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${rP}`,`Received: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Blobs.InvalidVersionedHashVersionError"})}}var rY=a(92876);let rX={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3",eip7702:"0x4"},rJ={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function rQ(e,r={}){if(!e)return null;let a=rY.extract(e),t={...e,...a};return t.blockNumber=e.blockNumber?BigInt(e.blockNumber):null,t.data=e.input,t.gas=BigInt(e.gas??0n),t.nonce=BigInt(e.nonce??0n),t.transactionIndex=e.transactionIndex?Number(e.transactionIndex):null,t.value=BigInt(e.value??0n),e.authorizationList&&(t.authorizationList=eQ.fromRpcList(e.authorizationList)),e.chainId&&(t.chainId=Number(e.chainId)),e.gasPrice&&(t.gasPrice=BigInt(e.gasPrice)),e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=BigInt(e.maxFeePerBlobGas)),e.maxFeePerGas&&(t.maxFeePerGas=BigInt(e.maxFeePerGas)),e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=BigInt(e.maxPriorityFeePerGas)),e.type&&(t.type=rJ[e.type]??e.type),a&&(t.v=rY.yParityToV(a.yParity)),t}function rW(e,r){let a={};return a.blockHash=e.blockHash,a.blockNumber="bigint"==typeof e.blockNumber?ef.fromNumber(e.blockNumber):null,a.from=e.from,a.gas=ef.fromNumber(e.gas??0n),a.hash=e.hash,a.input=e.input,a.nonce=ef.fromNumber(e.nonce??0n),a.to=e.to,a.transactionIndex=e.transactionIndex?ef.fromNumber(e.transactionIndex):null,a.type=rX[e.type]??e.type,a.value=ef.fromNumber(e.value??0n),e.accessList&&(a.accessList=e.accessList),e.authorizationList&&(a.authorizationList=eQ.toRpcList(e.authorizationList)),e.blobVersionedHashes&&(a.blobVersionedHashes=e.blobVersionedHashes),e.chainId&&(a.chainId=ef.fromNumber(e.chainId)),"bigint"==typeof e.gasPrice&&(a.gasPrice=ef.fromNumber(e.gasPrice)),"bigint"==typeof e.maxFeePerBlobGas&&(a.maxFeePerBlobGas=ef.fromNumber(e.maxFeePerBlobGas)),"bigint"==typeof e.maxFeePerGas&&(a.maxFeePerGas=ef.fromNumber(e.maxFeePerGas)),"bigint"==typeof e.maxPriorityFeePerGas&&(a.maxPriorityFeePerGas=ef.fromNumber(e.maxPriorityFeePerGas)),"bigint"==typeof e.r&&(a.r=ef.fromNumber(e.r,{size:32})),"bigint"==typeof e.s&&(a.s=ef.fromNumber(e.s,{size:32})),"number"==typeof e.v&&(a.v=ef.fromNumber(e.v,{size:1})),"number"==typeof e.yParity&&(a.yParity=0===e.yParity?"0x0":"0x1"),a}var r0=a(55807);function r1(e,r={}){let a=e.transactions.map(e=>"string"==typeof e?e:rW(e));return{baseFeePerGas:"bigint"==typeof e.baseFeePerGas?ef.fromNumber(e.baseFeePerGas):void 0,blobGasUsed:"bigint"==typeof e.blobGasUsed?ef.fromNumber(e.blobGasUsed):void 0,excessBlobGas:"bigint"==typeof e.excessBlobGas?ef.fromNumber(e.excessBlobGas):void 0,extraData:e.extraData,difficulty:"bigint"==typeof e.difficulty?ef.fromNumber(e.difficulty):void 0,gasLimit:ef.fromNumber(e.gasLimit),gasUsed:ef.fromNumber(e.gasUsed),hash:e.hash,logsBloom:e.logsBloom,miner:e.miner,mixHash:e.mixHash,nonce:e.nonce,number:"bigint"==typeof e.number?ef.fromNumber(e.number):null,parentBeaconBlockRoot:e.parentBeaconBlockRoot,parentHash:e.parentHash,receiptsRoot:e.receiptsRoot,sealFields:e.sealFields,sha3Uncles:e.sha3Uncles,size:ef.fromNumber(e.size),stateRoot:e.stateRoot,timestamp:ef.fromNumber(e.timestamp),totalDifficulty:"bigint"==typeof e.totalDifficulty?ef.fromNumber(e.totalDifficulty):void 0,transactions:a,transactionsRoot:e.transactionsRoot,uncles:e.uncles,withdrawals:e.withdrawals?.map(r0.toRpc),withdrawalsRoot:e.withdrawalsRoot}}function r2(e,r={}){if(!e)return null;let a=e.transactions.map(e=>"string"==typeof e?e:rQ(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):void 0,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:BigInt(e.gasLimit??0n),gasUsed:BigInt(e.gasUsed??0n),number:e.number?BigInt(e.number):null,size:BigInt(e.size??0n),stateRoot:e.stateRoot,timestamp:BigInt(e.timestamp??0n),totalDifficulty:BigInt(e.totalDifficulty??0n),transactions:a,withdrawals:e.withdrawals?.map(r0.fromRpc)}}var r3=a(59921);function r5(e,r){let a=ej.fromHex(e),t=eP.keccak256(r,{as:"Bytes"});for(let e of[0,2,4]){let r=t[e+1]+(t[e]<<8)&2047;if((a[255-Math.floor(r/8)]&1<<r%8)==0)return!1}return!0}function r8(e){return ef.validate(e)&&256===ef.size(e)}var r6=a(6643),r4=a(31757),r9=a(53520);let r7=r9.Hv;function ae(e,r){if(ar(e),ar(r),e<0||e>=1<<8*r)throw Error("invalid I2OSP input: "+e);let a=Array.from({length:r}).fill(0);for(let t=r-1;t>=0;t--)a[t]=255&e,e>>>=8;return new Uint8Array(a)}function ar(e){if(!Number.isSafeInteger(e))throw Error("number expected")}function aa(e,r,a){let t;(0,r9.FF)(a,{DST:"stringOrUint8Array",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});let{p:o,k:i,m:n,hash:s,expand:l,DST:c}=a;(0,r9.gk)(e),ar(r);let u="string"==typeof c?(0,r9.iY)(c):c,d=Math.ceil((o.toString(2).length+i)/8),f=r*n*d;if("xmd"===l)t=function(e,r,a,t){(0,r9.gk)(e),(0,r9.gk)(r),ar(a),r.length>255&&(r=t((0,r9.eV)((0,r9.iY)("H2C-OVERSIZE-DST-"),r)));let{outputLen:o,blockLen:i}=t,n=Math.ceil(a/o);if(a>65535||n>255)throw Error("expand_message_xmd: invalid lenInBytes");let s=(0,r9.eV)(r,ae(r.length,1)),l=ae(0,i),c=ae(a,2),u=Array(n),d=t((0,r9.eV)(l,e,c,ae(0,1),s));u[0]=t((0,r9.eV)(d,ae(1,1),s));for(let e=1;e<=n;e++){let r=[function(e,r){let a=new Uint8Array(e.length);for(let t=0;t<e.length;t++)a[t]=e[t]^r[t];return a}(d,u[e-1]),ae(e+1,1),s];u[e]=t((0,r9.eV)(...r))}return(0,r9.eV)(...u).slice(0,a)}(e,u,f,s);else if("xof"===l)t=function(e,r,a,t,o){if((0,r9.gk)(e),(0,r9.gk)(r),ar(a),r.length>255&&(r=o.create({dkLen:Math.ceil(2*t/8)}).update((0,r9.iY)("H2C-OVERSIZE-DST-")).update(r).digest()),a>65535||r.length>255)throw Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:a}).update(e).update(ae(a,2)).update(r).update(ae(r.length,1)).digest()}(e,u,f,i,s);else if("_internal_pass"===l)t=e;else throw Error('expand must be "xmd" or "xof"');let m=Array(r);for(let e=0;e<r;e++){let r=Array(n);for(let a=0;a<n;a++){let i=d*(a+e*n),s=t.subarray(i,i+d);r[a]=(0,r4.wQ)(r7(s),o)}m[e]=r}return m}function at(e,r){let a=r.map(e=>Array.from(e).reverse());return(r,t)=>{let[o,i,n,s]=a.map(a=>a.reduce((a,t)=>e.add(e.mul(a,r),t))),[l,c]=(0,r4.Eg)(e,[i,s],!0);return r=e.mul(o,l),t=e.mul(t,e.mul(n,c)),{x:r,y:t}}}function ao(e,r,a){if("function"!=typeof r)throw Error("mapToCurve() must be defined");function t(a){return e.fromAffine(r(a))}function o(r){let a=r.clearCofactor();return a.equals(e.ZERO)?e.ZERO:(a.assertValidity(),a)}return{defaults:a,hashToCurve(e,r){let i=aa(e,2,{...a,DST:a.DST,...r}),n=t(i[0]),s=t(i[1]);return o(n.add(s))},encodeToCurve:(e,r)=>o(t(aa(e,1,{...a,DST:a.encodeDST,...r})[0])),mapToCurve(e){if(!Array.isArray(e))throw Error("expected array of bigints");for(let r of e)if("bigint"!=typeof r)throw Error("expected array of bigints");return o(t(e))}}}var ai=a(14814);let an=BigInt(0),as=BigInt(1),al=BigInt(2),ac=BigInt(3),au=BigInt(0),ad=BigInt(1),af=BigInt(2),am=BigInt(3);function ap(e,r,a,t,o=1,i){let n=BigInt(void 0===i?t:i),s=a**BigInt(t),l=[];for(let i=0;i<o;i++){let o=BigInt(i+1),c=[];for(let i=0,l=ad;i<t;i++){let t=(o*l-o)/n%s;c.push(e.pow(r,t)),l*=a}l.push(c)}return l}let ab=BigInt(0),ag=BigInt(1),ah=BigInt(2),av=BigInt(3),ay=BigInt(4),ax=BigInt("0xd201000000010000"),ak=(0,r9.Dd)(ax),{Fp:aw,Fp2:az,Fp6:aE,Fp4Square:aj,Fp12:aB}=function(e){let{ORDER:r}=e,a=r4.gN(r),t=a.create(e.NONRESIDUE||BigInt(-1)),o=a.div(a.ONE,af),i=ap(a,t,a.ORDER,2)[0],n=({c0:e,c1:r},{c0:t,c1:o})=>({c0:a.add(e,t),c1:a.add(r,o)}),s=({c0:e,c1:r},{c0:t,c1:o})=>({c0:a.sub(e,t),c1:a.sub(r,o)}),l=({c0:e,c1:r},t)=>{if("bigint"==typeof t)return{c0:a.mul(e,t),c1:a.mul(r,t)};let{c0:o,c1:i}=t,n=a.mul(e,o),s=a.mul(r,i);return{c0:a.sub(n,s),c1:a.sub(a.mul(a.add(e,r),a.add(o,i)),a.add(n,s))}},c=({c0:e,c1:r})=>{let t=a.add(e,r),o=a.sub(e,r),i=a.add(e,e);return{c0:a.mul(t,o),c1:a.mul(i,r)}},u=e=>{if(2!==e.length)throw Error("invalid tuple");let r=e.map(e=>a.create(e));return{c0:r[0],c1:r[1]}},d=r*r,f=u(e.FP2_NONRESIDUE),m={ORDER:d,isLE:a.isLE,NONRESIDUE:f,BITS:(0,r9.Dd)(d),BYTES:Math.ceil((0,r9.Dd)(d)/8),MASK:(0,r9.dQ)((0,r9.Dd)(d)),ZERO:{c0:a.ZERO,c1:a.ZERO},ONE:{c0:a.ONE,c1:a.ZERO},create:e=>e,isValid:({c0:e,c1:r})=>"bigint"==typeof e&&"bigint"==typeof r,is0:({c0:e,c1:r})=>a.is0(e)&&a.is0(r),eql:({c0:e,c1:r},{c0:t,c1:o})=>a.eql(e,t)&&a.eql(r,o),neg:({c0:e,c1:r})=>({c0:a.neg(e),c1:a.neg(r)}),pow:(e,r)=>r4.Q(m,e,r),invertBatch:e=>r4.Eg(m,e),add:n,sub:s,mul:l,sqr:c,addN:n,subN:s,mulN:l,sqrN:c,div:(e,r)=>m.mul(e,"bigint"==typeof r?a.inv(a.create(r)):m.inv(r)),inv:({c0:e,c1:r})=>{let t=a.inv(a.create(e*e+r*r));return{c0:a.mul(t,a.create(e)),c1:a.mul(t,a.create(-r))}},sqrt:r=>{if(e.Fp2sqrt)return e.Fp2sqrt(r);let{c0:i,c1:n}=r;if(a.is0(n))return 1===r4.IN(a,i)?m.create({c0:a.sqrt(i),c1:a.ZERO}):m.create({c0:a.ZERO,c1:a.sqrt(a.div(i,t))});let s=a.sqrt(a.sub(a.sqr(i),a.mul(a.sqr(n),t))),l=a.mul(a.add(s,i),o);-1===r4.IN(a,l)&&(l=a.sub(l,s));let c=a.sqrt(l),u=m.create({c0:c,c1:a.div(a.mul(n,o),c)});if(!m.eql(m.sqr(u),r))throw Error("Cannot find square root");let d=m.neg(u),{re:f,im:p}=m.reim(u),{re:b,im:g}=m.reim(d);return p>g||p===g&&f>b?u:d},isOdd:e=>{let{re:r,im:a}=m.reim(e),t=r%af,o=a%af;return BigInt(t||r===au&&o)==ad},fromBytes(e){if(e.length!==m.BYTES)throw Error("fromBytes invalid length="+e.length);return{c0:a.fromBytes(e.subarray(0,a.BYTES)),c1:a.fromBytes(e.subarray(a.BYTES))}},toBytes:({c0:e,c1:r})=>(0,r9.eV)(a.toBytes(e),a.toBytes(r)),cmov:({c0:e,c1:r},{c0:t,c1:o},i)=>({c0:a.cmov(e,t,i),c1:a.cmov(r,o,i)}),reim:({c0:e,c1:r})=>({re:e,im:r}),mulByNonresidue:({c0:e,c1:r})=>m.mul({c0:e,c1:r},f),mulByB:e.Fp2mulByB,fromBigTuple:u,frobeniusMap:({c0:e,c1:r},t)=>({c0:e,c1:a.mul(r,i[t%2])})},p=({c0:e,c1:r,c2:a},{c0:t,c1:o,c2:i})=>({c0:m.add(e,t),c1:m.add(r,o),c2:m.add(a,i)}),b=({c0:e,c1:r,c2:a},{c0:t,c1:o,c2:i})=>({c0:m.sub(e,t),c1:m.sub(r,o),c2:m.sub(a,i)}),g=({c0:e,c1:r,c2:a},t)=>{if("bigint"==typeof t)return{c0:m.mul(e,t),c1:m.mul(r,t),c2:m.mul(a,t)};let{c0:o,c1:i,c2:n}=t,s=m.mul(e,o),l=m.mul(r,i),c=m.mul(a,n);return{c0:m.add(s,m.mulByNonresidue(m.sub(m.mul(m.add(r,a),m.add(i,n)),m.add(l,c)))),c1:m.add(m.sub(m.mul(m.add(e,r),m.add(o,i)),m.add(s,l)),m.mulByNonresidue(c)),c2:m.sub(m.add(l,m.mul(m.add(e,a),m.add(o,n))),m.add(s,c))}},h=({c0:e,c1:r,c2:a})=>{let t=m.sqr(e),o=m.mul(m.mul(e,r),af),i=m.mul(m.mul(r,a),af),n=m.sqr(a);return{c0:m.add(m.mulByNonresidue(i),t),c1:m.add(m.mulByNonresidue(n),o),c2:m.sub(m.sub(m.add(m.add(o,m.sqr(m.add(m.sub(e,r),a))),i),t),n)}},[v,y]=ap(m,f,a.ORDER,6,2,3),x={ORDER:m.ORDER,isLE:m.isLE,BITS:3*m.BITS,BYTES:3*m.BYTES,MASK:(0,r9.dQ)(3*m.BITS),ZERO:{c0:m.ZERO,c1:m.ZERO,c2:m.ZERO},ONE:{c0:m.ONE,c1:m.ZERO,c2:m.ZERO},create:e=>e,isValid:({c0:e,c1:r,c2:a})=>m.isValid(e)&&m.isValid(r)&&m.isValid(a),is0:({c0:e,c1:r,c2:a})=>m.is0(e)&&m.is0(r)&&m.is0(a),neg:({c0:e,c1:r,c2:a})=>({c0:m.neg(e),c1:m.neg(r),c2:m.neg(a)}),eql:({c0:e,c1:r,c2:a},{c0:t,c1:o,c2:i})=>m.eql(e,t)&&m.eql(r,o)&&m.eql(a,i),sqrt:r9.EQ,div:(e,r)=>x.mul(e,"bigint"==typeof r?a.inv(a.create(r)):x.inv(r)),pow:(e,r)=>r4.Q(x,e,r),invertBatch:e=>r4.Eg(x,e),add:p,sub:b,mul:g,sqr:h,addN:p,subN:b,mulN:g,sqrN:h,inv:({c0:e,c1:r,c2:a})=>{let t=m.sub(m.sqr(e),m.mulByNonresidue(m.mul(a,r))),o=m.sub(m.mulByNonresidue(m.sqr(a)),m.mul(e,r)),i=m.sub(m.sqr(r),m.mul(e,a)),n=m.inv(m.add(m.mulByNonresidue(m.add(m.mul(a,o),m.mul(r,i))),m.mul(e,t)));return{c0:m.mul(n,t),c1:m.mul(n,o),c2:m.mul(n,i)}},fromBytes:e=>{if(e.length!==x.BYTES)throw Error("fromBytes invalid length="+e.length);return{c0:m.fromBytes(e.subarray(0,m.BYTES)),c1:m.fromBytes(e.subarray(m.BYTES,2*m.BYTES)),c2:m.fromBytes(e.subarray(2*m.BYTES))}},toBytes:({c0:e,c1:r,c2:a})=>(0,r9.eV)(m.toBytes(e),m.toBytes(r),m.toBytes(a)),cmov:({c0:e,c1:r,c2:a},{c0:t,c1:o,c2:i},n)=>({c0:m.cmov(e,t,n),c1:m.cmov(r,o,n),c2:m.cmov(a,i,n)}),fromBigSix:e=>{if(!Array.isArray(e)||6!==e.length)throw Error("invalid Fp6 usage");return{c0:m.fromBigTuple(e.slice(0,2)),c1:m.fromBigTuple(e.slice(2,4)),c2:m.fromBigTuple(e.slice(4,6))}},frobeniusMap:({c0:e,c1:r,c2:a},t)=>({c0:m.frobeniusMap(e,t),c1:m.mul(m.frobeniusMap(r,t),v[t%6]),c2:m.mul(m.frobeniusMap(a,t),y[t%6])}),mulByFp2:({c0:e,c1:r,c2:a},t)=>({c0:m.mul(e,t),c1:m.mul(r,t),c2:m.mul(a,t)}),mulByNonresidue:({c0:e,c1:r,c2:a})=>({c0:m.mulByNonresidue(a),c1:e,c2:r}),mul1:({c0:e,c1:r,c2:a},t)=>({c0:m.mulByNonresidue(m.mul(a,t)),c1:m.mul(e,t),c2:m.mul(r,t)}),mul01({c0:e,c1:r,c2:a},t,o){let i=m.mul(e,t),n=m.mul(r,o);return{c0:m.add(m.mulByNonresidue(m.sub(m.mul(m.add(r,a),o),n)),i),c1:m.sub(m.sub(m.mul(m.add(t,o),m.add(e,r)),i),n),c2:m.add(m.sub(m.mul(m.add(e,a),t),i),n)}}},k=ap(m,f,a.ORDER,12,1,6)[0],w=({c0:e,c1:r},{c0:a,c1:t})=>({c0:x.add(e,a),c1:x.add(r,t)}),z=({c0:e,c1:r},{c0:a,c1:t})=>({c0:x.sub(e,a),c1:x.sub(r,t)}),E=({c0:e,c1:r},a)=>{if("bigint"==typeof a)return{c0:x.mul(e,a),c1:x.mul(r,a)};let{c0:t,c1:o}=a,i=x.mul(e,t),n=x.mul(r,o);return{c0:x.add(i,x.mulByNonresidue(n)),c1:x.sub(x.mul(x.add(e,r),x.add(t,o)),x.add(i,n))}},j=({c0:e,c1:r})=>{let a=x.mul(e,r);return{c0:x.sub(x.sub(x.mul(x.add(x.mulByNonresidue(r),e),x.add(e,r)),a),x.mulByNonresidue(a)),c1:x.add(a,a)}},B={ORDER:m.ORDER,isLE:x.isLE,BITS:2*x.BITS,BYTES:2*x.BYTES,MASK:(0,r9.dQ)(2*x.BITS),ZERO:{c0:x.ZERO,c1:x.ZERO},ONE:{c0:x.ONE,c1:x.ZERO},create:e=>e,isValid:({c0:e,c1:r})=>x.isValid(e)&&x.isValid(r),is0:({c0:e,c1:r})=>x.is0(e)&&x.is0(r),neg:({c0:e,c1:r})=>({c0:x.neg(e),c1:x.neg(r)}),eql:({c0:e,c1:r},{c0:a,c1:t})=>x.eql(e,a)&&x.eql(r,t),sqrt:r9.EQ,inv:({c0:e,c1:r})=>{let a=x.inv(x.sub(x.sqr(e),x.mulByNonresidue(x.sqr(r))));return{c0:x.mul(e,a),c1:x.neg(x.mul(r,a))}},div:(e,r)=>B.mul(e,"bigint"==typeof r?a.inv(a.create(r)):B.inv(r)),pow:(e,r)=>r4.Q(B,e,r),invertBatch:e=>r4.Eg(B,e),add:w,sub:z,mul:E,sqr:j,addN:w,subN:z,mulN:E,sqrN:j,fromBytes:e=>{if(e.length!==B.BYTES)throw Error("fromBytes invalid length="+e.length);return{c0:x.fromBytes(e.subarray(0,x.BYTES)),c1:x.fromBytes(e.subarray(x.BYTES))}},toBytes:({c0:e,c1:r})=>(0,r9.eV)(x.toBytes(e),x.toBytes(r)),cmov:({c0:e,c1:r},{c0:a,c1:t},o)=>({c0:x.cmov(e,a,o),c1:x.cmov(r,t,o)}),fromBigTwelve:e=>({c0:x.fromBigSix(e.slice(0,6)),c1:x.fromBigSix(e.slice(6,12))}),frobeniusMap(e,r){let{c0:a,c1:t,c2:o}=x.frobeniusMap(e.c1,r),i=k[r%12];return{c0:x.frobeniusMap(e.c0,r),c1:x.create({c0:m.mul(a,i),c1:m.mul(t,i),c2:m.mul(o,i)})}},mulByFp2:({c0:e,c1:r},a)=>({c0:x.mulByFp2(e,a),c1:x.mulByFp2(r,a)}),conjugate:({c0:e,c1:r})=>({c0:e,c1:x.neg(r)}),mul014:({c0:e,c1:r},a,t,o)=>{let i=x.mul01(e,a,t),n=x.mul1(r,o);return{c0:x.add(x.mulByNonresidue(n),i),c1:x.sub(x.sub(x.mul01(x.add(r,e),a,m.add(t,o)),i),n)}},mul034:({c0:e,c1:r},a,t,o)=>{let i=x.create({c0:m.mul(e.c0,a),c1:m.mul(e.c1,a),c2:m.mul(e.c2,a)}),n=x.mul01(r,t,o),s=x.mul01(x.add(e,r),m.add(a,t),o);return{c0:x.add(x.mulByNonresidue(n),i),c1:x.sub(s,x.add(i,n))}},_cyclotomicSquare:e.Fp12cyclotomicSquare,_cyclotomicExp:e.Fp12cyclotomicExp,finalExponentiate:e.Fp12finalExponentiate};return{Fp:a,Fp2:m,Fp6:x,Fp4Square:function(e,r){let a=m.sqr(e),t=m.sqr(r);return{first:m.add(m.mulByNonresidue(t),a),second:m.sub(m.sub(m.sqr(m.add(e,r)),a),t)}},Fp12:B}}({ORDER:BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),FP2_NONRESIDUE:[ag,ag],Fp2mulByB:({c0:e,c1:r})=>{let a=aw.mul(e,ay),t=aw.mul(r,ay);return{c0:aw.sub(a,t),c1:aw.add(a,t)}},Fp12cyclotomicSquare:({c0:e,c1:r})=>{let{c0:a,c1:t,c2:o}=e,{c0:i,c1:n,c2:s}=r,{first:l,second:c}=aj(a,n),{first:u,second:d}=aj(i,o),{first:f,second:m}=aj(t,s),p=az.mulByNonresidue(m);return{c0:aE.create({c0:az.add(az.mul(az.sub(l,a),ah),l),c1:az.add(az.mul(az.sub(u,t),ah),u),c2:az.add(az.mul(az.sub(f,o),ah),f)}),c1:aE.create({c0:az.add(az.mul(az.add(p,i),ah),p),c1:az.add(az.mul(az.add(c,n),ah),c),c2:az.add(az.mul(az.add(d,s),ah),d)})}},Fp12cyclotomicExp(e,r){let a=aB.ONE;for(let t=ak-1;t>=0;t--)a=aB._cyclotomicSquare(a),(0,r9.H_)(r,t)&&(a=aB.mul(a,e));return a},Fp12finalExponentiate:e=>{let r=aB.div(aB.frobeniusMap(e,6),e),a=aB.mul(aB.frobeniusMap(r,2),r),t=aB.conjugate(aB._cyclotomicExp(a,ax)),o=aB.mul(aB.conjugate(aB._cyclotomicSquare(a)),t),i=aB.conjugate(aB._cyclotomicExp(o,ax)),n=aB.conjugate(aB._cyclotomicExp(i,ax)),s=aB.mul(aB.conjugate(aB._cyclotomicExp(n,ax)),aB._cyclotomicSquare(t)),l=aB.conjugate(aB._cyclotomicExp(s,ax)),c=aB.frobeniusMap(aB.mul(t,n),2),u=aB.frobeniusMap(aB.mul(i,a),3),d=aB.frobeniusMap(aB.mul(s,aB.conjugate(a)),1),f=aB.mul(aB.mul(l,aB.conjugate(o)),a);return aB.mul(aB.mul(aB.mul(c,u),d),f)}}),aP=(0,r4.gN)(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")),aI=at(az,[[["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6","0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"],["0x0","0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"],["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e","0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"],["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1","0x0"]],[["0x0","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"],["0xc","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"],["0x1","0x0"]],[["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706","0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"],["0x0","0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"],["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c","0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"],["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10","0x0"]],[["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"],["0x0","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"],["0x12","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"],["0x1","0x0"]]].map(e=>e.map(e=>az.fromBigTuple(e.map(BigInt))))),aO=at(aw,[["0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7","0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb","0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0","0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861","0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9","0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983","0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84","0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e","0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317","0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e","0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b","0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"],["0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c","0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff","0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19","0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8","0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e","0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5","0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a","0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e","0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641","0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a","0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"],["0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33","0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696","0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6","0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb","0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb","0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0","0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2","0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29","0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587","0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30","0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132","0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e","0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8","0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133","0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b","0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"],["0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1","0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d","0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2","0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416","0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d","0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac","0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c","0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9","0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a","0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55","0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8","0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092","0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc","0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7","0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f","0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(e=>BigInt(e)))),aA=(0,ai.L4)(az,{A:az.create({c0:aw.create(ab),c1:aw.create(BigInt(240))}),B:az.create({c0:aw.create(BigInt(1012)),c1:aw.create(BigInt(1012))}),Z:az.create({c0:aw.create(BigInt(-2)),c1:aw.create(BigInt(-1))})}),aS=(0,ai.L4)(aw,{A:aw.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),B:aw.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),Z:aw.create(BigInt(11))}),{G2psi:aq,G2psi2:aR}=function(e,r,a){let t=r.pow(a,(e.ORDER-ad)/am),o=r.pow(a,(e.ORDER-ad)/af);function i(e,a){return[r.mul(r.frobeniusMap(e,1),t),r.mul(r.frobeniusMap(a,1),o)]}let n=r.pow(a,(e.ORDER**af-ad)/am),s=r.pow(a,(e.ORDER**af-ad)/af);if(!r.eql(s,r.neg(r.ONE)))throw Error("psiFrobenius: PSI2_Y!==-1");function l(e,a){return[r.mul(e,n),r.neg(a)]}let c=e=>(r,a)=>{let t=a.toAffine(),o=e(t.x,t.y);return r.fromAffine({x:o[0],y:o[1]})},u=c(i),d=c(l);return{psi:i,psi2:l,G2psi:u,G2psi2:d,PSI_X:t,PSI_Y:o,PSI2_X:n,PSI2_Y:s}}(aw,az,az.div(az.ONE,az.NONRESIDUE)),aN=Object.freeze({DST:"BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",encodeDST:"BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",p:aw.ORDER,m:2,k:128,expand:"xmd",hash:r6.JQ}),aU=aH(aw.toBytes(ab),{infinity:!0,compressed:!0});function aT(e){let r=224&(e=e.slice())[0];return e[0]&=31,{compressed:!!(r>>7&1),infinity:!!(r>>6&1),sort:!!(r>>5&1),value:e}}function aH(e,r){if(224&e[0])throw Error("setMask: non-empty mask");return r.compressed&&(e[0]|=128),r.infinity&&(e[0]|=64),r.sort&&(e[0]|=32),e}function aG(e){e.assertValidity();let r=e.equals(aC.G1.ProjectivePoint.ZERO),{x:a,y:t}=e.toAffine();if(r)return aU.slice();let o=!!(t*ah/aw.ORDER);return aH((0,r9.tL)(a,aw.BYTES),{compressed:!0,sort:o})}function aK(e){e.assertValidity();let r=aw.BYTES;if(e.equals(aC.G2.ProjectivePoint.ZERO))return(0,r9.eV)(aU,(0,r9.tL)(ab,r));let{x:a,y:t}=e.toAffine(),{re:o,im:i}=az.reim(a),{re:n,im:s}=az.reim(t),l=!!((s>ab?s*ah:n*ah)/aw.ORDER&ag);return(0,r9.eV)(aH((0,r9.tL)(i,r),{sort:l,compressed:!0}),(0,r9.tL)(o,r))}let aC=function(e){let r;let{Fp:a,Fr:t,Fp2:o,Fp6:i,Fp12:n}=e.fields,s=e.params.xNegative,l=e.params.twistType,c=(0,ai.su)({n:t.ORDER,...e.G1}),u=Object.assign(c,ao(c.ProjectivePoint,e.G1.mapToCurve,{...e.htfDefaults,...e.G1.htfDefaults})),d=(0,ai.su)({n:t.ORDER,...e.G2}),f=Object.assign(d,ao(d.ProjectivePoint,e.G2.mapToCurve,{...e.htfDefaults,...e.G2.htfDefaults}));if("multiplicative"===l)r=(e,r,a,t,i,s)=>n.mul014(t,e,o.mul(r,i),o.mul(a,s));else if("divisive"===l)r=(e,r,a,t,i,s)=>n.mul034(t,o.mul(a,s),o.mul(r,i),e);else throw Error("bls: unknown twist type");let m=o.div(o.ONE,o.mul(o.ONE,al));function p(e,r,a,t,i,n){let s=o.sub(a,o.mul(n,t)),l=o.sub(r,o.mul(i,t)),c=o.sub(o.mul(s,i),o.mul(l,n)),u=o.neg(s);e.push([c,u,l]);let d=o.sqr(l),f=o.mul(d,l),m=o.mul(d,r),p=o.add(o.sub(f,o.mul(m,al)),o.mul(o.sqr(s),t));return{Rx:r=o.mul(l,p),Ry:a=o.sub(o.mul(o.sub(m,p),s),o.mul(f,a)),Rz:t=o.mul(t,f)}}let b=function(e){let r=[];for(;e>as;e>>=as)(e&as)===an?r.unshift(0):(e&ac)===ac?(r.unshift(-1),e+=as):r.unshift(1);return r}(e.params.ateLoopSize),g=(0,r9.H9)(r=>{let{x:a,y:t}=r.toAffine(),i=o.neg(t),n=a,s=t,l=o.ONE,c=[];for(let e of b){let r=[];({Rx:n,Ry:s,Rz:l}=function(e,r,a,t){let i=o.sqr(a),n=o.sqr(t),s=o.mulByB(o.mul(n,ac)),l=o.mul(s,ac),c=o.sub(o.sub(o.sqr(o.add(a,t)),n),i),u=o.sub(s,i),d=o.mul(o.sqr(r),ac),f=o.neg(c);return e.push([u,d,f]),{Rx:r=o.mul(o.mul(o.mul(o.sub(i,l),r),a),m),Ry:a=o.sub(o.sqr(o.mul(o.add(i,l),m)),o.mul(o.sqr(s),ac)),Rz:t=o.mul(i,c)}}(r,n,s,l)),e&&({Rx:n,Ry:s,Rz:l}=p(r,n,s,l,a,-1===e?i:t)),c.push(r)}if(e.postPrecompute){let r=c[c.length-1];e.postPrecompute(n,s,l,a,t,p.bind(null,r))}return c});function h(e,a=!1){let t=n.ONE;if(e.length){let a=e[0][0].length;for(let o=0;o<a;o++)for(let[a,i,s]of(t=n.sqr(t),e))for(let[e,n,l]of a[o])t=r(e,n,l,t,i,s)}return s&&(t=n.conjugate(t)),a?n.finalExponentiate(t):t}function v(e,r=!0){let a=[];for(let{g1:r,g2:t}of(u.ProjectivePoint.normalizeZ(e.map(({g1:e})=>e)),f.ProjectivePoint.normalizeZ(e.map(({g2:e})=>e)),e)){if(r.equals(u.ProjectivePoint.ZERO)||t.equals(f.ProjectivePoint.ZERO))throw Error("pairing is not available for ZERO point");r.assertValidity(),t.assertValidity();let e=r.toAffine();a.push([g(t),e.x,e.y])}return h(a,r)}let{ShortSignature:y}=e.G1,{Signature:x}=e.G2;function k(e){return e instanceof u.ProjectivePoint?e:u.ProjectivePoint.fromHex(e)}function w(e,r){return e instanceof u.ProjectivePoint?e:u.hashToCurve((0,r9.ql)("point",e),r)}function z(e){return e instanceof f.ProjectivePoint?e:x.fromHex(e)}function E(e,r){return e instanceof f.ProjectivePoint?e:f.hashToCurve((0,r9.ql)("point",e),r)}function j(e){if(!Array.isArray(e)||0===e.length)throw Error("expected non-empty array")}return u.ProjectivePoint.BASE._setWindowSize(4),{getPublicKey:function(e){return u.ProjectivePoint.fromPrivateKey(e).toRawBytes(!0)},getPublicKeyForShortSignatures:function(e){return f.ProjectivePoint.fromPrivateKey(e).toRawBytes(!0)},sign:function(e,r,a){let t=E(e,a);t.assertValidity();let o=t.multiply(u.normPrivateKeyToScalar(r));return e instanceof f.ProjectivePoint?o:x.toRawBytes(o)},signShortSignature:function(e,r,a){let t=w(e,a);t.assertValidity();let o=t.multiply(u.normPrivateKeyToScalar(r));return e instanceof u.ProjectivePoint?o:y.toRawBytes(o)},verify:function(e,r,a,t){let o=k(a),i=E(r,t),s=u.ProjectivePoint.BASE,l=z(e),c=v([{g1:o.negate(),g2:i},{g1:s,g2:l}]);return n.eql(c,n.ONE)},verifyBatch:function(e,r,a,t){if(j(r),a.length!==r.length)throw Error("amount of public keys and messages should be equal");let o=z(e),i=r.map(e=>E(e,t)),s=a.map(k),l=new Map;for(let e=0;e<s.length;e++){let r=s[e],a=i[e],t=l.get(a);void 0===t&&(t=[],l.set(a,t)),t.push(r)}let c=[];try{for(let[e,r]of l){let a=r.reduce((e,r)=>e.add(r));c.push({g1:a,g2:e})}return c.push({g1:u.ProjectivePoint.BASE.negate(),g2:o}),n.eql(v(c),n.ONE)}catch{return!1}},verifyShortSignature:function(e,r,a,t){let o=z(a),i=w(r,t),s=f.ProjectivePoint.BASE,l=v([{g1:i,g2:o},{g1:k(e),g2:s.negate()}]);return n.eql(l,n.ONE)},aggregatePublicKeys:function(e){j(e);let r=e.map(k).reduce((e,r)=>e.add(r),u.ProjectivePoint.ZERO);return e[0]instanceof u.ProjectivePoint?(r.assertValidity(),r):r.toRawBytes(!0)},aggregateSignatures:function(e){j(e);let r=e.map(z).reduce((e,r)=>e.add(r),f.ProjectivePoint.ZERO);return e[0]instanceof f.ProjectivePoint?(r.assertValidity(),r):x.toRawBytes(r)},aggregateShortSignatures:function(e){j(e);let r=e.map(k).reduce((e,r)=>e.add(r),u.ProjectivePoint.ZERO);return e[0]instanceof u.ProjectivePoint?(r.assertValidity(),r):y.toRawBytes(r)},millerLoopBatch:h,pairing:function(e,r,a=!0){return v([{g1:e,g2:r}],a)},pairingBatch:v,G1:u,G2:f,Signature:x,ShortSignature:y,fields:{Fr:t,Fp:a,Fp2:o,Fp6:i,Fp12:n},params:{ateLoopSize:e.params.ateLoopSize,r:e.params.r,G1b:e.G1.b,G2b:e.G2.b},utils:{randomPrivateKey:()=>{let r=(0,r4.PS)(t.ORDER);return(0,r4.Us)(e.randomBytes(r),t.ORDER)},calcPairingPrecomputes:g}}}({fields:{Fp:aw,Fp2:az,Fp6:aE,Fp12:aB,Fr:aP},G1:{Fp:aw,h:BigInt("0x396c8c005555e1568c00aaab0000aaab"),Gx:BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),Gy:BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),a:aw.ZERO,b:ay,htfDefaults:{...aN,m:1,DST:"BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"},wrapPrivateKey:!0,allowInfinityPoint:!0,isTorsionFree:(e,r)=>{let a=BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),t=new e(aw.mul(r.px,a),r.py,r.pz);return r.multiplyUnsafe(ax).negate().multiplyUnsafe(ax).equals(t)},clearCofactor:(e,r)=>r.multiplyUnsafe(ax).add(r),mapToCurve:e=>{let{x:r,y:a}=aS(aw.create(e[0]));return aO(r,a)},fromBytes:e=>{let{compressed:r,infinity:a,sort:t,value:o}=aT(e);if(48===o.length&&r){let e=aw.ORDER,r=(0,r9.Hv)(o),i=aw.create(r&aw.MASK);if(a){if(i!==ab)throw Error("G1: non-empty compressed point at infinity");return{x:ab,y:ab}}let n=aw.add(aw.pow(i,av),aw.create(aC.params.G1b)),s=aw.sqrt(n);if(!s)throw Error("invalid compressed G1 point");return s*ah/e!==BigInt(t)&&(s=aw.neg(s)),{x:aw.create(i),y:aw.create(s)}}if(96!==o.length||r)throw Error("invalid point G1, expected 48/96 bytes");{let e=(0,r9.Hv)(o.subarray(0,aw.BYTES)),r=(0,r9.Hv)(o.subarray(aw.BYTES));if(a){if(e!==ab||r!==ab)throw Error("G1: non-empty point at infinity");return aC.G1.ProjectivePoint.ZERO.toAffine()}return{x:aw.create(e),y:aw.create(r)}}},toBytes:(e,r,a)=>{let t=r.equals(e.ZERO),{x:o,y:i}=r.toAffine();if(a){if(t)return aU.slice();let e=!!(i*ah/aw.ORDER);return aH((0,r9.tL)(o,aw.BYTES),{compressed:!0,sort:e})}return t?(0,r9.eV)(new Uint8Array([64]),new Uint8Array(2*aw.BYTES-1)):(0,r9.eV)((0,r9.tL)(o,aw.BYTES),(0,r9.tL)(i,aw.BYTES))},ShortSignature:{fromHex(e){let{infinity:r,sort:a,value:t}=aT((0,r9.ql)("signatureHex",e,48)),o=aw.ORDER,i=(0,r9.Hv)(t);if(r)return aC.G1.ProjectivePoint.ZERO;let n=aw.create(i&aw.MASK),s=aw.add(aw.pow(n,av),aw.create(aC.params.G1b)),l=aw.sqrt(s);if(!l)throw Error("invalid compressed G1 point");l*ah/o!==BigInt(a)&&(l=aw.neg(l));let c=aC.G1.ProjectivePoint.fromAffine({x:n,y:l});return c.assertValidity(),c},toRawBytes:e=>aG(e),toHex:e=>(0,r9.ci)(aG(e))}},G2:{Fp:az,h:BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),Gx:az.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]),Gy:az.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")]),a:az.ZERO,b:az.fromBigTuple([ay,ay]),hEff:BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),htfDefaults:{...aN},wrapPrivateKey:!0,allowInfinityPoint:!0,mapToCurve:e=>{let{x:r,y:a}=aA(az.fromBigTuple(e));return aI(r,a)},isTorsionFree:(e,r)=>r.multiplyUnsafe(ax).negate().equals(aq(e,r)),clearCofactor:(e,r)=>{let a=r.multiplyUnsafe(ax).negate(),t=aq(e,r),o=r.double();return o=(o=aR(e,o)).subtract(t),t=(t=a.add(t)).multiplyUnsafe(ax).negate(),(o=(o=o.add(t)).subtract(a)).subtract(r)},fromBytes:e=>{let{compressed:r,infinity:a,sort:t,value:o}=aT(e);if(!r&&!a&&t||!r&&a&&t||t&&a&&r)throw Error("invalid encoding flag: "+(224&e[0]));let i=aw.BYTES,n=(e,r,a)=>(0,r9.Hv)(e.slice(r,a));if(96===o.length&&r){let e=aC.params.G2b,r=aw.ORDER;if(a){if(o.reduce((e,r)=>0!==e?r+1:r,0)>0)throw Error("invalid compressed G2 point");return{x:az.ZERO,y:az.ZERO}}let s=n(o,0,i),l=n(o,i,2*i),c=az.create({c0:aw.create(l),c1:aw.create(s)}),u=az.add(az.pow(c,av),e),d=az.sqrt(u),f=d.c1===ab?d.c0*ah/r:d.c1*ah/r?ag:ab;return{x:c,y:d=t&&f>0?d:az.neg(d)}}if(192!==o.length||r)throw Error("invalid point G2, expected 96/192 bytes");{if(a){if(o.reduce((e,r)=>0!==e?r+1:r,0)>0)throw Error("invalid uncompressed G2 point");return{x:az.ZERO,y:az.ZERO}}let e=n(o,0,i),r=n(o,i,2*i),t=n(o,2*i,3*i),s=n(o,3*i,4*i);return{x:az.fromBigTuple([r,e]),y:az.fromBigTuple([s,t])}}},toBytes:(e,r,a)=>{let{BYTES:t,ORDER:o}=aw,i=r.equals(e.ZERO),{x:n,y:s}=r.toAffine();if(a){if(i)return(0,r9.eV)(aU,(0,r9.tL)(ab,t));let e=!!(s.c1===ab?s.c0*ah/o:s.c1*ah/o);return(0,r9.eV)(aH((0,r9.tL)(n.c1,t),{compressed:!0,sort:e}),(0,r9.tL)(n.c0,t))}{if(i)return(0,r9.eV)(new Uint8Array([64]),new Uint8Array(4*t-1));let{re:e,im:r}=az.reim(n),{re:a,im:o}=az.reim(s);return(0,r9.eV)((0,r9.tL)(r,t),(0,r9.tL)(e,t),(0,r9.tL)(o,t),(0,r9.tL)(a,t))}},Signature:{fromHex(e){let{infinity:r,sort:a,value:t}=aT((0,r9.ql)("signatureHex",e)),o=aw.ORDER,i=t.length/2;if(48!==i&&96!==i)throw Error("invalid compressed signature length, must be 96 or 192");let n=(0,r9.Hv)(t.slice(0,i)),s=(0,r9.Hv)(t.slice(i));if(r)return aC.G2.ProjectivePoint.ZERO;let l=aw.create(n&aw.MASK),c=aw.create(s),u=az.create({c0:c,c1:l}),d=az.add(az.pow(u,av),aC.params.G2b),f=az.sqrt(d);if(!f)throw Error("Failed to find a square root");let{re:m,im:p}=az.reim(f),b=BigInt(a),g=p>ab&&p*ah/o!==b,h=p===ab&&m*ah/o!==b;(g||h)&&(f=az.neg(f));let v=aC.G2.ProjectivePoint.fromAffine({x:u,y:f});return v.assertValidity(),v},toRawBytes:e=>aK(e),toHex:e=>(0,r9.ci)(aK(e))}},params:{ateLoopSize:ax,r:aP.ORDER,xNegative:!0,twistType:"multiplicative"},htfDefaults:aN,hash:r6.JQ,randomBytes:rc.O6}),aF=aC;function aL(e){let r="bigint"==typeof e[0]?.x?aC.G1:aC.G2,a=e.reduce((e,a)=>e.add(new r.ProjectivePoint(a.x,a.y,a.z)),r.ProjectivePoint.ZERO);return{x:a.px,y:a.py,z:a.pz}}function aD(e={}){let{as:r="Hex",size:a="short-key:long-sig"}=e,t=aV({as:r}),o=a$({privateKey:t,size:a});return{privateKey:t,publicKey:o}}function a$(e){let{privateKey:r,size:a="short-key:long-sig"}=e,{px:t,py:o,pz:i}=("short-key:long-sig"===a?aC.G1:aC.G2).ProjectivePoint.fromPrivateKey(ef.from(r).slice(2));return{x:t,y:o,z:i}}function aV(e={}){let{as:r="Hex"}=e,a=aC.utils.randomPrivateKey();return"Hex"===r?ef.fromBytes(a):a}function a_(e){let{payload:r,privateKey:a,suite:t,size:o="short-key:long-sig"}=e,i=("short-key:long-sig"===o?aC.G2:aC.G1).hashToCurve(ej.from(r),t?{DST:ej.fromString(t)}:void 0),n="short-key:long-sig"===o?aC.G1:aC.G2,s=i.multiply(n.normPrivateKeyToScalar(a.slice(2)));return{x:s.px,y:s.py,z:s.pz}}function aM(e){let{payload:r,suite:a}=e,t=e.publicKey,o=e.signature,i="bigint"==typeof o.x,n=(i?aC.G1:aC.G2).hashToCurve(ej.from(r),a?{DST:ej.fromString(a)}:void 0);return aC.fields.Fp12.eql(i?aC.pairingBatch([{g1:n,g2:new aC.G2.ProjectivePoint(t.x,t.y,t.z)},{g1:new aC.G1.ProjectivePoint(o.x,o.y,o.z),g2:aC.G2.ProjectivePoint.BASE.negate()}]):aC.pairingBatch([{g1:new aC.G1.ProjectivePoint(t.x,t.y,t.z).negate(),g2:n},{g1:aC.G1.ProjectivePoint.BASE,g2:new aC.G2.ProjectivePoint(o.x,o.y,o.z)}]),aC.fields.Fp12.ONE)}function aZ(e){return new("bigint"==typeof e.z?aC.G1:aC.G2).ProjectivePoint(e.x,e.y,e.z).toRawBytes()}function aY(e){return ef.fromBytes(aZ(e))}function aX(e){let r=(48===e.length?aC.G1:aC.G2).ProjectivePoint.fromHex(e);return{x:r.px,y:r.py,z:r.pz}}function aJ(e,r){return aX(ef.toBytes(e),r)}var aQ=a(16461);function aW(e,r={}){let{as:a="Hex"}=r,t=to(e),o=eI.Ue(new Uint8Array(t.length));return(t.encode(o),"Hex"===a)?ef.fromBytes(o.bytes):o.bytes}function a0(e){let r=(()=>{if("string"==typeof e){if(e.length>3&&e.length%2!=0)throw new ef.InvalidLengthError(e);return ej.fromHex(e)}return e})(),a=eI.Ue(r);return ti(a)}class a1 extends eB.BaseError{constructor({majorType:e}){super(`Invalid CBOR major type: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.InvalidMajorTypeError"})}}class a2 extends eB.BaseError{constructor({additionalInfo:e}){super(`Invalid CBOR additional info: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.InvalidAdditionalInfoError"})}}class a3 extends eB.BaseError{constructor(){super("64-bit integers are not supported in CBOR decoding."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.Unsupported64BitIntegerError"})}}class a5 extends eB.BaseError{constructor({tag:e}){super(`CBOR tagged data (tag ${e}) is not yet supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.UnsupportedTagError"})}}class a8 extends eB.BaseError{constructor({type:e}){super(`Invalid chunk type in indefinite-length ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.InvalidIndefiniteLengthChunkError"})}}class a6 extends eB.BaseError{constructor({value:e}){super(`Invalid CBOR simple value: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.InvalidSimpleValueError"})}}class a4 extends eB.BaseError{constructor(){super("BigInt values are not supported in CBOR encoding."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.UnsupportedBigIntError"})}}class a9 extends eB.BaseError{constructor({token:e}){super(`Unexpected token: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.UnexpectedTokenError"})}}class a7 extends eB.BaseError{constructor({number:e}){super(`Number exceeds maximum safe integer (${Number.MAX_SAFE_INTEGER}): ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.NumberTooLargeError"})}}class te extends eB.BaseError{constructor({size:e}){super(`String length exceeds maximum (4294967295): ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.StringTooLargeError"})}}class tr extends eB.BaseError{constructor({size:e}){super(`Array length exceeds maximum (4294967295): ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.ArrayTooLargeError"})}}class ta extends eB.BaseError{constructor({size:e}){super(`Object size exceeds maximum (4294967295): ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.ObjectTooLargeError"})}}class tt extends eB.BaseError{constructor({size:e}){super(`Byte string length exceeds maximum (4294967295): ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cbor.ByteStringTooLargeError"})}}function to(e){if(void 0===e)return{length:1,encode:e=>e.pushUint8(247)};if(null===e)return{length:1,encode:e=>e.pushUint8(246)};if("boolean"==typeof e)return{length:1,encode:r=>r.pushUint8(e?245:244)};if("number"==typeof e)return to.number(e);if("bigint"==typeof e)throw new a4;if("string"==typeof e)return to.string(e);if(Array.isArray(e))return to.array(e);if(e instanceof Uint8Array)return to.byteString(e);if(e instanceof ArrayBuffer)return to.byteString(new Uint8Array(e));if(ArrayBuffer.isView(e))return to.byteString(new Uint8Array(e.buffer,e.byteOffset,e.byteLength));if("object"==typeof e)return to.object(e);throw new a9({token:String(e)})}function ti(e){let r=e.readUint8(),a=r>>5,t=31&r;switch(a){case 0:return ti.readUnsignedInteger(e,t);case 1:return ti.readNegativeInteger(e,t);case 2:return ti.readByteString(e,t);case 3:return ti.readTextString(e,t);case 4:return ti.readArray(e,t);case 5:return ti.readMap(e,t);case 6:throw new a5({tag:t});case 7:return ti.readSimpleOrFloat(e,t);default:throw new a1({majorType:a})}}(n=to||(to={})).number=function(e){if(!Number.isSafeInteger(e)){let r=Math.fround(e);return Number.isNaN(e)||e===r?{length:5,encode(r){r.pushUint8(250),r.dataView.setFloat32(r.position,e,!1),r.position+=4}}:{length:9,encode(r){r.pushUint8(251),r.dataView.setFloat64(r.position,e,!1),r.position+=8}}}if(e>=0){if(e<=23)return{length:1,encode:r=>r.pushUint8(e)};if(e<=255)return{length:2,encode:r=>{r.pushUint8(24),r.pushUint8(e)}};if(e<=65535)return{length:3,encode:r=>{r.pushUint8(25),r.pushUint16(e)}};if(e<=4294967295)return{length:5,encode:r=>{r.pushUint8(26),r.pushUint32(e)}};throw new a7({number:e.toString(10)})}let r=-1-e;if(e>=-24)return{length:1,encode:e=>e.pushUint8(32+r)};if(r<=255)return{length:2,encode:e=>{e.pushUint8(56),e.pushUint8(r)}};if(r<=65535)return{length:3,encode:e=>{e.pushUint8(57),e.pushUint16(r)}};if(r<=4294967295)return{length:5,encode:e=>{e.pushUint8(58),e.pushUint32(r)}};throw new a7({number:e.toString(10)})},n.string=function(e){let r=ej.fromString(e),a=r.length;if(a<=23)return{length:1+a,encode(e){e.pushUint8(96+a),a>0&&e.pushBytes(r)}};if(a<=255)return{length:2+a,encode(e){e.pushUint8(120),e.pushUint8(a),e.pushBytes(r)}};if(a<=65535)return{length:3+a,encode(e){e.pushUint8(121),e.pushUint16(a),e.pushBytes(r)}};if(a<=4294967295)return{length:5+a,encode(e){e.pushUint8(122),e.pushUint32(a),e.pushBytes(r)}};throw new te({size:a})},n.array=function(e){let r=e.map(e=>n(e)),a=r.reduce((e,r)=>e+r.length,0),t=e.length;if(t<=23)return{length:1+a,encode(e){for(let a of(e.pushUint8(128+t),r))a.encode(e)}};if(t<=255)return{length:2+a,encode(e){for(let a of(e.pushUint8(152),e.pushUint8(t),r))a.encode(e)}};if(t<=65535)return{length:3+a,encode(e){for(let a of(e.pushUint8(153),e.pushUint16(t),r))a.encode(e)}};if(t<=4294967295)return{length:5+a,encode(e){for(let a of(e.pushUint8(154),e.pushUint32(t),r))a.encode(e)}};throw new tr({size:t})},n.byteString=function(e){let r=e.byteLength;if(r<=23)return{length:1+r,encode(a){a.pushUint8(64+r),a.pushBytes(e)}};if(r<=255)return{length:2+r,encode(a){a.pushUint8(88),a.pushUint8(r),a.pushBytes(e)}};if(r<=65535)return{length:3+r,encode(a){a.pushUint8(89),a.pushUint16(r),a.pushBytes(e)}};if(r<=4294967295)return{length:5+r,encode(a){a.pushUint8(90),a.pushUint32(r),a.pushBytes(e)}};throw new tt({size:r})},n.object=function(e){let r=Object.keys(e),a=r.map(r=>({key:n(r),value:n(e[r])})),t=a.reduce((e,r)=>e+r.key.length+r.value.length,0),o=r.length;if(o<=23)return{length:1+t,encode(e){for(let r of(e.pushUint8(160+o),a))r.key.encode(e),r.value.encode(e)}};if(o<=255)return{length:2+t,encode(e){for(let r of(e.pushUint8(184),e.pushUint8(o),a))r.key.encode(e),r.value.encode(e)}};if(o<=65535)return{length:3+t,encode(e){for(let r of(e.pushUint8(185),e.pushUint16(o),a))r.key.encode(e),r.value.encode(e)}};if(o<=4294967295)return{length:5+t,encode(e){for(let r of(e.pushUint8(186),e.pushUint32(o),a))r.key.encode(e),r.value.encode(e)}};throw new ta({size:o})},function(e){function r(e,r){if(r<24)return r;if(24===r)return e.readUint8();if(25===r)return e.readUint16();if(26===r)return e.readUint32();if(27===r)throw new a3;throw new a2({additionalInfo:r})}e.readUnsignedInteger=function(e,a){return r(e,a)},e.readNegativeInteger=function(e,a){return -1-r(e,a)},e.readByteString=function(a,t){if(31===t){let r=[],t=0;for(;;){if(255===a.inspectUint8()){a.readUint8();break}let o=e(a);if(!(o instanceof Uint8Array))throw new a8({type:"byte string"});r.push(o),t+=o.length}let o=new Uint8Array(t),i=0;for(let e of r)o.set(e,i),i+=e.length;return o}let o=r(a,t);return a.readBytes(o)},e.readTextString=function(a,t){if(31===t){let r=[];for(;;){if(255===a.inspectUint8()){a.readUint8();break}let t=e(a);if("string"!=typeof t)throw new a8({type:"text string"});r.push(t)}return r.join("")}let o=r(a,t),i=a.readBytes(o);return ej.toString(i)},e.readArray=function(a,t){if(31===t){let r=[];for(;;){if(255===a.inspectUint8()){a.readUint8();break}r.push(e(a))}return r}let o=r(a,t),i=[];for(let r=0;r<o;r++)i.push(e(a));return i},e.readMap=function(a,t){if(31===t){let r={};for(;;){if(255===a.inspectUint8()){a.readUint8();break}let t=e(a),o="string"==typeof t?t:String(t),i=e(a);r[o]=i}return r}let o=r(a,t),i={};for(let r=0;r<o;r++){let r=e(a),t="string"==typeof r?r:String(r),o=e(a);i[t]=o}return i},e.readSimpleOrFloat=function(e,r){if(20===r)return!1;if(21===r)return!0;if(22===r)return null;if(23!==r){if(25===r)return function(e){let r=e>>15&1,a=e>>10&31,t=1023&e;if(0===a){if(0===t)return r?-0:0;let e=t/1024*6103515625e-14;return r?-e:e}if(31===a)return 0===t?r?-1/0:1/0:NaN;let o=2**(a-15)*(1+t/1024);return r?-o:o}(e.readUint16());if(26===r){let r=e.dataView.getFloat32(e.position,!1);return e.position+=4,r}if(27===r){let r=e.dataView.getFloat64(e.position,!1);return e.position+=8,r}if(24===r){let r=e.readUint8();if(r<32)throw new a6({value:r});return}throw new a2({additionalInfo:r})}}}(ti||(ti={}));var tn=a(44460);function ts(e){return e.salt?tc(e):tl(e)}function tl(e){let r=ej.fromHex(eE.from(e.from)),a=ej.fromNumber(e.nonce);return 0===a[0]&&(a=new Uint8Array([])),eE.from(`0x${eP.keccak256(tn.fromBytes([r,a],{as:"Hex"})).slice(26)}`)}function tc(e){let r=ej.fromHex(eE.from(e.from)),a=ej.padLeft(ej.validate(e.salt)?e.salt:ej.fromHex(e.salt),32),t="bytecodeHash"in e?ej.validate(e.bytecodeHash)?e.bytecodeHash:ej.fromHex(e.bytecodeHash):eP.keccak256(e.bytecode,{as:"Bytes"});return eE.from(ef.slice(eP.keccak256(ej.concat(ej.fromHex("0xff"),r,a,t),{as:"Hex"}),12))}var tu=a(98555);let td=BigInt(0),tf=BigInt(1),tm=BigInt(2),tp=BigInt(8),tb={zip215:!0},tg=BigInt(0),th=BigInt(1),tv=BigInt(2),ty=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),tx=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),tk=BigInt(0),tw=BigInt(1),tz=BigInt(2),tE=BigInt(3),tj=BigInt(5),tB=BigInt(8);function tP(e){let r=BigInt(10),a=BigInt(20),t=BigInt(40),o=BigInt(80),i=e*e%ty*e%ty,n=(0,r4.oA)(i,tz,ty)*i%ty,s=(0,r4.oA)(n,tw,ty)*e%ty,l=(0,r4.oA)(s,tj,ty)*s%ty,c=(0,r4.oA)(l,r,ty)*l%ty,u=(0,r4.oA)(c,a,ty)*c%ty,d=(0,r4.oA)(u,t,ty)*u%ty,f=(0,r4.oA)(d,o,ty)*d%ty,m=(0,r4.oA)(f,o,ty)*d%ty,p=(0,r4.oA)(m,r,ty)*l%ty;return{pow_p_5_8:(0,r4.oA)(p,tz,ty)*e%ty,b2:i}}function tI(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}function tO(e,r){let a=(0,r4.wQ)(r*r*r,ty),t=tP(e*(0,r4.wQ)(a*a*r,ty)).pow_p_5_8,o=(0,r4.wQ)(e*a*t,ty),i=(0,r4.wQ)(r*o*o,ty),n=o,s=(0,r4.wQ)(o*tx,ty),l=i===e,c=i===(0,r4.wQ)(-e,ty),u=i===(0,r4.wQ)(-e*tx,ty);return l&&(o=n),(c||u)&&(o=s),(0,r4.Tu)(o,ty)&&(o=(0,r4.wQ)(-o,ty)),{isValid:l||c,value:o}}let tA=(0,r4.gN)(ty,void 0,!0),tS=function(e){let r=function(e){let r=(0,tu.Kd)(e);return(0,r9.FF)(e,{hash:"function",a:"bigint",d:"bigint",randomBytes:"function"},{adjustScalarBytes:"function",domain:"function",uvRatio:"function",mapToCurve:"function"}),Object.freeze({...r})}(e),{Fp:a,n:t,prehash:o,hash:i,randomBytes:n,nByteLength:s,h:l}=r,c=tm<<BigInt(8*s)-tf,u=a.create,d=(0,r4.gN)(r.n,r.nBitLength);if(!function(e,t){let o=a.sqr(e),i=a.sqr(t),n=a.add(a.mul(r.a,o),i),s=a.add(a.ONE,a.mul(r.d,a.mul(o,i)));return a.eql(n,s)}(r.Gx,r.Gy))throw Error("bad curve params: generator point");let f=r.uvRatio||((e,r)=>{try{return{isValid:!0,value:a.sqrt(e*a.inv(r))}}catch(e){return{isValid:!1,value:td}}}),m=r.adjustScalarBytes||(e=>e),p=r.domain||((e,r,a)=>{if((0,r9.uw)("phflag",a),r.length||a)throw Error("Contexts/pre-hash are not supported");return e});function b(e,r,a=!1){let t=a?tf:td;(0,r9.Fy)("coordinate "+e,r,t,c)}function g(e){if(!(e instanceof y))throw Error("ExtendedPoint expected")}let h=(0,r9.H9)((e,r)=>{let{ex:t,ey:o,ez:i}=e,n=e.is0();null==r&&(r=n?tp:a.inv(i));let s=u(t*r),l=u(o*r),c=u(i*r);if(n)return{x:td,y:tf};if(c!==tf)throw Error("invZ was invalid");return{x:s,y:l}}),v=(0,r9.H9)(e=>{let{a,d:t}=r;if(e.is0())throw Error("bad point: ZERO");let{ex:o,ey:i,ez:n,et:s}=e,l=u(o*o),c=u(i*i),d=u(n*n),f=u(d*d),m=u(l*a);if(u(d*u(m+c))!==u(f+u(t*u(l*c))))throw Error("bad point: equation left != right (1)");if(u(o*i)!==u(n*s))throw Error("bad point: equation left != right (2)");return!0});class y{constructor(e,r,a,t){b("x",e),b("y",r),b("z",a,!0),b("t",t),this.ex=e,this.ey=r,this.ez=a,this.et=t,Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(e){if(e instanceof y)throw Error("extended point not allowed");let{x:r,y:a}=e||{};return b("x",r),b("y",a),new y(r,a,tf,u(r*a))}static normalizeZ(e){let r=(0,r4.Eg)(a,e.map(e=>e.ez));return e.map((e,a)=>e.toAffine(r[a])).map(y.fromAffine)}static msm(e,r){return(0,tu.D1)(y,d,e,r)}_setWindowSize(e){w.setWindowSize(this,e)}assertValidity(){v(this)}equals(e){g(e);let{ex:r,ey:a,ez:t}=this,{ex:o,ey:i,ez:n}=e,s=u(r*n),l=u(o*t),c=u(a*n),d=u(i*t);return s===l&&c===d}is0(){return this.equals(y.ZERO)}negate(){return new y(u(-this.ex),this.ey,this.ez,u(-this.et))}double(){let{a:e}=r,{ex:a,ey:t,ez:o}=this,i=u(a*a),n=u(t*t),s=u(tm*u(o*o)),l=u(e*i),c=a+t,d=u(u(c*c)-i-n),f=l+n,m=f-s,p=l-n,b=u(d*m),g=u(f*p),h=u(d*p);return new y(b,g,u(m*f),h)}add(e){g(e);let{a,d:t}=r,{ex:o,ey:i,ez:n,et:s}=this,{ex:l,ey:c,ez:d,et:f}=e,m=u(o*l),p=u(i*c),b=u(s*t*f),h=u(n*d),v=u((o+i)*(l+c)-m-p),x=h-b,k=h+b,w=u(p-a*m),z=u(v*x),E=u(k*w),j=u(v*w);return new y(z,E,u(x*k),j)}subtract(e){return this.add(e.negate())}wNAF(e){return w.wNAFCached(this,e,y.normalizeZ)}multiply(e){(0,r9.Fy)("scalar",e,tf,t);let{p:r,f:a}=this.wNAF(e);return y.normalizeZ([r,a])[0]}multiplyUnsafe(e,r=y.ZERO){return((0,r9.Fy)("scalar",e,td,t),e===td)?k:this.is0()||e===tf?this:w.wNAFCachedUnsafe(this,e,y.normalizeZ,r)}isSmallOrder(){return this.multiplyUnsafe(l).is0()}isTorsionFree(){return w.unsafeLadder(this,t).is0()}toAffine(e){return h(this,e)}clearCofactor(){let{h:e}=r;return e===tf?this:this.multiplyUnsafe(e)}static fromHex(e,t=!1){let{d:o,a:i}=r,n=a.BYTES;e=(0,r9.ql)("pointHex",e,n),(0,r9.uw)("zip215",t);let s=e.slice(),l=e[n-1];s[n-1]=-129&l;let d=(0,r9.ty)(s),m=t?c:a.ORDER;(0,r9.Fy)("pointHex.y",d,td,m);let p=u(d*d),{isValid:b,value:g}=f(u(p-tf),u(o*p-i));if(!b)throw Error("Point.fromHex: invalid y coordinate");let h=(g&tf)===tf,v=(128&l)!=0;if(!t&&g===td&&v)throw Error("Point.fromHex: x=0 and x_0=1");return v!==h&&(g=u(-g)),y.fromAffine({x:g,y:d})}static fromPrivateKey(e){let{scalar:r}=E(e);return x.multiply(r)}toRawBytes(){let{x:e,y:r}=this.toAffine(),t=(0,r9.S5)(r,a.BYTES);return t[t.length-1]|=e&tf?128:0,t}toHex(){return(0,r9.ci)(this.toRawBytes())}}y.BASE=new y(r.Gx,r.Gy,tf,u(r.Gx*r.Gy)),y.ZERO=new y(td,tf,tf,td);let{BASE:x,ZERO:k}=y,w=(0,tu.Mx)(y,8*s);function z(e){var r;return r=(0,r9.ty)(e),(0,r4.wQ)(r,t)}function E(e){let r=a.BYTES;e=(0,r9.ql)("private key",e,r);let t=(0,r9.ql)("hashed private key",i(e),2*r),o=m(t.slice(0,r)),n=t.slice(r,2*r),s=z(o);return{head:o,prefix:n,scalar:s}}function j(e){let{head:r,prefix:a,scalar:t}=E(e),o=x.multiply(t),i=o.toRawBytes();return{head:r,prefix:a,scalar:t,point:o,pointBytes:i}}function B(e=Uint8Array.of(),...r){return z(i(p((0,r9.eV)(...r),(0,r9.ql)("context",e),!!o)))}return x._setWindowSize(8),{CURVE:r,getPublicKey:function(e){return j(e).pointBytes},sign:function(e,r,i={}){var n;e=(0,r9.ql)("message",e),o&&(e=o(e));let{prefix:s,scalar:l,pointBytes:c}=j(r),u=B(i.context,s,e),d=x.multiply(u).toRawBytes(),f=(n=u+B(i.context,d,c,e)*l,(0,r4.wQ)(n,t));(0,r9.Fy)("signature.s",f,td,t);let m=(0,r9.eV)(d,(0,r9.S5)(f,a.BYTES));return(0,r9.ql)("result",m,2*a.BYTES)},verify:function(e,r,t,i=tb){let n,s,l;let{context:c,zip215:u}=i,d=a.BYTES;e=(0,r9.ql)("signature",e,2*d),r=(0,r9.ql)("message",r),t=(0,r9.ql)("publicKey",t,d),void 0!==u&&(0,r9.uw)("zip215",u),o&&(r=o(r));let f=(0,r9.ty)(e.slice(d,2*d));try{n=y.fromHex(t,u),s=y.fromHex(e.slice(0,d),u),l=x.multiplyUnsafe(f)}catch(e){return!1}if(!u&&n.isSmallOrder())return!1;let m=B(c,s.toRawBytes(),n.toRawBytes(),r);return s.add(n.multiplyUnsafe(m)).subtract(l).clearCofactor().equals(y.ZERO)},ExtendedPoint:y,utils:{getExtendedPublicKey:j,randomPrivateKey:()=>n(a.BYTES),precompute:(e=8,r=y.BASE)=>(r._setWindowSize(e),r.multiply(BigInt(3)),r)}}}({a:tA.create(BigInt(-1)),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),Fp:tA,n:BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),h:tB,Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),hash:r6.o,randomBytes:rc.O6,adjustScalarBytes:tI,uvRatio:tO}),tq=function(e){let r=((0,r9.FF)(e,{adjustScalarBytes:"function",powPminus2:"function"}),Object.freeze({...e})),{P:a,type:t,adjustScalarBytes:o,powPminus2:i}=r,n="x25519"===t;if(!n&&"x448"!==t)throw Error("invalid type");let s=n?255:448,l=n?32:56,c=n?BigInt(9):BigInt(5),u=n?BigInt(121665):BigInt(39081),d=n?tv**BigInt(254):tv**BigInt(447),f=d+(n?BigInt(8)*tv**BigInt(251)-th:BigInt(4)*tv**BigInt(445)-th)+th,m=e=>(0,r4.wQ)(e,a),p=b(c);function b(e){return(0,r9.S5)(m(e),l)}function g(e,r){let t=function(e,r){(0,r9.Fy)("u",e,tg,a),(0,r9.Fy)("scalar",r,d,f);let t=th,o=tg,n=e,l=th,c=tg;for(let a=BigInt(s-1);a>=tg;a--){let i=r>>a&th;c^=i,({x_2:t,x_3:n}=v(c,t,n)),({x_2:o,x_3:l}=v(c,o,l)),c=i;let s=t+o,d=m(s*s),f=t-o,p=m(f*f),b=d-p,g=n+l,h=m((n-l)*s),y=m(g*f),x=h+y,k=h-y;n=m(x*x),l=m(e*m(k*k)),t=m(d*p),o=m(b*(d+m(u*b)))}return{x_2:t,x_3:n}=v(c,t,n),{x_2:o,x_3:l}=v(c,o,l),m(t*i(o))}(function(e){let r=(0,r9.ql)("u coordinate",e,l);return n&&(r[31]&=127),m((0,r9.ty)(r))}(r),(0,r9.ty)(o((0,r9.ql)("scalar",e,l))));if(t===tg)throw Error("invalid private or public key received");return b(t)}function h(e){return g(e,p)}function v(e,r,a){let t=m(e*(r-a));return{x_2:r=m(r-t),x_3:a=m(a+t)}}return{scalarMult:g,scalarMultBase:h,getSharedSecret:(e,r)=>g(e,r),getPublicKey:e=>h(e),utils:{randomPrivateKey:()=>r.randomBytes(l)},GuBytes:p.slice()}}({P:ty,type:"x25519",powPminus2:e=>{let{pow_p_5_8:r,b2:a}=tP(e);return(0,r4.wQ)((0,r4.oA)(r,tE,ty)*a,ty)},adjustScalarBytes:tI,randomBytes:rc.O6});function tR(e){if(!(e instanceof tH))throw Error("RistrettoPoint expected")}let tN=e=>tO(tw,e),tU=e=>tS.CURVE.Fp.create(null&bytesToNumberLE(e));function tT(e){let{d:r}=tS.CURVE,a=tS.CURVE.Fp.ORDER,t=tS.CURVE.Fp.create,o=t(null*e*e),i=t((o+tw)*null),n=BigInt(-1),s=t((n-r*o)*t(o+r)),{isValid:l,value:c}=tO(i,s),u=t(c*e);isNegativeLE(u,a)||(u=t(-u)),l||(c=u),l||(n=o);let d=t(n*(o-tw)*null-s),f=c*c,m=t((c+c)*s),p=t(null*d),b=t(tw-f),g=t(tw+f);return new tS.ExtendedPoint(t(m*g),t(b*p),t(p*g),t(m*b))}class tH{constructor(e){this.ep=e}static fromAffine(e){return new tH(tS.ExtendedPoint.fromAffine(e))}static hashToCurve(e){let r=tT(tU((e=ensureBytes("ristrettoHash",e,64)).slice(0,32))),a=tT(tU(e.slice(32,64)));return new tH(r.add(a))}static fromHex(e){e=ensureBytes("ristrettoHex",e,32);let{a:r,d:a}=tS.CURVE,t=tS.CURVE.Fp.ORDER,o=tS.CURVE.Fp.create,i="RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",n=tU(e);if(!equalBytes(numberToBytesLE(n,32),e)||isNegativeLE(n,t))throw Error(i);let s=o(n*n),l=o(tw+r*s),c=o(tw-r*s),u=o(l*l),d=o(c*c),f=o(r*a*u-d),{isValid:m,value:p}=tN(o(f*d)),b=o(p*c),g=o(p*b*f),h=o((n+n)*b);isNegativeLE(h,t)&&(h=o(-h));let v=o(l*g),y=o(h*v);if(!m||isNegativeLE(y,t)||v===tk)throw Error(i);return new tH(new tS.ExtendedPoint(h,v,tw,y))}static msm(e,r){return pippenger(tH,Field(tS.CURVE.n,tS.CURVE.nBitLength),e,r)}toRawBytes(){let e,{ex:r,ey:a,ez:t,et:o}=this.ep,i=tS.CURVE.Fp.ORDER,n=tS.CURVE.Fp.create,s=n(n(t+a)*n(t-a)),l=n(r*a),c=n(l*l),{value:u}=tN(n(s*c)),d=n(u*s),f=n(u*l),m=n(d*f*o);if(isNegativeLE(o*m,i)){let t=n(null*a),o=n(null*r);r=t,a=o,e=n(null*d)}else e=f;isNegativeLE(r*m,i)&&(a=n(-a));let p=n((t-a)*e);return isNegativeLE(p,i)&&(p=n(-p)),numberToBytesLE(p,32)}toHex(){return bytesToHex(this.toRawBytes())}toString(){return this.toHex()}equals(e){tR(e);let{ex:r,ey:a}=this.ep,{ex:t,ey:o}=e.ep,i=tS.CURVE.Fp.create,n=i(r*o)===i(a*t),s=i(a*o)===i(r*t);return n||s}add(e){return tR(e),new tH(this.ep.add(e.ep))}subtract(e){return tR(e),new tH(this.ep.subtract(e.ep))}multiply(e){return new tH(this.ep.multiply(e))}multiplyUnsafe(e){return new tH(this.ep.multiplyUnsafe(e))}double(){return new tH(this.ep.double())}negate(){return new tH(this.ep.negate())}}let tG=tS;function tK(e={}){let{as:r="Hex"}=e,a=tF({as:r}),t=tC({privateKey:a,as:r});return{privateKey:a,publicKey:t}}function tC(e){let{as:r="Hex",privateKey:a}=e,t=ej.from(a),o=tS.getPublicKey(t);return"Hex"===r?ef.fromBytes(o):o}function tF(e={}){let{as:r="Hex"}=e,a=tS.utils.randomPrivateKey();return"Hex"===r?ef.fromBytes(a):a}function tL(e){let{as:r="Hex",payload:a,privateKey:t}=e,o=ej.from(a),i=ej.from(t),n=tS.sign(o,i);return"Hex"===r?ef.fromBytes(n):n}function tD(e){let{payload:r,publicKey:a,signature:t}=e,o=ej.from(r),i=ej.from(a),n=ej.from(t);return tS.verify(n,o,i)}var t$=a(64879);function tV(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let r=`0x${e.slice(1,65)}`;return ef.validate(r,{strict:!0})?r:null}function t_(e){let r=new Uint8Array(32).fill(0);return e?tV(e)||eP.keccak256(ef.fromString(e)):ef.fromBytes(r)}function tM(e){let r=new Uint8Array(32).fill(0);if(!e)return ef.fromBytes(r);let a=e.split(".");for(let e=a.length-1;e>=0;e-=1){let t=tV(a[e]),o=t?ej.fromHex(t):eP.keccak256(ej.fromString(a[e]),{as:"Bytes"});r=eP.keccak256(ej.concat(r,o),{as:"Bytes"})}return ef.fromBytes(r)}function tZ(e){return(0,t$.Q6)(e)}function tY(e){let{fromBlock:r,toBlock:a}=e;return{...e,...r&&{fromBlock:ef.validate(r,{strict:!1})?BigInt(r):r},...a&&{toBlock:ef.validate(a,{strict:!1})?BigInt(a):a}}}function tX(e){let{address:r,topics:a,fromBlock:t,toBlock:o}=e;return{...r&&{address:r},...a&&{topics:a},...void 0!==t?{fromBlock:"bigint"==typeof t?ef.fromNumber(t):t}:{},...void 0!==o?{toBlock:"bigint"==typeof o?ef.fromNumber(o):o}:{}}}var tJ=a(30323),tQ=a(20546),tW=a(47544);function t0(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&"Uint8Array"===e.constructor.name}function t1(e,r){return!!Array.isArray(r)&&(0===r.length||(e?r.every(e=>"string"==typeof e):r.every(e=>Number.isSafeInteger(e))))}function t2(e){if("function"!=typeof e)throw Error("function expected");return!0}function t3(e,r){if("string"!=typeof r)throw Error(`${e}: string expected`);return!0}function t5(e){if(!Number.isSafeInteger(e))throw Error(`invalid integer: ${e}`)}function t8(e){if(!Array.isArray(e))throw Error("array expected")}function t6(e,r){if(!t1(!0,r))throw Error(`${e}: array of strings expected`)}function t4(e,r){if(!t1(!1,r))throw Error(`${e}: array of numbers expected`)}function t9(...e){let r=e=>e,a=(e,r)=>a=>e(r(a));return{encode:e.map(e=>e.encode).reduceRight(a,r),decode:e.map(e=>e.decode).reduce(a,r)}}function t7(e){let r="string"==typeof e?e.split(""):e,a=r.length;t6("alphabet",r);let t=new Map(r.map((e,r)=>[e,r]));return{encode:t=>(t8(t),t.map(t=>{if(!Number.isSafeInteger(t)||t<0||t>=a)throw Error(`alphabet.encode: digit index outside alphabet "${t}". Allowed: ${e}`);return r[t]})),decode:r=>(t8(r),r.map(r=>{t3("alphabet.decode",r);let a=t.get(r);if(void 0===a)throw Error(`Unknown letter: "${r}". Allowed: ${e}`);return a}))}}function oe(e=""){return t3("join",e),{encode:r=>(t6("join.decode",r),r.join(e)),decode:r=>(t3("join.decode",r),r.split(e))}}function or(e,r,a){if(r<2)throw Error(`convertRadix: invalid from=${r}, base cannot be less than 2`);if(a<2)throw Error(`convertRadix: invalid to=${a}, base cannot be less than 2`);if(t8(e),!e.length)return[];let t=0,o=[],i=Array.from(e,e=>{if(t5(e),e<0||e>=r)throw Error(`invalid integer: ${e}`);return e}),n=i.length;for(;;){let e=0,s=!0;for(let o=t;o<n;o++){let n=i[o],l=r*e,c=l+n;if(!Number.isSafeInteger(c)||l/r!==e||c-n!==l)throw Error("convertRadix: carry overflow");let u=c/a;e=c%a;let d=Math.floor(u);if(i[o]=d,!Number.isSafeInteger(d)||d*a+e!==c)throw Error("convertRadix: carry overflow");s&&(d?s=!1:t=o)}if(o.push(e),s)break}for(let r=0;r<e.length-1&&0===e[r];r++)o.push(0);return o.reverse()}let oa=(e,r)=>0===r?e:oa(r,e%r),ot=(e,r)=>e+(r-oa(e,r)),oo=(()=>{let e=[];for(let r=0;r<40;r++)e.push(2**r);return e})();function oi(e,r,a,t){if(t8(e),r<=0||r>32)throw Error(`convertRadix2: wrong from=${r}`);if(a<=0||a>32)throw Error(`convertRadix2: wrong to=${a}`);if(ot(r,a)>32)throw Error(`convertRadix2: carry overflow from=${r} to=${a} carryBits=${ot(r,a)}`);let o=0,i=0,n=oo[r],s=oo[a]-1,l=[];for(let t of e){if(t5(t),t>=n)throw Error(`convertRadix2: invalid data word=${t} from=${r}`);if(o=o<<r|t,i+r>32)throw Error(`convertRadix2: carry overflow pos=${i} from=${r}`);for(i+=r;i>=a;i-=a)l.push((o>>i-a&s)>>>0);let e=oo[i];if(void 0===e)throw Error("invalid carry");o&=e-1}if(o=o<<a-i&s,!t&&i>=r)throw Error("Excess padding");if(!t&&o>0)throw Error(`Non-zero padding: ${o}`);return t&&i>0&&l.push(o>>>0),l}function on(e,r){return t5(e),t2(r),{encode(a){if(!t0(a))throw Error("checksum.encode: input should be Uint8Array");let t=r(a).slice(0,e),o=new Uint8Array(a.length+e);return o.set(a),o.set(t,a.length),o},decode(a){if(!t0(a))throw Error("checksum.decode: input should be Uint8Array");let t=a.slice(0,-e),o=a.slice(-e),i=r(t).slice(0,e);for(let r=0;r<e;r++)if(i[r]!==o[r])throw Error("Invalid checksum");return t}}}let os=function(e,r=!1){if(t5(e),e<=0||e>32)throw Error("radix2: bits should be in (0..32]");if(ot(8,e)>32||ot(e,8)>32)throw Error("radix2: carry overflow");return{encode:a=>{if(!t0(a))throw Error("radix2.encode input should be Uint8Array");return oi(Array.from(a),8,e,!r)},decode:a=>(t4("radix2.decode",a),Uint8Array.from(oi(a,e,8,r)))}};"function"==typeof Uint8Array.from([]).toBase64&&Uint8Array.fromBase64;let ol=(o="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",t9((t5(58),{encode:e=>{if(!t0(e))throw Error("radix.encode input should be Uint8Array");return or(Array.from(e),256,58)},decode:e=>(t4("radix.decode",e),Uint8Array.from(or(e,58,256)))}),t7(o),oe(""))),oc=[996825010,642813549,513874426,1027748829,705979059];"function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex||t2(e=>{if("string"!=typeof e||e.length%2!=0)throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()});let ou=tJ.kA.ProjectivePoint,od=(i=r6.JQ,t9(on(4,e=>i(i(e))),ol));function of(e){return(0,rc.gk)(e),BigInt("0x"+(0===e.length?"0":(0,rc.ci)(e)))}let om=(0,rc.iY)("Bitcoin seed"),op={private:76066276,public:76067358},ob=e=>(0,tW.bP)((0,r6.JQ)(e)),og=e=>(0,rc.GL)(e).getUint32(0,!1),oh=e=>{if(!Number.isSafeInteger(e)||e<0||e>4294967296-1)throw Error("invalid number, should be from 0 to 2**32-1, got "+e);let r=new Uint8Array(4);return(0,rc.GL)(r).setUint32(0,e,!1),r};class ov{get fingerprint(){if(!this.pubHash)throw Error("No publicKey set!");return og(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){let e=this.privateKey;if(!e)throw Error("No private key");return od.encode(this.serialize(this.versions.private,(0,rc.eV)(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw Error("No public key");return od.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,r=op){if((0,rc.gk)(e),8*e.length<128||8*e.length>512)throw Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+e.length);let a=(0,tQ.b)(r6.o,om,e);return new ov({versions:r,chainCode:a.slice(32),privateKey:a.slice(0,32)})}static fromExtendedKey(e,r=op){let a=od.decode(e),t=(0,rc.GL)(a),o=t.getUint32(0,!1),i={versions:r,depth:a[4],parentFingerprint:t.getUint32(5,!1),index:t.getUint32(9,!1),chainCode:a.slice(13,45)},n=a.slice(45),s=0===n[0];if(o!==r[s?"private":"public"])throw Error("Version mismatch");return new ov(s?{...i,privateKey:n.slice(1)}:{...i,publicKey:n})}static fromJSON(e){return ov.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||"object"!=typeof e)throw Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||op,this.depth=e.depth||0,this.chainCode=e.chainCode||null,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!tJ.kA.utils.isValidPrivateKey(e.privateKey))throw Error("Invalid private key");this.privKey="bigint"==typeof e.privateKey?e.privateKey:of(e.privateKey),this.privKeyBytes=function(e){if("bigint"!=typeof e)throw Error("bigint expected");return(0,rc.nr)(e.toString(16).padStart(64,"0"))}(this.privKey),this.pubKey=tJ.kA.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=ou.fromHex(e.publicKey).toRawBytes(!0);else throw Error("HDKey: no public or private key provided");this.pubHash=ob(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;let r=e.replace(/^[mM]'?\//,"").split("/"),a=this;for(let e of r){let r=/^(\d+)('?)$/.exec(e),t=r&&r[1];if(!r||3!==r.length||"string"!=typeof t)throw Error("invalid child index: "+e);let o=+t;if(!Number.isSafeInteger(o)||o>=2147483648)throw Error("Invalid index");"'"===r[2]&&(o+=2147483648),a=a.deriveChild(o)}return a}deriveChild(e){if(!this.pubKey||!this.chainCode)throw Error("No publicKey or chainCode set");let r=oh(e);if(e>=2147483648){let e=this.privateKey;if(!e)throw Error("Could not derive hardened child key");r=(0,rc.eV)(new Uint8Array([0]),e,r)}else r=(0,rc.eV)(this.pubKey,r);let a=(0,tQ.b)(r6.o,this.chainCode,r),t=of(a.slice(0,32)),o=a.slice(32);if(!tJ.kA.utils.isValidPrivateKey(t))throw Error("Tweak bigger than curve order");let i={versions:this.versions,chainCode:o,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){let e=(0,r4.wQ)(this.privKey+t,tJ.kA.CURVE.n);if(!tJ.kA.utils.isValidPrivateKey(e))throw Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=e}else{let e=ou.fromHex(this.pubKey).add(ou.fromPrivateKey(t));if(e.equals(ou.ZERO))throw Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=e.toRawBytes(!0)}return new ov(i)}catch(r){return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw Error("No privateKey set!");return(0,rc.gk)(e,32),tJ.kA.sign(e,this.privKey).toCompactRawBytes()}verify(e,r){let a;if((0,rc.gk)(e,32),(0,rc.gk)(r,64),!this.publicKey)throw Error("No publicKey set!");try{a=tJ.kA.Signature.fromCompact(r)}catch(e){return!1}return tJ.kA.verify(a,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,r){if(!this.chainCode)throw Error("No chainCode set");return(0,rc.gk)(r,33),(0,rc.eV)(oh(e),new Uint8Array([this.depth]),oh(this.parentFingerprint),oh(this.index),this.chainCode,r)}}var oy=a(7674);let ox=tJ.kA;function ok(e={}){let{as:r="Hex"}=e,a=oE({as:r}),t=ow({privateKey:a});return{privateKey:a,publicKey:t}}function ow(e){let{privateKey:r}=e,a=tJ.kA.ProjectivePoint.fromPrivateKey(ef.from(r).slice(2));return oy.from(a)}function oz(e){let{as:r="Hex",privateKey:a,publicKey:t}=e,o=tJ.kA.ProjectivePoint.fromHex(oy.toHex(t).slice(2)).multiply(tJ.kA.utils.normPrivateKeyToScalar(ef.from(a).slice(2))).toRawBytes(!0);return"Hex"===r?ef.fromBytes(o):o}function oE(e={}){let{as:r="Hex"}=e,a=tJ.kA.utils.randomPrivateKey();return"Hex"===r?ef.fromBytes(a):a}function oj(e){return eE.fromPublicKey(oB(e))}function oB(e){let{payload:r,signature:a}=e,{r:t,s:o,yParity:i}=a,n=new tJ.kA.Signature(BigInt(t),BigInt(o)).addRecoveryBit(i).recoverPublicKey(ef.from(r).substring(2));return oy.from(n)}function oP(e){let{extraEntropy:r=!1,hash:a,payload:t,privateKey:o}=e,{r:i,s:n,recovery:s}=tJ.kA.sign(ej.from(t),ej.from(o),{extraEntropy:"boolean"==typeof r?r:ef.from(r).slice(2),lowS:!0,...a?{prehash:!0}:{}});return{r:i,s:n,yParity:s}}function oI(e){let{address:r,hash:a,payload:t,publicKey:o,signature:i}=e;return r?eE.isEqual(r,oj({payload:t,signature:i})):tJ.kA.verify(i,ej.from(t),oy.toBytes(o),...a?[{prehash:!0,lowS:!0}]:[])}function oO(e){return{derive:r=>oO(e.derive(r)),depth:e.depth,identifier:ef.fromBytes(e.identifier),index:e.index,privateKey:ef.fromBytes(e.privateKey),privateExtendedKey:e.privateExtendedKey,publicKey:ow({privateKey:e.privateKey}),publicExtendedKey:e.publicExtendedKey,versions:e.versions}}function oA(e){return oO(ov.fromExtendedKey(e))}function oS(e){return oO(ov.fromJSON(e))}function oq(e,r={}){let{versions:a}=r;return oO(ov.fromMasterSeed(ej.from(e),a))}function oR(e={}){let{account:r=0,change:a=0,index:t=0}=e;return`m/44'/60'/${r}'/${a}/${t}`}var oN=a(56535);function oU(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&"Uint8Array"===e.constructor.name}function oT(e,...r){if(!oU(e))throw Error("Uint8Array expected");if(r.length>0&&!r.includes(e.length))throw Error("Uint8Array expected of length "+r+", got length="+e.length)}function oH(e,r=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(r&&e.finished)throw Error("Hash#digest() has already been called")}function oG(e,r){oT(e);let a=r.outputLen;if(e.length<a)throw Error("digestInto() expects output buffer of length at least "+a)}function oK(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function oC(...e){for(let r=0;r<e.length;r++)e[r].fill(0)}let oF=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];function oL(e){if("string"==typeof e)e=function(e){if("string"!=typeof e)throw Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}(e);else if(oU(e))e=o$(e);else throw Error("Uint8Array expected, got "+typeof e);return e}function oD(e){return e.byteOffset%4==0}function o$(e){return Uint8Array.from(e)}let oV=new Uint8Array(16),o_=oK(oV),oM=(e,r,a,t)=>({s3:a<<31|t>>>1,s2:r<<31|a>>>1,s1:e<<31|r>>>1,s0:e>>>1^-520093696&-(1&t&1)}),oZ=e=>(e>>>0&255)<<24|(e>>>8&255)<<16|(e>>>16&255)<<8|e>>>24&255|0,oY=e=>e>65536?8:e>1024?4:2;class oX{constructor(e,r){var a;this.blockLen=16,this.outputLen=16,this.s0=0,this.s1=0,this.s2=0,this.s3=0,this.finished=!1,oT(e=oL(e),16);let t=new DataView((a=e).buffer,a.byteOffset,a.byteLength),o=t.getUint32(0,!1),i=t.getUint32(4,!1),n=t.getUint32(8,!1),s=t.getUint32(12,!1),l=[];for(let e=0;e<128;e++)l.push({s0:oZ(o),s1:oZ(i),s2:oZ(n),s3:oZ(s)}),{s0:o,s1:i,s2:n,s3:s}=oM(o,i,n,s);let c=oY(r||1024);if(![1,2,4,8].includes(c))throw Error("ghash: invalid window size, expected 2, 4 or 8");this.W=c;let u=128/c,d=this.windowSize=2**c,f=[];for(let e=0;e<u;e++)for(let r=0;r<d;r++){let a=0,t=0,o=0,i=0;for(let n=0;n<c;n++){if(!(r>>>c-n-1&1))continue;let{s0:s,s1:u,s2:d,s3:f}=l[c*e+n];a^=s,t^=u,o^=d,i^=f}f.push({s0:a,s1:t,s2:o,s3:i})}this.t=f}_updateBlock(e,r,a,t){e^=this.s0,r^=this.s1,a^=this.s2,t^=this.s3;let{W:o,t:i,windowSize:n}=this,s=0,l=0,c=0,u=0,d=(1<<o)-1,f=0;for(let m of[e,r,a,t])for(let e=0;e<4;e++){let r=m>>>8*e&255;for(let e=8/o-1;e>=0;e--){let{s0:a,s1:t,s2:m,s3:p}=i[f*n+(r>>>o*e&d)];s^=a,l^=t,c^=m,u^=p,f+=1}}this.s0=s,this.s1=l,this.s2=c,this.s3=u}update(e){oH(this),oT(e=oL(e));let r=oK(e),a=Math.floor(e.length/16),t=e.length%16;for(let e=0;e<a;e++)this._updateBlock(r[4*e+0],r[4*e+1],r[4*e+2],r[4*e+3]);return t&&(oV.set(e.subarray(16*a)),this._updateBlock(o_[0],o_[1],o_[2],o_[3]),oC(o_)),this}destroy(){let{t:e}=this;for(let r of e)r.s0=0,r.s1=0,r.s2=0,r.s3=0}digestInto(e){oH(this),oG(e,this),this.finished=!0;let{s0:r,s1:a,s2:t,s3:o}=this,i=oK(e);return i[0]=r,i[1]=a,i[2]=t,i[3]=o,e}digest(){let e=new Uint8Array(16);return this.digestInto(e),this.destroy(),e}}class oJ extends oX{constructor(e,r){oT(e=oL(e));let a=function(e){e.reverse();let r=1&e[15],a=0;for(let r=0;r<e.length;r++){let t=e[r];e[r]=t>>>1|a,a=(1&t)<<7}return e[0]^=225&-r,e}(o$(e));super(a,r),oC(a)}update(e){e=oL(e),oH(this);let r=oK(e),a=e.length%16,t=Math.floor(e.length/16);for(let e=0;e<t;e++)this._updateBlock(oZ(r[4*e+3]),oZ(r[4*e+2]),oZ(r[4*e+1]),oZ(r[4*e+0]));return a&&(oV.set(e.subarray(16*t)),this._updateBlock(oZ(o_[3]),oZ(o_[2]),oZ(o_[1]),oZ(o_[0])),oC(o_)),this}digestInto(e){oH(this),oG(e,this),this.finished=!0;let{s0:r,s1:a,s2:t,s3:o}=this,i=oK(e);return i[0]=r,i[1]=a,i[2]=t,i[3]=o,e.reverse()}}function oQ(e){let r=(r,a)=>e(a,r.length).update(oL(r)).digest(),a=e(new Uint8Array(16),0);return r.outputLen=a.outputLen,r.blockLen=a.blockLen,r.create=(r,a)=>e(r,a),r}function oW(e){return e<<1^283&-(e>>7)}function o0(e,r){let a=0;for(;r>0;r>>=1)a^=e&-(1&r),e=oW(e);return a}oQ((e,r)=>new oX(e,r)),oQ((e,r)=>new oJ(e,r));let o1=(()=>{let e=new Uint8Array(256);for(let r=0,a=1;r<256;r++,a^=oW(a))e[r]=a;let r=new Uint8Array(256);r[0]=99;for(let a=0;a<255;a++){let t=e[255-a];t|=t<<8,r[e[a]]=(t^t>>4^t>>5^t>>6^t>>7^99)&255}return oC(e),r})(),o2=o1.map((e,r)=>o1.indexOf(r)),o3=e=>e<<24|e>>>8,o5=e=>e<<8|e>>>24;function o8(e,r){if(256!==e.length)throw Error("Wrong sbox length");let a=new Uint32Array(256).map((a,t)=>r(e[t])),t=a.map(o5),o=t.map(o5),i=o.map(o5),n=new Uint32Array(65536),s=new Uint32Array(65536),l=new Uint16Array(65536);for(let r=0;r<256;r++)for(let c=0;c<256;c++){let u=256*r+c;n[u]=a[r]^t[c],s[u]=o[r]^i[c],l[u]=e[r]<<8|e[c]}return{sbox:e,sbox2:l,T0:a,T1:t,T2:o,T3:i,T01:n,T23:s}}let o6=o8(o1,e=>o0(e,3)<<24|e<<16|e<<8|o0(e,2)),o4=o8(o2,e=>o0(e,11)<<24|o0(e,13)<<16|o0(e,9)<<8|o0(e,14)),o9=(()=>{let e=new Uint8Array(16);for(let r=0,a=1;r<16;r++,a=oW(a))e[r]=a;return e})();function o7(e,r,a,t,o,i){return e[a<<8&65280|t>>>8&255]^r[o>>>8&65280|i>>>24&255]}function ie(e,r,a,t,o){return e[255&r|65280&a]|e[t>>>16&255|o>>>16&65280]<<16}function ir(e,r,a,t,o){let{sbox2:i,T01:n,T23:s}=o6,l=0;r^=e[l++],a^=e[l++],t^=e[l++],o^=e[l++];let c=e.length/4-2;for(let i=0;i<c;i++){let i=e[l++]^o7(n,s,r,a,t,o),c=e[l++]^o7(n,s,a,t,o,r),u=e[l++]^o7(n,s,t,o,r,a),d=e[l++]^o7(n,s,o,r,a,t);r=i,a=c,t=u,o=d}let u=e[l++]^ie(i,r,a,t,o);return{s0:u,s1:e[l++]^ie(i,a,t,o,r),s2:e[l++]^ie(i,t,o,r,a),s3:e[l++]^ie(i,o,r,a,t)}}let ia=((e,r)=>{function a(t,...o){if(oT(t),!oF)throw Error("Non little-endian hardware is not yet supported");if(void 0!==e.nonceLength){let r=o[0];if(!r)throw Error("nonce / iv required");e.varSizeNonce?oT(r):oT(r,e.nonceLength)}let i=e.tagLength;i&&void 0!==o[1]&&oT(o[1]);let n=r(t,...o),s=(e,r)=>{if(void 0!==r){if(2!==e)throw Error("cipher output not supported");oT(r)}},l=!1;return{encrypt(e,r){if(l)throw Error("cannot encrypt() twice with same key + nonce");return l=!0,oT(e),s(n.encrypt.length,r),n.encrypt(e,r)},decrypt(e,r){if(oT(e),i&&e.length<i)throw Error("invalid ciphertext length: smaller than tagLength="+i);return s(n.decrypt.length,r),n.decrypt(e,r)}}}return Object.assign(a,e),a})({blockSize:16,nonceLength:16},function(e,r){function a(a,t){if(oT(a),void 0!==t&&(oT(t),!oD(t)))throw Error("unaligned destination");let o=function(e){oT(e);let r=e.length;if(![16,24,32].includes(r))throw Error("aes: invalid key size, should be 16, 24 or 32, got "+r);let{sbox2:a}=o6,t=[];oD(e)||t.push(e=o$(e));let o=oK(e),i=o.length,n=e=>ie(a,e,e,e,e),s=new Uint32Array(r+28);s.set(o);for(let e=i;e<s.length;e++){let r=s[e-1];e%i==0?r=n(o3(r))^o9[e/i-1]:i>6&&e%i==4&&(r=n(r)),s[e]=s[e-i]^r}return oC(...t),s}(e),i=o$(r),n=[o,i];oD(a)||n.push(a=o$(a));let s=function(e,r,a,t){oT(r,16),oT(a);let o=a.length;!function(e,r){if(e.buffer===r.buffer&&e.byteOffset<r.byteOffset+r.byteLength&&r.byteOffset<e.byteOffset+e.byteLength&&e.byteOffset<r.byteOffset)throw Error("complex overlap of input and output is not supported")}(a,t=function(e,r,a=!0){if(void 0===r)return new Uint8Array(e);if(r.length!==e)throw Error("invalid output length, expected "+e+", got: "+r.length);if(a&&!oD(r))throw Error("invalid output, must be aligned");return r}(o,t));let i=oK(r),{s0:n,s1:s,s2:l,s3:c}=ir(e,i[0],i[1],i[2],i[3]),u=oK(a),d=oK(t);for(let a=0;a+4<=u.length;a+=4){d[a+0]=u[a+0]^n,d[a+1]=u[a+1]^s,d[a+2]=u[a+2]^l,d[a+3]=u[a+3]^c;let t=1;for(let e=r.length-1;e>=0;e--)t=t+(255&r[e])|0,r[e]=255&t,t>>>=8;({s0:n,s1:s,s2:l,s3:c}=ir(e,i[0],i[1],i[2],i[3]))}let f=16*Math.floor(u.length/4);if(f<o){let e=new Uint32Array([n,s,l,c]),r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);for(let e=f,i=0;e<o;e++,i++)t[e]=a[e]^r[i];oC(e)}return t}(o,i,a,t);return oC(...n),s}return{encrypt:(e,r)=>a(e,r),decrypt:(e,r)=>a(e,r)}});function it(e,r,a,t){(0,rc.z3)(e);let{c:o,dkLen:i,asyncTick:n}=(0,rc.U5)({dkLen:32,asyncTick:10},t);if((0,rc.k8)(o),(0,rc.k8)(i),(0,rc.k8)(n),o<1)throw Error("iterations (c) should be >= 1");let s=(0,rc.A0)(r),l=(0,rc.A0)(a),c=new Uint8Array(i),u=tQ.b.create(e,s),d=u._cloneInto().update(l);return{c:o,dkLen:i,asyncTick:n,DK:c,PRF:u,PRFSalt:d}}function io(e,r,a,t,o){return e.destroy(),r.destroy(),t&&t.destroy(),(0,rc.ru)(o),a}function ii(e,r,a,t){let o;let{c:i,dkLen:n,DK:s,PRF:l,PRFSalt:c}=it(e,r,a,t),u=new Uint8Array(4),d=(0,rc.GL)(u),f=new Uint8Array(l.outputLen);for(let e=1,r=0;r<n;e++,r+=l.outputLen){let a=s.subarray(r,r+l.outputLen);d.setInt32(0,e,!1),(o=c._cloneInto(o)).update(u).digestInto(f),a.set(f.subarray(0,a.length));for(let e=1;e<i;e++){l._cloneInto(o).update(f).digestInto(f);for(let e=0;e<a.length;e++)a[e]^=f[e]}}return io(l,c,s,o,f)}async function is(e,r,a,t){let o;let{c:i,dkLen:n,asyncTick:s,DK:l,PRF:c,PRFSalt:u}=it(e,r,a,t),d=new Uint8Array(4),f=(0,rc.GL)(d),m=new Uint8Array(c.outputLen);for(let e=1,r=0;r<n;e++,r+=c.outputLen){let a=l.subarray(r,r+c.outputLen);f.setInt32(0,e,!1),(o=u._cloneInto(o)).update(d).digestInto(m),a.set(m.subarray(0,a.length)),await (0,rc.oY)(i-1,s,()=>{c._cloneInto(o).update(m).digestInto(m);for(let e=0;e<a.length;e++)a[e]^=m[e]})}return io(c,u,l,o,m)}function il(e,r,a,t,o,i){let n=e[r++]^a[t++],s=e[r++]^a[t++],l=e[r++]^a[t++],c=e[r++]^a[t++],u=e[r++]^a[t++],d=e[r++]^a[t++],f=e[r++]^a[t++],m=e[r++]^a[t++],p=e[r++]^a[t++],b=e[r++]^a[t++],g=e[r++]^a[t++],h=e[r++]^a[t++],v=e[r++]^a[t++],y=e[r++]^a[t++],x=e[r++]^a[t++],k=e[r++]^a[t++],w=n,z=s,E=l,j=c,B=u,P=d,I=f,O=m,A=p,S=b,q=g,R=h,N=v,U=y,T=x,H=k;for(let e=0;e<8;e+=2)B^=(0,rc.XG)(w+N|0,7),A^=(0,rc.XG)(B+w|0,9),N^=(0,rc.XG)(A+B|0,13),w^=(0,rc.XG)(N+A|0,18),S^=(0,rc.XG)(P+z|0,7),U^=(0,rc.XG)(S+P|0,9),z^=(0,rc.XG)(U+S|0,13),P^=(0,rc.XG)(z+U|0,18),T^=(0,rc.XG)(q+I|0,7),E^=(0,rc.XG)(T+q|0,9),I^=(0,rc.XG)(E+T|0,13),q^=(0,rc.XG)(I+E|0,18),j^=(0,rc.XG)(H+R|0,7),O^=(0,rc.XG)(j+H|0,9),R^=(0,rc.XG)(O+j|0,13),H^=(0,rc.XG)(R+O|0,18),z^=(0,rc.XG)(w+j|0,7),E^=(0,rc.XG)(z+w|0,9),j^=(0,rc.XG)(E+z|0,13),w^=(0,rc.XG)(j+E|0,18),I^=(0,rc.XG)(P+B|0,7),O^=(0,rc.XG)(I+P|0,9),B^=(0,rc.XG)(O+I|0,13),P^=(0,rc.XG)(B+O|0,18),R^=(0,rc.XG)(q+S|0,7),A^=(0,rc.XG)(R+q|0,9),S^=(0,rc.XG)(A+R|0,13),q^=(0,rc.XG)(S+A|0,18),N^=(0,rc.XG)(H+T|0,7),U^=(0,rc.XG)(N+H|0,9),T^=(0,rc.XG)(U+N|0,13),H^=(0,rc.XG)(T+U|0,18);o[i++]=n+w|0,o[i++]=s+z|0,o[i++]=l+E|0,o[i++]=c+j|0,o[i++]=u+B|0,o[i++]=d+P|0,o[i++]=f+I|0,o[i++]=m+O|0,o[i++]=p+A|0,o[i++]=b+S|0,o[i++]=g+q|0,o[i++]=h+R|0,o[i++]=v+N|0,o[i++]=y+U|0,o[i++]=x+T|0,o[i++]=k+H|0}function ic(e,r,a,t,o){let i=t+0,n=t+16*o;for(let t=0;t<16;t++)a[n+t]=e[r+(2*o-1)*16+t];for(let t=0;t<o;t++,i+=16,r+=16)il(a,n,e,r,a,i),t>0&&(n+=16),il(a,i,e,r+=16,a,n)}function iu(e,r,a){let{N:t,r:o,p:i,dkLen:n,asyncTick:s,maxmem:l,onProgress:c}=(0,rc.U5)({dkLen:32,asyncTick:10,maxmem:1073742848},a);if((0,rc.k8)(t),(0,rc.k8)(o),(0,rc.k8)(i),(0,rc.k8)(n),(0,rc.k8)(s),(0,rc.k8)(l),void 0!==c&&"function"!=typeof c)throw Error("progressCb should be function");let u=128*o,d=u/4;if(t<=1||(t&t-1)!=0||t>4294967296)throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");if(i<0||i>137438953440/u)throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");if(n<0||n>137438953440)throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");if(u*(t+i)>l)throw Error("Scrypt: memused is bigger than maxMem. Expected 128 * r * (N + p) > maxmem of "+l);let f=ii(r6.JQ,e,r,{c:1,dkLen:u*i}),m=(0,rc.Jq)(f),p=(0,rc.Jq)(new Uint8Array(u*t)),b=(0,rc.Jq)(new Uint8Array(u)),g=()=>{};if(c){let e=2*t*i,r=Math.max(Math.floor(e/1e4),1),a=0;g=()=>{a++,c&&(!(a%r)||a===e)&&c(a/e)}}return{N:t,r:o,p:i,dkLen:n,blockSize32:d,V:p,B32:m,B:f,tmp:b,blockMixCb:g,asyncTick:s}}function id(e,r,a,t,o){let i=ii(r6.JQ,e,a,{c:1,dkLen:r});return(0,rc.ru)(a,t,o),i}async function im(e,r,a){let{N:t,r:o,p:i,dkLen:n,blockSize32:s,V:l,B32:c,B:u,tmp:d,blockMixCb:f,asyncTick:m}=iu(e,r,a);(0,rc.Ux)(c);for(let e=0;e<i;e++){let r=s*e;for(let e=0;e<s;e++)l[e]=c[r+e];let a=0;await (0,rc.oY)(t-1,m,()=>{ic(l,a,l,a+=s,o),f()}),ic(l,(t-1)*s,c,r,o),f(),await (0,rc.oY)(t,m,()=>{let e=c[r+s-16]%t;for(let a=0;a<s;a++)d[a]=c[r+a]^l[e*s+a];ic(d,0,c,r,o),f()})}return(0,rc.Ux)(c),id(e,n,u,l,d)}function ip(e,r,a={}){let{as:t="Hex"}=a,o=ej.from("function"==typeof r?r():r),i=ej.slice(o,0,16),n=ej.slice(o,16,32),s=ej.from(`0x${e.crypto.ciphertext}`),l=eP.keccak256(ej.concat(n,s));if(!ej.isEqual(l,ej.from(`0x${e.crypto.mac}`)))throw Error("corrupt keystore");let c=ia(i,ej.from(`0x${e.crypto.cipherparams.iv}`)).decrypt(s);return"Hex"===t?ej.toHex(c):c}function ib(e,r,a){let{id:t=crypto.randomUUID(),kdf:o,kdfparams:i,iv:n}=a,s=ej.from("function"==typeof r?r():r),l=ej.from(e),c=ej.slice(s,0,16),u=ej.slice(s,16,32),d=ia(c,n).encrypt(l),f=eP.keccak256(ej.concat(u,d));return{crypto:{cipher:"aes-128-ctr",ciphertext:ej.toHex(d).slice(2),cipherparams:{iv:ej.toHex(n).slice(2)},kdf:o,kdfparams:i,mac:ej.toHex(f).slice(2)},id:t,version:3}}function ig(e){let{iv:r,iterations:a=262144,password:t}=e,o=e.salt?ej.from(e.salt):ej.random(32),i=ej.toHex(ii(r6.JQ,t,o,{c:a,dkLen:32}));return iw(()=>i,{iv:r,kdfparams:{c:a,dklen:32,prf:"hmac-sha256",salt:ej.toHex(o).slice(2)},kdf:"pbkdf2"})}async function ih(e){let{iv:r,iterations:a=262144,password:t}=e,o=e.salt?ej.from(e.salt):ej.random(32),i=ej.toHex(await is(r6.JQ,t,o,{c:a,dkLen:32}));return iw(()=>i,{iv:r,kdfparams:{c:a,dklen:32,prf:"hmac-sha256",salt:ej.toHex(o).slice(2)},kdf:"pbkdf2"})}function iv(e){let{iv:r,n:a=262144,password:t,p:o=8,r:i=1}=e,n=e.salt?ej.from(e.salt):ej.random(32),s=ej.toHex(function(e,r,a){let{N:t,r:o,p:i,dkLen:n,blockSize32:s,V:l,B32:c,B:u,tmp:d,blockMixCb:f}=iu(e,r,a);(0,rc.Ux)(c);for(let e=0;e<i;e++){let r=s*e;for(let e=0;e<s;e++)l[e]=c[r+e];for(let e=0,r=0;e<t-1;e++)ic(l,r,l,r+=s,o),f();ic(l,(t-1)*s,c,r,o),f();for(let e=0;e<t;e++){let e=c[r+s-16]%t;for(let a=0;a<s;a++)d[a]=c[r+a]^l[e*s+a];ic(d,0,c,r,o),f()}}return(0,rc.Ux)(c),id(e,n,u,l,d)}(t,n,{N:a,dkLen:32,r:i,p:o}));return iw(()=>s,{iv:r,kdfparams:{dklen:32,n:a,p:o,r:i,salt:ej.toHex(n).slice(2)},kdf:"scrypt"})}async function iy(e){let{iv:r,n:a=262144,password:t}=e,o=e.salt?ej.from(e.salt):ej.random(32),i=ej.toHex(await im(t,o,{N:a,dkLen:32,r:1,p:8}));return iw(()=>i,{iv:r,kdfparams:{dklen:32,n:a,p:8,r:1,salt:ej.toHex(o).slice(2)},kdf:"scrypt"})}function ix(e,r){let{crypto:a}=e,{password:t}=r,{cipherparams:o,kdf:i,kdfparams:n}=a,{iv:s}=o,{c:l,n:c,p:u,r:d,salt:f}=n,[m]=(()=>{switch(i){case"scrypt":return iv({iv:ej.from(`0x${s}`),n:c,p:u,r:d,salt:ej.from(`0x${f}`),password:t});case"pbkdf2":return ig({iv:ej.from(`0x${s}`),iterations:l,password:t,salt:ej.from(`0x${f}`)});default:throw Error("unsupported kdf")}})();return m}async function ik(e,r){let{crypto:a}=e,{password:t}=r,{cipherparams:o,kdf:i,kdfparams:n}=a,{iv:s}=o,{c:l,n:c,p:u,r:d,salt:f}=n,[m]=await (async()=>{switch(i){case"scrypt":return await iy({iv:ej.from(`0x${s}`),n:c,p:u,r:d,salt:ej.from(`0x${f}`),password:t});case"pbkdf2":return await ig({iv:ej.from(`0x${s}`),iterations:l,password:t,salt:ej.from(`0x${f}`)});default:throw Error("unsupported kdf")}})();return m}function iw(e,r){let a=r.iv?ej.from(r.iv):ej.random(16);return[e,{...r,iv:a}]}function iz(e,r={}){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null}}function iE(e,r={}){return{address:e.address,blockHash:e.blockHash,blockNumber:"bigint"==typeof e.blockNumber?ef.fromNumber(e.blockNumber):null,data:e.data,logIndex:"number"==typeof e.logIndex?ef.fromNumber(e.logIndex):null,topics:e.topics,transactionHash:e.transactionHash,transactionIndex:"number"==typeof e.transactionIndex?ef.fromNumber(e.transactionIndex):null,removed:e.removed}}let ij=e=>"あいこくしん"===e[0];function iB(e){if("string"!=typeof e)throw TypeError("invalid mnemonic type: "+typeof e);return e.normalize("NFKD")}function iP(e){let r=iB(e),a=r.split(" ");if(![12,15,18,21,24].includes(a.length))throw Error("Invalid mnemonic");return{nfkd:r,words:a}}function iI(e){(0,rc.gk)(e,16,20,24,28,32)}let iO=e=>{let r=8-e.length/4;return new Uint8Array([(0,r6.JQ)(e)[0]>>r<<r])};function iA(e){if(!Array.isArray(e)||2048!==e.length||"string"!=typeof e[0])throw Error("Wordlist: expected array of 2048 strings");return e.forEach(e=>{if("string"!=typeof e)throw Error("wordlist: non-string element: "+e)}),t9(on(1,iO),os(11,!0),t7(e))}let iS=e=>iB("mnemonic"+e),iq=`abdikace
abeceda
adresa
agrese
akce
aktovka
alej
alkohol
amputace
ananas
andulka
anekdota
anketa
antika
anulovat
archa
arogance
asfalt
asistent
aspirace
astma
astronom
atlas
atletika
atol
autobus
azyl
babka
bachor
bacil
baculka
badatel
bageta
bagr
bahno
bakterie
balada
baletka
balkon
balonek
balvan
balza
bambus
bankomat
barbar
baret
barman
baroko
barva
baterka
batoh
bavlna
bazalka
bazilika
bazuka
bedna
beran
beseda
bestie
beton
bezinka
bezmoc
beztak
bicykl
bidlo
biftek
bikiny
bilance
biograf
biolog
bitva
bizon
blahobyt
blatouch
blecha
bledule
blesk
blikat
blizna
blokovat
bloudit
blud
bobek
bobr
bodlina
bodnout
bohatost
bojkot
bojovat
bokorys
bolest
borec
borovice
bota
boubel
bouchat
bouda
boule
bourat
boxer
bradavka
brambora
branka
bratr
brepta
briketa
brko
brloh
bronz
broskev
brunetka
brusinka
brzda
brzy
bublina
bubnovat
buchta
buditel
budka
budova
bufet
bujarost
bukvice
buldok
bulva
bunda
bunkr
burza
butik
buvol
buzola
bydlet
bylina
bytovka
bzukot
capart
carevna
cedr
cedule
cejch
cejn
cela
celer
celkem
celnice
cenina
cennost
cenovka
centrum
cenzor
cestopis
cetka
chalupa
chapadlo
charita
chata
chechtat
chemie
chichot
chirurg
chlad
chleba
chlubit
chmel
chmura
chobot
chochol
chodba
cholera
chomout
chopit
choroba
chov
chrapot
chrlit
chrt
chrup
chtivost
chudina
chutnat
chvat
chvilka
chvost
chyba
chystat
chytit
cibule
cigareta
cihelna
cihla
cinkot
cirkus
cisterna
citace
citrus
cizinec
cizost
clona
cokoliv
couvat
ctitel
ctnost
cudnost
cuketa
cukr
cupot
cvaknout
cval
cvik
cvrkot
cyklista
daleko
dareba
datel
datum
dcera
debata
dechovka
decibel
deficit
deflace
dekl
dekret
demokrat
deprese
derby
deska
detektiv
dikobraz
diktovat
dioda
diplom
disk
displej
divadlo
divoch
dlaha
dlouho
dluhopis
dnes
dobro
dobytek
docent
dochutit
dodnes
dohled
dohoda
dohra
dojem
dojnice
doklad
dokola
doktor
dokument
dolar
doleva
dolina
doma
dominant
domluvit
domov
donutit
dopad
dopis
doplnit
doposud
doprovod
dopustit
dorazit
dorost
dort
dosah
doslov
dostatek
dosud
dosyta
dotaz
dotek
dotknout
doufat
doutnat
dovozce
dozadu
doznat
dozorce
drahota
drak
dramatik
dravec
draze
drdol
drobnost
drogerie
drozd
drsnost
drtit
drzost
duben
duchovno
dudek
duha
duhovka
dusit
dusno
dutost
dvojice
dvorec
dynamit
ekolog
ekonomie
elektron
elipsa
email
emise
emoce
empatie
epizoda
epocha
epopej
epos
esej
esence
eskorta
eskymo
etiketa
euforie
evoluce
exekuce
exkurze
expedice
exploze
export
extrakt
facka
fajfka
fakulta
fanatik
fantazie
farmacie
favorit
fazole
federace
fejeton
fenka
fialka
figurant
filozof
filtr
finance
finta
fixace
fjord
flanel
flirt
flotila
fond
fosfor
fotbal
fotka
foton
frakce
freska
fronta
fukar
funkce
fyzika
galeje
garant
genetika
geolog
gilotina
glazura
glejt
golem
golfista
gotika
graf
gramofon
granule
grep
gril
grog
groteska
guma
hadice
hadr
hala
halenka
hanba
hanopis
harfa
harpuna
havran
hebkost
hejkal
hejno
hejtman
hektar
helma
hematom
herec
herna
heslo
hezky
historik
hladovka
hlasivky
hlava
hledat
hlen
hlodavec
hloh
hloupost
hltat
hlubina
hluchota
hmat
hmota
hmyz
hnis
hnojivo
hnout
hoblina
hoboj
hoch
hodiny
hodlat
hodnota
hodovat
hojnost
hokej
holinka
holka
holub
homole
honitba
honorace
horal
horda
horizont
horko
horlivec
hormon
hornina
horoskop
horstvo
hospoda
hostina
hotovost
houba
houf
houpat
houska
hovor
hradba
hranice
hravost
hrazda
hrbolek
hrdina
hrdlo
hrdost
hrnek
hrobka
hromada
hrot
hrouda
hrozen
hrstka
hrubost
hryzat
hubenost
hubnout
hudba
hukot
humr
husita
hustota
hvozd
hybnost
hydrant
hygiena
hymna
hysterik
idylka
ihned
ikona
iluze
imunita
infekce
inflace
inkaso
inovace
inspekce
internet
invalida
investor
inzerce
ironie
jablko
jachta
jahoda
jakmile
jakost
jalovec
jantar
jarmark
jaro
jasan
jasno
jatka
javor
jazyk
jedinec
jedle
jednatel
jehlan
jekot
jelen
jelito
jemnost
jenom
jepice
jeseter
jevit
jezdec
jezero
jinak
jindy
jinoch
jiskra
jistota
jitrnice
jizva
jmenovat
jogurt
jurta
kabaret
kabel
kabinet
kachna
kadet
kadidlo
kahan
kajak
kajuta
kakao
kaktus
kalamita
kalhoty
kalibr
kalnost
kamera
kamkoliv
kamna
kanibal
kanoe
kantor
kapalina
kapela
kapitola
kapka
kaple
kapota
kapr
kapusta
kapybara
karamel
karotka
karton
kasa
katalog
katedra
kauce
kauza
kavalec
kazajka
kazeta
kazivost
kdekoliv
kdesi
kedluben
kemp
keramika
kino
klacek
kladivo
klam
klapot
klasika
klaun
klec
klenba
klepat
klesnout
klid
klima
klisna
klobouk
klokan
klopa
kloub
klubovna
klusat
kluzkost
kmen
kmitat
kmotr
kniha
knot
koalice
koberec
kobka
kobliha
kobyla
kocour
kohout
kojenec
kokos
koktejl
kolaps
koleda
kolize
kolo
komando
kometa
komik
komnata
komora
kompas
komunita
konat
koncept
kondice
konec
konfese
kongres
konina
konkurs
kontakt
konzerva
kopanec
kopie
kopnout
koprovka
korbel
korektor
kormidlo
koroptev
korpus
koruna
koryto
korzet
kosatec
kostka
kotel
kotleta
kotoul
koukat
koupelna
kousek
kouzlo
kovboj
koza
kozoroh
krabice
krach
krajina
kralovat
krasopis
kravata
kredit
krejcar
kresba
kreveta
kriket
kritik
krize
krkavec
krmelec
krmivo
krocan
krok
kronika
kropit
kroupa
krovka
krtek
kruhadlo
krupice
krutost
krvinka
krychle
krypta
krystal
kryt
kudlanka
kufr
kujnost
kukla
kulajda
kulich
kulka
kulomet
kultura
kuna
kupodivu
kurt
kurzor
kutil
kvalita
kvasinka
kvestor
kynolog
kyselina
kytara
kytice
kytka
kytovec
kyvadlo
labrador
lachtan
ladnost
laik
lakomec
lamela
lampa
lanovka
lasice
laso
lastura
latinka
lavina
lebka
leckdy
leden
lednice
ledovka
ledvina
legenda
legie
legrace
lehce
lehkost
lehnout
lektvar
lenochod
lentilka
lepenka
lepidlo
letadlo
letec
letmo
letokruh
levhart
levitace
levobok
libra
lichotka
lidojed
lidskost
lihovina
lijavec
lilek
limetka
linie
linka
linoleum
listopad
litina
litovat
lobista
lodivod
logika
logoped
lokalita
loket
lomcovat
lopata
lopuch
lord
losos
lotr
loudal
louh
louka
louskat
lovec
lstivost
lucerna
lucifer
lump
lusk
lustrace
lvice
lyra
lyrika
lysina
madam
madlo
magistr
mahagon
majetek
majitel
majorita
makak
makovice
makrela
malba
malina
malovat
malvice
maminka
mandle
manko
marnost
masakr
maskot
masopust
matice
matrika
maturita
mazanec
mazivo
mazlit
mazurka
mdloba
mechanik
meditace
medovina
melasa
meloun
mentolka
metla
metoda
metr
mezera
migrace
mihnout
mihule
mikina
mikrofon
milenec
milimetr
milost
mimika
mincovna
minibar
minomet
minulost
miska
mistr
mixovat
mladost
mlha
mlhovina
mlok
mlsat
mluvit
mnich
mnohem
mobil
mocnost
modelka
modlitba
mohyla
mokro
molekula
momentka
monarcha
monokl
monstrum
montovat
monzun
mosaz
moskyt
most
motivace
motorka
motyka
moucha
moudrost
mozaika
mozek
mozol
mramor
mravenec
mrkev
mrtvola
mrzet
mrzutost
mstitel
mudrc
muflon
mulat
mumie
munice
muset
mutace
muzeum
muzikant
myslivec
mzda
nabourat
nachytat
nadace
nadbytek
nadhoz
nadobro
nadpis
nahlas
nahnat
nahodile
nahradit
naivita
najednou
najisto
najmout
naklonit
nakonec
nakrmit
nalevo
namazat
namluvit
nanometr
naoko
naopak
naostro
napadat
napevno
naplnit
napnout
naposled
naprosto
narodit
naruby
narychlo
nasadit
nasekat
naslepo
nastat
natolik
navenek
navrch
navzdory
nazvat
nebe
nechat
necky
nedaleko
nedbat
neduh
negace
nehet
nehoda
nejen
nejprve
neklid
nelibost
nemilost
nemoc
neochota
neonka
nepokoj
nerost
nerv
nesmysl
nesoulad
netvor
neuron
nevina
nezvykle
nicota
nijak
nikam
nikdy
nikl
nikterak
nitro
nocleh
nohavice
nominace
nora
norek
nositel
nosnost
nouze
noviny
novota
nozdra
nuda
nudle
nuget
nutit
nutnost
nutrie
nymfa
obal
obarvit
obava
obdiv
obec
obehnat
obejmout
obezita
obhajoba
obilnice
objasnit
objekt
obklopit
oblast
oblek
obliba
obloha
obluda
obnos
obohatit
obojek
obout
obrazec
obrna
obruba
obrys
obsah
obsluha
obstarat
obuv
obvaz
obvinit
obvod
obvykle
obyvatel
obzor
ocas
ocel
ocenit
ochladit
ochota
ochrana
ocitnout
odboj
odbyt
odchod
odcizit
odebrat
odeslat
odevzdat
odezva
odhadce
odhodit
odjet
odjinud
odkaz
odkoupit
odliv
odluka
odmlka
odolnost
odpad
odpis
odplout
odpor
odpustit
odpykat
odrazka
odsoudit
odstup
odsun
odtok
odtud
odvaha
odveta
odvolat
odvracet
odznak
ofina
ofsajd
ohlas
ohnisko
ohrada
ohrozit
ohryzek
okap
okenice
oklika
okno
okouzlit
okovy
okrasa
okres
okrsek
okruh
okupant
okurka
okusit
olejnina
olizovat
omak
omeleta
omezit
omladina
omlouvat
omluva
omyl
onehdy
opakovat
opasek
operace
opice
opilost
opisovat
opora
opozice
opravdu
oproti
orbital
orchestr
orgie
orlice
orloj
ortel
osada
oschnout
osika
osivo
oslava
oslepit
oslnit
oslovit
osnova
osoba
osolit
ospalec
osten
ostraha
ostuda
ostych
osvojit
oteplit
otisk
otop
otrhat
otrlost
otrok
otruby
otvor
ovanout
ovar
oves
ovlivnit
ovoce
oxid
ozdoba
pachatel
pacient
padouch
pahorek
pakt
palanda
palec
palivo
paluba
pamflet
pamlsek
panenka
panika
panna
panovat
panstvo
pantofle
paprika
parketa
parodie
parta
paruka
paryba
paseka
pasivita
pastelka
patent
patrona
pavouk
pazneht
pazourek
pecka
pedagog
pejsek
peklo
peloton
penalta
pendrek
penze
periskop
pero
pestrost
petarda
petice
petrolej
pevnina
pexeso
pianista
piha
pijavice
pikle
piknik
pilina
pilnost
pilulka
pinzeta
pipeta
pisatel
pistole
pitevna
pivnice
pivovar
placenta
plakat
plamen
planeta
plastika
platit
plavidlo
plaz
plech
plemeno
plenta
ples
pletivo
plevel
plivat
plnit
plno
plocha
plodina
plomba
plout
pluk
plyn
pobavit
pobyt
pochod
pocit
poctivec
podat
podcenit
podepsat
podhled
podivit
podklad
podmanit
podnik
podoba
podpora
podraz
podstata
podvod
podzim
poezie
pohanka
pohnutka
pohovor
pohroma
pohyb
pointa
pojistka
pojmout
pokazit
pokles
pokoj
pokrok
pokuta
pokyn
poledne
polibek
polknout
poloha
polynom
pomalu
pominout
pomlka
pomoc
pomsta
pomyslet
ponechat
ponorka
ponurost
popadat
popel
popisek
poplach
poprosit
popsat
popud
poradce
porce
porod
porucha
poryv
posadit
posed
posila
poskok
poslanec
posoudit
pospolu
postava
posudek
posyp
potah
potkan
potlesk
potomek
potrava
potupa
potvora
poukaz
pouto
pouzdro
povaha
povidla
povlak
povoz
povrch
povstat
povyk
povzdech
pozdrav
pozemek
poznatek
pozor
pozvat
pracovat
prahory
praktika
prales
praotec
praporek
prase
pravda
princip
prkno
probudit
procento
prodej
profese
prohra
projekt
prolomit
promile
pronikat
propad
prorok
prosba
proton
proutek
provaz
prskavka
prsten
prudkost
prut
prvek
prvohory
psanec
psovod
pstruh
ptactvo
puberta
puch
pudl
pukavec
puklina
pukrle
pult
pumpa
punc
pupen
pusa
pusinka
pustina
putovat
putyka
pyramida
pysk
pytel
racek
rachot
radiace
radnice
radon
raft
ragby
raketa
rakovina
rameno
rampouch
rande
rarach
rarita
rasovna
rastr
ratolest
razance
razidlo
reagovat
reakce
recept
redaktor
referent
reflex
rejnok
reklama
rekord
rekrut
rektor
reputace
revize
revma
revolver
rezerva
riskovat
riziko
robotika
rodokmen
rohovka
rokle
rokoko
romaneto
ropovod
ropucha
rorejs
rosol
rostlina
rotmistr
rotoped
rotunda
roubenka
roucho
roup
roura
rovina
rovnice
rozbor
rozchod
rozdat
rozeznat
rozhodce
rozinka
rozjezd
rozkaz
rozloha
rozmar
rozpad
rozruch
rozsah
roztok
rozum
rozvod
rubrika
ruchadlo
rukavice
rukopis
ryba
rybolov
rychlost
rydlo
rypadlo
rytina
ryzost
sadista
sahat
sako
samec
samizdat
samota
sanitka
sardinka
sasanka
satelit
sazba
sazenice
sbor
schovat
sebranka
secese
sedadlo
sediment
sedlo
sehnat
sejmout
sekera
sekta
sekunda
sekvoje
semeno
seno
servis
sesadit
seshora
seskok
seslat
sestra
sesuv
sesypat
setba
setina
setkat
setnout
setrvat
sever
seznam
shoda
shrnout
sifon
silnice
sirka
sirotek
sirup
situace
skafandr
skalisko
skanzen
skaut
skeptik
skica
skladba
sklenice
sklo
skluz
skoba
skokan
skoro
skripta
skrz
skupina
skvost
skvrna
slabika
sladidlo
slanina
slast
slavnost
sledovat
slepec
sleva
slezina
slib
slina
sliznice
slon
sloupek
slovo
sluch
sluha
slunce
slupka
slza
smaragd
smetana
smilstvo
smlouva
smog
smrad
smrk
smrtka
smutek
smysl
snad
snaha
snob
sobota
socha
sodovka
sokol
sopka
sotva
souboj
soucit
soudce
souhlas
soulad
soumrak
souprava
soused
soutok
souviset
spalovna
spasitel
spis
splav
spodek
spojenec
spolu
sponzor
spornost
spousta
sprcha
spustit
sranda
sraz
srdce
srna
srnec
srovnat
srpen
srst
srub
stanice
starosta
statika
stavba
stehno
stezka
stodola
stolek
stopa
storno
stoupat
strach
stres
strhnout
strom
struna
studna
stupnice
stvol
styk
subjekt
subtropy
suchar
sudost
sukno
sundat
sunout
surikata
surovina
svah
svalstvo
svetr
svatba
svazek
svisle
svitek
svoboda
svodidlo
svorka
svrab
sykavka
sykot
synek
synovec
sypat
sypkost
syrovost
sysel
sytost
tabletka
tabule
tahoun
tajemno
tajfun
tajga
tajit
tajnost
taktika
tamhle
tampon
tancovat
tanec
tanker
tapeta
tavenina
tazatel
technika
tehdy
tekutina
telefon
temnota
tendence
tenista
tenor
teplota
tepna
teprve
terapie
termoska
textil
ticho
tiskopis
titulek
tkadlec
tkanina
tlapka
tleskat
tlukot
tlupa
tmel
toaleta
topinka
topol
torzo
touha
toulec
tradice
traktor
tramp
trasa
traverza
trefit
trest
trezor
trhavina
trhlina
trochu
trojice
troska
trouba
trpce
trpitel
trpkost
trubec
truchlit
truhlice
trus
trvat
tudy
tuhnout
tuhost
tundra
turista
turnaj
tuzemsko
tvaroh
tvorba
tvrdost
tvrz
tygr
tykev
ubohost
uboze
ubrat
ubrousek
ubrus
ubytovna
ucho
uctivost
udivit
uhradit
ujednat
ujistit
ujmout
ukazatel
uklidnit
uklonit
ukotvit
ukrojit
ulice
ulita
ulovit
umyvadlo
unavit
uniforma
uniknout
upadnout
uplatnit
uplynout
upoutat
upravit
uran
urazit
usednout
usilovat
usmrtit
usnadnit
usnout
usoudit
ustlat
ustrnout
utahovat
utkat
utlumit
utonout
utopenec
utrousit
uvalit
uvolnit
uvozovka
uzdravit
uzel
uzenina
uzlina
uznat
vagon
valcha
valoun
vana
vandal
vanilka
varan
varhany
varovat
vcelku
vchod
vdova
vedro
vegetace
vejce
velbloud
veletrh
velitel
velmoc
velryba
venkov
veranda
verze
veselka
veskrze
vesnice
vespodu
vesta
veterina
veverka
vibrace
vichr
videohra
vidina
vidle
vila
vinice
viset
vitalita
vize
vizitka
vjezd
vklad
vkus
vlajka
vlak
vlasec
vlevo
vlhkost
vliv
vlnovka
vloupat
vnucovat
vnuk
voda
vodivost
vodoznak
vodstvo
vojensky
vojna
vojsko
volant
volba
volit
volno
voskovka
vozidlo
vozovna
vpravo
vrabec
vracet
vrah
vrata
vrba
vrcholek
vrhat
vrstva
vrtule
vsadit
vstoupit
vstup
vtip
vybavit
vybrat
vychovat
vydat
vydra
vyfotit
vyhledat
vyhnout
vyhodit
vyhradit
vyhubit
vyjasnit
vyjet
vyjmout
vyklopit
vykonat
vylekat
vymazat
vymezit
vymizet
vymyslet
vynechat
vynikat
vynutit
vypadat
vyplatit
vypravit
vypustit
vyrazit
vyrovnat
vyrvat
vyslovit
vysoko
vystavit
vysunout
vysypat
vytasit
vytesat
vytratit
vyvinout
vyvolat
vyvrhel
vyzdobit
vyznat
vzadu
vzbudit
vzchopit
vzdor
vzduch
vzdychat
vzestup
vzhledem
vzkaz
vzlykat
vznik
vzorek
vzpoura
vztah
vztek
xylofon
zabrat
zabydlet
zachovat
zadarmo
zadusit
zafoukat
zahltit
zahodit
zahrada
zahynout
zajatec
zajet
zajistit
zaklepat
zakoupit
zalepit
zamezit
zamotat
zamyslet
zanechat
zanikat
zaplatit
zapojit
zapsat
zarazit
zastavit
zasunout
zatajit
zatemnit
zatknout
zaujmout
zavalit
zavelet
zavinit
zavolat
zavrtat
zazvonit
zbavit
zbrusu
zbudovat
zbytek
zdaleka
zdarma
zdatnost
zdivo
zdobit
zdroj
zdvih
zdymadlo
zelenina
zeman
zemina
zeptat
zezadu
zezdola
zhatit
zhltnout
zhluboka
zhotovit
zhruba
zima
zimnice
zjemnit
zklamat
zkoumat
zkratka
zkumavka
zlato
zlehka
zloba
zlom
zlost
zlozvyk
zmapovat
zmar
zmatek
zmije
zmizet
zmocnit
zmodrat
zmrzlina
zmutovat
znak
znalost
znamenat
znovu
zobrazit
zotavit
zoubek
zoufale
zplodit
zpomalit
zprava
zprostit
zprudka
zprvu
zrada
zranit
zrcadlo
zrnitost
zrno
zrovna
zrychlit
zrzavost
zticha
ztratit
zubovina
zubr
zvednout
zvenku
zvesela
zvon
zvrat
zvukovod
zvyk`.split("\n"),iR=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split("\n"),iN=`abaisser
abandon
abdiquer
abeille
abolir
aborder
aboutir
aboyer
abrasif
abreuver
abriter
abroger
abrupt
absence
absolu
absurde
abusif
abyssal
académie
acajou
acarien
accabler
accepter
acclamer
accolade
accroche
accuser
acerbe
achat
acheter
aciduler
acier
acompte
acquérir
acronyme
acteur
actif
actuel
adepte
adéquat
adhésif
adjectif
adjuger
admettre
admirer
adopter
adorer
adoucir
adresse
adroit
adulte
adverbe
aérer
aéronef
affaire
affecter
affiche
affreux
affubler
agacer
agencer
agile
agiter
agrafer
agréable
agrume
aider
aiguille
ailier
aimable
aisance
ajouter
ajuster
alarmer
alchimie
alerte
algèbre
algue
aliéner
aliment
alléger
alliage
allouer
allumer
alourdir
alpaga
altesse
alvéole
amateur
ambigu
ambre
aménager
amertume
amidon
amiral
amorcer
amour
amovible
amphibie
ampleur
amusant
analyse
anaphore
anarchie
anatomie
ancien
anéantir
angle
angoisse
anguleux
animal
annexer
annonce
annuel
anodin
anomalie
anonyme
anormal
antenne
antidote
anxieux
apaiser
apéritif
aplanir
apologie
appareil
appeler
apporter
appuyer
aquarium
aqueduc
arbitre
arbuste
ardeur
ardoise
argent
arlequin
armature
armement
armoire
armure
arpenter
arracher
arriver
arroser
arsenic
artériel
article
aspect
asphalte
aspirer
assaut
asservir
assiette
associer
assurer
asticot
astre
astuce
atelier
atome
atrium
atroce
attaque
attentif
attirer
attraper
aubaine
auberge
audace
audible
augurer
aurore
automne
autruche
avaler
avancer
avarice
avenir
averse
aveugle
aviateur
avide
avion
aviser
avoine
avouer
avril
axial
axiome
badge
bafouer
bagage
baguette
baignade
balancer
balcon
baleine
balisage
bambin
bancaire
bandage
banlieue
bannière
banquier
barbier
baril
baron
barque
barrage
bassin
bastion
bataille
bateau
batterie
baudrier
bavarder
belette
bélier
belote
bénéfice
berceau
berger
berline
bermuda
besace
besogne
bétail
beurre
biberon
bicycle
bidule
bijou
bilan
bilingue
billard
binaire
biologie
biopsie
biotype
biscuit
bison
bistouri
bitume
bizarre
blafard
blague
blanchir
blessant
blinder
blond
bloquer
blouson
bobard
bobine
boire
boiser
bolide
bonbon
bondir
bonheur
bonifier
bonus
bordure
borne
botte
boucle
boueux
bougie
boulon
bouquin
bourse
boussole
boutique
boxeur
branche
brasier
brave
brebis
brèche
breuvage
bricoler
brigade
brillant
brioche
brique
brochure
broder
bronzer
brousse
broyeur
brume
brusque
brutal
bruyant
buffle
buisson
bulletin
bureau
burin
bustier
butiner
butoir
buvable
buvette
cabanon
cabine
cachette
cadeau
cadre
caféine
caillou
caisson
calculer
calepin
calibre
calmer
calomnie
calvaire
camarade
caméra
camion
campagne
canal
caneton
canon
cantine
canular
capable
caporal
caprice
capsule
capter
capuche
carabine
carbone
caresser
caribou
carnage
carotte
carreau
carton
cascade
casier
casque
cassure
causer
caution
cavalier
caverne
caviar
cédille
ceinture
céleste
cellule
cendrier
censurer
central
cercle
cérébral
cerise
cerner
cerveau
cesser
chagrin
chaise
chaleur
chambre
chance
chapitre
charbon
chasseur
chaton
chausson
chavirer
chemise
chenille
chéquier
chercher
cheval
chien
chiffre
chignon
chimère
chiot
chlorure
chocolat
choisir
chose
chouette
chrome
chute
cigare
cigogne
cimenter
cinéma
cintrer
circuler
cirer
cirque
citerne
citoyen
citron
civil
clairon
clameur
claquer
classe
clavier
client
cligner
climat
clivage
cloche
clonage
cloporte
cobalt
cobra
cocasse
cocotier
coder
codifier
coffre
cogner
cohésion
coiffer
coincer
colère
colibri
colline
colmater
colonel
combat
comédie
commande
compact
concert
conduire
confier
congeler
connoter
consonne
contact
convexe
copain
copie
corail
corbeau
cordage
corniche
corpus
correct
cortège
cosmique
costume
coton
coude
coupure
courage
couteau
couvrir
coyote
crabe
crainte
cravate
crayon
créature
créditer
crémeux
creuser
crevette
cribler
crier
cristal
critère
croire
croquer
crotale
crucial
cruel
crypter
cubique
cueillir
cuillère
cuisine
cuivre
culminer
cultiver
cumuler
cupide
curatif
curseur
cyanure
cycle
cylindre
cynique
daigner
damier
danger
danseur
dauphin
débattre
débiter
déborder
débrider
débutant
décaler
décembre
déchirer
décider
déclarer
décorer
décrire
décupler
dédale
déductif
déesse
défensif
défiler
défrayer
dégager
dégivrer
déglutir
dégrafer
déjeuner
délice
déloger
demander
demeurer
démolir
dénicher
dénouer
dentelle
dénuder
départ
dépenser
déphaser
déplacer
déposer
déranger
dérober
désastre
descente
désert
désigner
désobéir
dessiner
destrier
détacher
détester
détourer
détresse
devancer
devenir
deviner
devoir
diable
dialogue
diamant
dicter
différer
digérer
digital
digne
diluer
dimanche
diminuer
dioxyde
directif
diriger
discuter
disposer
dissiper
distance
divertir
diviser
docile
docteur
dogme
doigt
domaine
domicile
dompter
donateur
donjon
donner
dopamine
dortoir
dorure
dosage
doseur
dossier
dotation
douanier
double
douceur
douter
doyen
dragon
draper
dresser
dribbler
droiture
duperie
duplexe
durable
durcir
dynastie
éblouir
écarter
écharpe
échelle
éclairer
éclipse
éclore
écluse
école
économie
écorce
écouter
écraser
écrémer
écrivain
écrou
écume
écureuil
édifier
éduquer
effacer
effectif
effigie
effort
effrayer
effusion
égaliser
égarer
éjecter
élaborer
élargir
électron
élégant
éléphant
élève
éligible
élitisme
éloge
élucider
éluder
emballer
embellir
embryon
émeraude
émission
emmener
émotion
émouvoir
empereur
employer
emporter
emprise
émulsion
encadrer
enchère
enclave
encoche
endiguer
endosser
endroit
enduire
énergie
enfance
enfermer
enfouir
engager
engin
englober
énigme
enjamber
enjeu
enlever
ennemi
ennuyeux
enrichir
enrobage
enseigne
entasser
entendre
entier
entourer
entraver
énumérer
envahir
enviable
envoyer
enzyme
éolien
épaissir
épargne
épatant
épaule
épicerie
épidémie
épier
épilogue
épine
épisode
épitaphe
époque
épreuve
éprouver
épuisant
équerre
équipe
ériger
érosion
erreur
éruption
escalier
espadon
espèce
espiègle
espoir
esprit
esquiver
essayer
essence
essieu
essorer
estime
estomac
estrade
étagère
étaler
étanche
étatique
éteindre
étendoir
éternel
éthanol
éthique
ethnie
étirer
étoffer
étoile
étonnant
étourdir
étrange
étroit
étude
euphorie
évaluer
évasion
éventail
évidence
éviter
évolutif
évoquer
exact
exagérer
exaucer
exceller
excitant
exclusif
excuse
exécuter
exemple
exercer
exhaler
exhorter
exigence
exiler
exister
exotique
expédier
explorer
exposer
exprimer
exquis
extensif
extraire
exulter
fable
fabuleux
facette
facile
facture
faiblir
falaise
fameux
famille
farceur
farfelu
farine
farouche
fasciner
fatal
fatigue
faucon
fautif
faveur
favori
fébrile
féconder
fédérer
félin
femme
fémur
fendoir
féodal
fermer
féroce
ferveur
festival
feuille
feutre
février
fiasco
ficeler
fictif
fidèle
figure
filature
filetage
filière
filleul
filmer
filou
filtrer
financer
finir
fiole
firme
fissure
fixer
flairer
flamme
flasque
flatteur
fléau
flèche
fleur
flexion
flocon
flore
fluctuer
fluide
fluvial
folie
fonderie
fongible
fontaine
forcer
forgeron
formuler
fortune
fossile
foudre
fougère
fouiller
foulure
fourmi
fragile
fraise
franchir
frapper
frayeur
frégate
freiner
frelon
frémir
frénésie
frère
friable
friction
frisson
frivole
froid
fromage
frontal
frotter
fruit
fugitif
fuite
fureur
furieux
furtif
fusion
futur
gagner
galaxie
galerie
gambader
garantir
gardien
garnir
garrigue
gazelle
gazon
géant
gélatine
gélule
gendarme
général
génie
genou
gentil
géologie
géomètre
géranium
germe
gestuel
geyser
gibier
gicler
girafe
givre
glace
glaive
glisser
globe
gloire
glorieux
golfeur
gomme
gonfler
gorge
gorille
goudron
gouffre
goulot
goupille
gourmand
goutte
graduel
graffiti
graine
grand
grappin
gratuit
gravir
grenat
griffure
griller
grimper
grogner
gronder
grotte
groupe
gruger
grutier
gruyère
guépard
guerrier
guide
guimauve
guitare
gustatif
gymnaste
gyrostat
habitude
hachoir
halte
hameau
hangar
hanneton
haricot
harmonie
harpon
hasard
hélium
hématome
herbe
hérisson
hermine
héron
hésiter
heureux
hiberner
hibou
hilarant
histoire
hiver
homard
hommage
homogène
honneur
honorer
honteux
horde
horizon
horloge
hormone
horrible
houleux
housse
hublot
huileux
humain
humble
humide
humour
hurler
hydromel
hygiène
hymne
hypnose
idylle
ignorer
iguane
illicite
illusion
image
imbiber
imiter
immense
immobile
immuable
impact
impérial
implorer
imposer
imprimer
imputer
incarner
incendie
incident
incliner
incolore
indexer
indice
inductif
inédit
ineptie
inexact
infini
infliger
informer
infusion
ingérer
inhaler
inhiber
injecter
injure
innocent
inoculer
inonder
inscrire
insecte
insigne
insolite
inspirer
instinct
insulter
intact
intense
intime
intrigue
intuitif
inutile
invasion
inventer
inviter
invoquer
ironique
irradier
irréel
irriter
isoler
ivoire
ivresse
jaguar
jaillir
jambe
janvier
jardin
jauger
jaune
javelot
jetable
jeton
jeudi
jeunesse
joindre
joncher
jongler
joueur
jouissif
journal
jovial
joyau
joyeux
jubiler
jugement
junior
jupon
juriste
justice
juteux
juvénile
kayak
kimono
kiosque
label
labial
labourer
lacérer
lactose
lagune
laine
laisser
laitier
lambeau
lamelle
lampe
lanceur
langage
lanterne
lapin
largeur
larme
laurier
lavabo
lavoir
lecture
légal
léger
légume
lessive
lettre
levier
lexique
lézard
liasse
libérer
libre
licence
licorne
liège
lièvre
ligature
ligoter
ligue
limer
limite
limonade
limpide
linéaire
lingot
lionceau
liquide
lisière
lister
lithium
litige
littoral
livreur
logique
lointain
loisir
lombric
loterie
louer
lourd
loutre
louve
loyal
lubie
lucide
lucratif
lueur
lugubre
luisant
lumière
lunaire
lundi
luron
lutter
luxueux
machine
magasin
magenta
magique
maigre
maillon
maintien
mairie
maison
majorer
malaxer
maléfice
malheur
malice
mallette
mammouth
mandater
maniable
manquant
manteau
manuel
marathon
marbre
marchand
mardi
maritime
marqueur
marron
marteler
mascotte
massif
matériel
matière
matraque
maudire
maussade
mauve
maximal
méchant
méconnu
médaille
médecin
méditer
méduse
meilleur
mélange
mélodie
membre
mémoire
menacer
mener
menhir
mensonge
mentor
mercredi
mérite
merle
messager
mesure
métal
météore
méthode
métier
meuble
miauler
microbe
miette
mignon
migrer
milieu
million
mimique
mince
minéral
minimal
minorer
minute
miracle
miroiter
missile
mixte
mobile
moderne
moelleux
mondial
moniteur
monnaie
monotone
monstre
montagne
monument
moqueur
morceau
morsure
mortier
moteur
motif
mouche
moufle
moulin
mousson
mouton
mouvant
multiple
munition
muraille
murène
murmure
muscle
muséum
musicien
mutation
muter
mutuel
myriade
myrtille
mystère
mythique
nageur
nappe
narquois
narrer
natation
nation
nature
naufrage
nautique
navire
nébuleux
nectar
néfaste
négation
négliger
négocier
neige
nerveux
nettoyer
neurone
neutron
neveu
niche
nickel
nitrate
niveau
noble
nocif
nocturne
noirceur
noisette
nomade
nombreux
nommer
normatif
notable
notifier
notoire
nourrir
nouveau
novateur
novembre
novice
nuage
nuancer
nuire
nuisible
numéro
nuptial
nuque
nutritif
obéir
objectif
obliger
obscur
observer
obstacle
obtenir
obturer
occasion
occuper
océan
octobre
octroyer
octupler
oculaire
odeur
odorant
offenser
officier
offrir
ogive
oiseau
oisillon
olfactif
olivier
ombrage
omettre
onctueux
onduler
onéreux
onirique
opale
opaque
opérer
opinion
opportun
opprimer
opter
optique
orageux
orange
orbite
ordonner
oreille
organe
orgueil
orifice
ornement
orque
ortie
osciller
osmose
ossature
otarie
ouragan
ourson
outil
outrager
ouvrage
ovation
oxyde
oxygène
ozone
paisible
palace
palmarès
palourde
palper
panache
panda
pangolin
paniquer
panneau
panorama
pantalon
papaye
papier
papoter
papyrus
paradoxe
parcelle
paresse
parfumer
parler
parole
parrain
parsemer
partager
parure
parvenir
passion
pastèque
paternel
patience
patron
pavillon
pavoiser
payer
paysage
peigne
peintre
pelage
pélican
pelle
pelouse
peluche
pendule
pénétrer
pénible
pensif
pénurie
pépite
péplum
perdrix
perforer
période
permuter
perplexe
persil
perte
peser
pétale
petit
pétrir
peuple
pharaon
phobie
phoque
photon
phrase
physique
piano
pictural
pièce
pierre
pieuvre
pilote
pinceau
pipette
piquer
pirogue
piscine
piston
pivoter
pixel
pizza
placard
plafond
plaisir
planer
plaque
plastron
plateau
pleurer
plexus
pliage
plomb
plonger
pluie
plumage
pochette
poésie
poète
pointe
poirier
poisson
poivre
polaire
policier
pollen
polygone
pommade
pompier
ponctuel
pondérer
poney
portique
position
posséder
posture
potager
poteau
potion
pouce
poulain
poumon
pourpre
poussin
pouvoir
prairie
pratique
précieux
prédire
préfixe
prélude
prénom
présence
prétexte
prévoir
primitif
prince
prison
priver
problème
procéder
prodige
profond
progrès
proie
projeter
prologue
promener
propre
prospère
protéger
prouesse
proverbe
prudence
pruneau
psychose
public
puceron
puiser
pulpe
pulsar
punaise
punitif
pupitre
purifier
puzzle
pyramide
quasar
querelle
question
quiétude
quitter
quotient
racine
raconter
radieux
ragondin
raideur
raisin
ralentir
rallonge
ramasser
rapide
rasage
ratisser
ravager
ravin
rayonner
réactif
réagir
réaliser
réanimer
recevoir
réciter
réclamer
récolter
recruter
reculer
recycler
rédiger
redouter
refaire
réflexe
réformer
refrain
refuge
régalien
région
réglage
régulier
réitérer
rejeter
rejouer
relatif
relever
relief
remarque
remède
remise
remonter
remplir
remuer
renard
renfort
renifler
renoncer
rentrer
renvoi
replier
reporter
reprise
reptile
requin
réserve
résineux
résoudre
respect
rester
résultat
rétablir
retenir
réticule
retomber
retracer
réunion
réussir
revanche
revivre
révolte
révulsif
richesse
rideau
rieur
rigide
rigoler
rincer
riposter
risible
risque
rituel
rival
rivière
rocheux
romance
rompre
ronce
rondin
roseau
rosier
rotatif
rotor
rotule
rouge
rouille
rouleau
routine
royaume
ruban
rubis
ruche
ruelle
rugueux
ruiner
ruisseau
ruser
rustique
rythme
sabler
saboter
sabre
sacoche
safari
sagesse
saisir
salade
salive
salon
saluer
samedi
sanction
sanglier
sarcasme
sardine
saturer
saugrenu
saumon
sauter
sauvage
savant
savonner
scalpel
scandale
scélérat
scénario
sceptre
schéma
science
scinder
score
scrutin
sculpter
séance
sécable
sécher
secouer
sécréter
sédatif
séduire
seigneur
séjour
sélectif
semaine
sembler
semence
séminal
sénateur
sensible
sentence
séparer
séquence
serein
sergent
sérieux
serrure
sérum
service
sésame
sévir
sevrage
sextuple
sidéral
siècle
siéger
siffler
sigle
signal
silence
silicium
simple
sincère
sinistre
siphon
sirop
sismique
situer
skier
social
socle
sodium
soigneux
soldat
soleil
solitude
soluble
sombre
sommeil
somnoler
sonde
songeur
sonnette
sonore
sorcier
sortir
sosie
sottise
soucieux
soudure
souffle
soulever
soupape
source
soutirer
souvenir
spacieux
spatial
spécial
sphère
spiral
stable
station
sternum
stimulus
stipuler
strict
studieux
stupeur
styliste
sublime
substrat
subtil
subvenir
succès
sucre
suffixe
suggérer
suiveur
sulfate
superbe
supplier
surface
suricate
surmener
surprise
sursaut
survie
suspect
syllabe
symbole
symétrie
synapse
syntaxe
système
tabac
tablier
tactile
tailler
talent
talisman
talonner
tambour
tamiser
tangible
tapis
taquiner
tarder
tarif
tartine
tasse
tatami
tatouage
taupe
taureau
taxer
témoin
temporel
tenaille
tendre
teneur
tenir
tension
terminer
terne
terrible
tétine
texte
thème
théorie
thérapie
thorax
tibia
tiède
timide
tirelire
tiroir
tissu
titane
titre
tituber
toboggan
tolérant
tomate
tonique
tonneau
toponyme
torche
tordre
tornade
torpille
torrent
torse
tortue
totem
toucher
tournage
tousser
toxine
traction
trafic
tragique
trahir
train
trancher
travail
trèfle
tremper
trésor
treuil
triage
tribunal
tricoter
trilogie
triomphe
tripler
triturer
trivial
trombone
tronc
tropical
troupeau
tuile
tulipe
tumulte
tunnel
turbine
tuteur
tutoyer
tuyau
tympan
typhon
typique
tyran
ubuesque
ultime
ultrason
unanime
unifier
union
unique
unitaire
univers
uranium
urbain
urticant
usage
usine
usuel
usure
utile
utopie
vacarme
vaccin
vagabond
vague
vaillant
vaincre
vaisseau
valable
valise
vallon
valve
vampire
vanille
vapeur
varier
vaseux
vassal
vaste
vecteur
vedette
végétal
véhicule
veinard
véloce
vendredi
vénérer
venger
venimeux
ventouse
verdure
vérin
vernir
verrou
verser
vertu
veston
vétéran
vétuste
vexant
vexer
viaduc
viande
victoire
vidange
vidéo
vignette
vigueur
vilain
village
vinaigre
violon
vipère
virement
virtuose
virus
visage
viseur
vision
visqueux
visuel
vital
vitesse
viticole
vitrine
vivace
vivipare
vocation
voguer
voile
voisin
voiture
volaille
volcan
voltiger
volume
vorace
vortex
voter
vouloir
voyage
voyelle
wagon
xénon
yacht
zèbre
zénith
zeste
zoologie`.split("\n"),iU=`abaco
abbaglio
abbinato
abete
abisso
abolire
abrasivo
abrogato
accadere
accenno
accusato
acetone
achille
acido
acqua
acre
acrilico
acrobata
acuto
adagio
addebito
addome
adeguato
aderire
adipe
adottare
adulare
affabile
affetto
affisso
affranto
aforisma
afoso
africano
agave
agente
agevole
aggancio
agire
agitare
agonismo
agricolo
agrumeto
aguzzo
alabarda
alato
albatro
alberato
albo
albume
alce
alcolico
alettone
alfa
algebra
aliante
alibi
alimento
allagato
allegro
allievo
allodola
allusivo
almeno
alogeno
alpaca
alpestre
altalena
alterno
alticcio
altrove
alunno
alveolo
alzare
amalgama
amanita
amarena
ambito
ambrato
ameba
america
ametista
amico
ammasso
ammenda
ammirare
ammonito
amore
ampio
ampliare
amuleto
anacardo
anagrafe
analista
anarchia
anatra
anca
ancella
ancora
andare
andrea
anello
angelo
angolare
angusto
anima
annegare
annidato
anno
annuncio
anonimo
anticipo
anzi
apatico
apertura
apode
apparire
appetito
appoggio
approdo
appunto
aprile
arabica
arachide
aragosta
araldica
arancio
aratura
arazzo
arbitro
archivio
ardito
arenile
argento
argine
arguto
aria
armonia
arnese
arredato
arringa
arrosto
arsenico
arso
artefice
arzillo
asciutto
ascolto
asepsi
asettico
asfalto
asino
asola
aspirato
aspro
assaggio
asse
assoluto
assurdo
asta
astenuto
astice
astratto
atavico
ateismo
atomico
atono
attesa
attivare
attorno
attrito
attuale
ausilio
austria
autista
autonomo
autunno
avanzato
avere
avvenire
avviso
avvolgere
azione
azoto
azzimo
azzurro
babele
baccano
bacino
baco
badessa
badilata
bagnato
baita
balcone
baldo
balena
ballata
balzano
bambino
bandire
baraonda
barbaro
barca
baritono
barlume
barocco
basilico
basso
batosta
battuto
baule
bava
bavosa
becco
beffa
belgio
belva
benda
benevole
benigno
benzina
bere
berlina
beta
bibita
bici
bidone
bifido
biga
bilancia
bimbo
binocolo
biologo
bipede
bipolare
birbante
birra
biscotto
bisesto
bisnonno
bisonte
bisturi
bizzarro
blando
blatta
bollito
bonifico
bordo
bosco
botanico
bottino
bozzolo
braccio
bradipo
brama
branca
bravura
bretella
brevetto
brezza
briglia
brillante
brindare
broccolo
brodo
bronzina
brullo
bruno
bubbone
buca
budino
buffone
buio
bulbo
buono
burlone
burrasca
bussola
busta
cadetto
caduco
calamaro
calcolo
calesse
calibro
calmo
caloria
cambusa
camerata
camicia
cammino
camola
campale
canapa
candela
cane
canino
canotto
cantina
capace
capello
capitolo
capogiro
cappero
capra
capsula
carapace
carcassa
cardo
carisma
carovana
carretto
cartolina
casaccio
cascata
caserma
caso
cassone
castello
casuale
catasta
catena
catrame
cauto
cavillo
cedibile
cedrata
cefalo
celebre
cellulare
cena
cenone
centesimo
ceramica
cercare
certo
cerume
cervello
cesoia
cespo
ceto
chela
chiaro
chicca
chiedere
chimera
china
chirurgo
chitarra
ciao
ciclismo
cifrare
cigno
cilindro
ciottolo
circa
cirrosi
citrico
cittadino
ciuffo
civetta
civile
classico
clinica
cloro
cocco
codardo
codice
coerente
cognome
collare
colmato
colore
colposo
coltivato
colza
coma
cometa
commando
comodo
computer
comune
conciso
condurre
conferma
congelare
coniuge
connesso
conoscere
consumo
continuo
convegno
coperto
copione
coppia
copricapo
corazza
cordata
coricato
cornice
corolla
corpo
corredo
corsia
cortese
cosmico
costante
cottura
covato
cratere
cravatta
creato
credere
cremoso
crescita
creta
criceto
crinale
crisi
critico
croce
cronaca
crostata
cruciale
crusca
cucire
cuculo
cugino
cullato
cupola
curatore
cursore
curvo
cuscino
custode
dado
daino
dalmata
damerino
daniela
dannoso
danzare
datato
davanti
davvero
debutto
decennio
deciso
declino
decollo
decreto
dedicato
definito
deforme
degno
delegare
delfino
delirio
delta
demenza
denotato
dentro
deposito
derapata
derivare
deroga
descritto
deserto
desiderio
desumere
detersivo
devoto
diametro
dicembre
diedro
difeso
diffuso
digerire
digitale
diluvio
dinamico
dinnanzi
dipinto
diploma
dipolo
diradare
dire
dirotto
dirupo
disagio
discreto
disfare
disgelo
disposto
distanza
disumano
dito
divano
divelto
dividere
divorato
doblone
docente
doganale
dogma
dolce
domato
domenica
dominare
dondolo
dono
dormire
dote
dottore
dovuto
dozzina
drago
druido
dubbio
dubitare
ducale
duna
duomo
duplice
duraturo
ebano
eccesso
ecco
eclissi
economia
edera
edicola
edile
editoria
educare
egemonia
egli
egoismo
egregio
elaborato
elargire
elegante
elencato
eletto
elevare
elfico
elica
elmo
elsa
eluso
emanato
emblema
emesso
emiro
emotivo
emozione
empirico
emulo
endemico
enduro
energia
enfasi
enoteca
entrare
enzima
epatite
epilogo
episodio
epocale
eppure
equatore
erario
erba
erboso
erede
eremita
erigere
ermetico
eroe
erosivo
errante
esagono
esame
esanime
esaudire
esca
esempio
esercito
esibito
esigente
esistere
esito
esofago
esortato
esoso
espanso
espresso
essenza
esso
esteso
estimare
estonia
estroso
esultare
etilico
etnico
etrusco
etto
euclideo
europa
evaso
evidenza
evitato
evoluto
evviva
fabbrica
faccenda
fachiro
falco
famiglia
fanale
fanfara
fango
fantasma
fare
farfalla
farinoso
farmaco
fascia
fastoso
fasullo
faticare
fato
favoloso
febbre
fecola
fede
fegato
felpa
feltro
femmina
fendere
fenomeno
fermento
ferro
fertile
fessura
festivo
fetta
feudo
fiaba
fiducia
fifa
figurato
filo
finanza
finestra
finire
fiore
fiscale
fisico
fiume
flacone
flamenco
flebo
flemma
florido
fluente
fluoro
fobico
focaccia
focoso
foderato
foglio
folata
folclore
folgore
fondente
fonetico
fonia
fontana
forbito
forchetta
foresta
formica
fornaio
foro
fortezza
forzare
fosfato
fosso
fracasso
frana
frassino
fratello
freccetta
frenata
fresco
frigo
frollino
fronde
frugale
frutta
fucilata
fucsia
fuggente
fulmine
fulvo
fumante
fumetto
fumoso
fune
funzione
fuoco
furbo
furgone
furore
fuso
futile
gabbiano
gaffe
galateo
gallina
galoppo
gambero
gamma
garanzia
garbo
garofano
garzone
gasdotto
gasolio
gastrico
gatto
gaudio
gazebo
gazzella
geco
gelatina
gelso
gemello
gemmato
gene
genitore
gennaio
genotipo
gergo
ghepardo
ghiaccio
ghisa
giallo
gilda
ginepro
giocare
gioiello
giorno
giove
girato
girone
gittata
giudizio
giurato
giusto
globulo
glutine
gnomo
gobba
golf
gomito
gommone
gonfio
gonna
governo
gracile
grado
grafico
grammo
grande
grattare
gravoso
grazia
greca
gregge
grifone
grigio
grinza
grotta
gruppo
guadagno
guaio
guanto
guardare
gufo
guidare
ibernato
icona
identico
idillio
idolo
idra
idrico
idrogeno
igiene
ignaro
ignorato
ilare
illeso
illogico
illudere
imballo
imbevuto
imbocco
imbuto
immane
immerso
immolato
impacco
impeto
impiego
importo
impronta
inalare
inarcare
inattivo
incanto
incendio
inchino
incisivo
incluso
incontro
incrocio
incubo
indagine
india
indole
inedito
infatti
infilare
inflitto
ingaggio
ingegno
inglese
ingordo
ingrosso
innesco
inodore
inoltrare
inondato
insano
insetto
insieme
insonnia
insulina
intasato
intero
intonaco
intuito
inumidire
invalido
invece
invito
iperbole
ipnotico
ipotesi
ippica
iride
irlanda
ironico
irrigato
irrorare
isolato
isotopo
isterico
istituto
istrice
italia
iterare
labbro
labirinto
lacca
lacerato
lacrima
lacuna
laddove
lago
lampo
lancetta
lanterna
lardoso
larga
laringe
lastra
latenza
latino
lattuga
lavagna
lavoro
legale
leggero
lembo
lentezza
lenza
leone
lepre
lesivo
lessato
lesto
letterale
leva
levigato
libero
lido
lievito
lilla
limatura
limitare
limpido
lineare
lingua
liquido
lira
lirica
lisca
lite
litigio
livrea
locanda
lode
logica
lombare
londra
longevo
loquace
lorenzo
loto
lotteria
luce
lucidato
lumaca
luminoso
lungo
lupo
luppolo
lusinga
lusso
lutto
macabro
macchina
macero
macinato
madama
magico
maglia
magnete
magro
maiolica
malafede
malgrado
malinteso
malsano
malto
malumore
mana
mancia
mandorla
mangiare
manifesto
mannaro
manovra
mansarda
mantide
manubrio
mappa
maratona
marcire
maretta
marmo
marsupio
maschera
massaia
mastino
materasso
matricola
mattone
maturo
mazurca
meandro
meccanico
mecenate
medesimo
meditare
mega
melassa
melis
melodia
meninge
meno
mensola
mercurio
merenda
merlo
meschino
mese
messere
mestolo
metallo
metodo
mettere
miagolare
mica
micelio
michele
microbo
midollo
miele
migliore
milano
milite
mimosa
minerale
mini
minore
mirino
mirtillo
miscela
missiva
misto
misurare
mitezza
mitigare
mitra
mittente
mnemonico
modello
modifica
modulo
mogano
mogio
mole
molosso
monastero
monco
mondina
monetario
monile
monotono
monsone
montato
monviso
mora
mordere
morsicato
mostro
motivato
motosega
motto
movenza
movimento
mozzo
mucca
mucosa
muffa
mughetto
mugnaio
mulatto
mulinello
multiplo
mummia
munto
muovere
murale
musa
muscolo
musica
mutevole
muto
nababbo
nafta
nanometro
narciso
narice
narrato
nascere
nastrare
naturale
nautica
naviglio
nebulosa
necrosi
negativo
negozio
nemmeno
neofita
neretto
nervo
nessuno
nettuno
neutrale
neve
nevrotico
nicchia
ninfa
nitido
nobile
nocivo
nodo
nome
nomina
nordico
normale
norvegese
nostrano
notare
notizia
notturno
novella
nucleo
nulla
numero
nuovo
nutrire
nuvola
nuziale
oasi
obbedire
obbligo
obelisco
oblio
obolo
obsoleto
occasione
occhio
occidente
occorrere
occultare
ocra
oculato
odierno
odorare
offerta
offrire
offuscato
oggetto
oggi
ognuno
olandese
olfatto
oliato
oliva
ologramma
oltre
omaggio
ombelico
ombra
omega
omissione
ondoso
onere
onice
onnivoro
onorevole
onta
operato
opinione
opposto
oracolo
orafo
ordine
orecchino
orefice
orfano
organico
origine
orizzonte
orma
ormeggio
ornativo
orologio
orrendo
orribile
ortensia
ortica
orzata
orzo
osare
oscurare
osmosi
ospedale
ospite
ossa
ossidare
ostacolo
oste
otite
otre
ottagono
ottimo
ottobre
ovale
ovest
ovino
oviparo
ovocito
ovunque
ovviare
ozio
pacchetto
pace
pacifico
padella
padrone
paese
paga
pagina
palazzina
palesare
pallido
palo
palude
pandoro
pannello
paolo
paonazzo
paprica
parabola
parcella
parere
pargolo
pari
parlato
parola
partire
parvenza
parziale
passivo
pasticca
patacca
patologia
pattume
pavone
peccato
pedalare
pedonale
peggio
peloso
penare
pendice
penisola
pennuto
penombra
pensare
pentola
pepe
pepita
perbene
percorso
perdonato
perforare
pergamena
periodo
permesso
perno
perplesso
persuaso
pertugio
pervaso
pesatore
pesista
peso
pestifero
petalo
pettine
petulante
pezzo
piacere
pianta
piattino
piccino
picozza
piega
pietra
piffero
pigiama
pigolio
pigro
pila
pilifero
pillola
pilota
pimpante
pineta
pinna
pinolo
pioggia
piombo
piramide
piretico
pirite
pirolisi
pitone
pizzico
placebo
planare
plasma
platano
plenario
pochezza
poderoso
podismo
poesia
poggiare
polenta
poligono
pollice
polmonite
polpetta
polso
poltrona
polvere
pomice
pomodoro
ponte
popoloso
porfido
poroso
porpora
porre
portata
posa
positivo
possesso
postulato
potassio
potere
pranzo
prassi
pratica
precluso
predica
prefisso
pregiato
prelievo
premere
prenotare
preparato
presenza
pretesto
prevalso
prima
principe
privato
problema
procura
produrre
profumo
progetto
prolunga
promessa
pronome
proposta
proroga
proteso
prova
prudente
prugna
prurito
psiche
pubblico
pudica
pugilato
pugno
pulce
pulito
pulsante
puntare
pupazzo
pupilla
puro
quadro
qualcosa
quasi
querela
quota
raccolto
raddoppio
radicale
radunato
raffica
ragazzo
ragione
ragno
ramarro
ramingo
ramo
randagio
rantolare
rapato
rapina
rappreso
rasatura
raschiato
rasente
rassegna
rastrello
rata
ravveduto
reale
recepire
recinto
recluta
recondito
recupero
reddito
redimere
regalato
registro
regola
regresso
relazione
remare
remoto
renna
replica
reprimere
reputare
resa
residente
responso
restauro
rete
retina
retorica
rettifica
revocato
riassunto
ribadire
ribelle
ribrezzo
ricarica
ricco
ricevere
riciclato
ricordo
ricreduto
ridicolo
ridurre
rifasare
riflesso
riforma
rifugio
rigare
rigettato
righello
rilassato
rilevato
rimanere
rimbalzo
rimedio
rimorchio
rinascita
rincaro
rinforzo
rinnovo
rinomato
rinsavito
rintocco
rinuncia
rinvenire
riparato
ripetuto
ripieno
riportare
ripresa
ripulire
risata
rischio
riserva
risibile
riso
rispetto
ristoro
risultato
risvolto
ritardo
ritegno
ritmico
ritrovo
riunione
riva
riverso
rivincita
rivolto
rizoma
roba
robotico
robusto
roccia
roco
rodaggio
rodere
roditore
rogito
rollio
romantico
rompere
ronzio
rosolare
rospo
rotante
rotondo
rotula
rovescio
rubizzo
rubrica
ruga
rullino
rumine
rumoroso
ruolo
rupe
russare
rustico
sabato
sabbiare
sabotato
sagoma
salasso
saldatura
salgemma
salivare
salmone
salone
saltare
saluto
salvo
sapere
sapido
saporito
saraceno
sarcasmo
sarto
sassoso
satellite
satira
satollo
saturno
savana
savio
saziato
sbadiglio
sbalzo
sbancato
sbarra
sbattere
sbavare
sbendare
sbirciare
sbloccato
sbocciato
sbrinare
sbruffone
sbuffare
scabroso
scadenza
scala
scambiare
scandalo
scapola
scarso
scatenare
scavato
scelto
scenico
scettro
scheda
schiena
sciarpa
scienza
scindere
scippo
sciroppo
scivolo
sclerare
scodella
scolpito
scomparto
sconforto
scoprire
scorta
scossone
scozzese
scriba
scrollare
scrutinio
scuderia
scultore
scuola
scuro
scusare
sdebitare
sdoganare
seccatura
secondo
sedano
seggiola
segnalato
segregato
seguito
selciato
selettivo
sella
selvaggio
semaforo
sembrare
seme
seminato
sempre
senso
sentire
sepolto
sequenza
serata
serbato
sereno
serio
serpente
serraglio
servire
sestina
setola
settimana
sfacelo
sfaldare
sfamato
sfarzoso
sfaticato
sfera
sfida
sfilato
sfinge
sfocato
sfoderare
sfogo
sfoltire
sforzato
sfratto
sfruttato
sfuggito
sfumare
sfuso
sgabello
sgarbato
sgonfiare
sgorbio
sgrassato
sguardo
sibilo
siccome
sierra
sigla
signore
silenzio
sillaba
simbolo
simpatico
simulato
sinfonia
singolo
sinistro
sino
sintesi
sinusoide
sipario
sisma
sistole
situato
slitta
slogatura
sloveno
smarrito
smemorato
smentito
smeraldo
smilzo
smontare
smottato
smussato
snellire
snervato
snodo
sobbalzo
sobrio
soccorso
sociale
sodale
soffitto
sogno
soldato
solenne
solido
sollazzo
solo
solubile
solvente
somatico
somma
sonda
sonetto
sonnifero
sopire
soppeso
sopra
sorgere
sorpasso
sorriso
sorso
sorteggio
sorvolato
sospiro
sosta
sottile
spada
spalla
spargere
spatola
spavento
spazzola
specie
spedire
spegnere
spelatura
speranza
spessore
spettrale
spezzato
spia
spigoloso
spillato
spinoso
spirale
splendido
sportivo
sposo
spranga
sprecare
spronato
spruzzo
spuntino
squillo
sradicare
srotolato
stabile
stacco
staffa
stagnare
stampato
stantio
starnuto
stasera
statuto
stelo
steppa
sterzo
stiletto
stima
stirpe
stivale
stizzoso
stonato
storico
strappo
stregato
stridulo
strozzare
strutto
stuccare
stufo
stupendo
subentro
succoso
sudore
suggerito
sugo
sultano
suonare
superbo
supporto
surgelato
surrogato
sussurro
sutura
svagare
svedese
sveglio
svelare
svenuto
svezia
sviluppo
svista
svizzera
svolta
svuotare
tabacco
tabulato
tacciare
taciturno
tale
talismano
tampone
tannino
tara
tardivo
targato
tariffa
tarpare
tartaruga
tasto
tattico
taverna
tavolata
tazza
teca
tecnico
telefono
temerario
tempo
temuto
tendone
tenero
tensione
tentacolo
teorema
terme
terrazzo
terzetto
tesi
tesserato
testato
tetro
tettoia
tifare
tigella
timbro
tinto
tipico
tipografo
tiraggio
tiro
titanio
titolo
titubante
tizio
tizzone
toccare
tollerare
tolto
tombola
tomo
tonfo
tonsilla
topazio
topologia
toppa
torba
tornare
torrone
tortora
toscano
tossire
tostatura
totano
trabocco
trachea
trafila
tragedia
tralcio
tramonto
transito
trapano
trarre
trasloco
trattato
trave
treccia
tremolio
trespolo
tributo
tricheco
trifoglio
trillo
trincea
trio
tristezza
triturato
trivella
tromba
trono
troppo
trottola
trovare
truccato
tubatura
tuffato
tulipano
tumulto
tunisia
turbare
turchino
tuta
tutela
ubicato
uccello
uccisore
udire
uditivo
uffa
ufficio
uguale
ulisse
ultimato
umano
umile
umorismo
uncinetto
ungere
ungherese
unicorno
unificato
unisono
unitario
unte
uovo
upupa
uragano
urgenza
urlo
usanza
usato
uscito
usignolo
usuraio
utensile
utilizzo
utopia
vacante
vaccinato
vagabondo
vagliato
valanga
valgo
valico
valletta
valoroso
valutare
valvola
vampata
vangare
vanitoso
vano
vantaggio
vanvera
vapore
varano
varcato
variante
vasca
vedetta
vedova
veduto
vegetale
veicolo
velcro
velina
velluto
veloce
venato
vendemmia
vento
verace
verbale
vergogna
verifica
vero
verruca
verticale
vescica
vessillo
vestale
veterano
vetrina
vetusto
viandante
vibrante
vicenda
vichingo
vicinanza
vidimare
vigilia
vigneto
vigore
vile
villano
vimini
vincitore
viola
vipera
virgola
virologo
virulento
viscoso
visione
vispo
vissuto
visura
vita
vitello
vittima
vivanda
vivido
viziare
voce
voga
volatile
volere
volpe
voragine
vulcano
zampogna
zanna
zappato
zattera
zavorra
zefiro
zelante
zelo
zenzero
zerbino
zibetto
zinco
zircone
zitto
zolla
zotico
zucchero
zufolo
zulu
zuppa`.split("\n"),iT=`あいこくしん
あいさつ
あいだ
あおぞら
あかちゃん
あきる
あけがた
あける
あこがれる
あさい
あさひ
あしあと
あじわう
あずかる
あずき
あそぶ
あたえる
あたためる
あたりまえ
あたる
あつい
あつかう
あっしゅく
あつまり
あつめる
あてな
あてはまる
あひる
あぶら
あぶる
あふれる
あまい
あまど
あまやかす
あまり
あみもの
あめりか
あやまる
あゆむ
あらいぐま
あらし
あらすじ
あらためる
あらゆる
あらわす
ありがとう
あわせる
あわてる
あんい
あんがい
あんこ
あんぜん
あんてい
あんない
あんまり
いいだす
いおん
いがい
いがく
いきおい
いきなり
いきもの
いきる
いくじ
いくぶん
いけばな
いけん
いこう
いこく
いこつ
いさましい
いさん
いしき
いじゅう
いじょう
いじわる
いずみ
いずれ
いせい
いせえび
いせかい
いせき
いぜん
いそうろう
いそがしい
いだい
いだく
いたずら
いたみ
いたりあ
いちおう
いちじ
いちど
いちば
いちぶ
いちりゅう
いつか
いっしゅん
いっせい
いっそう
いったん
いっち
いってい
いっぽう
いてざ
いてん
いどう
いとこ
いない
いなか
いねむり
いのち
いのる
いはつ
いばる
いはん
いびき
いひん
いふく
いへん
いほう
いみん
いもうと
いもたれ
いもり
いやがる
いやす
いよかん
いよく
いらい
いらすと
いりぐち
いりょう
いれい
いれもの
いれる
いろえんぴつ
いわい
いわう
いわかん
いわば
いわゆる
いんげんまめ
いんさつ
いんしょう
いんよう
うえき
うえる
うおざ
うがい
うかぶ
うかべる
うきわ
うくらいな
うくれれ
うけたまわる
うけつけ
うけとる
うけもつ
うける
うごかす
うごく
うこん
うさぎ
うしなう
うしろがみ
うすい
うすぎ
うすぐらい
うすめる
うせつ
うちあわせ
うちがわ
うちき
うちゅう
うっかり
うつくしい
うったえる
うつる
うどん
うなぎ
うなじ
うなずく
うなる
うねる
うのう
うぶげ
うぶごえ
うまれる
うめる
うもう
うやまう
うよく
うらがえす
うらぐち
うらない
うりあげ
うりきれ
うるさい
うれしい
うれゆき
うれる
うろこ
うわき
うわさ
うんこう
うんちん
うんてん
うんどう
えいえん
えいが
えいきょう
えいご
えいせい
えいぶん
えいよう
えいわ
えおり
えがお
えがく
えきたい
えくせる
えしゃく
えすて
えつらん
えのぐ
えほうまき
えほん
えまき
えもじ
えもの
えらい
えらぶ
えりあ
えんえん
えんかい
えんぎ
えんげき
えんしゅう
えんぜつ
えんそく
えんちょう
えんとつ
おいかける
おいこす
おいしい
おいつく
おうえん
おうさま
おうじ
おうせつ
おうたい
おうふく
おうべい
おうよう
おえる
おおい
おおう
おおどおり
おおや
おおよそ
おかえり
おかず
おがむ
おかわり
おぎなう
おきる
おくさま
おくじょう
おくりがな
おくる
おくれる
おこす
おこなう
おこる
おさえる
おさない
おさめる
おしいれ
おしえる
おじぎ
おじさん
おしゃれ
おそらく
おそわる
おたがい
おたく
おだやか
おちつく
おっと
おつり
おでかけ
おとしもの
おとなしい
おどり
おどろかす
おばさん
おまいり
おめでとう
おもいで
おもう
おもたい
おもちゃ
おやつ
おやゆび
およぼす
おらんだ
おろす
おんがく
おんけい
おんしゃ
おんせん
おんだん
おんちゅう
おんどけい
かあつ
かいが
がいき
がいけん
がいこう
かいさつ
かいしゃ
かいすいよく
かいぜん
かいぞうど
かいつう
かいてん
かいとう
かいふく
がいへき
かいほう
かいよう
がいらい
かいわ
かえる
かおり
かかえる
かがく
かがし
かがみ
かくご
かくとく
かざる
がぞう
かたい
かたち
がちょう
がっきゅう
がっこう
がっさん
がっしょう
かなざわし
かのう
がはく
かぶか
かほう
かほご
かまう
かまぼこ
かめれおん
かゆい
かようび
からい
かるい
かろう
かわく
かわら
がんか
かんけい
かんこう
かんしゃ
かんそう
かんたん
かんち
がんばる
きあい
きあつ
きいろ
ぎいん
きうい
きうん
きえる
きおう
きおく
きおち
きおん
きかい
きかく
きかんしゃ
ききて
きくばり
きくらげ
きけんせい
きこう
きこえる
きこく
きさい
きさく
きさま
きさらぎ
ぎじかがく
ぎしき
ぎじたいけん
ぎじにってい
ぎじゅつしゃ
きすう
きせい
きせき
きせつ
きそう
きぞく
きぞん
きたえる
きちょう
きつえん
ぎっちり
きつつき
きつね
きてい
きどう
きどく
きない
きなが
きなこ
きぬごし
きねん
きのう
きのした
きはく
きびしい
きひん
きふく
きぶん
きぼう
きほん
きまる
きみつ
きむずかしい
きめる
きもだめし
きもち
きもの
きゃく
きやく
ぎゅうにく
きよう
きょうりゅう
きらい
きらく
きりん
きれい
きれつ
きろく
ぎろん
きわめる
ぎんいろ
きんかくじ
きんじょ
きんようび
ぐあい
くいず
くうかん
くうき
くうぐん
くうこう
ぐうせい
くうそう
ぐうたら
くうふく
くうぼ
くかん
くきょう
くげん
ぐこう
くさい
くさき
くさばな
くさる
くしゃみ
くしょう
くすのき
くすりゆび
くせげ
くせん
ぐたいてき
くださる
くたびれる
くちこみ
くちさき
くつした
ぐっすり
くつろぐ
くとうてん
くどく
くなん
くねくね
くのう
くふう
くみあわせ
くみたてる
くめる
くやくしょ
くらす
くらべる
くるま
くれる
くろう
くわしい
ぐんかん
ぐんしょく
ぐんたい
ぐんて
けあな
けいかく
けいけん
けいこ
けいさつ
げいじゅつ
けいたい
げいのうじん
けいれき
けいろ
けおとす
けおりもの
げきか
げきげん
げきだん
げきちん
げきとつ
げきは
げきやく
げこう
げこくじょう
げざい
けさき
げざん
けしき
けしごむ
けしょう
げすと
けたば
けちゃっぷ
けちらす
けつあつ
けつい
けつえき
けっこん
けつじょ
けっせき
けってい
けつまつ
げつようび
げつれい
けつろん
げどく
けとばす
けとる
けなげ
けなす
けなみ
けぬき
げねつ
けねん
けはい
げひん
けぶかい
げぼく
けまり
けみかる
けむし
けむり
けもの
けらい
けろけろ
けわしい
けんい
けんえつ
けんお
けんか
げんき
けんげん
けんこう
けんさく
けんしゅう
けんすう
げんそう
けんちく
けんてい
けんとう
けんない
けんにん
げんぶつ
けんま
けんみん
けんめい
けんらん
けんり
こあくま
こいぬ
こいびと
ごうい
こうえん
こうおん
こうかん
ごうきゅう
ごうけい
こうこう
こうさい
こうじ
こうすい
ごうせい
こうそく
こうたい
こうちゃ
こうつう
こうてい
こうどう
こうない
こうはい
ごうほう
ごうまん
こうもく
こうりつ
こえる
こおり
ごかい
ごがつ
ごかん
こくご
こくさい
こくとう
こくない
こくはく
こぐま
こけい
こける
ここのか
こころ
こさめ
こしつ
こすう
こせい
こせき
こぜん
こそだて
こたい
こたえる
こたつ
こちょう
こっか
こつこつ
こつばん
こつぶ
こてい
こてん
ことがら
ことし
ことば
ことり
こなごな
こねこね
このまま
このみ
このよ
ごはん
こひつじ
こふう
こふん
こぼれる
ごまあぶら
こまかい
ごますり
こまつな
こまる
こむぎこ
こもじ
こもち
こもの
こもん
こやく
こやま
こゆう
こゆび
こよい
こよう
こりる
これくしょん
ころっけ
こわもて
こわれる
こんいん
こんかい
こんき
こんしゅう
こんすい
こんだて
こんとん
こんなん
こんびに
こんぽん
こんまけ
こんや
こんれい
こんわく
ざいえき
さいかい
さいきん
ざいげん
ざいこ
さいしょ
さいせい
ざいたく
ざいちゅう
さいてき
ざいりょう
さうな
さかいし
さがす
さかな
さかみち
さがる
さぎょう
さくし
さくひん
さくら
さこく
さこつ
さずかる
ざせき
さたん
さつえい
ざつおん
ざっか
ざつがく
さっきょく
ざっし
さつじん
ざっそう
さつたば
さつまいも
さてい
さといも
さとう
さとおや
さとし
さとる
さのう
さばく
さびしい
さべつ
さほう
さほど
さます
さみしい
さみだれ
さむけ
さめる
さやえんどう
さゆう
さよう
さよく
さらだ
ざるそば
さわやか
さわる
さんいん
さんか
さんきゃく
さんこう
さんさい
ざんしょ
さんすう
さんせい
さんそ
さんち
さんま
さんみ
さんらん
しあい
しあげ
しあさって
しあわせ
しいく
しいん
しうち
しえい
しおけ
しかい
しかく
じかん
しごと
しすう
じだい
したうけ
したぎ
したて
したみ
しちょう
しちりん
しっかり
しつじ
しつもん
してい
してき
してつ
じてん
じどう
しなぎれ
しなもの
しなん
しねま
しねん
しのぐ
しのぶ
しはい
しばかり
しはつ
しはらい
しはん
しひょう
しふく
じぶん
しへい
しほう
しほん
しまう
しまる
しみん
しむける
じむしょ
しめい
しめる
しもん
しゃいん
しゃうん
しゃおん
じゃがいも
しやくしょ
しゃくほう
しゃけん
しゃこ
しゃざい
しゃしん
しゃせん
しゃそう
しゃたい
しゃちょう
しゃっきん
じゃま
しゃりん
しゃれい
じゆう
じゅうしょ
しゅくはく
じゅしん
しゅっせき
しゅみ
しゅらば
じゅんばん
しょうかい
しょくたく
しょっけん
しょどう
しょもつ
しらせる
しらべる
しんか
しんこう
じんじゃ
しんせいじ
しんちく
しんりん
すあげ
すあし
すあな
ずあん
すいえい
すいか
すいとう
ずいぶん
すいようび
すうがく
すうじつ
すうせん
すおどり
すきま
すくう
すくない
すける
すごい
すこし
ずさん
すずしい
すすむ
すすめる
すっかり
ずっしり
ずっと
すてき
すてる
すねる
すのこ
すはだ
すばらしい
ずひょう
ずぶぬれ
すぶり
すふれ
すべて
すべる
ずほう
すぼん
すまい
すめし
すもう
すやき
すらすら
するめ
すれちがう
すろっと
すわる
すんぜん
すんぽう
せあぶら
せいかつ
せいげん
せいじ
せいよう
せおう
せかいかん
せきにん
せきむ
せきゆ
せきらんうん
せけん
せこう
せすじ
せたい
せたけ
せっかく
せっきゃく
ぜっく
せっけん
せっこつ
せっさたくま
せつぞく
せつだん
せつでん
せっぱん
せつび
せつぶん
せつめい
せつりつ
せなか
せのび
せはば
せびろ
せぼね
せまい
せまる
せめる
せもたれ
せりふ
ぜんあく
せんい
せんえい
せんか
せんきょ
せんく
せんげん
ぜんご
せんさい
せんしゅ
せんすい
せんせい
せんぞ
せんたく
せんちょう
せんてい
せんとう
せんぬき
せんねん
せんぱい
ぜんぶ
ぜんぽう
せんむ
せんめんじょ
せんもん
せんやく
せんゆう
せんよう
ぜんら
ぜんりゃく
せんれい
せんろ
そあく
そいとげる
そいね
そうがんきょう
そうき
そうご
そうしん
そうだん
そうなん
そうび
そうめん
そうり
そえもの
そえん
そがい
そげき
そこう
そこそこ
そざい
そしな
そせい
そせん
そそぐ
そだてる
そつう
そつえん
そっかん
そつぎょう
そっけつ
そっこう
そっせん
そっと
そとがわ
そとづら
そなえる
そなた
そふぼ
そぼく
そぼろ
そまつ
そまる
そむく
そむりえ
そめる
そもそも
そよかぜ
そらまめ
そろう
そんかい
そんけい
そんざい
そんしつ
そんぞく
そんちょう
ぞんび
ぞんぶん
そんみん
たあい
たいいん
たいうん
たいえき
たいおう
だいがく
たいき
たいぐう
たいけん
たいこ
たいざい
だいじょうぶ
だいすき
たいせつ
たいそう
だいたい
たいちょう
たいてい
だいどころ
たいない
たいねつ
たいのう
たいはん
だいひょう
たいふう
たいへん
たいほ
たいまつばな
たいみんぐ
たいむ
たいめん
たいやき
たいよう
たいら
たいりょく
たいる
たいわん
たうえ
たえる
たおす
たおる
たおれる
たかい
たかね
たきび
たくさん
たこく
たこやき
たさい
たしざん
だじゃれ
たすける
たずさわる
たそがれ
たたかう
たたく
ただしい
たたみ
たちばな
だっかい
だっきゃく
だっこ
だっしゅつ
だったい
たてる
たとえる
たなばた
たにん
たぬき
たのしみ
たはつ
たぶん
たべる
たぼう
たまご
たまる
だむる
ためいき
ためす
ためる
たもつ
たやすい
たよる
たらす
たりきほんがん
たりょう
たりる
たると
たれる
たれんと
たろっと
たわむれる
だんあつ
たんい
たんおん
たんか
たんき
たんけん
たんご
たんさん
たんじょうび
だんせい
たんそく
たんたい
だんち
たんてい
たんとう
だんな
たんにん
だんねつ
たんのう
たんぴん
だんぼう
たんまつ
たんめい
だんれつ
だんろ
だんわ
ちあい
ちあん
ちいき
ちいさい
ちえん
ちかい
ちから
ちきゅう
ちきん
ちけいず
ちけん
ちこく
ちさい
ちしき
ちしりょう
ちせい
ちそう
ちたい
ちたん
ちちおや
ちつじょ
ちてき
ちてん
ちぬき
ちぬり
ちのう
ちひょう
ちへいせん
ちほう
ちまた
ちみつ
ちみどろ
ちめいど
ちゃんこなべ
ちゅうい
ちゆりょく
ちょうし
ちょさくけん
ちらし
ちらみ
ちりがみ
ちりょう
ちるど
ちわわ
ちんたい
ちんもく
ついか
ついたち
つうか
つうじょう
つうはん
つうわ
つかう
つかれる
つくね
つくる
つけね
つける
つごう
つたえる
つづく
つつじ
つつむ
つとめる
つながる
つなみ
つねづね
つのる
つぶす
つまらない
つまる
つみき
つめたい
つもり
つもる
つよい
つるぼ
つるみく
つわもの
つわり
てあし
てあて
てあみ
ていおん
ていか
ていき
ていけい
ていこく
ていさつ
ていし
ていせい
ていたい
ていど
ていねい
ていひょう
ていへん
ていぼう
てうち
ておくれ
てきとう
てくび
でこぼこ
てさぎょう
てさげ
てすり
てそう
てちがい
てちょう
てつがく
てつづき
でっぱ
てつぼう
てつや
でぬかえ
てぬき
てぬぐい
てのひら
てはい
てぶくろ
てふだ
てほどき
てほん
てまえ
てまきずし
てみじか
てみやげ
てらす
てれび
てわけ
てわたし
でんあつ
てんいん
てんかい
てんき
てんぐ
てんけん
てんごく
てんさい
てんし
てんすう
でんち
てんてき
てんとう
てんない
てんぷら
てんぼうだい
てんめつ
てんらんかい
でんりょく
でんわ
どあい
といれ
どうかん
とうきゅう
どうぐ
とうし
とうむぎ
とおい
とおか
とおく
とおす
とおる
とかい
とかす
ときおり
ときどき
とくい
とくしゅう
とくてん
とくに
とくべつ
とけい
とける
とこや
とさか
としょかん
とそう
とたん
とちゅう
とっきゅう
とっくん
とつぜん
とつにゅう
とどける
ととのえる
とない
となえる
となり
とのさま
とばす
どぶがわ
とほう
とまる
とめる
ともだち
ともる
どようび
とらえる
とんかつ
どんぶり
ないかく
ないこう
ないしょ
ないす
ないせん
ないそう
なおす
ながい
なくす
なげる
なこうど
なさけ
なたでここ
なっとう
なつやすみ
ななおし
なにごと
なにもの
なにわ
なのか
なふだ
なまいき
なまえ
なまみ
なみだ
なめらか
なめる
なやむ
ならう
ならび
ならぶ
なれる
なわとび
なわばり
にあう
にいがた
にうけ
におい
にかい
にがて
にきび
にくしみ
にくまん
にげる
にさんかたんそ
にしき
にせもの
にちじょう
にちようび
にっか
にっき
にっけい
にっこう
にっさん
にっしょく
にっすう
にっせき
にってい
になう
にほん
にまめ
にもつ
にやり
にゅういん
にりんしゃ
にわとり
にんい
にんか
にんき
にんげん
にんしき
にんずう
にんそう
にんたい
にんち
にんてい
にんにく
にんぷ
にんまり
にんむ
にんめい
にんよう
ぬいくぎ
ぬかす
ぬぐいとる
ぬぐう
ぬくもり
ぬすむ
ぬまえび
ぬめり
ぬらす
ぬんちゃく
ねあげ
ねいき
ねいる
ねいろ
ねぐせ
ねくたい
ねくら
ねこぜ
ねこむ
ねさげ
ねすごす
ねそべる
ねだん
ねつい
ねっしん
ねつぞう
ねったいぎょ
ねぶそく
ねふだ
ねぼう
ねほりはほり
ねまき
ねまわし
ねみみ
ねむい
ねむたい
ねもと
ねらう
ねわざ
ねんいり
ねんおし
ねんかん
ねんきん
ねんぐ
ねんざ
ねんし
ねんちゃく
ねんど
ねんぴ
ねんぶつ
ねんまつ
ねんりょう
ねんれい
のいず
のおづま
のがす
のきなみ
のこぎり
のこす
のこる
のせる
のぞく
のぞむ
のたまう
のちほど
のっく
のばす
のはら
のべる
のぼる
のみもの
のやま
のらいぬ
のらねこ
のりもの
のりゆき
のれん
のんき
ばあい
はあく
ばあさん
ばいか
ばいく
はいけん
はいご
はいしん
はいすい
はいせん
はいそう
はいち
ばいばい
はいれつ
はえる
はおる
はかい
ばかり
はかる
はくしゅ
はけん
はこぶ
はさみ
はさん
はしご
ばしょ
はしる
はせる
ぱそこん
はそん
はたん
はちみつ
はつおん
はっかく
はづき
はっきり
はっくつ
はっけん
はっこう
はっさん
はっしん
はったつ
はっちゅう
はってん
はっぴょう
はっぽう
はなす
はなび
はにかむ
はぶらし
はみがき
はむかう
はめつ
はやい
はやし
はらう
はろうぃん
はわい
はんい
はんえい
はんおん
はんかく
はんきょう
ばんぐみ
はんこ
はんしゃ
はんすう
はんだん
ぱんち
ぱんつ
はんてい
はんとし
はんのう
はんぱ
はんぶん
はんぺん
はんぼうき
はんめい
はんらん
はんろん
ひいき
ひうん
ひえる
ひかく
ひかり
ひかる
ひかん
ひくい
ひけつ
ひこうき
ひこく
ひさい
ひさしぶり
ひさん
びじゅつかん
ひしょ
ひそか
ひそむ
ひたむき
ひだり
ひたる
ひつぎ
ひっこし
ひっし
ひつじゅひん
ひっす
ひつぜん
ぴったり
ぴっちり
ひつよう
ひてい
ひとごみ
ひなまつり
ひなん
ひねる
ひはん
ひびく
ひひょう
ひほう
ひまわり
ひまん
ひみつ
ひめい
ひめじし
ひやけ
ひやす
ひよう
びょうき
ひらがな
ひらく
ひりつ
ひりょう
ひるま
ひるやすみ
ひれい
ひろい
ひろう
ひろき
ひろゆき
ひんかく
ひんけつ
ひんこん
ひんしゅ
ひんそう
ぴんち
ひんぱん
びんぼう
ふあん
ふいうち
ふうけい
ふうせん
ぷうたろう
ふうとう
ふうふ
ふえる
ふおん
ふかい
ふきん
ふくざつ
ふくぶくろ
ふこう
ふさい
ふしぎ
ふじみ
ふすま
ふせい
ふせぐ
ふそく
ぶたにく
ふたん
ふちょう
ふつう
ふつか
ふっかつ
ふっき
ふっこく
ぶどう
ふとる
ふとん
ふのう
ふはい
ふひょう
ふへん
ふまん
ふみん
ふめつ
ふめん
ふよう
ふりこ
ふりる
ふるい
ふんいき
ぶんがく
ぶんぐ
ふんしつ
ぶんせき
ふんそう
ぶんぽう
へいあん
へいおん
へいがい
へいき
へいげん
へいこう
へいさ
へいしゃ
へいせつ
へいそ
へいたく
へいてん
へいねつ
へいわ
へきが
へこむ
べにいろ
べにしょうが
へらす
へんかん
べんきょう
べんごし
へんさい
へんたい
べんり
ほあん
ほいく
ぼうぎょ
ほうこく
ほうそう
ほうほう
ほうもん
ほうりつ
ほえる
ほおん
ほかん
ほきょう
ぼきん
ほくろ
ほけつ
ほけん
ほこう
ほこる
ほしい
ほしつ
ほしゅ
ほしょう
ほせい
ほそい
ほそく
ほたて
ほたる
ぽちぶくろ
ほっきょく
ほっさ
ほったん
ほとんど
ほめる
ほんい
ほんき
ほんけ
ほんしつ
ほんやく
まいにち
まかい
まかせる
まがる
まける
まこと
まさつ
まじめ
ますく
まぜる
まつり
まとめ
まなぶ
まぬけ
まねく
まほう
まもる
まゆげ
まよう
まろやか
まわす
まわり
まわる
まんが
まんきつ
まんぞく
まんなか
みいら
みうち
みえる
みがく
みかた
みかん
みけん
みこん
みじかい
みすい
みすえる
みせる
みっか
みつかる
みつける
みてい
みとめる
みなと
みなみかさい
みねらる
みのう
みのがす
みほん
みもと
みやげ
みらい
みりょく
みわく
みんか
みんぞく
むいか
むえき
むえん
むかい
むかう
むかえ
むかし
むぎちゃ
むける
むげん
むさぼる
むしあつい
むしば
むじゅん
むしろ
むすう
むすこ
むすぶ
むすめ
むせる
むせん
むちゅう
むなしい
むのう
むやみ
むよう
むらさき
むりょう
むろん
めいあん
めいうん
めいえん
めいかく
めいきょく
めいさい
めいし
めいそう
めいぶつ
めいれい
めいわく
めぐまれる
めざす
めした
めずらしい
めだつ
めまい
めやす
めんきょ
めんせき
めんどう
もうしあげる
もうどうけん
もえる
もくし
もくてき
もくようび
もちろん
もどる
もらう
もんく
もんだい
やおや
やける
やさい
やさしい
やすい
やすたろう
やすみ
やせる
やそう
やたい
やちん
やっと
やっぱり
やぶる
やめる
ややこしい
やよい
やわらかい
ゆうき
ゆうびんきょく
ゆうべ
ゆうめい
ゆけつ
ゆしゅつ
ゆせん
ゆそう
ゆたか
ゆちゃく
ゆでる
ゆにゅう
ゆびわ
ゆらい
ゆれる
ようい
ようか
ようきゅう
ようじ
ようす
ようちえん
よかぜ
よかん
よきん
よくせい
よくぼう
よけい
よごれる
よさん
よしゅう
よそう
よそく
よっか
よてい
よどがわく
よねつ
よやく
よゆう
よろこぶ
よろしい
らいう
らくがき
らくご
らくさつ
らくだ
らしんばん
らせん
らぞく
らたい
らっか
られつ
りえき
りかい
りきさく
りきせつ
りくぐん
りくつ
りけん
りこう
りせい
りそう
りそく
りてん
りねん
りゆう
りゅうがく
りよう
りょうり
りょかん
りょくちゃ
りょこう
りりく
りれき
りろん
りんご
るいけい
るいさい
るいじ
るいせき
るすばん
るりがわら
れいかん
れいぎ
れいせい
れいぞうこ
れいとう
れいぼう
れきし
れきだい
れんあい
れんけい
れんこん
れんさい
れんしゅう
れんぞく
れんらく
ろうか
ろうご
ろうじん
ろうそく
ろくが
ろこつ
ろじうら
ろしゅつ
ろせん
ろてん
ろめん
ろれつ
ろんぎ
ろんぱ
ろんぶん
ろんり
わかす
わかめ
わかやま
わかれる
わしつ
わじまし
わすれもの
わらう
われる`.split("\n"),iH=`가격
가끔
가난
가능
가득
가르침
가뭄
가방
가상
가슴
가운데
가을
가이드
가입
가장
가정
가족
가죽
각오
각자
간격
간부
간섭
간장
간접
간판
갈등
갈비
갈색
갈증
감각
감기
감소
감수성
감자
감정
갑자기
강남
강당
강도
강력히
강변
강북
강사
강수량
강아지
강원도
강의
강제
강조
같이
개구리
개나리
개방
개별
개선
개성
개인
객관적
거실
거액
거울
거짓
거품
걱정
건강
건물
건설
건조
건축
걸음
검사
검토
게시판
게임
겨울
견해
결과
결국
결론
결석
결승
결심
결정
결혼
경계
경고
경기
경력
경복궁
경비
경상도
경영
경우
경쟁
경제
경주
경찰
경치
경향
경험
계곡
계단
계란
계산
계속
계약
계절
계층
계획
고객
고구려
고궁
고급
고등학생
고무신
고민
고양이
고장
고전
고집
고춧가루
고통
고향
곡식
골목
골짜기
골프
공간
공개
공격
공군
공급
공기
공동
공무원
공부
공사
공식
공업
공연
공원
공장
공짜
공책
공통
공포
공항
공휴일
과목
과일
과장
과정
과학
관객
관계
관광
관념
관람
관련
관리
관습
관심
관점
관찰
광경
광고
광장
광주
괴로움
굉장히
교과서
교문
교복
교실
교양
교육
교장
교직
교통
교환
교훈
구경
구름
구멍
구별
구분
구석
구성
구속
구역
구입
구청
구체적
국가
국기
국내
국립
국물
국민
국수
국어
국왕
국적
국제
국회
군대
군사
군인
궁극적
권리
권위
권투
귀국
귀신
규정
규칙
균형
그날
그냥
그늘
그러나
그룹
그릇
그림
그제서야
그토록
극복
극히
근거
근교
근래
근로
근무
근본
근원
근육
근처
글씨
글자
금강산
금고
금년
금메달
금액
금연
금요일
금지
긍정적
기간
기관
기념
기능
기독교
기둥
기록
기름
기법
기본
기분
기쁨
기숙사
기술
기억
기업
기온
기운
기원
기적
기준
기침
기혼
기획
긴급
긴장
길이
김밥
김치
김포공항
깍두기
깜빡
깨달음
깨소금
껍질
꼭대기
꽃잎
나들이
나란히
나머지
나물
나침반
나흘
낙엽
난방
날개
날씨
날짜
남녀
남대문
남매
남산
남자
남편
남학생
낭비
낱말
내년
내용
내일
냄비
냄새
냇물
냉동
냉면
냉방
냉장고
넥타이
넷째
노동
노란색
노력
노인
녹음
녹차
녹화
논리
논문
논쟁
놀이
농구
농담
농민
농부
농업
농장
농촌
높이
눈동자
눈물
눈썹
뉴욕
느낌
늑대
능동적
능력
다방
다양성
다음
다이어트
다행
단계
단골
단독
단맛
단순
단어
단위
단점
단체
단추
단편
단풍
달걀
달러
달력
달리
닭고기
담당
담배
담요
담임
답변
답장
당근
당분간
당연히
당장
대규모
대낮
대단히
대답
대도시
대략
대량
대륙
대문
대부분
대신
대응
대장
대전
대접
대중
대책
대출
대충
대통령
대학
대한민국
대합실
대형
덩어리
데이트
도대체
도덕
도둑
도망
도서관
도심
도움
도입
도자기
도저히
도전
도중
도착
독감
독립
독서
독일
독창적
동화책
뒷모습
뒷산
딸아이
마누라
마늘
마당
마라톤
마련
마무리
마사지
마약
마요네즈
마을
마음
마이크
마중
마지막
마찬가지
마찰
마흔
막걸리
막내
막상
만남
만두
만세
만약
만일
만점
만족
만화
많이
말기
말씀
말투
맘대로
망원경
매년
매달
매력
매번
매스컴
매일
매장
맥주
먹이
먼저
먼지
멀리
메일
며느리
며칠
면담
멸치
명단
명령
명예
명의
명절
명칭
명함
모금
모니터
모델
모든
모범
모습
모양
모임
모조리
모집
모퉁이
목걸이
목록
목사
목소리
목숨
목적
목표
몰래
몸매
몸무게
몸살
몸속
몸짓
몸통
몹시
무관심
무궁화
무더위
무덤
무릎
무슨
무엇
무역
무용
무조건
무지개
무척
문구
문득
문법
문서
문제
문학
문화
물가
물건
물결
물고기
물론
물리학
물음
물질
물체
미국
미디어
미사일
미술
미역
미용실
미움
미인
미팅
미혼
민간
민족
민주
믿음
밀가루
밀리미터
밑바닥
바가지
바구니
바나나
바늘
바닥
바닷가
바람
바이러스
바탕
박물관
박사
박수
반대
반드시
반말
반발
반성
반응
반장
반죽
반지
반찬
받침
발가락
발걸음
발견
발달
발레
발목
발바닥
발생
발음
발자국
발전
발톱
발표
밤하늘
밥그릇
밥맛
밥상
밥솥
방금
방면
방문
방바닥
방법
방송
방식
방안
방울
방지
방학
방해
방향
배경
배꼽
배달
배드민턴
백두산
백색
백성
백인
백제
백화점
버릇
버섯
버튼
번개
번역
번지
번호
벌금
벌레
벌써
범위
범인
범죄
법률
법원
법적
법칙
베이징
벨트
변경
변동
변명
변신
변호사
변화
별도
별명
별일
병실
병아리
병원
보관
보너스
보라색
보람
보름
보상
보안
보자기
보장
보전
보존
보통
보편적
보험
복도
복사
복숭아
복습
볶음
본격적
본래
본부
본사
본성
본인
본질
볼펜
봉사
봉지
봉투
부근
부끄러움
부담
부동산
부문
부분
부산
부상
부엌
부인
부작용
부장
부정
부족
부지런히
부친
부탁
부품
부회장
북부
북한
분노
분량
분리
분명
분석
분야
분위기
분필
분홍색
불고기
불과
불교
불꽃
불만
불법
불빛
불안
불이익
불행
브랜드
비극
비난
비닐
비둘기
비디오
비로소
비만
비명
비밀
비바람
비빔밥
비상
비용
비율
비중
비타민
비판
빌딩
빗물
빗방울
빗줄기
빛깔
빨간색
빨래
빨리
사건
사계절
사나이
사냥
사람
사랑
사립
사모님
사물
사방
사상
사생활
사설
사슴
사실
사업
사용
사월
사장
사전
사진
사촌
사춘기
사탕
사투리
사흘
산길
산부인과
산업
산책
살림
살인
살짝
삼계탕
삼국
삼십
삼월
삼촌
상관
상금
상대
상류
상반기
상상
상식
상업
상인
상자
상점
상처
상추
상태
상표
상품
상황
새벽
색깔
색연필
생각
생명
생물
생방송
생산
생선
생신
생일
생활
서랍
서른
서명
서민
서비스
서양
서울
서적
서점
서쪽
서클
석사
석유
선거
선물
선배
선생
선수
선원
선장
선전
선택
선풍기
설거지
설날
설렁탕
설명
설문
설사
설악산
설치
설탕
섭씨
성공
성당
성명
성별
성인
성장
성적
성질
성함
세금
세미나
세상
세월
세종대왕
세탁
센터
센티미터
셋째
소규모
소극적
소금
소나기
소년
소득
소망
소문
소설
소속
소아과
소용
소원
소음
소중히
소지품
소질
소풍
소형
속담
속도
속옷
손가락
손길
손녀
손님
손등
손목
손뼉
손실
손질
손톱
손해
솔직히
솜씨
송아지
송이
송편
쇠고기
쇼핑
수건
수년
수단
수돗물
수동적
수면
수명
수박
수상
수석
수술
수시로
수업
수염
수영
수입
수준
수집
수출
수컷
수필
수학
수험생
수화기
숙녀
숙소
숙제
순간
순서
순수
순식간
순위
숟가락
술병
술집
숫자
스님
스물
스스로
스승
스웨터
스위치
스케이트
스튜디오
스트레스
스포츠
슬쩍
슬픔
습관
습기
승객
승리
승부
승용차
승진
시각
시간
시골
시금치
시나리오
시댁
시리즈
시멘트
시민
시부모
시선
시설
시스템
시아버지
시어머니
시월
시인
시일
시작
시장
시절
시점
시중
시즌
시집
시청
시합
시험
식구
식기
식당
식량
식료품
식물
식빵
식사
식생활
식초
식탁
식품
신고
신규
신념
신문
신발
신비
신사
신세
신용
신제품
신청
신체
신화
실감
실내
실력
실례
실망
실수
실습
실시
실장
실정
실질적
실천
실체
실컷
실태
실패
실험
실현
심리
심부름
심사
심장
심정
심판
쌍둥이
씨름
씨앗
아가씨
아나운서
아드님
아들
아쉬움
아스팔트
아시아
아울러
아저씨
아줌마
아직
아침
아파트
아프리카
아픔
아홉
아흔
악기
악몽
악수
안개
안경
안과
안내
안녕
안동
안방
안부
안주
알루미늄
알코올
암시
암컷
압력
앞날
앞문
애인
애정
액수
앨범
야간
야단
야옹
약간
약국
약속
약수
약점
약품
약혼녀
양념
양력
양말
양배추
양주
양파
어둠
어려움
어른
어젯밤
어쨌든
어쩌다가
어쩐지
언니
언덕
언론
언어
얼굴
얼른
얼음
얼핏
엄마
업무
업종
업체
엉덩이
엉망
엉터리
엊그제
에너지
에어컨
엔진
여건
여고생
여관
여군
여권
여대생
여덟
여동생
여든
여론
여름
여섯
여성
여왕
여인
여전히
여직원
여학생
여행
역사
역시
역할
연결
연구
연극
연기
연락
연설
연세
연속
연습
연애
연예인
연인
연장
연주
연출
연필
연합
연휴
열기
열매
열쇠
열심히
열정
열차
열흘
염려
엽서
영국
영남
영상
영양
영역
영웅
영원히
영하
영향
영혼
영화
옆구리
옆방
옆집
예감
예금
예방
예산
예상
예선
예술
예습
예식장
예약
예전
예절
예정
예컨대
옛날
오늘
오락
오랫동안
오렌지
오로지
오른발
오븐
오십
오염
오월
오전
오직
오징어
오페라
오피스텔
오히려
옥상
옥수수
온갖
온라인
온몸
온종일
온통
올가을
올림픽
올해
옷차림
와이셔츠
와인
완성
완전
왕비
왕자
왜냐하면
왠지
외갓집
외국
외로움
외삼촌
외출
외침
외할머니
왼발
왼손
왼쪽
요금
요일
요즘
요청
용기
용서
용어
우산
우선
우승
우연히
우정
우체국
우편
운동
운명
운반
운전
운행
울산
울음
움직임
웃어른
웃음
워낙
원고
원래
원서
원숭이
원인
원장
원피스
월급
월드컵
월세
월요일
웨이터
위반
위법
위성
위원
위험
위협
윗사람
유난히
유럽
유명
유물
유산
유적
유치원
유학
유행
유형
육군
육상
육십
육체
은행
음력
음료
음반
음성
음식
음악
음주
의견
의논
의문
의복
의식
의심
의외로
의욕
의원
의학
이것
이곳
이념
이놈
이달
이대로
이동
이렇게
이력서
이론적
이름
이민
이발소
이별
이불
이빨
이상
이성
이슬
이야기
이용
이웃
이월
이윽고
이익
이전
이중
이튿날
이틀
이혼
인간
인격
인공
인구
인근
인기
인도
인류
인물
인생
인쇄
인연
인원
인재
인종
인천
인체
인터넷
인하
인형
일곱
일기
일단
일대
일등
일반
일본
일부
일상
일생
일손
일요일
일월
일정
일종
일주일
일찍
일체
일치
일행
일회용
임금
임무
입대
입력
입맛
입사
입술
입시
입원
입장
입학
자가용
자격
자극
자동
자랑
자부심
자식
자신
자연
자원
자율
자전거
자정
자존심
자판
작가
작년
작성
작업
작용
작은딸
작품
잔디
잔뜩
잔치
잘못
잠깐
잠수함
잠시
잠옷
잠자리
잡지
장관
장군
장기간
장래
장례
장르
장마
장면
장모
장미
장비
장사
장소
장식
장애인
장인
장점
장차
장학금
재능
재빨리
재산
재생
재작년
재정
재채기
재판
재학
재활용
저것
저고리
저곳
저녁
저런
저렇게
저번
저울
저절로
저축
적극
적당히
적성
적용
적응
전개
전공
전기
전달
전라도
전망
전문
전반
전부
전세
전시
전용
전자
전쟁
전주
전철
전체
전통
전혀
전후
절대
절망
절반
절약
절차
점검
점수
점심
점원
점점
점차
접근
접시
접촉
젓가락
정거장
정도
정류장
정리
정말
정면
정문
정반대
정보
정부
정비
정상
정성
정오
정원
정장
정지
정치
정확히
제공
제과점
제대로
제목
제발
제법
제삿날
제안
제일
제작
제주도
제출
제품
제한
조각
조건
조금
조깅
조명
조미료
조상
조선
조용히
조절
조정
조직
존댓말
존재
졸업
졸음
종교
종로
종류
종소리
종업원
종종
종합
좌석
죄인
주관적
주름
주말
주머니
주먹
주문
주민
주방
주변
주식
주인
주일
주장
주전자
주택
준비
줄거리
줄기
줄무늬
중간
중계방송
중국
중년
중단
중독
중반
중부
중세
중소기업
중순
중앙
중요
중학교
즉석
즉시
즐거움
증가
증거
증권
증상
증세
지각
지갑
지경
지극히
지금
지급
지능
지름길
지리산
지방
지붕
지식
지역
지우개
지원
지적
지점
지진
지출
직선
직업
직원
직장
진급
진동
진로
진료
진리
진짜
진찰
진출
진통
진행
질문
질병
질서
짐작
집단
집안
집중
짜증
찌꺼기
차남
차라리
차량
차림
차별
차선
차츰
착각
찬물
찬성
참가
참기름
참새
참석
참여
참외
참조
찻잔
창가
창고
창구
창문
창밖
창작
창조
채널
채점
책가방
책방
책상
책임
챔피언
처벌
처음
천국
천둥
천장
천재
천천히
철도
철저히
철학
첫날
첫째
청년
청바지
청소
청춘
체계
체력
체온
체육
체중
체험
초등학생
초반
초밥
초상화
초순
초여름
초원
초저녁
초점
초청
초콜릿
촛불
총각
총리
총장
촬영
최근
최상
최선
최신
최악
최종
추석
추억
추진
추천
추측
축구
축소
축제
축하
출근
출발
출산
출신
출연
출입
출장
출판
충격
충고
충돌
충분히
충청도
취업
취직
취향
치약
친구
친척
칠십
칠월
칠판
침대
침묵
침실
칫솔
칭찬
카메라
카운터
칼국수
캐릭터
캠퍼스
캠페인
커튼
컨디션
컬러
컴퓨터
코끼리
코미디
콘서트
콜라
콤플렉스
콩나물
쾌감
쿠데타
크림
큰길
큰딸
큰소리
큰아들
큰어머니
큰일
큰절
클래식
클럽
킬로
타입
타자기
탁구
탁자
탄생
태권도
태양
태풍
택시
탤런트
터널
터미널
테니스
테스트
테이블
텔레비전
토론
토마토
토요일
통계
통과
통로
통신
통역
통일
통장
통제
통증
통합
통화
퇴근
퇴원
퇴직금
튀김
트럭
특급
특별
특성
특수
특징
특히
튼튼히
티셔츠
파란색
파일
파출소
판결
판단
판매
판사
팔십
팔월
팝송
패션
팩스
팩시밀리
팬티
퍼센트
페인트
편견
편의
편지
편히
평가
평균
평생
평소
평양
평일
평화
포스터
포인트
포장
포함
표면
표정
표준
표현
품목
품질
풍경
풍속
풍습
프랑스
프린터
플라스틱
피곤
피망
피아노
필름
필수
필요
필자
필통
핑계
하느님
하늘
하드웨어
하룻밤
하반기
하숙집
하순
하여튼
하지만
하천
하품
하필
학과
학교
학급
학기
학년
학력
학번
학부모
학비
학생
학술
학습
학용품
학원
학위
학자
학점
한계
한글
한꺼번에
한낮
한눈
한동안
한때
한라산
한마디
한문
한번
한복
한식
한여름
한쪽
할머니
할아버지
할인
함께
함부로
합격
합리적
항공
항구
항상
항의
해결
해군
해답
해당
해물
해석
해설
해수욕장
해안
핵심
핸드백
햄버거
햇볕
햇살
행동
행복
행사
행운
행위
향기
향상
향수
허락
허용
헬기
현관
현금
현대
현상
현실
현장
현재
현지
혈액
협력
형부
형사
형수
형식
형제
형태
형편
혜택
호기심
호남
호랑이
호박
호텔
호흡
혹시
홀로
홈페이지
홍보
홍수
홍차
화면
화분
화살
화요일
화장
화학
확보
확인
확장
확정
환갑
환경
환영
환율
환자
활기
활동
활발히
활용
활짝
회견
회관
회복
회색
회원
회장
회전
횟수
횡단보도
효율적
후반
후춧가루
훈련
훨씬
휴식
휴일
흉내
흐름
흑백
흑인
흔적
흔히
흥미
흥분
희곡
희망
희생
흰색
힘껏`.split("\n"),iG=`abacate
abaixo
abalar
abater
abduzir
abelha
aberto
abismo
abotoar
abranger
abreviar
abrigar
abrupto
absinto
absoluto
absurdo
abutre
acabado
acalmar
acampar
acanhar
acaso
aceitar
acelerar
acenar
acervo
acessar
acetona
achatar
acidez
acima
acionado
acirrar
aclamar
aclive
acolhida
acomodar
acoplar
acordar
acumular
acusador
adaptar
adega
adentro
adepto
adequar
aderente
adesivo
adeus
adiante
aditivo
adjetivo
adjunto
admirar
adorar
adquirir
adubo
adverso
advogado
aeronave
afastar
aferir
afetivo
afinador
afivelar
aflito
afluente
afrontar
agachar
agarrar
agasalho
agenciar
agilizar
agiota
agitado
agora
agradar
agreste
agrupar
aguardar
agulha
ajoelhar
ajudar
ajustar
alameda
alarme
alastrar
alavanca
albergue
albino
alcatra
aldeia
alecrim
alegria
alertar
alface
alfinete
algum
alheio
aliar
alicate
alienar
alinhar
aliviar
almofada
alocar
alpiste
alterar
altitude
alucinar
alugar
aluno
alusivo
alvo
amaciar
amador
amarelo
amassar
ambas
ambiente
ameixa
amenizar
amido
amistoso
amizade
amolador
amontoar
amoroso
amostra
amparar
ampliar
ampola
anagrama
analisar
anarquia
anatomia
andaime
anel
anexo
angular
animar
anjo
anomalia
anotado
ansioso
anterior
anuidade
anunciar
anzol
apagador
apalpar
apanhado
apego
apelido
apertada
apesar
apetite
apito
aplauso
aplicada
apoio
apontar
aposta
aprendiz
aprovar
aquecer
arame
aranha
arara
arcada
ardente
areia
arejar
arenito
aresta
argiloso
argola
arma
arquivo
arraial
arrebate
arriscar
arroba
arrumar
arsenal
arterial
artigo
arvoredo
asfaltar
asilado
aspirar
assador
assinar
assoalho
assunto
astral
atacado
atadura
atalho
atarefar
atear
atender
aterro
ateu
atingir
atirador
ativo
atoleiro
atracar
atrevido
atriz
atual
atum
auditor
aumentar
aura
aurora
autismo
autoria
autuar
avaliar
avante
avaria
avental
avesso
aviador
avisar
avulso
axila
azarar
azedo
azeite
azulejo
babar
babosa
bacalhau
bacharel
bacia
bagagem
baiano
bailar
baioneta
bairro
baixista
bajular
baleia
baliza
balsa
banal
bandeira
banho
banir
banquete
barato
barbado
baronesa
barraca
barulho
baseado
bastante
batata
batedor
batida
batom
batucar
baunilha
beber
beijo
beirada
beisebol
beldade
beleza
belga
beliscar
bendito
bengala
benzer
berimbau
berlinda
berro
besouro
bexiga
bezerro
bico
bicudo
bienal
bifocal
bifurcar
bigorna
bilhete
bimestre
bimotor
biologia
biombo
biosfera
bipolar
birrento
biscoito
bisneto
bispo
bissexto
bitola
bizarro
blindado
bloco
bloquear
boato
bobagem
bocado
bocejo
bochecha
boicotar
bolada
boletim
bolha
bolo
bombeiro
bonde
boneco
bonita
borbulha
borda
boreal
borracha
bovino
boxeador
branco
brasa
braveza
breu
briga
brilho
brincar
broa
brochura
bronzear
broto
bruxo
bucha
budismo
bufar
bule
buraco
busca
busto
buzina
cabana
cabelo
cabide
cabo
cabrito
cacau
cacetada
cachorro
cacique
cadastro
cadeado
cafezal
caiaque
caipira
caixote
cajado
caju
calafrio
calcular
caldeira
calibrar
calmante
calota
camada
cambista
camisa
camomila
campanha
camuflar
canavial
cancelar
caneta
canguru
canhoto
canivete
canoa
cansado
cantar
canudo
capacho
capela
capinar
capotar
capricho
captador
capuz
caracol
carbono
cardeal
careca
carimbar
carneiro
carpete
carreira
cartaz
carvalho
casaco
casca
casebre
castelo
casulo
catarata
cativar
caule
causador
cautelar
cavalo
caverna
cebola
cedilha
cegonha
celebrar
celular
cenoura
censo
centeio
cercar
cerrado
certeiro
cerveja
cetim
cevada
chacota
chaleira
chamado
chapada
charme
chatice
chave
chefe
chegada
cheiro
cheque
chicote
chifre
chinelo
chocalho
chover
chumbo
chutar
chuva
cicatriz
ciclone
cidade
cidreira
ciente
cigana
cimento
cinto
cinza
ciranda
circuito
cirurgia
citar
clareza
clero
clicar
clone
clube
coado
coagir
cobaia
cobertor
cobrar
cocada
coelho
coentro
coeso
cogumelo
coibir
coifa
coiote
colar
coleira
colher
colidir
colmeia
colono
coluna
comando
combinar
comentar
comitiva
comover
complexo
comum
concha
condor
conectar
confuso
congelar
conhecer
conjugar
consumir
contrato
convite
cooperar
copeiro
copiador
copo
coquetel
coragem
cordial
corneta
coronha
corporal
correio
cortejo
coruja
corvo
cosseno
costela
cotonete
couro
couve
covil
cozinha
cratera
cravo
creche
credor
creme
crer
crespo
criada
criminal
crioulo
crise
criticar
crosta
crua
cruzeiro
cubano
cueca
cuidado
cujo
culatra
culminar
culpar
cultura
cumprir
cunhado
cupido
curativo
curral
cursar
curto
cuspir
custear
cutelo
damasco
datar
debater
debitar
deboche
debulhar
decalque
decimal
declive
decote
decretar
dedal
dedicado
deduzir
defesa
defumar
degelo
degrau
degustar
deitado
deixar
delator
delegado
delinear
delonga
demanda
demitir
demolido
dentista
depenado
depilar
depois
depressa
depurar
deriva
derramar
desafio
desbotar
descanso
desenho
desfiado
desgaste
desigual
deslize
desmamar
desova
despesa
destaque
desviar
detalhar
detentor
detonar
detrito
deusa
dever
devido
devotado
dezena
diagrama
dialeto
didata
difuso
digitar
dilatado
diluente
diminuir
dinastia
dinheiro
diocese
direto
discreta
disfarce
disparo
disquete
dissipar
distante
ditador
diurno
diverso
divisor
divulgar
dizer
dobrador
dolorido
domador
dominado
donativo
donzela
dormente
dorsal
dosagem
dourado
doutor
drenagem
drible
drogaria
duelar
duende
dueto
duplo
duquesa
durante
duvidoso
eclodir
ecoar
ecologia
edificar
edital
educado
efeito
efetivar
ejetar
elaborar
eleger
eleitor
elenco
elevador
eliminar
elogiar
embargo
embolado
embrulho
embutido
emenda
emergir
emissor
empatia
empenho
empinado
empolgar
emprego
empurrar
emulador
encaixe
encenado
enchente
encontro
endeusar
endossar
enfaixar
enfeite
enfim
engajado
engenho
englobar
engomado
engraxar
enguia
enjoar
enlatar
enquanto
enraizar
enrolado
enrugar
ensaio
enseada
ensino
ensopado
entanto
enteado
entidade
entortar
entrada
entulho
envergar
enviado
envolver
enxame
enxerto
enxofre
enxuto
epiderme
equipar
ereto
erguido
errata
erva
ervilha
esbanjar
esbelto
escama
escola
escrita
escuta
esfinge
esfolar
esfregar
esfumado
esgrima
esmalte
espanto
espelho
espiga
esponja
espreita
espumar
esquerda
estaca
esteira
esticar
estofado
estrela
estudo
esvaziar
etanol
etiqueta
euforia
europeu
evacuar
evaporar
evasivo
eventual
evidente
evoluir
exagero
exalar
examinar
exato
exausto
excesso
excitar
exclamar
executar
exemplo
exibir
exigente
exonerar
expandir
expelir
expirar
explanar
exposto
expresso
expulsar
externo
extinto
extrato
fabricar
fabuloso
faceta
facial
fada
fadiga
faixa
falar
falta
familiar
fandango
fanfarra
fantoche
fardado
farelo
farinha
farofa
farpa
fartura
fatia
fator
favorita
faxina
fazenda
fechado
feijoada
feirante
felino
feminino
fenda
feno
fera
feriado
ferrugem
ferver
festejar
fetal
feudal
fiapo
fibrose
ficar
ficheiro
figurado
fileira
filho
filme
filtrar
firmeza
fisgada
fissura
fita
fivela
fixador
fixo
flacidez
flamingo
flanela
flechada
flora
flutuar
fluxo
focal
focinho
fofocar
fogo
foguete
foice
folgado
folheto
forjar
formiga
forno
forte
fosco
fossa
fragata
fralda
frango
frasco
fraterno
freira
frente
fretar
frieza
friso
fritura
fronha
frustrar
fruteira
fugir
fulano
fuligem
fundar
fungo
funil
furador
furioso
futebol
gabarito
gabinete
gado
gaiato
gaiola
gaivota
galega
galho
galinha
galocha
ganhar
garagem
garfo
gargalo
garimpo
garoupa
garrafa
gasoduto
gasto
gata
gatilho
gaveta
gazela
gelado
geleia
gelo
gemada
gemer
gemido
generoso
gengiva
genial
genoma
genro
geologia
gerador
germinar
gesso
gestor
ginasta
gincana
gingado
girafa
girino
glacial
glicose
global
glorioso
goela
goiaba
golfe
golpear
gordura
gorjeta
gorro
gostoso
goteira
governar
gracejo
gradual
grafite
gralha
grampo
granada
gratuito
graveto
graxa
grego
grelhar
greve
grilo
grisalho
gritaria
grosso
grotesco
grudado
grunhido
gruta
guache
guarani
guaxinim
guerrear
guiar
guincho
guisado
gula
guloso
guru
habitar
harmonia
haste
haver
hectare
herdar
heresia
hesitar
hiato
hibernar
hidratar
hiena
hino
hipismo
hipnose
hipoteca
hoje
holofote
homem
honesto
honrado
hormonal
hospedar
humorado
iate
ideia
idoso
ignorado
igreja
iguana
ileso
ilha
iludido
iluminar
ilustrar
imagem
imediato
imenso
imersivo
iminente
imitador
imortal
impacto
impedir
implante
impor
imprensa
impune
imunizar
inalador
inapto
inativo
incenso
inchar
incidir
incluir
incolor
indeciso
indireto
indutor
ineficaz
inerente
infantil
infestar
infinito
inflamar
informal
infrator
ingerir
inibido
inicial
inimigo
injetar
inocente
inodoro
inovador
inox
inquieto
inscrito
inseto
insistir
inspetor
instalar
insulto
intacto
integral
intimar
intocado
intriga
invasor
inverno
invicto
invocar
iogurte
iraniano
ironizar
irreal
irritado
isca
isento
isolado
isqueiro
italiano
janeiro
jangada
janta
jararaca
jardim
jarro
jasmim
jato
javali
jazida
jejum
joaninha
joelhada
jogador
joia
jornal
jorrar
jovem
juba
judeu
judoca
juiz
julgador
julho
jurado
jurista
juro
justa
labareda
laboral
lacre
lactante
ladrilho
lagarta
lagoa
laje
lamber
lamentar
laminar
lampejo
lanche
lapidar
lapso
laranja
lareira
largura
lasanha
lastro
lateral
latido
lavanda
lavoura
lavrador
laxante
lazer
lealdade
lebre
legado
legendar
legista
leigo
leiloar
leitura
lembrete
leme
lenhador
lentilha
leoa
lesma
leste
letivo
letreiro
levar
leveza
levitar
liberal
libido
liderar
ligar
ligeiro
limitar
limoeiro
limpador
linda
linear
linhagem
liquidez
listagem
lisura
litoral
livro
lixa
lixeira
locador
locutor
lojista
lombo
lona
longe
lontra
lorde
lotado
loteria
loucura
lousa
louvar
luar
lucidez
lucro
luneta
lustre
lutador
luva
macaco
macete
machado
macio
madeira
madrinha
magnata
magreza
maior
mais
malandro
malha
malote
maluco
mamilo
mamoeiro
mamute
manada
mancha
mandato
manequim
manhoso
manivela
manobrar
mansa
manter
manusear
mapeado
maquinar
marcador
maresia
marfim
margem
marinho
marmita
maroto
marquise
marreco
martelo
marujo
mascote
masmorra
massagem
mastigar
matagal
materno
matinal
matutar
maxilar
medalha
medida
medusa
megafone
meiga
melancia
melhor
membro
memorial
menino
menos
mensagem
mental
merecer
mergulho
mesada
mesclar
mesmo
mesquita
mestre
metade
meteoro
metragem
mexer
mexicano
micro
migalha
migrar
milagre
milenar
milhar
mimado
minerar
minhoca
ministro
minoria
miolo
mirante
mirtilo
misturar
mocidade
moderno
modular
moeda
moer
moinho
moita
moldura
moleza
molho
molinete
molusco
montanha
moqueca
morango
morcego
mordomo
morena
mosaico
mosquete
mostarda
motel
motim
moto
motriz
muda
muito
mulata
mulher
multar
mundial
munido
muralha
murcho
muscular
museu
musical
nacional
nadador
naja
namoro
narina
narrado
nascer
nativa
natureza
navalha
navegar
navio
neblina
nebuloso
negativa
negociar
negrito
nervoso
neta
neural
nevasca
nevoeiro
ninar
ninho
nitidez
nivelar
nobreza
noite
noiva
nomear
nominal
nordeste
nortear
notar
noticiar
noturno
novelo
novilho
novo
nublado
nudez
numeral
nupcial
nutrir
nuvem
obcecado
obedecer
objetivo
obrigado
obscuro
obstetra
obter
obturar
ocidente
ocioso
ocorrer
oculista
ocupado
ofegante
ofensiva
oferenda
oficina
ofuscado
ogiva
olaria
oleoso
olhar
oliveira
ombro
omelete
omisso
omitir
ondulado
oneroso
ontem
opcional
operador
oponente
oportuno
oposto
orar
orbitar
ordem
ordinal
orfanato
orgasmo
orgulho
oriental
origem
oriundo
orla
ortodoxo
orvalho
oscilar
ossada
osso
ostentar
otimismo
ousadia
outono
outubro
ouvido
ovelha
ovular
oxidar
oxigenar
pacato
paciente
pacote
pactuar
padaria
padrinho
pagar
pagode
painel
pairar
paisagem
palavra
palestra
palheta
palito
palmada
palpitar
pancada
panela
panfleto
panqueca
pantanal
papagaio
papelada
papiro
parafina
parcial
pardal
parede
partida
pasmo
passado
pastel
patamar
patente
patinar
patrono
paulada
pausar
peculiar
pedalar
pedestre
pediatra
pedra
pegada
peitoral
peixe
pele
pelicano
penca
pendurar
peneira
penhasco
pensador
pente
perceber
perfeito
pergunta
perito
permitir
perna
perplexo
persiana
pertence
peruca
pescado
pesquisa
pessoa
petiscar
piada
picado
piedade
pigmento
pilastra
pilhado
pilotar
pimenta
pincel
pinguim
pinha
pinote
pintar
pioneiro
pipoca
piquete
piranha
pires
pirueta
piscar
pistola
pitanga
pivete
planta
plaqueta
platina
plebeu
plumagem
pluvial
pneu
poda
poeira
poetisa
polegada
policiar
poluente
polvilho
pomar
pomba
ponderar
pontaria
populoso
porta
possuir
postal
pote
poupar
pouso
povoar
praia
prancha
prato
praxe
prece
predador
prefeito
premiar
prensar
preparar
presilha
pretexto
prevenir
prezar
primata
princesa
prisma
privado
processo
produto
profeta
proibido
projeto
prometer
propagar
prosa
protetor
provador
publicar
pudim
pular
pulmonar
pulseira
punhal
punir
pupilo
pureza
puxador
quadra
quantia
quarto
quase
quebrar
queda
queijo
quente
querido
quimono
quina
quiosque
rabanada
rabisco
rachar
racionar
radial
raiar
rainha
raio
raiva
rajada
ralado
ramal
ranger
ranhura
rapadura
rapel
rapidez
raposa
raquete
raridade
rasante
rascunho
rasgar
raspador
rasteira
rasurar
ratazana
ratoeira
realeza
reanimar
reaver
rebaixar
rebelde
rebolar
recado
recente
recheio
recibo
recordar
recrutar
recuar
rede
redimir
redonda
reduzida
reenvio
refinar
refletir
refogar
refresco
refugiar
regalia
regime
regra
reinado
reitor
rejeitar
relativo
remador
remendo
remorso
renovado
reparo
repelir
repleto
repolho
represa
repudiar
requerer
resenha
resfriar
resgatar
residir
resolver
respeito
ressaca
restante
resumir
retalho
reter
retirar
retomada
retratar
revelar
revisor
revolta
riacho
rica
rigidez
rigoroso
rimar
ringue
risada
risco
risonho
robalo
rochedo
rodada
rodeio
rodovia
roedor
roleta
romano
roncar
rosado
roseira
rosto
rota
roteiro
rotina
rotular
rouco
roupa
roxo
rubro
rugido
rugoso
ruivo
rumo
rupestre
russo
sabor
saciar
sacola
sacudir
sadio
safira
saga
sagrada
saibro
salada
saleiro
salgado
saliva
salpicar
salsicha
saltar
salvador
sambar
samurai
sanar
sanfona
sangue
sanidade
sapato
sarda
sargento
sarjeta
saturar
saudade
saxofone
sazonal
secar
secular
seda
sedento
sediado
sedoso
sedutor
segmento
segredo
segundo
seiva
seleto
selvagem
semanal
semente
senador
senhor
sensual
sentado
separado
sereia
seringa
serra
servo
setembro
setor
sigilo
silhueta
silicone
simetria
simpatia
simular
sinal
sincero
singular
sinopse
sintonia
sirene
siri
situado
soberano
sobra
socorro
sogro
soja
solda
soletrar
solteiro
sombrio
sonata
sondar
sonegar
sonhador
sono
soprano
soquete
sorrir
sorteio
sossego
sotaque
soterrar
sovado
sozinho
suavizar
subida
submerso
subsolo
subtrair
sucata
sucesso
suco
sudeste
sufixo
sugador
sugerir
sujeito
sulfato
sumir
suor
superior
suplicar
suposto
suprimir
surdina
surfista
surpresa
surreal
surtir
suspiro
sustento
tabela
tablete
tabuada
tacho
tagarela
talher
talo
talvez
tamanho
tamborim
tampa
tangente
tanto
tapar
tapioca
tardio
tarefa
tarja
tarraxa
tatuagem
taurino
taxativo
taxista
teatral
tecer
tecido
teclado
tedioso
teia
teimar
telefone
telhado
tempero
tenente
tensor
tentar
termal
terno
terreno
tese
tesoura
testado
teto
textura
texugo
tiara
tigela
tijolo
timbrar
timidez
tingido
tinteiro
tiragem
titular
toalha
tocha
tolerar
tolice
tomada
tomilho
tonel
tontura
topete
tora
torcido
torneio
torque
torrada
torto
tostar
touca
toupeira
toxina
trabalho
tracejar
tradutor
trafegar
trajeto
trama
trancar
trapo
traseiro
tratador
travar
treino
tremer
trepidar
trevo
triagem
tribo
triciclo
tridente
trilogia
trindade
triplo
triturar
triunfal
trocar
trombeta
trova
trunfo
truque
tubular
tucano
tudo
tulipa
tupi
turbo
turma
turquesa
tutelar
tutorial
uivar
umbigo
unha
unidade
uniforme
urologia
urso
urtiga
urubu
usado
usina
usufruir
vacina
vadiar
vagaroso
vaidoso
vala
valente
validade
valores
vantagem
vaqueiro
varanda
vareta
varrer
vascular
vasilha
vassoura
vazar
vazio
veado
vedar
vegetar
veicular
veleiro
velhice
veludo
vencedor
vendaval
venerar
ventre
verbal
verdade
vereador
vergonha
vermelho
verniz
versar
vertente
vespa
vestido
vetorial
viaduto
viagem
viajar
viatura
vibrador
videira
vidraria
viela
viga
vigente
vigiar
vigorar
vilarejo
vinco
vinheta
vinil
violeta
virada
virtude
visitar
visto
vitral
viveiro
vizinho
voador
voar
vogal
volante
voleibol
voltagem
volumoso
vontade
vulto
vuvuzela
xadrez
xarope
xeque
xeretar
xerife
xingar
zangado
zarpar
zebu
zelador
zombar
zoologia
zumbido`.split("\n"),iK=`的
一
是
在
不
了
有
和
人
这
中
大
为
上
个
国
我
以
要
他
时
来
用
们
生
到
作
地
于
出
就
分
对
成
会
可
主
发
年
动
同
工
也
能
下
过
子
说
产
种
面
而
方
后
多
定
行
学
法
所
民
得
经
十
三
之
进
着
等
部
度
家
电
力
里
如
水
化
高
自
二
理
起
小
物
现
实
加
量
都
两
体
制
机
当
使
点
从
业
本
去
把
性
好
应
开
它
合
还
因
由
其
些
然
前
外
天
政
四
日
那
社
义
事
平
形
相
全
表
间
样
与
关
各
重
新
线
内
数
正
心
反
你
明
看
原
又
么
利
比
或
但
质
气
第
向
道
命
此
变
条
只
没
结
解
问
意
建
月
公
无
系
军
很
情
者
最
立
代
想
已
通
并
提
直
题
党
程
展
五
果
料
象
员
革
位
入
常
文
总
次
品
式
活
设
及
管
特
件
长
求
老
头
基
资
边
流
路
级
少
图
山
统
接
知
较
将
组
见
计
别
她
手
角
期
根
论
运
农
指
几
九
区
强
放
决
西
被
干
做
必
战
先
回
则
任
取
据
处
队
南
给
色
光
门
即
保
治
北
造
百
规
热
领
七
海
口
东
导
器
压
志
世
金
增
争
济
阶
油
思
术
极
交
受
联
什
认
六
共
权
收
证
改
清
美
再
采
转
更
单
风
切
打
白
教
速
花
带
安
场
身
车
例
真
务
具
万
每
目
至
达
走
积
示
议
声
报
斗
完
类
八
离
华
名
确
才
科
张
信
马
节
话
米
整
空
元
况
今
集
温
传
土
许
步
群
广
石
记
需
段
研
界
拉
林
律
叫
且
究
观
越
织
装
影
算
低
持
音
众
书
布
复
容
儿
须
际
商
非
验
连
断
深
难
近
矿
千
周
委
素
技
备
半
办
青
省
列
习
响
约
支
般
史
感
劳
便
团
往
酸
历
市
克
何
除
消
构
府
称
太
准
精
值
号
率
族
维
划
选
标
写
存
候
毛
亲
快
效
斯
院
查
江
型
眼
王
按
格
养
易
置
派
层
片
始
却
专
状
育
厂
京
识
适
属
圆
包
火
住
调
满
县
局
照
参
红
细
引
听
该
铁
价
严
首
底
液
官
德
随
病
苏
失
尔
死
讲
配
女
黄
推
显
谈
罪
神
艺
呢
席
含
企
望
密
批
营
项
防
举
球
英
氧
势
告
李
台
落
木
帮
轮
破
亚
师
围
注
远
字
材
排
供
河
态
封
另
施
减
树
溶
怎
止
案
言
士
均
武
固
叶
鱼
波
视
仅
费
紧
爱
左
章
早
朝
害
续
轻
服
试
食
充
兵
源
判
护
司
足
某
练
差
致
板
田
降
黑
犯
负
击
范
继
兴
似
余
坚
曲
输
修
故
城
夫
够
送
笔
船
占
右
财
吃
富
春
职
觉
汉
画
功
巴
跟
虽
杂
飞
检
吸
助
升
阳
互
初
创
抗
考
投
坏
策
古
径
换
未
跑
留
钢
曾
端
责
站
简
述
钱
副
尽
帝
射
草
冲
承
独
令
限
阿
宣
环
双
请
超
微
让
控
州
良
轴
找
否
纪
益
依
优
顶
础
载
倒
房
突
坐
粉
敌
略
客
袁
冷
胜
绝
析
块
剂
测
丝
协
诉
念
陈
仍
罗
盐
友
洋
错
苦
夜
刑
移
频
逐
靠
混
母
短
皮
终
聚
汽
村
云
哪
既
距
卫
停
烈
央
察
烧
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
游
久
菜
味
旧
模
湖
货
损
预
阻
毫
普
稳
乙
妈
植
息
扩
银
语
挥
酒
守
拿
序
纸
医
缺
雨
吗
针
刘
啊
急
唱
误
训
愿
审
附
获
茶
鲜
粮
斤
孩
脱
硫
肥
善
龙
演
父
渐
血
欢
械
掌
歌
沙
刚
攻
谓
盾
讨
晚
粒
乱
燃
矛
乎
杀
药
宁
鲁
贵
钟
煤
读
班
伯
香
介
迫
句
丰
培
握
兰
担
弦
蛋
沉
假
穿
执
答
乐
谁
顺
烟
缩
征
脸
喜
松
脚
困
异
免
背
星
福
买
染
井
概
慢
怕
磁
倍
祖
皇
促
静
补
评
翻
肉
践
尼
衣
宽
扬
棉
希
伤
操
垂
秋
宜
氢
套
督
振
架
亮
末
宪
庆
编
牛
触
映
雷
销
诗
座
居
抓
裂
胞
呼
娘
景
威
绿
晶
厚
盟
衡
鸡
孙
延
危
胶
屋
乡
临
陆
顾
掉
呀
灯
岁
措
束
耐
剧
玉
赵
跳
哥
季
课
凯
胡
额
款
绍
卷
齐
伟
蒸
殖
永
宗
苗
川
炉
岩
弱
零
杨
奏
沿
露
杆
探
滑
镇
饭
浓
航
怀
赶
库
夺
伊
灵
税
途
灭
赛
归
召
鼓
播
盘
裁
险
康
唯
录
菌
纯
借
糖
盖
横
符
私
努
堂
域
枪
润
幅
哈
竟
熟
虫
泽
脑
壤
碳
欧
遍
侧
寨
敢
彻
虑
斜
薄
庭
纳
弹
饲
伸
折
麦
湿
暗
荷
瓦
塞
床
筑
恶
户
访
塔
奇
透
梁
刀
旋
迹
卡
氯
遇
份
毒
泥
退
洗
摆
灰
彩
卖
耗
夏
择
忙
铜
献
硬
予
繁
圈
雪
函
亦
抽
篇
阵
阴
丁
尺
追
堆
雄
迎
泛
爸
楼
避
谋
吨
野
猪
旗
累
偏
典
馆
索
秦
脂
潮
爷
豆
忽
托
惊
塑
遗
愈
朱
替
纤
粗
倾
尚
痛
楚
谢
奋
购
磨
君
池
旁
碎
骨
监
捕
弟
暴
割
贯
殊
释
词
亡
壁
顿
宝
午
尘
闻
揭
炮
残
冬
桥
妇
警
综
招
吴
付
浮
遭
徐
您
摇
谷
赞
箱
隔
订
男
吹
园
纷
唐
败
宋
玻
巨
耕
坦
荣
闭
湾
键
凡
驻
锅
救
恩
剥
凝
碱
齿
截
炼
麻
纺
禁
废
盛
版
缓
净
睛
昌
婚
涉
筒
嘴
插
岸
朗
庄
街
藏
姑
贸
腐
奴
啦
惯
乘
伙
恢
匀
纱
扎
辩
耳
彪
臣
亿
璃
抵
脉
秀
萨
俄
网
舞
店
喷
纵
寸
汗
挂
洪
贺
闪
柬
爆
烯
津
稻
墙
软
勇
像
滚
厘
蒙
芳
肯
坡
柱
荡
腿
仪
旅
尾
轧
冰
贡
登
黎
削
钻
勒
逃
障
氨
郭
峰
币
港
伏
轨
亩
毕
擦
莫
刺
浪
秘
援
株
健
售
股
岛
甘
泡
睡
童
铸
汤
阀
休
汇
舍
牧
绕
炸
哲
磷
绩
朋
淡
尖
启
陷
柴
呈
徒
颜
泪
稍
忘
泵
蓝
拖
洞
授
镜
辛
壮
锋
贫
虚
弯
摩
泰
幼
廷
尊
窗
纲
弄
隶
疑
氏
宫
姐
震
瑞
怪
尤
琴
循
描
膜
违
夹
腰
缘
珠
穷
森
枝
竹
沟
催
绳
忆
邦
剩
幸
浆
栏
拥
牙
贮
礼
滤
钠
纹
罢
拍
咱
喊
袖
埃
勤
罚
焦
潜
伍
墨
欲
缝
姓
刊
饱
仿
奖
铝
鬼
丽
跨
默
挖
链
扫
喝
袋
炭
污
幕
诸
弧
励
梅
奶
洁
灾
舟
鉴
苯
讼
抱
毁
懂
寒
智
埔
寄
届
跃
渡
挑
丹
艰
贝
碰
拔
爹
戴
码
梦
芽
熔
赤
渔
哭
敬
颗
奔
铅
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
仓
魏
锐
晓
氮
兼
隐
碍
赫
拨
忠
肃
缸
牵
抢
博
巧
壳
兄
杜
讯
诚
碧
祥
柯
页
巡
矩
悲
灌
龄
伦
票
寻
桂
铺
圣
恐
恰
郑
趣
抬
荒
腾
贴
柔
滴
猛
阔
辆
妻
填
撤
储
签
闹
扰
紫
砂
递
戏
吊
陶
伐
喂
疗
瓶
婆
抚
臂
摸
忍
虾
蜡
邻
胸
巩
挤
偶
弃
槽
劲
乳
邓
吉
仁
烂
砖
租
乌
舰
伴
瓜
浅
丙
暂
燥
橡
柳
迷
暖
牌
秧
胆
详
簧
踏
瓷
谱
呆
宾
糊
洛
辉
愤
竞
隙
怒
粘
乃
绪
肩
籍
敏
涂
熙
皆
侦
悬
掘
享
纠
醒
狂
锁
淀
恨
牲
霸
爬
赏
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鸭
趋
凤
晨
畜
辈
秩
卵
署
梯
炎
滩
棋
驱
筛
峡
冒
啥
寿
译
浸
泉
帽
迟
硅
疆
贷
漏
稿
冠
嫩
胁
芯
牢
叛
蚀
奥
鸣
岭
羊
凭
串
塘
绘
酵
融
盆
锡
庙
筹
冻
辅
摄
袭
筋
拒
僚
旱
钾
鸟
漆
沈
眉
疏
添
棒
穗
硝
韩
逼
扭
侨
凉
挺
碗
栽
炒
杯
患
馏
劝
豪
辽
勃
鸿
旦
吏
拜
狗
埋
辊
掩
饮
搬
骂
辞
勾
扣
估
蒋
绒
雾
丈
朵
姆
拟
宇
辑
陕
雕
偿
蓄
崇
剪
倡
厅
咬
驶
薯
刷
斥
番
赋
奉
佛
浇
漫
曼
扇
钙
桃
扶
仔
返
俗
亏
腔
鞋
棱
覆
框
悄
叔
撞
骗
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
胀
谐
抛
霉
桑
岗
嘛
衰
盗
渗
脏
赖
涌
甜
曹
阅
肌
哩
厉
烃
纬
毅
昨
伪
症
煮
叹
钉
搭
茎
笼
酷
偷
弓
锥
恒
杰
坑
鼻
翼
纶
叙
狱
逮
罐
络
棚
抑
膨
蔬
寺
骤
穆
冶
枯
册
尸
凸
绅
坯
牺
焰
轰
欣
晋
瘦
御
锭
锦
丧
旬
锻
垄
搜
扑
邀
亭
酯
迈
舒
脆
酶
闲
忧
酚
顽
羽
涨
卸
仗
陪
辟
惩
杭
姚
肚
捉
飘
漂
昆
欺
吾
郎
烷
汁
呵
饰
萧
雅
邮
迁
燕
撒
姻
赴
宴
烦
债
帐
斑
铃
旨
醇
董
饼
雏
姿
拌
傅
腹
妥
揉
贤
拆
歪
葡
胺
丢
浩
徽
昂
垫
挡
览
贪
慰
缴
汪
慌
冯
诺
姜
谊
凶
劣
诬
耀
昏
躺
盈
骑
乔
溪
丛
卢
抹
闷
咨
刮
驾
缆
悟
摘
铒
掷
颇
幻
柄
惠
惨
佳
仇
腊
窝
涤
剑
瞧
堡
泼
葱
罩
霍
捞
胎
苍
滨
俩
捅
湘
砍
霞
邵
萄
疯
淮
遂
熊
粪
烘
宿
档
戈
驳
嫂
裕
徙
箭
捐
肠
撑
晒
辨
殿
莲
摊
搅
酱
屏
疫
哀
蔡
堵
沫
皱
畅
叠
阁
莱
敲
辖
钩
痕
坝
巷
饿
祸
丘
玄
溜
曰
逻
彭
尝
卿
妨
艇
吞
韦
怨
矮
歇`.split("\n"),iC=`ábaco
abdomen
abeja
abierto
abogado
abono
aborto
abrazo
abrir
abuelo
abuso
acabar
academia
acceso
acción
aceite
acelga
acento
aceptar
ácido
aclarar
acné
acoger
acoso
activo
acto
actriz
actuar
acudir
acuerdo
acusar
adicto
admitir
adoptar
adorno
aduana
adulto
aéreo
afectar
afición
afinar
afirmar
ágil
agitar
agonía
agosto
agotar
agregar
agrio
agua
agudo
águila
aguja
ahogo
ahorro
aire
aislar
ajedrez
ajeno
ajuste
alacrán
alambre
alarma
alba
álbum
alcalde
aldea
alegre
alejar
alerta
aleta
alfiler
alga
algodón
aliado
aliento
alivio
alma
almeja
almíbar
altar
alteza
altivo
alto
altura
alumno
alzar
amable
amante
amapola
amargo
amasar
ámbar
ámbito
ameno
amigo
amistad
amor
amparo
amplio
ancho
anciano
ancla
andar
andén
anemia
ángulo
anillo
ánimo
anís
anotar
antena
antiguo
antojo
anual
anular
anuncio
añadir
añejo
año
apagar
aparato
apetito
apio
aplicar
apodo
aporte
apoyo
aprender
aprobar
apuesta
apuro
arado
araña
arar
árbitro
árbol
arbusto
archivo
arco
arder
ardilla
arduo
área
árido
aries
armonía
arnés
aroma
arpa
arpón
arreglo
arroz
arruga
arte
artista
asa
asado
asalto
ascenso
asegurar
aseo
asesor
asiento
asilo
asistir
asno
asombro
áspero
astilla
astro
astuto
asumir
asunto
atajo
ataque
atar
atento
ateo
ático
atleta
átomo
atraer
atroz
atún
audaz
audio
auge
aula
aumento
ausente
autor
aval
avance
avaro
ave
avellana
avena
avestruz
avión
aviso
ayer
ayuda
ayuno
azafrán
azar
azote
azúcar
azufre
azul
baba
babor
bache
bahía
baile
bajar
balanza
balcón
balde
bambú
banco
banda
baño
barba
barco
barniz
barro
báscula
bastón
basura
batalla
batería
batir
batuta
baúl
bazar
bebé
bebida
bello
besar
beso
bestia
bicho
bien
bingo
blanco
bloque
blusa
boa
bobina
bobo
boca
bocina
boda
bodega
boina
bola
bolero
bolsa
bomba
bondad
bonito
bono
bonsái
borde
borrar
bosque
bote
botín
bóveda
bozal
bravo
brazo
brecha
breve
brillo
brinco
brisa
broca
broma
bronce
brote
bruja
brusco
bruto
buceo
bucle
bueno
buey
bufanda
bufón
búho
buitre
bulto
burbuja
burla
burro
buscar
butaca
buzón
caballo
cabeza
cabina
cabra
cacao
cadáver
cadena
caer
café
caída
caimán
caja
cajón
cal
calamar
calcio
caldo
calidad
calle
calma
calor
calvo
cama
cambio
camello
camino
campo
cáncer
candil
canela
canguro
canica
canto
caña
cañón
caoba
caos
capaz
capitán
capote
captar
capucha
cara
carbón
cárcel
careta
carga
cariño
carne
carpeta
carro
carta
casa
casco
casero
caspa
castor
catorce
catre
caudal
causa
cazo
cebolla
ceder
cedro
celda
célebre
celoso
célula
cemento
ceniza
centro
cerca
cerdo
cereza
cero
cerrar
certeza
césped
cetro
chacal
chaleco
champú
chancla
chapa
charla
chico
chiste
chivo
choque
choza
chuleta
chupar
ciclón
ciego
cielo
cien
cierto
cifra
cigarro
cima
cinco
cine
cinta
ciprés
circo
ciruela
cisne
cita
ciudad
clamor
clan
claro
clase
clave
cliente
clima
clínica
cobre
cocción
cochino
cocina
coco
código
codo
cofre
coger
cohete
cojín
cojo
cola
colcha
colegio
colgar
colina
collar
colmo
columna
combate
comer
comida
cómodo
compra
conde
conejo
conga
conocer
consejo
contar
copa
copia
corazón
corbata
corcho
cordón
corona
correr
coser
cosmos
costa
cráneo
cráter
crear
crecer
creído
crema
cría
crimen
cripta
crisis
cromo
crónica
croqueta
crudo
cruz
cuadro
cuarto
cuatro
cubo
cubrir
cuchara
cuello
cuento
cuerda
cuesta
cueva
cuidar
culebra
culpa
culto
cumbre
cumplir
cuna
cuneta
cuota
cupón
cúpula
curar
curioso
curso
curva
cutis
dama
danza
dar
dardo
dátil
deber
débil
década
decir
dedo
defensa
definir
dejar
delfín
delgado
delito
demora
denso
dental
deporte
derecho
derrota
desayuno
deseo
desfile
desnudo
destino
desvío
detalle
detener
deuda
día
diablo
diadema
diamante
diana
diario
dibujo
dictar
diente
dieta
diez
difícil
digno
dilema
diluir
dinero
directo
dirigir
disco
diseño
disfraz
diva
divino
doble
doce
dolor
domingo
don
donar
dorado
dormir
dorso
dos
dosis
dragón
droga
ducha
duda
duelo
dueño
dulce
dúo
duque
durar
dureza
duro
ébano
ebrio
echar
eco
ecuador
edad
edición
edificio
editor
educar
efecto
eficaz
eje
ejemplo
elefante
elegir
elemento
elevar
elipse
élite
elixir
elogio
eludir
embudo
emitir
emoción
empate
empeño
empleo
empresa
enano
encargo
enchufe
encía
enemigo
enero
enfado
enfermo
engaño
enigma
enlace
enorme
enredo
ensayo
enseñar
entero
entrar
envase
envío
época
equipo
erizo
escala
escena
escolar
escribir
escudo
esencia
esfera
esfuerzo
espada
espejo
espía
esposa
espuma
esquí
estar
este
estilo
estufa
etapa
eterno
ética
etnia
evadir
evaluar
evento
evitar
exacto
examen
exceso
excusa
exento
exigir
exilio
existir
éxito
experto
explicar
exponer
extremo
fábrica
fábula
fachada
fácil
factor
faena
faja
falda
fallo
falso
faltar
fama
familia
famoso
faraón
farmacia
farol
farsa
fase
fatiga
fauna
favor
fax
febrero
fecha
feliz
feo
feria
feroz
fértil
fervor
festín
fiable
fianza
fiar
fibra
ficción
ficha
fideo
fiebre
fiel
fiera
fiesta
figura
fijar
fijo
fila
filete
filial
filtro
fin
finca
fingir
finito
firma
flaco
flauta
flecha
flor
flota
fluir
flujo
flúor
fobia
foca
fogata
fogón
folio
folleto
fondo
forma
forro
fortuna
forzar
fosa
foto
fracaso
frágil
franja
frase
fraude
freír
freno
fresa
frío
frito
fruta
fuego
fuente
fuerza
fuga
fumar
función
funda
furgón
furia
fusil
fútbol
futuro
gacela
gafas
gaita
gajo
gala
galería
gallo
gamba
ganar
gancho
ganga
ganso
garaje
garza
gasolina
gastar
gato
gavilán
gemelo
gemir
gen
género
genio
gente
geranio
gerente
germen
gesto
gigante
gimnasio
girar
giro
glaciar
globo
gloria
gol
golfo
goloso
golpe
goma
gordo
gorila
gorra
gota
goteo
gozar
grada
gráfico
grano
grasa
gratis
grave
grieta
grillo
gripe
gris
grito
grosor
grúa
grueso
grumo
grupo
guante
guapo
guardia
guerra
guía
guiño
guion
guiso
guitarra
gusano
gustar
haber
hábil
hablar
hacer
hacha
hada
hallar
hamaca
harina
haz
hazaña
hebilla
hebra
hecho
helado
helio
hembra
herir
hermano
héroe
hervir
hielo
hierro
hígado
higiene
hijo
himno
historia
hocico
hogar
hoguera
hoja
hombre
hongo
honor
honra
hora
hormiga
horno
hostil
hoyo
hueco
huelga
huerta
hueso
huevo
huida
huir
humano
húmedo
humilde
humo
hundir
huracán
hurto
icono
ideal
idioma
ídolo
iglesia
iglú
igual
ilegal
ilusión
imagen
imán
imitar
impar
imperio
imponer
impulso
incapaz
índice
inerte
infiel
informe
ingenio
inicio
inmenso
inmune
innato
insecto
instante
interés
íntimo
intuir
inútil
invierno
ira
iris
ironía
isla
islote
jabalí
jabón
jamón
jarabe
jardín
jarra
jaula
jazmín
jefe
jeringa
jinete
jornada
joroba
joven
joya
juerga
jueves
juez
jugador
jugo
juguete
juicio
junco
jungla
junio
juntar
júpiter
jurar
justo
juvenil
juzgar
kilo
koala
labio
lacio
lacra
lado
ladrón
lagarto
lágrima
laguna
laico
lamer
lámina
lámpara
lana
lancha
langosta
lanza
lápiz
largo
larva
lástima
lata
látex
latir
laurel
lavar
lazo
leal
lección
leche
lector
leer
legión
legumbre
lejano
lengua
lento
leña
león
leopardo
lesión
letal
letra
leve
leyenda
libertad
libro
licor
líder
lidiar
lienzo
liga
ligero
lima
límite
limón
limpio
lince
lindo
línea
lingote
lino
linterna
líquido
liso
lista
litera
litio
litro
llaga
llama
llanto
llave
llegar
llenar
llevar
llorar
llover
lluvia
lobo
loción
loco
locura
lógica
logro
lombriz
lomo
lonja
lote
lucha
lucir
lugar
lujo
luna
lunes
lupa
lustro
luto
luz
maceta
macho
madera
madre
maduro
maestro
mafia
magia
mago
maíz
maldad
maleta
malla
malo
mamá
mambo
mamut
manco
mando
manejar
manga
maniquí
manjar
mano
manso
manta
mañana
mapa
máquina
mar
marco
marea
marfil
margen
marido
mármol
marrón
martes
marzo
masa
máscara
masivo
matar
materia
matiz
matriz
máximo
mayor
mazorca
mecha
medalla
medio
médula
mejilla
mejor
melena
melón
memoria
menor
mensaje
mente
menú
mercado
merengue
mérito
mes
mesón
meta
meter
método
metro
mezcla
miedo
miel
miembro
miga
mil
milagro
militar
millón
mimo
mina
minero
mínimo
minuto
miope
mirar
misa
miseria
misil
mismo
mitad
mito
mochila
moción
moda
modelo
moho
mojar
molde
moler
molino
momento
momia
monarca
moneda
monja
monto
moño
morada
morder
moreno
morir
morro
morsa
mortal
mosca
mostrar
motivo
mover
móvil
mozo
mucho
mudar
mueble
muela
muerte
muestra
mugre
mujer
mula
muleta
multa
mundo
muñeca
mural
muro
músculo
museo
musgo
música
muslo
nácar
nación
nadar
naipe
naranja
nariz
narrar
nasal
natal
nativo
natural
náusea
naval
nave
navidad
necio
néctar
negar
negocio
negro
neón
nervio
neto
neutro
nevar
nevera
nicho
nido
niebla
nieto
niñez
niño
nítido
nivel
nobleza
noche
nómina
noria
norma
norte
nota
noticia
novato
novela
novio
nube
nuca
núcleo
nudillo
nudo
nuera
nueve
nuez
nulo
número
nutria
oasis
obeso
obispo
objeto
obra
obrero
observar
obtener
obvio
oca
ocaso
océano
ochenta
ocho
ocio
ocre
octavo
octubre
oculto
ocupar
ocurrir
odiar
odio
odisea
oeste
ofensa
oferta
oficio
ofrecer
ogro
oído
oír
ojo
ola
oleada
olfato
olivo
olla
olmo
olor
olvido
ombligo
onda
onza
opaco
opción
ópera
opinar
oponer
optar
óptica
opuesto
oración
orador
oral
órbita
orca
orden
oreja
órgano
orgía
orgullo
oriente
origen
orilla
oro
orquesta
oruga
osadía
oscuro
osezno
oso
ostra
otoño
otro
oveja
óvulo
óxido
oxígeno
oyente
ozono
pacto
padre
paella
página
pago
país
pájaro
palabra
palco
paleta
pálido
palma
paloma
palpar
pan
panal
pánico
pantera
pañuelo
papá
papel
papilla
paquete
parar
parcela
pared
parir
paro
párpado
parque
párrafo
parte
pasar
paseo
pasión
paso
pasta
pata
patio
patria
pausa
pauta
pavo
payaso
peatón
pecado
pecera
pecho
pedal
pedir
pegar
peine
pelar
peldaño
pelea
peligro
pellejo
pelo
peluca
pena
pensar
peñón
peón
peor
pepino
pequeño
pera
percha
perder
pereza
perfil
perico
perla
permiso
perro
persona
pesa
pesca
pésimo
pestaña
pétalo
petróleo
pez
pezuña
picar
pichón
pie
piedra
pierna
pieza
pijama
pilar
piloto
pimienta
pino
pintor
pinza
piña
piojo
pipa
pirata
pisar
piscina
piso
pista
pitón
pizca
placa
plan
plata
playa
plaza
pleito
pleno
plomo
pluma
plural
pobre
poco
poder
podio
poema
poesía
poeta
polen
policía
pollo
polvo
pomada
pomelo
pomo
pompa
poner
porción
portal
posada
poseer
posible
poste
potencia
potro
pozo
prado
precoz
pregunta
premio
prensa
preso
previo
primo
príncipe
prisión
privar
proa
probar
proceso
producto
proeza
profesor
programa
prole
promesa
pronto
propio
próximo
prueba
público
puchero
pudor
pueblo
puerta
puesto
pulga
pulir
pulmón
pulpo
pulso
puma
punto
puñal
puño
pupa
pupila
puré
quedar
queja
quemar
querer
queso
quieto
química
quince
quitar
rábano
rabia
rabo
ración
radical
raíz
rama
rampa
rancho
rango
rapaz
rápido
rapto
rasgo
raspa
rato
rayo
raza
razón
reacción
realidad
rebaño
rebote
recaer
receta
rechazo
recoger
recreo
recto
recurso
red
redondo
reducir
reflejo
reforma
refrán
refugio
regalo
regir
regla
regreso
rehén
reino
reír
reja
relato
relevo
relieve
relleno
reloj
remar
remedio
remo
rencor
rendir
renta
reparto
repetir
reposo
reptil
res
rescate
resina
respeto
resto
resumen
retiro
retorno
retrato
reunir
revés
revista
rey
rezar
rico
riego
rienda
riesgo
rifa
rígido
rigor
rincón
riñón
río
riqueza
risa
ritmo
rito
rizo
roble
roce
rociar
rodar
rodeo
rodilla
roer
rojizo
rojo
romero
romper
ron
ronco
ronda
ropa
ropero
rosa
rosca
rostro
rotar
rubí
rubor
rudo
rueda
rugir
ruido
ruina
ruleta
rulo
rumbo
rumor
ruptura
ruta
rutina
sábado
saber
sabio
sable
sacar
sagaz
sagrado
sala
saldo
salero
salir
salmón
salón
salsa
salto
salud
salvar
samba
sanción
sandía
sanear
sangre
sanidad
sano
santo
sapo
saque
sardina
sartén
sastre
satán
sauna
saxofón
sección
seco
secreto
secta
sed
seguir
seis
sello
selva
semana
semilla
senda
sensor
señal
señor
separar
sepia
sequía
ser
serie
sermón
servir
sesenta
sesión
seta
setenta
severo
sexo
sexto
sidra
siesta
siete
siglo
signo
sílaba
silbar
silencio
silla
símbolo
simio
sirena
sistema
sitio
situar
sobre
socio
sodio
sol
solapa
soldado
soledad
sólido
soltar
solución
sombra
sondeo
sonido
sonoro
sonrisa
sopa
soplar
soporte
sordo
sorpresa
sorteo
sostén
sótano
suave
subir
suceso
sudor
suegra
suelo
sueño
suerte
sufrir
sujeto
sultán
sumar
superar
suplir
suponer
supremo
sur
surco
sureño
surgir
susto
sutil
tabaco
tabique
tabla
tabú
taco
tacto
tajo
talar
talco
talento
talla
talón
tamaño
tambor
tango
tanque
tapa
tapete
tapia
tapón
taquilla
tarde
tarea
tarifa
tarjeta
tarot
tarro
tarta
tatuaje
tauro
taza
tazón
teatro
techo
tecla
técnica
tejado
tejer
tejido
tela
teléfono
tema
temor
templo
tenaz
tender
tener
tenis
tenso
teoría
terapia
terco
término
ternura
terror
tesis
tesoro
testigo
tetera
texto
tez
tibio
tiburón
tiempo
tienda
tierra
tieso
tigre
tijera
tilde
timbre
tímido
timo
tinta
tío
típico
tipo
tira
tirón
titán
títere
título
tiza
toalla
tobillo
tocar
tocino
todo
toga
toldo
tomar
tono
tonto
topar
tope
toque
tórax
torero
tormenta
torneo
toro
torpedo
torre
torso
tortuga
tos
tosco
toser
tóxico
trabajo
tractor
traer
tráfico
trago
traje
tramo
trance
trato
trauma
trazar
trébol
tregua
treinta
tren
trepar
tres
tribu
trigo
tripa
triste
triunfo
trofeo
trompa
tronco
tropa
trote
trozo
truco
trueno
trufa
tubería
tubo
tuerto
tumba
tumor
túnel
túnica
turbina
turismo
turno
tutor
ubicar
úlcera
umbral
unidad
unir
universo
uno
untar
uña
urbano
urbe
urgente
urna
usar
usuario
útil
utopía
uva
vaca
vacío
vacuna
vagar
vago
vaina
vajilla
vale
válido
valle
valor
válvula
vampiro
vara
variar
varón
vaso
vecino
vector
vehículo
veinte
vejez
vela
velero
veloz
vena
vencer
venda
veneno
vengar
venir
venta
venus
ver
verano
verbo
verde
vereda
verja
verso
verter
vía
viaje
vibrar
vicio
víctima
vida
vídeo
vidrio
viejo
viernes
vigor
vil
villa
vinagre
vino
viñedo
violín
viral
virgo
virtud
visor
víspera
vista
vitamina
viudo
vivaz
vivero
vivir
vivo
volcán
volumen
volver
voraz
votar
voto
voz
vuelo
vulgar
yacer
yate
yegua
yema
yerno
yeso
yodo
yoga
yogur
zafiro
zanja
zapato
zarza
zona
zorro
zumo
zurdo`.split("\n"),iF=`的
一
是
在
不
了
有
和
人
這
中
大
為
上
個
國
我
以
要
他
時
來
用
們
生
到
作
地
於
出
就
分
對
成
會
可
主
發
年
動
同
工
也
能
下
過
子
說
產
種
面
而
方
後
多
定
行
學
法
所
民
得
經
十
三
之
進
著
等
部
度
家
電
力
裡
如
水
化
高
自
二
理
起
小
物
現
實
加
量
都
兩
體
制
機
當
使
點
從
業
本
去
把
性
好
應
開
它
合
還
因
由
其
些
然
前
外
天
政
四
日
那
社
義
事
平
形
相
全
表
間
樣
與
關
各
重
新
線
內
數
正
心
反
你
明
看
原
又
麼
利
比
或
但
質
氣
第
向
道
命
此
變
條
只
沒
結
解
問
意
建
月
公
無
系
軍
很
情
者
最
立
代
想
已
通
並
提
直
題
黨
程
展
五
果
料
象
員
革
位
入
常
文
總
次
品
式
活
設
及
管
特
件
長
求
老
頭
基
資
邊
流
路
級
少
圖
山
統
接
知
較
將
組
見
計
別
她
手
角
期
根
論
運
農
指
幾
九
區
強
放
決
西
被
幹
做
必
戰
先
回
則
任
取
據
處
隊
南
給
色
光
門
即
保
治
北
造
百
規
熱
領
七
海
口
東
導
器
壓
志
世
金
增
爭
濟
階
油
思
術
極
交
受
聯
什
認
六
共
權
收
證
改
清
美
再
採
轉
更
單
風
切
打
白
教
速
花
帶
安
場
身
車
例
真
務
具
萬
每
目
至
達
走
積
示
議
聲
報
鬥
完
類
八
離
華
名
確
才
科
張
信
馬
節
話
米
整
空
元
況
今
集
溫
傳
土
許
步
群
廣
石
記
需
段
研
界
拉
林
律
叫
且
究
觀
越
織
裝
影
算
低
持
音
眾
書
布
复
容
兒
須
際
商
非
驗
連
斷
深
難
近
礦
千
週
委
素
技
備
半
辦
青
省
列
習
響
約
支
般
史
感
勞
便
團
往
酸
歷
市
克
何
除
消
構
府
稱
太
準
精
值
號
率
族
維
劃
選
標
寫
存
候
毛
親
快
效
斯
院
查
江
型
眼
王
按
格
養
易
置
派
層
片
始
卻
專
狀
育
廠
京
識
適
屬
圓
包
火
住
調
滿
縣
局
照
參
紅
細
引
聽
該
鐵
價
嚴
首
底
液
官
德
隨
病
蘇
失
爾
死
講
配
女
黃
推
顯
談
罪
神
藝
呢
席
含
企
望
密
批
營
項
防
舉
球
英
氧
勢
告
李
台
落
木
幫
輪
破
亞
師
圍
注
遠
字
材
排
供
河
態
封
另
施
減
樹
溶
怎
止
案
言
士
均
武
固
葉
魚
波
視
僅
費
緊
愛
左
章
早
朝
害
續
輕
服
試
食
充
兵
源
判
護
司
足
某
練
差
致
板
田
降
黑
犯
負
擊
范
繼
興
似
餘
堅
曲
輸
修
故
城
夫
夠
送
筆
船
佔
右
財
吃
富
春
職
覺
漢
畫
功
巴
跟
雖
雜
飛
檢
吸
助
昇
陽
互
初
創
抗
考
投
壞
策
古
徑
換
未
跑
留
鋼
曾
端
責
站
簡
述
錢
副
盡
帝
射
草
衝
承
獨
令
限
阿
宣
環
雙
請
超
微
讓
控
州
良
軸
找
否
紀
益
依
優
頂
礎
載
倒
房
突
坐
粉
敵
略
客
袁
冷
勝
絕
析
塊
劑
測
絲
協
訴
念
陳
仍
羅
鹽
友
洋
錯
苦
夜
刑
移
頻
逐
靠
混
母
短
皮
終
聚
汽
村
雲
哪
既
距
衛
停
烈
央
察
燒
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
遊
久
菜
味
舊
模
湖
貨
損
預
阻
毫
普
穩
乙
媽
植
息
擴
銀
語
揮
酒
守
拿
序
紙
醫
缺
雨
嗎
針
劉
啊
急
唱
誤
訓
願
審
附
獲
茶
鮮
糧
斤
孩
脫
硫
肥
善
龍
演
父
漸
血
歡
械
掌
歌
沙
剛
攻
謂
盾
討
晚
粒
亂
燃
矛
乎
殺
藥
寧
魯
貴
鐘
煤
讀
班
伯
香
介
迫
句
豐
培
握
蘭
擔
弦
蛋
沉
假
穿
執
答
樂
誰
順
煙
縮
徵
臉
喜
松
腳
困
異
免
背
星
福
買
染
井
概
慢
怕
磁
倍
祖
皇
促
靜
補
評
翻
肉
踐
尼
衣
寬
揚
棉
希
傷
操
垂
秋
宜
氫
套
督
振
架
亮
末
憲
慶
編
牛
觸
映
雷
銷
詩
座
居
抓
裂
胞
呼
娘
景
威
綠
晶
厚
盟
衡
雞
孫
延
危
膠
屋
鄉
臨
陸
顧
掉
呀
燈
歲
措
束
耐
劇
玉
趙
跳
哥
季
課
凱
胡
額
款
紹
卷
齊
偉
蒸
殖
永
宗
苗
川
爐
岩
弱
零
楊
奏
沿
露
桿
探
滑
鎮
飯
濃
航
懷
趕
庫
奪
伊
靈
稅
途
滅
賽
歸
召
鼓
播
盤
裁
險
康
唯
錄
菌
純
借
糖
蓋
橫
符
私
努
堂
域
槍
潤
幅
哈
竟
熟
蟲
澤
腦
壤
碳
歐
遍
側
寨
敢
徹
慮
斜
薄
庭
納
彈
飼
伸
折
麥
濕
暗
荷
瓦
塞
床
築
惡
戶
訪
塔
奇
透
梁
刀
旋
跡
卡
氯
遇
份
毒
泥
退
洗
擺
灰
彩
賣
耗
夏
擇
忙
銅
獻
硬
予
繁
圈
雪
函
亦
抽
篇
陣
陰
丁
尺
追
堆
雄
迎
泛
爸
樓
避
謀
噸
野
豬
旗
累
偏
典
館
索
秦
脂
潮
爺
豆
忽
托
驚
塑
遺
愈
朱
替
纖
粗
傾
尚
痛
楚
謝
奮
購
磨
君
池
旁
碎
骨
監
捕
弟
暴
割
貫
殊
釋
詞
亡
壁
頓
寶
午
塵
聞
揭
炮
殘
冬
橋
婦
警
綜
招
吳
付
浮
遭
徐
您
搖
谷
贊
箱
隔
訂
男
吹
園
紛
唐
敗
宋
玻
巨
耕
坦
榮
閉
灣
鍵
凡
駐
鍋
救
恩
剝
凝
鹼
齒
截
煉
麻
紡
禁
廢
盛
版
緩
淨
睛
昌
婚
涉
筒
嘴
插
岸
朗
莊
街
藏
姑
貿
腐
奴
啦
慣
乘
夥
恢
勻
紗
扎
辯
耳
彪
臣
億
璃
抵
脈
秀
薩
俄
網
舞
店
噴
縱
寸
汗
掛
洪
賀
閃
柬
爆
烯
津
稻
牆
軟
勇
像
滾
厘
蒙
芳
肯
坡
柱
盪
腿
儀
旅
尾
軋
冰
貢
登
黎
削
鑽
勒
逃
障
氨
郭
峰
幣
港
伏
軌
畝
畢
擦
莫
刺
浪
秘
援
株
健
售
股
島
甘
泡
睡
童
鑄
湯
閥
休
匯
舍
牧
繞
炸
哲
磷
績
朋
淡
尖
啟
陷
柴
呈
徒
顏
淚
稍
忘
泵
藍
拖
洞
授
鏡
辛
壯
鋒
貧
虛
彎
摩
泰
幼
廷
尊
窗
綱
弄
隸
疑
氏
宮
姐
震
瑞
怪
尤
琴
循
描
膜
違
夾
腰
緣
珠
窮
森
枝
竹
溝
催
繩
憶
邦
剩
幸
漿
欄
擁
牙
貯
禮
濾
鈉
紋
罷
拍
咱
喊
袖
埃
勤
罰
焦
潛
伍
墨
欲
縫
姓
刊
飽
仿
獎
鋁
鬼
麗
跨
默
挖
鏈
掃
喝
袋
炭
污
幕
諸
弧
勵
梅
奶
潔
災
舟
鑑
苯
訟
抱
毀
懂
寒
智
埔
寄
屆
躍
渡
挑
丹
艱
貝
碰
拔
爹
戴
碼
夢
芽
熔
赤
漁
哭
敬
顆
奔
鉛
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
倉
魏
銳
曉
氮
兼
隱
礙
赫
撥
忠
肅
缸
牽
搶
博
巧
殼
兄
杜
訊
誠
碧
祥
柯
頁
巡
矩
悲
灌
齡
倫
票
尋
桂
鋪
聖
恐
恰
鄭
趣
抬
荒
騰
貼
柔
滴
猛
闊
輛
妻
填
撤
儲
簽
鬧
擾
紫
砂
遞
戲
吊
陶
伐
餵
療
瓶
婆
撫
臂
摸
忍
蝦
蠟
鄰
胸
鞏
擠
偶
棄
槽
勁
乳
鄧
吉
仁
爛
磚
租
烏
艦
伴
瓜
淺
丙
暫
燥
橡
柳
迷
暖
牌
秧
膽
詳
簧
踏
瓷
譜
呆
賓
糊
洛
輝
憤
競
隙
怒
粘
乃
緒
肩
籍
敏
塗
熙
皆
偵
懸
掘
享
糾
醒
狂
鎖
淀
恨
牲
霸
爬
賞
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鴨
趨
鳳
晨
畜
輩
秩
卵
署
梯
炎
灘
棋
驅
篩
峽
冒
啥
壽
譯
浸
泉
帽
遲
矽
疆
貸
漏
稿
冠
嫩
脅
芯
牢
叛
蝕
奧
鳴
嶺
羊
憑
串
塘
繪
酵
融
盆
錫
廟
籌
凍
輔
攝
襲
筋
拒
僚
旱
鉀
鳥
漆
沈
眉
疏
添
棒
穗
硝
韓
逼
扭
僑
涼
挺
碗
栽
炒
杯
患
餾
勸
豪
遼
勃
鴻
旦
吏
拜
狗
埋
輥
掩
飲
搬
罵
辭
勾
扣
估
蔣
絨
霧
丈
朵
姆
擬
宇
輯
陝
雕
償
蓄
崇
剪
倡
廳
咬
駛
薯
刷
斥
番
賦
奉
佛
澆
漫
曼
扇
鈣
桃
扶
仔
返
俗
虧
腔
鞋
棱
覆
框
悄
叔
撞
騙
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
脹
諧
拋
黴
桑
崗
嘛
衰
盜
滲
臟
賴
湧
甜
曹
閱
肌
哩
厲
烴
緯
毅
昨
偽
症
煮
嘆
釘
搭
莖
籠
酷
偷
弓
錐
恆
傑
坑
鼻
翼
綸
敘
獄
逮
罐
絡
棚
抑
膨
蔬
寺
驟
穆
冶
枯
冊
屍
凸
紳
坯
犧
焰
轟
欣
晉
瘦
禦
錠
錦
喪
旬
鍛
壟
搜
撲
邀
亭
酯
邁
舒
脆
酶
閒
憂
酚
頑
羽
漲
卸
仗
陪
闢
懲
杭
姚
肚
捉
飄
漂
昆
欺
吾
郎
烷
汁
呵
飾
蕭
雅
郵
遷
燕
撒
姻
赴
宴
煩
債
帳
斑
鈴
旨
醇
董
餅
雛
姿
拌
傅
腹
妥
揉
賢
拆
歪
葡
胺
丟
浩
徽
昂
墊
擋
覽
貪
慰
繳
汪
慌
馮
諾
姜
誼
兇
劣
誣
耀
昏
躺
盈
騎
喬
溪
叢
盧
抹
悶
諮
刮
駕
纜
悟
摘
鉺
擲
頗
幻
柄
惠
慘
佳
仇
臘
窩
滌
劍
瞧
堡
潑
蔥
罩
霍
撈
胎
蒼
濱
倆
捅
湘
砍
霞
邵
萄
瘋
淮
遂
熊
糞
烘
宿
檔
戈
駁
嫂
裕
徙
箭
捐
腸
撐
曬
辨
殿
蓮
攤
攪
醬
屏
疫
哀
蔡
堵
沫
皺
暢
疊
閣
萊
敲
轄
鉤
痕
壩
巷
餓
禍
丘
玄
溜
曰
邏
彭
嘗
卿
妨
艇
吞
韋
怨
矮
歇`.split("\n");function iL(e,r={}){let{strength:a=128}=r;return function(e,r=128){var a;if((0,rc.k8)(r),r%32!=0||r>256)throw TypeError("Invalid entropy");return iI(a=(0,rc.O6)(r/8)),iA(e).encode(a).join(ij(e)?"　":" ")}(e,a)}function iD(e,r={}){let{passphrase:a}=r;return oq(iV(e,{passphrase:a}))}function i$(e,r={}){let{path:a=oR(),passphrase:t}=r,o=iD(e,{passphrase:t}).derive(a);return"Bytes"===r.as?ej.from(o.privateKey):o.privateKey}function iV(e,r={}){let{passphrase:a}=r,t=function(e,r=""){return ii(r6.o,iP(e).nfkd,iS(r),{c:2048,dkLen:64})}(e,a);return"Hex"===r.as?ej.toHex(t):t}function i_(e,r){return function(e,r){try{!function(e,r){let{words:a}=iP(e),t=iA(r).decode(a);iI(t)}(e,r)}catch(e){return!1}return!0}(e,r)}var iM=a(38505);let iZ=(0,r4.gN)(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),iY=iZ.create(BigInt("-3")),iX=BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),iJ=(0,iM._)({a:iY,b:iX,Fp:iZ,n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),h:BigInt(1),lowS:!1},r6.JQ),iQ=(0,r4.gN)(BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff")),iW=iQ.create(BigInt("-3")),i0=BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef");(0,iM._)({a:iW,b:i0,Fp:iQ,n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"),h:BigInt(1),lowS:!1},r6.iC);let i1=(0,r4.gN)(BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")),i2=i1.create(BigInt("-3")),i3=BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00");(0,iM._)({a:i2,b:i3,Fp:i1,n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"),h:BigInt(1),lowS:!1,allowedPrivateKeyLengths:[130,131,132]},r6.o);let i5=iJ;function i8(e={}){let{as:r="Hex"}=e,a=i9({as:r}),t=i6({privateKey:a});return{privateKey:a,publicKey:t}}function i6(e){let{privateKey:r}=e,a=iJ.ProjectivePoint.fromPrivateKey("string"==typeof r?r.slice(2):ef.fromBytes(r).slice(2));return oy.from(a)}function i4(e){let{as:r="Hex",privateKey:a,publicKey:t}=e,o=iJ.ProjectivePoint.fromHex(oy.toHex(t).slice(2)),i="string"==typeof a?a.slice(2):ef.fromBytes(a).slice(2),n=o.multiply(iJ.utils.normPrivateKeyToScalar(i)).toRawBytes(!0);return"Hex"===r?ef.fromBytes(n):n}function i9(e={}){let{as:r="Hex"}=e,a=iJ.utils.randomPrivateKey();return"Hex"===r?ef.fromBytes(a):a}function i7(e){let{payload:r,signature:a}=e,{r:t,s:o,yParity:i}=a,n=new iJ.Signature(BigInt(t),BigInt(o)).addRecoveryBit(i),s=r instanceof Uint8Array?ef.fromBytes(r):r,l=n.recoverPublicKey(s.substring(2));return oy.from(l)}function ne(e){let{extraEntropy:r=!1,hash:a,payload:t,privateKey:o}=e,{r:i,s:n,recovery:s}=iJ.sign(t instanceof Uint8Array?t:ej.fromHex(t),o instanceof Uint8Array?o:ej.fromHex(o),{extraEntropy:"boolean"==typeof r?r:ef.from(r).slice(2),lowS:!0,...a?{prehash:!0}:{}});return{r:i,s:n,yParity:s}}function nr(e){let{hash:r,payload:a,publicKey:t,signature:o}=e;return iJ.verify(o,a instanceof Uint8Array?a:ej.fromHex(a),oy.toHex(t).substring(2),...r?[{prehash:!0,lowS:!0}]:[])}function na(e){let r=ef.from(e);return ef.concat("0x19",ef.fromString("Ethereum Signed Message:\n"+ef.size(r)),r)}function nt(e){return eP.keccak256(na(e))}var no=a(87336);function ni(e,r={}){let{request:a}=r;return{...e,id:e.id??a?.id,jsonrpc:e.jsonrpc??a.jsonrpc}}function nn(e,r={}){let{raw:a=!1}=r;if(a)return e;if(e.error)throw ns(e.error);return e.result}function ns(e){if(e instanceof Error&&!("code"in e))return new ny({cause:e,data:e,message:e.message,stack:e.stack});let{code:r}=e;return r===ny.code?new ny(e):r===nc.code?new nc(e):r===nv.code?new nv(e):r===ng.code?new ng(e):r===np.code?new np(e):r===nh.code?new nh(e):r===nm.code?new nm(e):r===nx.code?new nx(e):r===nu.code?new nu(e):r===nd.code?new nd(e):r===nf.code?new nf(e):r===nb.code?new nb(e):new ny({cause:e instanceof Error?e:void 0,data:e,message:e.message,stack:e instanceof Error?e.stack:void 0})}class nl extends Error{constructor(e){let{cause:r,code:a,message:t,data:o,stack:i}=e;super(t,{cause:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.BaseError"}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stack",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=r,this.code=a,this.data=o,this.stack=i??""}}class nc extends nl{constructor(e={}){super({code:nc.code,data:e.data,message:e.message??"Missing or invalid parameters."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.InvalidInputError"})}}Object.defineProperty(nc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class nu extends nl{constructor(e={}){super({code:nu.code,data:e.data,message:e.message??"Requested resource not found."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.ResourceNotFoundError"})}}Object.defineProperty(nu,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class nd extends nl{constructor(e={}){super({code:nd.code,data:e.data,message:e.message??"Requested resource not available."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.ResourceUnavailableError"})}}Object.defineProperty(nd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class nf extends nl{constructor(e={}){super({code:nf.code,data:e.data,message:e.message??"Transaction creation failed."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.TransactionRejectedError"})}}Object.defineProperty(nf,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class nm extends nl{constructor(e={}){super({code:nm.code,data:e.data,message:e.message??"Method is not implemented."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.MethodNotSupportedError"})}}Object.defineProperty(nm,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class np extends nl{constructor(e={}){super({code:np.code,data:e.data,message:e.message??"Rate limit exceeded."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.LimitExceededError"})}}Object.defineProperty(np,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class nb extends nl{constructor(e={}){super({code:nb.code,data:e.data,message:e.message??"JSON-RPC version not supported."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.VersionNotSupportedError"})}}Object.defineProperty(nb,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class ng extends nl{constructor(e={}){super({code:ng.code,data:e.data,message:e.message??"Input is not a valid JSON-RPC request."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.InvalidRequestError"})}}Object.defineProperty(ng,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class nh extends nl{constructor(e={}){super({code:nh.code,data:e.data,message:e.message??"Method does not exist."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.MethodNotFoundError"})}}Object.defineProperty(nh,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class nv extends nl{constructor(e={}){super({code:nv.code,data:e.data,message:e.message??"Invalid method parameters."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.InvalidParamsError"})}}Object.defineProperty(nv,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class ny extends nl{constructor(e={}){super({cause:e.cause,code:ny.code,data:e.data,message:e.message??"Internal JSON-RPC error.",stack:e.stack}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.InternalError"})}}Object.defineProperty(ny,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class nx extends nl{constructor(e={}){super({code:nx.code,data:e.data,message:e.message??"Failed to parse JSON-RPC response."}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcResponse.ParseError"})}}Object.defineProperty(nx,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class nk extends Error{constructor(e,r){super(r),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e,this.details=r}}class nw extends nk{constructor({message:e="The user rejected the request."}={}){super(4001,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UserRejectedRequestError"})}}Object.defineProperty(nw,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class nz extends nk{constructor({message:e="The requested method and/or account has not been authorized by the user."}={}){super(4100,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UnauthorizedError"})}}Object.defineProperty(nz,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class nE extends nk{constructor({message:e="The provider does not support the requested method."}={}){super(4200,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UnsupportedMethodError"})}}Object.defineProperty(nE,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class nj extends nk{constructor({message:e="The provider is disconnected from all chains."}={}){super(4900,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.DisconnectedError"})}}Object.defineProperty(nj,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class nB extends nk{constructor({message:e="The provider is not connected to the requested chain."}={}){super(4901,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.ChainDisconnectedError"})}}Object.defineProperty(nB,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class nP extends nk{constructor({message:e="An error occurred when attempting to switch chain."}={}){super(4902,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.SwitchChainError"})}}Object.defineProperty(nP,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class nI extends nk{constructor({message:e="This Wallet does not support a capability that was not marked as optional."}={}){super(5700,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UnsupportedNonOptionalCapabilityError"})}}Object.defineProperty(nI,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class nO extends nk{constructor({message:e="This Wallet does not support the requested chain ID."}={}){super(5710,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UnsupportedChainIdError"})}}Object.defineProperty(nO,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class nA extends nk{constructor({message:e="There is already a bundle submitted with this ID."}={}){super(5720,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.DuplicateIdError"})}}Object.defineProperty(nA,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class nS extends nk{constructor({message:e="This bundle id is unknown / has not been submitted."}={}){super(5730,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.UnknownBundleIdError"})}}Object.defineProperty(nS,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class nq extends nk{constructor({message:e="The call bundle is too large for the Wallet to process."}={}){super(5740,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.BundleTooLargeError"})}}Object.defineProperty(nq,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class nR extends nk{constructor({message:e="The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."}={}){super(5750,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.AtomicReadyWalletRejectedUpgradeError"})}}Object.defineProperty(nR,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class nN extends nk{constructor({message:e="The wallet does not support atomic execution but the request requires it."}={}){super(5760,e),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.AtomicityNotSupportedError"})}}function nU(){let e=new no.v;return{get eventNames(){return e.eventNames.bind(e)},get listenerCount(){return e.listenerCount.bind(e)},get listeners(){return e.listeners.bind(e)},addListener:e.addListener.bind(e),emit:e.emit.bind(e),off:e.off.bind(e),on:e.on.bind(e),once:e.once.bind(e),removeAllListeners:e.removeAllListeners.bind(e),removeListener:e.removeListener.bind(e)}}function nT(e,r={}){if(!e)throw new nG;return{...e,async request(r){try{let a=await e.request(r);if(a&&"object"==typeof a&&"jsonrpc"in a)return nn(a);return a}catch(e){throw nH(e)}}}}function nH(e){let r=ns(e);if(r instanceof ny){if(!r.data)return r;let{code:e}=r.data;if(e===nj.code)return new nj(r);if(e===nB.code)return new nB(r);if(e===nw.code)return new nw(r);if(e===nz.code)return new nz(r);if(e===nE.code)return new nE(r);if(e===nP.code)return new nP(r);if(e===nR.code)return new nR(r);if(e===nN.code)return new nN(r);if(e===nq.code)return new nq(r);if(e===nS.code)return new nS(r);if(e===nA.code)return new nA(r);if(e===nO.code)return new nO(r);if(e===nI.code)return new nI(r)}return r}Object.defineProperty(nN,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class nG extends eB.BaseError{constructor(){super("`provider` is undefined."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Provider.IsUndefinedError"})}}function nK(e={}){let r=e.id??0;return{prepare:e=>nC({id:r++,...e}),get id(){return r}}}function nC(e){return{...e,jsonrpc:"2.0"}}function nF(){return null}class nL extends eB.BaseError{constructor(){super("Operation timed out."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Promise.TimeoutError"})}}function nD(e,r={}){return function(e,r){let a=nK();return{request:async({method:t,params:o},i={})=>{let n=a.prepare({method:t,params:o});return nn(await e.request(n,i),{raw:i.raw??r?.raw})}}}({async request(a,t){let{fetchFn:o=r.fetchFn??fetch,fetchOptions:i=r.fetchOptions,timeout:n=r.timeout??1e4}=t,s=JSON.stringify(a),l="function"==typeof i?await i(a):i,c=await function(e,r){let{errorInstance:a=new nL,timeout:t,signal:o}=r;return new Promise((r,i)=>{(async()=>{let n;try{let s=new AbortController;t>0&&(n=setTimeout(()=>{o?s.abort():i(a)},t)),r(await e({signal:s.signal}))}catch(e){e?.name==="AbortError"&&i(a),i(e)}finally{clearTimeout(n)}})()})}(({signal:r})=>o(new Request(e,{...l,body:s,headers:{"Content-Type":"application/json",...l?.headers},method:l?.method??"POST",signal:l?.signal??(n>0?r:null)})),{timeout:n,signal:!0}),u=await (async()=>c.headers.get("Content-Type")?.startsWith("application/json")?c.json():c.text().then(e=>{try{return JSON.parse(e||"{}")}catch(r){if(c.ok)throw new nV({response:e});return{error:e}}}))();if(!c.ok)throw new n$({body:s,details:JSON.stringify(u.error)??c.statusText,response:c,url:e});return u}},{raw:r.raw})}class n$ extends eB.BaseError{constructor({body:e,details:r,response:a,url:t}){super("HTTP request failed.",{details:r,metaMessages:[`Status: ${a.status}`,`URL: ${(0,eO.Gr)(t)}`,e?`Body: ${JSON.stringify(e)}`:void 0]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcTransport.HttpError"})}}class nV extends eB.BaseError{constructor({response:e}){super("HTTP Response could not be parsed as JSON.",{metaMessages:[`Response: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcTransport.MalformedResponseError"})}}let n_=256,nM=/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/,nZ=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/,nY=/^localhost(:[0-9]{1,5})?$/,nX=/^[a-zA-Z0-9]{8,}$/,nJ=/^([a-zA-Z][a-zA-Z0-9+-.]*)$/,nQ=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,nW=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function n0(e){let{chainId:r,domain:a,expirationTime:t,issuedAt:o=new Date,nonce:i,notBefore:n,requestId:s,resources:l,scheme:c,uri:u,version:d}=e;{if(r!==Math.floor(r))throw new n8({field:"chainId",metaMessages:["- Chain ID must be a EIP-155 chain ID.","- See https://eips.ethereum.org/EIPS/eip-155","",`Provided value: ${r}`]});if(!(nM.test(a)||nZ.test(a)||nY.test(a)))throw new n8({field:"domain",metaMessages:["- Domain must be an RFC 3986 authority.","- See https://www.rfc-editor.org/rfc/rfc3986","",`Provided value: ${a}`]});if(!nX.test(i))throw new n8({field:"nonce",metaMessages:["- Nonce must be at least 8 characters.","- Nonce must be alphanumeric.","",`Provided value: ${i}`]});if(!n2(u))throw new n8({field:"uri",metaMessages:["- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.","- See https://www.rfc-editor.org/rfc/rfc3986","",`Provided value: ${u}`]});if("1"!==d)throw new n8({field:"version",metaMessages:["- Version must be '1'.","",`Provided value: ${d}`]});if(c&&!nJ.test(c))throw new n8({field:"scheme",metaMessages:["- Scheme must be an RFC 3986 URI scheme.","- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1","",`Provided value: ${c}`]});let t=e.statement;if(t?.includes("\n"))throw new n8({field:"statement",metaMessages:["- Statement must not include '\\n'.","",`Provided value: ${t}`]})}let f=eE.from(e.address,{checksum:!0}),m=c?`${c}://${a}`:a,p=e.statement?`${e.statement}
`:"",b=`${m} wants you to sign in with your Ethereum account:
${f}

${p}`,g=`URI: ${u}
Version: ${d}
Chain ID: ${r}
Nonce: ${i}
Issued At: ${o.toISOString()}`;if(t&&(g+=`
Expiration Time: ${t.toISOString()}`),n&&(g+=`
Not Before: ${n.toISOString()}`),s&&(g+=`
Request ID: ${s}`),l){let e="\nResources:";for(let r of l){if(!n2(r))throw new n8({field:"resources",metaMessages:["- Every resource must be a RFC 3986 URI.","- See https://www.rfc-editor.org/rfc/rfc3986","",`Provided value: ${r}`]});e+=`
- ${r}`}g+=e}return`${b}
${g}`}function n1(){return function(e=11){if(!t||n_+e>512){t="",n_=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(n_,n_+++e)}(96)}function n2(e){if(/[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i.test(e)||/%[^0-9a-f]/i.test(e)||/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e))return!1;let r=e.match(/(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/),a=r[1],t=r[2],o=r[3],i=r[4],n=r[5];if(!(a?.length&&o&&o.length>=0))return!1;if(t?.length){if(!(0===o.length||/^\//.test(o)))return!1}else if(/^\/\//.test(o))return!1;if(!/^[a-z][a-z0-9+\-.]*$/.test(a.toLowerCase()))return!1;let s="";return s+=`${a}:`,t?.length&&(s+=`//${t}`),s+=o,i?.length&&(s+=`?${i}`),n?.length&&(s+=`#${n}`),s}function n3(e){let{scheme:r,statement:a,...t}=e.match(nQ)?.groups??{},{chainId:o,expirationTime:i,issuedAt:n,notBefore:s,requestId:l,...c}=e.match(nW)?.groups??{},u=e.split("Resources:")[1]?.split("\n- ").slice(1);return{...t,...c,...o?{chainId:Number(o)}:{},...i?{expirationTime:new Date(i)}:{},...n?{issuedAt:new Date(n)}:{},...s?{notBefore:new Date(s)}:{},...l?{requestId:l}:{},...u?{resources:u}:{},...r?{scheme:r}:{},...a?{statement:a}:{}}}function n5(e){let{address:r,domain:a,message:t,nonce:o,scheme:i,time:n=new Date}=e;if(a&&t.domain!==a||o&&t.nonce!==o||i&&t.scheme!==i||t.expirationTime&&n>=t.expirationTime||t.notBefore&&n<t.notBefore)return!1;try{if(!t.address||r&&!eE.isEqual(t.address,r))return!1}catch{return!1}return!0}class n8 extends eB.BaseError{constructor(e){let{field:r,metaMessages:a}=e;super(`Invalid Sign-In with Ethereum message field "${r}".`,{metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Siwe.InvalidMessageFieldError"})}}var n6=a(6797);function n4(e){let r={};for(let[a,t]of Object.entries(e)){let e={};t.balance&&(e.balance=BigInt(t.balance)),t.code&&(e.code=t.code),t.movePrecompileToAddress&&(e.movePrecompileToAddress=t.movePrecompileToAddress),t.nonce&&(e.nonce=BigInt(t.nonce)),t.state&&(e.state=t.state),t.stateDiff&&(e.stateDiff=t.stateDiff),r[a]=e}return r}function n9(e){let r={};for(let[a,t]of Object.entries(e)){let e={};"bigint"==typeof t.balance&&(e.balance=ef.fromNumber(t.balance)),t.code&&(e.code=t.code),t.movePrecompileToAddress&&(e.movePrecompileToAddress=t.movePrecompileToAddress),"bigint"==typeof t.nonce&&(e.nonce=ef.fromNumber(t.nonce)),t.state&&(e.state=t.state),t.stateDiff&&(e.stateDiff=t.stateDiff),r[a]=e}return r}let n7={"0x0":"reverted","0x1":"success"},se={reverted:"0x0",success:"0x1"},sr={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"},sa={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3",eip7702:"0x4"};function st(e){return e?{...e,blobGasPrice:e.blobGasPrice?BigInt(e.blobGasPrice):void 0,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,blockNumber:BigInt(e.blockNumber??0n),cumulativeGasUsed:BigInt(e.cumulativeGasUsed??0n),effectiveGasPrice:BigInt(e.effectiveGasPrice??0n),gasUsed:BigInt(e.gasUsed??0n),logs:e.logs.map(e=>iz(e,{pending:!1})),status:n7[e.status],transactionIndex:Number(e.transactionIndex??0),type:sr[e.type]||e.type}:null}function so(e){return{blobGasPrice:e.blobGasPrice?ef.fromNumber(e.blobGasPrice):void 0,blobGasUsed:e.blobGasUsed?ef.fromNumber(e.blobGasUsed):void 0,blockHash:e.blockHash,blockNumber:ef.fromNumber(e.blockNumber),contractAddress:e.contractAddress,cumulativeGasUsed:ef.fromNumber(e.cumulativeGasUsed),effectiveGasPrice:ef.fromNumber(e.effectiveGasPrice),from:e.from,gasUsed:ef.fromNumber(e.gasUsed),logs:e.logs.map(iE),logsBloom:e.logsBloom,root:e.root,status:se[e.status],to:e.to,transactionHash:e.transactionHash,transactionIndex:ef.fromNumber(e.transactionIndex),type:sa[e.type]??e.type}}function si(e){return void 0!==e.authorizationList&&(e.authorizationList=eQ.fromRpcList(e.authorizationList)),void 0!==e.chainId&&(e.chainId=ef.toNumber(e.chainId)),void 0!==e.gas&&(e.gas=ef.toBigInt(e.gas)),void 0!==e.gasPrice&&(e.gasPrice=ef.toBigInt(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(e.maxFeePerBlobGas=ef.toBigInt(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(e.maxFeePerGas=ef.toBigInt(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(e.maxPriorityFeePerGas=ef.toBigInt(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(e.nonce=ef.toBigInt(e.nonce)),void 0!==e.type&&(e.type=rJ[e.type]||e.type),void 0!==e.value&&(e.value=ef.toBigInt(e.value)),e}function sn(e){let r={};return void 0!==e.accessList&&(r.accessList=e.accessList),void 0!==e.authorizationList&&(r.authorizationList=eQ.toRpcList(e.authorizationList)),void 0!==e.blobVersionedHashes&&(r.blobVersionedHashes=e.blobVersionedHashes),void 0!==e.blobs&&(r.blobs=e.blobs),void 0!==e.chainId&&(r.chainId=ef.fromNumber(e.chainId)),void 0!==e.data?(r.data=e.data,r.input=e.data):void 0!==e.input&&(r.data=e.input,r.input=e.input),void 0!==e.from&&(r.from=e.from),void 0!==e.gas&&(r.gas=ef.fromNumber(e.gas)),void 0!==e.gasPrice&&(r.gasPrice=ef.fromNumber(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(r.maxFeePerBlobGas=ef.fromNumber(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(r.maxFeePerGas=ef.fromNumber(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(r.maxPriorityFeePerGas=ef.fromNumber(e.maxPriorityFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(r.maxPriorityFeePerGas=ef.fromNumber(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(r.nonce=ef.fromNumber(e.nonce)),void 0!==e.to&&(r.to=e.to),void 0!==e.type&&(r.type=rX[e.type]||e.type),void 0!==e.value&&(r.value=ef.fromNumber(e.value)),r}let ss={wei:0,gwei:9,szabo:12,finney:15,ether:18};function sl(e,r=0){let a=e.toString(),t=a.startsWith("-");t&&(a=a.slice(1));let[o,i]=[(a=a.padStart(r,"0")).slice(0,a.length-r),a.slice(a.length-r)];return i=i.replace(/(0+)$/,""),`${t?"-":""}${o||"0"}${i?`.${i}`:""}`}function sc(e,r="wei"){return sl(e,ss.ether-ss[r])}function su(e,r="wei"){return sl(e,ss.gwei-ss[r])}function sd(e,r=0){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new sp({value:e});let[a="",t="0"]=e.split("."),o=a.startsWith("-");if(o&&(a=a.slice(1)),t=t.replace(/(0+)$/,""),0===r)1===Math.round(Number(`.${t}`))&&(a=`${BigInt(a)+1n}`),t="";else if(t.length>r){let[e,o,i]=[t.slice(0,r-1),t.slice(r-1,r),t.slice(r)],n=Math.round(Number(`${o}.${i}`));(t=n>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${n}`).length>r&&(t=t.slice(1),a=`${BigInt(a)+1n}`),t=t.slice(0,r)}else t=t.padEnd(r,"0");return BigInt(`${o?"-":""}${a}${t}`)}function sf(e,r="wei"){return sd(e,ss.ether-ss[r])}function sm(e,r="wei"){return sd(e,ss.gwei-ss[r])}class sp extends eB.BaseError{constructor({value:e}){super(`Value \`${e}\` is not a valid decimal number.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Value.InvalidDecimalNumberError"})}}class sb extends eB.BaseError{constructor({feeCap:e}={}){super(`The fee cap (\`maxFeePerGas\`/\`maxPriorityFeePerGas\`${e?` = ${su(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionEnvelope.FeeCapTooHighError"})}}class sg extends eB.BaseError{constructor({gasPrice:e}={}){super(`The gas price (\`gasPrice\`${e?` = ${su(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionEnvelope.GasPriceTooHighError"})}}class sh extends eB.BaseError{constructor({chainId:e}){super(void 0!==e?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionEnvelope.InvalidChainIdError"})}}class sv extends eB.BaseError{constructor({attributes:e,serialized:r,type:a}){let t=Object.entries(e).map(([e,r])=>void 0===r?e:void 0).filter(Boolean);super(`Invalid serialized transaction of type "${a}" was provided.`,{metaMessages:[`Serialized Transaction: "${r}"`,t.length>0?`Missing Attributes: ${t.join(", ")}`:""].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionEnvelope.InvalidSerializedError"})}}class sy extends eB.BaseError{constructor({maxPriorityFeePerGas:e,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${su(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${su(r)} gwei`:""}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionEnvelope.TipAboveFeeCapError"})}}let sx="0x02",sk="eip1559";function sw(e){let{chainId:r,maxPriorityFeePerGas:a,maxFeePerGas:t,to:o}=e;if(r<=0)throw new sh({chainId:r});if(o&&eE.assert(o,{strict:!1}),t&&BigInt(t)>2n**256n-1n)throw new sb({feeCap:t});if(a&&t&&a>t)throw new sy({maxFeePerGas:t,maxPriorityFeePerGas:a})}function sz(e){let r=tn.toHex(ef.slice(e,1)),[a,t,o,i,n,s,l,c,u,d,f,m]=r;if(!(9===r.length||12===r.length))throw new sv({attributes:{chainId:a,nonce:t,maxPriorityFeePerGas:o,maxFeePerGas:i,gas:n,to:s,value:l,data:c,accessList:u,...r.length>9?{yParity:d,r:f,s:m}:{}},serialized:e,type:sk});let p={chainId:Number(a),type:sk};ef.validate(s)&&"0x"!==s&&(p.to=s),ef.validate(n)&&"0x"!==n&&(p.gas=BigInt(n)),ef.validate(c)&&"0x"!==c&&(p.data=c),ef.validate(t)&&(p.nonce="0x"===t?0n:BigInt(t)),ef.validate(l)&&"0x"!==l&&(p.value=BigInt(l)),ef.validate(i)&&"0x"!==i&&(p.maxFeePerGas=BigInt(i)),ef.validate(o)&&"0x"!==o&&(p.maxPriorityFeePerGas=BigInt(o)),0!==u.length&&"0x"!==u&&(p.accessList=e$(u));let b=f&&m&&d?rY.fromTuple([d,f,m]):void 0;return b&&(p={...p,...b}),sw(p),p}function sE(e,r={}){let{signature:a}=r,t="string"==typeof e?sz(e):e;return sw(t),{...t,...a?rY.from(a):{},type:"eip1559"}}function sj(e){return sB(e,{presign:!0})}function sB(e,r={}){let{presign:a}=r;return eP.keccak256(sP({...e,...a?{r:void 0,s:void 0,yParity:void 0,v:void 0}:{}}))}function sP(e,r={}){let{chainId:a,gas:t,nonce:o,to:i,value:n,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,data:u,input:d}=e;sw(e);let f=eV(c),m=rY.extract(r.signature||e),p=[ef.fromNumber(a),o?ef.fromNumber(o):"0x",l?ef.fromNumber(l):"0x",s?ef.fromNumber(s):"0x",t?ef.fromNumber(t):"0x",i??"0x",n?ef.fromNumber(n):"0x",u??d??"0x",f,...m?rY.toTuple(m):[]];return ef.concat(sx,tn.fromHex(p))}function sI(e){let r=rY.extract(e);return{...e,chainId:ef.fromNumber(e.chainId),data:e.data??e.input,type:"0x2",..."bigint"==typeof e.gas?{gas:ef.fromNumber(e.gas)}:{},..."bigint"==typeof e.nonce?{nonce:ef.fromNumber(e.nonce)}:{},..."bigint"==typeof e.value?{value:ef.fromNumber(e.value)}:{},..."bigint"==typeof e.maxFeePerGas?{maxFeePerGas:ef.fromNumber(e.maxFeePerGas)}:{},..."bigint"==typeof e.maxPriorityFeePerGas?{maxPriorityFeePerGas:ef.fromNumber(e.maxPriorityFeePerGas)}:{},...r?rY.toRpc(r):{}}}function sO(e){try{return sw(e),!0}catch{return!1}}let sA="0x01",sS="eip2930";function sq(e){let{chainId:r,gasPrice:a,to:t}=e;if(r<=0)throw new sh({chainId:r});if(t&&eE.assert(t,{strict:!1}),a&&BigInt(a)>2n**256n-1n)throw new sg({gasPrice:a})}function sR(e){let r=tn.toHex(ef.slice(e,1)),[a,t,o,i,n,s,l,c,u,d,f]=r;if(!(8===r.length||11===r.length))throw new sv({attributes:{chainId:a,nonce:t,gasPrice:o,gas:i,to:n,value:s,data:l,accessList:c,...r.length>8?{yParity:u,r:d,s:f}:{}},serialized:e,type:sS});let m={chainId:Number(a),type:sS};ef.validate(n)&&"0x"!==n&&(m.to=n),ef.validate(i)&&"0x"!==i&&(m.gas=BigInt(i)),ef.validate(l)&&"0x"!==l&&(m.data=l),ef.validate(t)&&(m.nonce="0x"===t?0n:BigInt(t)),ef.validate(s)&&"0x"!==s&&(m.value=BigInt(s)),ef.validate(o)&&"0x"!==o&&(m.gasPrice=BigInt(o)),0!==c.length&&"0x"!==c&&(m.accessList=e$(c));let p=d&&f&&u?rY.fromTuple([u,d,f]):void 0;return p&&(m={...m,...p}),sq(m),m}function sN(e,r={}){let{signature:a}=r,t="string"==typeof e?sR(e):e;return sq(t),{...t,...a?rY.from(a):{},type:"eip2930"}}function sU(e){return sT(e,{presign:!0})}function sT(e,r={}){let{presign:a}=r;return eP.keccak256(sH({...e,...a?{r:void 0,s:void 0,yParity:void 0,v:void 0}:{}}))}function sH(e,r={}){let{chainId:a,gas:t,data:o,input:i,nonce:n,to:s,value:l,accessList:c,gasPrice:u}=e;sq(e);let d=eV(c),f=rY.extract(r.signature||e),m=[ef.fromNumber(a),n?ef.fromNumber(n):"0x",u?ef.fromNumber(u):"0x",t?ef.fromNumber(t):"0x",s??"0x",l?ef.fromNumber(l):"0x",o??i??"0x",d,...f?rY.toTuple(f):[]];return ef.concat("0x01",tn.fromHex(m))}function sG(e){let r=rY.extract(e);return{...e,chainId:ef.fromNumber(e.chainId),data:e.data??e.input,..."bigint"==typeof e.gas?{gas:ef.fromNumber(e.gas)}:{},..."bigint"==typeof e.nonce?{nonce:ef.fromNumber(e.nonce)}:{},..."bigint"==typeof e.value?{value:ef.fromNumber(e.value)}:{},..."bigint"==typeof e.gasPrice?{gasPrice:ef.fromNumber(e.gasPrice)}:{},type:"0x1",...r?rY.toRpc(r):{}}}function sK(e){try{return sq(e),!0}catch{return!1}}let sC="0x03",sF="eip4844";function sL(e){let{blobVersionedHashes:r}=e;if(r){if(0===r.length)throw new r_;for(let e of r){let r=ef.size(e),a=ef.toNumber(ef.slice(e,0,1));if(32!==r)throw new rM({hash:e,size:r});if(a!==rP)throw new rZ({hash:e,version:a})}}sw(e)}function sD(e){let r=tn.toHex(ef.slice(e,1)),a=4===r.length,t=a?r[0]:r,o=a?r.slice(1):[],[i,n,s,l,c,u,d,f,m,p,b,g,h,v]=t,[y,x,k]=o;if(!(11===t.length||14===t.length))throw new sv({attributes:{chainId:i,nonce:n,maxPriorityFeePerGas:s,maxFeePerGas:l,gas:c,to:u,value:d,data:f,accessList:m,...t.length>9?{yParity:g,r:h,s:v}:{}},serialized:e,type:sF});let w={blobVersionedHashes:b,chainId:Number(i),type:sF};ef.validate(u)&&"0x"!==u&&(w.to=u),ef.validate(c)&&"0x"!==c&&(w.gas=BigInt(c)),ef.validate(f)&&"0x"!==f&&(w.data=f),ef.validate(n)&&(w.nonce="0x"===n?0n:BigInt(n)),ef.validate(d)&&"0x"!==d&&(w.value=BigInt(d)),ef.validate(p)&&"0x"!==p&&(w.maxFeePerBlobGas=BigInt(p)),ef.validate(l)&&"0x"!==l&&(w.maxFeePerGas=BigInt(l)),ef.validate(s)&&"0x"!==s&&(w.maxPriorityFeePerGas=BigInt(s)),m?.length!==0&&"0x"!==m&&(w.accessList=e$(m)),y&&x&&k&&(w.sidecars=rL(y,{commitments:x,proofs:k}));let z=h&&v&&g?rY.fromTuple([g,h,v]):void 0;return z&&(w={...w,...z}),sL(w),w}function s$(e,r={}){let{signature:a}=r,t="string"==typeof e?sD(e):e;return sL(t),{...t,...a?rY.from(a):{},type:"eip4844"}}function sV(e){return s_(e,{presign:!0})}function s_(e,r={}){let{presign:a}=r;return eP.keccak256(sM({...e,...a?{sidecars:void 0,r:void 0,s:void 0,yParity:void 0,v:void 0}:{}}))}function sM(e,r={}){let{blobVersionedHashes:a,chainId:t,gas:o,nonce:i,to:n,value:s,maxFeePerBlobGas:l,maxFeePerGas:c,maxPriorityFeePerGas:u,accessList:d,data:f}=e;sL(e);let m=eV(d),p=rY.extract(r.signature||e),b=[ef.fromNumber(t),i?ef.fromNumber(i):"0x",u?ef.fromNumber(u):"0x",c?ef.fromNumber(c):"0x",o?ef.fromNumber(o):"0x",n??"0x",s?ef.fromNumber(s):"0x",f??"0x",m,l?ef.fromNumber(l):"0x",a??[],...p?rY.toTuple(p):[]],g=r.sidecars||e.sidecars,h=[],v=[],y=[];if(g)for(let e=0;e<g.length;e++){let{blob:r,commitment:a,proof:t}=g[e];h.push(r),v.push(a),y.push(t)}return ef.concat("0x03",g?tn.fromHex([b,h,v,y]):tn.fromHex(b))}function sZ(e){let r=rY.extract(e);return{...e,chainId:ef.fromNumber(e.chainId),data:e.data??e.input,..."bigint"==typeof e.gas?{gas:ef.fromNumber(e.gas)}:{},..."bigint"==typeof e.nonce?{nonce:ef.fromNumber(e.nonce)}:{},..."bigint"==typeof e.value?{value:ef.fromNumber(e.value)}:{},..."bigint"==typeof e.maxFeePerBlobGas?{maxFeePerBlobGas:ef.fromNumber(e.maxFeePerBlobGas)}:{},..."bigint"==typeof e.maxFeePerGas?{maxFeePerGas:ef.fromNumber(e.maxFeePerGas)}:{},..."bigint"==typeof e.maxPriorityFeePerGas?{maxPriorityFeePerGas:ef.fromNumber(e.maxPriorityFeePerGas)}:{},type:"0x3",...r?rY.toRpc(r):{}}}function sY(e){try{return sL(e),!0}catch{return!1}}let sX="0x04",sJ="eip7702";function sQ(e){let{authorizationList:r}=e;if(r)for(let e of r){let{address:r,chainId:a}=e;if(r&&eE.assert(r,{strict:!1}),0>Number(a))throw new sh({chainId:a})}sw(e)}function sW(e){let r=tn.toHex(ef.slice(e,1)),[a,t,o,i,n,s,l,c,u,d,f,m,p]=r;if(!(10===r.length||13===r.length))throw new sv({attributes:{chainId:a,nonce:t,maxPriorityFeePerGas:o,maxFeePerGas:i,gas:n,to:s,value:l,data:c,accessList:u,authorizationList:d,...r.length>9?{yParity:f,r:m,s:p}:{}},serialized:e,type:sJ});let b={chainId:Number(a),type:sJ};ef.validate(s)&&"0x"!==s&&(b.to=s),ef.validate(n)&&"0x"!==n&&(b.gas=BigInt(n)),ef.validate(c)&&"0x"!==c&&(b.data=c),ef.validate(t)&&(b.nonce="0x"===t?0n:BigInt(t)),ef.validate(l)&&"0x"!==l&&(b.value=BigInt(l)),ef.validate(i)&&"0x"!==i&&(b.maxFeePerGas=BigInt(i)),ef.validate(o)&&"0x"!==o&&(b.maxPriorityFeePerGas=BigInt(o)),0!==u.length&&"0x"!==u&&(b.accessList=e$(u)),"0x"!==d&&(b.authorizationList=eQ.fromTupleList(d));let g=m&&p&&f?rY.fromTuple([f,m,p]):void 0;return g&&(b={...b,...g}),sQ(b),b}function s0(e,r={}){let{signature:a}=r,t="string"==typeof e?sW(e):e;return sQ(t),{...t,...a?rY.from(a):{},type:"eip7702"}}function s1(e){return s2(e,{presign:!0})}function s2(e,r={}){let{presign:a}=r;return eP.keccak256(s3({...e,...a?{r:void 0,s:void 0,yParity:void 0}:{}}))}function s3(e,r={}){let{authorizationList:a,chainId:t,gas:o,nonce:i,to:n,value:s,maxFeePerGas:l,maxPriorityFeePerGas:c,accessList:u,data:d,input:f}=e;sQ(e);let m=eV(u),p=eQ.toTupleList(a),b=rY.extract(r.signature||e),g=[ef.fromNumber(t),i?ef.fromNumber(i):"0x",c?ef.fromNumber(c):"0x",l?ef.fromNumber(l):"0x",o?ef.fromNumber(o):"0x",n??"0x",s?ef.fromNumber(s):"0x",d??f??"0x",m,p,...b?rY.toTuple(b):[]];return ef.concat(sX,tn.fromHex(g))}function s5(e){try{return sQ(e),!0}catch{return!1}}let s8="legacy";function s6(e){let{chainId:r,gasPrice:a,to:t}=e;if(t&&eE.assert(t,{strict:!1}),void 0!==r&&r<=0)throw new sh({chainId:r});if(a&&BigInt(a)>2n**256n-1n)throw new sg({gasPrice:a})}function s4(e){let r=tn.toHex(e),[a,t,o,i,n,s,l,c,u]=r;if(!(6===r.length||9===r.length))throw new sv({attributes:{nonce:a,gasPrice:t,gas:o,to:i,value:n,data:s,...r.length>6?{v:l,r:c,s:u}:{}},serialized:e,type:s8});let d={type:s8};if(ef.validate(i)&&"0x"!==i&&(d.to=i),ef.validate(o)&&"0x"!==o&&(d.gas=BigInt(o)),ef.validate(s)&&"0x"!==s&&(d.data=s),ef.validate(a)&&(d.nonce="0x"===a?0n:BigInt(a)),ef.validate(n)&&"0x"!==n&&(d.value=BigInt(n)),ef.validate(t)&&"0x"!==t&&(d.gasPrice=BigInt(t)),6===r.length)return d;let f=ef.validate(l)&&"0x"!==l?Number(l):0;if("0x"===u&&"0x"===c)return f>0&&(d.chainId=Number(f)),d;let m=Math.floor((f-35)/2);if(m>0)d.chainId=m;else if(27!==f&&28!==f)throw new rY.InvalidVError({value:f});return d.yParity=rY.vToYParity(f),d.v=f,d.s="0x"===u?0n:BigInt(u),d.r="0x"===c?0n:BigInt(c),s6(d),d}function s9(e,r={}){let{signature:a}=r,t="string"==typeof e?s4(e):e;s6(t);let o=(()=>{if(!a)return{};let e=rY.from(a);return e.v=rY.yParityToV(e.yParity),e})();return{...t,...o,type:"legacy"}}function s7(e){return le(e,{presign:!0})}function le(e,r={}){let{presign:a}=r;return eP.keccak256(lr({...e,...a?{r:void 0,s:void 0,yParity:void 0,v:void 0}:{}}))}function lr(e,r={}){let{chainId:a=0,gas:t,data:o,input:i,nonce:n,to:s,value:l,gasPrice:c}=e;s6(e);let u=[n?ef.fromNumber(n):"0x",c?ef.fromNumber(c):"0x",t?ef.fromNumber(t):"0x",s??"0x",l?ef.fromNumber(l):"0x",o??i??"0x"],d=r.signature?{r:r.signature.r,s:r.signature.s,v:rY.yParityToV(r.signature.yParity)}:void 0!==e.r&&void 0!==e.s?{r:e.r,s:e.s,v:e.v}:void 0;if(d){let e=(()=>{if(d.v>=35)return Math.floor((d.v-35)/2)>0?d.v:27+(35===d.v?0:1);if(a>0)return 2*a+35+d.v-27;let e=27+(27===d.v?0:1);if(d.v!==e)throw new rY.InvalidVError({value:d.v});return e})();u=[...u,ef.fromNumber(e),0n===d.r?"0x":ef.trimLeft(ef.fromNumber(d.r)),0n===d.s?"0x":ef.trimLeft(ef.fromNumber(d.s))]}else a>0&&(u=[...u,ef.fromNumber(a),"0x","0x"]);return tn.fromHex(u)}function la(e){let r=rY.extract(e);return{...e,chainId:"number"==typeof e.chainId?ef.fromNumber(e.chainId):void 0,data:e.data??e.input,type:"0x0",..."bigint"==typeof e.gas?{gas:ef.fromNumber(e.gas)}:{},..."bigint"==typeof e.nonce?{nonce:ef.fromNumber(e.nonce)}:{},..."bigint"==typeof e.value?{value:ef.fromNumber(e.value)}:{},..."bigint"==typeof e.gasPrice?{gasPrice:ef.fromNumber(e.gasPrice)}:{},...r?{...rY.toRpc(r),v:0===r.yParity?"0x1b":"0x1c"}:{}}}function lt(e){try{return s6(e),!0}catch{return!1}}function lo(e){let{domain:r,message:a,primaryType:t,types:o}=e,i=(e,r)=>{for(let a of e){let{name:e,type:t}=a,n=r[e],s=t.match(n6.integerRegex);if(s&&("number"==typeof n||"bigint"==typeof n)){let[,e,r]=s;ef.fromNumber(n,{signed:"int"===e,size:Number.parseInt(r??"",10)/8})}if("address"===t&&"string"==typeof n&&!eE.validate(n))throw new eE.InvalidAddressError({address:n,cause:new eE.InvalidInputError});let l=t.match(n6.bytesRegex);if(l){let[,e]=l;if(e&&ef.size(n)!==Number.parseInt(e,10))throw new lp({expectedSize:Number.parseInt(e,10),givenSize:ef.size(n)})}let c=o[t];c&&(function(e){if("address"===e||"bool"===e||"string"===e||e.startsWith("bytes")||e.startsWith("uint")||e.startsWith("int"))throw new lh({type:e})}(t),i(c,n))}};if(o.EIP712Domain&&r){if("object"!=typeof r)throw new lb({domain:r});i(o.EIP712Domain,r)}if("EIP712Domain"!==t){if(o[t])i(o[t],a);else throw new lg({primaryType:t,types:o})}}function li(e){return lu({domain:e})}function ln(e){let{domain:r={},message:a,primaryType:t}=e,o={EIP712Domain:ll(r),...e.types};lo({domain:r,message:a,primaryType:t,types:o});let i=["0x19","0x01"];return r&&i.push(lu({domain:r,types:o})),"EIP712Domain"!==t&&i.push(ld({data:a,primaryType:t,types:o})),ef.concat(...i)}function ls(e){let{primaryType:r,types:a}=e,t="",o=lk({primaryType:r,types:a});for(let e of(o.delete(r),[r,...Array.from(o).sort()]))t+=`${e}(${(a[e]??[]).map(({name:e,type:r})=>`${r} ${e}`).join(",")})`;return t}function ll(e){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},("number"==typeof e?.chainId||"bigint"==typeof e?.chainId)&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}function lc(e){return eP.keccak256(ln(e))}function lu(e){let{domain:r,types:a}=e;return ld({data:r,primaryType:"EIP712Domain",types:{...a,EIP712Domain:a?.EIP712Domain||ll(r)}})}function ld(e){let{data:r,primaryType:a,types:t}=e,o=lv({data:r,primaryType:a,types:t});return eP.keccak256(o)}function lf(e){let{domain:r,message:a,primaryType:t,types:o}=e,i=(e,r)=>{let a={...r};for(let r of e){let{name:e,type:t}=r;"address"===t&&(a[e]=a[e].toLowerCase())}return a},n=r?i(o.EIP712Domain??ll(r),r):{},s=(()=>{if("EIP712Domain"!==t)return o[t]?i(o[t],a):{}})();return oN.stringify({domain:n,message:s,primaryType:t,types:o},(e,r)=>"bigint"==typeof r?r.toString():r)}function lm(e){try{return lo(e),!0}catch{return!1}}class lp extends eB.BaseError{constructor({expectedSize:e,givenSize:r}){super(`Expected bytes${e}, got bytes${r}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TypedData.BytesSizeMismatchError"})}}class lb extends eB.BaseError{constructor({domain:e}){super(`Invalid domain "${oN.stringify(e)}".`,{metaMessages:["Must be a valid EIP-712 domain."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TypedData.InvalidDomainError"})}}class lg extends eB.BaseError{constructor({primaryType:e,types:r}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(r))}\`.`,{metaMessages:["Check that the primary type is a key in `types`."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TypedData.InvalidPrimaryTypeError"})}}class lh extends eB.BaseError{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:["Struct type must not be a Solidity type."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TypedData.InvalidStructTypeError"})}}function lv(e){let{data:r,primaryType:a,types:t}=e,o=[{type:"bytes32"}],i=[ly({primaryType:a,types:t})];for(let e of t[a]??[]){let[a,n]=lx({types:t,name:e.name,type:e.type,value:r[e.name]});o.push(a),i.push(n)}return ed.encode(o,i)}function ly(e){let{primaryType:r,types:a}=e,t=ef.fromString(ls({primaryType:r,types:a}));return eP.keccak256(t)}function lx(e){let{types:r,name:a,type:t,value:o}=e;if(void 0!==r[t])return[{type:"bytes32"},eP.keccak256(lv({data:o,primaryType:t,types:r}))];if("bytes"===t){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},eP.keccak256(o,{as:"Hex"})]}if("string"===t)return[{type:"bytes32"},eP.keccak256(ej.fromString(o),{as:"Hex"})];if(t.lastIndexOf("]")===t.length-1){let e=t.slice(0,t.lastIndexOf("[")),i=o.map(t=>lx({name:a,type:e,types:r,value:t}));return[{type:"bytes32"},eP.keccak256(ed.encode(i.map(([e])=>e),i.map(([,e])=>e)))]}return[{type:t},o]}function lk(e,r=new Set){let{primaryType:a,types:t}=e,o=a.match(/^\w*/u),i=o?.[0];if(r.has(i)||void 0===t[i])return r;for(let e of(r.add(i),t[i]))lk({primaryType:e.type,types:t},r);return r}function lw(e){let{data:r,validator:a}=e;return ef.concat("0x19","0x00",a,ef.from(r))}function lz(e){return eP.keccak256(lw(e))}async function lE(e){try{let r=e.getPublicKey();if(!r)throw new lN;let a=new Uint8Array(r),t=await crypto.subtle.importKey("spki",new Uint8Array(a),{name:"ECDSA",namedCurve:"P-256",hash:"SHA-256"},!0,["verify"]),o=new Uint8Array(await crypto.subtle.exportKey("raw",t));return oy.from(o)}catch(i){if("Permission denied to access object"!==i.message)throw i;let r=new Uint8Array(e.attestationObject),a=e=>{let a=new Uint8Array([e,88,32]);for(let e=0;e<r.length-a.length;e++)if(a.every((a,t)=>r[e+t]===a))return e+a.length;throw new lN},t=a(33),o=a(34);return oy.from(new Uint8Array([4,...r.slice(t,t+32),...r.slice(o,o+32)]))}}let lj=Uint8Array.from([105,171,180,181,160,222,75,198,42,42,32,31,141,37,186,233]);async function lB(e){let{createFn:r=window.navigator.credentials.create.bind(window.navigator.credentials),...a}=e,t=lO(a);try{let e=await r(t);if(!e)throw new lN;let a=e.response,o=await lE(a);return{id:e.id,publicKey:o,raw:e}}catch(e){throw new lN({cause:e})}}function lP(e={}){let{flag:r=5,rpId:a=window.location.hostname,signCount:t=0}=e,o=eP.sha256(ef.fromString(a)),i=ef.fromNumber(r,{size:1}),n=ef.fromNumber(t,{size:4});return ef.concat(o,i,n)}function lI(e){let{challenge:r,crossOrigin:a=!1,extraClientData:t,origin:o=window.location.origin}=e;return JSON.stringify({type:"webauthn.get",challenge:ra(r,{url:!0,pad:!1}),origin:o,crossOrigin:a,...t})}function lO(e){let{attestation:r="none",authenticatorSelection:a={residentKey:"preferred",requireResidentKey:!1,userVerification:"required"},challenge:t=lj,excludeCredentialIds:o,extensions:i,name:n,rp:s={id:window.location.hostname,name:window.document.title},user:l}=e,c=l?.name??n;return{publicKey:{attestation:r,authenticatorSelection:a,challenge:"string"==typeof t?ej.fromHex(t):t,...o?{excludeCredentials:o?.map(e=>({id:ro(e),type:"public-key"}))}:{},pubKeyCredParams:[{type:"public-key",alg:-7}],...i&&{extensions:i},rp:s,user:{id:l?.id??eP.keccak256(ej.fromString(c),{as:"Bytes"}),name:c,displayName:l?.displayName??c}}}}function lA(e){let{credentialId:r,challenge:a,extensions:t,rpId:o=window.location.hostname,userVerification:i="required"}=e;return{publicKey:{...r?{allowCredentials:Array.isArray(r)?r.map(e=>({id:ro(e),type:"public-key"})):[{id:ro(r),type:"public-key"}]}:{},challenge:ej.fromHex(a),...t&&{extensions:t},rpId:o,userVerification:i}}}function lS(e){let{challenge:r,crossOrigin:a,extraClientData:t,flag:o,origin:i,rpId:n,signCount:s,userVerification:l="required"}=e,c=lP({flag:o,rpId:n,signCount:s}),u=lI({challenge:r,crossOrigin:a,extraClientData:t,origin:i}),d=eP.sha256(ef.fromString(u)),f=u.indexOf('"challenge"'),m=u.indexOf('"type"'),p=ef.concat(c,d);return{metadata:{authenticatorData:c,clientDataJSON:u,challengeIndex:f,typeIndex:m,userVerificationRequired:"required"===l},payload:p}}async function lq(e){let{getFn:r=window.navigator.credentials.get.bind(window.navigator.credentials),...a}=e,t=lA(a);try{let e=await r(t);if(!e)throw new lU;let a=e.response,o=String.fromCharCode(...new Uint8Array(a.clientDataJSON)),i=o.indexOf('"challenge"'),n=o.indexOf('"type"'),s=function(e){let r=0===e[4]?5:4,a=r+32,t=0===e[a+2]?a+3:a+2,o=BigInt(ef.fromBytes(e.slice(r,a))),i=BigInt(ef.fromBytes(e.slice(t)));return{r:o,s:i>iJ.CURVE.n/2n?iJ.CURVE.n-i:i}}(new Uint8Array(a.signature));return{metadata:{authenticatorData:ef.fromBytes(new Uint8Array(a.authenticatorData)),clientDataJSON:o,challengeIndex:i,typeIndex:n,userVerificationRequired:"required"===t.publicKey.userVerification},signature:s,raw:e}}catch(e){throw new lU({cause:e})}}function lR(e){let{challenge:r,hash:a=!0,metadata:t,publicKey:o,signature:i}=e,{authenticatorData:n,challengeIndex:s,clientDataJSON:l,typeIndex:c,userVerificationRequired:u}=t,d=ej.fromHex(n);if(d.length<37)return!1;let f=d[32];if((1&f)!=1||u&&(4&f)!=4||(8&f)!=8&&(16&f)==16)return!1;if(void 0!==c){let e='"type":"webauthn.get"';if(e!==l.slice(Number(c),e.length+1))return!1}let m=void 0!==s?l.slice(Number(s)).match(/^"challenge":"(.*?)"/):l.match(/"challenge":"(.*?)"/);if(!m)return!1;let[p,b]=m;if(ef.fromBytes(ro(b))!==r)return!1;let g=eP.sha256(ej.fromString(l),{as:"Bytes"});return nr({hash:a,payload:ej.concat(d,g),publicKey:o,signature:i})}class lN extends eB.BaseError{constructor({cause:e}={}){super("Failed to create credential.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebAuthnP256.CredentialCreationFailedError"})}}class lU extends eB.BaseError{constructor({cause:e}={}){super("Failed to request credential.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebAuthnP256.CredentialRequestFailedError"})}}async function lT(e={}){let{extractable:r=!1}=e,a=await globalThis.crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},r,["sign","verify"]),t=await globalThis.crypto.subtle.exportKey("raw",a.publicKey),o=oy.from(new Uint8Array(t));return{privateKey:a.privateKey,publicKey:o}}async function lH(e={}){let{extractable:r=!1}=e,a=await globalThis.crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},r,["deriveKey","deriveBits"]),t=await globalThis.crypto.subtle.exportKey("raw",a.publicKey),o=oy.from(new Uint8Array(t));return{privateKey:a.privateKey,publicKey:o}}async function lG(e){let{as:r="Hex",privateKey:a,publicKey:t}=e;if("ECDSA"===a.algorithm.name)throw Error("privateKey is not compatible with ECDH. please use `createKeyPairECDH` to create an ECDH key.");let o=await globalThis.crypto.subtle.importKey("raw",oy.toBytes(t),{name:"ECDH",namedCurve:"P-256"},!1,[]),i=new Uint8Array(await globalThis.crypto.subtle.deriveBits({name:"ECDH",public:o},a,256));return"Hex"===r?ef.fromBytes(i):i}async function lK(e){let{payload:r,privateKey:a}=e,t=await globalThis.crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},a,ej.from(r)),o=ej.fromArray(new Uint8Array(t)),i=ej.toBigInt(ej.slice(o,0,32)),n=ej.toBigInt(ej.slice(o,32,64));return n>iJ.CURVE.n/2n&&(n=iJ.CURVE.n-n),{r:i,s:n}}async function lC(e){let{payload:r,signature:a}=e,t=await globalThis.crypto.subtle.importKey("raw",oy.toBytes(e.publicKey),{name:"ECDSA",namedCurve:"P-256"},!0,["verify"]);return await globalThis.crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},t,ej.concat(ej.fromNumber(a.r),ej.fromNumber(a.s)),ej.from(r))}let lF=tq;function lL(e={}){let{as:r="Hex"}=e,a=lV({as:r}),t=lD({privateKey:a,as:r});return{privateKey:a,publicKey:t}}function lD(e){let{as:r="Hex",privateKey:a}=e,t=ej.from(a),o=tq.getPublicKey(t);return"Hex"===r?ef.fromBytes(o):o}function l$(e){let{as:r="Hex",privateKey:a,publicKey:t}=e,o=ej.from(a),i=ej.from(t),n=tq.getSharedSecret(o,i);return"Hex"===r?ef.fromBytes(n):n}function lV(e={}){let{as:r="Hex"}=e,a=tq.utils.randomPrivateKey();return"Hex"===r?ef.fromBytes(a):a}}}]);