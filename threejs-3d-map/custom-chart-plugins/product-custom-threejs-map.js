/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function ProductCustomThreejsMap({ dHelper }) {
  const svgIcon = `<svg t="1673167437061" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3663" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M854.14 230.42c-6.09-5.29-14.15-7.51-21.99-6.07l-195.2 35.84-49.86-17.11c-14.12-4.86-29.38 3.02-34.09 17.59-4.71 14.57 2.93 30.32 17.05 35.18l56.33 19.35c1.31 0.44 2.65 0.78 4 1.01V541.8L519 506.62c-6.13-1.95-12.8-0.37-17.49 4.13-4.7 4.5-6.71 11.25-5.28 17.7 1.43 6.45 6.08 11.62 12.21 13.57l121.95 38.74v232.58l-233.3-67.94V640.7c-0.47-9.89-8.37-17.65-17.96-17.65-9.59 0-17.49 7.76-17.96 17.65v105.15l-179.52 29.07v-523.3c0-9.93-5.13-19.11-13.46-24.07a26.184 26.184 0 0 0-26.93 0c-8.33 4.97-13.46 14.14-13.46 24.07v555.75c0 8.12 3.45 15.83 9.43 21.11 5.98 5.27 13.9 7.59 21.68 6.33l223.07-36.15 250.18 72.51c3.94 1.14 8.08 1.33 12.1 0.57l197.42-37.07c12.81-2.4 22.12-13.92 22.12-27.35V251.7c-0.03-8.21-3.56-16.01-9.66-21.28z m-44.23 288.6l-143.6 25.81V311.2l143.6-26.38v234.2z m-143.6 292.22V582.57l143.6-25.81v227.66l-143.6 26.82z m0 0" p-id="3664"></path><path d="M247.73 396.25c8.78 17.99 89.7 135.66 114.28 171.5 5.06 7.32 13.24 11.66 21.95 11.65 8.73-0.02 16.92-4.41 21.94-11.78 24.5-35.93 105.13-154.44 113.39-170.89 32.96-66.21 16.5-147.2-39.48-194.16-55.97-46.95-136.16-47.04-192.24-0.22-56.07 46.83-72.71 127.78-39.89 194.07l0.05-0.17z m135.89-172.38c34.19-0.23 66.03 17.96 84 47.98 17.97 30.02 19.49 67.53 4 98.99-4.69 8.79-45.42 70.01-87.78 132.36-38.86-56.73-82.88-121.99-88.04-131.92-7.04-14.05-10.78-29.61-10.91-45.42-0.03-27.06 10.35-53.02 28.87-72.18 18.52-19.16 43.65-29.94 69.86-29.97v0.16z m0 0" p-id="3665"></path><path d="M338.79 325.8c0 25.57 20.09 46.3 44.87 46.3 24.78 0 44.87-20.73 44.87-46.3 0-25.57-20.09-46.31-44.87-46.31-11.91-0.01-23.33 4.86-31.75 13.55-8.43 8.69-13.16 20.47-13.16 32.76h0.04z m0 0" p-id="3666"></path></svg>`;

  return {
    config: {
      datas: [
        {
          label: 'dimension',
          key: 'dimension',
          required: true,
          type: 'group',
        },
        {
          label: 'metrics',
          key: 'metrics',
          required: true,
          type: 'aggregate',
        },
        {
          label: 'filter',
          key: 'filter',
          type: 'filter',
          allowSameField: true,
        },
      ],
      styles: [
        {
          label: 'map.setting',
          key: 'setting',
          comType: 'group',
          rows: [
            {
              label: 'map.mapjson',
              key: 'mapjson',
              comType: 'input',
              default:
                'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
            },
          ],
        },
        {
          label: 'map.other',
          key: 'other',
          comType: 'group',
          rows: [
            {
              label: 'map.standard',
              key: 'standard',
              comType: 'input',
              default: 100,
            },
            {
              label: 'map.level',
              key: 'level',
              comType: 'inputNumber',
              default: 16,
            },
            {
              label: 'map.longitude',
              key: 'longitude',
              comType: 'inputNumber',
              default: 105.11,
            },
            {
              label: 'map.latitude',
              key: 'latitude',
              comType: 'inputNumber',
              default: 35.98,
            },
          ],
        },
      ],
      settings: [
        {
          label: 'viz.palette.setting.paging.title',
          key: 'paging',
          comType: 'group',
          rows: [
            {
              label: 'viz.palette.setting.paging.pageSize',
              key: 'pageSize',
              default: 1000,
              comType: 'inputNumber',
              options: {
                needRefresh: true,
                step: 1,
                min: 0,
              },
            },
          ],
        },
      ],
      i18ns: [
        {
          lang: 'zh-CN',
          translation: {
            chartName: '[Experiment] 自定义地图',
            map: {
              setting: '设置',
              mapjson: '地图',
              other: '其它',
              standard: '基准值',
              level: '缩放级别',
              longitude: '中心经度',
              latitude: '中心纬度',
            },
          },
        },
        {
          lang: 'en-US',
          translation: {
            chartName: '[Experiment] 自定义地图',
            map: {
              setting: 'setting',
              mapjson: 'mapjson',
              other: 'other',
              standard: 'standard',
              level: 'level',
              longitude: 'longitude',
              latitude: 'latitude',
            },
          },
        },
      ],
    },
    isISOContainer: 'product-custom-threejs-map',
    dependency: [
      'https://ossbao.oss-cn-qingdao.aliyuncs.com/datart/three/dumplingbao.3dmap.min.js',
      'https://ossbao.oss-cn-qingdao.aliyuncs.com/datart/three/dumplingbao.3dmap.min.css',
    ],
    meta: {
      id: 'product-custom-threejs-map',
      name: 'threejsMap',
      icon: svgIcon,
      requirements: [
        {
          group: 3,
          aggregate: 1,
        },
      ],
    },

    onMount(options, context) {
      if (!context.document) {
        return;
      }
      this.host = context.document.getElementById(options.containerId);
      // this.getOptions(context, options.dataset, options.config);
    },

    onUpdated(options, context) {
      if (!options.dataset || !options.dataset.columns || !options.config) {
        return;
      }
      if (this.chart) {
        this.chart.remove();
      }
      for (var i = this.host.children.length - 1; i >= 0; i--) {
        var childNode = this.host.childNodes[i];
        for (var j = childNode.children.length - 1; j >= 0; j--) {
          var childNode02 = childNode.childNodes[j];
          childNode.removeChild(childNode02);
        }
        this.host.removeChild(childNode);
      }
      if (this.host.children.length === 0) {
        this.getOptions(context, options.dataset, options.config);
      }
    },

    onUnMount() {},

    getOptions(context, dataset, config) {
      // 当前服务端返回的数据集
      const dataConfigs = config.datas || [];

      // 获取样式配置信息
      const styleConfigs = config.styles;

      // 数据转换，根据Datart提供了Helper转换工具, 转换为ChartDataSet模型
      const chartDataSet = dHelper.transformToDataSet(
        dataset.rows,
        dataset.columns,
        dataConfigs,
      );

      // 获取用户配置
      const mapJson = dHelper.getValue(styleConfigs, ['setting', 'mapjson']);
      // 获取用户配置
      const standard = dHelper.getValue(styleConfigs, ['other', 'standard']);
      // 获取用户配置
      const level = dHelper.getValue(styleConfigs, ['other', 'level']);
      // 获取用户配置
      const longitude = dHelper.getValue(styleConfigs, ['other', 'longitude']);
      // 获取用户配置
      const latitude = dHelper.getValue(styleConfigs, ['other', 'latitude']);

      const groupConfigs = dataConfigs
        .filter(c => c.type === 'group')
        .flatMap(config => config.rows || []);
      const aggregateConfigs = dataConfigs
        .filter(c => c.type === 'aggregate')
        .flatMap(config => config.rows || []);

      if (groupConfigs.length > 0 && aggregateConfigs.length > 0) {
        let dataTree = [];
        chartDataSet.map(row => {
          const val = row.getCell(aggregateConfigs[0]);
          if (val !== '' && val !== null) {
            dataTree.push({
              city: row.getCell(groupConfigs[0]),
              value: parseFloat(row.getCell(aggregateConfigs[0])),
              EN: [
                parseFloat(row.getCell(groupConfigs[1])),
                parseFloat(row.getCell(groupConfigs[2])),
              ],
            });
          }
        });

        this.chart = new context.window.dumplingbaoThree.Map(
          this.host,
          {
            data: {
              cityData: dataTree,
            },
          },
          {
            config: {
              mapJson: mapJson,
              valueMax: parseFloat(standard),
              level: parseFloat(level),
              longitude: parseFloat(longitude),
              latitude: parseFloat(latitude),
            },
          },
        );
      }
    },
  };
}
