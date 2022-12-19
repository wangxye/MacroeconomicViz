import React from 'react';
import { Tabs, Col, Row } from "antd";
import GDPChart from "../components/GDPChart";
import DistritPieChart from "../components/DistritPieChart";

import GDP from '../../data/GDP'
import DistrictGDP from '../../data/DistrictGDP'

const TabPane = Tabs.TabPane;

export default function () {
  return <Tabs
    tabPosition="left"
    defaultActiveKey="1"
    style={{ minHeight: 500 }}
  >
    <TabPane tab="浙江" key="1">
      <Row>
        <Col span={14}>
          <GDPChart city="浙江" data={GDP.Zhejiang} />

        </Col>
        <Col span={10}>
          <DistritPieChart
            title="浙江2021年各城市GDP分布图"
            data={DistrictGDP.Zhejiang}
          />
        </Col>
      </Row>
    </TabPane>
    <TabPane tab="宁波" key="2">
      <Row>
        <Col span={14}>
          <GDPChart
            city="宁波"
            data={GDP.Ningbo}
          />
        </Col>
        <Col span={10}>
          <DistritPieChart
            title="宁波2021年各县市GDP分布图"
            data={DistrictGDP.Ningbo}
          />
        </Col>
      </Row>
    </TabPane>

    <TabPane tab="杭州" key="3">
      <Row>
        <Col span={14}>
          <GDPChart
            city="杭州"
            data={GDP.Hangzhou}
          />
        </Col>
        <Col span={10}>
          <DistritPieChart
            title="杭州2021年各县市GDP分布图"
            data={DistrictGDP.Hangzhou}
          />
        </Col>
      </Row>
    </TabPane>


    <TabPane tab="温州" key="4">
      <Row>
        <Col span={14}>
          <GDPChart
            city="温州"
            data={GDP.Wenzhou}
          />
        </Col>
        <Col span={10}>
          <DistritPieChart
            title="温州2021年各县市GDP分布图"
            data={DistrictGDP.Wenzhou}
          />
        </Col>
      </Row>
    </TabPane>

  </Tabs >
}