## ems（能源管理）模块


### 包括components、containers基本文件夹，以及router（业务模块内部路由表）

1. components 文件内目录结构

```base
|——/components        ----模块内部公共组件
  |——/component1      ----公共组件1
    |——index.js
    |——index.less
  |——/component2      ----公共组件2
    |——index.js
    |——index.less
  |—— ...
```

2. containers 文件内目录结构

```base
|——/containers         ----业务节点页面(各个节点的基本页面)
  |——/container1       ----页面1
    |——index.js
    |——index.less
    |——/docs      ----页面接口文档
      |——api1.md   	
      |—— ...
  |——/container2       ----页面2
    |——index.js
    |——index.less
    |——/docs      ----页面接口文档
      |——api1.md   	
      |—— ...	
  |—— ...
```