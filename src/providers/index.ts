import {streamModel as streamOss} from "./ossgpt"
import {streamModel as streamMeta} from "./meta"
import {streamModel as streamQwen} from "./qwen"

import type {ModelProvider} from "./types"
type providerName = "ossgpt"|"meta"|"qwen"
export const providers :Record<providerName,ModelProvider>={
    ossgpt:{
        name:"ossgpt",
        stream:streamOss
    },
    meta:{
        name:"meta",
        stream:streamMeta
    },
    qwen:{
        name:"qwen",
        stream:streamQwen
    }
}