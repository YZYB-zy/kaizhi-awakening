// ==================== 测试类型介绍数据 ====================
const testTypeInfo = {
    comprehensive: {
        title: '🎯 综合测试',
        content: '<p class="mb-3">综合测试将同时评估您的创业思维和爱情认知能力。</p><p class="mb-3"><strong class="text-[#F59E0B]">🚀 创业思维</strong>：评估您在商业创新领域的核心能力，包括机会识别、风险容忍、市场洞察等维度。</p><p class="mb-3"><strong class="text-[#7C3AED]">💜 爱情认知</strong>：探索您在情感关系中的成熟度，包括情绪管理、共情能力、沟通能力等维度。</p><p>综合测试结合以上两个维度，为您提供全面的自我认知报告。</p>'
    },
    entrepreneur: {
        title: '🚀 创业思维',
        content: '<p class="mb-3">创业思维是指发现机会、创造价值并将想法付诸实践的能力。</p><p class="mb-3">本次测评将从以下八个维度评估您的创业思维：</p><ul class="list-disc list-inside space-y-1 mb-3 text-gray-400"><li><strong class="text-[#F59E0B]">机会识别</strong> - 发现商业机会的敏锐度</li><li><strong class="text-[#F59E0B]">风险容忍</strong> - 面对不确定性的态度</li><li><strong class="text-[#F59E0B]">市场洞察</strong> - 理解市场需求的能力</li><li><strong class="text-[#F59E0B]">创业热情</strong> - 对创业的内在动力</li><li><strong class="text-[#F59E0B]">自我效能</strong> - 对自身能力的信心</li><li><strong class="text-[#F59E0B]">内在驱动</strong> - 自我激励与目标导向</li><li><strong class="text-[#F59E0B]">创新倾向</strong> - 创造性解决问题的能力</li><li><strong class="text-[#F59E0B]">行动执行</strong> - 将想法转化为行动</li></ul><p>了解这些维度可以帮助您更好地认识自己的创业潜力。</p>'
    },
    love: {
        title: '💜 爱情认知',
        content: '<p class="mb-3">爱情认知是指理解和处理情感关系的能力，是建立健康亲密关系的基础。</p><p class="mb-3">本次测评将从以下八个维度评估您的爱情认知：</p><ul class="list-disc list-inside space-y-1 mb-3 text-gray-400"><li><strong class="text-[#7C3AED]">情绪管理</strong> - 识别和调节情绪的能力</li><li><strong class="text-[#7C3AED]">共情能力</strong> - 理解他人感受的能力</li><li><strong class="text-[#7C3AED]">安全感</strong> - 在关系中感到安全的程度</li><li><strong class="text-[#7C3AED]">沟通能力</strong> - 有效表达与倾听的能力</li><li><strong class="text-[#7C3AED]">边界意识</strong> - 保持个人边界的意识</li><li><strong class="text-[#7C3AED]">冲突处理</strong> - 建设性解决分歧的能力</li><li><strong class="text-[#7C3AED]">亲密能力</strong> - 建立深度连接的能力</li><li><strong class="text-[#7C3AED]">信任建立</strong> - 在关系中建立信任的能力</li></ul><p>了解这些维度可以帮助您建立更健康、更满意的人际关系。</p>'
    }
};

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

// 创业思维题库 (30题) - 每个题目只有一个高分选项(3分)，其他为低分
const entrepreneurQuestions = [
    // 机会识别能力
    {
        id: 'e1',
        text: '你走在街上，看到一家排长队的店铺，你的第一反应是...',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '思考：他们做对了什么？这个模式能复制吗？', score: 3 },
            { text: '好奇：这家店有什么特别之处？', score: 2 },
            { text: '观察：排队的人是什么类型？', score: 1 },
            { text: '无视：只是凑热闹罢了', score: 0 }]
    },
    {
        id: 'e2',
        text: '有人说"机会只留给有准备的人"，你认为...',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '机会需要被创造，而不是等待', score: 3 },
            { text: '准备是基础，但行动更关键', score: 2 },
            { text: '运气和时机也很重要', score: 1 },
            { text: '有些机会确实需要等待', score: 0 }]
    },
    {
        id: 'e3',
        text: '当你发现一个"蓝海市场"，但所有人都说"不可能"，你会...',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '深入验证，如果逻辑成立就去做', score: 3 },
            { text: '先小范围测试，用数据说话', score: 2 },
            { text: '听听反对意见，也许有道理', score: 1 },
            { text: '既然大家都说不，可能真的不行', score: 0 }]
    },
    // 风险容忍度
    {
        id: 'e4',
        text: '如果人生是一场赌局，你手中的筹码是...',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '我会增加筹码，因为人生值得冒险', score: 3 },
            { text: '我会谨慎下注，但绝不弃牌', score: 2 },
            { text: '我会观望局势，等待最佳时机', score: 1 },
            { text: '我会保护现有筹码，稳中求进', score: 0 }]
    },
    {
        id: 'e5',
        text: '"失败是成功之母"这句话，对你意味着...',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '失败是学费，每次都让我更强大', score: 3 },
            { text: '失败有价值，但要控制成本', score: 2 },
            { text: '失败可以接受，但要尽量避免', score: 1 },
            { text: '失败代价太大，需要谨慎', score: 0 }]
    },
    {
        id: 'e6',
        text: '面对"稳赚不赔"和"高风险高回报"，你倾向于...',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '评估风险收益比，选择最优解', score: 3 },
            { text: '看情况，有时需要冒险', score: 2 },
            { text: '倾向于稳妥，但也会考虑机会', score: 1 },
            { text: '选择确定性，避免后悔', score: 0 }]
    },
    // 市场洞察力
    {
        id: 'e7',
        text: '当所有人都在追逐同一个风口，你认为...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '风口意味着机会，但也要看差异化', score: 3 },
            { text: '跟随趋势，但要有自己的判断', score: 2 },
            { text: '可能已经晚了，需要谨慎', score: 1 },
            { text: '人多的地方不要去', score: 0 }]
    },
    {
        id: 'e8',
        text: '用户说"我想要A"，但你觉得他们真正需要的是"B"，你会...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '深入理解需求本质，提供真正有价值的解决方案', score: 3 },
            { text: '先给A，再引导发现B', score: 2 },
            { text: '尊重用户选择，给A', score: 1 },
            { text: '用户永远是对的', score: 0 }]
    },
    {
        id: 'e9',
        text: '关于竞争对手，你认为...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '竞争是镜子，照出自己的不足和优势', score: 3 },
            { text: '关注但不过度，专注自己的路', score: 2 },
            { text: '学习他们的优点，避免他们的错误', score: 1 },
            { text: '做好自己，不用太在意别人', score: 0 }]
    },
    // 创业热情
    {
        id: 'e10',
        text: '如果明天就是你生命的最后一天，回顾创业这件事，你会...',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '无悔，因为我在追求有意义的事', score: 3 },
            { text: '庆幸尝试过，无论结果如何', score: 2 },
            { text: '希望有更多时间去完成', score: 1 },
            { text: '也许应该选择更安稳的路', score: 0 }]
    },
    {
        id: 'e11',
        text: '深夜加班时，你内心最真实的想法是...',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '这是我的选择，我在创造价值', score: 3 },
            { text: '辛苦但值得，未来会更好', score: 2 },
            { text: '希望早点完成，好好休息', score: 1 },
            { text: '为什么我要这么累？', score: 0 }]
    },
    {
        id: 'e12',
        text: '关于"热爱"和"赚钱"的关系，你认为...',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '热爱是最好的商业模式，钱会随之而来', score: 3 },
            { text: '先有热爱，再想办法变现', score: 2 },
            { text: '赚钱和热爱可以分开', score: 1 },
            { text: '赚钱是基础，热爱是奢侈品', score: 0 }]
    },
    // 自我效能感
    {
        id: 'e13',
        text: '面对一个从未接触过的领域，你对自己说...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '我可以学会任何需要的东西', score: 3 },
            { text: '给我时间，我能搞定', score: 2 },
            { text: '需要找专业人士帮忙', score: 1 },
            { text: '这可能超出了我的能力范围', score: 0 }]
    },
    {
        id: 'e14',
        text: '当别人质疑你的能力时，你内心最真实的反应是...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '用行动和结果证明自己', score: 3 },
            { text: '接受质疑，但不会动摇信心', score: 2 },
            { text: '反思是否有道理，有则改之', score: 1 },
            { text: '也许他们说得对', score: 0 }]
    },
    {
        id: 'e15',
        text: '关于"天赋"和"努力"，你更相信...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '刻意练习可以弥补天赋差距', score: 3 },
            { text: '努力比天赋更重要', score: 2 },
            { text: '天赋决定上限，努力决定下限', score: 1 },
            { text: '有些事确实需要天赋', score: 0 }]
    },
    // 内在驱动力
    {
        id: 'e16',
        text: '如果没有人知道你的成就，你还会继续做这件事吗？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '会，因为这件事本身有意义', score: 3 },
            { text: '会，因为我在这个过程中成长', score: 2 },
            { text: '可能会，但动力会减少', score: 1 },
            { text: '不会，认可和反馈很重要', score: 0 }]
    },
    {
        id: 'e17',
        text: '你更像是哪种类型的探索者？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '开拓者：开辟新路，不惧未知', score: 3 },
            { text: '攀登者：设定目标，逐步征服', score: 2 },
            { text: '航海者：顺应风向，灵活调整', score: 1 },
            { text: '守望者：等待时机，稳中求进', score: 0 }]
    },
    {
        id: 'e18',
        text: '当目标遥不可及时，你会...',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '拆解目标，让每一步都可见', score: 3 },
            { text: '调整策略，但不放弃目标', score: 2 },
            { text: '重新评估目标的可行性', score: 1 },
            { text: '可能需要换一个更现实的目标', score: 0 }]
    },
    // 创新倾向
    {
        id: 'e19',
        text: '"我们一直这样做"这句话，对你意味着...',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '这正是需要被质疑的地方', score: 3 },
            { text: '也许有更好的方式', score: 2 },
            { text: '存在即合理，但可以优化', score: 1 },
            { text: '经验值得尊重', score: 0 }]
    },
    {
        id: 'e20',
        text: '关于"打破规则"，你认为...',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '创新往往始于打破常规', score: 3 },
            { text: '理解规则，再决定是否打破', score: 2 },
            { text: '在规则内创新更稳妥', score: 1 },
            { text: '规则是保护，不是束缚', score: 0 }]
    },
    {
        id: 'e21',
        text: '当你的想法被说"太疯狂"时，你内心想的是...',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '也许这正是它的价值所在', score: 3 },
            { text: '疯狂的想法需要更扎实的论证', score: 2 },
            { text: '可能需要调整表达方式', score: 1 },
            { text: '也许确实需要更务实一些', score: 0 }]
    },
    // 行动执行
    {
        id: 'e22',
        text: '"完美是优秀的敌人"这句话，你如何看待？',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '先完成，再完美，迭代是关键', score: 3 },
            { text: '追求卓越，但接受不完美', score: 2 },
            { text: '质量很重要，但速度也要兼顾', score: 1 },
            { text: '宁可慢，也要做好', score: 0 }]
    },
    {
        id: 'e23',
        text: '当计划赶不上变化时，你会...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '拥抱变化，调整方向继续前进', score: 3 },
            { text: '快速响应，重新制定计划', score: 2 },
            { text: '尽量保持原计划，微调细节', score: 1 },
            { text: '停下来重新规划', score: 0 }]
    },
    {
        id: 'e24',
        text: '关于"说"和"做"，你更倾向于...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '先做再说，用结果说话', score: 3 },
            { text: '边做边说，同步进行', score: 2 },
            { text: '先说后做，明确目标', score: 1 },
            { text: '想清楚再行动', score: 0 }]
    },
    // 资源整合能力
    {
        id: 'e25',
        text: '当你两手空空却想做大事时，你会...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '用愿景和能力吸引资源', score: 3 },
            { text: '从小做起，逐步积累', score: 2 },
            { text: '先积累资源再行动', score: 1 },
            { text: '等待合适的时机', score: 0 }]
    },
    {
        id: 'e26',
        text: '关于人脉，你认为...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '价值交换是基础，先让自己有价值', score: 3 },
            { text: '真诚待人，关系自然会来', score: 2 },
            { text: '需要主动经营和维护', score: 1 },
            { text: '顺其自然，不必强求', score: 0 }]
    },
    {
        id: 'e27',
        text: '工作与生活的平衡，对你来说...',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '热爱工作，它就是生活的一部分', score: 3 },
            { text: '阶段性倾斜，长期保持平衡', score: 2 },
            { text: '努力平衡，但有时会失衡', score: 1 },
            { text: '工作是工作，生活是生活', score: 0 }]
    },
    // 综合评估
    {
        id: 'e28',
        text: '做重要决定时，你更依赖...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '数据和直觉的结合', score: 3 },
            { text: '理性分析，逻辑推理', score: 2 },
            { text: '他人的建议和经验', score: 1 },
            { text: '内心的感觉', score: 0 }]
    },
    {
        id: 'e29',
        text: '关于"时机"，你认为...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '最好的时机是现在', score: 3 },
            { text: '时机很重要，但行动更关键', score: 2 },
            { text: '等待合适的时机出手', score: 1 },
            { text: '时机决定成败', score: 0 }]
    },
    {
        id: 'e30',
        text: '十年后，你希望自己成为什么样的人？',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '创造了真正价值的人', score: 3 },
            { text: '实现了财务和时间自由的人', score: 2 },
            { text: '在某个领域有建树的人', score: 1 },
            { text: '生活安稳幸福的人', score: 0 }]
    }
];

// ==================== 创业思维题库 - 高级题目 (20题) ====================
// 高质量题目：更深入、更专业、更具挑战性
const entrepreneurQuestionsAdvanced = [
    // 机会识别能力 - 高级题
    {
        id: 'e31',
        text: '有人告诉你一个"稳赚不赔"的项目，你内心第一个声音是...',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '世界上没有稳赚的事，但可以研究它的逻辑', score: 3 },
            { text: '先了解清楚，再做判断', score: 2 },
            { text: '听起来不错，可以试试', score: 1 },
            { text: '太好了，终于等到机会了', score: 0 }]
    },
    {
        id: 'e32',
        text: '当所有人都在谈论同一个"风口"时，你想到的是...',
        type: 'entrepreneurship',
        dimension: 'opportunity',
        options: [
            { text: '风口已过，我应该找下一个机会', score: 3 },
            { text: '也许还有细分机会可以切入', score: 2 },
            { text: '跟随趋势，不会错', score: 1 },
            { text: '错过太可惜，要赶紧上车', score: 0 }]
    },
    // 风险容忍能力 - 高级题
    {
        id: 'e33',
        text: '你更愿意做哪种选择？',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '50%概率赚100万，50%概率亏50万', score: 3 },
            { text: '100%概率赚20万', score: 2 },
            { text: '80%概率赚10万，20%概率不赚不亏', score: 1 },
            { text: '100%概率赚5万', score: 0 }]
    },
    {
        id: 'e34',
        text: '关于"all in"，你认为...',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: 'all in是策略，但要有退路和止损线', score: 3 },
            { text: '关键时刻需要all in', score: 2 },
            { text: 'all in风险太大，不值得', score: 1 },
            { text: 'all in是赌徒心态，不可取', score: 0 }]
    },
    // 市场洞察能力 - 高级题
    {
        id: 'e35',
        text: '当你发现用户"嘴上说想要A，行为上却选择B"时，你会...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '行为比语言更真实，研究B背后的原因', score: 3 },
            { text: '可能他们还没意识到自己真正需要什么', score: 2 },
            { text: '用户说的和做的不一致，很正常', score: 1 },
            { text: '相信用户说的话，给A', score: 0 }]
    },
    {
        id: 'e36',
        text: '在红海市场中，你认为...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '红海证明需求存在，关键是差异化', score: 3 },
            { text: '可以尝试细分市场', score: 2 },
            { text: '竞争太激烈，不如找蓝海', score: 1 },
            { text: '红海没有机会，应该避开', score: 0 }]
    },
    // 创业热情 - 高级题
    {
        id: 'e37',
        text: '如果创业十年仍然没有成功，你会...',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '反思调整，也许成功就在下一个转角', score: 3 },
            { text: '这个过程本身就是收获', score: 2 },
            { text: '可能需要考虑其他选择', score: 1 },
            { text: '应该早点放弃', score: 0 }]
    },
    {
        id: 'e38',
        text: '"做自己热爱的事"和"做能赚钱的事"，你会...',
        type: 'entrepreneurship',
        dimension: 'passion',
        options: [
            { text: '找到两者的交集', score: 3 },
            { text: '先做能赚钱的事，再追求热爱', score: 2 },
            { text: '热爱最重要，钱可以慢慢赚', score: 1 },
            { text: '赚钱是第一位的', score: 0 }]
    },
    // 自我效能 - 高级题
    {
        id: 'e39',
        text: '当别人说"你不可能做到"时，你内心想的是...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '让我来证明他们错了', score: 3 },
            { text: '也许他们有道理，但我要试试', score: 2 },
            { text: '需要更努力才行', score: 1 },
            { text: '可能真的做不到', score: 0 }]
    },
    {
        id: 'e40',
        text: '关于"能力边界"，你认为...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '边界是用来突破的', score: 3 },
            { text: '了解边界，在边界内做到最好', score: 2 },
            { text: '承认边界，专注自己的强项', score: 1 },
            { text: '边界是客观存在的，要接受', score: 0 }]
    },
    // 内在驱动 - 高级题
    {
        id: 'e41',
        text: '如果创业不能让你富有，你还会继续吗？',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '会，因为创业本身让我成长', score: 3 },
            { text: '可能会，看其他收获', score: 2 },
            { text: '不太会，财务回报很重要', score: 1 },
            { text: '不会，赚钱是主要目的', score: 0 }]
    },
    {
        id: 'e42',
        text: '你更像是...',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '马拉松选手：长期坚持，稳步前进', score: 3 },
            { text: '短跑选手：抓住机会，快速冲刺', score: 2 },
            { text: '接力选手：团队协作，传递接力棒', score: 1 },
            { text: '观众：观望局势，等待时机', score: 0 }]
    },
    // 创新倾向 - 高级题
    {
        id: 'e43',
        text: '"如果它没坏，就不要修"这句话，你怎么看？',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '没坏也可以更好，创新永无止境', score: 3 },
            { text: '可以优化，但不必大改', score: 2 },
            { text: '稳定运行更重要', score: 1 },
            { text: '同意，不要冒险', score: 0 }]
    },
    {
        id: 'e44',
        text: '当你的创新想法被团队否定时，你会...',
        type: 'entrepreneurship',
        dimension: 'innovation',
        options: [
            { text: '用数据和原型证明可行性', score: 3 },
            { text: '反思是否有不足，改进后再提', score: 2 },
            { text: '尊重团队决定', score: 1 },
            { text: '放弃这个想法', score: 0 }]
    },
    // 行动执行 - 高级题
    {
        id: 'e45',
        text: '"想清楚再做"还是"边做边想"，你更倾向于...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '先行动，在行动中思考和调整', score: 3 },
            { text: '想清楚大方向，细节边做边想', score: 2 },
            { text: '尽量想清楚再行动', score: 1 },
            { text: '必须想清楚每一步', score: 0 }]
    },
    {
        id: 'e46',
        text: '关于"速度"和"质量"，你认为...',
        type: 'entrepreneurship',
        dimension: 'execution',
        options: [
            { text: '先求速度，再优化质量', score: 3 },
            { text: '在速度和质量间找平衡', score: 2 },
            { text: '质量是生命，速度其次', score: 1 },
            { text: '宁可慢，也要完美', score: 0 }]
    },
    // 综合能力 - 高级题
    {
        id: 'e47',
        text: '面对高度不确定性，你更像是...',
        type: 'entrepreneurship',
        dimension: 'risk',
        options: [
            { text: '冲浪者：在不确定性中寻找机会', score: 3 },
            { text: '登山者：规划路线，稳步前进', score: 2 },
            { text: '航海者：观察风向，顺势而为', score: 1 },
            { text: '守塔人：等待风平浪静', score: 0 }]
    },
    {
        id: 'e48',
        text: '关于"模仿"和"创新"，你认为...',
        type: 'entrepreneurship',
        dimension: 'market',
        options: [
            { text: '模仿是学习，创新是超越', score: 3 },
            { text: '先模仿成功模式，再微创新', score: 2 },
            { text: '创新风险大，模仿更安全', score: 1 },
            { text: '完全原创才是真正的创新', score: 0 }]
    },
    {
        id: 'e49',
        text: '当资源有限时，你会...',
        type: 'entrepreneurship',
        dimension: 'efficacy',
        options: [
            { text: '用创意弥补资源不足', score: 3 },
            { text: '聚焦核心，做最重要的事', score: 2 },
            { text: '等待资源到位再行动', score: 1 },
            { text: '减少目标，量力而行', score: 0 }]
    },
    {
        id: 'e50',
        text: '如果可以给十年前的自己一个建议，你会说...',
        type: 'entrepreneurship',
        dimension: 'motivation',
        options: [
            { text: '大胆尝试，失败是成长的养料', score: 3 },
            { text: '坚持自己的路，不要被他人左右', score: 2 },
            { text: '多做准备，减少弯路', score: 1 },
            { text: '选择更稳妥的道路', score: 0 }]
    }
];

// ==================== 爱情认知题库 - 高级题目 (20题) ====================
// 高质量题目：更深入、更专业、更具挑战性
const loveQuestionsAdvanced = [
    // 情绪管理能力 - 高级题
    {
        id: 'l31',
        text: '当伴侣说"我没事"但表情明显不对时，你会...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '相信自己的直觉，温柔地追问', score: 3 },
            { text: '尊重对方，等他想说再说', score: 2 },
            { text: '也许真的没事，不用多想', score: 1 },
            { text: '既然说没事，那就不管了', score: 0 }]
    },
    {
        id: 'l32',
        text: '关于"情绪"，你认为...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '情绪是信号，理解它比控制它更重要', score: 3 },
            { text: '负面情绪需要被管理', score: 2 },
            { text: '情绪稳定是成熟的表现', score: 1 },
            { text: '情绪会带来麻烦，应该压抑', score: 0 }]
    },
    // 共情能力 - 高级题
    {
        id: 'l33',
        text: '当伴侣向你倾诉烦恼时，你倾向于...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '先倾听，理解他的感受，再问需要什么支持', score: 3 },
            { text: '给出建议，帮他解决问题', score: 2 },
            { text: '安慰他，让他别太难过', score: 1 },
            { text: '转移话题，让他开心起来', score: 0 }]
    },
    {
        id: 'l34',
        text: '关于"理解"和"被理解"，你认为...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '理解是相互的，需要主动去感受对方', score: 3 },
            { text: '被理解是幸福的，理解他人是能力', score: 2 },
            { text: '理解需要时间，慢慢来', score: 1 },
            { text: '真正理解一个人是不可能的', score: 0 }]
    },
    // 安全感 - 高级题
    {
        id: 'l35',
        text: '安全感对你来说，更像是...',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '内心的笃定，来自对自己的信任', score: 3 },
            { text: '对方的承诺和行动', score: 2 },
            { text: '稳定的生活和关系', score: 1 },
            { text: '掌控一切的感觉', score: 0 }]
    },
    {
        id: 'l36',
        text: '当伴侣没有及时回复消息时，你内心最真实的想法是...',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '他可能在忙，等他回复', score: 3 },
            { text: '有点担心，但不会胡思乱想', score: 2 },
            { text: '是不是出什么事了？', score: 1 },
            { text: '他是不是不在乎我了？', score: 0 }]
    },
    // 沟通能力 - 高级题
    {
        id: 'l37',
        text: '"你应该知道我在想什么"这句话，你怎么看？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '没有人会读心术，需要表达出来', score: 3 },
            { text: '默契需要时间培养', score: 2 },
            { text: '真正爱我的人应该懂我', score: 1 },
            { text: '说出来就没意思了', score: 0 }]
    },
    {
        id: 'l38',
        text: '当沟通变成争吵时，你倾向于...',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '暂停，等情绪平复后再谈', score: 3 },
            { text: '把话说完，不逃避问题', score: 2 },
            { text: '让步，不想吵了', score: 1 },
            { text: '一定要争出个对错', score: 0 }]
    },
    // 边界意识 - 高级题
    {
        id: 'l39',
        text: '关于"个人空间"和"亲密无间"，你认为...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '亲密需要边界来保护', score: 3 },
            { text: '适度的空间让关系更健康', score: 2 },
            { text: '真正相爱不需要边界', score: 1 },
            { text: '边界会让人疏远', score: 0 }]
    },
    {
        id: 'l40',
        text: '当伴侣要求看你的手机时，你会...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '坦诚沟通，了解他为什么想看', score: 3 },
            { text: '给他看，没什么好隐瞒的', score: 2 },
            { text: '犹豫，但还是会给', score: 1 },
            { text: '拒绝，这是我的隐私', score: 0 }]
    },
    // 冲突处理 - 高级题
    {
        id: 'l41',
        text: '关于"吵架"，你认为...',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '吵架是沟通的一种，关键是怎么吵', score: 3 },
            { text: '吵架伤感情，应该避免', score: 2 },
            { text: '吵架说明不合适', score: 1 },
            { text: '吵架是对方的问题', score: 0 }]
    },
    {
        id: 'l42',
        text: '当冲突发生后，你更倾向于...',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '主动修复，不让问题过夜', score: 3 },
            { text: '等对方先低头', score: 2 },
            { text: '冷静几天再说', score: 1 },
            { text: '假装什么都没发生', score: 0 }]
    },
    // 亲密能力 - 高级题
    {
        id: 'l43',
        text: '当爱变成习惯，激情消退，你认为...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '这是爱的升华，习惯是最深的陪伴', score: 3 },
            { text: '需要努力重新点燃激情', score: 2 },
            { text: '这是自然规律，接受它', score: 1 },
            { text: '可能不爱了', score: 0 }]
    },
    {
        id: 'l44',
        text: '关于"亲密"和"独立"，你认为...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '真正的亲密是两个独立个体的连接', score: 3 },
            { text: '亲密需要牺牲一部分独立', score: 2 },
            { text: '独立会让人疏远', score: 1 },
            { text: '亲密就是融为一体', score: 0 }]
    },
    // 信任建立 - 高级题
    {
        id: 'l45',
        text: '关于"信任"，你认为...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '信任是选择，也是需要维护的', score: 3 },
            { text: '信任需要时间建立', score: 2 },
            { text: '信任是理所当然的', score: 1 },
            { text: '信任是危险的，需要保护自己', score: 0 }]
    },
    {
        id: 'l46',
        text: '当信任被打破后，你会...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '评估情况，看是否值得重建', score: 3 },
            { text: '给对方机会弥补', score: 2 },
            { text: '很难再信任了', score: 1 },
            { text: '彻底放弃这段关系', score: 0 }]
    },
    // 综合能力 - 高级题
    {
        id: 'l47',
        text: '关于"爱"和"被爱"，你更看重...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '两者同样重要，是流动的能量', score: 3 },
            { text: '被爱更幸福', score: 2 },
            { text: '爱人更充实', score: 1 },
            { text: '只要有人爱我就好', score: 0 }]
    },
    {
        id: 'l48',
        text: '当伴侣和你的价值观有冲突时，你会...',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '尊重差异，寻找共同点', score: 3 },
            { text: '尝试说服对方', score: 2 },
            { text: '避免谈论这个话题', score: 1 },
            { text: '可能我们不合适', score: 0 }]
    },
    {
        id: 'l49',
        text: '关于"改变"和"接受"，你认为...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '爱是接受本来的样子，同时支持成长', score: 3 },
            { text: '爱需要为对方改变', score: 2 },
            { text: '不应该为任何人改变', score: 1 },
            { text: '对方应该为我改变', score: 0 }]
    },
    {
        id: 'l50',
        text: '如果可以重新选择，你还会选择现在的伴侣吗？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '会，因为我们一起成长', score: 3 },
            { text: '会，因为习惯了', score: 2 },
            { text: '不确定', score: 1 },
            { text: '不会', score: 0 }]
    }
];

// 爱情认知题库 (50题) - 每个题目只有一个高分选项(3分)，其他为低分
const loveQuestions = [
    // 情绪管理能力
    {
        id: 'l1',
        text: '当你心情不好时，你希望伴侣...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '给我空间，也让我知道他在', score: 3 },
            { text: '问我怎么了，听我倾诉', score: 2 },
            { text: '逗我开心，转移注意力', score: 1 },
            { text: '不要管我，让我自己消化', score: 0 }]
    },
    {
        id: 'l2',
        text: '关于"情绪"，你认为...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '情绪是桥梁，连接彼此的内心', score: 3 },
            { text: '情绪需要被看见和理解', score: 2 },
            { text: '情绪稳定是成熟的表现', score: 1 },
            { text: '情绪会带来麻烦', score: 0 }]
    },
    {
        id: 'l3',
        text: '当伴侣情绪低落时，你倾向于...',
        type: 'love',
        dimension: 'emotion',
        options: [
            { text: '陪伴他，让他知道我懂他', score: 3 },
            { text: '问他怎么了，帮他想办法', score: 2 },
            { text: '给他空间，等他自己好起来', score: 1 },
            { text: '不知道该怎么办', score: 0 }]
    },
    // 共情能力
    {
        id: 'l4',
        text: '当伴侣说"你不懂我"时，你内心想的是...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '也许我真的没理解，让我再试试', score: 3 },
            { text: '我需要更用心地去感受', score: 2 },
            { text: '我已经很努力了', score: 1 },
            { text: '是你没说清楚', score: 0 }]
    },
    {
        id: 'l5',
        text: '关于"理解"，你认为...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '理解是用心感受，不是用脑分析', score: 3 },
            { text: '理解需要时间和耐心', score: 2 },
            { text: '理解就是知道对方在想什么', score: 1 },
            { text: '没有人能真正理解另一个人', score: 0 }]
    },
    {
        id: 'l6',
        text: '你更看重伴侣的...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '共情能力：能感受我的感受', score: 3 },
            { text: '倾听能力：愿意听我说', score: 2 },
            { text: '解决问题能力：能帮我', score: 1 },
            { text: '陪伴：在身边就好', score: 0 }]
    },
    // 安全感
    {
        id: 'l7',
        text: '安全感对你来说，像是...',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '一个港湾，让我敢于远航', score: 3 },
            { text: '一种确定，知道他不会离开', score: 2 },
            { text: '一种控制，知道一切在掌握中', score: 1 },
            { text: '一种依赖，需要对方给予', score: 0 }]
    },
    {
        id: 'l8',
        text: '当伴侣需要独处时，你会...',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '尊重他，这是他的需要', score: 3 },
            { text: '有点失落，但会接受', score: 2 },
            { text: '担心是不是我做错了什么', score: 1 },
            { text: '觉得他不爱我了', score: 0 }]
    },
    {
        id: 'l9',
        text: '关于"不确定"，你认为...',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '不确定是常态，信任是选择', score: 3 },
            { text: '需要更多确定感才能安心', score: 2 },
            { text: '不确定让我焦虑', score: 1 },
            { text: '不确定就是不安全', score: 0 }]
    },
    // 沟通能力
    {
        id: 'l10',
        text: '"你应该知道我想要什么"这句话，你怎么看？',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '没有人会读心术，需要表达', score: 3 },
            { text: '默契需要时间培养', score: 2 },
            { text: '真正爱我的人应该懂我', score: 1 },
            { text: '说出来就没意思了', score: 0 }]
    },
    {
        id: 'l11',
        text: '当沟通变成争吵时，你会...',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '暂停，等冷静后再谈', score: 3 },
            { text: '继续说，把问题解决', score: 2 },
            { text: '让步，不想吵了', score: 1 },
            { text: '一定要争出对错', score: 0 }]
    },
    {
        id: 'l12',
        text: '关于"说"和"听"，你更擅长...',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '倾听，让对方感到被理解', score: 3 },
            { text: '表达，让对方知道我的想法', score: 2 },
            { text: '都说一些，保持平衡', score: 1 },
            { text: '都不太擅长', score: 0 }]
    },
    // 边界意识
    {
        id: 'l13',
        text: '关于"亲密无间"，你认为...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '亲密需要边界来保护', score: 3 },
            { text: '适度的空间让关系更健康', score: 2 },
            { text: '真正相爱不需要边界', score: 1 },
            { text: '边界会让人疏远', score: 0 }]
    },
    {
        id: 'l14',
        text: '当伴侣和异性朋友相处时，你会...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '信任他，这是他的社交', score: 3 },
            { text: '有点在意，但不会说什么', score: 2 },
            { text: '希望他知道分寸', score: 1 },
            { text: '要求他减少来往', score: 0 }]
    },
    {
        id: 'l15',
        text: '关于"隐私"和"透明"，你认为...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '信任不需要透明，尊重需要隐私', score: 3 },
            { text: '适度透明，但保留空间', score: 2 },
            { text: '相爱就应该没有秘密', score: 1 },
            { text: '隐私说明有问题', score: 0 }]
    },
    // 冲突处理
    {
        id: 'l16',
        text: '关于"吵架"，你认为...',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '吵架是了解彼此的机会', score: 3 },
            { text: '吵架伤感情，应该避免', score: 2 },
            { text: '吵架说明不合适', score: 1 },
            { text: '吵架是对方的问题', score: 0 }]
    },
    {
        id: 'l17',
        text: '争吵后，你更倾向于...',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '主动修复，不让问题过夜', score: 3 },
            { text: '等对方先低头', score: 2 },
            { text: '冷静几天再说', score: 1 },
            { text: '假装什么都没发生', score: 0 }]
    },
    {
        id: 'l18',
        text: '当冲突无法解决时，你会...',
        type: 'love',
        dimension: 'conflict',
        options: [
            { text: '接受差异，求同存异', score: 3 },
            { text: '继续尝试沟通', score: 2 },
            { text: '暂时搁置', score: 1 },
            { text: '考虑放弃', score: 0 }]
    },
    // 亲密能力
    {
        id: 'l19',
        text: '关于"爱"，你认为...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '爱是动词，需要行动表达', score: 3 },
            { text: '爱是感觉，需要被感受', score: 2 },
            { text: '爱是承诺，需要被遵守', score: 1 },
            { text: '爱是本能，不需要学习', score: 0 }]
    },
    {
        id: 'l20',
        text: '当爱变成习惯，激情消退，你认为...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '这是爱的升华，习惯是最深的陪伴', score: 3 },
            { text: '需要努力重新点燃激情', score: 2 },
            { text: '这是自然规律，接受它', score: 1 },
            { text: '可能不爱了', score: 0 }]
    },
    {
        id: 'l21',
        text: '关于"付出"和"索取"，你认为...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '爱是流动的，付出和接受同样重要', score: 3 },
            { text: '付出更多的一方更爱', score: 2 },
            { text: '应该平衡，不能一方付出太多', score: 1 },
            { text: '被爱更幸福', score: 0 }]
    },
    // 信任建立
    {
        id: 'l22',
        text: '关于"信任"，你认为...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '信任是选择，也是需要维护的', score: 3 },
            { text: '信任需要时间建立', score: 2 },
            { text: '信任是理所当然的', score: 1 },
            { text: '信任是危险的', score: 0 }]
    },
    {
        id: 'l23',
        text: '当伴侣让你感到不安全时，你会...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '坦诚表达感受，寻求理解', score: 3 },
            { text: '观察他的行为', score: 2 },
            { text: '压抑自己的不安', score: 1 },
            { text: '质疑他的忠诚', score: 0 }]
    },
    {
        id: 'l24',
        text: '关于"背叛"，你认为...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '可以原谅，但需要重建信任', score: 3 },
            { text: '看情况，有些可以原谅', score: 2 },
            { text: '一次不忠，百次不用', score: 1 },
            { text: '绝对不能原谅', score: 0 }]
    },
    // 价值观 - 关系预期
    {
        id: 'l25',
        text: '你理想中的爱情是...',
        type: 'love',
        dimension: 'intimacy',
        options: [
            { text: '两个独立的人选择在一起', score: 3 },
            { text: '彼此依赖，互相需要', score: 2 },
            { text: '一个人完整另一个人', score: 1 },
            { text: '找到对的人，从此幸福', score: 0 }]
    },
    {
        id: 'l26',
        text: '关于"改变"和"接受"，你认为...',
        type: 'love',
        dimension: 'trust',
        options: [
            { text: '爱是接受本来的样子，支持成长', score: 3 },
            { text: '爱需要为对方改变', score: 2 },
            { text: '不应该为任何人改变', score: 1 },
            { text: '对方应该为我改变', score: 0 }]
    },
    {
        id: 'l27',
        text: '关于"灵魂伴侣"，你认为...',
        type: 'love',
        dimension: 'empathy',
        options: [
            { text: '灵魂伴侣是培养出来的，不是找到的', score: 3 },
            { text: '存在，但很难遇到', score: 2 },
            { text: '是一个美好的幻想', score: 1 },
            { text: '不存在', score: 0 }]
    },
    // 综合题
    {
        id: 'l28',
        text: '当关系走到尽头，你会...',
        type: 'love',
        dimension: 'boundary',
        options: [
            { text: '感恩相遇，好好告别', score: 3 },
            { text: '尝试挽回，直到确定无法继续', score: 2 },
            { text: '很难接受，需要很长时间', score: 1 },
            { text: '不想面对，逃避现实', score: 0 }]
    },
    {
        id: 'l29',
        text: '关于"爱情"和"自我"，你认为...',
        type: 'love',
        dimension: 'communication',
        options: [
            { text: '好的爱情让我成为更好的自己', score: 3 },
            { text: '爱情需要牺牲一部分自我', score: 2 },
            { text: '自我比爱情更重要', score: 1 },
            { text: '爱情里没有自我', score: 0 }]
    },
    {
        id: 'l30',
        text: '如果可以重新选择，你还会爱现在的伴侣吗？',
        type: 'love',
        dimension: 'security',
        options: [
            { text: '会，因为这段关系让我成长', score: 3 },
            { text: '会，因为习惯了', score: 2 },
            { text: '不确定', score: 1 },
            { text: '不会', score: 0 }]
    }
];

// ==================== 合并题库 ====================
const entrepreneurQuestionsAll = [...entrepreneurQuestions, ...entrepreneurQuestionsAdvanced];
const loveQuestionsAll = [...loveQuestions, ...loveQuestionsAdvanced];

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
    
    // 如果目标数量小于等于维度数量，直接从每个维度随机选一题
    if (targetCount <= availableDims.length) {
        const shuffledDims = shuffleArray([...availableDims]);
        for (let i = 0; i < targetCount; i++) {
            const dim = shuffledDims[i];
            const pool = dimensionGroups[dim];
            const randomIndex = Math.floor(Math.random() * pool.length);
            selected.push(pool[randomIndex]);
        }
        return shuffleArray(selected);
    }
    
    // 确保每个有题目的维度至少抽一题
    const selectedSet = new Set();
    availableDims.forEach(dim => {
        const pool = dimensionGroups[dim];
        if (pool.length > 0) {
            const randomIndex = Math.floor(Math.random() * pool.length);
            const selectedQ = pool[randomIndex];
            selected.push(selectedQ);
            selectedSet.add(selectedQ.id);
        }
    });
    
    // 计算还需要抽取的题目数量
    const remainingCount = targetCount - selected.length;
    
    // 获取所有未被选中的题目
    const unselectedQuestions = questions.filter(q => !selectedSet.has(q.id));
    
    // 从剩余题目中随机抽取（确保每个维度最多抽2题，避免某维度题目过多）
    const maxPerDimension = 2;
    const dimCountMap = {};
    availableDims.forEach(dim => dimCountMap[dim] = 1); // 已选1题
    
    for (let i = 0; i < remainingCount && unselectedQuestions.length > 0; i++) {
        // 筛选出还能继续抽取的维度
        const availableForMore = availableDims.filter(dim => dimCountMap[dim] < maxPerDimension);
        
        if (availableForMore.length === 0) break;
        
        // 随机选择一个维度
        const selectedDim = availableForMore[Math.floor(Math.random() * availableForMore.length)];
        
        // 从该维度未选中的题目中随机选一题
        const pool = dimensionGroups[selectedDim];
        const unselectedInDim = pool.filter(q => !selectedSet.has(q.id));
        
        if (unselectedInDim.length > 0) {
            const randomIndex = Math.floor(Math.random() * unselectedInDim.length);
            const selectedQ = unselectedInDim[randomIndex];
            selected.push(selectedQ);
            selectedSet.add(selectedQ.id);
            dimCountMap[selectedDim]++;
        }
    }
    
    // 如果还没达到目标数量，从所有未选中题目中随机补充
    if (selected.length < targetCount) {
        const remainingQuestions = questions.filter(q => !selectedSet.has(q.id));
        const shuffledRemaining = shuffleArray(remainingQuestions);
        for (let i = 0; i < targetCount - selected.length && i < shuffledRemaining.length; i++) {
            selected.push(shuffledRemaining[i]);
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
        // 综合测试：创业8题 + 爱情8题 = 16题（确保每个维度至少1题）
        entrepreneurSample = stratifiedSampleByDimension(entrepreneurQuestionsAll, 8, entrepreneurDimensions);
        loveSample = stratifiedSampleByDimension(loveQuestionsAll, 8, loveDimensions);
    } else if (selectedType === 'entrepreneur') {
        // 纯创业思维：16题（确保每个维度至少1题）
        entrepreneurSample = stratifiedSampleByDimension(entrepreneurQuestionsAll, 16, entrepreneurDimensions);
    } else if (selectedType === 'love') {
        // 纯爱情认知：16题（确保每个维度至少1题）
        loveSample = stratifiedSampleByDimension(loveQuestionsAll, 16, loveDimensions);
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
    
    // 从第一题开始显示测试提示
    const testTips = document.getElementById('test-tips');
    testTips.classList.remove('hidden');
    
    // 更新下一题按钮文字（第16题时显示"提交"）
    const nextBtn = document.getElementById('next-btn');
    if (index + 1 === 16) {
        nextBtn.textContent = '提交';
    } else {
        nextBtn.textContent = '下一题 →';
    }
    
    // 更新题目编号
    document.getElementById('question-number').textContent = index + 1;
    
    // 更新上一题按钮状态
    const prevBtn = document.getElementById('prev-btn');
    if (index === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        prevBtn.classList.remove('hover:bg-white/20');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        prevBtn.classList.add('hover:bg-white/20');
    }
    
    // 更新题目类型标签
    const typeTag = document.getElementById('question-type-tag');
    if (question.type === 'entrepreneurship') {
        typeTag.textContent = '🚀 创业思维';
        typeTag.className = 'px-4 py-2 rounded-full text-sm font-medium type-entrepreneur cursor-pointer hover:opacity-80 transition-opacity';
    } else {
        typeTag.textContent = '💜 爱情认知';
        typeTag.className = 'px-4 py-2 rounded-full text-sm font-medium type-love cursor-pointer hover:opacity-80 transition-opacity';
    }
    
    // 添加点击事件查看测试类型介绍
    typeTag.onclick = function() {
        console.log('点击了测试类型标签');
        showTestTypeModal(currentTestType);
    };
    
    // 更新题目内容
    document.getElementById('question-text').textContent = question.text;
    
    // 清空并生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 随机打乱选项顺序
    const shuffledOptions = shuffleArray([...question.options]);
    
    // 如果已有答案，显示选中状态
        const savedAnswer = answers[index];
        shuffledOptions.forEach((option, optIndex) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card flex items-center';
            if (savedAnswer && savedAnswer.optionText === option.text) {
                optionCard.classList.add('selected');
            }
            optionCard.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + optIndex)}</span>
                <span class="flex-1">${option.text}</span>
            `;
            
            optionCard.addEventListener('click', () => {
                // 记录答案
                answers[currentQuestionIndex] = {
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
            });
            
            optionsContainer.appendChild(optionCard);
        });
}

// ==================== 上一题按钮事件 ====================
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
});

// ==================== 下一题按钮事件 ====================
document.getElementById('next-btn').addEventListener('click', () => {
    // 检查是否已答题
    if (!answers[currentQuestionIndex]) {
        alert('请选择选项后再继续下一题');
        return;
    }
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        // 完成测试，计算结果
        calculateResults();
    }
});

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
        isAwakened: entrepreneurPercentage >= 65 && lovePercentage >= 65,
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
    // 保存当前结果到全局变量，以便切换主题时能重新渲染
    window.currentResult = result;
    showPage('result');
    
    // 模块一：核心结果卡片
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultSubtitle = document.getElementById('result-subtitle');
    
    // 根据测试类型显示不同的开智状态
    if (currentTestType === 'entrepreneur') {
        // 创业思维模式
        if (result.entrepreneurScore >= 65) {
            resultIcon.textContent = '◇';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultTitle.textContent = '已开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultSubtitle.textContent = '恭喜！你的创业思维已达到较高水平';
        } else {
            resultIcon.textContent = '⊙';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]';
            resultSubtitle.textContent = '继续努力！创业思维觉醒正在路上';
        }
    } else if (currentTestType === 'love') {
        // 爱情认知模式
        if (result.loveScore >= 65) {
            resultIcon.textContent = '◇';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
            resultTitle.textContent = '已开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
            resultSubtitle.textContent = '恭喜！你的爱情认知已达到较高水平';
        } else {
            resultIcon.textContent = '⊙';
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]';
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
            resultIcon.className = 'text-8xl mb-4 result-icon-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]';
            resultTitle.textContent = '未开智';
            resultTitle.className = 'text-3xl font-serif font-bold curtain-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]';
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
        ? result.entrepreneurScore >= 65 
        : currentTestType === 'love' 
            ? result.loveScore >= 65 
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
    
    // 检查是否是晨曦暖阳主题
    const isLightTheme = document.body.classList.contains('theme-light');
    
    // 创建紫金渐变背景
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
    gradient.addColorStop(0, isLightTheme ? 'rgba(124, 58, 237, 0.15)' : 'rgba(124, 58, 237, 0.25)');
    gradient.addColorStop(1, isLightTheme ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.15)');
    
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
    
    // 根据主题设置颜色 - 紫金渐变配色
    const chartColors = isLightTheme 
        ? {
            borderColor: 'rgba(124, 58, 237, 0.95)',
            pointBackgroundColor: '#D97706',
            pointBorderColor: '#7C3AED',
            pointHoverBackgroundColor: '#F59E0B',
            pointHoverBorderColor: '#7C3AED',
            ticksColor: '#7C3AED',
            gridColor: 'rgba(124, 58, 237, 0.2)',
            angleLinesColor: 'rgba(245, 158, 11, 0.3)',
            pointLabelsColor: '#5B21B6'
        } 
        : {
            borderColor: 'rgba(124, 58, 237, 0.9)',
            pointBackgroundColor: 'rgba(245, 158, 11, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(124, 58, 237, 1)',
            ticksColor: 'rgba(255, 255, 255, 0.6)',
            gridColor: 'rgba(124, 58, 237, 0.2)',
            angleLinesColor: 'rgba(124, 58, 237, 0.2)',
            pointLabelsColor: 'rgba(255, 255, 255, 0.9)'
        };
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels,
            datasets: [{
                label: '能力值',
                data,
                backgroundColor: gradient,
                borderColor: chartColors.borderColor,
                borderWidth: 2,
                pointBackgroundColor: chartColors.pointBackgroundColor,
                pointBorderColor: chartColors.pointBorderColor,
                pointHoverBackgroundColor: chartColors.pointHoverBackgroundColor,
                pointHoverBorderColor: chartColors.pointHoverBorderColor
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
                        color: chartColors.ticksColor,
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: chartColors.gridColor
                    },
                    angleLines: {
                        color: chartColors.angleLinesColor
                    },
                    pointLabels: {
                        color: chartColors.pointLabelsColor,
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
    const shareCard = document.getElementById('share-content');
    
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
        document.getElementById('history-content').style.display = 'none';
        return;
    }
    
    document.getElementById('history-content').style.display = 'block';
    
    const ctx = document.getElementById('history-chart').getContext('2d');
    
    if (historyChart) {
        historyChart.destroy();
    }
    
    // 取最近5条记录
    const recentHistory = history.slice(0, 5).reverse();
    
    // 检查是否是晨曦暖阳主题
    const isLightTheme = document.body.classList.contains('theme-light');
    
    // 创建紫金渐变背景
    const gradient1 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    const gradient2 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    
    if (isLightTheme) {
        gradient1.addColorStop(0, 'rgba(245, 158, 11, 0.2)');
        gradient1.addColorStop(1, 'rgba(245, 158, 11, 0)');
        gradient2.addColorStop(0, 'rgba(124, 58, 237, 0.2)');
        gradient2.addColorStop(1, 'rgba(124, 58, 237, 0)');
    } else {
        gradient1.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
        gradient1.addColorStop(1, 'rgba(245, 158, 11, 0)');
        gradient2.addColorStop(0, 'rgba(124, 58, 237, 0.25)');
        gradient2.addColorStop(1, 'rgba(124, 58, 237, 0)');
    }
    
    // 根据主题设置颜色 - 紫金渐变配色
    const chartColors = isLightTheme 
        ? {
            entrepreneurColor: '#D97706',
            loveColor: '#7C3AED',
            gridColor: 'rgba(124, 58, 237, 0.18)',
            ticksColor: '#7C3AED',
            legendColor: '#5B21B6'
        } 
        : {
            entrepreneurColor: '#F59E0B',
            loveColor: '#7C3AED',
            gridColor: 'rgba(124, 58, 237, 0.2)',
            ticksColor: 'rgba(255, 255, 255, 0.6)',
            legendColor: 'rgba(255, 255, 255, 0.8)'
        };
    
    historyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: recentHistory.map((_, i) => `测试${recentHistory.length - i}`),
            datasets: [
                {
                    label: '创业思维',
                    data: recentHistory.map(h => h.entrepreneurScore),
                    borderColor: chartColors.entrepreneurColor,
                    backgroundColor: gradient1,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                },
                {
                    label: '爱情认知',
                    data: recentHistory.map(h => h.loveScore),
                    borderColor: chartColors.loveColor,
                    backgroundColor: gradient2,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: chartColors.gridColor
                    },
                    ticks: {
                        color: chartColors.ticksColor
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    grid: {
                        color: chartColors.gridColor
                    },
                    ticks: {
                        color: chartColors.ticksColor
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: chartColors.legendColor
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
    
    // 如果当前在结果页面，重新渲染图表
    const resultPage = document.getElementById('result-page');
    if (resultPage && resultPage.classList.contains('active')) {
        // 重新计算并显示结果以更新图表颜色
        if (window.currentResult) {
            showResult(window.currentResult);
        }
    }
}

// ==================== 音乐控制 ====================
// 背景音乐播放器
let audioPlayer = null;
let bgmFiles = ['bgm1.mp3', 'bgm2.mp3', 'bgm3.mp3', 'bgm4.mp3', 'bgm5.mp3'];
let currentBgmIndex = 0;
let musicAvailable = null; // 标记音乐文件是否可用 (null=未检测, true=可用, false=不可用)

// 检测音乐文件是否存在
async function checkMusicAvailability() {
    // 如果已经检测过，直接返回结果
    if (musicAvailable !== null && musicAvailable !== undefined) {
        return musicAvailable;
    }
    
    for (const file of bgmFiles) {
        try {
            const response = await fetch(`bgm/${file}`, { 
                method: 'HEAD',
                cache: 'no-store'
            });
            if (response.ok) {
                musicAvailable = true;
                return true;
            }
        } catch (e) {
            // 文件不存在或请求被取消，继续检查下一个
            console.log('音乐文件检查失败:', file, e.message);
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
    
    // 开智说明弹窗关闭事件
    document.getElementById('awakening-info-close').addEventListener('click', () => {
        const modal = document.getElementById('awakening-info-modal');
        modal.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    // 信息卡片弹窗关闭事件
    document.getElementById('info-cards-close').addEventListener('click', () => {
        const modal = document.getElementById('info-cards-modal');
        const modalContent = modal.querySelector('.relative');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        modal.classList.add('opacity-0', 'pointer-events-none');
    });
    
    // 折叠/展开功能
    const toggleModules = [
        { toggle: 'toggle-profile', content: 'profile-content' },
        { toggle: 'toggle-stage', content: 'stage-content' },
        { toggle: 'toggle-entrepreneur-advice', content: 'entrepreneur-advice' },
        { toggle: 'toggle-entrepreneur-change', content: 'entrepreneur-change' },
        { toggle: 'toggle-love-advice', content: 'love-advice' },
        { toggle: 'toggle-love-change', content: 'love-change' },
        { toggle: 'toggle-books', content: 'books-content' },
        { toggle: 'toggle-share', content: 'share-content' }
    ];
    
    toggleModules.forEach(({ toggle, content }) => {
        const toggleEl = document.getElementById(toggle);
        const contentEl = document.getElementById(content);
        
        if (toggleEl && contentEl) {
            toggleEl.addEventListener('click', () => {
                const isHidden = contentEl.classList.contains('hidden');
                if (isHidden) {
                    contentEl.classList.remove('hidden');
                    toggleEl.querySelector('.toggle-icon').textContent = '▼';
                } else {
                    contentEl.classList.add('hidden');
                    toggleEl.querySelector('.toggle-icon').textContent = '▲';
                }
            });
        }
    });
    
    // 绑定事件监听
    document.getElementById('start-test').addEventListener('click', startTest);
    document.getElementById('restart-test').addEventListener('click', startTest);
    document.getElementById('back-to-home').addEventListener('click', () => {
        showPage('home');
    });
    document.getElementById('learn-more').addEventListener('click', () => {
        // 打开信息卡片弹窗
        const modal = document.getElementById('info-cards-modal');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.querySelector('.relative').classList.remove('scale-95');
        modal.querySelector('.relative').classList.add('scale-100');
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
    
    // 关闭测试类型介绍弹窗
    document.getElementById('close-test-type-modal').addEventListener('click', closeTestTypeModal);
    document.getElementById('test-type-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeTestTypeModal();
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

// 显示测试类型介绍弹窗
function showTestTypeModal(type) {
    const modal = document.getElementById('test-type-modal');
    const title = document.getElementById('modal-title');
    
    // 隐藏所有内容区域
    document.getElementById('modal-content-comprehensive').classList.add('hidden');
    document.getElementById('modal-content-entrepreneur').classList.add('hidden');
    document.getElementById('modal-content-love').classList.add('hidden');
    
    // 根据类型设置标题和显示对应内容
    if (type === 'entrepreneur') {
        title.textContent = '🚀 创业思维';
        document.getElementById('modal-content-entrepreneur').classList.remove('hidden');
    } else if (type === 'love') {
        title.textContent = '💜 爱情认知';
        document.getElementById('modal-content-love').classList.remove('hidden');
    } else {
        title.textContent = '🎯 综合测试';
        document.getElementById('modal-content-comprehensive').classList.remove('hidden');
    }
    
    // 显示弹窗
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    modal.querySelector('div').classList.remove('scale-95');
    modal.querySelector('div').classList.add('scale-100');
}

// 关闭测试类型介绍弹窗
function closeTestTypeModal() {
    const modal = document.getElementById('test-type-modal');
    
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    modal.querySelector('div').classList.add('scale-95');
    modal.querySelector('div').classList.remove('scale-100');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
