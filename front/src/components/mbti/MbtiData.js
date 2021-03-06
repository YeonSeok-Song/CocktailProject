const state = {
  questions: {
    1: ["Q. 낮선 사람과 술자리를 갖게 되었습니다. 당신의 행동은?"],
    2: [
      "Q. 오늘은 불금, 술을 마시고 싶던 당신은 친구들에게 전화하지만 아무도 받지 않는다...",
    ],
    3: [
      "Q. 평소 술을 좋아하는 당신, 자신이 좋아하는 술을 친구들에게 소개한다면??",
    ],
    4: [
      "Q. 술자리가 마무리 되어가던 중",
      <br />,
      <p />,
      " 그럼 N차 장소는 어디야? 분위기 쭉쭉 이어가야지~",
      <br />,
      <p />,
      " 라는 말이 나왔다. 당신의 행동은???",
    ],

    5: [
      "Q. 오랜만에 칵테일 바에 방문한 당신은 바텐더에 다가가 칵테일을 주문하려고 한다.",
    ],
    6: ["Q. 냉장고에 남은 술로 칵테일을 만들기로 한 당신"],
    7: [
      "Q. 홈 칵테일을 만들기 위해 이것저것 준비하던 중 미리 구매했던 지거(계량기)가 사라졌다..",
    ],
    8: [
      "Q. 연인과 함께 칵테일 바에 놀러간 당신 앞에서 화려한 묘기로 칵테일을 섞는 바텐더를 보고 든 생각은?",
    ],

    9: [
      "Q. ~~~해서 진짜 짜증났다니까...... 듣고 있어??",
      <br />,
      <p />,
      "연인과 술을 마시던 중 잠깐 딴생각해 대화에 집중하지 못한 당신.",
    ],
    10: ["Q. 친구에게 집에서 직접 칵테일을 만들어 먹었다고 연락이 왔다."],
    11: [
      "Q. 친구가 나름 심혈을 기울여 만든 칵테일을 맛본 당신",
      <br />,
      <p />,
      "생각보다 맛있어 한마디 하게 되는데?",
    ],

    12: ["Q. 술을 섞어 마실 때 나는??"],
    13: [
      "Q. 당신의 눈동자에 건배...",
      <br />,
      <p />,
      "조용히 바에서 혼자 술을 마시던 당신은 누군가가 미리 계산한 칵테일을 건내받게 되었습니다.",
    ],
    14: [
      "Q. 퇴근하던 중 허름한 골목을 지나가게 된 당신",
      <br />,
      <p />,
      " 우연히 작고 분위기좋은 칵테일 바를 보게 되었습니다.",
    ],
    15: ["Q. 평소 썸을 타던 상대방과 함께 술을 마시게 된 당신"],
  },
  answers: {
    //  E : correct answer
    1: {
      1: "내가 왕이야. 술자리를 이끈다. ", // E
      2: "조용히 분위기를 파악한다.", // I
    },
    2: {
      1: "집에서 조용히 혼술한다.", // I
      2: "단골 술집에 방문한다.", // E
    },
    3: {
      1: "내가 좋아하는 술을 쭉 나열한다. (귀에서 피남)", // E
      2: "가장 좋아하는 술 한가지를 자세히 설명해준다.", // I
    },
    4: {
      1: "(피곤) 하... 어떻게 하면 도망칠 수 있을까 궁리한다.", // I
      2: "(누구도 도망 못 가) 사람들을 이끌며 N차 장소로 이동한다.", // E
    },

    // S : correct answer
    5: {
      1: "익숙한 칵테일을 주문한다.", // S
      2: "바텐더가 새로 개발한 칵테일에 도전한다.", // N
    },
    6: {
      1: "(검색) 우선 냉장고에 있는 재료로 만들 수 있는 칵테일을 검색해 찾아본다.", // S
      2: "(시뮬레이션) 머리속으로 상상하며 미리 조합해본다. ", // N
    },
    7: {
      1: "지거따윈 필요없다. 내 감각에 의존해 섞는다.", // N
      2: "집에 계량이 가능한 컵이 있는 지 찾아본다.", // S
    },
    8: {
      1: "와.  대박 완전 멋있어 😍", // S
      2: "불안해.  떨어뜨리면 어떡하지? 휙 돌리다가 놓쳐서 앞에 쏟는거 아냐? 😫", // N
    },

    // T : correct answer
    9: {
      1: "그렇구나. 많이 짜증났겠다.", // F
      2: "미안 못들었어...  그래서 왜 짜증났다구??", // T
    },
    10: {
      1: "와... 대단한데?? 나도 만들어줘~~", // F
      2: "오 어떤 칵테일 만든거야?  어떻게 만들었어?", // T
    },
    11: {
      1: "맛있네. 근데 난 더 ~~~한 맛이 좋드라", // T
      2: "우와 진짜 맛있는데? 한잔 더 만들어주라", // F
    },

    // J : correct answer
    12: {
      1: "완벽주의자!! 재료, 비율, 섞는 방법 모든게 완벽해야 한다.", // J
      2: "기분파!! 그날 그날 내키는대로 섞는다.", // P
    },
    13: {
      1: "(철벽. 칵테일에 뭘 섞었을지 모른다...) 죄송하지만 사양하겠습니다...", // J
      2: "(몰라~ 일단 적셔) 고마워요. 주신분께 감사하다고 전해주세요...", // P
    },
    14: {
      1: "수상하다... 일단 손님이 있는지부터 볼까?", // J
      2: "분위기 대박... 1초의 망설임도 없이 들어간다.", // P
    },
    15: {
      1: "내 계획은 완벽하다.. 동선, 거리, 분위기, 술 종류, 안주 등등 모든 걸 고려한다.", // J
      2: "계획은 필요없다. 만나고 나서 생각하자.", // P
    },
  },
  correctAnswers: {
    1: "1",
    2: "2",
    3: "1",
    4: "2",

    5: "1",
    6: "1",
    7: "2",
    8: "1",

    9: "2",
    10: "2",
    11: "1",

    12: "1",
    13: "1",
    14: "1",
    15: "1",
  },
};
export default state;
