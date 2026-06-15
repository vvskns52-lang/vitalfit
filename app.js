// ==========================================
// 1. EXERCISE DATABASE (exercisesData)
// ==========================================
const exercisesData = {
  chest: [
    {
      id: "bench_press",
      name: "벤치 프레스 (Bench Press)",
      image: "images/bench_press.png",
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
      image: "images/incline_db_press.png",
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
      image: "images/chest_fly.png",
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
      image: "images/dips.png",
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
      image: "images/pec_deck_fly.png",
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
      image: "images/push_up.png",
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
      image: "images/cable_crossover.png",
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
      image: "images/deadlift.png",
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
      image: "images/lat_pulldown.png",
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
      image: "images/bent_over_row.png",
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
      image: "images/pull_up.png",
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
      image: "images/seated_cable_row.png",
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
      image: "images/one_arm_db_row.png",
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
      image: "images/tbar_row.png",
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
      image: "images/overhead_press.png",
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
      image: "images/side_lateral_raise.png",
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
      image: "images/db_shoulder_press.png",
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
      image: "images/bent_over_lateral_raise.png",
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
      image: "images/face_pull.png",
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
      image: "images/arnold_press.png",
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
      image: "images/front_raise.png",
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
      image: "images/squat.png",
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
      image: "images/romanian_deadlift.png",
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
      image: "images/leg_press.png",
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
      image: "images/leg_curl.png",
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
      image: "images/leg_extension.png",
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
      image: "images/lunge.png",
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
      image: "images/calf_raise.png",
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
      image: "images/db_biceps_curl.png",
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
      image: "images/triceps_pushdown.png",
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
      image: "images/hammer_curl.png",
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
      image: "images/barbell_curl.png",
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
      image: "images/lying_triceps_extension.png",
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
      image: "images/db_kickback.png",
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
      image: "images/preacher_curl.png",
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
      image: "images/crunch.png",
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
      image: "images/leg_raise.png",
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
      image: "images/plank.png",
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
      image: "images/russian_twist.png",
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
      image: "images/hanging_leg_raise.png",
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
      image: "images/ab_rollout.png",
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
// 1-1. DYNAMIC EXERCISE DATA INJECTION & MET DEFINITION
// ==========================================
exercisesData.cardio = [
  {
    id: "treadmill",
    name: "러닝머신 (Treadmill)",
    image: "images/treadmill.png",
    target: "심폐 지구력, 전신 체지방 연소",
    description: "실내에서 걷거나 달릴 수 있는 유산소 운동의 대표 주자로, 속도와 경사도를 조절하여 강도를 통제할 수 있습니다.",
    steps: [
      "벨트 위에 바로 선 후 안전핀을 옷에 고정합니다.",
      "시작 버튼을 누르고 가벼운 걷기 속도(3~4km/h)로 몸을 예열합니다.",
      "목표 강도에 따라 속도를 올려 가볍게 달리거나(6~8km/h) 고강도 인터벌을 수행합니다.",
      "운동 완료 후에는 속도를 서서히 줄여 쿨다운을 진행합니다."
    ],
    tips: [
      "달릴 때는 뒤꿈치부터 발바닥 전체가 땅에 닿도록 사뿐히 딛습니다.",
      "손잡이를 꽉 잡고 몸을 뒤로 기대어 달리면 허리와 손목에 무리가 갈 수 있습니다."
    ]
  },
  {
    id: "stationary_bike",
    name: "실내 자전거 (Stationary Bike)",
    image: "images/stationary_bike.png",
    target: "하체 근지구력, 심폐 지구력",
    description: "무릎 관절에 가해지는 체중 부하를 최소화하면서 안전하게 하체 근력과 유산소 대사를 활성화할 수 있는 운동입니다.",
    steps: [
      "안장에 앉았을 때 아래쪽 페달이 위치한 다리가 약 10~15도 굽혀지는 높이로 안장을 조절합니다.",
      "페달 스트랩을 발에 맞게 조절하여 고정합니다.",
      "가벼운 저항으로 시작해 페달 속도(RPM)를 60~80으로 유지하며 회전시킵니다.",
      "목표 시간에 도달할 때까지 저항을 조절하며 일정한 속도로 수행합니다."
    ],
    tips: [
      "페달을 밟을 때 무릎이 안쪽이나 바깥쪽으로 벌어지지 않도록 일직선을 유지합니다.",
      "허리를 너무 구부정하게 숙이지 않도록 복부에 힘을 줍니다."
    ]
  },
  {
    id: "stair_climber",
    name: "천국의 계단 (Stair Climber)",
    image: "images/stair_climber.png",
    target: "대둔근, 햄스트링, 심폐 체력 극대화",
    description: "일반 걷기에 비해 압도적인 칼로리 소모를 자랑하며, 엉덩이와 허벅지 뒤쪽 근육을 동시에 강화하는 고강도 유산소 운동입니다.",
    steps: [
      "계단 머신 위에 올라서서 시작 버튼을 누릅니다.",
      "일정한 속도로 회전하는 계단을 한 칸씩 번갈아가며 밟아 올라갑니다.",
      "발바닥 전체로 계단을 밀어내듯 딛고 상체를 아주 살짝 앞으로 숙여 엉덩이 자극을 극대화합니다.",
      "목표 강도와 시간에 맞춰 속도를 유기적으로 조절합니다."
    ],
    tips: [
      "뒤꿈치가 허공에 뜨지 않도록 발판 전체를 밟아야 무릎 부상을 막을 수 있습니다.",
      "손잡이에 체중을 과도하게 실어 상체를 기대면 운동 효과가 절반으로 줄어듭니다."
    ]
  },
  {
    id: "elliptical",
    name: "일립티컬 (Elliptical)",
    image: "images/elliptical.png",
    target: "전신 유산소, 코디네이션",
    description: "디딤판이 타원형 궤적으로 움직여 무릎과 발목 관절의 충격을 흡수하면서 팔과 다리를 동시에 사용하는 전신 운동입니다.",
    steps: [
      "양발을 발판에 올리고 손잡이를 가볍게 잡습니다.",
      "다리를 굴리며 자연스럽게 타원형 궤적을 그리며 걷기 시작합니다.",
      "손잡이를 앞뒤로 밀고 당기며 등과 어깨, 팔 근육도 함께 작동시킵니다.",
      "앞방향 뿐만 아니라 뒷방향으로도 굴려 다양한 하체 자극을 확보할 수 있습니다."
    ],
    tips: [
      "상체가 좌우로 흔들리지 않게 중심 코어를 견고하게 잡아줍니다.",
      "발뒤꿈치가 발판에서 완전히 떨어지지 않도록 유의합니다."
    ]
  },
  {
    id: "outdoor_running",
    name: "야외 달리기 (Outdoor Running)",
    image: "images/outdoor_running.png",
    target: "심폐 건강, 전신 근지구력, 스트레스 해소",
    description: "기구 없이 자연에서 바람을 맞으며 달리는 운동으로, 바닥면의 불규칙한 저항을 이겨내며 발목 및 코어 밸런스를 발달시킵니다.",
    steps: [
      "달리기 전 발목과 가볍게 제자리 뛰기로 관절을 풉니다.",
      "가벼운 조깅 속도로 출발하여 점진적으로 호흡이 차는 속도로 올립니다.",
      "코로 깊게 들이쉬고 입으로 짧게 뱉는 일정한 호흡 템포를 유지합니다.",
      "목표 거리나 시간을 달성한 뒤에는 서서히 걷는 속도로 줄여 정리 운동을 합니다."
    ],
    tips: [
      "착지 시 무릎에 가해지는 충격을 분산하기 위해 상체를 꼿꼿이 펴고 가볍게 앞으로 숙여 달립니다.",
      "아스팔트보다는 우레탄 트랙이나 흙길을 달리는 것이 관절 건강에 이롭습니다."
    ]
  }
];

// 기본 종목 수 추가하기 (어깨: 업라이트 로우, 하체: 바벨 런지)
exercisesData.shoulders.push({
  id: "upright_row",
  name: "바벨 업라이트 로우 (Barbell Upright Row)",
  image: "images/upright_row.png",
  target: "측면 삼각근, 상부 승모근",
  description: "바벨을 몸에 밀착하여 턱 방향으로 끌어올리는 운동으로, 어깨 넓이 확보와 상체 프레임 확장에 좋습니다.",
  steps: [
    "바벨을 어깨너비보다 좁게 잡고 똑바로 섭니다.",
    "바벨을 몸 앞선을 따라 명치 또는 턱 높이까지 수직으로 끌어올립니다. 이때 팔꿈치가 손목보다 항상 위에 있어야 합니다.",
    "어깨 자극을 느끼며 바벨을 통제하면서 천천히 내립니다."
  ],
  tips: [
    "손목이 너무 꺾이지 않도록 가동범위를 무리하게 높이지 마세요.",
    "승모근이 지나치게 수축되지 않도록 어깨를 아래로 누른 채 팔꿈치를 밖으로 벌리며 올려줍니다."
  ]
});

exercisesData.legs.push({
  id: "barbell_lunge",
  name: "바벨 런지 (Barbell Lunge)",
  image: "images/barbell_lunge.png",
  target: "대퇴사두근, 대둔근, 햄스트링, 밸런스",
  description: "바벨을 어깨에 짊어지고 수행하는 런지 운동으로, 덤벨보다 높은 중량 과부하를 가하여 하체 근력과 힙업 자극을 강화합니다.",
  steps: [
    "렉에서 바벨을 승모근 위에 짊어지고 한 걸음 뒤로 물러납니다.",
    "한 발을 크게 앞으로 딛고, 몸을 곧게 세운 상태에서 아래로 주저앉아 앞다리가 90도가 되도록 만듭니다.",
    "앞발바닥으로 바닥을 밀어내며 제자리로 원위치합니다. 양발을 교대로 수행합니다."
  ],
  tips: [
    "바벨의 좌우 균형이 무너지지 않도록 중심 코어를 강하게 조이고 전신 밸런스를 유지해야 합니다.",
    "무릎에 무리가 갈 수 있으니 너무 과도하게 무릎이 앞으로 나가지 않게 통제하세요."
  ]
});

// ==========================================
// 1-2. 기본 운동 종목 대량 추가
// ==========================================
exercisesData.chest.push(
  {
    id: "db_press",
    name: "덤벨 프레스 (Dumbbell Press)",
    image: "images/db_press.png",
    target: "가슴 전체, 삼두근, 전면 삼각근",
    description: "덤벨을 사용하여 가슴의 가동 범위를 최대화하고 좌우 대칭 발달을 돕는 메인 가슴 프레스 운동입니다.",
    steps: [
      "벤치에 등을 대고 누워 덤벨을 가슴 옆에 둡니다.",
      "발을 바닥에 단단히 고정한 채 덤벨을 수직 위로 곧게 밀어 올립니다.",
      "덤벨을 내릴 때 가슴 근육이 완전히 스트레칭되는 느낌을 받으며 천천히 복귀합니다."
    ],
    tips: [
      "손목이 꺾이지 않도록 전완을 수직으로 견고히 세워 덤벨을 제어합니다.",
      "덤벨끼리 위에서 세게 쿵 부딪히면 텐션이 도망갑니다."
    ]
  },
  {
    id: "decline_bench_press",
    name: "디클라인 벤치 프레스 (Decline Bench Press)",
    image: "images/decline_press.png",
    target: "가슴 하부, 삼두근, 전면 삼각근",
    description: "아래로 경사진 벤치에서 바벨을 밀어내어 대흉근의 하부(밑가슴) 라인을 선명하게 다듬는 프레스입니다.",
    steps: [
      "디클라인 벤치에 누워 발을 고정대에 단단히 끼웁니다.",
      "바를 어깨너비보다 약간 넓게 잡고 가슴 하부 쪽으로 천천히 내립니다.",
      "밀어 올리며 가슴 밑부분 수축 자극을 강하게 쥐어짜 줍니다."
    ],
    tips: [
      "머리가 아래로 향하므로 혈압이 높은 분은 주의하고 운동 후 천천히 일어납니다.",
      "바벨이 가슴 위로 구르지 않도록 궤적을 엄격하게 수직으로 통제합니다."
    ]
  },
  {
    id: "landmine_press",
    name: "랜드마인 체스트 프레스 (Landmine Press)",
    image: "images/landmine_press.png",
    target: "가슴 상부, 가슴 내측, 삼두근",
    description: "바벨의 한쪽 끝을 땅에 고정하고 대각선 위로 밀어 올리며 윗가슴 안쪽 라인과 어깨 관절의 안정성을 높입니다.",
    steps: [
      "바벨 한쪽에만 원판을 끼우고 그 끝을 두 손으로 감싸 쥡니다.",
      "가슴 중앙 높이에서 시작하여 대각선 앞으로 바벨을 강력하게 밀어 올립니다.",
      "가슴 안쪽을 쥐어짜면서 원위치로 천천히 버티며 복귀합니다."
    ],
    tips: [
      "허리가 과도하게 꺾이지 않게 복부 코어를 꽉 조여 몸통을 바로 세웁니다.",
      "밀어 올리는 끝 지점에서 날개뼈를 자연스럽게 앞으로 내밀어 줍니다."
    ]
  }
);

exercisesData.back.push(
  {
    id: "db_pullover",
    name: "덤벨 풀오버 (Dumbbell Pullover)",
    image: "images/db_pullover.png",
    target: "광배근, 대원근, 가슴 하부, 전거근",
    description: "벤치에 누워 덤벨을 머리 뒤로 길게 떨어뜨리며 광배근을 강하게 신장하고 흉곽을 확장시키는 하이브리드 상체 운동입니다.",
    steps: [
      "벤치에 가로로 누워 등 상부만 벤치에 대거나 플랫 벤치에 바르게 눕습니다.",
      "덤벨 한쪽을 두 손으로 감싸 쥐고 가슴 위로 뻗습니다.",
      "팔꿈치 각도를 약 10도 굽힌 채 머리 뒤로 호를 그리며 덤벨을 멀리 내립니다.",
      "광배근의 힘으로 다시 가슴 위 시작 위치로 당겨옵니다."
    ],
    tips: [
      "어깨 관절에 충돌이 생기지 않도록 가동범위를 지나치게 늘리지 않습니다.",
      "엉덩이를 낮출수록 상체 전면과 광배근에 늘어나는 느낌을 강하게 걸 수 있습니다."
    ]
  },
  {
    id: "high_row_machine",
    name: "하이라트 풀 다운 머신 (High Row Machine)",
    image: "images/high_row.png",
    target: "광배근 하부, 대원근, 능형근",
    description: "대각선 위에서 당기는 특유의 궤적을 가진 머신으로 광배근의 밑바닥 섬유와 등 뒤판 안쪽을 공략합니다.",
    steps: [
      "시트 높이를 맞추고 허벅지 패드를 밀착시킵니다.",
      "손잡이를 쥐고 대각선 아래/뒤 방향으로 가슴을 활짝 열어 당겨 견갑골을 모아줍니다.",
      "등의 장�        const setRow = document.createElement('div');
        setRow.className = `set-row${isCompleted ? ' completed' : ''}`;
        
        // 유산소 운동은 분, km 단위 사용
        if (isCardio) {
          setRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 4px;">
              <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''}>
              <span class="set-index">${setIndex + 1}</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-weight-input" value="${set.weight}" placeholder="분">
              <span>분</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-reps-input" value="${set.reps}" placeholder="km" step="0.1">
              <span>km</span>
            </div>
            <button class="delete-set-btn">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
          `;
        } else {
          setRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 4px;">
              <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''}>
              <span class="set-index">${setIndex + 1}</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-weight-input" value="${set.weight}" placeholder="kg" step="2.5">
              <span>kg</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-reps-input" value="${set.reps}" placeholder="회">
              <span>회</span>
            </div>
            <button class="delete-set-btn">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
          `;
        }

        // Add progressive overload guide if available
        if (prevText) {
          const guideRow = document.createElement('div');
          guideRow.style.gridColumn = 'span 4';
          guideRow.style.textAlign = 'right';
          guideRow.style.paddingRight = '40px';
          guideRow.style.marginTop = '-4px';
          guideRow.style.marginBottom = '6px';
          guideRow.innerHTML = `<span class="prev-record-guide">${prevText}</span>`;
          setRow.appendChild(guideRow);
        }

        // Bind Events
        const chk = setRow.querySelector('.set-complete-chk');
        const weightInput = setRow.querySelector('.set-weight-input');
        const repsInput = setRow.querySelector('.set-reps-input');
        const delBtn = setRow.querySelector('.delete-set-btn');

        chk.addEventListener('change', () => {
          set.completed = chk.checked;
          this.app.saveWorkoutsForDate(date, workouts);
          this.render();
        });

        weightInput.addEventListener('input', () => {
          set.weight = parseFloat(weightInput.value) || 0;
          this.app.saveWorkoutsForDate(date, workouts);
        });

        weightInput.addEventListener('blur', () => {
          this.render();
        });

        repsInput.addEventListener('input', () => {
          set.reps = parseFloat(repsInput.value) || 0;
          this.app.saveWorkoutsForDate(date, workouts);
        });

        repsInput.addEventListener('blur', () => {
          this.render();
        });

        delBtn.addEventListener('click', () => {
          this.removeSet(workoutIndex, setIndex);
        });

        setsContainer.appendChild(setRow);
      });

      // Add Set Row
      const addSetRow = document.createElement('div');
      addSetRow.className = 'add-set-row';
      addSetRow.innerHTML = `
        <button class="add-set-btn">
          <i data-lucide="plus" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> 세트 추가
        </button>
      `;
      addSetRow.querySelector('.add-set-btn').addEventListener('click', () => {
        this.addSet(workoutIndex);
      });

      itemEl.appendChild(setsContainer);
      itemEl.appendChild(addSetRow);
      this.loggedContainer.appendChild(itemEl);
    });

    // Update coaching feedback
    this.updateCoachingFeedback(totalSets, totalVolume, totalCalories);

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  removeWorkout(workoutIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    workouts.splice(workoutIndex, 1);
    this.app.saveWorkoutsForDate(date, workouts);
    this.render();
  }

  updateCoachingFeedback(totalSets, totalVolume, totalCalories) {
    if (!this.coachingStatusBadge || !this.coachingFeedbackText) return;
    
    if (totalSets === 0) {
      this.coachingStatusBadge.textContent = '대기 중';
      this.coachingStatusBadge.className = 'status-badge badge-gray';
      this.coachingFeedbackText.innerHTML = '오늘의 운동 기록이 없습니다. 아래에서 운동을 추가하고 세트를 완료해 코칭을 받아보세요!';
      return;
    }

    let status = '진행 중';
    let badgeClass = 'badge-yellow';
    let feedback = '';

    if (totalSets >= 15) {
      status = '훌륭함';
      badgeClass = 'badge-green';
      feedback = `오늘 총 <strong>${totalSets}세트</strong>, <strong>${totalVolume.toLocaleString()}kg</strong>의 볼륨을 소화하며 <strong>${Math.round(totalCalories)} kcal</strong>를 연소했습니다! 강도 높은 트레이닝을 아주 훌륭하게 완수하셨습니다. 충분한 단백질 섭취와 휴식을 취해주세요! 🚀`;
    } else if (totalSets >= 8) {
      status = '적정';
      badgeClass = 'badge-blue';
      feedback = `오늘 총 <strong>${totalSets}세트</strong>, <strong>${totalVolume.toLocaleString()}kg</strong> 볼륨과 <strong>${Math.round(totalCalories)} kcal</strong> 소모를 기록했습니다. 근성장을 유도하기에 딱 좋은 볼륨입니다! 남은 세트가 있다면 부상에 주의하며 마무리해 보세요. 👍`;
    } else {
      status = '시작 단계';
      badgeClass = 'badge-yellow';
      feedback = `현재 <strong>${totalSets}세트</strong> 완료, <strong>${totalVolume.toLocaleString()}kg</strong> 볼륨을 달성했습니다 (소모 칼로리: <strong>${Math.round(totalCalories)} kcal</strong>). 조금 더 힘내서 오늘 계획한 루틴을 끝까지 완수해봅시다! 🔥`;
    }

    this.coachingStatusBadge.textContent = status;
    this.coachingStatusBadge.className = `status-badge ${badgeClass}`;
    this.coachingFeedbackText.innerHTML = feedback;
  }"허벅지 안쪽에 팔꿈치를 대서 어깨와 몸통의 모든 반동을 원천 봉쇄하여 이두근의 높이를 극단적으로 세워 올립니다.",
    steps: [
      "벤치 끝에 앉아 다리를 넓히고, 한쪽 팔꿈치를 같은 쪽 허벅지 안쪽에 얹어 지탱합니다.",
      "덤벨을 쥔 손을 아래로 떨어뜨린 후 어깨 반동 없이 오직 이두 힘으로 얼굴 방향으로 말아 올립니다.",
      "최고 지점에서 알통을 쥐어짜 준 뒤 저항을 통제하며 서서히 하강합니다."
    ],
    tips: [
      "동작 시 상체를 들어 올리거나 흔드는 반동을 쓰지 않도록 팔꿈치 견착 상태를 밀착해 유지합니다.",
      "손목을 위로 과하게 꺾지 마세요."
    ]
  },
  {
    id: "reverse_barbell_curl",
    name: "리버스 이지바 컬 (Reverse Grip Curl)",
    image: "images/reverse_curl.png",
    target: "완요골근, 전완근, 상완근",
    description: "바벨을 손등이 하늘을 보게 오버 그립으로 잡고 컬을 수행하여 아래팔 전완근과 이두 바깥층의 프레임을 단련합니다.",
    steps: [
      "손등이 정면을 바라보게 이지바를 위에서 아래로(오버 그립) 잡고 바로 섭니다.",
      "팔꿈치를 옆구리에 고정하고 바를 쇄골 방향으로 둥글게 말아 올립니다.",
      "아래팔 바깥쪽 전완근의 지속적인 텐션을 유도하며 천천히 제자리로 하강합니다."
    ],
    tips: [
      "손목이 밑으로 툭 꺾여 쳐지지 않게 컬 동작 내내 손목 정렬을 일직선으로 굳건히 잡습니다.",
      "상대적으로 약한 근육이므로 무리하게 중량을 올리지 마세요."
    ]
  },
  {
    id: "bench_dips",
    name: "벤치 딥스 (Bench Dips)",
    image: "images/bench_dips.png",
    target: "상완삼두근 전체, 전면 삼각근",
    description: "플랫 벤치 끝을 짚고 체중을 실어 하강했다 올라옴으로써 삼두근의 전체적인 선명도와 강직도를 기르는 맨몸 삼두 운동입니다.",
    steps: [
      "벤치 모서리 끝을 양손으로 짚고 엉덩이를 벤치 허공 앞으로 뺍니다.",
      "다리를 앞으로 뻗어 중심을 잡고 팔꿈치를 수직 뒤로 90도 굽히며 몸을 내립니다.",
      "삼두근의 미는 힘으로 팔꿈치를 펼쳐 제자리 높이로 몸 전체를 들어 올립니다."
    ],
    tips: [
      "팔꿈치가 뒤로 벌어지지 않게 뒤쪽 수평을 유지해야 삼두에 하중이 유지됩니다.",
      "어깨 관절이 약한 분은 어깨에 뻐근함이 가기 전 적당한 깊이까지만 하강합니다."
    ]
  }
);

exercisesData.abs.push(
  {
    id: "bicycle_crunch",
    name: "바이시클 크런치 (Bicycle Crunch)",
    image: "images/bicycle_crunch.png",
    target: "복직근 전체, 외복사근 (옆구리)",
    description: "누워서 자전거 페달을 굴리듯 다리를 저으며 팔꿈치를 반대쪽 무릎에 교대로 가져가 복부 전면과 외측을 함께 조각합니다.",
    steps: [
      "바닥에 누워 손을 머리 뒤에 대고 머리와 날개뼈를 바닥에서 띄웁니다.",
      "한 다리를 곧게 뻗고 반대쪽 무릎을 가슴으로 당기면서 몸통을 비틀어 반대쪽 팔꿈치와 무릎을 맞닿게 합니다.",
      "공중에서 멈춤 없이 양다리와 상체 꼬임을 리드미컬하게 교대로 전환합니다."
    ],
    tips: [
      "목을 잡아당겨 올리지 않게 머리 뒤 손에 힘을 최소화하고 복근 회전력에 주의를 기울입니다.",
      "동작 시 허리가 땅에서 붕 들뜨지 않게 허리 정렬(Imprint) 상태를 계속 누릅니다."
    ]
  },
  {
    id: "hanging_knee_raise",
    name: "행잉 니 레이즈 (Hanging Knee Raise)",
    image: "images/hanging_knee.png",
    target: "복직근 하부, 장요근",
    description: "철봉에 매달려서 다리를 펴는 대신 무릎을 구부려 가슴 쪽으로 말아 올리는 강도가 조절된 효과적인 하복부 고립 운동입니다.",
    steps: [
      "철봉에 매달려 어깨를 단단히 패킹 고정합니다.",
      "반동을 배제하고 무릎을 굽힌 채 가슴뼈 방향으로 둥글게 말아 올립니다.",
      "골반이 말리며 아랫배가 완전히 수축되면 천천히 버티며 복압을 유지하고 다리를 내립니다."
    ],
    tips: [
      "다리 무게가 아닌 골반 자체를 앞으로 둥글게 밀어 감아 올려야 하복부에 타겟이 걸립니다.",
      "몸이 앞뒤로 요동치며 흔들리면 매달린 채 멈춘 뒤 동작을 재개합니다."
    ]
  },
  {
    id: "mountain_climber",
    name: "마운틴 클라이머 (Mountain Climber)",
    image: "images/mountain.png",
    target: "코어 복부 전체, 장요근, 유산소 체력",
    description: "엎드려 뻗친 플랭크 자세에서 산을 오르듯 양 무릎을 가슴으로 번갈아 빠르게 당기는 고강도 유산소 코어 운동입니다.",
    steps: [
      "손을 어깨너비로 대고 엎드린 플랭크 기본 자세를 잡습니다.",
      "몸의 정렬을 수평으로 유지한 채, 한쪽 무릎을 가슴 쪽으로 빠르게 차 올립니다.",
      "발을 바꾸어 교대로 무릎을 가슴 쪽으로 빠르게 전력으로 러닝하듯 당깁니다."
    ],
    tips: [
      "무릎을 당길 때 엉덩이가 하늘로 과도하게 솟구치지 않게 어깨 수평 라인을 고정합니다.",
      "손목 관절 부담을 막기 위해 바닥을 손가락 전체로 꽉 쥐어 밀어냅니다."
    ]
  }
);

exercisesData.cardio.push(
  {
    id: "jump_rope",
    name: "줄넘기 (Jump Rope)",
    image: "images/jump_rope.png",
    target: "전신 심폐 지구력, 종아리 발목 탄성",
    description: "도구 하나로 엄청난 민첩성과 하체 탄성, 그리고 단시간 최고 출력을 끌어내는 클래식 유산소 운동입니다.",
    steps: [
      "줄 손잡이를 가볍게 쥐고 팔꿈치를 옆구리에 꼭 붙입니다.",
      "손목 회전을 이용해 줄을 돌리며 가볍게 앞꿈치 탄성을 이용해 제자리 점프합니다.",
      "지정된 템포와 리듬에 따라 일정한 속도로 점프를 반복합니다."
    ],
    tips: [
      "뒤꿈치를 대고 크게 뛰면 무릎과 발목 관절에 매우 악영향을 주니 앞꿈치로만 사뿐히 뜁니다.",
      "어깨와 힘을 빼고 손목 스냅으로만 줄을 돌리는 게 연속 수행의 지름길입니다."
    ]
  },
  {
    id: "burpee_test",
    name: "버피 테스트 (Burpee Test)",
    image: "images/burpee.png",
    target: "전신 심폐 능력 극대화, 전신 지구력",
    description: "서 있다가 엎드려 푸쉬업 후 다시 일어나 점프하는 동작을 하나로 묶어 전신 근육과 심폐를 완전 연소시키는 악마의 전신 유산소입니다.",
    steps: [
      "바르게 서서 무릎을 굽혀 바닥에 손을 짚습니다.",
      "양다리를 뒤로 점프해 뻗어 플랭크 자세를 잡습니다. (필요 시 가슴을 바닥에 대는 푸쉬업 동작 추가)",
      "다시 다리를 점프하여 손 근처로 가슴 방향 당겨옵니다.",
      "일어남과 동시에 하늘 방향으로 가볍게 힘껏 만세하며 점프합니다."
    ],
    tips: [
      "다리를 뒤로 뻗어 플랭크 시 허리가 밑으로 툭 꺾여 쳐지지 않게 복압을 견고히 잡습니다.",
      "관절 부하가 높은 복합 동작이므로 정확한 페이스 리듬을 찾고 시작합니다."
    ]
  },
  {
    id: "rowing_machine",
    name: "로잉 머신 (Rowing Machine)",
    image: "images/rowing.png",
    target: "전신 유산소, 하체/등 후면 사슬 전체",
    description: "배를 젓는 크루 동작을 머신으로 이식하여 하체로 밀고 등으로 당겨 전신 근육의 85% 이상을 동시에 동원하는 전신 운동입니다.",
    steps: [
      "발판 스트랩을 꽉 묶어 고정하고 안장에 바로 앉아 핸들을 잡습니다.",
      "다리를 굽혔다가 뒤꿈치로 발판을 세게 밀어내며 다리를 먼저 폅니다.",
      "다리가 거의 펴지는 지점에 도달하면 상체를 미세하게 뒤로 기대며 등/팔로 손잡이를 배꼽 아래로 당겨 수축합니다.",
      "등와 팔을 뻗은 후 무릎을 굽히며 부드럽게 앞으로 밀착 복귀합니다."
    ],
    tips: [
      "반드시 다리 60%, 코어 20%, 당기는 팔 20% 비율로 하체의 밀어내는 추진력이 우선시되어 당겨야 효과적입니다.",
      "허리가 구부정하게 둥글게 말려 힘이 풀리지 않게 합니다."
    ]
  }
);

// MET 계수 정의 맵
const MET_VALUES = {
  db_press: 5.5,
  decline_bench_press: 5.5,
  landmine_press: 4.5,
  db_pullover: 4.5,
  high_row_machine: 5.0,
  back_extension: 3.5,
  barbell_shrug: 3.5,
  cable_lateral_raise: 3.5,
  rear_delt_fly: 4.0,
  hack_squat: 6.0,
  db_stiff_leg_deadlift: 5.5,
  barbell_hip_thrust: 5.0,
  ezbar_overhead_extension: 4.0,
  db_concentration_curl: 3.0,
  reverse_barbell_curl: 3.0,
  bench_dips: 4.0,
  bicycle_crunch: 4.0,
  hanging_knee_raise: 3.5,
  mountain_climber: 6.0,
  jump_rope: 10.0,
  burpee_test: 8.5,
  rowing_machine: 7.0,
  // Chest
  bench_press: 6.0,
  incline_db_press: 5.0,
  chest_fly: 4.0,
  dips: 5.0,
  pec_deck_fly: 4.0,
  push_up: 4.0,
  cable_crossover: 4.0,
  
  // Back
  deadlift: 7.0,
  lat_pulldown: 5.0,
  bent_over_row: 6.0,
  pull_up: 5.0,
  seated_cable_row: 4.5,
  one_arm_db_row: 5.0,
  tbar_row: 6.0,
  
  // Shoulders
  overhead_press: 6.0,
  side_lateral_raise: 3.5,
  db_shoulder_press: 5.0,
  bent_over_lateral_raise: 3.5,
  face_pull: 4.0,
  arnold_press: 5.0,
  front_raise: 3.5,
  upright_row: 4.5,
  
  // Legs
  squat: 7.0,
  romanian_deadlift: 6.0,
  leg_press: 6.0,
  leg_curl: 4.0,
  leg_extension: 4.0,
  lunge: 5.5,
  barbell_lunge: 6.0,
  calf_raise: 3.0,
  
  // Arms
  db_biceps_curl: 3.5,
  triceps_pushdown: 3.5,
  hammer_curl: 3.5,
  barbell_curl: 4.0,
  lying_triceps_extension: 4.0,
  db_kickback: 3.0,
  preacher_curl: 3.5,
  
  // Abs
  crunch: 3.0,
  leg_raise: 3.0,
  plank: 3.0,
  russian_twist: 3.5,
  hanging_leg_raise: 4.0,
  ab_rollout: 4.5,
  
  // Cardio
  treadmill: 8.0,
  stationary_bike: 6.0,
  stair_climber: 9.0,
  elliptical: 5.5,
  outdoor_running: 9.0
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
    
    // Coaching Card Elements
    this.coachingStatusBadge = document.getElementById('coaching-status-badge');
    this.coachingFeedbackText = document.getElementById('coaching-feedback-text');
    this.metricTotalSets = document.getElementById('metric-total-sets');
    this.metricTotalVolume = document.getElementById('metric-total-volume');
    this.metricTotalCalories = document.getElementById('metric-total-calories');
    
    // Custom exercise elements
    this.customExerciseNameInput = document.getElementById('custom-exercise-name');
    this.customExerciseAddBtn = document.getElementById('custom-exercise-add-btn');
    
    this.selectedQuickAddPart = null; // Track current selected category
    
    this.loadCustomExercises(); // 영구 커스텀 운동 로드 및 병합
    this.initQuickAdd();
    this.initCustomExerciseEvents();
    
    // Routine template initialization
    this.templatesCard = document.getElementById('my-templates-card');
    this.templatesList = document.getElementById('my-templates-list');
    this.saveTemplateBtn = document.getElementById('save-routine-template-btn');
    this.saveTemplateBtn.addEventListener('click', () => this.saveCurrentAsTemplate());
    this.renderTemplates();
  }

  loadCustomExercises() {
    const customs = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
    customs.forEach(ex => {
      if (exercisesData[ex.category]) {
        const exists = exercisesData[ex.category].some(item => item.id === ex.id);
        if (!exists) {
          exercisesData[ex.category].push(ex);
        }
      }
      // MET 계수 복구
      if (!MET_VALUES[ex.id]) {
        MET_VALUES[ex.id] = ex.category === 'cardio' ? 6.0 : 4.0;
      }
    });
  }

  initCustomExerciseEvents() {
    this.customExerciseCategorySelect = document.getElementById('custom-exercise-category');
    this.customExerciseAddBtn.addEventListener('click', () => {
      const name = this.customExerciseNameInput.value.trim();
      const category = this.customExerciseCategorySelect.value;
      if (!name) {
        alert('운동 이름을 입력해 주세요.');
        return;
      }
      
      const customId = `custom_${Date.now()}`;
      
      const newCustomExercise = {
        id: customId,
        name: `${name} (커스텀)`,
        image: "images/default_workout.png",
        target: `${this.getCategoryKorean(category)} 커스텀 운동`,
        description: "사용자가 직접 추가한 커스텀 운동 종목입니다.",
        steps: ["운동을 시작하고 올바른 자세로 수행합니다."],
        tips: ["코어를 단단히 잡고 부상에 유의하여 수행하세요."]
      };

      // 로컬스토리지 저장
      const customs = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
      customs.push(Object.assign({ category }, newCustomExercise));
      localStorage.setItem('vitalfit_custom_exercises', JSON.stringify(customs));

      // 메모리 병합
      if (exercisesData[category]) {
        exercisesData[category].push(newCustomExercise);
      }

      // MET 지정
      MET_VALUES[customId] = category === 'cardio' ? 6.0 : 4.0;

      // 오늘 일지에 즉시 추가
      this.addWorkout(customId, newCustomExercise.name, category);
      this.customExerciseNameInput.value = '';
      
      // UI 갱신 (빠른 추가 갱신)
      if (this.selectedQuickAddPart === category) {
        const activeBtn = this.quickAddContainer.querySelector(`.quick-add-item[data-category="${category}"]`);
        if (activeBtn) this.selectQuickAddCategory(category, activeBtn);
      } else {
        // 선택된 카테고리가 아니어도 빠른 추가 그리드를 활성화해둠
        const targetBtn = this.quickAddContainer.querySelector(`.quick-add-item[data-category="${category}"]`);
        if (targetBtn) this.selectQuickAddCategory(category, targetBtn);
      }
      
      alert(`💪 '${name}' 운동이 ${this.getCategoryKorean(category)} 카테고리에 영구 등록되고, 오늘 일지에 추가되었습니다!`);
    });
  }

  initQuickAdd() {
    this.quickAddContainer.innerHTML = '';
    
    const categories = [
      { id: 'chest', name: '가슴' },
      { id: 'back', name: '등' },
      { id: 'shoulders', name: '어깨' },
      { id: 'legs', name: '하체' },
      { id: 'arms', name: '팔' },
      { id: 'abs', name: '복근' },
      { id: 'cardio', name: '유산소' }
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
    const buttons = this.quickAddContainer.querySelectorAll('.quick-add-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (this.selectedQuickAddPart === categoryId && clickedBtn.classList.contains('active')) {
      this.selectedQuickAddPart = null;
      this.quickAddSubContainer.style.display = 'none';
      return;
    }

    this.selectedQuickAddPart = categoryId;
    clickedBtn.classList.add('active');

    this.quickAddSubContainer.style.display = 'block';
    this.quickAddSubTitle.textContent = `${this.getCategoryKorean(categoryId)} 운동 선택`;

    this.quickAddSubList.innerHTML = '';
    const list = exercisesData[categoryId] || [];

    list.forEach(ex => {
      const chip = document.createElement('div');
      chip.className = 'quick-add-item';
      chip.style.padding = '8px 10px';
      chip.style.fontSize = '0.8rem';
      chip.style.display = 'flex';
      chip.style.justify = 'space-between';
      chip.style.alignItems = 'center';
      chip.style.gap = '6px';
      
      const isCustom = ex.id && ex.id.startsWith('custom_');
      
      chip.innerHTML = `
        <div style="font-weight: 600; text-align: left; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${ex.name.split(' (')[0]}</div>
        ${isCustom ? `
          <button class="delete-custom-ex-btn" data-id="${ex.id}" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 2px 6px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
            <i data-lucide="x" style="width: 12px; height: 12px;"></i>
          </button>
        ` : ''}
      `;
      
      chip.addEventListener('click', (e) => {
        if (e.target.closest('.delete-custom-ex-btn')) return;
        this.addWorkout(ex.id, ex.name, categoryId);
      });
      
      if (isCustom) {
        chip.querySelector('.delete-custom-ex-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          this.deleteCustomExercise(ex.id, categoryId, clickedBtn);
        });
      }
      
      this.quickAddSubList.appendChild(chip);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  deleteCustomExercise(exId, categoryId, clickedBtn) {
    if (confirm('이 커스텀 운동을 영구 삭제하시겠습니까?\n(이미 작성된 운동 일지 기록은 유지됩니다)')) {
      // 1. 로컬스토리지 삭제
      let customs = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
      customs = customs.filter(ex => ex.id !== exId);
      localStorage.setItem('vitalfit_custom_exercises', JSON.stringify(customs));

      // 2. 메모리 삭제
      if (exercisesData[categoryId]) {
        exercisesData[categoryId] = exercisesData[categoryId].filter(ex => ex.id !== exId);
      }

      // 3. MET 삭제
      delete MET_VALUES[exId];

      // 4. UI 갱신
      this.selectQuickAddCategory(categoryId, clickedBtn);
      alert('🗑️ 커스텀 운동이 라이브러리에서 성공적으로 삭제되었습니다.');
    }
  }

  getCategoryKorean(cat) {
    const map = { chest: '가슴', back: '등', shoulders: '어깨', legs: '하체', arms: '팔', abs: '복근', cardio: '유산소', custom: '기타' };
    return map[cat] || cat;
  }

  render() {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
    const userProfile = JSON.parse(localStorage.getItem('vitalfit_user_profile')) || {};
    const weight = parseFloat(userProfile.profileWeight) || 70;

    // 1. Render logged list
    if (workouts.length === 0) {
      this.loggedContainer.innerHTML = `
        <div class="empty-state">
          <i data-lucide="clipboard-list" style="width: 40px; height: 40px;"></i>
          <p>오늘 기록된 운동이 없습니다.<br>아래 목록에서 운동을 선택해 기록을 남겨보세요!</p>
        </div>
      `;
      this.updateCoachingFeedback(0, 0, 0); // Empty coaching state
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    this.loggedContainer.innerHTML = '';
    let totalSets = 0;
    let totalVolume = 0;
    let totalCalories = 0;

    workouts.forEach((workout, workoutIndex) => {
      const isCardio = workout.category === 'cardio';
      const met = MET_VALUES[workout.id] || (isCardio ? 6.0 : 4.0);

      // 개별 운동의 완료된 세트 칼로리 계산
      let workoutCalories = 0;
      workout.sets.forEach(set => {
        if (set.completed) {
          if (isCardio) {
            workoutCalories += met * 3.5 * weight / 200 * (parseFloat(set.weight) || 0);
          } else {
            workoutCalories += met * 3.5 * weight / 200 * 1.5; // 웨이트는 세션당 1.5분으로 산정
          }
        }
      });
      totalCalories += workoutCalories;

      const itemEl = document.createElement('div');
      itemEl.className = 'logged-workout-item';
      
      const calorieText = workoutCalories > 0 ? `<span class="workout-calorie-badge" style="background: rgba(239, 68, 68, 0.15); color: #f87171; font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; font-weight: 700; margin-left: 6px; display: inline-flex; align-items: center; gap: 2px;">🔥 ${Math.round(workoutCalories)} kcal</span>` : '';

      const headerEl = document.createElement('div');
      headerEl.className = 'logged-workout-header';
      headerEl.innerHTML = `
        <div class="logged-workout-title" style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">
          ${workout.name}
          <span class="logged-workout-tag">${this.getCategoryKorean(workout.category)}</span>
          ${calorieText}
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
        totalSets++;
        if (!isCardio) {
          totalVolume += (set.weight * set.reps);
        }

        const isCompleted = set.completed || false;
        
        // Find previous record guide
        const prevText = this.findPreviousRecord(workout.id, setIndex);
        const guideHTML = prevText ? `<span class="prev-record-guide">${prevText}</span>` : '';

                const setRow = document.createElement('div');
        setRow.className = `set-row${isCompleted ? ' completed' : ''}`;
        
        // ?좎궛???대룞? 遺? km ?⑥쐞 ?ъ슜
        if (isCardio) {
          setRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 4px;">
              <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''}>
              <span class="set-index">${setIndex + 1}</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-weight-input" value="${set.weight}" placeholder="遺?>
              <span>遺?/span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-reps-input" value="${set.reps}" placeholder="km" step="0.1">
              <span>km</span>
            </div>
            <button class="delete-set-btn">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
          `;
        } else {
          setRow.innerHTML = `
            <div style="display: flex; align-items: center; gap: 4px;">
              <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''}>
              <span class="set-index">${setIndex + 1}</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-weight-input" value="${set.weight}" placeholder="kg" step="2.5">
              <span>kg</span>
            </div>
            <div class="set-input-group">
              <input type="number" class="set-reps-input" value="${set.reps}" placeholder="??>
              <span>??/span>
            </div>
            <button class="delete-set-btn">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
          `;
        }

        // Add progressive overload guide if available
        if (prevText) {
          const guideRow = document.createElement('div');
          guideRow.style.gridColumn = 'span 4';
          guideRow.style.textAlign = 'right';
          guideRow.style.paddingRight = '40px';
          guideRow.style.marginTop = '-4px';
          guideRow.style.marginBottom = '6px';
          guideRow.innerHTML = `<span class="prev-record-guide">${prevText}</span>`;
          setRow.appendChild(guideRow);
        }

        // Bind Events
        const chk = setRow.querySelector('.set-complete-chk');
        const weightInput = setRow.querySelector('.set-weight-input');
        const repsInput = setRow.querySelector('.set-reps-input');
        const delBtn = setRow.querySelector('.delete-set-btn');

        chk.addEventListener('change', () => {
          set.completed = chk.checked;
          this.app.saveWorkoutsForDate(date, workouts);
          this.render();
        });

        weightInput.addEventListener('input', () => {
          set.weight = parseFloat(weightInput.value) || 0;
          this.app.saveWorkoutsForDate(date, workouts);
        });

        weightInput.addEventListener('blur', () => {
          this.render();
        });

        repsInput.addEventListener('input', () => {
          set.reps = parseFloat(repsInput.value) || 0;
          this.app.saveWorkoutsForDate(date, workouts);
        });

        repsInput.addEventListener('blur', () => {
          this.render();
        });

        delBtn.addEventListener('click', () => {
          this.removeSet(workoutIndex, setIndex);
        });

        setsContainer.appendChild(setRow);
      });

      // Add Set Row
      const addSetRow = document.createElement('div');
      addSetRow.className = 'add-set-row';
      addSetRow.innerHTML = `
        <button class="add-set-btn">
          <i data-lucide="plus" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> ?명듃 異붽?
        </button>
      `;
      addSetRow.querySelector('.add-set-btn').addEventListener('click', () => {
        this.addSet(workoutIndex);
      });

      itemEl.appendChild(setsContainer);
      itemEl.appendChild(addSetRow);
      this.loggedContainer.appendChild(itemEl);
    });

    // Update coaching feedback
    this.updateCoachingFeedback(totalSets, totalVolume, totalCalories);

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  removeWorkout(workoutIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    workouts.splice(workoutIndex, 1);
    this.app.saveWorkoutsForDate(date, workouts);
    this.render();
  }

  updateCoachingFeedback(totalSets, totalVolume, totalCalories) {
    if (!this.coachingStatusBadge || !this.coachingFeedbackText) return;
    
    if (totalSets === 0) {
      this.coachingStatusBadge.textContent = '?湲?以?;
      this.coachingStatusBadge.className = 'status-badge badge-gray';
      this.coachingFeedbackText.innerHTML = '?ㅻ뒛???대룞 湲곕줉???놁뒿?덈떎. ?꾨옒?먯꽌 ?대룞??異붽??섍퀬 ?명듃瑜??꾨즺??肄붿묶??諛쏆븘蹂댁꽭??';
      return;
    }

    let status = '吏꾪뻾 以?;
    let badgeClass = 'badge-yellow';
    let feedback = '';

    if (totalSets >= 15) {
      status = '?뚮???;
      badgeClass = 'badge-green';
      feedback = `?ㅻ뒛 珥?<strong>${totalSets}?명듃</strong>, <strong>${totalVolume.toLocaleString()}kg</strong>??蹂쇰ⅷ???뚰솕?섎ŉ <strong>${Math.round(totalCalories)} kcal</strong>瑜??곗냼?덉뒿?덈떎! 媛뺣룄 ?믪? ?몃젅?대떇???꾩＜ ?뚮??섍쾶 ?꾩닔?섏뀲?듬땲?? 異⑸텇???⑤갚吏???랬? ?댁떇??痍⑦빐二쇱꽭?? ??`;
    } else if (totalSets >= 8) {
      status = '?곸젙';
      badgeClass = 'badge-blue';
      feedback = `?ㅻ뒛 珥?<strong>${totalSets}?명듃</strong>, <strong>${totalVolume.toLocaleString()}kg</strong> 蹂쇰ⅷ怨?<strong>${Math.round(totalCalories)} kcal</strong> ?뚮え瑜?湲곕줉?덉뒿?덈떎. 洹쇱꽦?μ쓣 ?좊룄?섍린????醫뗭? 蹂쇰ⅷ?낅땲?? ?⑥? ?명듃媛 ?덈떎硫?遺?곸뿉 二쇱쓽?섎ŉ 留덈Т由ы빐 蹂댁꽭?? ?몟`;
    } else {
      status = '?쒖옉 ?④퀎';
      badgeClass = 'badge-yellow';
      feedback = `?꾩옱 <strong>${totalSets}?명듃</strong> ?꾨즺, <strong>${totalVolume.toLocaleString()}kg</strong> 蹂쇰ⅷ???ъ꽦?덉뒿?덈떎 (?뚮え 移쇰줈由? <strong>${Math.round(totalCalories)} kcal</strong>). 議곌툑 ???섎궡???ㅻ뒛 怨꾪쉷??猷⑦떞???앷퉴吏 ?꾩닔?대큶?쒕떎! ?뵦`;
    }

    this.coachingStatusBadge.textContent = status;
    this.coachingStatusBadge.className = `status-badge ${badgeClass}`;
    this.coachingFeedbackText.innerHTML = feedback;
  }

  addSet(workoutIndex) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    const sets = workouts[workoutIndex].sets;
    
    const lastSet = sets[sets.length - 1] || { weight: 40, reps: 10 };
    sets.push({ weight: lastSet.weight, reps: lastSet.reps, completed: false });
    
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

  // Find previous workout record for progressive overload guide
  findPreviousRecord(exerciseId, setIndex) {
    const allWorkouts = this.app.state.workouts; 
    const dates = Object.keys(allWorkouts).sort().reverse(); 
    
    const today = this.app.selectedDate;
    for (const d of dates) {
      if (d === today) continue;
      
      const dayLogs = allWorkouts[d] || [];
      const matchingEx = dayLogs.find(w => w.id === exerciseId);
      if (matchingEx && matchingEx.sets && matchingEx.sets[setIndex]) {
        const targetSet = matchingEx.sets[setIndex];
        if (targetSet.weight > 0 && targetSet.reps > 0) {
          return `이전: ${targetSet.weight}kg x ${targetSet.reps}회`;
        }
      }
    }
    return '';
  }

  // Save current workout logs as a custom template
  saveCurrentAsTemplate() {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
    if (workouts.length === 0) {
      alert('저장할 운동이 없습니다. 일지에 운동을 등록한 후 저장해 주세요.');
      return;
    }
    
    const name = prompt('저장할 루틴 템플릿의 이름을 입력해 주세요 (예: 가슴 삼두 루틴 A)');
    if (!name || !name.trim()) return;
    
    const templates = JSON.parse(localStorage.getItem('vitalfit_routine_templates')) || {};
    
    const cleanWorkouts = workouts.map(w => ({
      id: w.id,
      name: w.name,
      category: w.category,
      sets: w.sets.map(s => ({ weight: s.weight, reps: s.reps }))
    }));
    
    templates[name.trim()] = cleanWorkouts;
    localStorage.setItem('vitalfit_routine_templates', JSON.stringify(templates));
    
    alert(`💾 '${name.trim()}' 루틴 템플릿이 저장되었습니다!`);
    this.renderTemplates();
  }

  // Render Saved Routine Templates List
  renderTemplates() {
    const templates = JSON.parse(localStorage.getItem('vitalfit_routine_templates')) || {};
    const keys = Object.keys(templates);
    
    if (keys.length === 0) {
      this.templatesCard.style.display = 'none';
      return;
    }
    
    this.templatesCard.style.display = 'block';
    this.templatesList.innerHTML = '';
    
    keys.forEach(name => {
      const chip = document.createElement('div');
      chip.className = 'template-chip';
      chip.innerHTML = `
        <span style="font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 4px;">
          <i data-lucide="dumbbell" style="width: 12px; height: 12px;"></i>
          ${name}
        </span>
        <button class="template-chip-delete-btn" data-name="${name}">
          <i data-lucide="x" style="width: 12px; height: 12px;"></i>
        </button>
      `;
      
      chip.addEventListener('click', (e) => {
        if (e.target.closest('.template-chip-delete-btn')) return;
        this.applyTemplate(name, templates[name]);
      });
      
      chip.querySelector('.template-chip-delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteTemplate(name);
      });
      
      this.templatesList.appendChild(chip);
    });
    
    if (window.lucide) window.lucide.createIcons();
  }

  // Apply chosen template to today's log
  applyTemplate(name, workouts) {
    if (confirm(`'${name}' 루틴의 운동들을 오늘 일지에 불러올까요?\n(기존 기록에 누적되어 추가됩니다.)`)) {
      const date = this.app.selectedDate;
      const todayWorkouts = this.app.getWorkoutsForDate(date);
      
      let added = 0;
      workouts.forEach(w => {
        const exists = todayWorkouts.some(tw => tw.id === w.id);
        if (!exists) {
          const sets = w.sets.map(s => ({ weight: s.weight, reps: s.reps, completed: false }));
          todayWorkouts.push({
            id: w.id,
            name: w.name,
            category: w.category,
            sets: sets
          });
          added++;
        }
      });
      
      this.app.saveWorkoutsForDate(date, todayWorkouts);
      this.render();
      alert(`🤖 '${name}' 루틴의 ${added}개 운동 구성을 오늘 일지에 복원했습니다!`);
    }
  }

  // Delete saved template
  deleteTemplate(name) {
    if (confirm(`'${name}' 루틴 템플릿을 삭제하시겠습니까?`)) {
      const templates = JSON.parse(localStorage.getItem('vitalfit_routine_templates')) || {};
      delete templates[name];
      localStorage.setItem('vitalfit_routine_templates', JSON.stringify(templates));
      this.renderTemplates();
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

    const catKey = this.currentCategory || ex.category || 'workout';
    const categoryName = this.getCategoryKorean(catKey);
    const bannerHTML = `
      <div class="exercise-guide-banner-card" style="width: 100%; padding: 24px 20px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align: center; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); position: relative; overflow: hidden;">
        <div style="position: absolute; top: -20px; right: -20px; font-size: 6rem; opacity: 0.03; font-weight: 900; pointer-events: none; color: var(--text-main); font-family: var(--font-title);">${catKey.toUpperCase()}</div>
        <i data-lucide="dumbbell" style="width: 36px; height: 36px; color: var(--color-primary); margin: 0 auto 10px; filter: drop-shadow(0 0 5px var(--color-primary-glow));"></i>
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px;">${categoryName}</div>
      </div>
    `;

    // YouTube Search URL
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' 자세')}`;

    this.contentArea.innerHTML = `
      <div class="instruction-container">
        ${bannerHTML}
        <div class="card" style="margin-bottom: 0; background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
          <div class="exercise-item-target" style="font-size: 0.9rem; margin-bottom: 6px;">
            <i data-lucide="crosshair" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 4px;"></i>
            주요 자극 부위: ${ex.target}
          </div>
          <p class="exercise-item-desc" style="font-size: 0.95rem; line-height: 1.5; color: #cbd5e1; margin-bottom: 12px;">${ex.description}</p>
          
          <a href="${youtubeSearchUrl}" target="_blank" class="btn btn-secondary" style="border-color: rgba(239, 68, 68, 0.4); color: #f87171; background: rgba(239, 68, 68, 0.04); font-size: 0.8rem; padding: 8px 12px; display: inline-flex; width: 100%; justify-content: center; align-items: center; gap: 6px; font-weight: 700; text-decoration: none;">
            <i data-lucide="youtube" style="width: 14px; height: 14px; color: #ef4444;"></i>
            유튜브에서 올바른 자세 영상 찾아보기
          </a>
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
// 4. AI TRAINER MODULE (BMR, Splits & PT Recommendation)
// ==========================================
class TrainerAssistant {
  constructor(app) {
    this.app = app;

    // Profile Settings DOM elements
    this.profileGender = document.getElementById('profile-gender');
    this.profileAge = document.getElementById('profile-age');
    this.profileHeight = document.getElementById('profile-height');
    this.profileWeight = document.getElementById('profile-weight');
    this.profileGoal = document.getElementById('profile-goal');
    this.profileLevel = document.getElementById('profile-level');
    this.calculateBmrBtn = document.getElementById('calculate-bmr-btn');
    this.bmrResultBox = document.getElementById('bmr-result-box');

    // Routine Recommendation DOM elements
    this.routineSplitSelect = document.getElementById('routine-split-select');
    this.recommendRoutineBtn = document.getElementById('recommend-routine-btn');
    this.suggestedRoutineBox = document.getElementById('suggested-routine-box');
    this.suggestedRoutineTitle = document.getElementById('suggested-routine-title');
    this.suggestedRoutineLevelTag = document.getElementById('suggested-routine-level-tag');
    this.suggestedRoutineList = document.getElementById('suggested-routine-list');
    this.suggestedRoutineGuideBox = document.getElementById('suggested-routine-guide-box');
    this.applyRoutineBtn = document.getElementById('apply-routine-btn');

    // Weekly Routine DOM elements
    this.dayTabBtns = document.querySelectorAll('.day-tab-btn');
    this.weeklyRoutineList = document.getElementById('weekly-routine-exercises-list');
    this.weeklyPartSelect = document.getElementById('weekly-routine-part-select');
    this.weeklyExerciseSelect = document.getElementById('weekly-routine-exercise-select');
    this.weeklyAddExBtn = document.getElementById('weekly-routine-add-ex-btn');
    this.weeklyLoadTodayBtn = document.getElementById('weekly-routine-load-today-btn');
    this.weeklySaveBtn = document.getElementById('weekly-routine-save-btn');

    this.currentSuggestedRoutine = null; // Store recommended routine array temporarily

    // 주간 루틴 데이터 초기화
    this.weeklyRoutines = JSON.parse(localStorage.getItem('vitalfit_weekly_routines')) || {
      '0': [], '1': [], '2': [], '3': [], '4': [], '5': [], '6': []
    };
    
    // 오늘 날짜의 요일(월=0 ~ 일=6) 구해서 기본 설정
    const rawDay = new Date().getDay(); // 일(0) ~ 토(6)
    const todayDay = rawDay === 0 ? 6 : rawDay - 1; // 월(0) ~ 일(6) 변환
    this.currentSelectedDay = todayDay.toString();

    this.initEvents();
    this.loadUserProfile();
    
    // 요일별 운동 선택지 및 리스트 초기화 렌더링
    this.updateWeeklyExerciseDropdown();
    this.renderWeeklyRoutine();
  }

  initEvents() {
    this.calculateBmrBtn.addEventListener('click', () => {
      this.saveProfileAndCalculateBMR();
    });

    this.recommendRoutineBtn.addEventListener('click', () => {
      this.generatePTRoutine();
    });

    this.applyRoutineBtn.addEventListener('click', () => {
      this.applyRoutineToLog();
    });

    // 주간 루틴 요일 탭 선택 이벤트
    this.dayTabBtns.forEach(btn => {
      // 기본 요일 탭 active 설정
      if (btn.getAttribute('data-day') === this.currentSelectedDay) {
        btn.classList.add('active');
        btn.style.background = 'var(--color-secondary)';
        btn.style.color = 'white';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'rgba(255,255,255,0.05)';
        btn.style.color = 'var(--text-muted)';
      }

      btn.addEventListener('click', () => {
        this.dayTabBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'rgba(255,255,255,0.05)';
          b.style.color = 'var(--text-muted)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--color-secondary)';
        btn.style.color = 'white';
        
        this.currentSelectedDay = btn.getAttribute('data-day');
        this.renderWeeklyRoutine();
      });
    });

    // 부위 변경 시 운동 드롭다운 리스트 변경
    this.weeklyPartSelect.addEventListener('change', () => {
      this.updateWeeklyExerciseDropdown();
    });

    // 운동 추가 버튼 클릭
    this.weeklyAddExBtn.addEventListener('click', () => {
      const exId = this.weeklyExerciseSelect.value;
      if (!exId) return;

      const part = this.weeklyPartSelect.value;
      const exObj = exercisesData[part].find(e => e.id === exId);
      if (!exObj) return;

      const exists = this.weeklyRoutines[this.currentSelectedDay].some(e => e.id === exId);
      if (exists) {
        alert('이미 이 요일 루틴에 등록된 운동입니다.');
        return;
      }

      this.weeklyRoutines[this.currentSelectedDay].push({
        id: exObj.id,
        name: exObj.name,
        category: part
      });

      this.renderWeeklyRoutine();
    });

    // 오늘 일지에 등록
    this.weeklyLoadTodayBtn.addEventListener('click', () => {
      this.applyWeeklyRoutineToToday();
    });

    // 주간 루틴 전체 저장
    this.weeklySaveBtn.addEventListener('click', () => {
      localStorage.setItem('vitalfit_weekly_routines', JSON.stringify(this.weeklyRoutines));
      alert('💾 요일별 운동 루틴이 안전하게 저장되었습니다!');
    });
  }

  loadUserProfile() {
    const saved = JSON.parse(localStorage.getItem('vitalfit_user_profile'));
    if (saved) {
      this.profileGender.value = saved.profileGender || 'male';
      this.profileAge.value = saved.profileAge || 28;
      this.profileHeight.value = saved.profileHeight || 175;
      this.profileWeight.value = saved.profileWeight || 70;
      this.profileGoal.value = saved.profileGoal || 'diet';
      this.profileLevel.value = saved.profileLevel || 'beginner';
      
      this.saveProfileAndCalculateBMR(true); // Silently compute BMR on start
    }
  }

  saveProfileAndCalculateBMR(silent = false) {
    const profile = {
      profileGender: this.profileGender.value,
      profileAge: parseInt(this.profileAge.value) || 28,
      profileHeight: parseFloat(this.profileHeight.value) || 175,
      profileWeight: parseFloat(this.profileWeight.value) || 70,
      profileGoal: this.profileGoal.value,
      profileLevel: this.profileLevel.value
    };

    if (profile.profileAge <= 0 || profile.profileHeight <= 0 || profile.profileWeight <= 0) {
      if (!silent) alert('올바른 신체 정보(나이, 키, 몸무게)를 입력해 주세요.');
      return;
    }

    localStorage.setItem('vitalfit_user_profile', JSON.stringify(profile));

    // BMR Calculation (Mifflin-St Jeor)
    let bmr = 0;
    if (profile.profileGender === 'male') {
      bmr = 10 * profile.profileWeight + 6.25 * profile.profileHeight - 5 * profile.profileAge + 5;
    } else {
      bmr = 10 * profile.profileWeight + 6.25 * profile.profileHeight - 5 * profile.profileAge - 161;
    }
    bmr = Math.round(bmr);

    // TDEE (Total Daily Energy Expenditure) calculation - activity factor 1.375 (light active)
    const tdee = Math.round(bmr * 1.375);
    
    // Set recommendations
    let calorieGoal = 0;
    let bmrText = '';
    if (profile.profileGoal === 'diet') {
      calorieGoal = tdee - 500;
      bmrText = '체지방 연소를 위해 약 <strong>500kcal의 칼로리 결손</strong>이 권장됩니다.';
    } else if (profile.profileGoal === 'bulk') {
      calorieGoal = tdee + 300;
      bmrText = '근육량 증가(벌크업)를 위해 약 <strong>300kcal의 칼로리 잉여</strong>가 권장됩니다.';
    } else {
      calorieGoal = tdee;
      bmrText = '근력(스트렝스) 증가를 위해 <strong>유지 칼로리</strong> 섭취를 유지하며 단백질 위주로 보충하세요.';
    }

    this.bmrResultBox.style.display = 'block';
    this.bmrResultBox.innerHTML = `
      <div style="font-weight:700; color:var(--color-secondary); margin-bottom: 6px;">🤖 전담 트레이너 맞춤 처방</div>
      • 나의 기초대사량(BMR): <strong>${bmr} kcal</strong><br>
      • 나의 일일 대사량(TDEE): <strong>${tdee} kcal</strong><br>
      • 하루 영양 권장 섭취량: <strong style="color:var(--color-primary);">${calorieGoal} kcal</strong>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">${bmrText}</div>
    `;

    if (!silent) {
      alert('신체 프로필 및 AI 트레이너 데이터 저장이 완료되었습니다!');
      // Re-trigger tracker to recalculate coaching advice under new goals
      this.app.tracker.render();
    }
  }

  updateWeeklyExerciseDropdown() {
    const part = this.weeklyPartSelect.value;
    const list = exercisesData[part] || [];
    this.weeklyExerciseSelect.innerHTML = '';
    
    list.forEach(ex => {
      const opt = document.createElement('option');
      opt.value = ex.id;
      opt.textContent = ex.name.split(' (')[0];
      this.weeklyExerciseSelect.appendChild(opt);
    });
  }

  renderWeeklyRoutine() {
    this.weeklyRoutineList.innerHTML = '';
    const currentList = this.weeklyRoutines[this.currentSelectedDay] || [];
    
    if (currentList.length === 0) {
      this.weeklyRoutineList.innerHTML = `
        <div style="text-align: center; padding: 20px; font-size: 0.8rem; color: var(--text-muted);">
          등록된 운동이 없습니다. 아래에서 운동을 골라 추가해 보세요!
        </div>
      `;
      return;
    }

    currentList.forEach((ex, index) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.justify = 'space-between';
      row.style.alignItems = 'center';
      row.style.padding = '8px 12px';
      row.style.background = 'rgba(255,255,255,0.02)';
      row.style.border = '1px solid var(--border-color)';
      row.style.borderRadius = 'var(--radius-sm)';
      row.style.marginBottom = '6px';
      
      row.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.72rem; background:rgba(59,130,246,0.15); color:var(--color-secondary); padding: 2px 6px; border-radius: 4px;">
            ${this.app.tracker.getCategoryKorean(ex.category)}
          </span>
          <span style="font-weight:600; font-size:0.85rem;">${ex.name.split(' (')[0]}</span>
        </div>
        <button class="delete-weekly-ex-btn" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:4px; display: flex; align-items: center; justify-content: center;">
          <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
        </button>
      `;

      row.querySelector('.delete-weekly-ex-btn').addEventListener('click', () => {
        this.weeklyRoutines[this.currentSelectedDay].splice(index, 1);
        this.renderWeeklyRoutine();
      });

      this.weeklyRoutineList.appendChild(row);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  applyWeeklyRoutineToToday() {
    const currentList = this.weeklyRoutines[this.currentSelectedDay] || [];
    if (currentList.length === 0) {
      alert('선택된 요일에 등록된 루틴 운동이 없습니다. 먼저 루틴을 설계해 주세요.');
      return;
    }

    const dayKorean = ['월', '화', '수', '목', '금', '토', '일'][parseInt(this.currentSelectedDay)];
    if (confirm(`'${dayKorean}요일' 루틴의 운동들을 오늘 일지에 불러올까요?\n(기존 일지에 누적 추가됩니다.)`)) {
      const date = this.app.selectedDate;
      const todayWorkouts = this.app.getWorkoutsForDate(date);
      
      let added = 0;
      currentList.forEach(ex => {
        const exists = todayWorkouts.some(w => w.id === ex.id);
        if (!exists) {
          const isCardio = ex.category === 'cardio';
          const sets = [];
          if (isCardio) {
            sets.push({ weight: 15, reps: 1.5, completed: false });
          } else {
            for (let i = 0; i < 3; i++) {
              sets.push({ weight: 40, reps: 10, completed: false });
            }
          }
          
          todayWorkouts.push({
            id: ex.id,
            name: ex.name,
            category: ex.category,
            sets: sets
          });
          added++;
        }
      });

      this.app.saveWorkoutsForDate(date, todayWorkouts);
      this.app.tracker.render();
      alert(`🤖 '${dayKorean}요일' 루틴의 운동 ${added}개가 오늘 일지에 추가되었습니다!`);
      this.app.switchTab('tracker');
    }
  }

  // AI PT Routine Recommendation Engine
  generatePTRoutine() {
    const split = this.routineSplitSelect.value;
    const level = this.profileLevel.value;
    const goal = this.profileGoal.value;

    this.suggestedRoutineBox.style.display = 'block';
    this.suggestedRoutineList.innerHTML = '';
    
    // Choose custom sets & reps and weight factors based on user level and goal
    let setMultiplier = 3;
    let repCount = 10;
    let intensityText = '珥덇툒??;
    
    if (level === 'beginner') {
      setMultiplier = 3;
      repCount = 12;
      intensityText = '珥덇툒??(媛踰쇱슫 臾닿쾶 / 怨좊컲蹂?';
    } else if (level === 'intermediate') {
      setMultiplier = 4;
      repCount = 10;
      intensityText = '以묎툒??(?곸젙 以묐웾 / 怨좎옄洹?';
    } else {
      setMultiplier = 5;
      repCount = 8;
      intensityText = '?곴툒??(怨좎쨷??/ ?먯쭊??怨쇰???';
    }

    this.suggestedRoutineLevelTag.textContent = intensityText;
    
    // 臾댁옉???뷀뵆 ??異붿텧 ?ы띁 ?⑥닔
    const getRandomElements = (arr, num) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // ?쒖씠?꾩? ?대룞 ?깃꺽(MET)??醫낇빀??異붿쿇 以묐웾 ?앹꽦 ?ы띁
    const getRecommendWeight = (exId, category) => {
      if (category === 'cardio') {
        if (level === 'beginner') return 15;
        if (level === 'intermediate') return 25;
        return 35;
      }
      const met = MET_VALUES[exId] || 4.0;
      let baseWeight = 20;
      
      if (met >= 6.0) baseWeight = 40; // ?洹쇱쑁 蹂듯빀
      else if (met <= 3.5) baseWeight = 10; // ?뚭렐??怨좊┰
      
      if (exId === 'push_up' || exId === 'pull_up' || exId === 'dips' || exId === 'plank') {
        return 0;
      }
      
      let factor = 1.0;
      if (level === 'beginner') factor = 0.6;
      else if (level === 'advanced') factor = 1.4;
      
      let finalWeight = Math.round((baseWeight * factor) / 2.5) * 2.5;
      const offset = (Math.floor(Math.random() * 3) - 1) * 2.5; // -2.5, 0, +2.5 ?쒕뜡 ?ㅽ봽??      return Math.max(2.5, finalWeight + offset);
    };

    const routineExercises = [];

    if (split === 'push') {
      this.suggestedRoutineTitle.textContent = '媛??& ?쇰몢 (諛湲?6醫낅ぉ 異붿쿇 猷⑦떞)';
      
      // 媛???대룞 ?
      const chestPool = exercisesData.chest || [];
      // ?닿묠 ?꾨젅???
      const shoulderPressPool = (exercisesData.shoulders || []).filter(ex => ex.id.includes('press') || ex.id === 'overhead_press');
      // ?쇰몢 ?
      const tricepsPool = (exercisesData.arms || []).filter(ex => ex.id.includes('triceps') || ex.id.includes('kickback') || ex.id.includes('dips') || ex.id.includes('ext'));

      // 媛?댁뿉??3媛??좏깮
      getRandomElements(chestPool, 3).forEach(ex => routineExercises.push(ex));
      // ?닿묠 ?꾨젅?ㅼ뿉??1媛??좏깮
      getRandomElements(shoulderPressPool.length > 0 ? shoulderPressPool : exercisesData.shoulders, 1).forEach(ex => routineExercises.push(ex));
      // ?쇰몢?먯꽌 2媛??좏깮
      getRandomElements(tricepsPool.length > 0 ? tricepsPool : exercisesData.arms, 2).forEach(ex => routineExercises.push(ex));
    } 
    else if (split === 'pull') {
      this.suggestedRoutineTitle.textContent = '??& ?대몢 (?밴린湲?6醫낅ぉ 異붿쿇 猷⑦떞)';
      
      // ???대룞 ?
      const backPool = exercisesData.back || [];
      // ?대몢 ?
      const bicepsPool = (exercisesData.arms || []).filter(ex => ex.id.includes('biceps') || ex.id.includes('curl'));
      // 蹂듦렐 ?
      const absPool = exercisesData.abs || [];

      // ?깆뿉??3媛??좏깮
      getRandomElements(backPool, 3).forEach(ex => routineExercises.push(ex));
      // ?대몢?먯꽌 2媛??좏깮
      getRandomElements(bicepsPool.length > 0 ? bicepsPool : exercisesData.arms, 2).forEach(ex => routineExercises.push(ex));
      // 蹂듦렐?먯꽌 1媛??좏깮
      getRandomElements(absPool, 1).forEach(ex => routineExercises.push(ex));
    } 
    else {
      this.suggestedRoutineTitle.textContent = '?섏껜 & ?닿묠 (?섏껜/?닿묠 6醫낅ぉ 異붿쿇 猷⑦떞)';
      
      // ?섏껜 ?
      const legsPool = exercisesData.legs || [];
      // ?닿묠 ?덉씠利?湲고? ?
      const shoulderRaisePool = (exercisesData.shoulders || []).filter(ex => !ex.id.includes('press') && ex.id !== 'overhead_press');
      // ?좎궛???
      const cardioPool = exercisesData.cardio || [];

      // ?섏껜?먯꽌 3媛??좏깮
      getRandomElements(legsPool, 3).forEach(ex => routineExercises.push(ex));
      // ?닿묠 ?덉씠利덉뿉??2媛??좏깮
      getRandomElements(shoulderRaisePool.length > 0 ? shoulderRaisePool : exercisesData.shoulders, 2).forEach(ex => routineExercises.push(ex));
      // ?좎궛?뚯뿉??1媛??좏깮
      getRandomElements(cardioPool, 1).forEach(ex => routineExercises.push(ex));
    }

    // ?덉쇅 諛⑹뼱肄붾뱶
    if (routineExercises.length < 6) {
      const fallbackPool = [...exercisesData.chest, ...exercisesData.back, ...exercisesData.legs];
      getRandomElements(fallbackPool, 6 - routineExercises.length).forEach(ex => routineExercises.push(ex));
    }

    // Map sets
    this.currentSuggestedRoutine = routineExercises.map(ex => {
      const isCardio = ex.category === 'cardio';
      const sets = [];
      const recWeight = getRecommendWeight(ex.id, ex.category);
      
      if (isCardio) {
        const distance = Math.round((recWeight * 0.1) * 10) / 10;
        sets.push({ weight: recWeight, reps: distance, completed: false });
      } else {
        for (let i = 0; i < setMultiplier; i++) {
          sets.push({ weight: recWeight, reps: repCount, completed: false });
        }
      }
      return {
        id: ex.id,
        name: ex.name,
        category: ex.category || (isCardio ? 'cardio' : 'custom'),
        sets: sets
      };
    });

    // Render Preview List
    this.currentSuggestedRoutine.forEach((ex, idx) => {
      const el = document.createElement('div');
      el.style.display = 'flex';
      el.style.justify = 'space-between';
      el.style.alignItems = 'center';
      el.style.padding = '8px 12px';
      el.style.background = 'rgba(255,255,255,0.02)';
      el.style.border = '1px solid var(--border-color)';
      el.style.borderRadius = 'var(--radius-sm)';
      
      const isCardio = ex.category === 'cardio';
      const unitText = isCardio ? `${ex.sets[0].weight}遺?(${ex.sets[0].reps}km)` : `${ex.sets.length}?명듃 x ${ex.sets[0].weight}kg (${ex.sets[0].reps}??`;

      el.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:var(--color-primary); color:#080b10; font-size:0.7rem; font-weight:800;">${idx + 1}</span>
          <span style="font-weight:600; font-size:0.85rem;">${ex.name.split(' (')[0]}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted);">${unitText}</span>
      `;
      this.suggestedRoutineList.appendChild(el);
    });

    // Render Sequence Guide Tips
    let guideHTML = '';
    if (split === 'push') {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> 諛湲?Push) 猷⑦떞 異붿쿇 ?섑뻾 ?쒖꽌
        </div>
        <strong>1. ??媛???寃?(1~4?④퀎)</strong>: 媛??怨좎쨷?됱씠 媛?ν븳 ?ㅺ???<strong>踰ㅼ튂 ?꾨젅??/strong>? <strong>?명겢?쇱씤 ?꾨젅??/strong>瑜?1?쒖쐞濡?紐곗븘爾?媛??洹쇱쑁??媛뺥븳 臾닿쾶 怨쇰??섎? 媛?⑸땲?? ?댁뼱??怨좊┰ ?대룞??<strong>?????뚮씪??/strong>濡?媛???덉そ ?쇱씤??伊먯뼱吏쒓퀬, 留⑤じ <strong>?몄돩??/strong>?쇰줈 媛??洹쇱쑁???꾩쟾 ?덉쭊(Failure) ?곹깭濡??좊룄?⑸땲??<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. ???쇰몢 ?寃?(5~6?④퀎)</strong>: 媛??諛湲??덈젴 ??蹂댁“濡??쒖꽦?붾릺?덈뜕 ???ㅼそ ?쇰몢洹쇱쓣 <strong>?몃씪?댁뀎???몄돩?ㅼ슫</strong>怨?<strong>?ㅻ꺼 ?λ갚</strong> ?쒖쑝濡?怨좊┰ ?댁셿/?섏텞?섏뿬 留ㅻ걟???쇰몢 蹂쇰ⅷ??議곌컖?⑸땲??<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">?뮕 沅뚯옣 ?ы빆: ?명듃 媛??댁떇? <strong>90珥?/strong>, ?대룞 ?꾪솚 ?쒖뿉??<strong>2~3遺?/strong> 異⑸텇???명씉??怨좊Ⅴ怨??섎텇???먯＜ ??랬?섏꽭??</div>
      `;
    } else if (split === 'pull') {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> ?밴린湲?Pull) 猷⑦떞 異붿쿇 ?섑뻾 ?쒖꽌
        </div>
        <strong>1. ?????꾨㈃ ?먭레 (1~4?④퀎)</strong>: ?꾩떊 洹쇰젰怨?泥숈텛 湲곕┰ 肄붿뼱 洹쇱쑁 ?꾩껜瑜??숈썝?섎뒗 怨좎쨷??<strong>?곕뱶由ы봽??/strong>瑜?泥?踰덉㎏ 醫낅ぉ?쇰줈 諛곗튂??媛??留롮? 泥대젰???잛뒿?덈떎. ?ㅼ씠??<strong>??? ?ㅼ슫</strong>怨?<strong>諛붾꺼 濡쒖슦</strong>濡??깆쓽 ?볦씠/?먭퍡瑜?怨④퀬猷?癒뱀씤 ?? 愿묐같洹??앺뙋?뺤씤 留⑤じ <strong>???/strong>???쒓퀎 ?잛닔濡?留ㅻ떖???꾨즺?⑸땲??<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. ???대몢 ?寃?(5~6?④퀎)</strong>: ???밴린湲??숈옉 ???덉뿴???대몢洹쇱뿉 ?대몢 遊됱슦由щ? 留뚮뱶??<strong>?ㅻ꺼 諛붿씠?됱뒪 而?/strong>??癒뱀씠怨? <strong>?대㉧ 而?/strong>???듯빐 ?꾩셿洹쇨낵 ?대몢 諛붽묑履??먭퍡 ?쇱씤???꾩꽦?⑸땲??<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">?뮕 沅뚯옣 ?ы빆: ???대룞? 硫댁쟻???볦뼱 ?щ컯?섍? 留ㅼ슦 媛?뚮Ⅴ寃??ㅻ쫭?덈떎. ?명듃 媛?理쒖냼 <strong>2遺?/strong> ?됰꼮???댁떇?섏뿬 遺?곸쓣 諛⑹??섏꽭??</div>
      `;
    } else {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> ?섏껜 & ?닿묠 猷⑦떞 異붿쿇 ?섑뻾 ?쒖꽌
        </div>
        <strong>1. ???섏껜 ?洹쇱쑁 (1~3?④퀎)</strong>: ?꾩떊??媛??臾듭쭅???섏껜 湲곕뫁???ㅼ뒪由щ뒗 ?꾨━?⑥씠??<strong>?ㅼ옘??/strong>瑜?媛??而⑤뵒?섏씠 ?곗닔??泥섏쓬??硫붿씤?쇰줈 吏꾪뻾?⑸땲?? ?댁뼱??怨좎쨷??癒몄떊 <strong>?덇렇 ?꾨젅??/strong>瑜?諛잛븘 ??댁궗?먮? 議곗?怨? <strong>?덇렇 ?듭뒪?먯뀡</strong>?쇰줈 ??댁궗?먭렐??怨좊┰ 媛덈씪吏먯쓣 伊먯뼱吏??⑤젴?⑸땲??<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. ???닿묠 3D ?쇨컖洹?(4~6?④퀎)</strong>: ?꾨㈃ ?닿묠 ?꾨젅?꾩쓽 硫붿씤 ?ㅽ듃?앹뒪??<strong>?ㅻ쾭?ㅻ뱶 ?꾨젅??/strong>瑜?怨㏐쾶 諛?댁? ?? 痢〓㈃ ?쇨컖洹쇱쓣 ?κ?寃??ㅼ썙以?<strong>?ъ씠???덊꽣???덉씠利?/strong>, 洹몃━怨??낆껜?곸씤 ?꾨㈃ 留덈Т由щ? ?꾪븳 <strong>踰ㅽ듃 ?ㅻ쾭 ?덊꽣???덉씠利?/strong> ?쒖쑝濡??닿묠 3硫댁쓣 怨④퀬猷?梨꾩썙 ?꾩꽦?⑸땲??<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">?뮕 沅뚯옣 ?ы빆: 臾닿굅??臾대쫷/?붿텛 媛???섏껜 ?덈젴???ы븿?섎?濡? ?ㅼ옘?몄? ?덇렇?꾨젅???ъ씠?먮뒗 <strong>2~3遺?/strong> 異⑸텇??湲??명씉?쇰줈 愿???댁떇??痍⑦빐 ?뷀넻???덈갑?섏꽭??</div>
      `;
    }
    this.suggestedRoutineGuideBox.innerHTML = guideHTML;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  class VitalFitApp {
  constructor() {
    this.selectedDate = this.getTodayString();
    this.currentCalendarDate = new Date(); // 달력에서 표시할 연/월 기준
    
    this.state = {
      workouts: JSON.parse(localStorage.getItem('vitalfit_workouts')) || {}
    };

    // DOM Elements
    this.currentDateText = document.getElementById('current-date-text');
    this.dateSelectorTrigger = document.getElementById('date-selector-trigger');
    this.datePickerRow = document.getElementById('date-picker-row');
    this.calendarMonthLabel = document.getElementById('calendar-month-label');
    this.calendarGridContainer = document.getElementById('calendar-grid-container');
    
    // Initialize child modules
    this.tracker = new WorkoutTracker(this);
    this.guide = new BodyGuide(this);
    this.trainer = new TrainerAssistant(this);
    this.analytics = new AnalyticsDashboard(this);
    this.timer = new SmartRestTimer(this);
    this.prDetector = new PRDetector(this);
    this.stopwatch = new WorkoutStopwatch(this);

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
      if (!isVisible) {
        this.datePickerRow.style.display = 'flex';
        this.renderCalendar();
      } else {
        this.datePickerRow.style.display = 'none';
      }
    });

    document.getElementById('prev-month-btn').addEventListener('click', () => this.adjustMonth(-1));
    document.getElementById('next-month-btn').addEventListener('click', () => this.adjustMonth(1));
    
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
    } else if (tabId === 'analytics') {
      this.analytics.updateDashboard();
    }
  }

  adjustMonth(delta) {
    this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() + delta);
    this.renderCalendar();
  }

  renderCalendar() {
    const year = this.currentCalendarDate.getFullYear();
    const month = this.currentCalendarDate.getMonth(); // 0-11
    
    this.calendarMonthLabel.textContent = `${year}년 ${String(month + 1).padStart(2, '0')}월`;
    
    this.calendarGridContainer.innerHTML = '';
    
    // Render week headers (일 ~ 토)
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];
    weeks.forEach(w => {
      const header = document.createElement('div');
      header.className = 'calendar-day-header';
      header.textContent = w;
      this.calendarGridContainer.appendChild(header);
    });

    // Month details
    const firstDay = new Date(year, month, 1).getDay(); // 요일 (0-6)
    const totalDays = new Date(year, month + 1, 0).getDate(); // 총 일수

    // Render empty space for offset
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'calendar-day-cell empty';
      this.calendarGridContainer.appendChild(emptyCell);
    }

    // Render days
    const todayStr = this.getTodayString();
    for (let d = 1; d <= totalDays; d++) {
      const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      
      const cell = document.createElement('div');
      cell.className = 'calendar-day-cell';
      if (dayStr === this.selectedDate) {
        cell.classList.add('selected-day');
      }
      if (dayStr === todayStr) {
        cell.classList.add('today-day');
      }

      cell.innerHTML = `
        <span class="calendar-day-num">${d}</span>
        <div class="calendar-dots-container" id="dots-${dayStr}"></div>
      `;

      // Click to select date
      cell.addEventListener('click', () => {
        this.selectedDate = dayStr;
        this.updateDateUI();
        this.datePickerRow.style.display = 'none';
        this.tracker.render();
      });

      this.calendarGridContainer.appendChild(cell);

      // Render dots for workouts on this day
      const dotsContainer = cell.querySelector(`#dots-${dayStr}`);
      const dayWorkouts = this.getWorkoutsForDate(dayStr);
      const completedWorkouts = dayWorkouts.filter(w => w.sets && w.sets.some(s => s.completed));
      if (completedWorkouts.length > 0) {
        // Collect unique categories
        const categories = [...new Set(completedWorkouts.map(w => w.category))];
        categories.forEach(cat => {
          const dot = document.createElement('div');
          dot.className = `calendar-dot dot-${cat}`;
          dotsContainer.appendChild(dot);
        });
      }
    }
  }

  updateDateUI() {
    this.currentDateText.textContent = this.selectedDate;
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
}

// ==========================================
// 6. PREMIUM: VISUAL ANALYTICS DASHBOARD
// ==========================================
class AnalyticsDashboard {
  constructor(app) {
    this.app = app;
    this.volumeChart = null;
    this.partRatioChart = null;
    this.prTbody = document.getElementById('pr-records-tbody');
  }

  updateDashboard() {
    this.renderVolumeChart();
    this.renderRatioChart();
    this.renderPRTable();
    this.renderStreakAndHeatmap();
    this.renderSBDStrength();
  }

  // Render weekly volume trend line chart
  renderVolumeChart() {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded. Skipping line chart rendering.');
      return;
    }
    const ctx = document.getElementById('volumeChart').getContext('2d');
    if (this.volumeChart) {
      this.volumeChart.destroy();
    }

    // Get last 4 weeks labels & calculated workout volume
    const dataLabels = [];
    const volumeData = [];

    const today = new Date();
    for (let i = 3; i >= 0; i--) {
      // Calculate start and end date of the week
      const startOffset = i * 7 + today.getDay(); 
      const start = new Date(today);
      start.setDate(today.getDate() - startOffset);
      
      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      const label = `${start.getMonth() + 1}/${start.getDate()}~${end.getMonth() + 1}/${end.getDate()}`;
      dataLabels.push(label);

      // Accumulate volume in this week range
      let weeklyTotal = 0;
      for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
        const workouts = this.app.getWorkoutsForDate(dateStr);
        workouts.forEach(w => {
          w.sets.forEach(s => {
            if (s.completed) {
              weeklyTotal += (s.weight * s.reps);
            }
          });
        });
      }
      volumeData.push(weeklyTotal);
    }

    this.volumeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: '주간 훈련 볼륨 (kg)',
          data: volumeData,
          borderColor: '#10b981', // Neon Green
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: '#3b82f6',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
        }
      }
    });
  }

  // Render body part ratio doughnut chart
  renderRatioChart() {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded. Skipping doughnut chart rendering.');
      return;
    }
    const ctx = document.getElementById('partRatioChart').getContext('2d');
    if (this.partRatioChart) {
      this.partRatioChart.destroy();
    }

    const categories = ['chest', 'back', 'shoulders', 'legs', 'arms', 'abs', 'custom'];
    const labelMap = { chest: '가슴', back: '등', shoulders: '어깨', legs: '하체', arms: '팔', abs: '복근', custom: '기타' };
    const counts = { chest: 0, back: 0, shoulders: 0, legs: 0, arms: 0, abs: 0, custom: 0 };

    // Accumulate all historical workouts
    const allWorkouts = this.app.state.workouts;
    Object.keys(allWorkouts).forEach(date => {
      allWorkouts[date].forEach(w => {
        w.sets.forEach(s => {
          if (s.completed) {
            const cat = w.category || 'custom';
            if (counts[cat] !== undefined) {
              counts[cat]++;
            } else {
              counts['custom']++;
            }
          }
        });
      });
    });

    const datasetLabels = categories.map(cat => labelMap[cat]);
    const datasetValues = categories.map(cat => counts[cat]);
    const backgroundColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#6b7280'];

    // If no data, render empty state indicator
    const hasData = datasetValues.some(v => v > 0);
    const chartDataValues = hasData ? datasetValues : [1];
    const chartDataColors = hasData ? backgroundColors : ['rgba(255,255,255,0.05)'];
    const chartLabels = hasData ? datasetLabels : ['훈련 기록 없음'];

    this.partRatioChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: chartLabels,
        datasets: [{
          data: chartDataValues,
          backgroundColor: chartDataColors,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.4)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#94a3b8', boxWidth: 12, font: { size: 10 } }
          }
        },
        cutout: '65%'
      }
    });
  }

  // Populate Personal Record (PR) table
  renderPRTable() {
    const prs = JSON.parse(localStorage.getItem('vitalfit_pr_records')) || {};
    const keys = Object.keys(prs);
    
    if (keys.length === 0) {
      this.prTbody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; padding: 24px; color: var(--text-muted);">아직 수립된 PR이 없습니다. 운동 기록을 시작해 보세요!</td>
        </tr>
      `;
      return;
    }

    this.prTbody.innerHTML = '';
    
    // Sort PRs by exercise name
    keys.sort().forEach(exId => {
      const record = prs[exId];
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="padding: 10px 4px; font-weight: 600; color: var(--text-main);">${record.name.split(' (')[0]}</td>
        <td style="padding: 10px 4px; text-align: right; font-weight: 700; color: #cbd5e1;">${record.weight} kg x ${record.reps}회</td>
        <td style="padding: 10px 4px; text-align: right; font-weight: 800; color: var(--color-primary);">${record.oneRepMax.toFixed(1)} kg</td>
      `;
      this.prTbody.appendChild(row);
    });
  }

  // Render training streak and GitHub-style 12-week attendance contribution grid
  renderStreakAndHeatmap() {
    const streakDaysBadge = document.getElementById('streak-days-badge');
    const streakCheerMessage = document.getElementById('streak-cheer-message');
    const heatmapContainer = document.getElementById('attendance-heatmap-container');
    
    if (!streakDaysBadge || !heatmapContainer) return;
    
    // 1. Calculate continuous streak
    const allWorkouts = this.app.state.workouts; 
    const dates = Object.keys(allWorkouts).filter(d => {
      return allWorkouts[d].some(w => w.sets && w.sets.some(s => s.completed));
    }).sort();

    let streak = 0;
    const todayStr = this.app.getTodayString();
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
    
    const hasToday = dates.includes(todayStr);
    const hasYesterday = dates.includes(yesterdayStr);
    
    if (hasToday || hasYesterday) {
      let currentCheckDate = hasToday ? new Date() : yesterday;
      
      while (true) {
        const checkStr = `${currentCheckDate.getFullYear()}-${String(currentCheckDate.getMonth() + 1).padStart(2, '0')}-${String(currentCheckDate.getDate()).padStart(2, '0')}`;
        if (dates.includes(checkStr)) {
          streak++;
          currentCheckDate.setDate(currentCheckDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    streakDaysBadge.textContent = `연속 ${streak}일차`;
    
    if (streak === 0) {
      streakCheerMessage.textContent = '아직 운동 기록이 없습니다. 오늘부터 첫 운동 잔디를 심어보세요!';
    } else if (streak < 3) {
      streakCheerMessage.textContent = `🔥 대단한 시작입니다! ${streak}일 연속 운동 중입니다. 3일차 열정까지 달릴까요?`;
    } else if (streak < 7) {
      streakCheerMessage.textContent = `⚡ 벌써 ${streak}일째 쇠질 중! 근성 성장이 폭발하고 있습니다. 조금만 더 해내세요!`;
    } else {
      streakCheerMessage.textContent = `👑 전설적인 꾸준함! 무려 ${streak}일 연속 근비대 궤도에 올랐습니다. 최고의 트레이너가 격하게 칭찬합니다!`;
    }

    // 2. Render Heatmap (7 rows x 12 columns = 84 cells)
    heatmapContainer.innerHTML = '';
    
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + (6 - dayOfWeek)); 
    
    const heatmapDates = [];
    for (let i = 83; i >= 0; i--) {
      const d = new Date(endDate);
      d.setDate(endDate.getDate() - i);
      heatmapDates.push(d);
    }
    
    heatmapDates.forEach(date => {
      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      const dayWorkouts = allWorkouts[dateStr] || [];
      
      let completedSets = 0;
      dayWorkouts.forEach(w => {
        if (w.sets) {
          w.sets.forEach(s => {
            if (s.completed) completedSets++;
          });
        }
      });
      
      const cell = document.createElement('div');
      cell.className = 'grass-cell';
      
      let levelClass = 'grass-level-0';
      if (completedSets >= 1 && completedSets <= 3) {
        levelClass = 'grass-level-1';
      } else if (completedSets >= 4 && completedSets <= 8) {
        levelClass = 'grass-level-2';
      } else if (completedSets >= 9) {
        levelClass = 'grass-level-3';
      }
      
      cell.classList.add(levelClass);
      cell.setAttribute('title', `${dateStr}: ${completedSets}세트 완료`);
      
      cell.addEventListener('click', () => {
        this.app.selectedDate = dateStr;
        this.app.updateDateUI();
        this.app.tracker.render();
        this.app.switchTab('tracker');
      });
      
      heatmapContainer.appendChild(cell);
    });
  }

  // Calculate SBD predicted 1RM totals and render strength level badges
  renderSBDStrength() {
    const squatVal = document.getElementById('sbd-squat-val');
    const benchVal = document.getElementById('sbd-bench-val');
    const deadVal = document.getElementById('sbd-dead-val');
    const totalVal = document.getElementById('sbd-total-val');
    const ratioVal = document.getElementById('sbd-ratio-val');
    const levelBadge = document.getElementById('sbd-level-badge');
    const gaugeBar = document.getElementById('sbd-gauge-bar');
    
    if (!squatVal || !benchVal || !deadVal || !totalVal || !ratioVal || !levelBadge || !gaugeBar) return;
    
    const prs = JSON.parse(localStorage.getItem('vitalfit_pr_records')) || {};
    
    const squat1RM = prs['squat'] ? prs['squat'].oneRepMax : 0;
    const bench1RM = prs['bench_press'] ? prs['bench_press'].oneRepMax : 0;
    const dead1RM = prs['deadlift'] ? prs['deadlift'].oneRepMax : 0;
    
    const totalSBD = squat1RM + bench1RM + dead1RM;
    
    squatVal.textContent = `${Math.round(squat1RM)} kg`;
    benchVal.textContent = `${Math.round(bench1RM)} kg`;
    deadVal.textContent = `${Math.round(dead1RM)} kg`;
    totalVal.textContent = `${Math.round(totalSBD)} kg`;
    
    const userProfile = JSON.parse(localStorage.getItem('vitalfit_user_profile')) || {};
    const bodyWeight = parseFloat(userProfile.profileWeight) || 70;
    const ratio = bodyWeight > 0 ? (totalSBD / bodyWeight).toFixed(1) : '0.0';
    ratioVal.textContent = `체중 대비: ${ratio}배`;
    
    let badgeText = '입문자 (White Belt)';
    let badgeClass = 'badge-white';
    
    if (totalSBD >= 150 && totalSBD < 250) {
      badgeText = '헬린이 (Yellow Belt)';
      badgeClass = 'badge-yellow';
    } else if (totalSBD >= 250 && totalSBD < 380) {
      badgeText = '블루칩 (Blue Belt)';
      badgeClass = 'badge-blue';
    } else if (totalSBD >= 380 && totalSBD < 480) {
      badgeText = '스트롱맨 (Red Belt)';
      badgeClass = 'badge-red';
    } else if (totalSBD >= 480) {
      badgeText = '인간 크레인 (Monster)';
      badgeClass = 'badge-black';
    }
    
    levelBadge.textContent = badgeText;
    levelBadge.className = `strength-badge-style ${badgeClass}`;
    
    const pct = Math.min(100, (totalSBD / 600) * 100);
    gaugeBar.style.width = `${pct}%`;
  }
}

// ==========================================
// 7. PREMIUM: SMART REST TIMER WIDGET
// ==========================================
class SmartRestTimer {
  constructor(app) {
    this.app = app;
    this.widget = document.getElementById('rest-timer-widget');
    this.timeDisplay = document.getElementById('timer-time-display');
    this.progressBar = document.getElementById('timer-progress-bar');
    this.closeBtn = document.getElementById('timer-close-btn');
    
    this.btnMinus = document.getElementById('timer-adjust-minus');
    this.btnPlus = document.getElementById('timer-adjust-plus');
    this.btnPreset60 = document.getElementById('timer-preset-60');
    this.btnPreset90 = document.getElementById('timer-preset-90');
    this.btnPreset120 = document.getElementById('timer-preset-120');

    this.timerInterval = null;
    this.totalDuration = 90; // Default 90 seconds
    this.remainingTime = 90;

    this.audioCtx = null; // Lazy loaded Web Audio API

    this.initEvents();
  }

  initEvents() {
    this.closeBtn.addEventListener('click', () => this.hide());
    
    this.btnMinus.addEventListener('click', () => this.adjustTime(-10));
    this.btnPlus.addEventListener('click', () => this.adjustTime(10));
    
    this.btnPreset60.addEventListener('click', () => this.resetPreset(60, this.btnPreset60));
    this.btnPreset90.addEventListener('click', () => this.resetPreset(90, this.btnPreset90));
    this.btnPreset120.addEventListener('click', () => this.resetPreset(120, this.btnPreset120));
  }

  start() {
    this.widget.style.display = 'flex';
    this.remainingTime = this.totalDuration;
    
    clearInterval(this.timerInterval);
    this.updateUI();

    this.timerInterval = setInterval(() => {
      this.remainingTime--;
      this.updateUI();

      if (this.remainingTime <= 0) {
        this.triggerAlarm();
        this.hide();
      }
    }, 1000);
  }

  adjustTime(seconds) {
    this.remainingTime = Math.max(0, this.remainingTime + seconds);
    // Adjust duration if exceeded
    if (this.remainingTime > this.totalDuration) {
      this.totalDuration = this.remainingTime;
    }
    this.updateUI();
  }

  resetPreset(seconds, activeBtn) {
    // Style presets active
    [this.btnPreset60, this.btnPreset90, this.btnPreset120].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
    
    this.totalDuration = seconds;
    this.start();
  }

  updateUI() {
    this.timeDisplay.textContent = this.remainingTime;
    
    // Circule Dashoffset logic: 226 is dasharray size
    const progressFactor = Math.min(1, Math.max(0, this.remainingTime / this.totalDuration));
    const offset = 226 - (progressFactor * 226);
    this.progressBar.style.strokeDashoffset = offset;
  }

  hide() {
    clearInterval(this.timerInterval);
    this.widget.style.display = 'none';
  }

  // Synthesize warning beep sound using Web Audio API
  triggerAlarm() {
    try {
      // 1. Play synthesize Audio Beep
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      
      const playBeep = (freq, duration, delay = 0) => {
        setTimeout(() => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
          
          gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
          
          osc.start();
          osc.stop(this.audioCtx.currentTime + duration);
        }, delay * 1000);
      };

      // Play double high beep alert sound
      playBeep(880, 0.25, 0);
      playBeep(880, 0.25, 0.35);

      // 2. Play vibration if supported
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }
    } catch (err) {
      console.warn('Audio feedback failed:', err);
    }
  }
}

// ==========================================
// 8. PREMIUM: PERSONAL RECORD (PR) DETECTOR
// ==========================================
class PRDetector {
  constructor(app) {
    this.app = app;
    this.popup = document.getElementById('pr-celebration-popup');
    this.prExerciseName = document.getElementById('pr-exercise-name');
    this.prRecordValue = document.getElementById('pr-record-value');
    this.prCalculated1rm = document.getElementById('pr-calculated-1rm');
    this.confirmBtn = document.getElementById('pr-confirm-btn');

    this.confirmBtn.addEventListener('click', () => {
      this.popup.style.display = 'none';
    });
  }

  checkNewPR(workout, set) {
    if (set.weight <= 0 || set.reps <= 0) return;

    // 1RM Formula (Mifflin/Epley): weight * (1 + reps/30)
    const current1RM = set.weight * (1 + set.reps / 30);
    const prRecords = JSON.parse(localStorage.getItem('vitalfit_pr_records')) || {};

    const existingPR = prRecords[workout.id];

    // Check if new PR achieved (must exceed previous 1RM by at least 0.1kg)
    if (!existingPR || current1RM > existingPR.oneRepMax + 0.1) {
      // 1. Save new PR
      prRecords[workout.id] = {
        name: workout.name,
        weight: set.weight,
        reps: set.reps,
        oneRepMax: current1RM,
        date: this.app.selectedDate
      };
      localStorage.setItem('vitalfit_pr_records', JSON.stringify(prRecords));

      // 2. Trigger Confetti!
      this.triggerConfetti();

      // 3. Show Celebration Popup
      this.showCelebration(workout.name, set.weight, set.reps, current1RM);
    }
  }

  showCelebration(name, weight, reps, oneRepMax) {
    this.prExerciseName.textContent = name.split(' (')[0];
    this.prRecordValue.textContent = `${weight} kg x ${reps}회`;
    this.prCalculated1rm.textContent = `예상 1RM: ${oneRepMax.toFixed(1)} kg`;
    this.popup.style.display = 'flex';
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      // Confetti fire!
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        // Fire confetti from two corners of the screen
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }
}

// ==========================================
// 9. PREMIUM: WORKOUT ACTIVE STOPWATCH
// ==========================================
class WorkoutStopwatch {
  constructor(app) {
    this.app = app;
    this.displayTime = document.getElementById('stopwatch-display-time');
    this.startBtn = document.getElementById('stopwatch-start-btn');
    this.finishBtn = document.getElementById('stopwatch-finish-btn');
    this.iconStatus = document.getElementById('stopwatch-icon-status');

    this.timerInterval = null;
    this.startTime = null; // Timestamp
    
    this.init();
  }

  init() {
    this.startBtn.addEventListener('click', () => this.start());
    this.finishBtn.addEventListener('click', () => this.finish());

    // Recover timer if it was active
    const savedStart = localStorage.getItem('vitalfit_active_stopwatch_start');
    if (savedStart) {
      this.startTime = parseInt(savedStart);
      this.resume();
    } else {
      this.updateDisplay(0);
    }
  }

  start() {
    this.startTime = Date.now();
    localStorage.setItem('vitalfit_active_stopwatch_start', this.startTime.toString());
    
    this.resume();
  }

  resume() {
    this.startBtn.style.display = 'none';
    this.finishBtn.style.display = 'inline-block';
    
    // UI update
    this.iconStatus.className = 'pulse-green';
    this.iconStatus.setAttribute('data-lucide', 'circle-stop');
    this.iconStatus.style.color = '#ef4444'; // Red for recording
    if (window.lucide) window.lucide.createIcons();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      const elapsedMs = Date.now() - this.startTime;
      this.updateDisplay(elapsedMs);
    }, 1000);
    
    // Initial display update
    this.updateDisplay(Date.now() - this.startTime);
  }

  finish() {
    if (!this.startTime) return;
    
    const elapsedMs = Date.now() - this.startTime;
    clearInterval(this.timerInterval);
    
    localStorage.removeItem('vitalfit_active_stopwatch_start');
    
    this.startBtn.style.display = 'inline-block';
    this.finishBtn.style.display = 'none';
    
    this.iconStatus.className = '';
    this.iconStatus.setAttribute('data-lucide', 'play');
    this.iconStatus.style.color = 'var(--color-primary)';
    if (window.lucide) window.lucide.createIcons();
    
    const elapsedSecs = Math.floor(elapsedMs / 1000);
    const mins = Math.floor(elapsedSecs / 60);
    const secs = elapsedSecs % 60;
    const timeStr = `${mins}분 ${secs}초`;

    // Save duration info into current day's log
    const date = this.app.selectedDate;
    const durations = JSON.parse(localStorage.getItem('vitalfit_workouts_durations')) || {};
    durations[date] = timeStr;
    localStorage.setItem('vitalfit_workouts_durations', JSON.stringify(durations));
    
    this.startTime = null;
    this.updateDisplay(0);

    // Trigger celebration Confetti!
    if (this.app.prDetector) {
      this.app.prDetector.triggerConfetti();
    }
    
    alert(`🎉 수고하셨습니다!\n오늘의 운동 소요시간은 ${timeStr} 입니다. 기록이 안전하게 저장되었습니다.`);
  }

  updateDisplay(ms) {
    const totalSecs = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    
    this.displayTime.textContent = `${hours}:${mins}:${secs}`;
  }
}

// Instantiate the app
window.addEventListener('DOMContentLoaded', () => {
  window.app = new VitalFitApp();
});
