<template>
  <div ref="scrollContainer" class="about-us">
    <div class="banner-body">
      <div class="slogan">
        <div class="title">魔思科技</div>
        <div class="sub-title">启于思而不止于思</div>
      </div>
    </div>
    <div class="tabs">
      <anchor-component :anchors="aboutUsAchor"></anchor-component>
    </div>
    <div id="compony-introduction" class="section content">
      <div class="header">
        <div class="title black">公司介绍</div>
        <div class="sub-title">COMPANY PROFILE</div>
      </div>
      <div class="content">
        <div class="content-text-img">
          <div class="text">
            <span class="text-first"
              >上海魔思信息科技有限公司立足于智能软件研发，聚焦虚拟现实、可视化管理、数字孪生、智慧城市等领域，为广大企业用户提供全生命周期的信息化建设服务，致力于打造To
              G、To B端的全方位智慧产业生态链。</span
            >
            <span
              >为满足各大中型企业管理不断升级的规范化、科学化、现代化建设需求，魔思科技深耕行业大数据应用管理软件的研发。经过多年的技术探索与经验积累，已为包括公安、银行、铁路、电信、金融、政府、教育、文化、移动互联网等多个行业用户提供了大数据分析应用解决方案。并主导参与了上海市公安局、中国银联、中国邮政储蓄银行、首都机场集团、太原铁路局、乌鲁木齐铁路局、上汽集团等多家企事业单位的智慧建设工作。</span
            >
          </div>
          <div class="img"></div>
        </div>
        <div class="content-text-end">
          魔思科技开创数据先行的研发思想，秉承以人为本的创新理念，坚持自研自创的科研精神，以过硬的技术实力和可靠的产品质量，获得了业界与客户的广泛认可。
        </div>
      </div>
    </div>
    <div id="news-information" class="section bg__black">
      <div class="header">
        <div class="title white">新闻动态</div>
        <div class="sub-title">NEWS INFORMATION</div>
      </div>
      <div class="news-list">
        <div class="news-item">
          <div class="img1"></div>
          <div class="title news-title">
            2018年11月上海首届进口博览会在国家会展中心圆满落幕，其中魔思参与...
          </div>
          <div class="other">
            <div class="time">2018-11-10</div>
            <!-- <div class="arrorw"></div> -->
          </div>
        </div>
        <div class="news-item">
          <div class="img2"></div>
          <div class="title news-title">
            为增进员工之间友谊、提升团队凝聚力，魔思于2019年6月远赴日本进行...
          </div>
          <div class="other">
            <div class="time">2019-06-11</div>
            <!-- <div class="arrorw"></div> -->
          </div>
        </div>
        <div class="news-item">
          <div class="img3"></div>
          <div class="title news-title">
            2019年年底，魔思开发的“新疆乌鲁木齐智慧铁路管理平台”在库尔勒公...
          </div>
          <div class="other">
            <div class="time">2019-12-22</div>
          </div>
        </div>
        <div class="news-item">
          <div class="img4"></div>
          <div class="title news-title">
            随着业务不断拓展，公司于2020年1月17日由原址：上海市宝山区呼兰西路...
          </div>
          <div class="other">
            <div class="time">2020-01-17</div>
          </div>
        </div>
      </div>
    </div>
    <div id="industry-information" class="section content">
      <div class="header">
        <div class="title black">行业资讯</div>
        <div class="sub-title">INDUSTRY INFORMATION</div>
      </div>
      <div class="industry-list">
        <div class="industry-item">
          <div class="item">
            <div class="title">DT时代来临 运营数据需要整理</div>
            <div class="info">
              “DT”是Data
              Technology英文单词的缩写，解释为“数据处理技术”。DT时代是在IT时代的迅速发展下，自然进化的发展趋势。
            </div>
          </div>
          <div class="item">
            <div class="title">建设智慧校园，如何做好校情质量分析</div>
            <div class="info">
              校情分析系统面向学校提供数据管理、报表分析、画像分析、统计查询分析、权限管理等功能，横向覆盖了学校各类数据信息和各部门的工作内容；纵向反映了各类数据信息的发展...
            </div>
          </div>
          <div class="item">
            <div class="title">商业智能的技术构成有哪些，听我来说一说</div>
            <div class="info">
              商业智能的概念最早是Gartner
              Group于1996年提出来的。当时将商业智能定义为一类由数据仓库（或数据集市）、查询报表、联机分析、数据挖掘、数据备份和恢复等部分组成的...
            </div>
          </div>
        </div>
        <div class="industry-item">
          <div class="item">
            <div class="title">AI弄潮，为什么我们需要智能BI平台</div>
            <div class="info">
              BI（Business
              Intelligence），即商业智能，指用现代数据仓库技术、线上分析处理技术、数据挖掘和数据展现技术进行数据分析以实现商业价值。它的概念本身就包含了智...
            </div>
          </div>
          <div class="item">
            <div class="title">
              2020年大数据趋势 ：人工智能大数据分析将包含可视化模型
            </div>
            <div class="info">
              企业决策正在经历的转变将延续到2020年。在2017年，处理大数据的目标使效率越来越高，成本不断减少，从而造就了基于大数据的商业智能，对中小企业甚至初创公司来说更为重要...
            </div>
          </div>
          <div class="item">
            <div class="title">决策支持系统做出更好的商业决策</div>
            <div class="info">
              决策支持系统(DSS)是一种交互式信息系统，它通过分析大量数据以做出明智的商业决策。决策支持系统通过评估不确定因素的重要性以及在决策过程中所涉及的权衡利弊。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
