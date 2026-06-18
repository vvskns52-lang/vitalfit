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
      description: "상체 운동의 대명사로, 가슴 전체의 두께와 근력을 올려주는 최고의 복합 다관절 운동입니다.",
      steps: [
        "벤치에 누워 발을 바닥에 밀착시키고 허리는 아치형태를 만듭니다.",
        "바벨을 어깨너비보다 약간 넓게 잡고 안전하게 들어 올립니다.",
        "바벨을 가슴 중앙 위치로 천천히 통제하며 내립니다.",
        "가슴 근육의 힘으로 수직 방향으로 밀어 올립니다."
      ],
      tips: [
        "손목이 뒤로 꺾이지 않도록 바벨을 쥔 손목을 곧게 세우세요.",
        "어깨 관절을 보호하기 위해 날개뼈를 모아 벤치에 고정(숄더패킹)해야 합니다."
      ]
    },
    {
      id: "incline_db_press",
      name: "인클라인 덤벨 프레스 (Incline Dumbbell Press)",
      image: "images/incline_db_press.png",
      target: "가슴 상부, 전면 삼각근, 삼두근",
      description: "윗가슴 라인을 발달시켜 꽉 찬 가슴 모양을 가꾸고, 양팔의 균형 있는 성장을 돕습니다.",
      steps: [
        "경사 벤치(30~45도)에 앉아 덤벨을 무릎 위에 올립니다.",
        "누우면서 덤벨을 어깨 옆 위치로 들어 올려 준비합니다.",
        "윗가슴의 수축을 느끼며 덤벨을 수직 위로 강하게 밀어 올립니다.",
        "덤벨이 바깥으로 벌어지지 않게 주의하며 천천히 내립니다."
      ],
      tips: [
        "덤벨을 내릴 때 팔꿈치가 어깨보다 아래로 내려가지 않도록 유의하세요.",
        "날개뼈를 단단히 고정하고 가슴을 들어줍니다."
      ]
    },
    {
      id: "chest_fly",
      name: "덤벨 플라이 (Dumbbell Fly)",
      image: "images/chest_fly.png",
      target: "가슴 안쪽, 대흉근 바깥쪽 라인",
      description: "가슴을 모아주는 고립 운동으로, 프레스 운동 후에 수행하여 가슴 안쪽 결을 다듬는 데 좋습니다.",
      steps: [
        "플랫 벤치에 누워 덤벨을 가슴 위로 곧게 뻗어줍니다.",
        "팔꿈치를 살짝 굽혀 고정한 상태로, 큰 안아주는 느낌으로 넓게 벌려 내립니다.",
        "가슴 근육이 충분히 늘어난 후, 다시 안아주듯 덤벨을 모아줍니다."
      ],
      tips: [
        "어깨가 위로 들려 승모근이 개입되지 않도록 아래로 내려 벤치에 밀착시키세요.",
        "덤벨이 서로 부딪혀 자극이 풀리지 않도록 정점에서 살짝 띄워줍니다."
      ]
    },
    {
      id: "dips",
      name: "딥스 (Dips)",
      image: "images/dips.png",
      target: "가슴 하부, 삼두근, 전면 삼각근",
      description: "체중을 이용하여 가슴 아래쪽 라인을 선명하게 조각하고 상체 전반의 근력을 키웁니다.",
      steps: [
        "평행봉을 잡고 팔을 뻗어 몸을 지탱합니다.",
        "상체를 살짝 앞으로 숙인 상태를 유지하며 천천히 몸을 내립니다.",
        "가슴 하부의 팽팽한 자극을 느끼며 팔을 뻗어 원래 자세로 돌아옵니다."
      ],
      tips: [
        "상체를 바로 세우면 삼두근에 자극이 쏠리므로, 가슴 타겟을 위해선 앞으로 숙여야 합니다.",
        "어깨 관절에 무리가 가지 않도록 팔꿈치 각도가 90도 이하로 무리하게 내려가지 않게 조절하세요."
      ]
    },
    {
      id: "pec_deck_fly",
      name: "펙 덱 플라이 (Pec Deck Fly)",
      image: "images/pec_deck_fly.png",
      target: "가슴 안쪽 (대흉근 내측)",
      description: "머신을 사용하여 안전하게 궤도를 고정하고 가슴 안쪽 라인 집중 타겟팅이 가능한 수축 운동입니다.",
      steps: [
        "패드에 등을 대고 엉덩이를 깊숙이 밀착시켜 앉습니다.",
        "손잡이를 잡고 팔꿈치를 살짝 구부려 패드 높이에 맞춥니다.",
        "가슴의 힘으로 손잡이를 앞으로 모아 쥐어짜듯 수축합니다.",
        "천천히 저항을 느끼며 처음 자세로 돌아갑니다."
      ],
      tips: [
        "수축 시 가슴을 앞으로 내밀며 어깨가 앞으로 말리지 않도록 주의하세요.",
        "이완 시 팔만 뒤로 가지 않고 가슴 전체가 열리도록 집중합니다."
      ]
    },
    {
      id: "push_up",
      name: "푸쉬업 (Push Up)",
      image: "images/push_up.png",
      target: "가슴 전체, 삼두근, 전면 삼각근, 코어",
      description: "가장 기본적인 맨몸 운동으로 상체의 협응력과 가슴 근력의 근지구력을 탄탄하게 만들어 줍니다.",
      steps: [
        "손을 어깨너비보다 넓게 바닥에 짚고 엎드립니다.",
        "머리부터 발끝까지 일직선이 되도록 코어를 단단히 조여줍니다.",
        "가슴이 바닥에 닿을 정도로 천천히 내려갔다가 다시 밀어 올라옵니다."
      ],
      tips: [
        "엉덩이가 밑으로 처지거나 위로 들리지 않게 주의하세요.",
        "날개뼈가 으쓱하며 어깨가 귀에 가까워지지 않도록 하강 고정합니다."
      ]
    },
    {
      id: "cable_crossover",
      name: "케이블 크로스오버 (Cable Crossover)",
      image: "images/cable_crossover.png",
      target: "가슴 하부 및 안쪽",
      description: "케이블을 사용하여 가슴 아래와 중앙에 지속적이고 일정한 장력을 주어 가슴 안쪽 윤곽을 완성합니다.",
      steps: [
        "양쪽 도르래를 위쪽에 세팅하고 손잡이를 잡은 후 한 걸음 앞으로 나옵니다.",
        "상체를 살짝 앞으로 숙이고 가슴 힘으로 손잡이를 아래쪽 앞 방향으로 모아줍니다.",
        "가슴 중앙을 쥐어짜 준 후, 다시 긴장을 느끼며 천천히 돌려보냅니다."
      ],
      tips: [
        "케이블 장력이 끝까지 유지될 수 있도록 이완할 때 완전히 풀려버리지 않게 제어해야 합니다.",
        "등이 굽지 않게 가슴을 열고 동작을 제어하세요."
      ]
    }
  ],
  back: [
    {
      id: "deadlift",
      name: "데드리프트 (Deadlift)",
      image: "images/deadlift.png",
      target: "등 전체 (광배근, 척추기립근), 대둔근, 햄스트링",
      description: "전신 근육 대부분을 동원하여 상하체의 기둥을 강화하고 엄청난 두께의 등을 만드는 강력한 운동입니다.",
      steps: [
        "발을 골반 너비로 벌리고 서서 정강이가 바벨에 가깝게 섭니다.",
        "허리를 곧게 편 상태로 엉덩이를 뒤로 빼며 바벨을 어깨너비로 잡습니다.",
        "발바닥으로 바닥을 강하게 밀며 정강이, 허벅지를 쓸어내리듯 바벨을 들어 올립니다.",
        "정상 궤도에서 엉덩이를 강하게 수축한 후 역순으로 안전하게 내려놓습니다."
      ],
      tips: [
        "동작 중에 등이나 허리가 둥글게 굽으면 디스크 부상 위험이 극도로 높아지니 척추 중립을 절대 사수하세요.",
        "복압을 단단히 잡고 가슴을 들어 척추를 고정해야 합니다."
      ]
    },
    {
      id: "lat_pulldown",
      name: "랫 풀 다운 (Lat Pulldown)",
      image: "images/lat_pulldown.png",
      target: "광배근 (등 넓이), 대원근, 이두근",
      description: "초보자도 안전하게 넓은 프레임의 V자형 등(광배근)을 조각할 수 있는 최고의 케이블 머신 운동입니다.",
      steps: [
        "허벅지 패드를 체형에 맞추고 바를 어깨너비보다 넓게 오버그립으로 잡습니다.",
        "상체를 살짝 뒤로 기울이며 가슴을 열고 바를 쇄골 방향으로 당깁니다.",
        "날개뼈를 아래로 접어내리듯 광배근을 강하게 수축합니다.",
        "등 근육의 버티는 저항을 느끼며 바를 천천히 위로 보내줍니다."
      ],
      tips: [
        "팔 힘으로만 당기지 말고 팔꿈치를 옆구리 밑으로 꽂아 넣는 느낌으로 광배근을 동원하세요.",
        "바가 올라갈 때 어깨가 으쓱 올라가지 않게 날개뼈를 고정해 두어야 합니다."
      ]
    },
    {
      id: "bent_over_row",
      name: "바벨 로우 (Bent Over Row)",
      image: "images/bent_over_row.png",
      target: "등 전체 (광배근 중하부, 승모근 중하부, 능형근)",
      description: "허리를 숙이고 바벨을 당겨 등 전체의 두께감과 묵직한 볼륨을 발달시키는 핵심 프리웨이트 로우입니다.",
      steps: [
        "발을 골반 너비로 서서 바벨을 잡고 척추 중립 상태에서 데드리프트 자세로 상체를 숙입니다.",
        "바를 허벅지 방향을 따라 아랫배(배꼽 주변)로 당겨 줍니다.",
        "등 한가운데 날개뼈가 만나는 느낌으로 강하게 쪼여줍니다.",
        "등이 늘어나는 느낌을 받으며 바를 제어하며 내려줍니다."
      ],
      tips: [
        "상체를 숙인 각도가 너무 서게 되면 승모근 상부 개입이 많아지므로 각도를 유지하세요.",
        "동작 시 허리가 굽지 않도록 엉덩이를 확실히 뒤로 빼고 코어를 긴장시킵니다."
      ]
    },
    {
      id: "pull_up",
      name: "풀업 (Pull Up)",
      image: "images/pull_up.png",
      target: "광배근, 대원근, 이두근, 등 상부",
      description: "자기 체중을 당겨 올려 광배근 프레임을 드라마틱하게 넓히고 상체 근력을 기르는 맨몸 등의 끝판왕입니다.",
      steps: [
        "철봉을 어깨너비보다 넓게 잡고 매달립니다.",
        "날개뼈를 모아 내리며(숄더 패킹) 가슴을 바 방향으로 끌어당기며 올라갑니다.",
        "쇄골이 철봉에 닿을 정도로 올라간 후, 천천히 광배근으로 매달려 내립니다."
      ],
      tips: [
        "완전 매달린 상태에서 어깨가 뽑히지 않도록 날개뼈를 꽉 잡아 고정해 두어야 부상을 방지합니다.",
        "올라갈 때 다리를 흔들거나 반동을 최소화하여 등 근육의 고립 자극을 추구하세요."
      ]
    },
    {
      id: "seated_cable_row",
      name: "시티드 케이블 로우 (Seated Cable Row)",
      image: "images/seated_cable_row.png",
      target: "광배근 중부, 능형근, 중하부 승모근",
      description: "케이블 머신에 앉아 등 중앙부를 안으로 쪼여 입체적이고 두툼한 등을 다듬는 수평 로우 운동입니다.",
      steps: [
        "발판에 발을 견고히 대고 무릎을 살짝 굽혀 척추를 세워 앉습니다.",
        "그립을 잡고 어깨를 내리며 아랫배 쪽으로 잡아당깁니다.",
        "등을 완전히 접어 날개뼈 사이를 쥐어짜 줍니다.",
        "등이 길게 펴지는 수축 이완을 느끼며 팔을 제어하여 복귀합니다."
      ],
      tips: [
        "몸을 앞뒤로 과도하게 흔드는 반동을 쓰면 등보다 허리 하부에 가해지는 데미지가 커지니 고정하세요.",
        "어깨가 올라가지 않게 끌어내려 가슴을 편 상태를 사수합니다."
      ]
    },
    {
      id: "one_arm_db_row",
      name: "원 암 덤벨 로우 (One Arm Dumbbell Row)",
      image: "images/one_arm_db_row.png",
      target: "광배근 하부, 광배근 내측, 능형근",
      description: "한 손으로 동작하여 등 근육의 가동 범위를 최대로 넓히고, 허리 부담 없이 고중량 자극을 줄 수 있습니다.",
      steps: [
        "벤치에 한쪽 무릎과 손을 대고 상체를 바닥과 평행하게 만듭니다.",
        "다른 손으로 덤벨을 쥐고 팔꿈치를 옆구리 뒤로 길게 당겨 올립니다.",
        "광배근 하부의 확실한 쥐어짜짐을 느끼며 정점에 도달한 뒤 천천히 내립니다."
      ],
      tips: [
        "골반이나 상체가 회전하며 덤벨을 비틀어 올리지 않게 수평을 세밀하게 고정해 두세요.",
        "팔의 힘이 아니라 등의 당기는 결에만 정신을 집중합니다."
      ]
    },
    {
      id: "tbar_row",
      name: "티바 로우 (T-Bar Row)",
      image: "images/tbar_row.png",
      target: "등 중앙부, 능형근, 광배근 외측",
      description: "바벨의 한쪽 끝을 앵커에 걸치고 손잡이를 당겨 등 중간층과 상부의 등 굴곡을 뚜렷이 돋보이게 만듭니다.",
      steps: [
        "손잡이를 좁거나 넓게 잡고 무릎을 구부려 상체를 앞으로 기울입니다.",
        "가슴을 펴고 손잡이를 복부 방향으로 견인하듯 당깁니다.",
        "날개뼈를 조여 등을 단단하게 수축시킨 뒤 저항하며 내립니다."
      ],
      tips: [
        "허리가 구부러져 새우등 모양이 되면 척추 관절에 매우 안 좋으니 등이 판판한 중립 각을 유지하세요.",
        "손목이 굽거나 과도한 손목 힘 개입을 지양합니다."
      ]
    }
  ],
  shoulders: [
    {
      id: "overhead_press",
      name: "오버헤드 프레스 (Overhead Press)",
      image: "images/overhead_press.png",
      target: "전면 삼각근, 측면 삼각근, 코어, 삼두근",
      description: "바벨을 머리 위로 밀어 올려 어깨 전반의 크기를 넓히고 강력한 상체 밀기 파워를 만드는 상체 스트렝스 메인 운동입니다.",
      steps: [
        "바벨을 쇄골 윗가슴 뼈대에 걸치고 그립은 어깨보다 약간 넓게 쥡니다.",
        "코어와 엉덩이를 강하게 수축하여 상체를 굳건히 고정합니다.",
        "머리 경로에 바벨이 걸리지 않도록 고개를 살짝 비켰다 바로 세우며 머리 위로 바벨을 곧게 뻗어 올립니다.",
        "바벨을 수직 궤도로 통제하며 다시 쇄골 위로 내려줍니다."
      ],
      tips: [
        "동작 시 허리가 과도하게 꺾이며 누우면 어깨가 아니라 가슴 상부 운동이 되며 요통이 오니 몸을 수직으로 고정하세요.",
        "팔꿈치가 옆이나 뒤로 빠지지 않게 항상 바벨 아래 수직 방향으로 지탱해야 어깨가 다치지 않습니다."
      ]
    },
    {
      id: "side_lateral_raise",
      name: "사이드 레터럴 레이즈 (Side Lateral Raise)",
      image: "images/side_lateral_raise.png",
      target: "측면 삼각근 (어깨 넓이)",
      description: "가벼운 덤벨을 양옆으로 들어 올려 어깨 측면 볼륨을 키워 넓은 어깨 프레임(어깨깡패)을 장착하게 돕습니다.",
      steps: [
        "덤벨을 들고 차렷 자세로 서서 상체를 살짝 앞으로 기울입니다.",
        "팔꿈치를 아주 살짝 구부려 고정하고, 덤벨을 양옆으로 멀리 던져 올리듯 밀어 올려 어깨 높이까지 가져갑니다.",
        "측면 어깨의 수축 자극을 느끼고 천천히 버티며 허벅지 옆으로 내립니다."
      ],
      tips: [
        "덤벨을 머리 높이 너머로 무리하게 들어 올리면 승모근이 개입되어 목이 뻐근해지니 어깨 높이까지만 들어주세요.",
        "손목이나 팔꿈치 뼈 관절이 덤벨 무게보다 위로 향하도록 리드미컬하게 통제하며 수행합니다."
      ]
    },
    {
      id: "db_shoulder_press",
      name: "덤벨 숄더 프레스 (Dumbbell Shoulder Press)",
      image: "images/db_shoulder_press.png",
      target: "전면 삼각근, 측면 삼각근",
      description: "덤벨을 사용하여 각 어깨 근육의 독립적인 궤도를 열고, 가동 범위를 극대화해 입체적인 구형 어깨를 채워줍니다.",
      steps: [
        "벤치에 기대앉아 덤벨을 귀 옆 위치에 세우고 팔꿈치는 직각을 이룹니다.",
        "덤벨이 서로 모이는 느낌으로 포물선을 그리며 정수리 위 방향으로 밀어 올립니다.",
        "어깨 자극을 느끼며 귀 높이까지 천천히 수직으로 끌어내립니다."
      ],
      tips: [
        "덤벨을 내릴 때 팔꿈치가 옆구리 쪽으로 너무 아래로 떨어지면 회전근개 부상 위험이 가중됩니다.",
        "어깨 숄더패킹이 지나치게 풀리지 않도록 상부를 단단하게 고정하세요."
      ]
    },
    {
      id: "bent_over_lateral_raise",
      name: "벤트 오버 레터럴 레이즈 (Bent Over Lateral Raise)",
      image: "images/bent_over_lateral_raise.png",
      target: "후면 삼각근 (어깨 뒷면 입체감)",
      description: "상체를 깊이 숙이고 덤벨을 벌려 올려 구부정한 어깨를 교정하고 뒷모습 입체 3D 라인을 채워줍니다.",
      steps: [
        "허리를 곧게 편 상태로 숙여 상체를 바닥과 수평에 가깝게 만듭니다.",
        "덤벨을 아래로 늘어뜨린 뒤, 날개뼈가 움직이기 전 후면 어깨 힘으로 덤벨을 양옆으로 벌려 올립니다.",
        "정점에서 후면 어깨를 꽉 쥐어짜고 천천히 내립니다."
      ],
      tips: [
        "등 날개뼈(견갑골)가 너무 모이면서 당기면 등이 수축되어 후면 어깨 고립이 깨지니 날개뼈는 벌린 채로 팔만 움직여 보세요.",
        "무릎을 살짝 구부려 하부 허리의 안정성을 서포트합니다."
      ]
    },
    {
      id: "face_pull",
      name: "페이스 풀 (Face Pull)",
      image: "images/face_pull.png",
      target: "후면 삼각근, 회전근개, 상부 승모근",
      description: "케이블 밧줄 그립을 얼굴 쪽으로 당겨 라운드 숄더 거북목을 완화하고 어깨 뒤쪽 견고함을 높이는 건강 운동입니다.",
      steps: [
        "케이블 높이를 이마에 맞추고 로프 그립을 잡은 뒤 뒤로 물러섭니다.",
        "로프의 중앙을 찢어 발기듯 양손을 귀 옆이나 뒤쪽으로 당기며 팔꿈치를 넓게 올립니다.",
        "어깨 뒷면 회전근개의 단단한 수축을 느낀 뒤 서서히 제자리로 돌려보냅니다."
      ],
      tips: [
        "당겼을 때 엄지손가락이 뒤쪽 방향을 가리키도록 손목을 외회전시키면 후면 수축이 배가됩니다.",
        "어깨 충돌 예방을 위해 팔꿈치가 어깨선과 평행 내지 약간 위에 위치해야 합니다."
      ]
    },
    {
      id: "arnold_press",
      name: "아놀드 프레스 (Arnold Press)",
      image: "images/arnold_press.png",
      target: "전면 삼각근, 측면 삼각근",
      description: "덤벨을 내릴 때 손목을 회전시켜 어깨 전면과 측면을 동시에 사수하여 볼륨 한계를 극복하는 아놀드 슈왈제네거의 팁입니다.",
      steps: [
        "손바닥이 얼굴을 향하게 덤벨을 쥐고 턱 밑 가슴 앞에 위치시킵니다.",
        "덤벨을 밀어 올리면서 손목을 바깥으로 회전시켜, 만세 동작 정점에선 손바닥이 앞을 보게 만듭니다.",
        "역순으로 회전하며 얼굴 앞 처음 위치로 귀환합니다."
      ],
      tips: [
        "손목의 회전이 중간 정지 없이 밀어 올리는 궤적과 물 흐르듯 자연스럽게 연동되어야 효과가 큽니다.",
        "어깨 통증이 느껴진다면 일반 프레스로 회귀하세요."
      ]
    },
    {
      id: "front_raise",
      name: "프론트 레이즈 (Front Raise)",
      image: "images/front_raise.png",
      target: "전면 삼각근",
      description: "덤벨을 몸 앞 방향으로 올려 어깨 앞쪽 라인을 더욱 날렵하게 발달시키고 가슴과의 분리도를 높입니다.",
      steps: [
        "덤벨을 들고 허벅지 앞에 놓은 상태로 똑바로 섭니다.",
        "팔을 곧게 편 채(약간 유연성 있게) 덤벨을 가슴 높이 정면으로 번쩍 올려줍니다.",
        "어깨 앞쪽의 긴장을 잡고 천천히 버티며 허벅지 앞으로 돌아옵니다."
      ],
      tips: [
        "반동을 써서 상체를 뒤로 튕겨서 올리면 허리가 아프고 어깨 운동이 되지 않으니 몸을 돌처럼 세우세요.",
        "덤벨 대신 원판(플레이트)이나 바벨을 잡고 진행해도 훌륭합니다."
      ]
    }
  ],
  legs: [
    {
      id: "squat",
      name: "스쿼트 (Squat)",
      image: "images/squat.png",
      target: "대퇴사두근 (허벅지 앞), 둔근 (엉덩이), 햄스트링, 코어",
      description: "하체 대근육 전체와 전신 스트렝스 향상을 이끌어 칼로리 폭발 소모와 남성호르몬 활성화를 돕는 명실상부 운동의 제왕입니다.",
      steps: [
        "바벨을 승모근 상부에 견고하게 얹고 발을 어깨너비로 벌려 발끝은 15도 정도 밖을 보게 섭니다.",
        "숨을 들이마셔 복압을 강하게 채우고, 엉덩이를 뒤로 빼며 무릎이 발끝 방향으로 굽혀 내려앉습니다.",
        "허벅지가 바닥과 수평이 될 때까지 충분히 깊이 주저앉습니다.",
        "발바닥 전체로 지면을 지긋이 밀며 수직으로 솟구쳐 일어서며 숨을 뱉습니다."
      ],
      tips: [
        "내려갈 때 무릎이 안쪽으로 모여 꺾이면 십자인대 부상 위험이 높으니 반드시 발가락과 같은 방향을 유지하세요.",
        "척추의 아치가 죽어 허리가 새우등처럼 굽지 않게 가슴을 활짝 열어 세워야 요추를 지킬 수 있습니다."
      ]
    },
    {
      id: "romanian_deadlift",
      name: "로마니안 데드리프트 (Romanian Deadlift)",
      image: "images/romanian_deadlift.png",
      target: "대둔근, 햄스트링 (허벅지 뒤), 척추기립근, 광배근",
      description: "엉덩이와 뒤 허벅지 유연성을 늘려 뒤태 라인을 바로 잡고 힙업과 골반 유연성 밸런스를 개선합니다.",
      steps: [
        "바벨을 들고 서서 코어 복압을 꽉 쥔 상태에서 어깨너비로 섭니다.",
        "바벨을 허벅지에 쓸어내리듯 가깝게 유지하며 엉덩이를 최대한 뒤로 보냅니다.",
        "무릎은 정강이가 수직을 지키도록 아주 살짝만 굽히고 뒤 허벅지가 늘어나는 한도까지 내려갑니다.",
        "엉덩이를 앞으로 밀어 넣어 조여주며 처음 선 자세로 복귀합니다."
      ],
      tips: [
        "하체 뒤쪽 햄스트링이 유연하지 못한 상태에서 깊이 덤비면 허리가 말려 부상을 입으니 내려가는 가동 범위는 등이 판판할 때까지만 타협하세요.",
        "발 뒤꿈치 쪽에 중심을 실어 무게 중심을 뒤로 잡아야 엉덩이 집중도가 올라갑니다."
      ]
    },
    {
      id: "leg_press",
      name: "레그 프레스 (Leg Press)",
      image: "images/leg_press.png",
      target: "대퇴사두근, 대둔근, 햄스트링",
      description: "척추 허리에 가해지는 디스크 압력을 덜어낸 상태로, 안전하게 하체 전체에 엄청난 고중량 하중 훈련이 가능합니다.",
      steps: [
        "머신 시트에 등을 대고 엉덩이를 깊이 안착시킨 뒤 발판에 발을 어깨너비로 대어 안전핀을 풉니다.",
        "무릎이 겨드랑이에 닿을 정도로 천천히 하중을 내리며 굽혀줍니다.",
        "발바닥 전체로 발판을 부수듯 지긋이 밀어 올려 다리를 폅니다."
      ],
      tips: [
        "무릎을 끝까지 다 펴서 뼈를 '툭' 잠가 버리면(Lockout) 무릎 관절 인대에 심각한 부상이 오니 다 펴기 직전 긴장 유지만 하며 멈춰 세우세요.",
        "내릴 때 골반이 들리며 허리가 패드에서 떨어지면 디스크 탈출 위험이 있으니 엉덩이를 꽉 고정해 두세요."
      ]
    },
    {
      id: "leg_curl",
      name: "레그 컬 (Leg Curl)",
      image: "images/leg_curl.png",
      target: "대퇴이두근 (햄스트링)",
      description: "허벅지 뒤쪽 햄스트링을 완벽하게 고립 수축하여 하체 앞뒤 비율을 매만지고 무릎 관절을 보호합니다.",
      steps: [
        "머신 엎드려 눕거나 앉은 패드에 자리를 잡고 발목 뒷부분 아킬레스건에 롤러 패드를 위치시킵니다.",
        "엉덩이가 들리지 않게 손잡이를 움켜쥐고 다리를 엉덩이 쪽으로 꽉 끌어당겨 굽혀 줍니다.",
        "햄스트링 뒤쪽의 긴장을 저항하며 천천히 처음 다리 위치로 펴줍니다."
      ],
      tips: [
        "발가락을 몸 쪽으로 당겨 발목을 꺾은 상태로 하면 햄스트링에 자극이 더 묵직하게 고립되어 들어갑니다.",
        "허리 힘으로 엉덩이를 번쩍 들어 반동을 쓰지 마세요."
      ]
    },
    {
      id: "leg_extension",
      name: "레그 익스텐션 (Leg Extension)",
      image: "images/leg_extension.png",
      target: "대퇴사두근 (허벅지 앞 갈라짐)",
      description: "무릎 바로 위쪽 대퇴사두근을 완전 고립 수축하여 허벅지의 뚜렷한 데피니션과 갈라짐을 선사합니다.",
      steps: [
        "의자 시트에 엉덩이와 등을 등받이에 밀착하고 발목 롤러 패드를 발가락 바로 위 정강이 끝에 맞춥니다.",
        "손잡이를 잡고 엉덩이를 시트에 고정한 뒤 다리를 일직선으로 앞으로 힘차게 차서 올립니다.",
        "허벅지 앞쪽의 단단한 쪼임을 1초 느끼고, 저항감을 버티며 조심스레 복귀시킵니다."
      ],
      tips: [
        "동작할 때 발목 스윙 반동으로 가볍게 차지 말고 지긋이 묵직하게 밀어 올리는 텐션을 잡아야 부상이 없습니다.",
        "무릎 관절이 약한 분들은 무겁게 하기보단 적정 중량 고반복 자극이 낫습니다."
      ]
    },
    {
      id: "lunge",
      name: "덤벨 런지 (Dumbbell Lunge)",
      image: "images/lunge.png",
      target: "둔근 (엉덩이 힙업), 대퇴사두근, 균형감각",
      description: "덤벨을 양손에 쥐고 한 발씩 걸어나가며 하체 편측성 근력의 약점을 보완하고 애플힙 힙업에 최상의 솔루션입니다.",
      steps: [
        "양손에 적당한 무게의 덤벨을 들고 똑바로 섭니다.",
        "한쪽 발을 앞으로 넓게(두 걸음 정도) 디디며 앉습니다.",
        "앞발의 무릎 각도가 90도가 되고 뒷발 무릎은 바닥에 닿기 직전까지 내려앉습니다.",
        "앞발 뒤꿈치에 힘을 실어 바닥을 밀며 원래 서있던 자리로 일어섭니다."
      ],
      tips: [
        "앞으로 디딘 발의 무릎이 발끝 선을 지나치게 삐져나오면 무릎 슬개골 골반 부상이 생기니 수직 하강에 초점을 두세요.",
        "상체를 약간 앞으로 기울이면 엉덩이 개입이 커지고, 상체를 세우면 허벅지 개입이 많아집니다."
      ]
    },
    {
      id: "calf_raise",
      name: "카프 레이즈 (Calf Raise)",
      image: "images/calf_raise.png",
      target: "비복근, 가자미근 (종아리 알)",
      description: "종아리 뒷근육을 수축 이완시켜 탄력 있는 발목과 강력한 종아리 탄성, 하지정맥 순환 발달을 책임집니다.",
      steps: [
        "발판 끝에 발 앞부분(디딤발)만 대고 뒤꿈치는 허공에 띄워 섭니다.",
        "뒤꿈치를 최대한 깊숙이 끌어내려 종아리 아킬레스건을 쭉 늘려줍니다.",
        "까치발을 높게 서듯 엄지발가락에 힘을 실어 뒤꿈치를 높이 들어 수축합니다."
      ],
      tips: [
        "종아리 근육은 피로에 강한 지근 위주이므로 빠르게 치기보단 수축과 이완 정점에서 각각 1초씩 홀딩해 주는 지연 훈련이 꿀팁입니다.",
        "중심을 잃기 쉬우므로 벽이나 기둥을 살짝 잡고 진행하세요."
      ]
    }
  ],
  arms: [
    {
      id: "db_biceps_curl",
      name: "덤벨 바이셉스 컬 (Dumbbell Biceps Curl)",
      image: "images/db_biceps_curl.png",
      target: "이두근 상완이두근 (알통)",
      description: "덤벨을 들고 이두근 수축에 올인하여 볼록 솟은 남성적인 알통 볼륨 봉우리를 조각합니다.",
      steps: [
        "덤벨을 쥐고 손바닥이 몸을 보게 차렷 자세로 똑바로 섭니다.",
        "팔꿈치를 옆구리에 고정하고 덤벨을 올려 손바닥이 위쪽을 보게 손목을 비틀어 올립니다.",
        "이두근 수축 후, 천천히 원래 손바닥 방향으로 펴며 내립니다."
      ],
      tips: [
        "덤벨을 올릴 때 팔꿈치가 앞으로 밀려 올라가면 어깨가 무게를 뺏어가 버리니 팔꿈치를 고정해 두세요.",
        "가슴을 펴고 어깨가 앞으로 말리지 않도록 주의해야 고립률이 좋아집니다."
      ]
    },
    {
      id: "triceps_pushdown",
      name: "트라이셉스 푸쉬다운 (Triceps Pushdown)",
      image: "images/triceps_pushdown.png",
      target: "상완삼두근 (팔 뒤쪽 두께감)",
      description: "케이블 머신 로프나 바를 잡고 아래로 밀어 팔 뒤쪽 삼두 근육 결을 발달시켜 단단한 말발굽 팔뚝을 생성합니다.",
      steps: [
        "케이블 머신 상단에 로프나 일자 바를 걸고 무릎을 구부려 상체를 약간 숙여 섭니다.",
        "팔꿈치를 옆구리에 접착제 붙인 듯 단단히 고정하고, 아래 방향으로 그립을 곧게 밀어 폅니다.",
        "팔을 완전히 뻗어 삼두를 수축시킨 뒤, 힘을 저항하며 팔꿈치만 접어 90도 각도로 돌려보냅니다."
      ],
      tips: [
        "로프 그립을 사용할 경우 마지막 수축 때 양손을 옆으로 벌려 찢어주면 외측 삼두근이 더욱 우수하게 짜집니다.",
        "팔꿈치가 바깥으로 닭날개처럼 펄럭 벌어지지 않게 꽉 잡아 두세요."
      ]
    },
    {
      id: "hammer_curl",
      name: "해머 컬 (Hammer Curl)",
      image: "images/hammer_curl.png",
      target: "상완요골근 (전완근과 이두 바깥쪽 굵기)",
      description: "망치를 쥐듯 덤벨을 수직으로 쥐고 들어 올려 전완근과 이두근의 경계 라인을 넓혀 팔 전체 두께를 두껍게 만듭니다.",
      steps: [
        "덤벨 손잡이를 마주 보게 세로로 쥐고 가슴을 펴고 섭니다.",
        "팔꿈치를 세우고 손바닥 방향의 꺾임 없이 그대로 수직 위로 덤벨을 들어 올립니다.",
        "상완요골근의 자극을 쥐어짜고 조심스럽게 아래로 덤벨을 놓아줍니다."
      ],
      tips: [
        "손목이 뒤나 앞으로 굽어 힘이 빠지지 않도록 손목 일자 정렬을 꽉 묶어 두어야 부상이 없습니다.",
        "바벨로 하기는 어려운 고유의 자극 각을 선사합니다."
      ]
    },
    {
      id: "barbell_curl",
      name: "바벨 컬 (Barbell Curl)",
      image: "images/barbell_curl.png",
      target: "상완이두근 전체",
      description: "바벨을 양손으로 들고 올려 고중량으로 이두근 전체의 질량 매스를 거대하게 키워주는 이두 대들보 운동입니다.",
      steps: [
        "바벨을 어깨너비로 잡고 언더그립(손바닥이 위)으로 자세를 잡습니다.",
        "팔꿈치를 허리춤에 밀착하고 바벨을 반원을 그리듯 들어 올려 쇄골 위치 부근까지 올립니다.",
        "이두근 매스 저항을 느끼며 다 펴지기 직전 각도까지 안전하게 내립니다."
      ],
      tips: [
        "무겁다고 허리 반동을 크게 쓰며 엉덩이 힘으로 낚시하듯 잡아채면 이두 자극은 제로에 가까워집니다.",
        "손목 통증이 유발된다면 일자 바벨 대신 W자 모양의 EZ바(이지바)를 적극 권유합니다."
      ]
    },
    {
      id: "lying_triceps_extension",
      name: "라잉 트라이셉스 익스텐션 (Lying Triceps Extension)",
      image: "images/lying_triceps_extension.png",
      target: "상완삼두근 장두 (삼두근 안쪽 깊은 크기)",
      description: "벤치에 누워 바벨을 머리 뒤로 구부려 내려 삼두 장두 근육을 찢어 늘려 굵은 팔 두께를 연출하는 최고 운동입니다.",
      steps: [
        "플랫 벤치에 누워 바벨이나 EZ바를 어깨너비보다 좁게 잡고 얼굴 위로 밀어 세웁니다.",
        "팔꿈치를 고정하고 이마 방향이나 정수리 뒤 방향으로 바를 천천히 구부려 내립니다.",
        "삼두 뒤쪽이 강하게 찢어지듯 이완된 후 삼두 힘으로 바를 수직 방향으로 밀어 세웁니다."
      ],
      tips: [
        "바벨이 이마 위로 직접 통과하므로 안전사고 방지에 특히 유념하고, 팔꿈치가 양옆으로 벌어지지 않게 조이세요.",
        "이완 시 팔꿈치 뼈 관절 통증(엘보우)이 있다면 즉시 중량을 경감하세요."
      ]
    },
    {
      id: "db_kickback",
      name: "덤벨 킥백 (Dumbbell Kickback)",
      image: "images/db_kickback.png",
      target: "상완삼두근 상부 및 외측두 (삼두 데피니션)",
      description: "상체를 숙여 팔꿈치 높이를 잡고 덤벨을 뒤로 차올려, 삼두근 정점 수축에만 완벽 집중하는 조각용 운동입니다.",
      steps: [
        "벤치에 한쪽 무릎과 손을 대거나 척추를 세운 채 숙여 팔꿈치를 옆구리 선에 고정해 들어 올립니다.",
        "팔꿈치 각도를 90도 꺾어 덤벨을 쥔 상태에서, 뒤 방향으로 팔을 일직선으로 쭉 뻗어 줍니다.",
        "삼두 뒤가 완전히 조인 상태를 1초 홀딩한 후 긴장을 잡고 원래 직각 자세로 굽힙니다."
      ],
      tips: [
        "덤벨을 뒤로 보낼 때 팔꿈치 높이가 아래로 처지면 삼두가 아니라 어깨 후면 힘이 쓰이니 팔꿈치 고정에 사활을 거세요.",
        "고중량보다는 삼두를 빨래 쥐어짜듯 모아주는 가벼운 정밀 고립 타겟이 유용합니다."
      ]
    },
    {
      id: "preacher_curl",
      name: "프리처 컬 (Preacher Curl)",
      image: "images/preacher_curl.png",
      target: "상완이두근 하부 (알통 아래 꽉 찬 볼륨)",
      description: "경사 패드에 팔꿈치를 단단히 부착해 고정시켜 상체 반동을 차단하고 이두 하부 근육에 최극단적인 고립 자극을 줍니다.",
      steps: [
        "프리처 벤치 경사대 패드 위에 겨드랑이를 대어 팔 뒷부분 삼두근을 패드에 완전히 접착시킵니다.",
        "바벨이나 덤벨을 잡고 이두근의 고유 수축 결을 느끼며 코 밑 방향으로 컬해 당겨 올립니다.",
        "패드의 각도 지지를 받으며 이두가 끝까지 길게 늘어나게 펴줍니다."
      ],
      tips: [
        "팔을 완전히 쭉 펴서 관절을 펴버리면 이두근 건 인대가 단열되는 중상을 입을 수 있으니 약간의 유연한 각을 남기고 올려 치세요.",
        "이두 하부에만 자극이 꽂히게 날개뼈 승모근 으쓱 개입을 제한하세요."
      ]
    }
  ],
  abs: [
    {
      id: "crunch",
      name: "크런치 (Crunch)",
      image: "images/crunch.png",
      target: "복직근 상부 (식스팩 윗줄)",
      description: "누워서 복부 윗부분을 둥글게 말아올려 척추 디스크 허리 손상 위험 없이 탄력 있고 탄탄한 식스팩 윗면을 선사합니다.",
      steps: [
        "바닥에 누워 무릎을 굽히고 발을 바닥에 대거나 의자에 얹어 둡니다.",
        "양손은 귀 옆에 가볍게 대거나 가슴 위에 포개어 줍니다.",
        "갈비뼈를 골반 쪽으로 밀어 넣듯 등을 둥글게 말아 날개뼈가 지면에서 떨어질 때까지만 올라옵니다.",
        "복부 압착 쪼임을 강하게 넣고 천천히 버티며 머리를 지면에 내립니다."
      ],
      tips: [
        "목을 깍지 낀 손으로 강하게 잡아당기며 목디스크 위험이 크니 양손은 머리를 바쳐만 준다는 느낌으로 하세요.",
        "올라올 때 허리 전체를 들어 올리는 것이 아니라 날개뼈 하부 흉추 위쪽까지만 말아 쥐는 것이 핵심입니다."
      ]
    },
    {
      id: "leg_raise",
      name: "레그 레이즈 (Leg Raise)",
      image: "images/leg_raise.png",
      target: "복직근 하부 (똥배, 아랫배 걷어내기)",
      description: "누운 상태로 다리를 올렸다 내리는 자극으로 복부 아래 하복부 윤곽을 단단하게 잡고 골반 라인을 정리합니다.",
      steps: [
        "바닥에 똑바로 누워 손바닥은 엉덩이 양옆 바닥에 고정해 안정성을 얻습니다.",
        "양다리를 곧게 펴고(유연성이 없다면 아주 미세하게 굽힘) 바닥과 수직 각이 될 때까지 힘차게 올려 줍니다.",
        "허리 하부가 지면에서 떨어지지 않게 꽉 붙인 채 다리를 바닥에 닿기 직전까지 제어하며 내려줍니다."
      ],
      tips: [
        "다리를 내릴 때 등 뒤 허리가 바닥에서 붕 뜨며 아치가 생기면 척추 뼈가 눌려 극심한 요통을 유발하니 복압으로 바닥을 사정없이 짓누르세요.",
        "엉덩이 뒤에 손을 받치고 하면 허리가 뜨는 걸 보완해 초보자에게 쉽습니다."
      ]
    },
    {
      id: "plank",
      name: "플랭크 (Plank)",
      image: "images/plank.png",
      target: "코어 근육 전체 (복횡근, 척추기립근, 둔근)",
      description: "엎드려 버티는 대칭 밸런스 운동으로 척추 속안의 속근육 코어를 단단하게 만들어 골반 비대칭과 요통 개선에 지대합니다.",
      steps: [
        "바닥에 팔꿈치를 대어 어깨 아래 수직 지탱을 하고 발끝을 세워 엎드립니다.",
        "엉덩이를 낮추고 날개뼈를 밀어 올려 머리, 등, 골반, 발꿈치가 빨대처럼 일직선이 되도록 긴장을 꽉 잡아 줍니다.",
        "복부 아랫배와 엉덩이를 계속 꽉 조인 상태를 정해진 시간 동안 계속 깊은 호흡을 하며 버텨 줍니다."
      ],
      tips: [
        "엉덩이가 밑으로 주저앉으며 허리가 처지면 기립근 관절이 다치며, 엉덩이가 하늘로 치솟으면 코어 운동 효과가 미비해집니다.",
        "목 정렬도 바닥을 비스듬히 응시하여 일자로 지켜주세요."
      ]
    },
    {
      id: "russian_twist",
      name: "러시안 트위스트 (Russian Twist)",
      image: "images/russian_twist.png",
      target: "외복사근, 내복사근 (옆구리 러브핸들 정리)",
      description: "상체를 살짝 세워 비틀어주며 갈비뼈 양옆 복사근 결을 잘라내듯 선명하게 깎고 잘록한 개미허리를 연출합니다.",
      steps: [
        "바닥에 앉아 무릎을 구부리고 상체를 뒤로 약 45도 정도 비스듬히 기울입니다.",
        "균형을 잡고 발을 바닥에서 살짝 들어 올립니다 (쉬운 동작은 발을 댐).",
        "양손을 모으거나 무게(덤벨/플레이트)를 쥔 상태로 상체를 왼쪽, 오른쪽으로 번갈아 비틀며 터치합니다."
      ],
      tips: [
        "어깨와 손만 왔다 갔다 비틀면 옆구리 운동이 안 되며 흉추 척추대 자체가 확실하게 양옆으로 로테이션 비틀려야 복사근이 활성화됩니다.",
        "허리가 동그랗게 구부러지지 않도록 가슴을 꼿꼿이 편 중립을 사수하세요."
      ]
    },
    {
      id: "hanging_leg_raise",
      name: "행잉 레그 레이즈 (Hanging Leg Raise)",
      image: "images/hanging_leg_raise.png",
      target: "복직근 하부, 장요근, 악력 및 전신 밸런스",
      description: "철봉에 매달려 자기 다리와 골반을 말아올려 크런치와는 비교도 안 되는 엄청난 하복부 근선명도 자극을 박아넣습니다.",
      steps: [
        "철봉을 잡고 완전히 매달려 몸을 안정시킵니다.",
        "몸의 흔들림(반동)을 최소화한 뒤, 골반을 둥글게 가슴 방향으로 말아 올리며 다리를 90도 이상 높이 세웁니다.",
        "하복부 하부 근육에 강한 압축이 풀리기 전에 버티면서 천천히 매달려 늘려줍니다."
      ],
      tips: [
        "다리 뼈 무게만 단순히 흔들며 기계적으로 흔들면 장요근 고관절 개입만 많아지므로 엉덩이 안정성이 앞을 보여준다는 느낌으로 골반 자체를 말아야 복근에 꽂힙니다.",
        "반동 제어를 위해 올라갈 때와 내려갈 때의 템포를 항상 일관되게 고정하세요."
      ]
    },
    {
      id: "ab_rollout",
      name: "AB 롤아웃 (Ab Rollout)",
      image: "images/ab_rollout.png",
      target: "코어 근육 전체, 복직근 전체, 전면 삼각근, 광배근",
      description: "바퀴 롤러 휠을 잡고 앞으로 슬라이딩 전진하여 복부의 초강력 이완 텐션과 코어 신체 제어 능력을 최대치로 증폭시킵니다.",
      steps: [
        "무릎 패드 위에 무릎을 대고 꿇어앉아 AB 롤러 핸들을 단단히 움켜쥡니다.",
        "등을 살짝 고양이 등처럼 둥글게 말아 복근 수축을 채우고, 바퀴를 앞으로 통제하며 서서히 굴려 나갑니다.",
        "몸을 일자로 밀어 최대한 앞으로 뻗어 준 후 (허리가 처지기 직전 각도), 복부의 힘으로 바퀴를 다시 굴려 턱 밑으로 끌어당깁니다."
      ],
      tips: [
        "앞으로 나갈 때 허리가 밑으로 쏙 가라앉으며 U자형 아치가 되면 척추 뼈가 작살나며 큰 부상이 유발되니 반드시 등을 둥글게 말아놓은 텐션을 지켜야 합니다.",
        "가동 범위가 아직 완성되지 않은 입문자는 벽 앞에 대어 바퀴 제어 장치를 두고 단계적으로 나아가는 걸 강력히 권장합니다."
      ]
    }
  ],
  cardio: [
    {
      id: "treadmill",
      name: "트레드밀 러닝 (Treadmill Running)",
      image: "images/treadmill.png",
      target: "심폐지구력, 전신 체지방 연소, 하체 근지구력",
      description: "실내 러닝머신을 달리며 심박수를 활성화하고 체내 저장된 잉여 지방을 효율적으로 연소하는 가장 대중적인 유산소 운동입니다.",
      steps: [
        "머신 벨트 위에 올라 안전핀을 의류에 꽂아 부착합니다.",
        "시작 버튼을 누르고 가벼운 걷기로 시작해 단계적으로 속도(Speed)와 경사도(Incline)를 올립니다.",
        "가슴을 펴고 시선은 정면을 보며 양팔을 가볍게 앞뒤로 흔들며 활기차게 달립니다.",
        "쿨다운으로 3분간 가볍게 걸으며 심박수를 안전하게 내리고 종료합니다."
      ],
      tips: [
        "무릎 충격 예방을 위해 착지 시 발바닥 중간이나 뒤꿈치부터 지면에 닿도록 리드미컬하게 달립니다.",
        "달리는 동안 머신 손잡이를 잡고 타게 되면 칼로리 소모 및 코어 협응 효과가 떨어지니 손을 떼고 팔을 저으세요."
      ]
    },
    {
      id: "stationary_bike",
      name: "실내 사이클 (Stationary Bike)",
      image: "images/stationary_bike.png",
      target: "대퇴사두근, 심폐지구력, 전신 다이어트",
      description: "무릎 관절에 가해지는 체중 부담 없이 안전하고 지속적인 페달링 자극으로 하체 라인을 슬림하게 만들어 줍니다.",
      steps: [
        "안장 높이가 페달을 가장 낮은 위치에 두었을 때 무릎이 아주 살짝(약 10~15도) 굽어지는 높이로 맞춥니다.",
        "발판 스트랩을 단단히 고정하고 시트에 올라 페달링 강도를 세팅합니다.",
        "등이 굽지 않도록 주의하며 일정한 리듬과 케이던스(RPM 70~80)로 페달을 밟아 돌립니다."
      ],
      tips: [
        "안장이 너무 낮아 무릎이 가슴 위까지 올라가면 관절에 나쁜 영향이 오니 안장 높이 설정에 유념하세요.",
        "손목이나 어깨 핸들바에 상체 무게를 너무 실어 기대어 타지 마세요."
      ]
    },
    {
      id: "stairmaster",
      name: "천국의 계단 (Stairmaster)",
      image: "images/stairmaster.png",
      target: "둔근 (힙업), 햄스트링, 전신 지방 연소, 심폐 기능",
      description: "무한 루프식 계단을 밟아 오르며 엄청난 속도의 칼로리 소모와 강력한 하체 엉덩이 힙업을 가져다주는 유산소 악마의 기구입니다.",
      steps: [
        "기구 계단 위에 조심히 올라 시작 버튼을 누르고 속도 레벨을 점차 세팅합니다.",
        "상체를 약간 앞으로 기울여 무게 중심을 잡고 한 계단씩 발 뒤꿈치에 힘을 주며 계단을 디뎌 밀어 올립니다.",
        "계단 끝에서 발이 끼이지 않도록 주의하며 정교한 보폭 템포로 오릅니다."
      ],
      tips: [
        "뒤꿈치가 허공에 뜨지 않게 딛고 일어서야 종아리에 피로가 쏠리지 않고 큰 대둔근(엉덩이)이 활성화됩니다.",
        "너무 지쳐서 손잡이에 완전히 매달려 매달린 채 오르면 운동 칼로리 연소량이 절반 이하로 줄어듭니다."
      ]
    },
    {
      id: "elliptical",
      name: "일립티컬 (Elliptical)",
      image: "images/elliptical.png",
      target: "전신 근육 협응, 무릎 보호 다이어트, 어깨 가동성",
      description: "타원형 궤도의 페달과 손잡이를 동시에 밀고 당겨, 관절 충격 '0'에 가까우면서 상하체 전신 체지방을 고르게 소비합니다.",
      steps: [
        "기구 양발 판에 올라서서 긴 스틱 손잡이를 가볍게 쥡니다.",
        "부드럽게 원을 그리듯 페달을 앞으로 굴리면서 동시에 손잡이를 번갈아 밀고 당겨줍니다.",
        "정방향(앞으로 굴림) 외에 역방향(뒤로 굴림) 페달링으로 허벅지 뒤쪽 햄스트링 자극을 주는 다양성을 줍니다."
      ],
      tips: [
        "상체를 똑바로 세우고 손잡이 장력을 적극 동원해야 팔과 상부 전신의 칼로리 소모 시너지가 활성화됩니다.",
        "발뒤꿈치가 디딤판에서 과도하게 뜨면 발바닥 족저근막 피로가 올 수 있으니 지긋이 붙이세요."
      ]
    }
  ]
};

const MET_VALUES = {
  bench_press: 6.0,
  incline_db_press: 6.0,
  chest_fly: 5.0,
  dips: 6.0,
  pec_deck_fly: 5.0,
  push_up: 8.0,
  cable_crossover: 5.0,
  deadlift: 8.0,
  lat_pulldown: 5.0,
  bent_over_row: 6.0,
  pull_up: 8.0,
  seated_cable_row: 5.0,
  one_arm_db_row: 5.0,
  tbar_row: 6.0,
  overhead_press: 6.0,
  side_lateral_raise: 4.0,
  db_shoulder_press: 6.0,
  bent_over_lateral_raise: 4.0,
  face_pull: 4.0,
  arnold_press: 6.0,
  front_raise: 4.0,
  squat: 8.0,
  romanian_deadlift: 6.0,
  leg_press: 6.0,
  leg_curl: 4.0,
  leg_extension: 4.0,
  lunge: 6.0,
  calf_raise: 4.0,
  db_biceps_curl: 4.0,
  triceps_pushdown: 4.0,
  hammer_curl: 4.0,
  barbell_curl: 4.0,
  lying_triceps_extension: 5.0,
  db_kickback: 4.0,
  preacher_curl: 4.0,
  crunch: 3.8,
  leg_raise: 3.8,
  plank: 3.8,
  russian_twist: 3.8,
  hanging_leg_raise: 3.8,
  ab_rollout: 3.8,
  treadmill: 8.0,
  stationary_bike: 6.8,
  stairmaster: 9.0,
  elliptical: 7.0
};// ==========================================
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
    this.customExerciseCategorySelect = document.getElementById('custom-exercise-category');
    this.customExerciseAddBtn = document.getElementById('custom-exercise-add-btn');
    
    this.selectedQuickAddPart = null; // Track current selected category
    
    // 로컬스토리지에서 커스텀 운동들을 불러와 exercisesData에 병합
    this.loadCustomExercises();
    
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
    const customExercises = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
    customExercises.forEach(ex => {
      if (exercisesData[ex.category]) {
        const exists = exercisesData[ex.category].some(item => item.id === ex.id);
        if (!exists) {
          exercisesData[ex.category].push({
            id: ex.id,
            name: ex.name,
            target: "커스텀 운동",
            description: "",
            steps: [],
            tips: []
          });
        }
      }
    });
  }

  initCustomExerciseEvents() {
    this.customExerciseAddBtn.addEventListener('click', () => {
      const name = this.customExerciseNameInput.value.trim();
      const category = this.customExerciseCategorySelect.value || 'custom';
      
      if (!name) {
        alert('운동 이름을 입력해 주세요.');
        return;
      }
      
      const customId = `custom_${Date.now()}`;
      
      // 1. exercisesData 에 동적 추가
      const newEx = {
        id: customId,
        name: name,
        target: "커스텀 운동",
        description: "",
        steps: [],
        tips: []
      };
      
      if (exercisesData[category]) {
        exercisesData[category].push(newEx);
      }
      
      // 2. localStorage에 커스텀 운동 정보 영구 저장
      const customExercises = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
      customExercises.push({
        id: customId,
        name: name,
        category: category
      });
      localStorage.setItem('vitalfit_custom_exercises', JSON.stringify(customExercises));
      
      // 3. 오늘의 운동 일지에도 등록
      this.addWorkout(customId, name, category);
      
      // 4. 입력 필드 클리어
      this.customExerciseNameInput.value = '';
      
      // 5. 현재 보고 있는 부위별 운동 리스트 및 UI 즉시 갱신
      this.selectedQuickAddPart = null;
      const btn = this.quickAddContainer.querySelector(`.quick-add-item[data-category="${category}"]`);
      if (btn) {
        this.selectQuickAddCategory(category, btn);
      }
      
      alert(`💪 '${name}' 운동이 ${this.getCategoryKorean(category)} 부문에 영구 등록되었습니다!`);
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

    if (this.selectedQuickAddPart === categoryId) {
      this.selectedQuickAddPart = null;
      this.quickAddSubContainer.style.display = 'none';
      return;
    }

    this.selectedQuickAddPart = categoryId;
    clickedBtn.classList.add('active');

    this.quickAddSubContainer.style.display = 'block';
    this.quickAddSubTitle.textContent = `${this.getCategoryKorean(categoryId)} 운동 선택`;

    this.refreshQuickAddSubList(categoryId);
  }

  refreshQuickAddSubList(categoryId) {
    this.quickAddSubList.innerHTML = '';
    const list = exercisesData[categoryId] || [];

    list.forEach(ex => {
      const chip = document.createElement('div');
      chip.className = 'quick-add-item';
      chip.style.padding = '8px 10px';
      chip.style.fontSize = '0.8rem';
      chip.style.display = 'flex';
      chip.style.justifyContent = 'space-between';
      chip.style.alignItems = 'center';
      chip.style.gap = '8px';
      chip.style.cursor = 'pointer';
      
      const textDiv = document.createElement('div');
      textDiv.style.fontWeight = '600';
      textDiv.textContent = ex.name.split(' (')[0];
      chip.appendChild(textDiv);

      if (ex.id.startsWith('custom_')) {
        const deleteBtn = document.createElement('button');
        deleteBtn.style.background = 'none';
        deleteBtn.style.border = 'none';
        deleteBtn.style.color = 'var(--text-muted)';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.padding = '2px';
        deleteBtn.style.display = 'flex';
        deleteBtn.style.alignItems = 'center';
        deleteBtn.innerHTML = `<i data-lucide="x" style="width: 14px; height: 14px;"></i>`;
        
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.deleteCustomExercise(ex.id, categoryId);
        });
        chip.appendChild(deleteBtn);
      }
      
      chip.addEventListener('click', () => {
        this.addWorkout(ex.id, ex.name, categoryId);
      });
      this.quickAddSubList.appendChild(chip);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  deleteCustomExercise(exId, categoryId) {
    if (!confirm('이 커스텀 운동을 정말 삭제하시겠습니까?')) return;
    
    // 1. exercisesData에서 제거
    if (exercisesData[categoryId]) {
      exercisesData[categoryId] = exercisesData[categoryId].filter(ex => ex.id !== exId);
    }
    
    // 2. localStorage에서 제거
    let customExercises = JSON.parse(localStorage.getItem('vitalfit_custom_exercises')) || [];
    customExercises = customExercises.filter(ex => ex.id !== exId);
    localStorage.setItem('vitalfit_custom_exercises', JSON.stringify(customExercises));
    
    // 3. UI 갱신
    this.refreshQuickAddSubList(categoryId);
  }

  getCategoryKorean(cat) {
    const map = { chest: '가슴', back: '등', shoulders: '어깨', legs: '하체', arms: '팔', abs: '복근', cardio: '유산소', custom: '기타' };
    return map[cat] || cat;
  }

  render() {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
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

    const userProfile = JSON.parse(localStorage.getItem('vitalfit_user_profile')) || {};
    const bodyWeight = parseFloat(userProfile.profileWeight) || 70;

    workouts.forEach((workout, workoutIndex) => {
      const isCardio = workout.category === 'cardio';
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
        totalSets++;
        const isCompleted = set.completed || false;
        
        if (isCompleted) {
          const met = MET_VALUES[workout.id] || 4.0;
          if (isCardio) {
            totalCalories += met * 3.5 * bodyWeight / 200 * (parseFloat(set.weight) || 0);
          } else {
            totalCalories += met * 3.5 * bodyWeight / 200 * 1.2;
            totalVolume += (parseFloat(set.weight) || 0) * (parseInt(set.reps) || 0);
          }
        }

        // Find previous record guide
        const prevText = this.findPreviousRecord(workout.id, setIndex, isCardio);
        const guideHTML = prevText ? `<span class="prev-record-guide">${prevText}</span>` : '';

        const setRow = document.createElement('div');
        setRow.className = `set-row${isCompleted ? ' completed' : ''}`;
        
        if (isCardio) {
          setRow.innerHTML = `
            <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''} data-workout="${workoutIndex}" data-set="${setIndex}">
            <div class="set-index" style="display:flex; flex-direction:column; gap:2px; line-height:1.2;">
              <span style="font-weight:700;">${setIndex + 1}세트</span>
              ${guideHTML}
            </div>
            
            <div class="set-input-group">
              <input type="number" class="set-weight" value="${set.weight}" min="0" placeholder="분" data-workout="${workoutIndex}" data-set="${setIndex}" ${isCompleted ? 'disabled' : ''}>
              <span>분</span>
            </div>
            
            <div class="set-input-group">
              <input type="number" class="set-reps" value="${set.reps}" min="0" step="0.1" placeholder="km" data-workout="${workoutIndex}" data-set="${setIndex}" ${isCompleted ? 'disabled' : ''}>
              <span>km</span>
            </div>
            
            <button class="delete-set-btn" data-workout="${workoutIndex}" data-set="${setIndex}">
              <i data-lucide="minus-circle" style="width: 16px; height: 16px;"></i>
            </button>
          `;
        } else {
          setRow.innerHTML = `
            <input type="checkbox" class="set-complete-chk" ${isCompleted ? 'checked' : ''} data-workout="${workoutIndex}" data-set="${setIndex}">
            <div class="set-index" style="display:flex; flex-direction:column; gap:2px; line-height:1.2;">
              <span style="font-weight:700;">${setIndex + 1}세트</span>
              ${guideHTML}
            </div>
            
            <div class="set-input-group">
              <input type="number" class="set-weight" value="${set.weight}" min="0" step="2.5" data-workout="${workoutIndex}" data-set="${setIndex}" ${isCompleted ? 'disabled' : ''}>
              <span>kg</span>
            </div>
            
            <div class="set-input-group">
              <input type="number" class="set-reps" value="${set.reps}" min="0" data-workout="${workoutIndex}" data-set="${setIndex}" ${isCompleted ? 'disabled' : ''}>
              <span>회</span>
            </div>
            
            <button class="delete-set-btn" data-workout="${workoutIndex}" data-set="${setIndex}">
              <i data-lucide="minus-circle" style="width: 16px; height: 16px;"></i>
            </button>
          `;
        }

        const chk = setRow.querySelector('.set-complete-chk');
        const weightInput = setRow.querySelector('.set-weight');
        const repsInput = setRow.querySelector('.set-reps');
        const deleteSetBtn = setRow.querySelector('.delete-set-btn');

        chk.addEventListener('change', (e) => {
          const completed = e.target.checked;
          this.app.updateWorkoutSet(workoutIndex, setIndex, 'completed', completed);
          
          if (completed) {
            setRow.classList.add('completed');
            weightInput.disabled = true;
            repsInput.disabled = true;
            
            if (this.app.timer && !isCardio) {
              this.app.timer.start();
            }
            
            if (this.app.prDetector && !isCardio) {
              this.app.prDetector.checkNewPR(workout, set);
            }
          } else {
            setRow.classList.remove('completed');
            weightInput.disabled = false;
            repsInput.disabled = false;
          }
          
          this.render(); 
        });

        weightInput.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value) || 0;
          this.app.updateWorkoutSet(workoutIndex, setIndex, 'weight', val);
        });

        repsInput.addEventListener('input', (e) => {
          const val = isCardio ? (parseFloat(e.target.value) || 0) : (parseInt(e.target.value) || 0);
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

    this.updateCoachingFeedback(totalSets, totalVolume, totalCalories);

    if (window.lucide) window.lucide.createIcons();
  }

  updateCoachingFeedback(totalSets, totalVolume, totalCalories = 0) {
    this.metricTotalSets.textContent = `${totalSets} 세트`;
    this.metricTotalVolume.textContent = `${totalVolume.toLocaleString()} kg`;
    if (this.metricTotalCalories) {
      this.metricTotalCalories.textContent = `${Math.round(totalCalories)} kcal`;
    }

    const userProfile = JSON.parse(localStorage.getItem('vitalfit_user_profile')) || {};
    const goal = userProfile.profileGoal || 'diet';
    const level = userProfile.profileLevel || 'beginner';
    
    let badgeHTML = '';
    let feedbackText = '';

    if (totalSets === 0) {
      badgeHTML = `<i data-lucide="user-check" style="width: 14px; height: 14px;"></i><span>대기 중</span>`;
      feedbackText = `오늘 운동을 시작해 보세요! 입력하신 운동과 세트 수를 바탕으로 AI 트레이너가 실시간 운동 강도 조언과 운동 꿀팁을 제공합니다. 우측 하단 'AI트레이너' 탭에서 나만의 맞춤 PT 루틴을 추천받아 등록할 수도 있습니다!`;
      this.coachingStatusBadge.style.background = 'rgba(255, 255, 255, 0.05)';
      this.coachingStatusBadge.style.color = 'var(--text-muted)';
    } 
    else if (totalSets >= 1 && totalSets <= 5) {
      badgeHTML = `<i data-lucide="flame" style="width: 14px; height: 14px;"></i><span>워밍업 단계</span>`;
      feedbackText = `가벼운 워밍업 단계입니다. 총 <strong>${Math.round(totalCalories)} kcal</strong>를 소모하셨습니다. 관절 부상을 피하기 위해 본 세트에 진입하기 전 관절을 충분히 풀어주세요. 현재 목표(${this.getGoalKorean(goal)})를 향해 이제 점진적으로 운동 강도를 올리며 메인 세트로 나아갑시다.`;
      this.coachingStatusBadge.style.background = 'rgba(59, 130, 246, 0.15)';
      this.coachingStatusBadge.style.color = 'var(--color-secondary)';
    } 
    else if (totalSets >= 6 && totalSets <= 12) {
      badgeHTML = `<i data-lucide="zap" style="width: 14px; height: 14px;"></i><span>기초 강도 진입</span>`;
      feedbackText = `적정한 훈련 강도에 들어섰습니다. 오늘 벌써 <strong>${Math.round(totalCalories)} kcal</strong>를 태웠습니다! ${level === 'beginner' ? '초보자 레벨에서 무리하지 않고 기초 체력을 기르기에 완벽한 볼륨입니다.' : '본격적인 메인 훈련 볼륨입니다.'} 현재 소화한 ${totalVolume.toLocaleString()}kg의 부하는 근육 자극을 주기에 충분합니다. 부상에 유의하여 다음 세트도 완수해보세요!`;
      this.coachingStatusBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      this.coachingStatusBadge.style.color = 'var(--color-accent)';
    } 
    else if (totalSets >= 13 && totalSets <= 22) {
      badgeHTML = `<i data-lucide="award" style="width: 14px; height: 14px;"></i><span>최적의 훈련 볼륨 (강력 추천)</span>`;
      feedbackText = `전담 트레이너 강력 추천 볼륨입니다! 오늘 총 <strong>${totalSets}세트</strong>를 완수하여 총 <strong>${Math.round(totalCalories)} kcal</strong>를 폭발적으로 연소했습니다! 근육에 매우 효과적인 자극이 축적되었으니 30분 이내에 양질의 단백질을 보충하고 충분한 숙면을 취해 근성장을 극대화하세요. 수고하셨습니다! 🚀`;
      this.coachingStatusBadge.style.background = 'rgba(16, 185, 129, 0.15)';
      this.coachingStatusBadge.style.color = 'var(--color-primary)';
    } 
    else {
      badgeHTML = `<i data-lucide="alert-triangle" style="width: 14px; height: 14px;"></i><span>오버트레이닝 우려 (주의)</span>`;
      feedbackText = `오늘 과도한 훈련량(${totalSets}세트)을 기록하고 있습니다 (소모 칼로리: <strong>${Math.round(totalCalories)} kcal</strong>). 일정 피로 수준을 초과해 운동하면 부상 위험이 가파르게 상승하고 피로 누적으로 효율이 급감합니다. 오늘의 세션은 여기서 안전하게 마무리하고 폼롤러 스트레칭으로 긴장된 몸을 풀어주세요!`;
      this.coachingStatusBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      this.coachingStatusBadge.style.color = '#ef4444';
    }

    this.coachingStatusBadge.innerHTML = badgeHTML;
    this.coachingFeedbackText.innerHTML = feedbackText;
  }

  getGoalKorean(goal) {
    const map = { diet: '지방 감량', bulk: '근육량 증가', strength: '근력 스트렝스 향상' };
    return map[goal] || goal;
  }

  addWorkout(exerciseId, name, category) {
    const date = this.app.selectedDate;
    const workouts = this.app.getWorkoutsForDate(date);
    
    const exists = workouts.some(w => w.id === exerciseId);
    if (exists) {
      alert('이미 오늘의 운동 목록에 추가된 운동입니다.');
      return;
    }

    const isCardio = category === 'cardio';
    const newWorkout = {
      id: exerciseId,
      name: name,
      category: category,
      sets: isCardio ? [{ weight: 30, reps: 3.0 }] : [{ weight: 40, reps: 10 }]
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
    const isCardio = workouts[workoutIndex].category === 'cardio';
    
    const lastSet = sets[sets.length - 1] || (isCardio ? { weight: 30, reps: 3.0 } : { weight: 40, reps: 10 });
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

  findPreviousRecord(exerciseId, setIndex, isCardio) {
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
          return isCardio 
            ? `이전: ${targetSet.weight}분 x ${targetSet.reps}km`
            : `이전: ${targetSet.weight}kg x ${targetSet.reps}회`;
        }
      }
    }
    return '';
  }

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

  applyTemplate(name, workouts) {
    if (confirm(`'${name}' 루틴의 운동들을 오늘 일지에 불러올까요?
(기존 기록에 누적되어 추가됩니다.)`)) {
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
    this.calculateBmrBtn = document.getElementById('calculate-bmr-btn');
    this.profileGender = document.getElementById('profile-gender');
    this.profileAge = document.getElementById('profile-age');
    this.profileHeight = document.getElementById('profile-height');
    this.profileWeight = document.getElementById('profile-weight');
    this.profileGoal = document.getElementById('profile-goal');
    this.profileLevel = document.getElementById('profile-level');
    this.bmrResultBox = document.getElementById('bmr-result-box');

    this.recommendRoutineBtn = document.getElementById('recommend-routine-btn');
    this.suggestedRoutineBox = document.getElementById('suggested-routine-box');
    this.suggestedRoutineTitle = document.getElementById('suggested-routine-title');
    this.suggestedRoutineList = document.getElementById('suggested-routine-list');
    this.suggestedRoutineLevelTag = document.getElementById('suggested-routine-level-tag');
    this.suggestedRoutineGuideBox = document.getElementById('suggested-routine-guide-box');
    this.applyRoutineBtn = document.getElementById('apply-routine-btn');
    this.routineSplitSelect = document.getElementById('routine-split-select');

    this.currentSuggestedRoutine = null;

    // 주간 루틴 플래너 DOM 엘리먼트
    this.dayTabBtns = document.querySelectorAll('.day-tab-btn');
    this.weeklyExercisesList = document.getElementById('weekly-routine-exercises-list');
    this.weeklyPartSelect = document.getElementById('weekly-routine-part-select');
    this.weeklyExerciseSelect = document.getElementById('weekly-routine-exercise-select');
    this.weeklyAddExBtn = document.getElementById('weekly-routine-add-ex-btn');
    this.weeklyLoadTodayBtn = document.getElementById('weekly-routine-load-today-btn');
    this.weeklySaveBtn = document.getElementById('weekly-routine-save-btn');

    this.currentWeeklyDay = 0; // 월요일
    this.weeklyRoutines = JSON.parse(localStorage.getItem('vitalfit_weekly_routines')) || {
      0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []
    };

    this.initEvents();
    this.loadUserProfile();
    this.initWeeklyPlanner();
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

      this.saveProfileAndCalculateBMR(true); // 실시간 자동 계산
    }
  }

  saveProfileAndCalculateBMR(silent = false) {
    const gender = this.profileGender.value;
    const age = parseInt(this.profileAge.value) || 28;
    const height = parseFloat(this.profileHeight.value) || 175;
    const weight = parseFloat(this.profileWeight.value) || 70;
    const goal = this.profileGoal.value;
    const level = this.profileLevel.value;

    const profileData = {
      profileGender: gender,
      profileAge: age,
      profileHeight: height,
      profileWeight: weight,
      profileGoal: goal,
      profileLevel: level
    };

    localStorage.setItem('vitalfit_user_profile', JSON.stringify(profileData));

    // BMR 계산 (Harris-Benedict Equation)
    let bmr = 0;
    if (gender === 'male') {
      bmr = 66.47 + (13.75 * weight) + (5 * height) - (6.76 * age);
    } else {
      bmr = 655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }
    bmr = Math.round(bmr);

    // TDEE 계산 (활동 대사량)
    let tdeeMultiplier = 1.375; // intermediate active as default
    if (level === 'beginner') tdeeMultiplier = 1.2;
    else if (level === 'advanced') tdeeMultiplier = 1.55;
    const tdee = Math.round(bmr * tdeeMultiplier);

    // 목표 칼로리 설정
    let calorieGoal = tdee;
    let goalText = '';
    if (goal === 'diet') {
      calorieGoal = Math.round(tdee - 500);
      goalText = '체지방 감량을 위해 일일 대사량 대비 500kcal를 제한하여 처방했습니다.';
    } else if (goal === 'bulk') {
      calorieGoal = Math.round(tdee + 300);
      goalText = '근육량 증가를 위해 일일 대사량 대비 300kcal를 잉여하여 처방했습니다.';
    } else {
      calorieGoal = tdee;
      goalText = '체중 및 근력 유지를 목적으로 한 등칼로리 처방입니다.';
    }

    this.bmrResultBox.style.display = 'block';
    this.bmrResultBox.innerHTML = `
      <div style="font-weight:700; color:var(--color-secondary); margin-bottom: 6px;">🤖 전담 트레이너 맞춤 처방</div>
      • 나의 기초대사량(BMR): <strong>${bmr} kcal</strong><br>
      • 나의 일일 대사량(TDEE): <strong>${tdee} kcal</strong><br>
      • 하루 영양 권장 섭취량: <strong style="color:var(--color-primary);">${calorieGoal} kcal</strong>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">${goalText}</div>
    `;

    if (!silent) {
      alert('신체 프로필 및 AI 트레이너 데이터 저장이 완료되었습니다!');
      this.app.tracker.render();
    }
  }

  // AI PT Routine Recommendation Engine
  generatePTRoutine() {
    const split = this.routineSplitSelect.value;
    const level = this.profileLevel.value;
    const goal = this.profileGoal.value;

    this.suggestedRoutineBox.style.display = 'block';
    this.suggestedRoutineList.innerHTML = '';
    
    let setMultiplier = 3;
    let repCount = 10;
    let intensityText = '초급자';
    
    if (level === 'beginner') {
      setMultiplier = 3;
      repCount = 12;
      intensityText = '초급자 (가벼운 무게 / 고반복)';
    } else if (level === 'intermediate') {
      setMultiplier = 4;
      repCount = 10;
      intensityText = '중급자 (적정 중량 / 고자극)';
    } else {
      setMultiplier = 5;
      repCount = 8;
      intensityText = '상급자 (고중량 / 점진적 과부하)';
    }

    this.suggestedRoutineLevelTag.textContent = intensityText;
    
    const getRandomElements = (arr, num) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    const getRecommendWeight = (exId, category) => {
      if (category === 'cardio') {
        if (level === 'beginner') return 15;
        if (level === 'intermediate') return 25;
        return 35;
      }
      const met = MET_VALUES[exId] || 4.0;
      let baseWeight = 20;
      
      if (met >= 6.0) baseWeight = 40; 
      else if (met <= 3.5) baseWeight = 10; 
      
      if (exId === 'push_up' || exId === 'pull_up' || exId === 'dips' || exId === 'plank') {
        return 0;
      }
      
      let factor = 1.0;
      if (level === 'beginner') factor = 0.6;
      else if (level === 'advanced') factor = 1.4;
      
      let finalWeight = Math.round((baseWeight * factor) / 2.5) * 2.5;
      const offset = (Math.floor(Math.random() * 3) - 1) * 2.5; 
      return Math.max(2.5, finalWeight + offset);
    };

    const routineExercises = [];

    const customPool = { chest: [], back: [], shoulders: [], legs: [], arms: [], abs: [], cardio: [] };
    const allHistory = this.app.state.workouts || {};
    Object.keys(allHistory).forEach(d => {
      allHistory[d].forEach(w => {
        if (w.id.startsWith('custom_')) {
          const cat = w.category || 'custom';
          if (customPool[cat] !== undefined) {
            const exists = customPool[cat].some(ex => ex.name === w.name);
            if (!exists) {
              customPool[cat].push({ id: w.id, name: w.name, category: cat });
            }
          }
        }
      });
    });

    if (split === 'push') {
      this.suggestedRoutineTitle.textContent = '가슴 & 삼두 (밀기 6종목 추천 루틴)';
      
      const chestPool = [...(exercisesData.chest || []), ...customPool.chest];
      const shoulderPressPool = [...((exercisesData.shoulders || []).filter(ex => ex.id.includes('press') || ex.id === 'overhead_press')), ...customPool.shoulders.filter(ex => ex.name.includes('프레스') || ex.name.includes('밀기'))];
      const tricepsPool = [...((exercisesData.arms || []).filter(ex => ex.id.includes('triceps') || ex.id.includes('kickback') || ex.id.includes('dips') || ex.id.includes('ext'))), ...customPool.arms.filter(ex => ex.name.includes('삼두') || ex.name.includes('다운') || ex.name.includes('킥백'))];

      getRandomElements(chestPool, 3).forEach(ex => routineExercises.push(ex));
      getRandomElements(shoulderPressPool.length > 0 ? shoulderPressPool : (exercisesData.shoulders || []), 1).forEach(ex => routineExercises.push(ex));
      getRandomElements(tricepsPool.length > 0 ? tricepsPool : (exercisesData.arms || []), 2).forEach(ex => routineExercises.push(ex));
    } 
    else if (split === 'pull') {
      this.suggestedRoutineTitle.textContent = '등 & 이두 (당기기 6종목 추천 루틴)';
      
      const backPool = [...(exercisesData.back || []), ...customPool.back];
      const bicepsPool = [...((exercisesData.arms || []).filter(ex => ex.id.includes('biceps') || ex.id.includes('curl'))), ...customPool.arms.filter(ex => ex.name.includes('이두') || ex.name.includes('컬'))];
      const absPool = [...(exercisesData.abs || []), ...customPool.abs];

      getRandomElements(backPool, 3).forEach(ex => routineExercises.push(ex));
      getRandomElements(bicepsPool.length > 0 ? bicepsPool : (exercisesData.arms || []), 2).forEach(ex => routineExercises.push(ex));
      getRandomElements(absPool, 1).forEach(ex => routineExercises.push(ex));
    } 
    else {
      this.suggestedRoutineTitle.textContent = '하체 & 어깨 (하체/어깨 6종목 추천 루틴)';
      
      const legsPool = [...(exercisesData.legs || []), ...customPool.legs];
      const shoulderRaisePool = (exercisesData.shoulders || []).filter(ex => !ex.id.includes('press') && ex.id !== 'overhead_press');
      const cardioPool = [...(exercisesData.cardio || []), ...customPool.cardio];

      getRandomElements(legsPool, 3).forEach(ex => routineExercises.push(ex));
      getRandomElements(shoulderRaisePool.length > 0 ? shoulderRaisePool : (exercisesData.shoulders || []), 2).forEach(ex => routineExercises.push(ex));
      getRandomElements(cardioPool, 1).forEach(ex => routineExercises.push(ex));
    }

    if (routineExercises.length < 6) {
      const fallbackPool = [...exercisesData.chest, ...exercisesData.back, ...exercisesData.legs];
      getRandomElements(fallbackPool, 6 - routineExercises.length).forEach(ex => routineExercises.push(ex));
    }

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
      const unitText = isCardio ? `${ex.sets[0].weight}분 (${ex.sets[0].reps}km)` : `${ex.sets.length}세트 x ${ex.sets[0].weight}kg (${ex.sets[0].reps}회)`;

      el.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:var(--color-primary); color:#080b10; font-size:0.7rem; font-weight:800;">${idx + 1}</span>
          <span style="font-weight:600; font-size:0.85rem;">${ex.name.split(' (')[0]}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted);">${unitText}</span>
      `;
      this.suggestedRoutineList.appendChild(el);
    });

    let guideHTML = '';
    if (split === 'push') {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> 밀기(Push) 루틴 추천 수행 순서
        </div>
        <strong>1. 선 가슴 타겟 (1~4단계)</strong>: 가장 고중량이 가능한 다관절 <strong>벤치 프레스</strong>와 <strong>인클라인 프레스</strong>를 1순위로 몰아쳐 가슴 근육에 강한 무게 과부하를 가합니다. 이어서 고립 운동인 <strong>펙 덱 플라이</strong>로 가슴 안쪽 라인을 쥐어짜고, 맨몸 <strong>푸쉬업</strong>으로 가슴 근육을 완전 탈진(Failure) 상태로 유도합니다.<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. 후 삼두 타겟 (5~6단계)</strong>: 가슴 밀기 훈련 시 보조로 활성화되었던 팔 뒤쪽 삼두근을 <strong>트라이셉스 푸쉬다운</strong>과 <strong>덤벨 킥백</strong> 순으로 고립 이완/수축하여 매끈한 삼두 볼륨을 조각합니다.<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">💡 권장 사항: 세트 간 휴식은 <strong>90초</strong>, 운동 전환 시에는 <strong>2~3분</strong> 충분히 호흡을 고르고 수분을 자주 섭취하세요!</div>
      `;
    } else if (split === 'pull') {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> 당기기(Pull) 루틴 추천 수행 순서
        </div>
        <strong>1. 선 등 후면 자극 (1~4단계)</strong>: 전신 근력과 척추 기립 코어 근육 전체를 동원하는 고중량 <strong>데드리프트</strong>를 첫 번째 종목으로 배치해 가장 많은 체력을 쏟습니다. 뒤이어 <strong>랫 풀 다운</strong>과 <strong>바벨 로우</strong>로 등의 넓이/두께를 골고루 먹인 후, 광배근 끝판왕인 맨몸 <strong>풀업</strong>을 한계 횟수로 매달려 완료합니다.<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. 후 이두 타겟 (5~6단계)</strong>: 등 당기기 동작 시 예열된 이두근에 이두 봉우리를 만드는 <strong>덤벨 바이셉스 컬</strong>을 먹이고, <strong>해머 컬</strong>을 통해 전완근과 이두 바깥쪽 두께 라인을 완성합니다.<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">💡 권장 사항: 등 운동은 면적이 넓어 심박수가 매우 가파르게 오릅니다. 세트 간 최소 <strong>2분</strong> 넉넉히 휴식하여 부상을 방지하세요.</div>
      `;
    } else {
      guideHTML = `
        <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 8px; display:flex; align-items:center; gap:4px;">
          <i data-lucide="info" style="width:14px; height:14px;"></i> 하체 & 어깨 루틴 추천 수행 순서
        </div>
        <strong>1. 선 하체 대근육 (1~3단계)</strong>: 전신의 가장 묵직한 하체 기둥을 다스리는 프리웨이트 <strong>스쿼트</strong>를 가장 컨디션이 우수한 처음에 메인으로 진행합니다. 이어서 고중량 머신 <strong>레그 프레스</strong>를 밟아 대퇴사두를 조지고, <strong>레그 익스텐션</strong>으로 대퇴사두근의 고립 갈라짐을 쥐어짜 단련합니다.<br>
        <span style="display:block; margin-top:4px;"></span>
        <strong>2. 후 어깨 3D 삼각근 (4~6단계)</strong>: 전면 어깨 프레임의 메인 스트렝스인 <strong>오버헤드 프레스</strong>를 곧게 밀어준 후, 측면 삼각근을 둥글게 키워줄 <strong>사이드 레터럴 레이즈</strong>, 그리고 입체적인 후면 마무리를 위한 <strong>벤트 오버 레터럴 레이즈</strong> 순으로 어깨 3면을 골고루 채워 완성합니다.<br>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">💡 권장 사항: 무거운 무릎/요추 가해 하체 훈련이 포함되므로, 스쿼트와 레그프레스 사이에는 <strong>2~3분</strong> 충분히 긴 호흡으로 관절 휴식을 취해 요통을 예방하세요.</div>
      `;
    }
    this.suggestedRoutineGuideBox.innerHTML = guideHTML;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  applyRoutineToLog() {
    if (!this.currentSuggestedRoutine || this.currentSuggestedRoutine.length === 0) return;

    const date = this.app.selectedDate;
    const todayWorkouts = this.app.getWorkoutsForDate(date);

    let addedCount = 0;
    this.currentSuggestedRoutine.forEach(ex => {
      const exists = todayWorkouts.some(w => w.id === ex.id);
      if (!exists) {
        todayWorkouts.push(ex);
        addedCount++;
      }
    });

    this.app.saveWorkoutsForDate(date, todayWorkouts);
    this.app.tracker.render();
    alert(`🤖 AI 추천 루틴 중 ${addedCount}개 운동 구성을 오늘 일지에 등록했습니다!`);
    
    this.app.switchTab('tracker');
  }

  // 주간 루틴 플래너 기능
  initWeeklyPlanner() {
    this.dayTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.dayTabBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'rgba(255,255,255,0.05)';
          b.style.color = 'var(--text-muted)';
          b.style.border = '1px solid var(--border-color)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--color-secondary)';
        btn.style.color = 'white';
        btn.style.border = 'none';

        this.currentWeeklyDay = parseInt(btn.getAttribute('data-day'));
        this.renderWeeklyRoutine();
      });
    });

    this.weeklyPartSelect.addEventListener('change', () => {
      this.updateWeeklyExerciseOptions();
    });

    this.weeklyAddExBtn.addEventListener('click', () => {
      this.addWeeklyExercise();
    });

    this.weeklyLoadTodayBtn.addEventListener('click', () => {
      this.loadWeeklyRoutineToToday();
    });

    this.weeklySaveBtn.addEventListener('click', () => {
      this.saveWeeklyRoutines();
      alert('주간 루틴 설정이 성공적으로 저장되었습니다!');
    });

    this.updateWeeklyExerciseOptions();
    this.renderWeeklyRoutine();
  }

  updateWeeklyExerciseOptions() {
    const part = this.weeklyPartSelect.value;
    this.weeklyExerciseSelect.innerHTML = '';
    const list = exercisesData[part] || [];
    list.forEach(ex => {
      const opt = document.createElement('option');
      opt.value = ex.id;
      opt.textContent = ex.name.split(' (')[0];
      this.weeklyExerciseSelect.appendChild(opt);
    });
  }

  addWeeklyExercise() {
    const part = this.weeklyPartSelect.value;
    const exId = this.weeklyExerciseSelect.value;
    if (!exId) return;

    const list = exercisesData[part] || [];
    const exObj = list.find(ex => ex.id === exId);
    if (!exObj) return;

    const day = this.currentWeeklyDay;
    const exists = this.weeklyRoutines[day].some(w => w.id === exId);
    if (exists) {
      alert('이미 해당 요일에 등록된 운동입니다.');
      return;
    }

    this.weeklyRoutines[day].push({
      id: exObj.id,
      name: exObj.name,
      category: part
    });

    this.saveWeeklyRoutines();
    this.renderWeeklyRoutine();
  }

  renderWeeklyRoutine() {
    this.weeklyExercisesList.innerHTML = '';
    const day = this.currentWeeklyDay;
    const list = this.weeklyRoutines[day] || [];

    if (list.length === 0) {
      this.weeklyExercisesList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 12px; font-size: 0.8rem; background: rgba(255,255,255,0.01); border: 1px dashed var(--border-color); border-radius: var(--radius-sm);">
          등록된 운동이 없습니다. 운동을 추가해 보세요!
        </div>
      `;
      return;
    }

    list.forEach((w, idx) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.justify = 'space-between';
      item.style.alignItems = 'center';
      item.style.padding = '8px 12px';
      item.style.background = 'rgba(255,255,255,0.02)';
      item.style.border = '1px solid var(--border-color)';
      item.style.borderRadius = 'var(--radius-sm)';
      item.innerHTML = `
        <span style="font-size: 0.85rem; font-weight: 600;">${w.name.split(' (')[0]} <span style="font-size: 0.7rem; color: var(--color-secondary); margin-left:4px;">(${this.app.tracker.getCategoryKorean(w.category)})</span></span>
        <button class="btn-delete-weekly-ex" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:2px; display:flex; align-items:center;">
          <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
        </button>
      `;
      item.querySelector('.btn-delete-weekly-ex').addEventListener('click', () => {
        this.removeWeeklyExercise(idx);
      });
      this.weeklyExercisesList.appendChild(item);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  removeWeeklyExercise(idx) {
    const day = this.currentWeeklyDay;
    this.weeklyRoutines[day].splice(idx, 1);
    this.saveWeeklyRoutines();
    this.renderWeeklyRoutine();
  }

  saveWeeklyRoutines() {
    localStorage.setItem('vitalfit_weekly_routines', JSON.stringify(this.weeklyRoutines));
  }

  loadWeeklyRoutineToToday() {
    const day = this.currentWeeklyDay;
    const list = this.weeklyRoutines[day] || [];
    if (list.length === 0) {
      alert('현재 요일에 등록된 운동이 없습니다. 먼저 운동을 추가해 주세요.');
      return;
    }

    const date = this.app.selectedDate;
    const todayWorkouts = this.app.getWorkoutsForDate(date);

    let added = 0;
    list.forEach(w => {
      const exists = todayWorkouts.some(tw => tw.id === w.id);
      if (!exists) {
        const isCardio = w.category === 'cardio';
        todayWorkouts.push({
          id: w.id,
          name: w.name,
          category: w.category,
          sets: isCardio ? [{ weight: 30, reps: 3.0 }] : [{ weight: 40, reps: 10 }]
        });
        added++;
      }
    });

    if (added > 0) {
      this.app.saveWorkoutsForDate(date, todayWorkouts);
      this.app.tracker.render();
    }

    alert(`📅 현재 요일 루틴에서 ${added}개의 운동을 오늘 일지에 불러왔습니다!`);
    this.app.switchTab('tracker');
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

  renderVolumeChart() {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded. Skipping line chart rendering.');
      return;
    }
    const ctx = document.getElementById('volumeChart').getContext('2d');
    if (this.volumeChart) {
      this.volumeChart.destroy();
    }

    const dataLabels = [];
    const volumeData = [];

    const today = new Date();
    for (let i = 3; i >= 0; i--) {
      const startOffset = i * 7 + today.getDay(); 
      const start = new Date(today);
      start.setDate(today.getDate() - startOffset);
      
      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      const label = `${start.getMonth() + 1}/${start.getDate()}~${end.getMonth() + 1}/${end.getDate()}`;
      dataLabels.push(label);

      let weeklyTotal = 0;
      for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
        const workouts = this.app.getWorkoutsForDate(dateStr);
        workouts.forEach(w => {
          if (w.category !== 'cardio') { 
            w.sets.forEach(s => {
              if (s.completed) {
                weeklyTotal += (s.weight * s.reps);
              }
            });
          }
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
          borderColor: '#10b981',
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

  renderRatioChart() {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded. Skipping doughnut chart rendering.');
      return;
    }
    const ctx = document.getElementById('partRatioChart').getContext('2d');
    if (this.partRatioChart) {
      this.partRatioChart.destroy();
    }

    const categories = ['chest', 'back', 'shoulders', 'legs', 'arms', 'abs', 'cardio', 'custom'];
    const labelMap = { chest: '가슴', back: '등', shoulders: '어깨', legs: '하체', arms: '팔', abs: '복근', cardio: '유산소', custom: '기타' };
    const counts = { chest: 0, back: 0, shoulders: 0, legs: 0, arms: 0, abs: 0, cardio: 0, custom: 0 };

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
    const backgroundColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#ff4b4b', '#6b7280'];

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

  renderStreakAndHeatmap() {
    const streakDaysBadge = document.getElementById('streak-days-badge');
    const streakCheerMessage = document.getElementById('streak-cheer-message');
    const heatmapContainer = document.getElementById('attendance-heatmap-container');
    
    if (!streakDaysBadge || !heatmapContainer) return;
    
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
}// ==========================================
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

    const current1RM = set.weight * (1 + set.reps / 30);
    const prRecords = JSON.parse(localStorage.getItem('vitalfit_pr_records')) || {};

    const existingPR = prRecords[workout.id];

    if (!existingPR || current1RM > existingPR.oneRepMax + 0.1) {
      prRecords[workout.id] = {
        name: workout.name,
        weight: set.weight,
        reps: set.reps,
        oneRepMax: current1RM,
        date: this.app.selectedDate
      };
      localStorage.setItem('vitalfit_pr_records', JSON.stringify(prRecords));

      this.triggerConfetti();

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
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }
}// ==========================================
// 9. PREMIUM: WORKOUT ACTIVE STOPWATCH
// ==========================================
class WorkoutStopwatch {
  constructor(app) {
    this.app = app;
    this.displayTime = document.getElementById('stopwatch-display-time');
    this.startBtn = document.getElementById('stopwatch-start-btn');
    this.finishBtn = document.getElementById('stopwatch-finish-btn');
    this.iconStatus = document.getElementById('stopwatch-icon-status');
    
    this.startTime = null;
    this.timerInterval = null;
    
    this.initEvents();
    this.checkActiveSession();
  }

  initEvents() {
    this.startBtn.addEventListener('click', () => this.start());
    this.finishBtn.addEventListener('click', () => this.finish());
  }

  checkActiveSession() {
    const activeStart = localStorage.getItem('vitalfit_active_stopwatch_start');
    if (activeStart) {
      this.startTime = parseInt(activeStart);
      this.resume();
    }
  }

  start() {
    this.startTime = Date.now();
    localStorage.setItem('vitalfit_active_stopwatch_start', this.startTime.toString());
    
    this.startBtn.style.display = 'none';
    this.finishBtn.style.display = 'inline-block';
    
    this.iconStatus.setAttribute('class', 'pulse-green');
    this.iconStatus.setAttribute('data-lucide', 'circle-stop');
    this.iconStatus.style.color = '#ef4444'; 
    if (window.lucide) window.lucide.createIcons();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      const elapsedMs = Date.now() - this.startTime;
      this.updateDisplay(elapsedMs);
    }, 1000);
    
    this.updateDisplay(0);
  }

  resume() {
    this.startBtn.style.display = 'none';
    this.finishBtn.style.display = 'inline-block';
    
    this.iconStatus.setAttribute('class', 'pulse-green');
    this.iconStatus.setAttribute('data-lucide', 'circle-stop');
    this.iconStatus.style.color = '#ef4444'; 
    if (window.lucide) window.lucide.createIcons();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      const elapsedMs = Date.now() - this.startTime;
      this.updateDisplay(elapsedMs);
    }, 1000);
    
    this.updateDisplay(Date.now() - this.startTime);
  }

  finish() {
    if (!this.startTime) return;
    
    const elapsedMs = Date.now() - this.startTime;
    clearInterval(this.timerInterval);
    
    localStorage.removeItem('vitalfit_active_stopwatch_start');
    
    this.startBtn.style.display = 'inline-block';
    this.finishBtn.style.display = 'none';
    
    this.iconStatus.setAttribute('class', '');
    this.iconStatus.setAttribute('data-lucide', 'play');
    this.iconStatus.style.color = 'var(--color-primary)';
    if (window.lucide) window.lucide.createIcons();
    
    const elapsedSecs = Math.floor(elapsedMs / 1000);
    const mins = Math.floor(elapsedSecs / 60);
    const secs = elapsedSecs % 60;
    const timeStr = `${mins}분 ${secs}초`;

    const date = this.app.selectedDate;
    const durations = JSON.parse(localStorage.getItem('vitalfit_workouts_durations')) || {};
    durations[date] = timeStr;
    localStorage.setItem('vitalfit_workouts_durations', JSON.stringify(durations));
    
    this.startTime = null;
    this.updateDisplay(0);

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
