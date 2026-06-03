// ==================== 小挑战数据 ====================

const entrepreneurChallenges = [
    {
        title: '每日商业洞察',
        description: '今天观察一个你感兴趣的店铺或服务，思考它是如何盈利的，目标客户是谁，竞争优势在哪里。',
        time: '15-30分钟',
        difficulty: '入门'
    },
    {
        title: '低成本实验',
        description: '尝试用最小成本测试一个创业想法，比如在社交媒体发布相关内容，观察反馈。',
        time: '1-2小时',
        difficulty: '进阶'
    },
    {
        title: '商业模式画布',
        description: '选择一个你喜欢的APP或服务，尝试画出它的商业模式画布，理解其价值主张和收入来源。',
        time: '1小时',
        difficulty: '入门'
    },
    {
        title: '用户访谈模拟',
        description: '找一个朋友，假设他是你的潜在用户，练习向他介绍你的产品理念并收集反馈。',
        time: '30分钟',
        difficulty: '进阶'
    },
    {
        title: '失败案例分析',
        description: '研究一个失败的创业案例，分析它失败的原因，如果是你会如何避免。',
        time: '2小时',
        difficulty: '精通'
    },
    {
        title: '资源盘点',
        description: '列出你目前拥有的所有资源：技能、人脉、资金、信息等，思考如何整合利用。',
        time: '1小时',
        difficulty: '入门'
    },
    {
        title: '快速原型制作',
        description: '用手绘或PPT制作一个产品原型，不需要完美，只需要能表达核心想法。',
        time: '2-3小时',
        difficulty: '进阶'
    },
    {
        title: '行业趋势报告',
        description: '选择一个你感兴趣的领域，阅读3-5篇行业文章，撰写一份简短的的趋势分析。',
        time: '3小时',
        difficulty: '精通'
    },
    // 新增挑战
    {
        title: '竞品分析',
        description: '选择一个你感兴趣的产品，分析其主要竞争对手的优缺点，找出市场空白。',
        time: '2小时',
        difficulty: '进阶'
    },
    {
        title: '电梯演讲',
        description: '准备一个60秒的商业想法介绍，练习在短时间内清晰地表达你的创业愿景。',
        time: '30分钟',
        difficulty: '入门'
    },
    {
        title: '现金流规划',
        description: '为一个虚拟的创业项目制作简单的现金流预测表，理解收支平衡的重要性。',
        time: '1-2小时',
        difficulty: '进阶'
    },
    {
        title: '网络拓展',
        description: '今天主动联系一位行业前辈或潜在合作伙伴，进行一次有意义的交流。',
        time: '30分钟',
        difficulty: '进阶'
    },
    {
        title: '价值主张提炼',
        description: '尝试用一句话清晰地描述一个产品或服务的核心价值主张。',
        time: '15分钟',
        difficulty: '入门'
    }
];

const loveChallenges = [
    {
        title: '深度对话练习',
        description: '今天与伴侣或重要的人进行一次不被打扰的深度对话，倾听多于表达，理解对方最近的感受和想法。',
        time: '30-60分钟',
        difficulty: '入门'
    },
    {
        title: '非暴力沟通',
        description: '如果今天遇到沟通障碍，尝试用"观察-感受-需求-请求"的框架来表达自己。',
        time: '实践中学习',
        difficulty: '进阶'
    },
    {
        title: '情绪日记',
        description: '今天记录自己的情绪变化，找出触发强烈情绪的事件和你的应对方式。',
        time: '15分钟',
        difficulty: '入门'
    },
    {
        title: '边界探索',
        description: '思考并记录你在亲密关系中的边界，明确哪些是可以商量的，哪些是必须坚守的。',
        time: '1小时',
        difficulty: '进阶'
    },
    {
        title: '感恩表达',
        description: '对身边的人表达具体的感谢，不是"谢谢"，而是具体说出他们做了什么让你感激的事。',
        time: '随时',
        difficulty: '入门'
    },
    {
        title: '独处时光',
        description: '安排1-2小时的独处时间，做一些让自己充电的事情，重新连接自己。',
        time: '1-2小时',
        difficulty: '进阶'
    },
    {
        title: '关系复盘',
        description: '回顾过去一段关系，客观分析哪些做得好，哪些可以改进，不带批判地接纳自己。',
        time: '2小时',
        difficulty: '精通'
    },
    {
        title: '共情练习',
        description: '当看到他人情绪激动时，尝试先理解他的感受和需求，而不是急于给建议或判断对错。',
        time: '实践中学习',
        difficulty: '进阶'
    },
    // 新增挑战
    {
        title: '爱的语言发现',
        description: '观察你的伴侣最常表达爱的方式，尝试用他/她喜欢的爱的语言来表达你的爱意。',
        time: '1周',
        difficulty: '进阶'
    },
    {
        title: '冲突复盘',
        description: '回顾最近一次与他人的冲突，分析自己在沟通中的表现，思考如何做得更好。',
        time: '30分钟',
        difficulty: '进阶'
    },
    {
        title: '自我关爱日',
        description: '今天安排一天完全属于自己的时间，做一些能让你感到放松和快乐的事情。',
        time: '1天',
        difficulty: '入门'
    },
    {
        title: '积极反馈',
        description: '今天给三位你关心的人发送具体的积极反馈，告诉他们你欣赏他们的地方。',
        time: '15分钟',
        difficulty: '入门'
    },
    {
        title: '依恋风格探索',
        description: '通过在线测试了解自己的依恋风格，思考它如何影响你的亲密关系。',
        time: '30分钟',
        difficulty: '进阶'
    }
];

// ==================== 题库数据 ====================

// 创业思维题库 (30题)
const entrepreneurQuestions = [
    // 机会识别能力
    {
        id: 'e1',
        text: '在日常生活中，你会主动观察市场趋势和用户需求的变化吗？',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '偶尔关注，但不会特别深入', score: 3 },
            { text: '会系统性地观察和分析，觉得这很重要', score: 2 },
            { text: '很少关注这些，觉得浪费时间', score: 1 },
            { text: '会留意，但觉得与我关系不大', score: 0 }
        ]
    },
    {
        id: 'e2',
        text: '当你发现一个潜在商机时，你通常会怎么做？',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '记录下来，等有更多资源时再考虑', score: 3 },
            { text: '立即进行可行性评估并制定行动方案', score: 2 },
            { text: '听听他人的意见，再决定是否跟进', score: 1 },
            { text: '先深入了解市场需求，再决定是否行动', score: 0 }
        ]
    },
    {
        id: 'e3',
        text: '面对一个全新的市场机会，你会如何评估其价值？',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '先看是否有成功先例可参考', score: 3 },
            { text: '从市场规模、竞争格局、盈利模式等多维度分析', score: 2 },
            { text: '凭直觉判断，觉得可行就尝试', score: 1 },
            { text: '重点看是否符合我的经验和资源', score: 0 }
        ]
    },
    // 风险容忍度
    {
        id: 'e4',
        text: '当你决定做一个有风险但潜力巨大的项目时，你会如何准备？',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '边做边看，相信船到桥头自然直', score: 3 },
            { text: '制定详细的风险应对预案，并预留应急资源', score: 2 },
            { text: '先小规模试试水，降低损失风险', score: 1 },
            { text: '设定止损线，超出预期就及时退出', score: 0 }
        ]
    },
    {
        id: 'e5',
        text: '如果你的第一个创业项目失败了，你会如何应对？',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '休息一段时间，整理好心态再开始', score: 3 },
            { text: '深入复盘分析，将失败经验转化为宝贵财富', score: 2 },
            { text: '考虑加入一个成熟团队学习经验', score: 1 },
            { text: '调整方向和策略，重新出发', score: 0 }
        ]
    },
    {
        id: 'e6',
        text: '你如何看待创业过程中的不确定性和风险？',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '尽量规避风险，选择稳健路径', score: 3 },
            { text: '风险与机遇并存，愿意承担合理风险', score: 2 },
            { text: '风险太大，需要更多保障才行动', score: 1 },
            { text: '谨慎评估，在可控范围内冒险', score: 0 }
        ]
    },
    // 市场洞察力
    {
        id: 'e7',
        text: '你通常通过什么方式了解目标用户的需求和痛点？',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '参考行业报告和竞品分析', score: 3 },
            { text: '亲自与用户深度交流，观察用户行为', score: 2 },
            { text: '基于自己的判断和经验推测', score: 1 },
            { text: '通过问卷、数据分析等方式调研', score: 0 }
        ]
    },
    {
        id: 'e8',
        text: '当市场环境发生重大变化时，你会如何应对？',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '保持观望，看形势如何发展', score: 3 },
            { text: '迅速分析变化原因，挖掘新的市场机会', score: 2 },
            { text: '等待市场稳定再做决定', score: 1 },
            { text: '调整原有策略，适应新环境', score: 0 }
        ]
    },
    {
        id: 'e9',
        text: '你对竞争对手的分析通常关注哪些方面？',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '偶尔关注他们的营销动作', score: 3 },
            { text: '全面分析产品、运营、商业模式和创新点', score: 2 },
            { text: '更关注自身，不太在意竞争对手', score: 1 },
            { text: '重点关注他们的产品和定价策略', score: 0 }
        ]
    },
    // 创业热情
    {
        id: 'e10',
        text: '什么因素最能激发你的创业动力？',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '获得经济回报和个人成长', score: 3 },
            { text: '看到自己的产品真正帮助到用户', score: 2 },
            { text: '跟随行业趋势和时代潮流', score: 1 },
            { text: '实现个人价值和梦想的机会', score: 0 }
        ]
    },
    {
        id: 'e11',
        text: '当创业遇到瓶颈期时，你会如何保持热情？',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '暂时放松，调整好状态再出发', score: 3 },
            { text: '回顾初心，与志同道合的人交流互相激励', score: 2 },
            { text: '给自己一些物质奖励犒劳自己', score: 1 },
            { text: '设定小目标，完成后获得成就感', score: 0 }
        ]
    },
    {
        id: 'e12',
        text: '你会主动投入多少时间学习创业相关知识？',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '有需要时再学习，比较随性', score: 3 },
            { text: '每天坚持学习，将学习视为习惯', score: 2 },
            { text: '觉得经验比理论更重要', score: 1 },
            { text: '每周固定学习几小时，持续提升', score: 0 }
        ]
    },
    // 自我效能感
    {
        id: 'e13',
        text: '面对创业中的各种挑战，你通常对自己的能力如何评价？',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '有些领域擅长，有些还需要提升', score: 3 },
            { text: '相信通过学习和实践可以解决大部分问题', score: 2 },
            { text: '担心能力不足，需要更多准备', score: 1 },
            { text: '觉得能力足够，但需要团队配合', score: 0 }
        ]
    },
    {
        id: 'e14',
        text: '当遇到一个从未处理过的问题时，你会怎么做？',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '寻求有经验的人帮助指导', score: 3 },
            { text: '相信自己能学会并解决，积极寻找资源', score: 2 },
            { text: '交给更擅长的人处理', score: 1 },
            { text: '先研究学习，再尝试解决', score: 0 }
        ]
    },
    {
        id: 'e15',
        text: '你认为成功的创业者最需要具备什么素质？',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '商业敏锐度和执行力', score: 3 },
            { text: '持续学习能力和适应变化的韧性', score: 2 },
            { text: '运气和时机把握', score: 1 },
            { text: '领导力和组建团队的能力', score: 0 }
        ]
    },
    // 内在驱动力
    {
        id: 'e16',
        text: '如果没有外部压力和回报，你仍然会想要创业吗？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '不确定，视情况而定', score: 3 },
            { text: '会，内心的使命感和价值追求驱动我前进', score: 2 },
            { text: '不确定，视情况而定', score: 1 },
            { text: '可能，看是否有值得投入的idea', score: 0 }
        ]
    },
    {
        id: 'e17',
        text: '你通常如何设定和追踪自己的创业目标？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '边做边看，没有太具体的规划', score: 3 },
            { text: '设定SMART目标，定期复盘调整', score: 2 },
            { text: '跟着感觉走，随遇而安', score: 1 },
            { text: '有大方向，具体目标灵活调整', score: 0 }
        ]
    },
    {
        id: 'e18',
        text: '当你设定的目标遇到阻碍无法达成时，你会如何调整？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '适当调整目标，确保可达成', score: 3 },
            { text: '分析原因，调整策略坚持达成', score: 2 },
            { text: '暂时搁置，等待更好的时机', score: 1 },
            { text: '拆分目标为更小可实现的步骤', score: 0 }
        ]
    },
    // 创新倾向
    {
        id: 'e19',
        text: '当面对一个复杂问题时，你更倾向于采用什么方式解决？',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '多听听专家和有经验的人建议', score: 3 },
            { text: '跳出常规思维，寻找创新的解决方案', score: 2 },
            { text: '按部就班，使用成熟的方法', score: 1 },
            { text: '参考成功案例，结合实际情况改进', score: 0 }
        ]
    },
    {
        id: 'e20',
        text: '你如何培养自己的创新能力？',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '参加创新思维培训课程', score: 3 },
            { text: '跨领域学习，保持好奇心和探索欲', score: 2 },
            { text: '在实践中不断尝试和总结', score: 1 },
            { text: '大量阅读案例，激发创意灵感', score: 0 }
        ]
    },
    {
        id: 'e21',
        text: '你如何看待产品创新和商业模式创新的关系？',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '产品创新是核心，模式可以复制', score: 3 },
            { text: '两者相辅相成，需要同步创新', score: 2 },
            { text: '没有深入思考过这个问题', score: 1 },
            { text: '商业模式创新可能比产品创新更重要', score: 0 }
        ]
    },
    // 行动执行
    {
        id: 'e22',
        text: '当你有了一个好的创业想法，你会如何开始行动？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '先完善商业计划书', score: 3 },
            { text: '快速验证核心假设，快速迭代', score: 2 },
            { text: '寻找合作伙伴和资金再开始', score: 1 },
            { text: '先做市场调研和用户访谈', score: 0 }
        ]
    },
    {
        id: 'e23',
        text: '在执行过程中，你如何确保任务高效完成？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '随机应变，灵活处理', score: 3 },
            { text: '分解目标，使用项目管理工具追踪', score: 2 },
            { text: '相信团队成员自觉性，适度管理', score: 1 },
            { text: '设定明确的deadline并定期检查', score: 0 }
        ]
    },
    {
        id: 'e24',
        text: '当项目进度落后于计划时，你会采取什么措施？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '与相关方沟通，调整预期', score: 3 },
            { text: '分析原因，调配资源加速推进', score: 2 },
            { text: '优先保证质量，适当延后时间', score: 1 },
            { text: '加班加点，确保按时完成', score: 0 }
        ]
    },
    // 资源整合能力
    {
        id: 'e25',
        text: '当你需要启动一个项目但资源有限时，你会如何获取资源？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '寻找投资人或申请创业扶持', score: 3 },
            { text: '整合人脉资源，寻找志同道合的合作伙伴', score: 2 },
            { text: '等待有足够资源再开始', score: 1 },
            { text: '先小成本验证，逐步追加投入', score: 0 }
        ]
    },
    {
        id: 'e26',
        text: '你如何维护和发展自己的创业人脉网络？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '不太擅长社交，关系维护较少', score: 3 },
            { text: '定期维护关系，互利共赢', score: 2 },
            { text: '顺其自然，有缘就认识', score: 1 },
            { text: '有需要时会主动联系维护', score: 0 }
        ]
    },
    {
        id: 'e27',
        text: '你如何平衡工作和生活，保持可持续发展？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '全身心投入工作，暂不考虑生活', score: 3 },
            { text: '合理规划时间，保持工作生活平衡', score: 2 },
            { text: '创业阶段优先工作，之后再调整', score: 1 },
            { text: '在关键时期全力以赴，平时注意休息', score: 0 }
        ]
    },
    // 综合评估
    {
        id: 'e28',
        text: '你如何做出重要的商业决策？',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '参考有经验人士的建议', score: 3 },
            { text: '综合数据分析、行业洞察和团队意见', score: 2 },
            { text: '根据直觉判断，适时决策', score: 1 },
            { text: '自己深思熟虑后决定', score: 0 }
        ]
    },
    {
        id: 'e29',
        text: '你如何看待竞争对手和市场中的激烈竞争？',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '担心竞争激烈，难以立足', score: 3 },
            { text: '竞争推动创新，理性看待竞争格局', score: 2 },
            { text: '希望市场更温和', score: 1 },
            { text: '差异化竞争，找到自己的定位', score: 0 }
        ]
    },
    {
        id: 'e30',
        text: '你对自己创业之路的长期规划是什么？',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '走一步看一步，不做太远规划', score: 3 },
            { text: '打造有社会价值的伟大企业', score: 2 },
            { text: '积累经验，未来有更多可能', score: 1 },
            { text: '建立可持续发展的盈利事业', score: 0 }
        ]
    }
];

// 爱情认知题库 (30题)
const loveQuestions = [
    // 情绪管理能力
    {
        id: 'l1',
        text: '当你在亲密关系中感到情绪低落时，你通常会如何处理？',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '转移注意力，做些喜欢的事调节心情', score: 3 },
            { text: '先自我觉察情绪来源，再与伴侣坦诚沟通', score: 2 },
            { text: '期待伴侣主动发现并安慰自己', score: 1 },
            { text: '给自己一些独处时间平复情绪', score: 0 }
        ]
    },
    {
        id: 'l2',
        text: '面对伴侣的负面情绪时，你的反应通常是？',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '感到压力，不知道如何应对', score: 3 },
            { text: '耐心倾听，尝试理解对方的感受', score: 2 },
            { text: '觉得对方的情绪反应有些过度', score: 1 },
            { text: '给予安慰，但不确定是否有效', score: 0 }
        ]
    },
    {
        id: 'l3',
        text: '你如何在亲密关系中保持情绪的稳定性？',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '情绪波动时选择暂时冷静', score: 3 },
            { text: '通过冥想、运动等方式培养情绪调节能力', score: 2 },
            { text: '情绪不稳定时倾向于倾诉给伴侣', score: 1 },
            { text: '有意识地控制情绪表达', score: 0 }
        ]
    },
    // 共情能力
    {
        id: 'l4',
        text: '当伴侣分享工作上的烦恼时，你通常会怎么做？',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '安慰几句，然后聊别的话题', score: 3 },
            { text: '感同身受地倾听，提供情感支持', score: 2 },
            { text: '觉得应该自己解决，不太在意', score: 1 },
            { text: '认真倾听，并给出建议', score: 0 }
        ]
    },
    {
        id: 'l5',
        text: '你能准确感知伴侣未说出口的情绪和需求吗？',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '有时候能察觉到', score: 3 },
            { text: '通过细微的表情和语气变化判断', score: 2 },
            { text: '对方不说，我就不知道', score: 1 },
            { text: '基本能感受到对方的情绪', score: 0 }
        ]
    },
    {
        id: 'l6',
        text: '在日常生活中，你会主动关心伴侣的感受吗？',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '觉得有需要对方会说', score: 3 },
            { text: '经常关注伴侣的情绪变化', score: 2 },
            { text: '伴侣主动倾诉时会关心', score: 1 },
            { text: '在重要时刻会主动关心', score: 0 }
        ]
    },
    // 安全感
    {
        id: 'l7',
        text: '你认为建立安全感的核心要素是什么？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '经济基础和稳定的生活', score: 3 },
            { text: '相互信任，给彼此足够的空间', score: 2 },
            { text: '对方无条件的包容和让步', score: 1 },
            { text: '坦诚沟通，及时解决问题', score: 0 }
        ]
    },
    {
        id: 'l8',
        text: '当伴侣需要暂时独处时，你会如何回应？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '有些不安，会追问原因', score: 3 },
            { text: '尊重对方需求，给予支持', score: 2 },
            { text: '觉得不被需要，产生怀疑', score: 1 },
            { text: '接受，但希望知道原因', score: 0 }
        ]
    },
    {
        id: 'l9',
        text: '面对关系中的不确定因素，你通常会？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '感到焦虑，想控制局面', score: 3 },
            { text: '主动沟通，共同制定应对策略', score: 2 },
            { text: '回避问题，希望问题自行消失', score: 1 },
            { text: '相信时间会解决大部分问题', score: 0 }
        ]
    },
    // 沟通能力
    {
        id: 'l10',
        text: '当你想表达不满时，你通常会采用什么方式？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '委婉暗示，希望对方能理解', score: 3 },
            { text: '用"我觉得"开头，表达感受而非指责', score: 2 },
            { text: '不说，闷在心里', score: 1 },
            { text: '直接说出来，希望对方改正', score: 0 }
        ]
    },
    {
        id: 'l11',
        text: '你认为良好沟通的关键是什么？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '选择合适的时机沟通', score: 3 },
            { text: '倾听对方的立场，寻找共同点', score: 2 },
            { text: '避免冲突，保持和谐', score: 1 },
            { text: '清晰表达自己的想法', score: 0 }
        ]
    },
    {
        id: 'l12',
        text: '当你们对某件事有分歧时，你会如何处理？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '暂时搁置，以后再讨论', score: 3 },
            { text: '理性讨论，寻找双方都能接受的方案', score: 2 },
            { text: '坚持自己的观点，说服对方', score: 1 },
            { text: '各退一步，达成妥协', score: 0 }
        ]
    },
    // 边界意识
    {
        id: 'l13',
        text: '你认为亲密关系中保持个人边界重要吗？',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '不太重要，相爱就应该透明', score: 3 },
            { text: '非常重要，边界清晰关系更健康', score: 2 },
            { text: '边界会伤害感情，应该没有边界', score: 1 },
            { text: '重要，但可以根据情况调整', score: 0 }
        ]
    },
    {
        id: 'l14',
        text: '你会如何处理伴侣与异性朋友的交往？',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '希望知道每次交往的具体情况', score: 3 },
            { text: '信任对方，不过度干涉', score: 2 },
            { text: '要求伴侣减少与异性朋友的来往', score: 1 },
            { text: '知道有交往就好，不过问细节', score: 0 }
        ]
    },
    {
        id: 'l15',
        text: '你会和伴侣分享自己的过去和秘密吗？',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '觉得过去不重要，没必要提', score: 3 },
            { text: '适度分享，尊重自己也尊重对方', score: 2 },
            { text: '完全坦诚，没有任何保留', score: 1 },
            { text: '愿意分享，但有些事会保留', score: 0 }
        ]
    },
    // 冲突处理
    {
        id: 'l16',
        text: '发生争执时，你通常会怎么做？',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '选择冷战，等对方先道歉', score: 3 },
            { text: '等冷静后理性沟通解决', score: 2 },
            { text: '情绪激动，可能说出伤人的话', score: 1 },
            { text: '当时想解释清楚再结束', score: 0 }
        ]
    },
    {
        id: 'l17',
        text: '当争吵后，你会如何修复关系？',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '等对方先示好', score: 3 },
            { text: '主动反思，主动沟通和好', score: 2 },
            { text: '觉得没什么大不了，时间会冲淡', score: 1 },
            { text: '给对方一些时间，然后和好', score: 0 }
        ]
    },
    {
        id: 'l18',
        text: '你如何看待亲密关系中的争吵？',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '很糟糕，争吵会伤害感情', score: 3 },
            { text: '正常现象，解决问题能促进关系', score: 2 },
            { text: '不应该有争吵，相爱的人不应该吵架', score: 1 },
            { text: '可以接受，但希望能避免', score: 0 }
        ]
    },
    // 亲密能力
    {
        id: 'l19',
        text: '你如何表达对伴侣的爱意？',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '陪伴是最长情的告白', score: 3 },
            { text: '通过言语和行动真诚表达', score: 2 },
            { text: '觉得爱不需要说出来', score: 1 },
            { text: '用行动表达，不太擅长言语', score: 0 }
        ]
    },
    {
        id: 'l20',
        text: '你会主动创造亲密的时刻吗？',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '顺其自然，不需要刻意', score: 3 },
            { text: '会主动安排约会和惊喜', score: 2 },
            { text: '不太擅长这些，希望对方主动', score: 1 },
            { text: '重要日子会特别准备', score: 0 }
        ]
    },
    {
        id: 'l21',
        text: '你认为维系亲密关系最重要的是什么？',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '稳定的物质基础', score: 3 },
            { text: '持续的情感投入和相互成长', score: 2 },
            { text: '彼此忠诚和承诺', score: 1 },
            { text: '相互理解和包容', score: 0 }
        ]
    },
    // 信任建立
    {
        id: 'l22',
        text: '你如何建立和维护伴侣对你的信任？',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '让对方看自己的手机和社交账号', score: 3 },
            { text: '言行一致，言出必行', score: 2 },
            { text: '时间久了自然会信任', score: 1 },
            { text: '坦诚沟通，主动分享', score: 0 }
        ]
    },
    {
        id: 'l23',
        text: '当伴侣表现出不安全感时，你会怎么做？',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '觉得对方多疑，不想理会', score: 3 },
            { text: '耐心倾听，给予安全感', score: 2 },
            { text: '对伴侣的信任表示不满', score: 1 },
            { text: '解释清楚，希望对方理解', score: 0 }
        ]
    },
    {
        id: 'l24',
        text: '你如何看待伴侣查看你的手机或社交账号？',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '无所谓，给对方看也无所谓', score: 3 },
            { text: '尊重隐私，但愿意主动分享', score: 2 },
            { text: '这说明对方不信任我', score: 1 },
            { text: '可以接受，但不觉得有必要', score: 0 }
        ]
    },
    // 价值观 - 关系预期
    {
        id: 'l25',
        text: '你对理想亲密关系的期待是什么样的？',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '能满足彼此的情感需求', score: 3 },
            { text: '相互支持彼此的梦想，共同成长', score: 2 },
            { text: '能满足彼此的情感需求', score: 1 },
            { text: '彼此包容，有矛盾能协商解决', score: 0 }
        ]
    },
    {
        id: 'l26',
        text: '当关系发展遇到困难时，你会如何面对？',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '觉得困难会自然解决，暂不处理', score: 3 },
            { text: '坦诚沟通，共同寻找解决方案', score: 2 },
            { text: '逃避问题，等待对方先提出', score: 1 },
            { text: '给自己和对方一些时间和空间', score: 0 }
        ]
    },
    {
        id: 'l27',
        text: '你认为维护长期关系最重要的是什么？',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '足够的物质保障', score: 3 },
            { text: '持续的沟通和相互理解', score: 2 },
            { text: '彼此的包容和妥协', score: 1 },
            { text: '共同的生活目标和价值观', score: 0 }
        ]
    },
    // 综合题
    {
        id: 'l28',
        text: '当关系无法继续时，你会如何处理？',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '寻找关系中的问题，尝试修复', score: 3 },
            { text: '理性沟通，好聚好散', score: 2 },
            { text: '逃避问题，等待对方先提出', score: 1 },
            { text: '给彼此时间冷静后再做决定', score: 0 }
        ]
    },
    {
        id: 'l29',
        text: '你会为维系关系做出哪些改变和努力？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '调整自己的作息和习惯', score: 3 },
            { text: '主动学习沟通技巧，提升自己', score: 2 },
            { text: '觉得改变很难，希望对方先改变', score: 1 },
            { text: '在重要时刻给予伴侣更多关注', score: 0 }
        ]
    },
    {
        id: 'l30',
        text: '你认为什么因素能让亲密关系保持长久？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '外部条件稳定，如经济基础', score: 3 },
            { text: '双方的持续投入和共同成长', score: 2 },
            { text: '良好的沟通和冲突处理能力', score: 1 },
            { text: '相互信任和尊重', score: 0 }
        ]
    }
];

// ==================== 全局变量 ====================
let currentQuestions = [];
let currentQuestionIndex = 0;
let answers = [];
let radarChart = null;
let historyChart = null;
let isDarkTheme = true;
let isMusicPlaying = false;
let currentTestType = 'comprehensive'; // 当前测试类型
let currentSelectedQuestions = []; // 当前抽取的题目

// 维度映射（支持多种格式）
const dimensionMapping = {
    // 创业思维维度
    opportunity_recognition: { name: '机会识别', key: 'opportunity' },
    opportunity: { name: '机会识别', key: 'opportunity' },
    risk_tolerance: { name: '风险容忍', key: 'risk' },
    risk: { name: '风险容忍', key: 'risk' },
    market_insight: { name: '市场洞察', key: 'market' },
    market: { name: '市场洞察', key: 'market' },
    passion: { name: '创业热情', key: 'passion' },
    self_efficacy: { name: '自我效能', key: 'efficacy' },
    efficacy: { name: '自我效能', key: 'efficacy' },
    motivation: { name: '内在驱动', key: 'motivation' },
    innovation: { name: '创新倾向', key: 'innovation' },
    execution: { name: '行动执行', key: 'execution' },
    resource_integration: { name: '资源整合', key: 'resource' },
    decision_making: { name: '决策能力', key: 'decision' },
    competition: { name: '竞争意识', key: 'competition' },
    planning: { name: '规划能力', key: 'planning' },
    
    // 爱情认知维度
    emotion_management: { name: '情绪管理', key: 'emotion' },
    emotion: { name: '情绪管理', key: 'emotion' },
    empathy: { name: '共情能力', key: 'empathy' },
    security: { name: '安全感', key: 'security' },
    communication: { name: '沟通能力', key: 'communication' },
    boundary: { name: '边界意识', key: 'boundary' },
    conflict_handling: { name: '冲突处理', key: 'conflict' },
    conflict: { name: '冲突处理', key: 'conflict' },
    intimacy_ability: { name: '亲密能力', key: 'intimacy' },
    intimacy: { name: '亲密能力', key: 'intimacy' },
    trust_building: { name: '信任建立', key: 'trust' },
    trust: { name: '信任建立', key: 'trust' },
    independence: { name: '独立性', key: 'independence' },
    love_motivation: { name: '恋爱动机', key: 'love_motivation' },
    commitment: { name: '承诺倾向', key: 'commitment' },
    expectation: { name: '关系预期', key: 'expectation' },
    breakup: { name: '分手态度', key: 'breakup' },
    adaptability: { name: '适应性', key: 'adaptability' },
    longevity: { name: '长期信念', key: 'longevity' }
};

// 雷达图维度（用于显示）
const radarDimensions = {
    entrepreneur: [
        { key: 'opportunity', name: '机会识别' },
        { key: 'risk', name: '风险容忍' },
        { key: 'innovation', name: '创新倾向' },
        { key: 'execution', name: '行动执行' }
    ],
    love: [
        { key: 'emotion', name: '情感成熟' },
        { key: 'communication', name: '沟通能力' },
        { key: 'boundary', name: '边界意识' },
        { key: 'empathy', name: '共情能力' }
    ]
};

// ==================== 页面元素 ====================
const pages = {
    home: document.getElementById('home-page'),
    test: document.getElementById('test-page'),
    result: document.getElementById('result-page')
};

// ==================== 工具函数 ====================

// 随机打乱数组
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 从数组中随机抽取指定数量的元素
function randomSample(array, count) {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
}

// 计算等级
function getLevel(score) {
    if (score >= 85) return { level: '卓越型', color: '#F59E0B', description: '你的能力非常出色！' };
    if (score >= 70) return { level: '潜力型', color: '#7C3AED', description: '你已经具备良好的基础！' };
    if (score >= 50) return { level: '探索型', color: '#3B82F6', description: '你正在成长中！' };
    return { level: '待启型', color: '#6B7280', description: '还有很大的提升空间！' };
}

// 获取阶段
function getStage(entrepreneurScore, loveScore, testType = 'comprehensive') {
    let score;
    if (testType === 'entrepreneur') {
        score = entrepreneurScore;
    } else if (testType === 'love') {
        score = loveScore;
    } else {
        score = (entrepreneurScore + loveScore) / 2;
    }
    
    if (score >= 85) return { stage: '卓越期', percentage: 100, description: '你已经达到了很高的境界，继续保持！' };
    if (score >= 70) return { stage: '成熟期', percentage: 75, description: '你已经成熟，正在向更高阶段迈进！' };
    if (score >= 50) return { stage: '成长期', percentage: 50, description: '你正在稳步成长，继续努力！' };
    return { stage: '萌芽期', percentage: 25, description: '你正处于起步阶段，潜力无限！' };
}

// 获取人格画像
// 根据雷达图各维度得分获取人格画像
function getProfile(entrepreneurScore, loveScore, dimensionScores, testType = 'comprehensive') {
    // 获取各维度得分
    const { opportunity, risk, innovation, execution, emotion, communication, boundary, empathy, market, passion, efficacy, motivation, security, conflict, intimacy, trust } = dimensionScores;
    
    // 根据测试类型获取对应维度
    let dims, topDim, secondDim;
    
    if (testType === 'entrepreneur') {
        // 创业思维维度
        dims = [
            { name: 'opportunity', score: opportunity || 0, label: '机会识别' },
            { name: 'risk', score: risk || 0, label: '风险容忍' },
            { name: 'market', score: market || 0, label: '市场洞察' },
            { name: 'passion', score: passion || 0, label: '创业热情' },
            { name: 'efficacy', score: efficacy || 0, label: '自我效能' },
            { name: 'motivation', score: motivation || 0, label: '内在驱动' },
            { name: 'innovation', score: innovation || 0, label: '创新倾向' },
            { name: 'execution', score: execution || 0, label: '行动执行' }
        ];
    } else if (testType === 'love') {
        // 爱情认知维度
        dims = [
            { name: 'emotion', score: emotion || 0, label: '情绪管理' },
            { name: 'empathy', score: empathy || 0, label: '共情能力' },
            { name: 'security', score: security || 0, label: '安全感' },
            { name: 'communication', score: communication || 0, label: '沟通能力' },
            { name: 'boundary', score: boundary || 0, label: '边界意识' },
            { name: 'conflict', score: conflict || 0, label: '冲突处理' },
            { name: 'intimacy', score: intimacy || 0, label: '亲密能力' },
            { name: 'trust', score: trust || 0, label: '信任建立' }
        ];
    } else {
        // 综合维度
        dims = [
            { name: 'opportunity', score: opportunity || 0, label: '机会识别' },
            { name: 'risk', score: risk || 0, label: '风险容忍' },
            { name: 'innovation', score: innovation || 0, label: '创新倾向' },
            { name: 'execution', score: execution || 0, label: '行动执行' },
            { name: 'emotion', score: emotion || 0, label: '情绪管理' },
            { name: 'communication', score: communication || 0, label: '沟通能力' },
            { name: 'boundary', score: boundary || 0, label: '边界意识' },
            { name: 'empathy', score: empathy || 0, label: '共情能力' }
        ];
    }
    
    const sortedDims = dims.sort((a, b) => b.score - a.score);
    topDim = sortedDims[0];
    secondDim = sortedDims[1];
    
    // 判断是否高得分
    const highScoreThreshold = 70;
    const isHighScore = testType === 'entrepreneur' 
        ? entrepreneurScore >= highScoreThreshold 
        : testType === 'love' 
            ? loveScore >= highScoreThreshold 
            : entrepreneurScore >= highScoreThreshold && loveScore >= highScoreThreshold;
    
    const midScoreThreshold = 50;
    const isMidScore = testType === 'entrepreneur' 
        ? entrepreneurScore >= midScoreThreshold && entrepreneurScore < highScoreThreshold 
        : testType === 'love' 
            ? loveScore >= midScoreThreshold && loveScore < highScoreThreshold 
            : (entrepreneurScore >= midScoreThreshold || loveScore >= midScoreThreshold) && !(entrepreneurScore >= highScoreThreshold && loveScore >= highScoreThreshold);
    
    // 根据测试类型返回不同的人格画像
    if (testType === 'entrepreneur') {
        // 创业思维专用画像（10个）
        if (isHighScore) {
            if (topDim.name === 'opportunity') {
                return { title: '商业远见者', description: '你拥有敏锐的商业嗅觉，能够洞察市场趋势并把握先机。你善于发现潜在机会，并能迅速将其转化为商业价值。' };
            } else if (topDim.name === 'execution') {
                return { title: '高效执行者', description: '你是行动的巨人，具有超强的执行力。你能够将复杂的商业计划分解为可执行的步骤，并高效完成。' };
            } else if (topDim.name === 'innovation') {
                return { title: '创新引领者', description: '你思维活跃，敢于突破传统。你总是能提出创新的解决方案，是团队中的创意源泉。' };
            } else if (topDim.name === 'risk') {
                return { title: '风险驾驭者', description: '你敢于承担风险，但并非盲目冒险。你善于评估风险，并做出明智的决策。' };
            } else {
                return { title: '创业领袖', description: '你具备成为成功创业者的核心素质，既有战略眼光，又有执行能力。' };
            }
        } else if (isMidScore) {
            if (topDim.name === 'opportunity') {
                return { title: '机会探索者', description: '你已经展现出对商业机会的敏感度，需要进一步培养将机会转化为现实的能力。' };
            } else if (topDim.name === 'execution') {
                return { title: '潜力行动者', description: '你有不错的执行能力，但需要提升战略思考和机会识别能力。' };
            } else if (topDim.name === 'passion') {
                return { title: '热情创业者', description: '你对创业充满热情，这是成功的动力源泉。现在需要学习更多商业知识和技能。' };
            } else {
                return { title: '成长创业者', description: '你正在成长为一名优秀的创业者，继续努力，未来可期。' };
            }
        } else {
            return { title: '创业初学者', description: '你刚刚开始探索创业之路，保持好奇心，勇于尝试，成功就在前方。' };
        }
    } else if (testType === 'love') {
        // 爱情认知专用画像（10个）
        if (isHighScore) {
            if (topDim.name === 'empathy') {
                return { title: '共情大师', description: '你能够深刻理解他人的感受，是天生的倾听者和安慰者。你的同理心能够建立深厚的情感连接。' };
            } else if (topDim.name === 'communication') {
                return { title: '沟通艺术家', description: '你善于表达和倾听，能够化解矛盾、建立和谐。你的沟通能力是维系关系的基石。' };
            } else if (topDim.name === 'emotion') {
                return { title: '情绪智慧者', description: '你能够很好地管理自己和他人的情绪，是情感关系中的稳定剂。' };
            } else if (topDim.name === 'boundary') {
                return { title: '边界守护者', description: '你懂得在亲密关系中保持适当的边界，既尊重自己也尊重他人。' };
            } else {
                return { title: '情感智者', description: '你在情感关系中已经达到很高的境界，能够平衡亲密与独立。' };
            }
        } else if (isMidScore) {
            if (topDim.name === 'empathy') {
                return { title: '温暖倾听者', description: '你善于倾听和理解他人，继续培养沟通能力，会成为更好的伴侣。' };
            } else if (topDim.name === 'communication') {
                return { title: '成长沟通者', description: '你已经具备不错的沟通能力，需要学习更有效的沟通技巧。' };
            } else if (topDim.name === 'security') {
                return { title: '安全探索者', description: '你在关系中寻求安全感，需要学会信任自己和他人。' };
            } else {
                return { title: '情感学习者', description: '你正在学习如何建立健康的情感关系，每一步都是成长。' };
            }
        } else {
            return { title: '情感初学者', description: '你刚刚开始探索情感关系，保持开放的心态，学习爱的艺术。' };
        }
    } else {
        // 综合测试画像（12个）
        const isEntrepreneurHigh = entrepreneurScore >= highScoreThreshold;
        const isLoveHigh = loveScore >= highScoreThreshold;
        
        if (isEntrepreneurHigh && isLoveHigh) {
            if (topDim.name === 'opportunity') {
                return { title: '远见战略家', description: '你拥有敏锐的商业嗅觉和深厚的情感智慧，能够在事业和情感之间找到完美平衡。' };
            } else if (topDim.name === 'execution') {
                return { title: '高效平衡者', description: '你是行动的巨人，既能高效执行商业计划，又能细腻地处理情感关系。' };
            } else if (topDim.name === 'empathy') {
                return { title: '温暖领航者', description: '你用同理心温暖身边的人，用智慧引领团队前进。' };
            } else if (topDim.name === 'innovation') {
                return { title: '创新协调者', description: '你思维活跃，充满创意，同时懂得如何与人和谐共处。' };
            } else {
                return { title: '开智觉醒者', description: '你已达到开智境界，创业思维与爱情认知都已成熟。' };
            }
        } else if (isEntrepreneurHigh && !isLoveHigh) {
            if (topDim.name === 'opportunity') {
                return { title: '机会猎人', description: '你是天生的机会发现者，需要学习关注身边人的感受。' };
            } else if (topDim.name === 'innovation') {
                return { title: '创新先锋', description: '你思维活跃，充满创意，需要更多耐心理解他人。' };
            } else if (topDim.name === 'execution') {
                return { title: '行动达人', description: '你执行力超强，需要学会放慢脚步感受情感。' };
            } else {
                return { title: '创业新锐', description: '你在商业领域表现卓越，需要提升情感智慧。' };
            }
        } else if (!isEntrepreneurHigh && isLoveHigh) {
            if (topDim.name === 'empathy') {
                return { title: '共情天使', description: '你是天生的倾听者，试着将这种优势运用到事业中。' };
            } else if (topDim.name === 'communication') {
                return { title: '沟通艺术家', description: '你善于表达和倾听，这种能力正是创业者需要的。' };
            } else if (topDim.name === 'emotion') {
                return { title: '情绪智者', description: '你能够很好地管理情绪，尝试将智慧与商业思维结合。' };
            } else {
                return { title: '情感大师', description: '你在情感领域有深刻理解，可以尝试运用到事业发展中。' };
            }
        } else {
            if (topDim.name === 'opportunity') {
                return { title: '萌芽探索者', description: '你展现出对机会的敏感度，继续培养洞察力和同理心。' };
            } else if (topDim.name === 'empathy') {
                return { title: '温暖学习者', description: '你有一颗温暖的心，需要学习将优势转化为行动力。' };
            } else if (topDim.name === 'execution') {
                return { title: '行动学习者', description: '你有很强的执行力，需要培养战略眼光和情感智慧。' };
            } else {
                return { title: '成长探索者', description: '你正处于成长关键时期，各方面都有提升空间。' };
            }
        }
    }
}

// 获取提升建议（根据雷达图维度得分）
function getAdvice(type, score, dimensionScores = null) {
    // 按维度分类的建议（每个维度至少5条）
    const dimensionAdvice = {
        entrepreneur: {
            opportunity: [
                '每天花15分钟观察身边的商业现象，记录潜在机会',
                '关注行业新闻和趋势报告，培养商业嗅觉',
                '学习商业模式分析框架，提升机会识别能力',
                '定期参加行业活动，拓展视野发现新机会',
                '练习从用户痛点出发思考商业机会'
            ],
            risk: [
                '从小规模实验开始，逐步提升风险承受能力',
                '学习风险评估方法，做出更理性的决策',
                '接受失败是成功的一部分，从失败中学习',
                '建立风险应对预案，降低不确定性',
                '分散投资，降低单一项目风险'
            ],
            market: [
                '定期分析竞争对手动态，了解市场变化',
                '建立用户反馈机制，深入理解市场需求',
                '关注行业报告，把握市场趋势',
                '学习数据分析方法，量化市场洞察',
                '参与行业论坛，获取前沿信息'
            ],
            passion: [
                '找到自己真正热爱的领域，保持创业热情',
                '设定明确的目标，保持前进动力',
                '与志同道合的人交流，互相激励',
                '回顾创业初心，保持激情',
                'Celebrate small wins，积累成就感'
            ],
            efficacy: [
                '设定可实现的小目标，逐步建立自信',
                '学习成功人士的经验，增强自我效能',
                '记录自己的成就，增强自我认同',
                '接受挑战，突破舒适区',
                '积极自我对话，培养成长型思维'
            ],
            motivation: [
                '找到内在动力源，保持持续动力',
                '设定有意义的目标，激发内在动机',
                '建立奖励机制，保持积极性',
                '定期复盘，调整方向',
                '与积极向上的人交往，互相激励'
            ],
            innovation: [
                '每天尝试一个新想法，不管看起来多疯狂',
                '学习设计思维方法论，提升创新能力',
                '关注跨界创新案例，拓宽思维边界',
                '建立创意收集系统，积累灵感',
                '鼓励试错，从失败中学习创新'
            ],
            execution: [
                '学习时间管理方法，提升执行力',
                '将大目标分解为可执行的小步骤',
                '建立问责机制，确保任务按时完成',
                '使用任务管理工具，提高效率',
                '培养专注能力，减少干扰'
            ],
            general: [
                '每周阅读一篇商业案例分析，培养商业敏感度',
                '尝试低成本小项目实践，积累实战经验',
                '加入创业者社群交流，拓展人脉资源',
                '学习精益创业方法论，提升效率',
                '每天记录创业灵感，培养创新思维',
                '定期参加创业讲座，学习新知识',
                '建立商业知识体系，系统提升能力',
                '寻找导师，获取专业指导',
                '保持好奇心，持续学习',
                '建立健康的工作生活平衡'
            ]
        },
        love: {
            emotion: [
                '每天记录情绪日记，提高情绪觉察能力',
                '学习深呼吸和冥想，调节情绪状态',
                '练习情绪标签法，准确识别自己的情绪',
                '建立情绪调节工具箱，应对不同情绪',
                '学习情绪释放技巧，保持心理健康'
            ],
            empathy: [
                '练习换位思考，站在对方角度看问题',
                '学习共情倾听，理解对方的感受和需求',
                '尝试通过故事和比喻理解他人的经历',
                '练习镜像倾听，复述对方的感受',
                '培养好奇心，主动了解他人的世界'
            ],
            security: [
                '自我反思，了解自己的安全感来源',
                '建立信任清单，记录伴侣可靠的证据',
                '练习自我安抚，应对不安情绪',
                '与伴侣坦诚沟通安全感需求',
                '培养自我价值感，减少对外界的依赖'
            ],
            communication: [
                '练习非暴力沟通四步法：观察、感受、需求、请求',
                '学习积极倾听技巧，给予对方充分关注',
                '练习用"我"语句表达感受，避免指责',
                '学习冲突解决技巧，建设性地处理分歧',
                '定期进行深度对话，保持沟通畅通'
            ],
            boundary: [
                '明确自己的边界需求，学会说"不"',
                '尊重他人的边界，不越界干涉',
                '学习在亲密关系中保持适当的个人空间',
                '练习温柔而坚定地维护边界',
                '与伴侣共同制定关系边界规则'
            ],
            conflict: [
                '学习冷静处理冲突，避免情绪化反应',
                '练习用"我们"代替"你"和"我"',
                '关注问题本身，而非人身攻击',
                '寻求双赢解决方案',
                '学会道歉和原谅，修复关系'
            ],
            intimacy: [
                '练习自我暴露，逐渐加深亲密程度',
                '学习表达爱意的五种语言',
                '建立日常亲密仪式，保持连接',
                '尊重彼此的节奏，不急于求成',
                '培养身体亲密，增强情感连接'
            ],
            trust: [
                '保持言行一致，建立信任基础',
                '诚实沟通，避免隐瞒',
                '兑现承诺，增强可靠性',
                '承认错误，展现真诚',
                '给予信任，也寻求信任'
            ],
            general: [
                '阅读情感心理学书籍，提升认知',
                '培养独处和自我觉察能力',
                '定期与伴侣进行深度沟通',
                '参加人际关系工作坊，学习沟通技巧',
                '练习感恩表达，增强情感连接',
                '学习爱的艺术，提升关系质量',
                '培养同理心，理解他人感受',
                '建立健康的亲密关系边界',
                '学会处理冲突，促进关系成长',
                '保持开放心态，持续学习和成长'
            ]
        }
    };
    
    // 如果没有维度数据，返回通用建议
    if (!dimensionScores) {
        const shuffled = shuffleArray(dimensionAdvice[type].general);
        return shuffled.slice(0, 3);
    }
    
    // 根据维度得分推荐针对性建议（覆盖所有8个维度）
    const dims = type === 'entrepreneur' 
        ? ['opportunity', 'risk', 'market', 'passion', 'efficacy', 'motivation', 'innovation', 'execution']
        : ['emotion', 'empathy', 'security', 'communication', 'boundary', 'conflict', 'intimacy', 'trust'];
    
    // 找出得分最低的维度（需要重点提升的维度）
    const sortedDims = dims
        .map(d => ({ name: d, score: dimensionScores[d] || 0 }))
        .sort((a, b) => a.score - b.score);
    
    const recommendedAdvice = [];
    
    // 优先推荐低得分维度的建议
    for (const dim of sortedDims) {
        if (dimensionAdvice[type][dim.name]) {
            const adviceForDim = shuffleArray(dimensionAdvice[type][dim.name]);
            recommendedAdvice.push(...adviceForDim.slice(0, 1));
        }
        if (recommendedAdvice.length >= 3) break;
    }
    
    // 如果还不够3条，从通用建议中补充
    if (recommendedAdvice.length < 3) {
        const generalAdvice = shuffleArray(dimensionAdvice[type].general);
        const additional = generalAdvice.filter(a => !recommendedAdvice.includes(a))
                                       .slice(0, 3 - recommendedAdvice.length);
        recommendedAdvice.push(...additional);
    }
    
    return recommendedAdvice;
}

// 获取推荐书籍（根据雷达图维度推荐）
function getBooks(type, dimensionScores = null) {
    const allBooks = {
        // 创业思维书籍（8本）
        entrepreneur: [
            { title: '精益创业', author: '埃里克·莱斯', reason: '学习如何用最小成本验证商业假设', dimension: 'execution' },
            { title: '从零到一', author: '彼得·蒂尔', reason: '理解商业创新的本质', dimension: 'innovation' },
            { title: '创业维艰', author: '本·霍洛维茨', reason: '了解创业中的真实挑战', dimension: 'risk' },
            { title: '穷查理宝典', author: '彼得·考夫曼', reason: '培养多元思维模型', dimension: 'opportunity' },
            { title: '颠覆者', author: '周鸿祎', reason: '揭示商业颠覆的底层逻辑', dimension: 'innovation' },
            { title: '商业的本质', author: '杰克·韦尔奇', reason: '掌握商业运营的核心要素', dimension: 'market_insight' },
            { title: '史蒂夫·乔布斯传', author: '沃尔特·艾萨克森', reason: '学习创新大师的思维方式', dimension: 'innovation' },
            { title: '原则', author: '瑞·达利欧', reason: '建立个人和企业的决策原则', dimension: 'execution' }
        ],
        // 爱情认知书籍（8本）
        love: [
            { title: '爱的艺术', author: '埃里希·弗洛姆', reason: '理解爱情的本质', dimension: 'empathy' },
            { title: '非暴力沟通', author: '马歇尔·卢森堡', reason: '改善亲密关系沟通', dimension: 'communication' },
            { title: '亲密关系', author: '罗兰·米勒', reason: '科学理解亲密关系', dimension: 'emotion' },
            { title: '男人来自火星', author: '约翰·格雷', reason: '理解两性差异', dimension: 'communication' },
            { title: '被讨厌的勇气', author: '岸见一郎', reason: '建立健康的人际关系观', dimension: 'boundary' },
            { title: '情绪勒索', author: '苏珊·福沃德', reason: '识别和应对情感操控', dimension: 'boundary' },
            { title: '依恋', author: '苏珊·哈特', reason: '理解成人依恋模式', dimension: 'security' },
            { title: '关键对话', author: '科里·帕特森', reason: '掌握高风险对话技巧', dimension: 'communication' }
        ]
    };
    
    // 如果没有维度数据，返回随机4本
    if (!dimensionScores) {
        return shuffleArray(allBooks[type]).slice(0, 4);
    }
    
    // 根据维度得分推荐书籍
    const dims = type === 'entrepreneur' 
        ? ['opportunity', 'risk', 'innovation', 'execution']
        : ['emotion', 'communication', 'boundary', 'empathy'];
    
    // 找出得分最低的维度（需要提升的维度）
    const sortedDims = dims
        .map(d => ({ name: d, score: dimensionScores[d] || 0 }))
        .sort((a, b) => a.score - b.score);
    
    const recommendedBooks = [];
    const usedDimensions = new Set();
    
    // 优先推荐与低得分维度相关的书籍
    for (const dim of sortedDims) {
        const booksForDim = allBooks[type].filter(
            book => book.dimension === dim.name && !usedDimensions.has(dim.name)
        );
        if (booksForDim.length > 0) {
            recommendedBooks.push(booksForDim[0]);
            usedDimensions.add(dim.name);
        }
        if (recommendedBooks.length >= 4) break;
    }
    
    // 如果还不够4本，从剩余书籍中随机补充
    if (recommendedBooks.length < 4) {
        const remainingBooks = allBooks[type].filter(
            book => !recommendedBooks.includes(book)
        );
        const additional = shuffleArray(remainingBooks).slice(0, 4 - recommendedBooks.length);
        recommendedBooks.push(...additional);
    }
    
    return recommendedBooks;
}

// 获取维度解读
function getDimensionInsight(dimensionKey) {
    const insights = {
        opportunity: {
            title: '机会识别能力',
            description: '这一维度反映了你发现和把握商业机会的能力。高分者善于从日常观察中发现潜在商机，并能够快速评估和行动。',
            behaviors: ['经常关注市场变化', '善于发现别人忽略的机会', '敢于尝试新的可能性', '具有敏锐的商业直觉']
        },
        risk: {
            title: '风险容忍度',
            description: '这一维度衡量你面对不确定性和风险时的态度。创业必然伴随风险，适度的风险容忍是成功创业者的重要特质。',
            behaviors: ['能够理性评估风险', '不害怕失败', '敢于在不确定中做出决策', '从失败中学习']
        },
        innovation: {
            title: '创新倾向',
            description: '这一维度评估你对新事物的接受度和创新能力。创新是创业成功的关键驱动力。',
            behaviors: ['喜欢尝试新方法', '敢于挑战传统', '善于提出新想法', '乐于接受变化']
        },
        execution: {
            title: '行动执行力',
            description: '这一维度衡量你将想法转化为行动的能力。再好的想法没有执行都是空谈。',
            behaviors: ['做事高效有条理', '能够克服拖延', '善于时间管理', '坚持完成目标']
        },
        emotion: {
            title: '情感成熟度',
            description: '这一维度评估你管理和调节情绪的能力。情感成熟是建立健康关系的基础。',
            behaviors: ['能够控制情绪', '善于调节心态', '面对压力保持冷静', '情绪稳定']
        },
        communication: {
            title: '沟通能力',
            description: '这一维度衡量你表达和倾听的能力。良好的沟通是亲密关系的基石。',
            behaviors: ['善于表达自己', '认真倾听他人', '能够有效解决冲突', '沟通清晰坦诚']
        },
        boundary: {
            title: '边界意识',
            description: '这一维度评估你在关系中保持个人空间和尊重他人边界的能力。健康的边界是关系长久的保障。',
            behaviors: ['尊重他人隐私', '保持适当距离', '有自己的生活', '不过度依赖']
        },
        empathy: {
            title: '共情能力',
            description: '这一维度衡量你理解和感受他人情绪的能力。共情是建立深度连接的关键。',
            behaviors: ['善于倾听', '能够理解他人感受', '给予情感支持', '富有同情心']
        }
    };
    return insights[dimensionKey] || { title: dimensionKey, description: '暂无详细解读', behaviors: [] };
}

// ==================== 粒子背景 ====================
function initParticles() {
    const container = document.getElementById('particles-bg');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ==================== 页面切换 ====================
function showPage(pageName) {
    // 重置所有页面元素的display样式到初始状态（清除内联样式）
    document.querySelectorAll('.entrepreneur-score-card, .love-score-card, .entrepreneur-advice-section, .love-advice-section, .entrepreneur-change-section, .love-change-section, #book-1, #book-2, #book-3, #book-4, .share-entrepreneur-score, .share-love-score').forEach(el => {
        el.style.display = ''; // 移除内联样式，恢复CSS默认样式
    });
    
    // 切换页面active类
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageName].classList.add('active');
    
    // 如果是回到首页，确保挑战模块重置
    if (pageName === 'home') {
        // 重置挑战模块
        const challengeContent = document.getElementById('challenge-content');
        const challengeDisplay = document.getElementById('challenge-display');
        const generateBtn = document.getElementById('generate-challenge');
        
        if (challengeContent) challengeContent.classList.remove('hidden');
        if (challengeDisplay) challengeDisplay.classList.add('hidden');
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.style.opacity = '1';
            generateBtn.style.cursor = 'pointer';
        }
    }
}

// ==================== 按维度分层抽样 ====================
function stratifiedSampleByDimension(questions, targetCount, dimensions) {
    // 将题目按维度分组
    const dimensionGroups = {};
    dimensions.forEach(dim => {
        dimensionGroups[dim] = questions.filter(q => q.dimension === dim);
    });
    
    const selected = [];
    const availableDims = dimensions.filter(dim => dimensionGroups[dim] && dimensionGroups[dim].length > 0);
    
    // 确保每个有题目的维度至少抽一题
    availableDims.forEach(dim => {
        const pool = dimensionGroups[dim];
        if (pool.length > 0) {
            const randomIndex = Math.floor(Math.random() * pool.length);
            selected.push(pool[randomIndex]);
        }
    });
    
    // 如果选择的题目数量少于目标，并且还有维度有剩余题目，继续抽取
    while (selected.length < targetCount) {
        // 从未选满的维度中继续抽取
        const dimsWithMore = availableDims.filter(dim => {
            const pool = dimensionGroups[dim];
            // 检查该维度是否还有未选的题目
            return pool.some(q => !selected.includes(q));
        });
        
        if (dimsWithMore.length === 0) break;
        
        const dim = dimsWithMore[Math.floor(Math.random() * dimsWithMore.length)];
        const pool = dimensionGroups[dim];
        const unselected = pool.filter(q => !selected.includes(q));
        if (unselected.length > 0) {
            const randomIndex = Math.floor(Math.random() * unselected.length);
            selected.push(unselected[randomIndex]);
        }
    }
    
    return shuffleArray(selected);
}

// ==================== 开始测评 ====================
function startTest() {
    // 获取选择的测试类型
    let selectedType = 'comprehensive';
    const activeBtn = document.querySelector('.test-type-btn.bg-gradient-to-r');
    if (activeBtn) {
        selectedType = activeBtn.dataset.type;
    }
    
    // 保存当前测试类型
    currentTestType = selectedType;
    
    let entrepreneurSample = [];
    let loveSample = [];
    
    // 定义需要覆盖的维度
    const entrepreneurDimensions = [
        'opportunity', 'risk', 'market', 
        'passion', 'efficacy', 'motivation', 'innovation', 'execution'
    ];
    const loveDimensions = [
        'emotion', 'empathy', 'security', 'communication', 'boundary', 'conflict', 'intimacy', 'trust'
    ];
    
    // 根据选择类型抽取题目（分层抽样确保维度覆盖）
    if (selectedType === 'comprehensive') {
        // 综合测试：创业8题 + 爱情5题（确保每个维度至少1题）
        entrepreneurSample = stratifiedSampleByDimension(entrepreneurQuestions, 8, entrepreneurDimensions);
        loveSample = stratifiedSampleByDimension(loveQuestions, 5, loveDimensions);
    } else if (selectedType === 'entrepreneur') {
        // 纯创业思维：10题（确保每个维度至少1题）
        entrepreneurSample = stratifiedSampleByDimension(entrepreneurQuestions, 10, entrepreneurDimensions);
    } else if (selectedType === 'love') {
        // 纯爱情认知：10题（确保每个维度至少1题）
        loveSample = stratifiedSampleByDimension(loveQuestions, 10, loveDimensions);
    }
    
    // 合并并打乱顺序
    currentQuestions = shuffleArray([...entrepreneurSample, ...loveSample]);
    currentSelectedQuestions = [...currentQuestions]; // 保存抽取的题目
    currentQuestionIndex = 0;
    answers = [];
    
    // 重置暂停状态
    const pauseIcon = document.querySelector('.pause-icon');
    const playIcon = document.querySelector('.play-icon');
    if (pauseIcon) pauseIcon.classList.remove('hidden');
    if (playIcon) playIcon.classList.add('hidden');
    const questionContainer = document.getElementById('question-container');
    if (questionContainer) {
        questionContainer.style.opacity = '1';
        questionContainer.style.pointerEvents = 'auto';
    }
    
    // 显示测试页面
    showPage('test');
    loadQuestion(0);
}

// ==================== 加载题目 ====================
function loadQuestion(index) {
    if (index < 0 || index >= currentQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = currentQuestions[index];
    
    // 更新进度
    document.getElementById('progress-text').textContent = `${index + 1}/${currentQuestions.length}`;
    document.getElementById('progress-bar').style.width = `${((index + 1) / currentQuestions.length) * 100}%`;
    
    // 更新题目编号
    document.getElementById('question-number').textContent = index + 1;
    
    // 更新题目类型标签
    const typeTag = document.getElementById('question-type-tag');
    if (question.type === 'entrepreneurship') {
        typeTag.textContent = '🚀 创业思维';
        typeTag.className = 'px-4 py-2 rounded-full text-sm font-medium type-entrepreneur';
    } else {
        typeTag.textContent = '💜 爱情认知';
        typeTag.className = 'px-4 py-2 rounded-full text-sm font-medium type-love';
    }
    
    // 更新题目内容
    document.getElementById('question-text').textContent = question.text;
    
    // 清空并生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 随机打乱选项顺序
    const shuffledOptions = shuffleArray([...question.options]);
    
    shuffledOptions.forEach((option, optIndex) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card flex items-center';
        optionCard.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + optIndex)}</span>
            <span class="flex-1">${option.text}</span>
        `;
        
        optionCard.addEventListener('click', () => {
            // 记录答案
            answers[index] = {
                questionId: question.id,
                questionText: question.text,
                optionIndex: optIndex,
                optionText: option.text,
                score: option.score,
                type: question.type,
                dimension: question.dimension
            };
            
            // 添加选中效果
            document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
            optionCard.classList.add('selected');
            
            // 添加振动效果
            optionCard.classList.add('animate-shake');
            setTimeout(() => optionCard.classList.remove('animate-shake'), 300);
            
            // 延迟后自动跳转下一题
            setTimeout(() => {
                if (index < currentQuestions.length - 1) {
                    loadQuestion(index + 1);
                } else {
                    // 完成测试，计算结果
                    calculateResults();
                }
            }, 500);
        });
        
        optionsContainer.appendChild(optionCard);
    });
}

// ==================== 计算结果 ====================
function calculateResults() {
    // 计算创业思维得分
    const entrepreneurAnswers = answers.filter(a => a.type === 'entrepreneurship');
    const entrepreneurTotal = entrepreneurAnswers.reduce((sum, a) => sum + a.score, 0);
    const entrepreneurMaxScore = entrepreneurAnswers.length * 3;
    const entrepreneurPercentage = Math.round((entrepreneurTotal / entrepreneurMaxScore) * 100);
    
    // 计算爱情认知得分
    const loveAnswers = answers.filter(a => a.type === 'love');
    const loveTotal = loveAnswers.reduce((sum, a) => sum + a.score, 0);
    const loveMaxScore = loveAnswers.length * 3;
    const lovePercentage = Math.round((loveTotal / loveMaxScore) * 100);
    
    // 计算各维度得分（用于雷达图）
    const dimensionScores = {
        opportunity: 0, risk: 0, market: 0, passion: 0, efficacy: 0, motivation: 0, innovation: 0, execution: 0,
        emotion: 0, empathy: 0, security: 0, communication: 0, boundary: 0, conflict: 0, intimacy: 0, trust: 0
    };
    
    // 统计每个维度的题目数量（用于计算百分比）
    const dimensionCounts = {
        opportunity: 0, risk: 0, market: 0, passion: 0, efficacy: 0, motivation: 0, innovation: 0, execution: 0,
        emotion: 0, empathy: 0, security: 0, communication: 0, boundary: 0, conflict: 0, intimacy: 0, trust: 0
    };
    
    // 统计各维度得分和题目数
    answers.forEach(answer => {
        const mapping = dimensionMapping[answer.dimension];
        if (mapping) {
            const key = mapping.key;
            if (dimensionScores[key] !== undefined) {
                dimensionScores[key] += answer.score;
                dimensionCounts[key]++;
            }
        }
    });
    
    // 转换为百分比（根据实际抽到的题目数计算）
    Object.keys(dimensionScores).forEach(key => {
        if (dimensionCounts[key] > 0) {
            const maxScore = dimensionCounts[key] * 3; // 每题最高3分
            dimensionScores[key] = Math.round((dimensionScores[key] / maxScore) * 100);
        } else {
            dimensionScores[key] = 0; // 如果该维度没有题目，设为0
        }
    });
    
    // 保存结果到localStorage
    const result = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        entrepreneurScore: entrepreneurPercentage,
        loveScore: lovePercentage,
        isAwakened: entrepreneurPercentage >= 80 && lovePercentage >= 80,
        dimensionScores,
        answers
    };
    
    // 获取历史记录
    const history = JSON.parse(localStorage.getItem('kaizhi_history') || '[]');
    history.unshift(result);
    // 只保留最近10条记录
    if (history.length > 10) history.pop();
    localStorage.setItem('kaizhi_history', JSON.stringify(history));
    
    // 显示结果页面
    showResult(result);
}

// ==================== 显示结果 ====================
function showResult(result) {
    showPage('result');
    
    // 模块一：核心结果卡片
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultSubtitle = document.getElementById('result-subtitle');
    
    // 根据测试类型显示不同的开智状态
    if (currentTestType === 'entrepreneur') {
        // 创业思维模式
        if (result.entrepreneurScore >= 80) {
            resultIcon.textContent = '◇';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultTitle.textContent = '已开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultSubtitle.textContent = '恭喜！你的创业思维已达到较高水平';
        } else {
            resultIcon.textContent = '⊙';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-gray-400';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-gray-300';
            resultSubtitle.textContent = '继续努力！创业思维觉醒正在路上';
        }
    } else if (currentTestType === 'love') {
        // 爱情认知模式
        if (result.loveScore >= 80) {
            resultIcon.textContent = '◇';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
            resultTitle.textContent = '已开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
            resultSubtitle.textContent = '恭喜！你的爱情认知已达到较高水平';
        } else {
            resultIcon.textContent = '⊙';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-gray-400';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-gray-300';
            resultSubtitle.textContent = '继续努力！爱情认知觉醒正在路上';
        }
    } else {
        // 综合测试模式
        if (result.isAwakened) {
            resultIcon.textContent = '◇';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]';
            resultTitle.textContent = '已开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]';
            resultSubtitle.textContent = '恭喜！你的创业思维与爱情认知均已达到较高水平';
        } else {
            resultIcon.textContent = '⊙';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-gray-400';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-gray-300';
            resultSubtitle.textContent = '继续努力！觉醒正在路上';
        }
    }
    
    // 更新进度环
    animateScore('entrepreneur-score', result.entrepreneurScore);
    animateScore('love-score', result.loveScore);
    
    // 更新等级
    const entrepreneurLevel = getLevel(result.entrepreneurScore);
    const loveLevel = getLevel(result.loveScore);
    document.getElementById('entrepreneur-level').textContent = entrepreneurLevel.level;
    document.getElementById('love-level').textContent = loveLevel.level;
    
    // 更新进度环SVG
    updateProgressRing('entrepreneur-ring', result.entrepreneurScore);
    updateProgressRing('love-ring', result.loveScore);
    
    // 根据测试类型显示/隐藏分数模块
    const entrepreneurScoreCard = document.querySelector('.entrepreneur-score-card');
    const loveScoreCard = document.querySelector('.love-score-card');
    
    if (currentTestType === 'entrepreneur') {
        entrepreneurScoreCard.style.display = 'block';
        loveScoreCard.style.display = 'none';
    } else if (currentTestType === 'love') {
        entrepreneurScoreCard.style.display = 'none';
        loveScoreCard.style.display = 'block';
    } else {
        entrepreneurScoreCard.style.display = 'block';
        loveScoreCard.style.display = 'block';
    }
    
    // 模块二：雷达图（根据抽取的题目动态显示维度）
    setTimeout(() => {
        initRadarChart(result.dimensionScores, currentSelectedQuestions);
    }, 500);
    
    // 模块三：人格画像（根据测试类型获取不同的画像）
    const profile = getProfile(result.entrepreneurScore, result.loveScore, result.dimensionScores, currentTestType);
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-description').textContent = profile.description;
    
    // 模块四：当前阶段
    const stage = getStage(result.entrepreneurScore, result.loveScore, currentTestType);
    document.getElementById('stage-name').textContent = stage.stage;
    document.getElementById('stage-description').textContent = stage.description;
    document.getElementById('stage-progress').style.width = stage.percentage + '%';
    
    // 模块五：成长提升建议（根据雷达图维度得分）
    const entrepreneurAdvice = getAdvice('entrepreneur', result.entrepreneurScore, result.dimensionScores);
    const loveAdvice = getAdvice('love', result.loveScore, result.dimensionScores);
    
    document.getElementById('entrepreneur-advice').innerHTML = 
        entrepreneurAdvice.map(a => `<li class="flex items-start gap-2"><span class="text-[#F59E0B]">•</span><span class="text-gray-300">${a}</span></li>`).join('');
    
    document.getElementById('love-advice').innerHTML = 
        loveAdvice.map(a => `<li class="flex items-start gap-2"><span class="text-[#7C3AED]">•</span><span class="text-gray-300">${a}</span></li>`).join('');
    
    // 获取改变建议
    const entrepreneurChange = getAdvice('entrepreneur', result.entrepreneurScore, result.dimensionScores);
    const loveChange = getAdvice('love', result.loveScore, result.dimensionScores);
    
    // 填充改变建议
    document.getElementById('entrepreneur-change').innerHTML = 
        entrepreneurChange.map(a => `<li class="flex items-start gap-2"><span class="text-[#F59E0B]">•</span><span class="text-gray-300">${a}</span></li>`).join('');
    
    document.getElementById('love-change').innerHTML = 
        loveChange.map(a => `<li class="flex items-start gap-2"><span class="text-[#7C3AED]">•</span><span class="text-gray-300">${a}</span></li>`).join('');
    
    // 根据测试类型显示/隐藏提升建议模块
    const entrepreneurAdviceSection = document.querySelector('.entrepreneur-advice-section');
    const loveAdviceSection = document.querySelector('.love-advice-section');
    const entrepreneurChangeSection = document.querySelector('.entrepreneur-change-section');
    const loveChangeSection = document.querySelector('.love-change-section');
    
    if (currentTestType === 'entrepreneur') {
        entrepreneurAdviceSection.style.display = 'block';
        entrepreneurChangeSection.style.display = 'block';
        loveAdviceSection.style.display = 'none';
        loveChangeSection.style.display = 'none';
    } else if (currentTestType === 'love') {
        entrepreneurAdviceSection.style.display = 'none';
        entrepreneurChangeSection.style.display = 'none';
        loveAdviceSection.style.display = 'block';
        loveChangeSection.style.display = 'block';
    } else {
        entrepreneurAdviceSection.style.display = 'block';
        entrepreneurChangeSection.style.display = 'block';
        loveAdviceSection.style.display = 'block';
        loveChangeSection.style.display = 'block';
    }
    
    // 模块六：推荐阅读（根据测试类型和雷达图维度推荐）
    const entrepreneurBooks = getBooks('entrepreneur', result.dimensionScores);
    const loveBooks = getBooks('love', result.dimensionScores);
    
    // 获取所有书籍卡片
    const book1 = document.getElementById('book-1');
    const book2 = document.getElementById('book-2');
    const book3 = document.getElementById('book-3');
    const book4 = document.getElementById('book-4');
    
    if (currentTestType === 'entrepreneur') {
        // 创业思维测试：显示4本创业思维书籍
        book1.style.display = 'block';
        book2.style.display = 'block';
        book3.style.display = 'block';
        book4.style.display = 'block';
        
        // 填充创业思维书籍
        entrepreneurBooks.slice(0, 4).forEach((book, i) => {
            const bookEl = document.getElementById(`book-${i + 1}`);
            bookEl.querySelector('h4').textContent = book.title;
            bookEl.querySelector('p').textContent = book.reason;
        });
    } else if (currentTestType === 'love') {
        // 爱情认知测试：显示4本爱情认知书籍
        book1.style.display = 'block';
        book2.style.display = 'block';
        book3.style.display = 'block';
        book4.style.display = 'block';
        
        // 填充爱情认知书籍
        loveBooks.slice(0, 4).forEach((book, i) => {
            const bookEl = document.getElementById(`book-${i + 1}`);
            bookEl.querySelector('h4').textContent = book.title;
            bookEl.querySelector('p').textContent = book.reason;
        });
    } else {
        // 综合测试：显示全部4本书
        book1.style.display = 'block';
        book2.style.display = 'block';
        book3.style.display = 'block';
        book4.style.display = 'block';
        
        // 填充创业思维书籍
        entrepreneurBooks.slice(0, 2).forEach((book, i) => {
            const bookEl = i === 0 ? book1 : book2;
            bookEl.querySelector('h4').textContent = book.title;
            bookEl.querySelector('p').textContent = book.reason;
        });
        
        // 填充爱情认知书籍
        loveBooks.slice(0, 2).forEach((book, i) => {
            const bookEl = i === 0 ? book3 : book4;
            bookEl.querySelector('h4').textContent = book.title;
            bookEl.querySelector('p').textContent = book.reason;
        });
    }
    
    // 模块七：分享卡片
    updateShareCard(result);
    
    // 模块八：历史记录
    loadHistory();
    
    // 更新分享按钮状态
    const isAwakenedForShare = currentTestType === 'entrepreneur' 
        ? result.entrepreneurScore >= 80 
        : currentTestType === 'love' 
            ? result.loveScore >= 80 
            : result.isAwakened;
    
    document.getElementById('share-badge').className = isAwakenedForShare ? 'badge-awakened' : 'badge-awakening';
    document.getElementById('share-badge').textContent = isAwakenedForShare ? '已开智' : '待觉醒';
    document.getElementById('share-icon').textContent = isAwakenedForShare ? '◇' : '⊙';
    document.getElementById('share-title').textContent = isAwakenedForShare ? '已开智' : '未开智';
    document.getElementById('share-profile').textContent = profile.title;
    document.getElementById('share-entrepreneur').textContent = result.entrepreneurScore;
    document.getElementById('share-love').textContent = result.loveScore;
    
    // 根据测试类型隐藏分享卡片中的分数
    const shareEntrepreneurScore = document.querySelector('.share-entrepreneur-score');
    const shareLoveScore = document.querySelector('.share-love-score');
    
    if (currentTestType === 'entrepreneur') {
        shareEntrepreneurScore.style.display = 'block';
        shareLoveScore.style.display = 'none';
    } else if (currentTestType === 'love') {
        shareEntrepreneurScore.style.display = 'none';
        shareLoveScore.style.display = 'block';
    } else {
        shareEntrepreneurScore.style.display = 'block';
        shareLoveScore.style.display = 'block';
    }
}

// ==================== 分数动画 ====================
function animateScore(elementId, targetScore) {
    const element = document.getElementById(elementId);
    element.classList.add('updating');
    
    let current = 0;
    const duration = 1000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        current = Math.round(targetScore * easeOut);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.classList.remove('updating');
        }
    }
    
    requestAnimationFrame(update);
}

// ==================== 更新进度环 ====================
function updateProgressRing(elementId, percentage) {
    const circumference = 2 * Math.PI * 56; // 半径56
    const offset = circumference - (percentage / 100) * circumference;
    
    const ring = document.getElementById(elementId);
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;
    ring.style.transition = 'stroke-dashoffset 1s ease-out';
}

// ==================== 初始化雷达图 ====================
function initRadarChart(scores, selectedQuestions = null) {
    const ctx = document.getElementById('radar-chart').getContext('2d');
    
    let labels, data;
    
    // 维度映射
    const dimensionLabels = {
        // 创业思维维度
        opportunity: '机会识别',
        risk: '风险容忍',
        market: '市场洞察',
        passion: '创业热情',
        efficacy: '自我效能',
        motivation: '内在驱动',
        innovation: '创新倾向',
        execution: '行动执行',
        // 爱情认知维度
        emotion: '情绪管理',
        empathy: '共情能力',
        security: '安全感',
        communication: '沟通能力',
        boundary: '边界意识',
        conflict: '冲突处理',
        intimacy: '亲密能力',
        trust: '信任建立'
    };
    
    // 如果有已选择的题目，根据题目动态生成雷达图维度
    if (selectedQuestions && selectedQuestions.length > 0) {
        const activeDimensions = new Set();
        selectedQuestions.forEach(q => {
            if (q.type === 'entrepreneurship') {
                const dimension = q.dimension || q.id.split('_')[0];
                activeDimensions.add('entrepreneur_' + dimension);
            } else if (q.type === 'love') {
                const dimension = q.dimension || q.id.split('_')[0];
                activeDimensions.add('love_' + dimension);
            }
        });
        
        labels = [];
        data = [];
        
        // 根据活跃维度生成雷达图
        activeDimensions.forEach(dim => {
            const [type, name] = dim.split('_');
            const label = dimensionLabels[name];
            if (label) {
                labels.push(label);
                data.push(scores[name] || 0);
            }
        });
        
        // 确保不超过8个维度
        labels = labels.slice(0, 8);
        data = data.slice(0, 8);
    } else {
        // 默认：根据测试类型显示不同的雷达图维度
        if (currentTestType === 'entrepreneur') {
            // 创业思维雷达图：8个维度
            labels = ['机会识别', '风险容忍', '市场洞察', '创业热情', '自我效能', '内在驱动', '创新倾向', '行动执行'];
            data = [
                scores.opportunity || 0, 
                scores.risk || 0, 
                scores.market || 0, 
                scores.passion || 0, 
                scores.efficacy || 0, 
                scores.motivation || 0, 
                scores.innovation || 0, 
                scores.execution || 0
            ];
        } else if (currentTestType === 'love') {
            // 爱情认知雷达图：8个维度
            labels = ['情绪管理', '共情能力', '安全感', '沟通能力', '边界意识', '冲突处理', '亲密能力', '信任建立'];
            data = [
                scores.emotion || 0, 
                scores.empathy || 0, 
                scores.security || 0, 
                scores.communication || 0, 
                scores.boundary || 0, 
                scores.conflict || 0, 
                scores.intimacy || 0, 
                scores.trust || 0
            ];
        } else {
            // 综合测试雷达图：动态维度
            labels = [];
            data = [];
            
            // 添加创业思维维度（如果有）
            const entrepreneurDims = ['opportunity', 'risk', 'market', 'passion', 'efficacy', 'motivation', 'innovation', 'execution'];
            entrepreneurDims.forEach(dim => {
                if (scores[dim] !== undefined && scores[dim] > 0) {
                    labels.push(dimensionLabels[dim]);
                    data.push(scores[dim]);
                }
            });
            
            // 添加爱情认知维度（如果有）
            const loveDims = ['emotion', 'empathy', 'security', 'communication', 'boundary', 'conflict', 'intimacy', 'trust'];
            loveDims.forEach(dim => {
                if (scores[dim] !== undefined && scores[dim] > 0) {
                    labels.push(dimensionLabels[dim]);
                    data.push(scores[dim]);
                }
            });
            
            // 确保不超过8个维度
            labels = labels.slice(0, 8);
            data = data.slice(0, 8);
        }
    }
    
    // 如果没有数据，使用默认值
    if (labels.length === 0) {
        labels = ['能力值'];
        data = [0];
    }
    
    if (radarChart) {
        radarChart.destroy();
    }
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels,
            datasets: [{
                label: '能力值',
                data,
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                borderColor: 'rgba(124, 58, 237, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(124, 58, 237, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: 'rgba(255, 255, 255, 0.5)',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        font: {
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const key = ['opportunity', 'risk', 'innovation', 'execution', 'emotion', 'communication', 'boundary', 'empathy'][context.dataIndex];
                            const insight = getDimensionInsight(key);
                            return `得分: ${context.raw}分\n${insight.title}`;
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            },
            onClick: (chart, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const keys = ['opportunity', 'risk', 'innovation', 'execution', 'emotion', 'communication', 'boundary', 'empathy'];
                    showDimensionModal(keys[index]);
                }
            }
        }
    });
}

// ==================== 显示维度详情弹窗 ====================
function showDimensionModal(dimensionKey) {
    const insight = getDimensionInsight(dimensionKey);
    
    document.getElementById('modal-title').textContent = insight.title;
    document.getElementById('modal-content').textContent = insight.description;
    
    const behaviorList = document.getElementById('modal-behavior-list');
    behaviorList.innerHTML = insight.behaviors.map(b => `<li>• ${b}</li>`).join('');
    
    document.getElementById('dimension-modal').classList.add('modal-active');
}

// ==================== 关闭弹窗 ====================
function closeModal() {
    document.getElementById('dimension-modal').classList.remove('modal-active');
    document.getElementById('review-modal').classList.remove('modal-active');
}

// ==================== 更新分享卡片 ====================
function updateShareCard(result) {
    const profile = getProfile(result.entrepreneurScore, result.loveScore, result.dimensionScores);
    
    document.getElementById('share-icon').textContent = result.isAwakened ? '◇' : '⊙';
    document.getElementById('share-title').textContent = result.isAwakened ? '已开智' : '未开智';
    document.getElementById('share-profile').textContent = profile.title;
    document.getElementById('share-entrepreneur').textContent = result.entrepreneurScore;
    document.getElementById('share-love').textContent = result.loveScore;
}

// ==================== 下载分享卡片 ====================
function downloadShareCard() {
    const shareCard = document.getElementById('share-card');
    
    html2canvas(shareCard, {
        backgroundColor: '#0A1628',
        scale: 2
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `开智觉醒_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// ==================== 复制链接 ====================
function copyLink() {
    const username = document.getElementById('username-input').value || '匿名';
    const url = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(username)}`;
    
    navigator.clipboard.writeText(url).then(() => {
        alert('链接已复制到剪贴板！');
    });
}

// ==================== 加载历史记录 ====================
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('kaizhi_history') || '[]');
    const historyList = document.getElementById('history-list');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-center text-gray-500 py-4">暂无历史记录</p>';
        return;
    }
    
    historyList.innerHTML = history.slice(0, 5).map((record, index) => {
        const date = new Date(record.timestamp);
        const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        return `
            <div class="history-item">
                <div>
                    <p class="text-white text-sm">测试 ${index + 1}</p>
                    <p class="text-gray-500 text-xs">${dateStr}</p>
                </div>
                <div class="text-right">
                    <p class="text-[#F59E0B] font-medium">${record.entrepreneurScore}</p>
                    <p class="text-[#7C3AED] font-medium">${record.loveScore}</p>
                </div>
            </div>
        `;
    }).join('');
    
    // 更新历史趋势图
    initHistoryChart(history);
}

// ==================== 初始化历史趋势图 ====================
function initHistoryChart(history) {
    if (history.length < 2) {
        document.getElementById('history-chart-container').style.display = 'none';
        return;
    }
    
    document.getElementById('history-chart-container').style.display = 'block';
    
    const ctx = document.getElementById('history-chart').getContext('2d');
    
    if (historyChart) {
        historyChart.destroy();
    }
    
    // 取最近5条记录
    const recentHistory = history.slice(0, 5).reverse();
    
    historyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: recentHistory.map((_, i) => `测试${recentHistory.length - i}`),
            datasets: [
                {
                    label: '创业思维',
                    data: recentHistory.map(h => h.entrepreneurScore),
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: '爱情认知',
                    data: recentHistory.map(h => h.loveScore),
                    borderColor: '#7C3AED',
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
}

// ==================== 主题切换 ====================
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.add('theme-light');
    }
}

// ==================== 音乐控制 ====================
// 背景音乐播放器
let audioPlayer = null;
let bgmFiles = ['bgm1.mp3', 'bgm2.mp3', 'bgm3.mp3', 'bgm4.mp3', 'bgm5.mp3'];
let currentBgmIndex = 0;
let musicAvailable = false; // 标记音乐文件是否可用

// 检测音乐文件是否存在
async function checkMusicAvailability() {
    for (const file of bgmFiles) {
        try {
            const response = await fetch(`bgm/${file}`, { method: 'HEAD' });
            if (response.ok) {
                musicAvailable = true;
                return true;
            }
        } catch (e) {
            // 文件不存在，继续检查下一个
        }
    }
    musicAvailable = false;
    return false;
}

// 初始化音频播放器
function initAudioPlayer() {
    audioPlayer = new Audio();
    audioPlayer.loop = false;
    audioPlayer.volume = 0.3; // 默认音量30%
    
    // 播放完成后自动播放下一首
    audioPlayer.addEventListener('ended', () => {
        if (isMusicPlaying && musicAvailable) {
            playNextBgm();
        }
    });
    
    // 错误处理
    audioPlayer.addEventListener('error', () => {
        if (musicAvailable) {
            // 如果有音乐文件但播放失败，才禁用
            isMusicPlaying = false;
            const toggle = document.getElementById('music-toggle');
            if (toggle) {
                toggle.classList.remove('toggle-on');
            }
        }
    });
}

// 播放下一首背景音乐
function playNextBgm() {
    currentBgmIndex = (currentBgmIndex + 1) % bgmFiles.length;
    playBgm(bgmFiles[currentBgmIndex]);
}

// 播放指定背景音乐
function playBgm(filename) {
    if (audioPlayer) {
        audioPlayer.src = `bgm/${filename}`;
        audioPlayer.play().catch(() => {
            // 静默处理播放失败
        });
    }
}

// 切换音乐播放状态
async function toggleMusic() {
    // 第一次点击时检测音乐文件是否存在
    if (!musicAvailable && !isMusicPlaying) {
        await checkMusicAvailability();
    }
    
    // 如果没有音乐文件，按钮不起作用
    if (!musicAvailable && !isMusicPlaying) {
        return;
    }
    
    // 初始化播放器
    if (!audioPlayer) {
        initAudioPlayer();
    }
    
    isMusicPlaying = !isMusicPlaying;
    const toggle = document.getElementById('music-toggle');
    
    if (isMusicPlaying) {
        toggle.classList.add('toggle-on');
        playBgm(bgmFiles[currentBgmIndex]);
    } else {
        toggle.classList.remove('toggle-on');
        if (audioPlayer) {
            audioPlayer.pause();
        }
    }
}

// ==================== 清除历史记录 ====================
function clearHistory() {
    if (confirm('确定要清除所有历史记录吗？')) {
        localStorage.removeItem('kaizhi_history');
        loadHistory();
    }
}

// ==================== 设置面板控制 ====================
function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('translate-x-full');
}

// ==================== 显示答题回顾 ====================
function showReview() {
    const history = JSON.parse(localStorage.getItem('kaizhi_history') || '[]');
    const latestResult = history[0];
    
    if (!latestResult) return;
    
    const reviewContent = document.getElementById('review-content');
    reviewContent.innerHTML = latestResult.answers.map((answer, index) => {
        const typeIcon = answer.type === 'entrepreneurship' ? '🚀' : '💜';
        const optionLabels = ['A', 'B', 'C', 'D'];
        
        return `
            <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <div class="flex items-start gap-3">
                    <span class="text-lg">${typeIcon}</span>
                    <div class="flex-1">
                        <p class="text-sm text-gray-400 mb-1">第${index + 1}题</p>
                        <p class="text-white mb-2">${answer.questionText}</p>
                        <p class="text-[#7C3AED]">你的选择：${optionLabels[answer.optionIndex]}. ${answer.optionText}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('review-modal').classList.add('modal-active');
}

// ==================== 小挑战功能 ====================

// 生成随机挑战
function generateChallenge() {
    const history = JSON.parse(localStorage.getItem('kaizhi_history') || '[]');
    const latestResult = history[0];
    
    // 检查是否已经生成过挑战
    if (latestResult && latestResult.challengeGenerated) {
        alert('本次测评已经生成过挑战了，下次测评再尝试新的挑战吧！');
        return;
    }
    
    // 标记为已生成
    if (latestResult) {
        latestResult.challengeGenerated = true;
        localStorage.setItem('kaizhi_history', JSON.stringify(history));
    }
    
    // 根据测评类型选择挑战池
    let challenges = [];
    let challengeType = '';
    let typeIcon = '';
    let typeColor = '';
    
    if (latestResult) {
        const hasEntrepreneur = latestResult.answers.some(a => a.type === 'entrepreneurship');
        const hasLove = latestResult.answers.some(a => a.type === 'love');
        
        if (hasEntrepreneur && hasLove) {
            // 综合测试，随机选择一种挑战
            if (Math.random() > 0.5) {
                challenges = entrepreneurChallenges;
                challengeType = '创业思维挑战';
                typeIcon = '🚀';
                typeColor = '#F59E0B';
            } else {
                challenges = loveChallenges;
                challengeType = '爱情认知挑战';
                typeIcon = '💜';
                typeColor = '#7C3AED';
            }
        } else if (hasEntrepreneur) {
            challenges = entrepreneurChallenges;
            challengeType = '创业思维挑战';
            typeIcon = '🚀';
            typeColor = '#F59E0B';
        } else {
            challenges = loveChallenges;
            challengeType = '爱情认知挑战';
            typeIcon = '💜';
            typeColor = '#7C3AED';
        }
    } else {
        // 默认综合挑战
        challenges = Math.random() > 0.5 ? entrepreneurChallenges : loveChallenges;
        challengeType = challenges === entrepreneurChallenges ? '创业思维挑战' : '爱情认知挑战';
        typeIcon = challenges === entrepreneurChallenges ? '🚀' : '💜';
        typeColor = challenges === entrepreneurChallenges ? '#F59E0B' : '#7C3AED';
    }
    
    // 随机选择一个挑战
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    
    // 显示挑战
    document.getElementById('challenge-content').classList.add('hidden');
    document.getElementById('challenge-display').classList.remove('hidden');
    
    // 更新挑战信息
    const typeTag = document.getElementById('challenge-type');
    typeTag.textContent = `${typeIcon} ${challengeType}`;
    typeTag.style.background = `${typeColor}20`;
    typeTag.style.color = typeColor;
    
    const difficultyTag = document.getElementById('challenge-difficulty');
    difficultyTag.textContent = challenge.difficulty;
    if (challenge.difficulty === '入门') {
        difficultyTag.style.background = '#10B98120';
        difficultyTag.style.color = '#10B981';
    } else if (challenge.difficulty === '进阶') {
        difficultyTag.style.background = '#F59E0B20';
        difficultyTag.style.color = '#F59E0B';
    } else {
        difficultyTag.style.background = '#EF444420';
        difficultyTag.style.color = '#EF4444';
    }
    
    document.getElementById('challenge-title').textContent = challenge.title;
    document.getElementById('challenge-description').textContent = challenge.description;
    document.getElementById('challenge-time').textContent = challenge.time;
    document.getElementById('challenge-status').textContent = '✨ 祝挑战顺利！记得下次测评时回顾你的完成情况';
    
    // 禁用按钮
    document.getElementById('generate-challenge').disabled = true;
    document.getElementById('generate-challenge').style.opacity = '0.5';
    document.getElementById('generate-challenge').style.cursor = 'not-allowed';
}

// ==================== 初始化 ====================
function init() {
    // 初始化粒子背景
    initParticles();
    
    // 绑定事件监听
    document.getElementById('start-test').addEventListener('click', startTest);
    document.getElementById('restart-test').addEventListener('click', startTest);
    document.getElementById('learn-more').addEventListener('click', () => {
        // 修复：平滑滚动到信息卡片区域
        const cards = document.querySelectorAll('.info-card');
        if (cards.length > 0) {
            cards[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
    
    // 设置面板
    document.getElementById('settings-btn').addEventListener('click', toggleSettings);
    document.getElementById('theme-dark').addEventListener('click', () => {
        isDarkTheme = true;
        document.body.classList.remove('theme-light');
    });
    document.getElementById('theme-light').addEventListener('click', () => {
        isDarkTheme = false;
        document.body.classList.add('theme-light');
    });
    document.getElementById('music-toggle').addEventListener('click', toggleMusic);
    document.getElementById('clear-history').addEventListener('click', clearHistory);
    
    // 测试类型选择
    document.querySelectorAll('.test-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有active样式
            document.querySelectorAll('.test-type-btn').forEach(b => {
                b.classList.remove('bg-gradient-to-r', 'from-[#7C3AED]', 'to-[#F59E0B]');
                b.classList.add('bg-white/10');
            });
            // 添加active样式到当前按钮
            this.classList.remove('bg-white/10');
            this.classList.add('bg-gradient-to-r', 'from-[#7C3AED]', 'to-[#F59E0B]');
        });
    });
    
    // 返回按钮 - 返回首页
    document.getElementById('back-btn').addEventListener('click', () => {
        if (confirm('确定要退出测评吗？当前进度将会丢失。')) {
            // 直接回到首页，确保页面状态正确
            showPage('home');
        }
    });
    
    // 暂停按钮
    document.getElementById('pause-btn').addEventListener('click', () => {
        const pauseIcon = document.querySelector('.pause-icon');
        const playIcon = document.querySelector('.play-icon');
        const questionContainer = document.getElementById('question-container');
        
        if (pauseIcon.classList.contains('hidden')) {
            // 恢复
            pauseIcon.classList.remove('hidden');
            playIcon.classList.add('hidden');
            questionContainer.style.opacity = '1';
            questionContainer.style.pointerEvents = 'auto';
        } else {
            // 暂停
            pauseIcon.classList.add('hidden');
            playIcon.classList.remove('hidden');
            questionContainer.style.opacity = '0.3';
            questionContainer.style.pointerEvents = 'none';
        }
    });
    
    // 小挑战生成按钮
    document.getElementById('generate-challenge').addEventListener('click', generateChallenge);
    
    // 弹窗控制
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('close-review').addEventListener('click', closeModal);
    
    // 分享功能
    document.getElementById('download-card').addEventListener('click', downloadShareCard);
    document.getElementById('copy-link').addEventListener('click', copyLink);
    
    // 查看对比
    document.getElementById('view-comparison').addEventListener('click', showReview);
    
    // 点击外部关闭弹窗
    document.getElementById('dimension-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('dimension-modal')) closeModal();
    });
    document.getElementById('review-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('review-modal')) closeModal();
    });
    
    // 点击外部关闭设置面板
    document.addEventListener('click', (e) => {
        const settingsBtn = document.getElementById('settings-btn');
        const settingsPanel = document.getElementById('settings-panel');
        if (!settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
            settingsPanel.classList.add('translate-x-full');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
