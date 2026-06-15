// ==========================================
// 1. EXERCISE DATABASE (exercisesData)
// ==========================================
const exercisesData = {
  chest: [
    {
      id: "bench_press",
      name: "벤치 프레스 (Bench Press)",
      target: "가슴 전체 (대흉근), 삼두근, 전면 삼각근",
      description: "웨이트 트레이닝의 3대 운동 중 하나로, 가슴 전체의 질량과 근력을 올리는 최고의 운동입니다.",
      steps: [
        "벤치에 등을 대고 누워 발을 바닥에 단단히 고정합니다.",
        "바벨을 어깨너비보다 조금 넓게 잡고 랙에서 들어 올립니다.",
        "가슴 중앙(젖꼭지 선) 위치로 바벨을 천천히 내리며 숨을 들이쉽니다.",
        "겨드랑이에 힘을 주며 바벨을 수직으로 밀어 올리고 숨을 내쉽니다."
      ],
      tips: [
        "바벨을 내릴 때 팔꿈치가 어깨 위로 과도하게 올라가면 부상 위험이 있으니 주의하세요.",
        "허리는 아치형을 유지하되 엉덩이가 벤치에서 떨어지지 않게 합니다."
      ]
    },
    {
      id: "incline_db_press",
      name: "인클라인 덤벨 프레스 (Incline Dumbbell Press)",
      target: "가슴 상부, 전면 삼각근, 삼두근",
      description: "인클라인 벤치를 활용하여 윗가슴 라인을 채워주고, 양팔을 독립적으로 움직여 대칭을 잡아줍니다.",
      steps: [
        "30~45도 정도 경사진 벤치에 앉아 덤벨을 허벅지 위에 올립니다.",
        "누우면서 덤벨을 가슴 옆 위치로 끌어올립니다.",
        "덤벨이 서로 닿지 않도록 주의하며 수직 위로 밀어 올립니다.",
        "가슴 상부에 자극을 느끼며 덤벨을 천천히 원래 위치로 내립니다."
      ],
      tips: [
        "덤벨이 양옆으로 지나치게 벌어지지 않도록 전완(팔뚝)을 수직으로 유지합니다.",
        "어깨가 들리지 않도록 숄더패킹(어깨를 아래로 당겨 고정)을 유지합니다."
      ]
    },
    {
      id: "chest_fly",
      name: "덤벨 플라이 (Dumbbell Fly)",
      target: "가슴 안쪽 (대흉근 내측)",
      description: "가슴을 모아주는 운동으로, 프레스 계열 운동 후 가슴 근육에 강한 수축과 이완 자극을 전달합니다.",
      steps: [
        "플랫 벤치에 누워 덤벨을 쥔 손을 마주 보게 하여 가슴 위로 뻗습니다.",
        "팔꿈치를 살짝 굽힌 상태를 고정하고, 큰 나무를 안듯 양팔을 넓게 벌려 내립니다.",
        "가슴 근육이 늘어나는 느낌을 받으면 다시 가슴을 모아주듯 덤벨을 위로 가져옵니다."
      ],
      tips: [
        "팔을 너무 펴거나 굽히면 가슴이 아닌 팔과 어깨에 힘이 들어갑니다.",
        "덤벨을 너무 낮게 내리면 어깨 관절에 무리가 갈 수 있습니다."
      ]
    },
    {
      id: "dips",
      name: "딥스 (Dips)",
      target: "가슴 하부, 삼두근, 전면 삼각근",
      description: "맨몸 운동의 왕으로 불리며, 가슴 하부 라인을 뚜렷하게 발달시키는 데 매우 탁월합니다.",
      steps: [
        "평행봉 위에 올라서서 손목을 펴고 어깨를 아래로 내립니다.",
        "상체를 살짝 앞으로 숙인 상태에서 팔꿈치를 90도 정도 굽히며 몸을 내립니다.",
        "가슴 아랫부분이 스트레칭되는 것을 느끼며 팔꿈치를 펴고 올라옵니다."
      ],
      tips: [
        "상체를 숙이지 않고 수직으로 내리면 가슴이 아닌 삼두근에 자극이 집중됩니다.",
        "어깨 관절이 약한 경우 너무 깊게 내려가지 않도록 제어합니다."
      ]
    },
    {
      id: "pec_deck_fly",
      name: "펙 덱 플라이 (Pec Deck Fly)",
      target: "가슴 안쪽 (대흉근 내측)",
      description: "머신을 활용하여 일정한 저항을 받으며 안전하게 가슴의 안쪽 수축 자극을 타겟합니다.",
      steps: [
        "엉덩이를 시트에 밀착하고 가슴을 편 채로 앉아 손잡이를 잡습니다.",
        "팔꿈치가 바닥과 평행을 유지하도록 조절하고, 가슴 안쪽의 힘으로 손잡이를 모아줍니다.",
        "모은 상태에서 1초간 쥐어짠 후, 가슴 근육이 늘어나는 것을 느끼며 천천히 돌아갑니다."
      ],
      tips: [
        "반동을 사용하여 손을 모으면 자극이 반감됩니다. 궤적을 제어하면서 제어하세요.",
        "팔의 힘이 아닌 팔꿈치 전체가 모인다는 느낌으로 수행합니다."
      ]
    },
    {
      id: "push_up",
      name: "푸쉬업 (Push Up)",
      target: "가슴 전체, 전면 삼각근, 삼두근, 코어",
      description: "장비 없이 언제 어디서나 수행할 수 있는 최고의 맨몸 가슴 및 코어 트레이닝입니다.",
      steps: [
        "양손을 어깨너비보다 약간 넓게 벌려 바닥에 대고 엎드립니다.",
        "머리부터 발끝까지 몸이 일직선이 되도록 코어를 긴장시킵니다.",
        "가슴이 바닥에 닿기 직전까지 천천히 몸을 내립니다.",
        "가슴 근육의 힘으로 바닥을 밀어내며 시작 자세로 돌아옵니다."
      ],
      tips: [
        "엉덩이가 밑으로 처지거나 위로 솟지 않도록 둔근과 복근을 단단히 고정합니다.",
        "팔꿈치가 어깨 방향으로 90도로 벌어지지 않고 45도 정도를 유지하도록 합니다."
      ]
    },
    {
      id: "cable_crossover",
      name: "케이블 크로스오버 (Cable Crossover)",
      target: "가슴 하부 및 내측",
      description: "케이블의 지속적인 텐션을 통해 덤벨보다 균일한 저항으로 가슴의 끝부분 수축을 강조합니다.",
      steps: [
        "케이블 머신의 하이 도르래에 손잡이를 달고 중앙에 서서 한 발 앞으로 나갑니다.",
        "상체를 살짝 숙이고 팔꿈치를 굽힌 상태로 넓게 벌려 준비합니다.",
        "큰 나무를 안듯 손을 앞/아래 방향으로 모아주며 가슴을 강하게 쥐어짭니다."
      ],
      tips: [
        "어깨가 앞으로 들리거나 으쓱하지 않도록 숄더패킹을 끝까지 유지합니다.",
        "손을 모을 때 가슴이 굽지 않게 계속해서 펴 줍니다."
      ]
    }
  ],
  back: [
    {
      id: "deadlift",
      name: "데드리프트 (Deadlift)",
      target: "광배근, 척추기립근, 둔근, 대퇴이두근",
      description: "전신 근육을 사용하는 최고의 웨이트 트레이닝 운동으로, 후면 사슬 전체를 단련합니다.",
      steps: [
        "발을 골반 너비로 벌리고 바벨 앞에 섭니다.",
        "허리를 편 상태로 고관절을 접어 바벨을 어깨너비보다 조금 넓게 잡습니다.",
        "가슴을 열어 척추를 곧게 펴고 발바닥으로 땅을 밀어내며 일어섭니다.",
        "바벨이 몸에서 떨어지지 않게 밀착하며 고관절을 뒤로 빼며 천천히 내려놓습니다."
      ],
      tips: [
        "운동 중 허리가 굽으면 심각한 척추 부상을 입을 수 있으므로 복압을 항상 유지해야 합니다.",
        "고개를 과도하게 들지 말고 척추와 일직선이 되도록 바라봅니다."
      ]
    },
    {
      id: "lat_pulldown",
      name: "랫 풀 다운 (Lat Pulldown)",
      target: "광배근, 대원근, 이두근",
      description: "턱걸이가 어려운 초보자도 쉽게 광배근(등 바깥쪽)을 타겟하여 넓은 등을 만들 수 있는 머신 운동입니다.",
      steps: [
        "머신의 패드에 허벅지를 단단히 고정하고 바를 어깨너비보다 넓게 잡습니다.",
        "가슴을 위쪽으로 살짝 들어 올리고(아치 유지), 쇄골 방향으로 바를 당깁니다.",
        "팔꿈치를 옆구리에 붙인다는 느낌으로 등 근육을 수축합니다.",
        "등이 늘어나는 자극을 느끼며 천천히 팔을 폅니다."
      ],
      tips: [
        "상체를 과도하게 뒤로 눕히면 광배근보다 승모근이나 이두근의 개입이 커집니다.",
        "손으로 당기지 말고 팔꿈치로 찍어 내린다는 느낌으로 당기세요."
      ]
    },
    {
      id: "bent_over_row",
      name: "바벨 로우 (Bent Over Row)",
      target: "등 전체 (광배근, 승모근 중하부, 능형근)",
      description: "등의 두께를 키우는 데 탁월한 운동으로, 상체를 숙인 상태를 유지하여 코어 근육도 동시에 단련됩니다.",
      steps: [
        "바벨을 들고 서서 무릎을 살짝 굽히고 상체를 45도 정도 숙입니다.",
        "바벨을 배꼽 방향으로 잡아당기며 날개뼈(견갑골)를 서로 접어줍니다.",
        "등 근육을 수축한 뒤, 무게를 버티며 천천히 시작 위치로 내립니다."
      ],
      tips: [
        "허리가 구부러지지 않도록, 엉덩이를 뒤로 빼고 척추 정렬을 유지합니다.",
        "반동을 주지 않고 광배근의 힘만으로 제어하며 움직입니다."
      ]
    },
    {
      id: "pull_up",
      name: "풀업 (Pull Up)",
      target: "광배근, 대원근, 승모근 하부, 이두근",
      description: "최고의 상체 후면 발달 운동으로 등 근육의 너비(V-Taper)를 넓히는 데 필수적입니다.",
      steps: [
        "바를 어깨너비보다 넓게 잡고 매달립니다.",
        "어깨를 아래로 당기면서(숄더 팩킹) 가슴을 위로 밀어 올리듯 올라갑니다.",
        "턱이 바 위로 올라가는 것보다 가슴이 바에 닿는 느낌으로 등 근육을 쥐어짭니다.",
        "등의 저항을 받으며 몸을 서서히 내립니다."
      ],
      tips: [
        "올라갈 때 어깨가 솟아 귀에 가까워지지 않도록 목을 길게 빼는 느낌을 유지합니다.",
        "갯수가 부족하다면 헬스장의 풀업 어시스트 머신이나 저항 밴드를 이용해 강도를 조절하세요."
      ]
    },
    {
      id: "seated_cable_row",
      name: "시티드 케이블 로우 (Seated Cable Row)",
      target: "능형근, 승모근 중하부, 광배근 안쪽",
      description: "앉아서 당기는 머신 운동으로 등 뒤쪽 가운데 입체감을 만들어 주고 견갑골 제어력을 길러줍니다.",
      steps: [
        "발판에 발을 지탱하고 무릎을 살짝 굽혀 벤치에 앉은 뒤 그립을 잡습니다.",
        "상체를 곧게 세운 자세에서 팔꿈치를 뒤로 당겨 손잡이를 명치 아래쪽으로 가져옵니다.",
        "견갑골을 서로 완전히 접어 수축한 후, 등이 늘어나는 것을 느끼며 팔을 서서히 폅니다."
      ],
      tips: [
        "바를 당길 때 허리가 둥글게 말리거나 반동으로 상체가 심하게 눕지 않도록 고정합니다.",
        "가슴을 벌려 견갑의 가동 범위를 끝까지 확보해 줍니다."
      ]
    },
    {
      id: "one_arm_db_row",
      name: "원 암 덤벨 로우 (One Arm Dumbbell Row)",
      target: "광배근 하부, 대원근, 능형근",
      description: "한쪽씩 실시하여 자극의 집중도를 높이고 덤벨의 넓은 가동 범위를 이용해 광배근 밑쪽까지 자극합니다.",
      steps: [
        "한쪽 무릎과 손을 플랫 벤치 위에 얹어 몸을 지탱하고 반대 손으로 덤벨을 잡습니다.",
        "척추가 평행을 이루도록 편 뒤, 덤벨을 골반(옆구리 뒷방향) 쪽으로 끌어올립니다.",
        "팔꿈치가 몸통 위로 지나가 등 근육이 수축되면 다시 천천히 내립니다."
      ],
      tips: [
        "덤벨을 수직 위로 수직으로만 들어 올리면 등보다 이두근의 개입이 늘어납니다. 대각선 뒤쪽 골반 방향으로 당기세요.",
        "몸통이 회전하여 뒤틀리지 않도록 벤치를 짚은 자세를 고정합니다."
      ]
    },
    {
      id: "tbar_row",
      name: "티바 로우 (T-Bar Row)",
      target: "등 전체 (두께 및 입체감)",
      description: "특수한 손잡이 궤적을 이용하여 등의 두께를 키우기 위해 고중량을 효과적으로 당길 수 있는 운동입니다.",
      steps: [
        "T바 머신 위에 올라서서 발을 고정하고 손잡이를 잡습니다.",
        "무릎을 약간 구부린 뒤 허리를 아치형으로 곧게 폅니다.",
        "팔꿈치를 뒤로 당기면서 배를 스치듯 바를 배꼽 아래쪽으로 당겨 수축합니다.",
        "무게를 서서히 통제하며 등을 이완시킵니다."
      ],
      tips: [
        "허리에 가해지는 압력이 상당하므로 코어를 꽉 쥐고 허리가 굽지 않게 세심한 주의를 기울입니다.",
        "발바닥 전체로 지면을 견고하게 누르며 안정성을 유지합니다."
      ]
    }
  ],
  shoulders: [
    {
      id: "overhead_press",
      name: "오버헤드 프레스 (Overhead Press)",
      target: "전면/측면 삼각근, 삼두근, 전거근",
      description: "서서 바벨을 머리 위로 밀어 올리는 고전적인 어깨 운동으로 어깨 볼륨과 상체 코어를 함께 발달시킵니다.",
      steps: [
        "렉에서 바벨을 가공할 위치에 얹고 쇄골 높이에서 잡습니다.",
        "엉덩이와 복부에 강하게 힘을 주어 몸을 고정합니다.",
        "바벨이 얼굴을 스치듯 머리 위로 수직으로 곧게 밀어 올립니다.",
        "천천히 저항을 느끼며 쇄골 높이로 바벨을 내립니다."
      ],
      tips: [
        "바벨을 밀어 올릴 때 허리가 과도하게 꺾이지 않도록 코어를 단단히 유지합니다.",
        "바벨의 궤적은 일직선이어야 하므로 머리를 살짝 뒤로 뺐다가 밀어 올린 후 다시 앞으로 넣어줍니다."
      ]
    },
    {
      id: "side_lateral_raise",
      name: "사이드 레터럴 레이즈 (Side Lateral Raise)",
      target: "측면 삼각근",
      description: "어깨를 옆으로 넓어 보이게 만드는(어깨 깡패) 필수적인 측면 어깨 타겟 운동입니다.",
      steps: [
        "양손에 덤벨을 들고 발을 어깨너비로 벌려 섭니다.",
        "팔꿈치를 아주 살짝 굽히고, 손이 아닌 팔꿈치를 옆으로 들어 올린다는 느낌으로 덤벨을 올립니다.",
        "어깨 높이까지 올린 후 측면 어깨 자극을 느끼며 천천히 내립니다."
      ],
      tips: [
        "어깨(승모근)가 으쓱하며 올라가지 않도록 날개뼈를 고정한 상태에서 들어 올립니다.",
        "반동을 사용하기보다는 가벼운 무게로 정확한 자극을 느끼는 것이 중요합니다."
      ]
    },
    {
      id: "db_shoulder_press",
      name: "덤벨 숄더 프레스 (Dumbbell Shoulder Press)",
      target: "전면 및 측면 삼각근, 삼두근",
      description: "덤벨을 사용하여 어깨 관절의 자연스러운 움직임을 확보하고 가동범위를 극대화해 어깨 볼륨을 키웁니다.",
      steps: [
        "벤치에 앉아 덤벨을 귀 높이에 위치시킵니다 (팔꿈치는 수직 유지).",
        "덤벨이 모이지 않도록 유의하면서 머리 위로 수직으로 곧게 밀어 올립니다.",
        "어깨 근육의 긴장을 풀지 않고 천천히 귀 높이까지 내립니다."
      ],
      tips: [
        "덤벨을 너무 과도하게 내리면 어깨 회전근개에 충돌 증후군이나 부상이 생길 수 있습니다.",
        "내렸을 때 전완이 항상 바닥과 수직 상태를 가리켜야 합니다."
      ]
    },
    {
      id: "bent_over_lateral_raise",
      name: "벤트 오버 레터럴 레이즈 (Bent Over Lateral Raise)",
      target: "후면 삼각근, 승모근 중부",
      description: "어깨의 입체감과 둥근 어깨 형성을 마무리하기 위해 상체를 숙여 어깨 후면을 집중 공략합니다.",
      steps: [
        "덤벨을 쥐고 허리를 굽혀 상체가 바닥과 거의 수평이 되게 만듭니다.",
        "무릎을 살짝 굽히고 덤벨을 정강이 아래에 둡니다.",
        "날개뼈를 접지 않는 선에서, 팔을 양옆으로 던지듯 어깨 높이까지 들어 올립니다.",
        "어깨 뒷부분의 수축을 느끼며 덤벨을 서서히 복귀시킵니다."
      ],
      tips: [
        "날개뼈(견갑)가 접히면 등(승모근, 능형근)의 힘이 많이 사용되므로 팔꿈치를 약간 벌린 채 유지하며 어깨 후면으로만 보냅니다.",
        "머리가 몸보다 아래로 처지지 않게 척추 정렬을 맞추세요."
      ]
    },
    {
      id: "face_pull",
      name: "페이스 풀 (Face Pull)",
      target: "후면 삼각근, 상부 승모근, 회전근개",
      description: "케이블과 로프를 사용하여 얼굴 방향으로 당기며 후면 삼각근 단련 및 라운드 숄더 교정에 최고인 운동입니다.",
      steps: [
        "케이블 머신 상단에 로프를 연결하고 뒤로 두 걸음 나와 지탱합니다.",
        "엄지손가락이 뒤를 향하게 로프를 잡고, 눈높이 혹은 얼굴 방향으로 당깁니다.",
        "로프 끝을 얼굴 양옆으로 찢어주듯 넓게 벌려 당기며 어깨 뒤쪽을 꽉 수축시킵니다.",
        "어깨가 서서히 늘어나는 느낌을 제어하며 원래대로 돌아갑니다."
      ],
      tips: [
        "단순히 팔을 구부려 당기는 게 아니라, 어깨 관절의 외회전(바깥으로 돌려주는 힘)을 의식하며 당겨야 효과가 좋습니다.",
        "상체가 흔들리지 않게 발을 넓혀 무게 중심을 잡으세요."
      ]
    },
    {
      id: "arnold_press",
      name: "아놀드 프레스 (Arnold Press)",
      target: "전면/측면 삼각근, 삼두근",
      description: "아놀드 슈왈제네거가 고안한 운동으로 덤벨 회전을 추가하여 전면과 측면 삼각근을 고르게 자극합니다.",
      steps: [
        "덤벨을 쥔 손바닥이 얼굴을 향하게 하여 덤벨을 쇄골 높이에 둡니다.",
        "덤벨을 위로 밀어 올리면서 손목을 바깥쪽으로 180도 회전시킵니다 (최고 지점에선 손바닥이 앞을 향함).",
        "다시 내리면서 손목을 원래 방향(얼굴 쪽)으로 역회전시키며 시작 자세로 돌아옵니다."
      ],
      tips: [
        "손목의 회전 동작과 수직 밀어 올리기 동작이 부드럽고 끊김 없이 연결되도록 연습합니다.",
        "관절의 가동이 복잡하므로 가벼운 무게로 정확한 자극을 찾는 게 먼저입니다."
      ]
    },
    {
      id: "front_raise",
      name: "프론트 레이즈 (Front Raise)",
      target: "전면 삼각근",
      description: "덤벨이나 바벨을 앞으로 들어 올려 어깨의 앞부분 선명도와 입체감을 집중적으로 키웁니다.",
      steps: [
        "덤벨을 들고 허벅지 앞에 둡니다.",
        "팔꿈치를 단단하게 고정하고, 한 팔씩 혹은 양팔을 동시에 정면 어깨 높이까지 들어 올립니다.",
        "전면 삼각근의 저항을 받으면서 천천히 원래 위치로 복귀시킵니다."
      ],
      tips: [
        "무릎 반동을 사용해 올리지 마시고, 몸의 척추는 고정한 채 어깨 힘으로만 올리세요.",
        "손이 어깨 높이를 넘어 너무 올라가면 승모근이 과도하게 동원됩니다."
      ]
    }
  ],
  legs: [
    {
      id: "squat",
      name: "스쿼트 (Squat)",
      target: "대퇴사두근, 대둔근, 햄스트링, 코어",
      description: "하체 운동의 꽃이자 전신 근육과 호르몬 분비를 촉진하는 최고의 웨이트 트레이닝 운동입니다.",
      steps: [
        "바벨을 승모근 위에 얹고 어깨너비보다 약간 넓게 발을 벌리고 섭니다 (발끝은 15~30도 외측).",
        "호흡을 들이마셔 복압을 잡고, 의자에 앉듯 엉덩이를 뒤로 빼며 무릎을 굽혀 내려갑니다.",
        "허벅지가 바닥과 평행이 될 때까지 내려간 후 발바닥 전체로 땅을 밀며 일어섭니다.",
        "일어서면서 호흡을 내뱉습니다."
      ],
      tips: [
        "무릎이 안쪽으로 모이지 않도록 항상 발끝 방향과 일치하게 벌려줍니다.",
        "뒤꿈치가 땅에서 떨어지지 않도록 체중을 발뒤꿈치와 중앙에 싣습니다."
      ]
    },
    {
      id: "romanian_deadlift",
      name: "루마니안 데드리프트 (Romanian Deadlift)",
      target: "햄스트링, 대둔근, 척추기립근",
      description: "하체 후면(뒷벅지와 엉덩이)을 집중적으로 타겟하여 탄력 있는 하체와 튼튼한 후면 사슬을 만듭니다.",
      steps: [
        "바벨을 들고 곧게 선 자세에서 시작합니다.",
        "고관절을 뒤로 접으며(힙 힌지) 바벨을 허벅지를 쓸어내리듯 내립니다.",
        "정강이 중간이나 무릎 아래까지 내려가 햄스트링이 팽팽해지는 자극을 느낍니다.",
        "엉덩이를 앞으로 밀어주면서 강하게 수축하며 일어섭니다."
      ],
      tips: [
        "무릎은 많이 굽히지 않고 엉덩이를 뒤로 보내는 데 집중합니다.",
        "허리가 구부러지지 않도록 가슴을 내밀어 일직선을 유지합니다."
      ]
    },
    {
      id: "leg_press",
      name: "레그 프레스 (Leg Press)",
      target: "대퇴사두근, 대둔근",
      description: "허리에 부담을 전혀 주지 않으면서 하체에 엄청난 중량 과부하를 안전하게 걸어 발달시키는 대표 머신입니다.",
      steps: [
        "등받이에 엉덩이와 등, 어깨를 완벽히 밀착해 앉습니다.",
        "발판에 발을 어깨너비로 올리고 안전바를 풉니다.",
        "무릎을 천천히 굽혀 발판이 내려오게 하되 엉덩이가 들리기 직전까지 내립니다.",
        "발뒤꿈치 전체로 발판을 강력하게 밀어 올립니다."
      ],
      tips: [
        "무릎을 다 밀었을 때 관절이 락아웃(탁 하고 완전히 펴짐)되면 심각한 무릎 손상을 초래하니 95%만 폅니다.",
        "발바닥 위치가 너무 위면 뒷벅지/둔근, 아래면 대퇴사두근(앞벅지) 자극이 늘어납니다."
      ]
    },
    {
      id: "leg_curl",
      name: "레그 컬 (Leg Curl)",
      target: "햄스트링 (허벅지 뒤쪽)",
      description: "스쿼트로 만들기 힘든 햄스트링의 단독 수축 고립을 통해 하체의 균형을 잡고 무릎 부상을 예방합니다.",
      steps: [
        "머신에 엎드리거나(엎드린 컬) 앉은 상태(시티드 컬)에서 롤러를 아킬레스건 부근에 고정합니다.",
        "손잡이를 꽉 쥔 상태에서, 발뒤꿈치로 엉덩이를 찬다는 느낌으로 무릎을 굽힙니다.",
        "허벅지 뒤쪽의 쥐어짜는 긴장을 통제하면서 다리를 천천히 폅니다."
      ],
      tips: [
        "무릎을 구부릴 때 엉덩이가 들썩이며 솟구치지 않도록 주의합니다.",
        "다리를 펼 때 무릎이 완전히 다 펴지기 직전까지만 가며 햄스트링의 텐션을 계속 가져갑니다."
      ]
    },
    {
      id: "leg_extension",
      name: "레그 익스텐션 (Leg Extension)",
      target: "대퇴사두근 (허벅지 앞쪽)",
      description: "허벅지 앞쪽의 단독 고립 운동으로 대퇴사두근의 갈라짐(데피니션)을 완성하는 최고의 운동입니다.",
      steps: [
        "시트 조절 패드를 무릎 뒤에 단단히 밀착시키고 롤러는 발목 부근에 세팅합니다.",
        "손잡이를 잡아 상체를 고정하고, 다리를 앞으로 곧게 뻗어 올립니다.",
        "허벅지 앞쪽 근육이 터질 듯 수축되면 버티면서 천천히 내립니다."
      ],
      tips: [
        "최고 수축 지점에서 다리를 쭉 펴고 0.5초 정도 머물러주면 자극이 훨씬 깊어집니다.",
        "엉덩이가 등등 벤치에서 들뜨지 않게 손잡이를 아래 방향으로 세게 당겨 고정합니다."
      ]
    },
    {
      id: "lunge",
      name: "덤벨 런지 (Dumbbell Lunge)",
      target: "대퇴사두근, 대둔근, 햄스트링, 코어 및 밸런스",
      description: "한 다리씩 독립적으로 동작하여 하체의 불균형을 해결하고 엉덩이와 힙업 라인을 폭발적으로 단련합니다.",
      steps: [
        "양손에 덤벨을 들고 상체를 바르게 펴 서서 준비합니다.",
        "한쪽 발을 한 보 반 앞으로 크게 내딛습니다.",
        "뒷다리 무릎이 바닥에 닿기 직전까지 아래로 수직으로 주저앉습니다.",
        "앞발 뒤꿈치에 힘을 실어 땅을 차면서 원위치로 복귀합니다."
      ],
      tips: [
        "앞발 무릎이 발가락 끝보다 너무 심하게 튀어나가면 무릎 전방 십자인대에 과부하가 갑니다.",
        "허리는 굽지 않게 꼿꼿하게 유지하고 상체가 앞뒤로 과도하게 요동치지 않도록 합니다."
      ]
    },
    {
      id: "calf_raise",
      name: "카프 레이즈 (Calf Raise)",
      target: "종아리",
      description: "종아리 근육의 펌핑과 강화를 통해 신체 혈액순환(제2의 심장)을 돕고 점프력 및 발목 안정성을 돕습니다.",
      steps: [
        "발판 끝에 발앞꿈치만 딛고 서서 뒤꿈치를 허공에 띄웁니다.",
        "종아리 근육이 완전히 팽팽해질 때까지 뒤꿈치를 아래로 길게 떨어뜨립니다.",
        "발가락 힘을 이용해 몸 전체를 수직 위로 곧게 까치발을 들듯 올립니다."
      ],
      tips: [
        "올라간 곳에서 까치발 수축 상태를 느낀 뒤 천천히 떨어져야 반동 없이 종아리 섬유가 단련됩니다.",
        "무릎은 다 펴지 말고 미세하게만 굽혀 슬관절의 부담을 덜어 줍니다."
      ]
    }
  ],
  arms: [
    {
      id: "db_biceps_curl",
      name: "덤벨 바이셉스 컬 (Dumbbell Biceps Curl)",
      target: "상완이두근 (알통)",
      description: "팔 앞쪽 근육을 발달시키는 가장 대표적인 운동으로 이두근의 봉우리와 굵기를 키워줍니다.",
      steps: [
        "양손에 덤벨을 들고 손바닥이 앞을 향하게 서거나 벤치에 앉습니다.",
        "팔꿈치를 옆구리에 고정한 채로 덤벨을 위로 올려 이두근을 수축합니다.",
        "수축 시 손목을 바깥쪽으로 살짝 돌려주면 더 강한 자극이 옵니다.",
        "천천히 덤벨을 내리며 이두근을 이완시킵니다."
      ],
      tips: [
        "팔꿈치가 앞으로 들리거나 뒤로 빠지지 않도록 단단히 고정해야 이두근만 집중 타겟됩니다.",
        "상체를 흔드는 치팅(반동)을 최소화합니다."
      ]
    },
    {
      id: "triceps_pushdown",
      name: "트라이셉스 푸쉬다운 (Triceps Pushdown)",
      target: "상완삼두근 (팔 뒤쪽)",
      description: "케이블 머신을 활용하여 삼두근 전체를 외측두, 내측두 골고루 발달시켜 팔 뒤쪽을 탄탄하게 만듭니다.",
      steps: [
        "케이블 머신 앞에 서서 바 또는 로프를 잡습니다.",
        "상체를 살짝 숙이고 팔꿈치를 옆구리에 바짝 붙입니다.",
        "삼두근의 힘으로 팔꿈치를 완전히 펴서 아래로 찍어 누릅니다.",
        "삼두의 긴장을 유지하면서 천천히 팔꿈치를 90도 정도까지 접어 올립니다."
      ],
      tips: [
        "팔꿈치가 옆구리에서 떨어지거나 벌어지지 않도록 고정하는 것이 핵심입니다.",
        "손목이 꺾이지 않도록 전완과 수직 정렬을 이룹니다."
      ]
    },
    {
      id: "hammer_curl",
      name: "해머 컬 (Hammer Curl)",
      target: "상완골근, 전완근, 이두 외측",
      description: "망치질을 하듯 그립을 수평으로 쥐고 하는 팔 운동으로, 팔의 너비와 아래팔 전완근을 굵게 채워줍니다.",
      steps: [
        "덤벨을 쥔 손바닥이 서로 마주 보게 중립(뉴트럴) 그립으로 잡고 섭니다.",
        "팔꿈치를 골반 부근에 고정하고 덤벨을 어깨 쪽을 향해 수직으로 올립니다.",
        "전완 전체에 압력을 느끼며 덤벨을 저항하며 낮춥니다."
      ],
      tips: [
        "손목이 꺾이거나 흔들리지 않도록 단단히 그립을 손아귀 힘으로 잡습니다.",
        "몸을 앞뒤로 꺾는 스웨이를 배제합니다."
      ]
    },
    {
      id: "barbell_curl",
      name: "바벨 컬 (Barbell Curl)",
      target: "상완이두근 전체",
      description: "이두근 벌크업(부피 확장)의 대표 핵심 운동으로 무거운 무게로 양팔을 강하게 수축시킵니다.",
      steps: [
        "바벨(또는 이지바)을 어깨너비로 잡고 바로 섭니다.",
        "팔꿈치를 갈비뼈 근처에 대고 바벨을 포물선 궤적으로 올립니다.",
        "이두의 강력한 쥐어짜짐을 만든 후 자극을 느끼며 내립니다."
      ],
      tips: [
        "이지바(EZ-Bar)를 쓰면 손목 각도가 편안해져 관절 통증을 경감할 수 있습니다.",
        "팔꿈치가 앞으로 너무 벌어지면 전면 어깨가 동반 사용됩니다."
      ]
    },
    {
      id: "lying_triceps_extension",
      name: "라잉 트라이셉스 익스텐션 (Lying Triceps Extension)",
      target: "상완삼두근 (특히 장두)",
      description: "벤치에 누워 바벨을 이마 근처로 내려 삼두근의 장두(뒤쪽에서 볼륨을 결정하는 파트)를 거대하게 만듭니다.",
      steps: [
        "벤치에 누워 이지바를 쥐고 팔을 수직 위로 뻗습니다.",
        "팔꿈치를 어깨 뒤쪽으로 아주 살짝 기울여 준비합니다.",
        "팔꿈치를 고정하고 전완만 구부려 바벨을 이마 또는 정수리 위치로 내립니다.",
        "삼두의 힘으로 바벨을 밀어 올리며 곧게 폅니다."
      ],
      tips: [
        "팔꿈치가 바깥쪽 양옆으로 넓게 벌어지면 삼두에 걸리는 중량이 소실됩니다. 좁게 유지하세요.",
        "무게를 다루다가 이마를 다칠 위험이 있으니 보조자나 안전 세팅에서 조심스럽게 진행합니다."
      ]
    },
    {
      id: "db_kickback",
      name: "덤벨 킥백 (Dumbbell Kickback)",
      target: "상완삼두근 외측두 및 상부 수축",
      description: "팔 뒤쪽 윗라인 데피니션을 잡기 위해 가벼운 무게로 삼두근 끝 지점 수축을 극단적으로 유도합니다.",
      steps: [
        "상체를 앞으로 약 45도 이상 숙이고 덤벨을 쥔 한쪽 팔꿈치를 갈비뼈 높이 위로 당겨 둡니다.",
        "팔꿈치 각도를 90도로 유지하고, 오직 삼두 힘으로 팔을 뒤로 일직선이 될 때까지 쭉 뻗어 줍니다.",
        "뒤쪽으로 쭉 핀 상태에서 1초간 머무른 뒤, 천천히 90도 상태로 전완을 되돌립니다."
      ],
      tips: [
        "동작 중에 팔꿈치가 아래위로 흔들리면 궤적 및 삼두 자극이 흩어집니다.",
        "반동으로 뒤로 던지지 말고 서서히 곧게 밀어 올려 고정합니다."
      ]
    },
    {
      id: "preacher_curl",
      name: "프리처 컬 (Preacher Curl)",
      target: "상완이두근 하부 (이두의 완성도)",
      description: "팔뚝 뒤쪽 삼두를 프리처 패드에 완전히 견착하고 고정함으로써 어깨나 상체 반동 개입을 0% 차단해 이두를 극단적으로 고립합니다.",
      steps: [
        "프리처 벤치 시트 높이를 조절하고 겨드랑이를 패드 상단에 완전히 끼워 얹습니다.",
        "이지바를 잡고 팔을 약간 굽혀 준비합니다.",
        "이두 근육의 힘만으로 바를 위로 쥐어짜 올립니다.",
        "저항을 완전히 받으면서 천천히 팔을 90% 정도 펴서 내립니다."
      ],
      tips: [
        "내려갈 때 팔꿈치를 100% 락아웃하여 완전히 펴버리면 건 부상 위험이 있으니 주의하세요.",
        "체중을 실어 당기지 않도록 상체를 고정합니다."
      ]
    }
  ],
  abs: [
    {
      id: "crunch",
      name: "크런치 (Crunch)",
      target: "복직근 상부 (윗배)",
      description: "허리에 무리를 주지 않으면서 상부 복근을 집중적으로 쥐어짜는 안전한 복근 운동입니다.",
      steps: [
        "바닥에 누워 무릎을 구부리고 발을 바닥에 댑니다. 손은 머리 뒤에 대거나 가슴 위에 얹습니다.",
        "허리는 바닥에 밀착한 상태에서, 날개뼈가 바닥에서 5~10cm 정도 떨어질 때까지 상체를 둥글게 맙니다.",
        "최고 지점에서 복근을 강하게 쥔 후, 천천히 자극을 느끼며 머리가 바닥에 닿기 직전까지 내려갑니다."
      ],
      tips: [
        "목을 양손으로 세게 잡아당기면 목 관절에 부상이 생기므로, 복근의 힘만으로 상체를 들어 올립니다.",
        "올라올 때 호흡을 완전히 내뱉어 복근을 수축시켜 줍니다."
      ]
    },
    {
      id: "leg_raise",
      name: "레그 레이즈 (Leg Raise)",
      target: "복직근 하부 (아랫배)",
      description: "다리의 무게를 이용하여 아래쪽 복근과 장요근을 단련시키는 효과적인 아랫배 운동입니다.",
      steps: [
        "바닥에 누워 양손을 엉덩이 옆이나 아래에 두어 허리를 지탱합니다.",
        "다리를 곧게 펴고(또는 무릎을 아주 약간 굽히고) 수직이 될 때까지 들어 올립니다.",
        "아랫배에 자극을 느끼며 다리를 천천히 바닥 직전까지 내립니다 (바닥에 닿지 않음)."
      ],
      tips: [
        "다리를 내릴 때 허리가 바닥에서 뜨면 통증이 발생할 수 있으므로 척추를 바닥에 강하게 밀착시킵니다.",
        "허리가 아프다면 무릎을 굽힌 상태로 진행하는 레그 레이즈를 추천합니다."
      ]
    },
    {
      id: "plank",
      name: "플랭크 (Plank)",
      target: "코어 머슬 전체, 복직근, 횡복근, 기립근, 둔근",
      description: "몸 전체의 척추 중립을 잡고 유지하는 전신 버티기 운동으로 신체 코어 안정성을 높이는 기둥입니다.",
      steps: [
        "바닥에 엎드린 상태에서 팔꿈치를 구부려 전완을 땅에 대고 어깨 밑에 위치시킵니다.",
        "발가락 끝으로 지탱하며 엉덩이를 띄워 머리끝부터 발끝까지 수평을 이룹니다.",
        "복부와 엉덩이, 다리에 꽉 힘을 준 채 지정된 시간(30초~1분) 동안 버팁니다."
      ],
      tips: [
        "허리가 아래로 축 처지면 요추 관절에 유해하니 복부 벨트를 당기듯 계속 복압을 올려 고정합니다.",
        "숨을 참지 말고 호흡을 잘게 내쉬며 리듬을 유지합니다."
      ]
    },
    {
      id: "russian_twist",
      name: "러시안 트위스트 (Russian Twist)",
      target: "외복사근, 내복사근 (옆구리)",
      description: "상체를 살짝 세워 비틀어줌으로써 복부 양옆 라인(옆구리 러브핸들 정리)을 매끈하고 선명하게 조각합니다.",
      steps: [
        "바닥에 앉아 무릎을 굽히고 상체를 뒤로 약 45도 젖힙니다 (발은 땅에 대거나 가볍게 띄움).",
        "양손을 모아 가슴 앞에 두고, 복부 힘을 이용해 상체를 좌우로 끝까지 비틀어 손이 바닥 근처를 찌르게 합니다.",
        "자극을 통제하며 좌우 교대로 리드미컬하게 회전합니다."
      ],
      tips: [
        "단순히 팔목만 움직이지 말고, 가슴 어깨 프레임 전체가 좌우로 완전히 도는 움직임을 취해야 외복사근이 작동합니다.",
        "척추가 무리하게 구부정해지지 않도록 가슴은 편 상태를 유도합니다."
      ]
    },
    {
      id: "hanging_leg_raise",
      name: "행잉 레그 레이즈 (Hanging Leg Raise)",
      target: "복직근 하부, 장요근, 악력 및 전신 밸런스",
      description: "철봉에 매달려서 온전히 다리 무게로 아랫배를 말아 올리는 강력한 복부 코어 최종 병기입니다.",
      steps: [
        "철봉을 단단히 쥐고 매달려 다리를 곧게 떨어뜨립니다.",
        "상체 반동(몸 흔들기)을 최소화하면서 복부 하부의 힘으로 다리를 들어 올립니다.",
        "골반까지 둥글게 말려 아랫배가 완전히 수축되면 저항하며 천천히 다리를 원위치로 내립니다."
      ],
      tips: [
        "흔들림이 너무 강하다면, 무릎을 굽힌 채 흉부 방향으로 끌어당기는 행잉 니 레이즈(Hanging Knee Raise)를 먼저 마스터합니다.",
        "숄더 팩킹으로 어깨를 안정화하고 매달려야 어깨 관절 부담이 적습니다."
      ]
    },
    {
      id: "ab_rollout",
      name: "어브 롤아웃 (Ab Rollout)",
      target: "복직근 전체, 전거근, 코어 횡복근",
      description: "롤러 바퀴 장비를 굴려 온몸을 늘였다가 복근 힘만으로 복귀하는 최고의 안티-익스텐션(신전 저항) 코어 운동입니다.",
      steps: [
        "바닥에 무릎을 꿇고 무릎 패드를 댄 후 롤러 손잡이를 잡습니다.",
        "복부에 단단히 바람을 넣어 수축하고, 앞으로 롤러를 천천히 밀며 내려갑니다.",
        "몸이 바닥과 닿기 전 복근의 한계 지점까지 민 뒤, 복부 복압 힘으로 바퀴를 당겨 원위치로 말며 복귀합니다."
      ],
      tips: [
        "돌아올 때 팔의 힘이나 엉덩이만 뒤로 빼서 돌아오면 복부의 텐션이 도망갑니다. 등이 고양이처럼 살짝 둥글어지면서 복근으로 밀어내며 당기세요.",
        "허리가 밑으로 무너져서 U자가 되는 순간 허리 부상이 발생하므로 감당할 수 있는 거리만 전진합니다."
      ]
    }
  ]
};

// ==========================================
// 2. WORKOUT TRACKER MODULE
// ==========================================
class WorkoutTracker {
  constructor(app) {
    this.app = app;
    this.loggedContainer = document.getElementById('logged-workouts-list');
    this.quickAddContainer = document.getElementById('quick-add-container');
    
    // Sub quick-add elements for displaying selected part exercises
    this.quickAddSubContainer = document.getElementById('quick-add-sub-container');
    this.quickAddSubTitle = document.getElementById('quick-add-sub-title');
    this.quickAddSubList = document.getElementById('quick-add-sub-list');
    
    this.selectedQuickAddPart = null; // Track current selected category
    
    this.initQuickAdd();
  }

  initQuickAdd() {
    this.quickAddContainer.innerHTML = '';
    
    const categories = [
      { id: 'chest', name: '가슴' },
      { id: 'back', name: '등' },
      { id: 'shoulders', name: '어깨' },
      { id: 'legs', name: '하체' },
      { id: 'arms', name: '팔' },
      { id: 'abs', name: '복근' }
    ];

    categories.forEach(item => {
      const btn = document.createElement('div');
      btn.className = 'quick-add-item';
      btn.setAttribute('data-category', item.id);
      btn.innerHTML = `
        <div style="font-weight: 700;">${item.name}</div>
      `;
      btn.addEventListener('click', () => this.selectQuickAddCategory(item.id, btn));
      this.quickAddContainer.appendChild(btn);
    });
  }

  selectQuickAddCategory(categoryId, clickedBtn) {
    // 1. Toggle active classes on category buttons
    const buttons = this.quickAddContainer.querySelectorAll('.quick-add-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    // If clicking the same category, toggle close the sub panel
    if (this.selectedQuickAddPart === categoryId) {
      this.selectedQuickAddPart = null;
      this.quickAddSubContainer.style.display = 'none';
      return;
    }

    this.selectedQuickAddPart = categoryId;
    clickedBtn.classList.add('active');

    // 2. Open sub panel and update title
    this.quickAddSubContainer.style.display = 'block';
    this.quickAddSubTitle.textContent = `${this.getCategoryKorean(categoryId)} 운동 선택`;

    // 3. Populate sub exercise list
    this.quickAddSubList.innerHTML = '';
    const list = exercisesData[categoryId] || [];

    list.forEach(ex => {
      const chip = document.createElement('div');
      chip.className = 'quick-add-item';
      chip.style.padding = '8px 10px';
      chip.style.fontSize = '0.8rem';
      chip.innerHTML = `<div style="font-weight: 600;">${ex.name.split(' (')[0]}</div>`;
      
      chip.addEventListener('click', () => {
        this.addWorkout(ex.id, ex.name, categoryId);
      });
      this.quickAddSubList.appendChild(chip);
    });
  }

  getCategoryKorean(cat) {
    const map = { chest: '가슴', back: '등', shoulders: '어깨', legs: '하체', arms: '팔', abs: '복근' };
    return map[cat] || cat;
  }

  render() {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
    if (workouts.length === 0) {
      this.loggedContainer.innerHTML = `
        <div class="empty-state">
          <i data-lucide="clipboard-list" style="width: 40px; height: 40px;"></i>
          <p>오늘 기록된 운동이 없습니다.<br>아래 목록에서 운동을 선택해 기록을 남겨보세요!</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    this.loggedContainer.innerHTML = '';

    workouts.forEach((workout, workoutIndex) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'logged-workout-item';
      
      const headerEl = document.createElement('div');
      headerEl.className = 'logged-workout-header';
      headerEl.innerHTML = `
        <div class="logged-workout-title">
          ${workout.name}
          <span class="logged-workout-tag">${this.getCategoryKorean(workout.category)}</span>
        </div>
        <button class="remove-workout-btn" data-index="${workoutIndex}">
          <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        </button>
      `;
      
      headerEl.querySelector('.remove-workout-btn').addEventListener('click', () => {
        this.removeWorkout(workoutIndex);
      });

      itemEl.appendChild(headerEl);

      const setsContainer = document.createElement('div');
      
      workout.sets.forEach((set, setIndex) => {
        const setRow = document.createElement('div');
        setRow.className = 'set-row';
        setRow.innerHTML = `
          <div class="set-index">${setIndex + 1}세트</div>
          
          <div class="set-input-group">
            <input type="number" class="set-weight" value="${set.weight}" min="0" step="2.5" data-workout="${workoutIndex}" data-set="${setIndex}">
            <span>kg</span>
          </div>
          
          <div class="set-input-group">
            <input type="number" class="set-reps" value="${set.reps}" min="0" data-workout="${workoutIndex}" data-set="${setIndex}">
            <span>회</span>
          </div>
          
          <button class="delete-set-btn" data-workout="${workoutIndex}" data-set="${setIndex}">
            <i data-lucide="minus-circle" style="width: 16px; height: 16px;"></i>
          </button>
        `;

        const weightInput = setRow.querySelector('.set-weight');
        const repsInput = setRow.querySelector('.set-reps');
        const deleteSetBtn = setRow.querySelector('.delete-set-btn');

        weightInput.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value) || 0;
          this.app.updateWorkoutSet(workoutIndex, setIndex, 'weight', val);
        });

        repsInput.addEventListener('input', (e) => {
          const val = parseInt(e.target.value) || 0;
          this.app.updateWorkoutSet(workoutIndex, setIndex, 'reps', val);
        });

        deleteSetBtn.addEventListener('click', () => {
          this.removeSet(workoutIndex, setIndex);
        });

        setsContainer.appendChild(setRow);
      });

      itemEl.appendChild(setsContainer);

      const addSetRow = document.createElement('div');
      addSetRow.className = 'add-set-row';
      addSetRow.innerHTML = `
        <button class="add-set-btn">
          <i data-lucide="plus" style="width: 12px; height: 12px;"></i> 세트 추가
        </button>
      `;
      addSetRow.querySelector('.add-set-btn').addEventListener('click', () => {
        this.addSet(workoutIndex);
      });

      itemEl.appendChild(addSetRow);
      this.loggedContainer.appendChild(itemEl);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  addWorkout(exerciseId, name, category) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
    const exists = workouts.some(w => w.id === exerciseId);
    if (exists) {
      alert('이미 오늘의 운동 목록에 추가된 운동입니다.');
      return;
    }

    const newWorkout = {
      id: exerciseId,
      name: name,
      category: category,
      sets: [{ weight: 40, reps: 10 }]
    };

    workouts.push(newWorkout);
    this.app.saveWorkoutsForDate(date, workouts);
    this.render();
  }

  removeWorkout(workoutIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    workouts.splice(workoutIndex, 1);
    this.app.saveWorkoutsForDate(date, workouts);
    this.render();
  }

  addSet(workoutIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    const sets = workouts[workoutIndex].sets;
    
    const lastSet = sets[sets.length - 1] || { weight: 40, reps: 10 };
    sets.push({ weight: lastSet.weight, reps: lastSet.reps });
    
    this.app.saveWorkoutsForDate(date, workouts);
    this.render();
  }

  removeSet(workoutIndex, setIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    const sets = workouts[workoutIndex].sets;
    
    if (sets.length <= 1) {
      this.removeWorkout(workoutIndex);
    } else {
      sets.splice(setIndex, 1);
      this.app.saveWorkoutsForDate(date, workouts);
      this.render();
    }
  }
}

// ==========================================
// 3. EXERCISE GUIDE MODULE (BodyMap)
// ==========================================
class BodyGuide {
  constructor(app) {
    this.app = app;
    this.overlay = document.getElementById('guide-detail-overlay');
    this.backBtn = document.getElementById('guide-detail-back');
    this.partNameLabel = document.getElementById('guide-detail-part-name');
    this.contentArea = document.getElementById('guide-detail-content');
    
    this.currentViewMode = 'list'; 
    this.currentCategory = '';
    this.selectedExercise = null;
    
    this.initEvents();
  }

  initEvents() {
    const cards = document.querySelectorAll('.body-part-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const part = card.getAttribute('data-part');
        this.openCategory(part);
      });
    });

    this.backBtn.addEventListener('click', () => {
      this.handleBack();
    });
  }

  openCategory(category) {
    this.currentCategory = category;
    this.currentViewMode = 'list';
    this.overlay.style.display = 'flex';
    this.render();
  }

  handleBack() {
    if (this.currentViewMode === 'detail') {
      this.currentViewMode = 'list';
      this.selectedExercise = null;
      this.render();
    } else {
      this.overlay.style.display = 'none';
      this.currentCategory = '';
    }
  }

  render() {
    if (this.currentViewMode === 'list') {
      this.renderExerciseList();
    } else {
      this.renderExerciseDetail();
    }
    
    if (window.lucide) window.lucide.createIcons();
  }

  getCategoryKorean(cat) {
    const map = { chest: '가슴 운동', back: '등 운동', shoulders: '어깨 운동', legs: '하체 운동', arms: '팔 운동', abs: '복근 운동' };
    return map[cat] || cat;
  }

  renderExerciseList() {
    this.partNameLabel.textContent = this.getCategoryKorean(this.currentCategory);
    
    const exercises = exercisesData[this.currentCategory] || [];
    
    if (exercises.length === 0) {
      this.contentArea.innerHTML = `
        <div class="empty-state">
          <p>등록된 운동 정보가 없습니다.</p>
        </div>
      `;
      return;
    }

    this.contentArea.innerHTML = '';
    const listGroup = document.createElement('div');
    listGroup.className = 'exercise-list-group';

    exercises.forEach(ex => {
      const item = document.createElement('div');
      item.className = 'exercise-list-item';
      item.innerHTML = `
        <h3 class="exercise-item-title">${ex.name}</h3>
        <div class="exercise-item-target">자극: ${ex.target}</div>
        <p class="exercise-item-desc">${ex.description}</p>
      `;
      item.addEventListener('click', () => {
        this.openExerciseDetail(ex);
      });
      listGroup.appendChild(item);
    });

    this.contentArea.appendChild(listGroup);
  }

  openExerciseDetail(exercise) {
    this.selectedExercise = exercise;
    this.currentViewMode = 'detail';
    this.render();
  }

  renderExerciseDetail() {
    const ex = this.selectedExercise;
    if (!ex) return;

    this.partNameLabel.textContent = ex.name;

    this.contentArea.innerHTML = `
      <div class="instruction-container">
        
        <div class="card" style="margin-bottom: 0; background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
          <div class="exercise-item-target" style="font-size: 0.9rem; margin-bottom: 6px;">
            <i data-lucide="crosshair" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 4px;"></i>
            주요 자극 부위: ${ex.target}
          </div>
          <p class="exercise-item-desc" style="font-size: 0.95rem; line-height: 1.5; color: #cbd5e1;">${ex.description}</p>
        </div>

        <div>
          <h4 class="instruction-section-title">운동 순서 및 방법</h4>
          <div class="step-list">
            ${ex.steps.map((step, idx) => `
              <div class="step-item">
                <div class="step-number">${idx + 1}</div>
                <div class="step-text">${step}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 class="instruction-section-title">주의사항 및 꿀팁</h4>
          <div class="tip-box">
            <p style="font-weight: 700; color: #fbbf24; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
              <i data-lucide="alert-triangle" style="width: 14px; height: 14px;"></i>
              부상 방지 & 자극 극대화 팁
            </p>
            ${ex.tips.map(tip => `<p>• ${tip}</p>`).join('')}
          </div>
        </div>

        <button class="btn" id="guide-log-assist-btn" style="margin-top: 10px;">
          <i data-lucide="check"></i> 오늘 일지에 이 운동 추가
        </button>

      </div>
    `;

    const logBtn = this.contentArea.querySelector('#guide-log-assist-btn');
    logBtn.addEventListener('click', () => {
      this.app.tracker.addWorkout(ex.id, ex.name, this.currentCategory);
      this.overlay.style.display = 'none';
      this.app.switchTab('tracker');
    });
  }
}

// ==========================================
// 4. DIET ANALYZER & FEEDBACK MODULE
// ==========================================
class DietAnalyzer {
  constructor(app) {
    this.app = app;
    
    // Inputs & Forms
    this.foodNameInput = document.getElementById('food-name-input');
    this.foodCalInput = document.getElementById('food-cal-input');
    this.foodProteinInput = document.getElementById('food-protein-input');
    this.addFoodBtn = document.getElementById('add-food-btn');
    this.recordsContainer = document.getElementById('diet-records-container');
    
    // Photo Upload Elements
    this.cameraTriggerBtn = document.getElementById('camera-trigger-btn');
    this.foodImageInput = document.getElementById('food-image-input');
    this.imagePreviewBox = document.getElementById('image-preview-box');
    this.imagePreviewImg = document.getElementById('image-preview-img');
    this.imagePreviewRemove = document.getElementById('image-preview-remove');
    this.aiAnalyzingOverlay = document.getElementById('ai-analyzing-overlay');
    this.uploadedImageBase64 = null; // Store base64 data temporarily
    
    // BMR Profile Elements
    this.profileGender = document.getElementById('profile-gender');
    this.profileAge = document.getElementById('profile-age');
    this.profileHeight = document.getElementById('profile-height');
    this.profileWeight = document.getElementById('profile-weight');
    this.calculateBmrBtn = document.getElementById('calculate-bmr-btn');
    this.bmrResultBox = document.getElementById('bmr-result-box');
    
    // Chart / Summary Elements
    this.gaugeCircle = document.getElementById('diet-gauge-circle');
    this.currentCalVal = document.getElementById('current-cal-val');
    this.proteinProgressText = document.getElementById('protein-progress-text');
    this.proteinBarFill = document.getElementById('protein-bar-fill');
    this.calPercentText = document.getElementById('cal-percent-text');
    this.calBarFill = document.getElementById('cal-bar-fill');
    
    // Feedback Card Elements
    this.feedbackCard = document.getElementById('diet-feedback-card');
    this.feedbackStatusBadge = document.getElementById('feedback-status-badge');
    this.feedbackExplanation = document.getElementById('feedback-explanation');
    this.metricCalDiff = document.getElementById('metric-cal-diff');
    this.metricProteinDiff = document.getElementById('metric-protein-diff');
    this.metricAdviceType = document.getElementById('metric-advice-type');
    
    // Goals config (Defaults)
    this.targetCal = 1800; 
    this.targetProtein = 100; 
    
    this.initEvents();
    this.loadUserProfile();
  }

  initEvents() {
    // BMR calculation trigger
    this.calculateBmrBtn.addEventListener('click', () => {
      this.calculateBmrAndSetTarget();
    });

    // Camera/Upload triggers
    this.cameraTriggerBtn.addEventListener('click', () => {
      this.foodImageInput.click();
    });

    // File input changes (handles FileReader base64 processing & AI simulation)
    this.foodImageInput.addEventListener('change', (e) => {
      this.handleImageFile(e);
    });

    // Remove photo preview
    this.imagePreviewRemove.addEventListener('click', () => {
      this.clearPhotoPreview();
    });

    // Add food button event
    this.addFoodBtn.addEventListener('click', () => {
      this.addFoodFromForm();
    });

    const inputs = [this.foodNameInput, this.foodCalInput, this.foodProteinInput];
    inputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.addFoodFromForm();
        }
      });
    });

    // Preset clicks
    const presets = document.querySelectorAll('.preset-item');
    presets.forEach(preset => {
      preset.addEventListener('click', () => {
        const name = preset.getAttribute('data-name');
        const cal = parseFloat(preset.getAttribute('data-cal')) || 0;
        const protein = parseFloat(preset.getAttribute('data-protein')) || 0;
        
        this.addFoodDirect(name, cal, protein);
      });
    });
  }

  // Load user profile & saved targetCal from localStorage
  loadUserProfile() {
    const savedProfile = JSON.parse(localStorage.getItem('vitalfit_user_profile'));
    const savedTargetCal = localStorage.getItem('vitalfit_target_cal');
    
    if (savedProfile) {
      this.profileGender.value = savedProfile.gender || 'male';
      this.profileAge.value = savedProfile.age || 28;
      this.profileHeight.value = savedProfile.height || 175;
      this.profileWeight.value = savedProfile.weight || 70;
      
      // Calculate BMR on load silently
      this.calculateBmrAndSetTarget(true);
    } else if (savedTargetCal) {
      this.targetCal = parseInt(savedTargetCal) || 1800;
    }
  }

  // Calculate BMR (Mifflin-St Jeor formula) and update targets
  calculateBmrAndSetTarget(silent = false) {
    const gender = this.profileGender.value;
    const age = parseInt(this.profileAge.value) || 0;
    const height = parseFloat(this.profileHeight.value) || 0;
    const weight = parseFloat(this.profileWeight.value) || 0;

    if (age <= 0 || height <= 0 || weight <= 0) {
      if (!silent) alert('올바른 신체 정보(나이, 키, 몸무게)를 입력해 주세요.');
      return;
    }

    // Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    bmr = Math.round(bmr);
    
    // Recommend daily calories for weight loss (BMR * Activity_Multiplier[1.2 for sedentary] - Deficit[300kcal])
    // Ensure we do not suggest calories below basic BMR to prevent malnutrition
    let recommendedCal = Math.round(bmr * 1.2 - 300);
    recommendedCal = Math.max(bmr, recommendedCal);

    this.targetCal = recommendedCal;
    this.targetProtein = Math.round(weight * 1.5); // 1.5g per kg weight for fitness target

    // Save profile to localStorage
    const userProfile = { gender, age, height, weight };
    localStorage.setItem('vitalfit_user_profile', JSON.stringify(userProfile));
    localStorage.setItem('vitalfit_target_cal', this.targetCal.toString());

    // Update Result Box UI
    this.bmrResultBox.style.display = 'block';
    this.bmrResultBox.innerHTML = `
      <div style="font-weight: 700; color: var(--color-secondary); margin-bottom: 4px;">🎯 BMR 계산 결과</div>
      • 계산된 기초대사량: <strong style="color:var(--text-main);">${bmr} kcal</strong><br>
      • 단백질 추천 목표: <strong style="color:var(--color-primary);">${this.targetProtein}g</strong> (체중의 1.5배)<br>
      • 다이어트 권장 하루 칼로리: <strong style="color:var(--color-accent);">${recommendedCal} kcal</strong>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">* 기초대사량에 활동 대사량을 반영하여 산출한 권장 섭취량입니다.</div>
    `;

    if (!silent) {
      alert(`신체 프로필 연동이 완료되었습니다!\n오늘의 목표 칼로리가 ${recommendedCal} kcal로 업데이트되었습니다.`);
      this.render();
    }
  }

  // Handle Photo input conversion and trigger AI Simulation
  handleImageFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    // 1. Read image as base64 string
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      this.uploadedImageBase64 = base64Data;
      
      // Update preview UI
      this.imagePreviewBox.style.display = 'block';
      this.imagePreviewImg.src = base64Data;
      
      // 2. Trigger AI Simulation
      this.simulateAIScan(file.name);
    };
    reader.readAsDataURL(file);
  }

  // Simulated AI vision scanning scanner
  simulateAIScan(fileName) {
    this.aiAnalyzingOverlay.style.display = 'block';
    
    // Disable inputs during scan
    this.foodNameInput.disabled = true;
    this.foodCalInput.disabled = true;
    this.foodProteinInput.disabled = true;
    this.addFoodBtn.disabled = true;

    // 1.5 seconds timer simulation
    setTimeout(() => {
      this.aiAnalyzingOverlay.style.display = 'none';
      
      // Re-enable inputs
      this.foodNameInput.disabled = false;
      this.foodCalInput.disabled = false;
      this.foodProteinInput.disabled = false;
      this.addFoodBtn.disabled = false;

      // Simulated diet detection datasets
      const mockDiets = [
        { name: '닭가슴살 샐러드 & 단호박', cal: 260, protein: 25 },
        { name: '삶은 달걀 2개와 사과', cal: 220, protein: 13 },
        { name: '소고기 우둔살 볶음밥', cal: 420, protein: 28 },
        { name: '연어 야채 오븐 구이', cal: 340, protein: 24 },
        { name: '두부 버섯 샐러드 식단', cal: 180, protein: 12 },
        { name: '그릭 요거트와 블루베리', cal: 150, protein: 9 }
      ];

      // Select random item
      const detected = mockDiets[Math.floor(Math.random() * mockDiets.length)];
      
      // Auto-fill values
      this.foodNameInput.value = detected.name;
      this.foodCalInput.value = detected.cal;
      this.foodProteinInput.value = detected.protein;

      alert(`🤖 [AI 식단 사진 분석 완료!]\n이미지에서 "${detected.name}"을(를) 감지했습니다.\n(칼로리: ${detected.cal}kcal, 단백질: ${detected.protein}g)\n정보가 일치하면 '추가' 버튼을 눌러주세요.`);
    }, 1500);
  }

  clearPhotoPreview() {
    this.foodImageInput.value = '';
    this.uploadedImageBase64 = null;
    this.imagePreviewBox.style.display = 'none';
    this.imagePreviewImg.src = '';
  }

  addFoodFromForm() {
    const name = this.foodNameInput.value.trim();
    const cal = parseFloat(this.foodCalInput.value) || 0;
    const protein = parseFloat(this.foodProteinInput.value) || 0;

    if (!name) {
      alert('음식 이름을 입력해 주세요.');
      this.foodNameInput.focus();
      return;
    }

    if (cal <= 0) {
      alert('올바른 칼로리 값을 입력해 주세요.');
      this.foodCalInput.focus();
      return;
    }

    // Pass image info together
    this.addFoodDirect(name, cal, protein, this.uploadedImageBase64);
    
    this.foodNameInput.value = '';
    this.foodCalInput.value = '';
    this.foodProteinInput.value = '';
    
    // Clear photo state
    this.clearPhotoPreview();
  }

  addFoodDirect(name, cal, protein, imageBase64 = null) {
    const date = this.app.selectedDate;
    const dietLog = this.app.getDietForDate(date);
    
    const newLogItem = {
      id: Date.now().toString() + '_' + Math.random().toString(36).substr(2, 5),
      name: name,
      cal: cal,
      protein: protein,
      image: imageBase64 // Base64 encoded image or null
    };

    dietLog.push(newLogItem);
    this.app.saveDietForDate(date, dietLog);
    this.render();
  }

  deleteFood(foodId) {
    const date = this.app.selectedDate;
    const dietLog = this.app.getDietForDate(date);
    const updated = dietLog.filter(item => item.id !== foodId);
    
    this.app.saveDietForDate(date, updated);
    this.render();
  }

  render() {
    const date = this.app.selectedDate;
    const dietLog = this.app.getDietForDate(date);
    
    if (dietLog.length === 0) {
      this.recordsContainer.innerHTML = `
        <div class="empty-state" style="padding: 20px 0;">
          <p style="font-size: 0.85rem;">기록된 식단이 없습니다. 다이어트를 위해 아침, 점심, 저녁 식사를 기록해 보세요!</p>
        </div>
      `;
    } else {
      this.recordsContainer.innerHTML = '';
      dietLog.forEach(item => {
        const row = document.createElement('div');
        row.className = 'diet-record-item';
        
        // Render with thumbnail if picture exists
        const imgHTML = item.image 
          ? `<img src="${item.image}" class="diet-record-thumb" id="thumb-${item.id}">` 
          : `<div style="width: 40px; height: 40px; border-radius: var(--radius-sm); background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); display:flex; align-items:center; justify-content:center; color:var(--text-muted);"><i data-lucide="utensils-crossfiles" style="width:16px; height:16px;"></i></div>`;

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 12px;">
            ${imgHTML}
            <div class="diet-record-info">
              <span class="diet-record-name">${item.name}</span>
              <span class="diet-record-macros">단백질: ${item.protein}g</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="diet-record-cal">${item.cal} kcal</span>
            <button class="remove-workout-btn delete-food-btn" data-id="${item.id}">
              <i data-lucide="x" style="width: 16px; height: 16px;"></i>
            </button>
          </div>
        `;

        // Click delete
        row.querySelector('.delete-food-btn').addEventListener('click', () => {
          this.deleteFood(item.id);
        });

        // Click thumbnail to expand view
        if (item.image) {
          row.querySelector(`#thumb-${item.id}`).addEventListener('click', () => {
            this.showImageModal(item.name, item.image);
          });
        }

        this.recordsContainer.appendChild(row);
      });
    }

    let totalCal = 0;
    let totalProtein = 0;
    dietLog.forEach(item => {
      totalCal += item.cal;
      totalProtein += item.protein;
    });

    this.currentCalVal.textContent = Math.round(totalCal);
    document.querySelector('.chart-label').textContent = `/ ${this.targetCal} kcal`;
    
    const calPercent = Math.min(100, (totalCal / this.targetCal) * 100);
    const strokeDashoffset = 364.4 - (calPercent / 100) * 364.4;
    this.gaugeCircle.style.strokeDashoffset = strokeDashoffset;
    
    if (totalCal > this.targetCal) {
      this.gaugeCircle.style.stroke = '#ef4444'; 
    } else {
      this.gaugeCircle.style.stroke = '#10b981'; 
    }

    this.proteinProgressText.textContent = `${Math.round(totalProtein)}g / ${this.targetProtein}g`;
    const proteinPercent = Math.min(100, (totalProtein / this.targetProtein) * 100);
    this.proteinBarFill.style.width = `${proteinPercent}%`;
    
    this.calPercentText.textContent = `${Math.round(calPercent)}%`;
    this.calBarFill.style.width = `${calPercent}%`;

    this.generateFeedback(dietLog, totalCal, totalProtein);

    if (window.lucide) window.lucide.createIcons();
  }

  // Pop up modal to show food photo in full size
  showImageModal(title, base64Src) {
    const modal = document.createElement('div');
    modal.style.position = 'absolute';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.right = '0';
    modal.style.bottom = '0';
    modal.style.background = 'rgba(15, 23, 42, 0.95)';
    modal.style.zIndex = '30';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.padding = '24px';
    modal.style.animation = 'fadeIn 0.2s ease-out';
    
    modal.innerHTML = `
      <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="font-weight: 700; font-size: 1.1rem; color: var(--text-main);">${title}</span>
        <button id="close-img-modal" style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: white; width: 36px; height: 36px; border-radius: 50%; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center;">×</button>
      </div>
      <div style="flex: 1; width: 100%; max-height: 70%; border-radius: var(--radius-md); overflow: hidden; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color);">
        <img src="${base64Src}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 16px;">탭해서 나가기</p>
    `;

    const closeFn = () => modal.remove();
    modal.querySelector('#close-img-modal').addEventListener('click', closeFn);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.tagName === 'P') closeFn();
    });
    
    document.getElementById('app-container').appendChild(modal);
  }

  generateFeedback(dietLog, totalCal, totalProtein) {
    if (dietLog.length === 0) {
      this.feedbackCard.style.display = 'none';
      return;
    }

    this.feedbackCard.style.display = 'block';

    const calDiff = totalCal - this.targetCal;
    const proteinDiff = Math.max(0, this.targetProtein - totalProtein);
    
    let statusHTML = '';
    let feedbackText = '';
    let adviceType = '';

    if (totalCal < 900) {
      statusHTML = `<i data-lucide="alert-triangle" style="width: 14px; height: 14px;"></i><span>초절식 상태 (위험)</span>`;
      feedbackText = `오늘 섭취한 칼로리가 너무 부족합니다(${totalCal} kcal). 다이어트를 위해 덜 먹는 것도 중요하지만, 기초대사량보다 훨씬 적게 먹는 극단적 절식은 오히려 근육 손실과 신진대사 감소를 유발합니다. 건강한 탄수화물(현미밥, 고구마)과 단백질을 좀 더 보충해 주셔야 합니다.`;
      adviceType = '영양 보충';
    } 
    else if (totalCal >= 900 && totalCal < (this.targetCal - 300)) {
      statusHTML = `<i data-lucide="trending-down" style="width: 14px; height: 14px;"></i><span>이상적 지방연소 페이스</span>`;
      feedbackText = `완벽한 다이어트 페이스를 유지하고 계십니다! 현재 칼로리 결손량이 매우 건강한 수준이어서 체지방 연소가 가장 활발히 일어나는 최상의 지점입니다. 근육 유지를 위해 단백질 섭취만 잘 챙겨 주시면서 이 상태를 지속하세요.`;
      adviceType = '페이스 유지';
    } 
    else if (totalCal >= (this.targetCal - 300) && totalCal <= (this.targetCal + 50)) {
      statusHTML = `<i data-lucide="smile" style="width: 14px; height: 14px;"></i><span>안정적 다이어트 유지</span>`;
      feedbackText = `목표치인 ${this.targetCal} kcal 근방에서 안정적으로 조절 중입니다. 다이어트 속도는 약간 완만할 수 있으나, 운동 강도를 높게 뽑아내며 근손실 없이 건강하고 탄탄하게 체지방을 줄이기에 이상적인 식사 밸런스입니다.`;
      adviceType = '양호';
    } 
    else {
      statusHTML = `<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>칼로리 오버 (과잉)</span>`;
      feedbackText = `오늘 다이어트 목표 칼로리를 초과했습니다! 초과된 에너지(${Math.round(calDiff)} kcal)는 지방으로 축적되기 쉽습니다. 오늘 운동 강도를 강하게 올리거나, 가벼운 야외 유산소 러닝을 20분 이상 추가하여 남는 열량을 강제로 태우시는 것을 권장합니다. 내일 식단에서는 탄수화물 양을 조금 덜어내 보세요.`;
      adviceType = '유산소 추가';
    }

    if (totalProtein < (this.targetProtein * 0.6)) {
      feedbackText += ` <br><br>⚠️ <strong>단백질 경고:</strong> 단백질 섭취량(${Math.round(totalProtein)}g)이 권장량에 비해 너무 적습니다. 다이어트 중에 단백질이 모자라면 체지방이 아닌 소중한 근육이 분해되어 빠져나가게 됩니다. 닭가슴살 1팩이나 달걀 2개, 혹은 프로틴 파우더 등을 드셔서 단백질을 최소 30g 이상 긴급 수급하세요!`;
    }

    this.feedbackStatusBadge.innerHTML = statusHTML;
    
    this.feedbackStatusBadge.className = 'feedback-status';
    if (totalCal < 900) {
      this.feedbackStatusBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      this.feedbackStatusBadge.style.color = 'var(--color-accent)';
    } else if (totalCal > this.targetCal) {
      this.feedbackStatusBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      this.feedbackStatusBadge.style.color = '#ef4444';
    } else {
      this.feedbackStatusBadge.style.background = 'rgba(16, 185, 129, 0.15)';
      this.feedbackStatusBadge.style.color = 'var(--color-primary)';
    }

    this.feedbackExplanation.innerHTML = feedbackText;
    
    const calDiffText = calDiff > 0 ? `+${Math.round(calDiff)} kcal` : `${Math.round(calDiff)} kcal`;
    this.metricCalDiff.textContent = calDiffText;
    this.metricCalDiff.className = `metric-val ${calDiff > 0 ? 'amber' : 'green'}`;
    
    this.metricProteinDiff.textContent = proteinDiff > 0 ? `${Math.round(proteinDiff)}g` : '충족 완료!';
    this.metricProteinDiff.className = `metric-val ${proteinDiff > 0 ? 'blue' : 'green'}`;
    
    this.metricAdviceType.textContent = adviceType;
    this.metricAdviceType.className = `metric-val ${adviceType === '유산소 추가' ? 'amber' : adviceType === '영양 보충' ? 'blue' : 'green'}`;
  }
}

// ==========================================
// 5. MAIN VITALFIT APPLICATION ROOT
// ==========================================
class VitalFitApp {
  constructor() {
    this.selectedDate = this.getTodayString();
    
    this.state = {
      workouts: JSON.parse(localStorage.getItem('vitalfit_workouts')) || {},
      diet: JSON.parse(localStorage.getItem('vitalfit_diet')) || {}
    };

    // DOM Elements
    this.dateDisplayLabel = document.getElementById('date-display-label');
    this.currentDateText = document.getElementById('current-date-text');
    this.dateSelectorTrigger = document.getElementById('date-selector-trigger');
    this.datePickerRow = document.getElementById('date-picker-row');
    this.prevDateBtn = document.getElementById('prev-date-btn');
    this.nextDateBtn = document.getElementById('next-date-btn');
    
    // Initialize child modules
    this.tracker = new WorkoutTracker(this);
    this.guide = new BodyGuide(this);
    this.diet = new DietAnalyzer(this);

    this.initGlobalEvents();
    this.updateDateUI();
    
    // Switch to tracker tab as default
    this.switchTab('tracker');
  }

  getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  initGlobalEvents() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    this.dateSelectorTrigger.addEventListener('click', () => {
      const isVisible = this.datePickerRow.style.display === 'flex';
      this.datePickerRow.style.display = isVisible ? 'none' : 'flex';
    });

    this.prevDateBtn.addEventListener('click', () => this.adjustDate(-1));
    this.nextDateBtn.addEventListener('click', () => this.adjustDate(1));
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const activeSection = document.getElementById(`tab-${tabId}`);
    if (activeSection) activeSection.classList.add('active');

    const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (activeNav) activeNav.classList.add('active');

    if (tabId === 'tracker') {
      this.tracker.render();
    } else if (tabId === 'diet') {
      this.diet.render();
    }
  }

  adjustDate(delta) {
    const current = new Date(this.selectedDate);
    current.setDate(current.getDate() + delta);
    
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const day = String(current.getDate()).padStart(2, '0');
    
    this.selectedDate = `${year}-${month}-${day}`;
    
    this.updateDateUI();
    
    this.tracker.render();
    this.diet.render();
  }

  updateDateUI() {
    this.currentDateText.textContent = this.selectedDate;
    
    const [year, month, day] = this.selectedDate.split('-');
    this.dateDisplayLabel.textContent = `${year}년 ${month}월 ${day}일`;
  }

  /* Data management helpers */
  getWorkoutsForDate(date) {
    if (!this.state.workouts[date]) {
      this.state.workouts[date] = [];
    }
    return this.state.workouts[date];
  }

  saveWorkoutsForDate(date, workouts) {
    this.state.workouts[date] = workouts;
    localStorage.setItem('vitalfit_workouts', JSON.stringify(this.state.workouts));
  }

  updateWorkoutSet(workoutIndex, setIndex, field, value) {
    const date = this.selectedDate;
    const workouts = this.getWorkoutsForDate(date);
    if (workouts[workoutIndex] && workouts[workoutIndex].sets[setIndex]) {
      workouts[workoutIndex].sets[setIndex][field] = value;
      this.saveWorkoutsForDate(date, workouts);
    }
  }

  getDietForDate(date) {
    if (!this.state.diet[date]) {
      this.state.diet[date] = [];
    }
    return this.state.diet[date];
  }

  saveDietForDate(date, dietLog) {
    this.state.diet[date] = dietLog;
    localStorage.setItem('vitalfit_diet', JSON.stringify(this.state.diet));
  }
}

// Instantiate the app
window.addEventListener('DOMContentLoaded', () => {
  window.app = new VitalFitApp();
});
