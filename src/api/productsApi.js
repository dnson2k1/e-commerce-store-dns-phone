const products = [
  {
    id: "1",
    name: "iPhone SE (2020)",
    slug: "iphone-se-2020",
    price: 13450000,
    discount: 799000,
    evaluate: 4,
    colors: ["white", "black", "red"],
    capacity: ["64GB", "128GB"],
    description:
      "iPhone SE 2020 đã bất ngờ ra mắt với thiết kế 4.7 inch nhỏ gọn, chip A13 Bionic mạnh mẽ như trên iPhone 11 và đặc biệt sở hữu mức giá tốt chưa từng có. <br> iPhone SE 2020 vẫn có kích thước 4.7 inch, tỉ lệ màn hình cũ 16:9 và các cạnh viền vẫn dày. Tuy nhiên kích thước chung của máy vẫn thuộc hàng nhỏ gọn, cực kì vừa vặn và dễ sử dụng bằng một tay. <br> Apple trang bị cho SE 2020 màn hình có độ phân giải HD (1334 x 750-pixel) đạt chuẩn Retina, hỗ trợ đầy đủ các công nghệ True Tone, Haptic Touch, và HDR10,…",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-2020-trang-600x600-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-trang-1-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-den-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-do-1-1-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/230410/Slider/iphone-se-64gb-2020-hop-moi-101120-0837010.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/230410/Kit/iphone-se-64gb-2020-hop-moi-note.jpg",
    },
    system: {
      screen: "IPS LCD4.7 Retina HD",
      operating: "iOS 15",
      camera: "12 MP",
      chip: "Apple A13 Bionic",
      ram: "3 GB",
      memory: "64 GB",
      pin: "1821 mAh18 W",
    },
    categorySlug: "apple",
  },
  {
    id: "2",
    name: "iPhone 13 Pro Max",
    slug: "iphone-13-pro-max",
    price: 33990000,
    discount: 199000,
    evaluate: 4,
    colors: ["yello", "grey", "silver"],
    capacity: ["128GB", "256GB", "512GB", "1TB"],
    description:
      "iPhone 13 Pro Max 128GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.<br> iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iPhone-13-Pro-max-128-tet.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-1.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-grey-1.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-silver-1.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/230529/Slider/vi-vn-iphone-13-pro-max-slider-tong-quan.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/230529/Kit/iphone-13-pro-max-n.jpg",
    },
    system: {
      screen: "OLED6.7 Super Retina XDR",
      operating: "iOS 15",
      camera: "3 camera 12 MP",
      chip: "Apple A15 Bionic",
      ram: "6 GB",
      memory: "128 GB",
      pin: "4352 mAh20 W",
    },
    categorySlug: "apple",
  },
  {
    id: "3",
    name: "iPhone 11",
    slug: "iphone-11",
    price: 16900000,
    discount: 800000,
    evaluate: 5,
    colors: ["Đỏ", "Đen", "Trắng", "Vàng"],
    capacity: ["64GB", "128GB", "256GB"],
    description:
      "Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó <br> Đây là một điều được xem là bước ngoặt bởi những chiếc smartphone Android có nhiều camera hiện nay sẽ thường bị sai lệch về màu sắc khi chuyển đổi qua lại giữa các ống kính gây cảm giác khá khó chịu cho người dùng. <br> Ở mức cấu hình trên giúp điện thoại chơi game tốt với các tựa game phổ biến hiện nay một cách mượt mà, ổn định. Mọi thao tác trên iPhone mới cũng cho tốc độ phản hồi nhanh mà bạn gần như sẽ không cảm nhận được sự giật lag cho dù có sử dụng trong một thời gian dài.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iPhone-11-64-tet.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-den-1-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-vang-1-2-org.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/153856/Kit/iphone-11-note.jpg",
    },
    system: {
      screen: "IPS LCD6.1 Liquid Retina",
      operating: "iOS 15",
      camera: "2 camera 12 MP",
      chip: "Apple A13 Bionic",
      ram: "4 GB",
      memory: "64 GB",
      pin: "3110 mAh18 W",
    },
    categorySlug: "apple",
  },
  {
    id: "4",
    name: "Realme 8",
    slug: "realme-8",

    price: 7290000,
    discount: 399000,
    evaluate: 3,
    colors: ["Bạc", "Đen"],
    capacity: ["64GB", "128GB"],
    description:
      "Điện thoại Realme 8 được ra mắt nằm trong phân khúc tầm trung, có thiết kế đẹp mắt đặc trưng của Realme, smartphone trang bị hiệu năng bên trong đầy mạnh mẽ và có dung lượng pin tương đối lớn. <br> Realme 8 gây ấn tượng với trọng lượng chỉ 177 g, Realme đã kỳ công trong thiết kế để cho ra sản phẩm smartphone gọn nhẹ nhất, các cạnh viền bo cong tinh tế tạo cảm giác thoải mái và siêu dễ chịu trong tay bạn. <br> Tấm nền Super AMOLED được trang bị trên Realme 8, vì vậy mà màn hình của máy sáng rực rỡ, sắc nét dưới độ sáng lên đến 1000 nits, độ tương phản cao giúp điện thoại hiển thị rõ ràng hơn bao giờ hết kể cả bị nắng chói. ",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-bac-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8--den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Slider/vi-vn-realme-8-thietke-slider.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Slider/vi-vn-realme-8-tinhnang-slider.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Kit/realme-8-note.jpg",
    },
    system: {
      screen: "Super AMOLED6.4 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP",
      chip: "MediaTek Helio G95",
      ram: "8 GB",
      memory: "128 GB",
      pin: "5000 mAh30 W",
    },
    categorySlug: "realme",
  },
  {
    id: "5",
    name: "Realme 7i",
    slug: "realme-7i",

    price: 6290000,
    discount: 299000,
    evaluate: 4,
    colors: ["Xanh Dương"],
    capacity: ["4GB", "8GB"],
    description:
      "Tiếp nối bộ đôi đình đám Realme 7 và Realme 7 Pro, Realme đã cho ra mắt thêm thành viên mới Realme 7i với một mức giá hấp dẫn hơn. Máy vẫn giữ lại những thông số ấn tượng như màn hình 90 Hz đi kèm hiệu năng từ Snapdragon 662 cho trải nghiệm mượt mà và ổn định. <br> Tương tự đàn anh, Realme 7i cũng có một vẻ ngoài bóng bẩy hào nhoáng, mọi sự chú ý đều đổ dồn về mặt lưng đường cắt xéo táo bạo cùng hiệu ứng ánh sáng ấn tượng khi nghiêng máy dưới nhiều góc độ.<br> Ở mặt trước, Realme 7i có màn hình siêu tràn viền với camera đục lỗ thời thượng, giúp không gian giải trí được mở rộng tối đa lên tới 6.5 inch nhưng vẫn nhỏ gọn để bạn để vào túi quần, giỏ xách khi mang theo bên mình.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-new-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-1020x680-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-chip.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-thietke.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-tongquan.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Kit/realme-8-note.jpg",
    },
    system: {
      screen: "IPS LCD6.5 HD+",
      operating: "Android 10",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP",
      chip: " Snapdragon 662",
      ram: "8 GB",
      memory: "128 GB",
      pin: "5000 mAh18 W",
    },
    categorySlug: "realme",
  },
  {
    id: "6",
    name: "Realme C21Y ",
    slug: "realme-c21y",

    price: 3690000,
    discount: 500000,
    evaluate: 4,
    colors: ["Xanh Dương", "Đen"],
    capacity: ["3GB", "4GB"],
    description:
      "Thêm một sản phẩm giá tốt đến từ nhà Realme - Realme C21Y 3GB được ra mắt với thiết kế trẻ trung, pin dung lượng lớn cùng máy ảnh nhiều tính năng, đây là những điểm ấn tượng trên chiếc smartphone này.<br>Cảm biến chính 13 MP tích hợp đầy đủ các tính năng như: Night mode, nhận diện khuôn mặt, chụp toàn cảnh, HDR,... mang lại sự phong phú cho bạn tha hồ sáng tạo, đảm bảo mọi nhu cầu chụp ảnh của bạn đều được hỗ trợ tốt.<br>Ống kính macro và cảm biến đo chiều sâu cùng có độ phân giải 2 MP, chụp cận cảnh hay chụp chân dung xóa phông cũng không làm khó được chiếc máy này. Realme C21Y còn được ưu ái khi cung cấp nhiều chức năng chụp độc đáo, những khoảnh khắc đời thường sẽ độc lạ hơn bao giờ hết với những thao tác cực kì đơn giản.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-blue-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-xanh-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Slider/realme-c21y-manhinh-780x433.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Slider/realme-c21y-3gb-140621-0221117.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Kit/realme-c21y-note.jpg",
    },
    system: {
      screen: "IPS LCD6.5 HD+",
      operating: "Android 11",
      camera: "Chính 13 MP & Phụ 2 MP, 2 MP",
      chip: "Spreadtrum T610 8 nhân",
      ram: "3 GB",
      memory: "32 GB",
      pin: "5000 mAh10 W",
    },
    categorySlug: "realme",
  },
  {
    id: "7",
    name: "Samsung Galaxy Z Fold3 ",
    slug: "samsung-galaxy-z-fold3",

    price: 41990000,
    discount: 1900000,
    evaluate: 4,
    colors: ["Bạc", "Đen", "Xanh Rêu"],
    capacity: ["256GB", "512GB"],
    description:
      "Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng <br> Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và ngược lại. <br> Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-gc-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-green-gc-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/226935/Slider/samsung-galaxy-z-fold-3-slider-tong-quan-1020x570.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/226935/Kit/samsung-galaxy-z-fold-3-n.jpg",
    },
    system: {
      screen: "Dynamic AMOLED 2XChính 7.6 & Phụ 6.2 Full HD+",
      operating: "Android 11",
      camera: "3 camera 12 MP",
      chip: "Snapdragon 888",
      ram: "12 GB",
      memory: "256 GB",
      pin: "4400 mAh25 W",
    },
    categorySlug: "samsung",
  },
  {
    id: "8",
    name: "Samsung Galaxy S21 ",
    slug: "samsung-galaxy-s21",

    price: 15990000,
    discount: 1000000,
    evaluate: 4,
    colors: ["Tím", "Xám", "Trắng"],
    capacity: ["128GB", "256GB"],
    description:
      "Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng <br> Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và ngược lại. <br> Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/267211/Samsung-Galaxy-S21-FE-tim-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/267211/samsung-galaxy-s21-fe-tim-1.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/267211/samsung-galaxy-s21-fe-1.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/267211/samsung-galaxy-s21-fe-trang-1-1.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/267211/Slider/samsung-galaxy-s21-FE-5G-tinhnang-slider-1020x570.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/267211/Kit/samsung-galaxy-s21-fe--n.jpg",
    },
    system: {
      screen: "Dynamic AMOLED 2X6.4 Full HD+",
      operating: "Android 12",
      camera: "Chính 12 MP & Phụ 12 MP, 8 MP",
      chip: "Exynos 2100",
      ram: "6 GB",
      memory: "128 GB",
      pin: "4500 mAh25 W",
    },
    categorySlug: "samsung",
  },
  {
    id: "9",
    name: "Samsung Galaxy A52 ",
    slug: "samsung-galaxy-a52",

    price: 9290000,
    discount: 999000,
    evaluate: 3,
    colors: ["Tím", "Xanh Dương", "Đen"],
    capacity: ["128GB", "256GB"],
    description:
      "Galaxy A52 (8GB/128GB) mẫu smartphone thuộc dòng Galaxy A của Samsung, với nhiều sự thay đổi lớn về thiết kế lẫn cấu hình, cung cấp những công nghệ đột phá, thiết lập tiêu chuẩn trải nghiệm mới cho người dùng ở phân khúc tầm trung. <br> Samsung Galaxy A52 được khoác lên một diện mạo mới, không còn vẻ bóng bẩy như thế hệ trước, mẫu điện thoại quay về với mặt lưng phẳng được phủ nhám hạn chế dấu vân tay, kèm theo nhiều màu sắc trẻ trung, phù hợp cho giới trẻ hiện nay. <br> Samsung Galaxy A52 sở hữu 4 camera bao gồm: Camera chính 64 MP, camera góc rộng 12 MP, 2 camera còn lại là camera marco và camera xóa phông có cùng độ phân giải 5 MP, giúp người dùng có thêm nhiều sự chọn lựa để ghi lại khoảnh khắc đáng nhớ theo cách đặc biệt hơn.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/228967/TimerThumb/samsung-galaxy-a52-thumbtet.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-8gb-256gb-thumb-violet-1020x680-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-xanh-duong-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-den-1-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/228967/Slider/samsung-galaxy-a52-tong-quan-780x433.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/228967/Kit/samsung-galaxy-a52-note-2.jpg",
    },
    system: {
      screen: "Super AMOLED6.5 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
      chip: "Snapdragon 720G",
      ram: "8 GB",
      memory: "128 GB",
      pin: "4500 mAh25 W",
    },
    categorySlug: "samsung",
  },
  {
    id: "10",
    name: "OPPO Reno6 ",
    slug: "oppo-reno6",

    price: 12990000,
    discount: 999000,
    evaluate: 4,
    colors: ["Bạc", "Đen"],
    capacity: ["64GB", "128GB"],
    description:
      "Sau khi ra mắt OPPO Reno5 chưa lâu thì OPPO lại cho ra mẫu smartphone mới mang tên OPPO Reno6 với hàng loạt cải tiến mới về ngoại hình bên ngoài lẫn hiệu năng bên trong, mang đến trải nghiệm vượt bật cho người dùng <br> OPPO Reno6 được trang bị vi xử lý MediaTek Dimensity 900 đáp ứng mọi nhu cầu giải trí hàng ngày, có thể chơi tất cả các game phổ biến hiện nay, tạo ấn tượng rất mạnh mẽ cho người dùng trải nghiệm mượt mà với cấu hình ổn định. <br> Mặt trước còn được trang bị camera selfie có độ phân giải 32 MP,  hỗ trợ tính năng tự động lấy nét và nhận diện khuôn mặt thông minh giúp người dùng có những bức ảnh chụp trọn vẹn và đẹp mắt nhất.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-aurora-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-bac-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Slider/vi-vn-oppo-reno6-camera-slider.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Slider/oppo-reno6-tinhnang-1-1020x570.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Kit/oppo-reno6-n--2.jpg",
    },
    system: {
      screen: "AMOLED6.43 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP",
      chip: "MediaTek Dimensity 900 5G",
      ram: "8 GB",
      memory: "128 GB",
      pin: "4300 mAh65 W",
    },
    categorySlug: "oppo",
  },
  {
    id: "11",
    name: "OPPO A93",
    slug: "oppo-a93",

    price: 6590000,
    discount: 500000,
    evaluate: 3,
    colors: ["Trắng"],
    capacity: ["64GB", "128GB"],
    description:
      "OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W. <br> OPPO A93 được trang bị chipset MediaTek Helio P95 tốc độ CPU đạt 2.2 GHz với sức mạnh như thế này thì A93 sẽ không làm bạn thất vọng khi có thể hoạt động tốt với nhiều ứng dụng nặng hay thao tác cuộn trang đều diễn ra trơn tru cảm giác như không có độ trễ. <br> Bên cạnh đó, máy tích hợp HyperEngine công nghệ dành cho trò chơi giúp bạn nâng cao trải nghiệm chơi thông qua chất lượng hình ảnh bắt mắt, di chuyển mượt mà nhất trong bất kỳ thế giới trực tuyến nào như Liên Quân Mobile.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-14-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/229056/Slider/vi-vn-oppo-a93-manhinh.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/229056/Slider/oppo-a93-sac-nhanh-128w-780x433.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/229056/Slider/-oppo-a93-tong-quan.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Kit/oppo-reno6-n--2.jpg",
    },
    system: {
      screen: "AMOLED6.43 Full HD+",
      operating: "Android 10",
      camera: "Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP",
      chip: "MediaTek Helio P95",
      ram: "8 GB",
      memory: "128 GB",
      pin: "4000 mAh18 W",
    },
    categorySlug: "oppo",
  },
  {
    id: "12",
    name: "OPPO A95",
    slug: "oppo-a95",
    price: 6990000,
    discount: 500000,
    evaluate: 4,
    colors: ["Bạc", "Đen"],
    capacity: ["64GB", "128GB"],
    description:
      "Bên cạnh phiên bản 5G, OPPO còn bổ sung phiên bản OPPO A95 4G với giá thành phải chăng tập trung vào thiết kế năng động, sạc nhanh và hiệu năng đa nhiệm ấn tượng sẽ giúp cho cuộc sống của bạn thêm phần hấp dẫn, ngập tràn niềm vui. <br> Đồng thời mặt lưng máy còn gây ấn tượng lớn cho người dùng với hiệu ứng chuyển màu bắt mắt khi thay đổi góc nhìn (ở phiên bản màu bạc), điều này giúp máy trở nên bóng bẩy thu hút ngay từ ánh nhìn đầu tiên. <br> Tổng thể điện thoại rất sang trọng, cảm giác cầm nắm thoải mái khi có độ mỏng 7.95 mm và trọng lượng 175 g kết hợp với phần khung viền được làm cong 2.5D đem đến trải nghiệm sử dụng vô cùng thích thú.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-1-1.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-den-1-1.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/251703/Slider/oppo-a95-4g-camera-1020x570.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/251703/Slider/oppo-a95-4g-tongquan-1020x570-1.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/251703/Kit/oppo-a95-4g-note.jpg",
    },
    system: {
      screen: "AMOLED6.43 Full HD+",
      operating: "Android 11",
      camera: "Chính 48 MP & 2 MP, 2 MP",
      chip: "Snapdragon 662",
      ram: "8 GB",
      memory: "128 GB",
      pin: "5000 mAh33 W",
    },
    categorySlug: "oppo",
  },
  {
    id: "13",
    name: "iPhone 11",
    slug: "iphone-11",
    price: 16900000,
    discount: 800000,
    evaluate: 5,
    colors: ["Đỏ", "Đen", "Trắng", "Vàng"],
    capacity: ["64GB", "128GB", "256GB"],
    description:
      "Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó <br> Đây là một điều được xem là bước ngoặt bởi những chiếc smartphone Android có nhiều camera hiện nay sẽ thường bị sai lệch về màu sắc khi chuyển đổi qua lại giữa các ống kính gây cảm giác khá khó chịu cho người dùng. <br> Ở mức cấu hình trên giúp điện thoại chơi game tốt với các tựa game phổ biến hiện nay một cách mượt mà, ổn định. Mọi thao tác trên iPhone mới cũng cho tốc độ phản hồi nhanh mà bạn gần như sẽ không cảm nhận được sự giật lag cho dù có sử dụng trong một thời gian dài.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iPhone-11-64-tet.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-den-1-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-vang-1-2-org.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/153856/Kit/iphone-11-note.jpg",
    },
    system: {
      screen: "IPS LCD6.1 Liquid Retina",
      operating: "iOS 15",
      camera: "2 camera 12 MP",
      chip: "Apple A13 Bionic",
      ram: "4 GB",
      memory: "64 GB",
      pin: "3110 mAh18 W",
    },
    categorySlug: "apple",
  },
  {
    id: "14",
    name: "Realme 8",
    slug: "realme-8",

    price: 7290000,
    discount: 399000,
    evaluate: 3,
    colors: ["Bạc", "Đen"],
    capacity: ["64GB", "128GB"],
    description:
      "Điện thoại Realme 8 được ra mắt nằm trong phân khúc tầm trung, có thiết kế đẹp mắt đặc trưng của Realme, smartphone trang bị hiệu năng bên trong đầy mạnh mẽ và có dung lượng pin tương đối lớn. <br> Realme 8 gây ấn tượng với trọng lượng chỉ 177 g, Realme đã kỳ công trong thiết kế để cho ra sản phẩm smartphone gọn nhẹ nhất, các cạnh viền bo cong tinh tế tạo cảm giác thoải mái và siêu dễ chịu trong tay bạn. <br> Tấm nền Super AMOLED được trang bị trên Realme 8, vì vậy mà màn hình của máy sáng rực rỡ, sắc nét dưới độ sáng lên đến 1000 nits, độ tương phản cao giúp điện thoại hiển thị rõ ràng hơn bao giờ hết kể cả bị nắng chói. ",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-bac-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8--den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Slider/vi-vn-realme-8-thietke-slider.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Slider/vi-vn-realme-8-tinhnang-slider.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Kit/realme-8-note.jpg",
    },
    system: {
      screen: "Super AMOLED6.4 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP",
      chip: "MediaTek Helio G95",
      ram: "8 GB",
      memory: "128 GB",
      pin: "5000 mAh30 W",
    },
    categorySlug: "realme",
  },
  {
    id: "15",
    name: "Realme C21Y ",
    slug: "realme-c21y",

    price: 3690000,
    discount: 500000,
    evaluate: 4,
    colors: ["Xanh Dương", "Đen"],
    capacity: ["3GB", "4GB"],
    description:
      "Thêm một sản phẩm giá tốt đến từ nhà Realme - Realme C21Y 3GB được ra mắt với thiết kế trẻ trung, pin dung lượng lớn cùng máy ảnh nhiều tính năng, đây là những điểm ấn tượng trên chiếc smartphone này.<br>Cảm biến chính 13 MP tích hợp đầy đủ các tính năng như: Night mode, nhận diện khuôn mặt, chụp toàn cảnh, HDR,... mang lại sự phong phú cho bạn tha hồ sáng tạo, đảm bảo mọi nhu cầu chụp ảnh của bạn đều được hỗ trợ tốt.<br>Ống kính macro và cảm biến đo chiều sâu cùng có độ phân giải 2 MP, chụp cận cảnh hay chụp chân dung xóa phông cũng không làm khó được chiếc máy này. Realme C21Y còn được ưu ái khi cung cấp nhiều chức năng chụp độc đáo, những khoảnh khắc đời thường sẽ độc lạ hơn bao giờ hết với những thao tác cực kì đơn giản.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-blue-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-xanh-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/241771/realme-c21y-den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Slider/realme-c21y-manhinh-780x433.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Slider/realme-c21y-3gb-140621-0221117.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/241771/Kit/realme-c21y-note.jpg",
    },
    system: {
      screen: "IPS LCD6.5 HD+",
      operating: "Android 11",
      camera: "Chính 13 MP & Phụ 2 MP, 2 MP",
      chip: "Spreadtrum T610 8 nhân",
      ram: "3 GB",
      memory: "32 GB",
      pin: "5000 mAh10 W",
    },
    categorySlug: "realme",
  },
  {
    id: "16",
    name: "Samsung Galaxy Z Fold3 ",
    slug: "samsung-galaxy-z-fold3",

    price: 41990000,
    discount: 1900000,
    evaluate: 4,
    colors: ["Bạc", "Đen", "Xanh Rêu"],
    capacity: ["256GB", "512GB"],
    description:
      "Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng <br> Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và ngược lại. <br> Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-gc-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-green-gc-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/226935/Slider/samsung-galaxy-z-fold-3-slider-tong-quan-1020x570.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/226935/Kit/samsung-galaxy-z-fold-3-n.jpg",
    },
    system: {
      screen: "Dynamic AMOLED 2XChính 7.6 & Phụ 6.2 Full HD+",
      operating: "Android 11",
      camera: "3 camera 12 MP",
      chip: "Snapdragon 888",
      ram: "12 GB",
      memory: "256 GB",
      pin: "4400 mAh25 W",
    },
    categorySlug: "samsung",
  },
  {
    id: "17",
    name: "Samsung Galaxy A52 ",
    slug: "samsung-galaxy-a52",

    price: 9290000,
    discount: 999000,
    evaluate: 3,
    colors: ["Tím", "Xanh Dương", "Đen"],
    capacity: ["128GB", "256GB"],
    description:
      "Galaxy A52 (8GB/128GB) mẫu smartphone thuộc dòng Galaxy A của Samsung, với nhiều sự thay đổi lớn về thiết kế lẫn cấu hình, cung cấp những công nghệ đột phá, thiết lập tiêu chuẩn trải nghiệm mới cho người dùng ở phân khúc tầm trung. <br> Samsung Galaxy A52 được khoác lên một diện mạo mới, không còn vẻ bóng bẩy như thế hệ trước, mẫu điện thoại quay về với mặt lưng phẳng được phủ nhám hạn chế dấu vân tay, kèm theo nhiều màu sắc trẻ trung, phù hợp cho giới trẻ hiện nay. <br> Samsung Galaxy A52 sở hữu 4 camera bao gồm: Camera chính 64 MP, camera góc rộng 12 MP, 2 camera còn lại là camera marco và camera xóa phông có cùng độ phân giải 5 MP, giúp người dùng có thêm nhiều sự chọn lựa để ghi lại khoảnh khắc đáng nhớ theo cách đặc biệt hơn.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/228967/TimerThumb/samsung-galaxy-a52-thumbtet.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-8gb-256gb-thumb-violet-1020x680-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-xanh-duong-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-den-1-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/228967/Slider/samsung-galaxy-a52-tong-quan-780x433.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/228967/Kit/samsung-galaxy-a52-note-2.jpg",
    },
    system: {
      screen: "Super AMOLED6.5 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
      chip: "Snapdragon 720G",
      ram: "8 GB",
      memory: "128 GB",
      pin: "4500 mAh25 W",
    },
    categorySlug: "samsung",
  },
  {
    id: "18",
    name: "OPPO Reno6 ",
    slug: "oppo-reno6",

    price: 12990000,
    discount: 999000,
    evaluate: 4,
    colors: ["Bạc", "Đen"],
    capacity: ["64GB", "128GB"],
    description:
      "Sau khi ra mắt OPPO Reno5 chưa lâu thì OPPO lại cho ra mẫu smartphone mới mang tên OPPO Reno6 với hàng loạt cải tiến mới về ngoại hình bên ngoài lẫn hiệu năng bên trong, mang đến trải nghiệm vượt bật cho người dùng <br> OPPO Reno6 được trang bị vi xử lý MediaTek Dimensity 900 đáp ứng mọi nhu cầu giải trí hàng ngày, có thể chơi tất cả các game phổ biến hiện nay, tạo ấn tượng rất mạnh mẽ cho người dùng trải nghiệm mượt mà với cấu hình ổn định. <br> Mặt trước còn được trang bị camera selfie có độ phân giải 32 MP,  hỗ trợ tính năng tự động lấy nét và nhận diện khuôn mặt thông minh giúp người dùng có những bức ảnh chụp trọn vẹn và đẹp mắt nhất.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-aurora-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-bac-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-den-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Slider/vi-vn-oppo-reno6-camera-slider.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Slider/oppo-reno6-tinhnang-1-1020x570.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/236186/Kit/oppo-reno6-n--2.jpg",
    },
    system: {
      screen: "AMOLED6.43 Full HD+",
      operating: "Android 11",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP",
      chip: "MediaTek Dimensity 900 5G",
      ram: "8 GB",
      memory: "128 GB",
      pin: "4300 mAh65 W",
    },
    categorySlug: "oppo",
  },
  {
    id: "19",
    name: "iPhone SE (2020)",
    slug: "iphone-se-2020",
    price: 13450000,
    discount: 799000,
    evaluate: 4,
    colors: ["white", "black", "red"],
    capacity: ["64GB", "128GB"],
    description:
      "iPhone SE 2020 đã bất ngờ ra mắt với thiết kế 4.7 inch nhỏ gọn, chip A13 Bionic mạnh mẽ như trên iPhone 11 và đặc biệt sở hữu mức giá tốt chưa từng có. <br> iPhone SE 2020 vẫn có kích thước 4.7 inch, tỉ lệ màn hình cũ 16:9 và các cạnh viền vẫn dày. Tuy nhiên kích thước chung của máy vẫn thuộc hàng nhỏ gọn, cực kì vừa vặn và dễ sử dụng bằng một tay. <br> Apple trang bị cho SE 2020 màn hình có độ phân giải HD (1334 x 750-pixel) đạt chuẩn Retina, hỗ trợ đầy đủ các công nghệ True Tone, Haptic Touch, và HDR10,…",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-2020-trang-600x600-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-trang-1-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-den-1-1-org.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-64gb-2020-hop-moi-do-1-1-org.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/230410/Slider/iphone-se-64gb-2020-hop-moi-101120-0837010.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/230410/Kit/iphone-se-64gb-2020-hop-moi-note.jpg",
    },
    system: {
      screen: "IPS LCD4.7 Retina HD",
      operating: "iOS 15",
      camera: "12 MP",
      chip: "Apple A13 Bionic",
      ram: "3 GB",
      memory: "64 GB",
      pin: "1821 mAh18 W",
    },
    categorySlug: "apple",
  },
  {
    id: "20",
    name: "Realme 7i",
    slug: "realme-7i",

    price: 6290000,
    discount: 299000,
    evaluate: 4,
    colors: ["Xanh Dương"],
    capacity: ["4GB", "8GB"],
    description:
      "Tiếp nối bộ đôi đình đám Realme 7 và Realme 7 Pro, Realme đã cho ra mắt thêm thành viên mới Realme 7i với một mức giá hấp dẫn hơn. Máy vẫn giữ lại những thông số ấn tượng như màn hình 90 Hz đi kèm hiệu năng từ Snapdragon 662 cho trải nghiệm mượt mà và ổn định. <br> Tương tự đàn anh, Realme 7i cũng có một vẻ ngoài bóng bẩy hào nhoáng, mọi sự chú ý đều đổ dồn về mặt lưng đường cắt xéo táo bạo cùng hiệu ứng ánh sáng ấn tượng khi nghiêng máy dưới nhiều góc độ.<br> Ở mặt trước, Realme 7i có màn hình siêu tràn viền với camera đục lỗ thời thượng, giúp không gian giải trí được mở rộng tối đa lên tới 6.5 inch nhưng vẫn nhỏ gọn để bạn để vào túi quần, giỏ xách khi mang theo bên mình.",
    status: 1,
    image: {
      imgAvt:
        "https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-new-600x600.jpg",
      img01:
        "https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-1020x680-1-org.jpg",
      img02:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-chip.jpg",
      img03:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-thietke.jpg",
      img04:
        "https://cdn.tgdd.vn/Products/Images/42/227688/Slider/vi-vn-realme-7i-tongquan.jpg",
      imgDesc:
        "https://cdn.tgdd.vn/Products/Images/42/233135/Kit/realme-8-note.jpg",
    },
    system: {
      screen: "IPS LCD6.5 HD+",
      operating: "Android 10",
      camera: "Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP",
      chip: " Snapdragon 662",
      ram: "8 GB",
      memory: "128 GB",
      pin: "5000 mAh18 W",
    },
    categorySlug: "realme",
  },
];
const getAllProducts = () => products;
const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemDetails = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      res.push({
        e,
        product: getProductBySlug(e.slug),
      });
    });
  }
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemDetails,
};

export default productData;
