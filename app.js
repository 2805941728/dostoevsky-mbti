const questions = [
  { source: "《罪与罚》 / 行动与罪感", text: "当一个想法被你认定为正确时，你更愿意先把它推到现实里，再承受后果。", dim: "JP", dir: -1 },
  { source: "《地下室手记》 / 自我意识", text: "你经常把一句普通的话反复咀嚼，直到它变成对自己的审判。", dim: "EI", dir: -1 },
  { source: "《卡拉马佐夫兄弟》 / 信仰与怀疑", text: "相比一个清楚可证的答案，你更在意这个答案是否能拯救人的灵魂。", dim: "SN", dir: 1 },
  { source: "《白痴》 / 纯真", text: "在冲突里，你会先看见每个人的痛苦，而不是先判断谁对谁错。", dim: "TF", dir: 1 },
  { source: "《群魔》 / 思想与集体", text: "一群人越是热烈地相信同一件事，你越会警惕那里藏着危险。", dim: "EI", dir: -1 },
  { source: "《赌徒》 / 冲动", text: "你知道某种选择会让生活失控，但它的强度反而会吸引你靠近。", dim: "JP", dir: -1 },
  { source: "《死屋手记》 / 经验", text: "你相信人真正的性格，要在屈辱、贫穷或失去自由时才会显影。", dim: "SN", dir: 1 },
  { source: "《罪与罚》 / 道德推理", text: "如果目标足够宏大，你会忍不住思考少数伤害是否可能被多数幸福抵消。", dim: "TF", dir: -1 },
  { source: "《地下室手记》 / 反抗", text: "你有时会故意做一个不划算的决定，只为了证明自己不是公式。", dim: "JP", dir: -1 },
  { source: "《卡拉马佐夫兄弟》 / 家族", text: "比起独自想清楚，你更需要在交谈、争辩和坦白中确认自己是谁。", dim: "EI", dir: 1 },
  { source: "《白痴》 / 直觉", text: "你常凭一种难以解释的预感判断一个人的善恶与脆弱。", dim: "SN", dir: 1 },
  { source: "《少年》 / 野心", text: "你会为一个私人理想长期忍耐，即便它在别人眼中显得荒唐。", dim: "JP", dir: 1 },
  { source: "《罪与罚》 / 孤独", text: "越是处在压力中，你越倾向于把自己隔离起来，独自推演出路。", dim: "EI", dir: -1 },
  { source: "《卡拉马佐夫兄弟》 / 慈悲", text: "面对一个犯错的人，你首先想知道他为何会走到那里。", dim: "TF", dir: 1 },
  { source: "《群魔》 / 秩序", text: "混乱会让你焦躁，你更相信明确边界和可执行的安排。", dim: "JP", dir: 1 },
  { source: "《地下室手记》 / 现实", text: "你不太相信宏大理想；你更相信疼痛、账单、房间和身体这些具体事实。", dim: "SN", dir: -1 },
  { source: "《白痴》 / 社交", text: "哪怕在陌生场合，你也容易被他人的情绪卷入，很难冷眼旁观。", dim: "EI", dir: 1 },
  { source: "《罪与罚》 / 理性", text: "做重大决定时，你会努力压低怜悯，先看逻辑是否站得住。", dim: "TF", dir: -1 },
  { source: "《卡拉马佐夫兄弟》 / 终极问题", text: "你很难满足于生活表面的成功，总会追问它背后的意义和代价。", dim: "SN", dir: 1 },
  { source: "《赌徒》 / 选择", text: "临场变化会让你兴奋，太早定好的计划反而像一间窄屋。", dim: "JP", dir: -1 },
  { source: "《死屋手记》 / 观察", text: "你更擅长安静地观察一个群体的规则，而不是立刻成为其中的中心。", dim: "EI", dir: -1 },
  { source: "《白痴》 / 判断", text: "如果真诚会带来损失，你仍然倾向于保留真诚。", dim: "TF", dir: 1 },
  { source: "《群魔》 / 怀疑", text: "当别人用漂亮词语谈未来时，你会先追问具体的人会付出什么。", dim: "SN", dir: -1 },
  { source: "《少年》 / 自控", text: "你喜欢把人生整理成阶段、目标和清单，这会让你感到安全。", dim: "JP", dir: 1 },
  { source: "《卡拉马佐夫兄弟》 / 坦白", text: "你相信有些真相必须说出来，即使说出后所有关系都会改变。", dim: "EI", dir: 1 },
  { source: "《罪与罚》 / 悔悟", text: "你判断一个人时，会把悔改能力看得比聪明程度更重要。", dim: "TF", dir: 1 },
  { source: "《地下室手记》 / 内耗", text: "你经常在行动之前就已经和自己争辩了太多轮。", dim: "EI", dir: -1 },
  { source: "《卡拉马佐夫兄弟》 / 自由", text: "你宁愿承担自由带来的痛苦，也不愿被一个完美系统替你选择。", dim: "SN", dir: 1 }
];

const answerOptions = [
  { label: "极其反对", value: -2 },
  { label: "偏向反对", value: -1 },
  { label: "中立/不确定", value: 0 },
  { label: "偏向同意", value: 1 },
  { label: "极其同意", value: 2 }
];

const quotes = [
  "每一次选择，都是一次自供。",
  "理性在记录，地下室在发笑。",
  "一个人越想隐藏，轮廓越清楚。",
  "你的答案正在把你带到案发现场。",
  "信仰、羞耻、自由，正在同一张纸上签名。"
];

const typeProfiles = {
  INTJ: ["拉斯柯尔尼科夫式理性犯", "你有锋利的理论欲和孤独的秩序感，会先建立模型，再被模型反过来审问。你的危险在于把人变成论证材料；你的光亮在于一旦承认错误，就会追求彻底的重建。", "先读《罪与罚》，再读《卡拉马佐夫兄弟》中的宗教与伦理辩论。", ["冷峻推演", "孤独意志", "道德高压"]],
  INTP: ["地下室书记员", "你最熟悉的是意识的回音室。你能拆解任何漂亮原则，也能拆解自己拆解原则的动机。你不缺智性，真正的考题是能否在无限反讽后仍然行动。", "从《地下室手记》进入，再接《群魔》，看思想如何变成现实裂缝。", ["反讽", "自我审问", "迟疑的自由"]],
  INFJ: ["阿廖沙式见证者", "你会把人的痛苦看成需要被理解的谜，而不是需要被快速分类的案件。你有强烈的精神直觉，也容易替别人背负过多重量。", "推荐《卡拉马佐夫兄弟》，重点看阿廖沙、佐西马长老与伊凡的对照。", ["慈悲", "预感", "精神重量"]],
  INFP: ["梅什金式纯真者", "你对真诚和怜悯有近乎固执的信任。你不是不懂世界的粗糙，而是不愿让粗糙成为自己也粗暴的理由。", "读《白痴》，再回到《罪与罚》看索尼娅式的温柔力量。", ["怜悯", "敏感", "柔软的抵抗"]],
  ISTJ: ["死屋档案管理员", "你相信事实、忍耐和秩序。你不急着解释灵魂，但会认真记录人在苦难中的具体姿态。你的稳定感，是混乱叙事里少见的地面。", "从《死屋手记》开始，再读《罪与罚》里的街道、房间和贫穷细节。", ["秩序", "耐受", "现实感"]],
  ISFJ: ["索尼娅式守灯人", "你会把道德放在日常照料里，而不是放在口号里。你最强的地方不是说服，而是在别人坠落后仍然留一盏灯。", "读《罪与罚》，留意索尼娅如何承受、陪伴和见证。", ["守护", "牺牲", "安静信念"]],
  ISFP: ["受伤的诚实者", "你对虚伪有本能的厌恶，也很难把感受交给抽象原则处理。你追求真实，但真实有时会以冲动和沉默的方式出现。", "读《白痴》和《被侮辱与被损害的人》，看纯真如何与伤害相撞。", ["真诚", "敏感", "不愿表演"]],
  ISTP: ["冷眼解剖者", "你会在别人陷入忏悔和宣言时先观察机制。你不迷信语言，更相信现场、动作和代价。你的清醒很宝贵，但别让它变成情感隔离。", "读《罪与罚》的调查线，再读《群魔》里行动如何压倒思想。", ["冷静", "现场感", "低声怀疑"]],
  ENTJ: ["彼得堡策划者", "你有强烈的推进力和改造冲动，能把混乱收束成行动路线。危险在于为了目标过快越过人的边界；优势在于能在废墟里组织下一步。", "读《群魔》，再对照《罪与罚》里理论野心的后果。", ["意志", "控制", "战略压力"]],
  ENTP: ["伊凡式辩难者", "你擅长把最稳固的信条逼到墙角。你的问题总是尖锐、迷人、危险。真正困难的不是提出反证，而是在反证之后仍然选择承担。", "读《卡拉马佐夫兄弟》，重点看伊凡的怀疑与责任。", ["辩难", "锋利", "自由焦虑"]],
  ENFJ: ["佐西马式告解室", "你能听见众人的痛苦，也试图把破碎的人重新带回关系之中。你有召集和安抚的能力，但要小心把自己的使命感烧得太亮。", "读《卡拉马佐夫兄弟》中的告解与共同责任，再读《白痴》。", ["召集", "共情", "精神劝导"]],
  ENFP: ["狂热的追问者", "你被可能性、情绪和命运转折吸引。你会突然相信、突然怀疑、突然奔向某个答案。你的火焰有创造力，也需要边界。", "读《赌徒》和《卡拉马佐夫兄弟》，看激情如何寻找意义。", ["热烈", "跳跃", "命运感"]],
  ESTJ: ["审判庭书记官", "你重视责任、证据和可执行的规则。你不喜欢沉溺式的自我解释，更想知道下一步怎么处理。你的优势是把混乱落到现实。", "读《罪与罚》中的侦查与制度压力，再读《死屋手记》。", ["责任", "执行", "秩序判断"]],
  ESFJ: ["彼得堡会客厅调停者", "你对关系温度非常敏感，擅长维持场面，也会被他人的痛苦牵动。你最怕的不是冲突本身，而是人彻底失去彼此。", "读《白痴》和《被侮辱与被损害的人》，看关系网中的善意与误伤。", ["关系", "照料", "社会直觉"]],
  ESFP: ["赌桌边的燃烧者", "你更相信当下的强度，而不是远处的说明书。你对生命的热、羞耻、欲望和风险都反应很快。记得激情不是敌人，失去方向才是。", "从《赌徒》开始，再读《罪与罚》里冲动之后的回声。", ["强度", "冲动", "当下"]],
  ESTP: ["街角现实主义者", "你不怕进入混乱现场，甚至能在压力中变得清醒。你讨厌空谈，喜欢用行动测试真相。你的课题是别把所有灵魂问题都当成操作问题。", "读《群魔》和《罪与罚》，看行动、风险和后果如何缠在一起。", ["行动", "风险", "现实检验"]]
};

const state = {
  index: 0,
  answers: [],
  scores: { EI: 0, SN: 0, TF: 0, JP: 0 }
};

const startScreen = document.querySelector("#startScreen");
const testScreen = document.querySelector("#testScreen");
const resultScreen = document.querySelector("#resultScreen");
const caseDrawer = document.querySelector("#caseDrawer");
const questionText = document.querySelector("#questionText");
const sourceLabel = document.querySelector("#sourceLabel");
const answers = document.querySelector("#answers");
const counter = document.querySelector("#counter");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const quoteLine = document.querySelector("#quoteLine");

function showOnly(screen) {
  [startScreen, testScreen, resultScreen].forEach((item) => item.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function startTest() {
  state.index = 0;
  state.answers = [];
  state.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  showOnly(testScreen);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[state.index];
  counter.textContent = `${state.index + 1} / ${questions.length}`;
  progressBar.style.width = `${(state.index / questions.length) * 100}%`;
  sourceLabel.textContent = item.source;
  questionText.textContent = `“${item.text}”`;
  quoteLine.textContent = quotes[state.index % quotes.length];
  backButton.disabled = state.index === 0;
  answers.innerHTML = "";

  answerOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = option.label;
    button.addEventListener("click", () => chooseAnswer(option.value));
    answers.appendChild(button);
  });
}

function chooseAnswer(value) {
  const item = questions[state.index];
  const score = value * item.dir;
  state.answers[state.index] = { dim: item.dim, score };

  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  progressBar.style.width = "100%";
  calculateResult();
}

function goBack() {
  if (state.index === 0) return;
  state.answers.pop();
  state.index -= 1;
  renderQuestion();
}

function calculateResult() {
  state.scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  state.answers.forEach((answer) => {
    state.scores[answer.dim] += answer.score;
  });

  const type = [
    state.scores.EI >= 0 ? "E" : "I",
    state.scores.SN >= 0 ? "N" : "S",
    state.scores.TF >= 0 ? "F" : "T",
    state.scores.JP >= 0 ? "J" : "P"
  ].join("");

  renderResult(type);
}

function renderResult(type) {
  const profile = typeProfiles[type] || typeProfiles.INFJ;
  document.querySelector("#resultTitle").textContent = `${type}｜${profile[0]}`;
  document.querySelector("#resultSubtitle").textContent = "你的 MBTI 类型被投放进陀思妥耶夫斯基式精神现场后，形成了这份病例摘要。";
  document.querySelector("#resultDescription").textContent = profile[1];
  document.querySelector("#readingPath").textContent = profile[2];

  const tags = document.querySelector("#traitTags");
  tags.innerHTML = "";
  profile[3].forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    tags.appendChild(span);
  });

  renderBars();
  document.querySelector("#shareLine").textContent = "";
  showOnly(resultScreen);
}

function renderBars() {
  const labels = {
    EI: ["I 内倾", "E 外倾"],
    SN: ["S 经验", "N 意义"],
    TF: ["T 审判", "F 慈悲"],
    JP: ["P 混沌", "J 秩序"]
  };
  const bars = document.querySelector("#bars");
  bars.innerHTML = "";

  Object.entries(state.scores).forEach(([dim, score]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    const percent = Math.max(8, Math.min(92, 50 + score * 5));
    row.innerHTML = `
      <div class="bar-label"><span>${labels[dim][0]}</span><span>${labels[dim][1]}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width: ${percent}%"></div></div>
    `;
    bars.appendChild(row);
  });
}

function renderCases() {
  const list = document.querySelector("#caseList");
  list.innerHTML = "";
  Object.entries(typeProfiles).forEach(([type, profile]) => {
    const item = document.createElement("article");
    item.className = "case-item";
    item.innerHTML = `<strong>${type}｜${profile[0]}</strong><p>${profile[1]}</p>`;
    list.appendChild(item);
  });
}

function shareVerdict() {
  const title = document.querySelector("#resultTitle").textContent;
  const line = `判词：${title}。你不是被测试定义的人，你只是刚刚在陀氏的走廊里留下了一串脚印。`;
  document.querySelector("#shareLine").textContent = line;
}

document.querySelector("#startButton").addEventListener("click", startTest);
document.querySelector("#restartButton").addEventListener("click", startTest);
document.querySelector("#backButton").addEventListener("click", goBack);
document.querySelector("#shareButton").addEventListener("click", shareVerdict);
document.querySelector("#caseButton").addEventListener("click", () => {
  renderCases();
  caseDrawer.classList.remove("hidden");
});
document.querySelector("#closeCases").addEventListener("click", () => caseDrawer.classList.add("hidden"));
