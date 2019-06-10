-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2019 at 02:15 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ptudw_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `content` longtext COLLATE utf8_bin,
  `writer_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `date_publish` datetime DEFAULT NULL,
  `view_count` int(11) DEFAULT NULL,
  `link_img` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `link_blog_detail` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `content`, `writer_id`, `status`, `category_id`, `date_publish`, `view_count`, `link_img`, `link_blog_detail`) VALUES
(1, 'Hạ gục nhanh GRF, Faker và đồng đội sẽ đến Việt Nam ăn phở', '<div class=\" row content\">\n        <div class=\"col-sm-12  \">\n            <div style=\"margin-top:20px\">\n                <a href=\"\">Trang chủ</a> >\n                <a href=\"\">Thể thao</a> >\n                <a href=\"\">eSport</a>\n            </div>\n            <h1 class=\"the-article-title\">Hạ gục nhanh GRF, Faker và đồng đội sẽ đến Việt Nam ăn phở</h1>\n            <p class=\"title1 eSport\">eSport </p>\n            <a href=\"https://www.facebook.com/TuanPenSpinner\">\n                <b>Nguyễn Thanh Tuấn</b></a>\n            <small>đăng lúc 20:50 13/04/2019</small>\n            <br>\n            <i>Tag</i> <a href=\"\">SKT T1</a> ,<a href=\"\">Faker</a>\n            <p class=\"the-article-summary\">Nhờ kỹ năng và kinh nghiệm vượt trội, các tuyển thủ của SKT T1 đã giành\n                chiến thắng 3-0 trước kình địch Griffin để lên ngôi vô địch LCK (League of Legends Champions) mùa\n                xuân 2019.</p>\n            <p class=\"\">Khác với mong đợi từ khán giả về một cặp đấu cân tài cân sức, trận đấu chỉ hấp dẫn tại ván\n                đấu đầu tiên. Ở 2 ván tiếp theo, GRF hoàn toàn bế tắc trước màn trình diễn hoàn hảo của SKT.</p>\n            <h3 class=\"the-article-summary\">Trận 1 - bài dị không giúp GRF thắng ván đấu</h3>\n            <p>Trong ván đầu tiên của trận chung kết, đội tuyển trẻ GRF sử dụng Sylas, Olaf, Akali, Pantheon và\n                Taliyah đường dưới. Theo các chuyên gia, đội hình trên khá lạ lẫm vì không có vị tướng thuần xạ thủ.\n            </p>\n            <p>\n                <strongr>Bên kia chiến tuyến, SKT chọn đội hình cần khá nhiều trang bị như Hecarim, Rek’sai, Ryze,\n                    Ezreal và Braum.</strongr>\n            </p>\n            <p>Với chất tướng Pantheon đánh nhau mạnh mẽ, GRF di chuyển cùng nhau ngay từ cấp 1 và có được chiến\n                công đầu với mạng của Braum. Chiến công đầu dành cho Taliyah của Viper.</p>\n            <table align=\"center\">\n                <tbody>\n                    <tr>\n                        <td><img alt=\"Ha guc nhanh GRF, Faker va dong doi se den Viet Nam an pho hinh anh 1 \"\n                                src=\"https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_13/chien_cong_dau_cho_Viper.jpg\"\n                                class=\"pic\" /></td>\n                    </tr>\n                    <tr>\n                        <td class=\"pCaption caption\">Chiến công đầu cho GRF.&nbsp;</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p>Thế trận tỏ ra hoà hoãn vì không đội nào muốn mắc sai lầm. Phút 35, GRF tổ chức tấn công trước nhưng\n                SKT phản công rất hay và lấy được mạng của 3 thành viên GRF. SKT sở hữu bùa lợi Baron.</p>\n            <p>Phút 37, SKT khởi động Rồng ngàn tuổi. GRF lao ra và cướp thành công với chiêu cuối của Pantheon. Tuy\n                nhiên, sau đó SKT đã tiêu diệt 4 thành viên của GRF và chỉ còn mỗi Akali. </p>\n            <p>SKT tiến thẳng vào nhà chính của GRF. Cú chiêu cuối cực hay của Ezreal đã ngăn pha biến về của Akali,\n                đem về chiến thắng cho SKT.</p>\n            <h3 class=\"the-article-summary\">Trận&nbsp;2 - Sai lầm tai hại đầu trận khiến GRF sụp đổ</h3>\n            <p>Khác với ván đầu tiên, GRF chọn đội hình quen tay hơn với Hecarim, Olaf, Lissandra, Ezreal và Braum.\n                Trong khi đó, Faker sử dụng Azir, Akali dành cho Khan và SKT hoàn thiện đội hình với Jarvan IV,\n                Lucian và Galio.</p>\n            <p>GRF tiếp tục di chuyển chủ động sang nhà SKT như ván một. Lần này, SKT đã đáp trả không thể tốt hơn.\n                2 mạng của GRF phải bỏ lại ngay từ phút đầu của ván 2.</p>\n            <table align=\"center\">\n                <tbody>\n                    <tr>\n                        <td><img alt=\"Ha guc nhanh GRF, Faker va dong doi se den Viet Nam an pho hinh anh 2 \"\n                                src=\"https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_13/Game2.jpg\"\n                                class=\"pic\" /></td>\n                    </tr>\n                    <tr>\n                        <td class=\"pCaption caption\">Thế trận nghiên về SKT ở những phút đầu tiên.</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p dir=\"ltr\">Nếu như ván đấu đầu tiên chứng kiến sự chủ động của GRF trong thời gian đầu thì thế trận bị\n                đảo ngược ở ván 2. </p>\n            <p dir=\"ltr\">SKT dẫn 8-2 chỉ sau 18 phút với Faker cực kì xanh với KDA 3/0/3. Hàng loạt những tình huống\n                giao tranh chủ động khiến khoảng cách tiền ngày càng nới rộng cho SKT.</p>\n            <p dir=\"ltr\">Phút 28, Galio tốc biến mở đầu giao tranh tốt. Đội hình GRF bị chia cắt và không thể chống\n                đỡ trước sát thương quá mạnh từ SKT. SKT tiêu diệt 4 thành viên và đẩy thẳng vào nhà chính kết thúc\n                ván đấu.</p>\n            <h3 class=\"the-article-summary\"><span>Trận&nbsp;3 - SKT sở hữu tấm vé MSI tới Hà Nội</span></h3>\n            <p dir=\"ltr\">Bước vào thế chân tường nhưng GRF vẫn tin tưởng vào cặp đôi Pantheon và Taliyah cùng các vị\n                tướng dồn sát thương rất nhanh với Aatrox, Elise và Sylas. SKT đáp trả với Riven, Jarvan IV, Ryze,\n                Ezreal và Braum.</p>\n            <p dir=\"ltr\">Phút thứ 2, Jarvan IV có pha đi gank tốt và giúp cho Ezreal có được mạng chiến công đầu.\n            </p>\n            <table align=\"center\">\n                <tbody>\n                    <tr>\n                        <td><img alt=\"Ha guc nhanh GRF, Faker va dong doi se den Viet Nam an pho hinh anh 3 \"\n                                src=\"https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_13/game3Early.jpg\"\n                                class=\"pic\" /></td>\n                    </tr>\n                    <tr>\n                        <td class=\"pCaption caption\">Chiến công đầu cho SKT báo hiệu điềm gở của GRF.&nbsp;</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p>Phút 22, Aatrox vòng sau lưng và GRF mở giao tranh với mục tiêu chính là Ryze của Faker. Tuy nhiên,\n                “Quỷ vương” với con bài đã làm nên tên tuổi Ryze trả đòn và hủy diệt với sự trợ giúp từ các đồng\n                đội. Bùa lợi Baron dễ dàng cho SKT khi GRF đã bị quét sạch.</p>\n            <p>Phút 29, GRF tiếp tục chủ động giao tranh và đã tiêu diệt thành công Braum. Tuy nhiên, khi Riven của\n                Khan đến thì cũng là dấu chấm hết cho mọi hy vọng của GRF. </p>\n            <p>Ezreal thoải mái xả sát thương và cú quét sạch đồng thời là chiến thắng dành cho SKT trong trận chung\n                kết LCK mùa xuân 2019. Faker và đồng đội sẽ đến Hà Nội để tham dự giải đấu MSI (Mid-Season\n                Invitational) vào tháng 5 tới.</p>\n\n        </div>\n    </div>', 1, 0, 0, '2019-03-10 13:17:17', NULL, 'https://image1.infogame.vn/2019/02/25/skt-t1.jpg', '/CongNghe/eSport/HaGucNhanhGRF'),
(2, 'Đòi nợ kiểu Trung Quốc: Bêu tên trong rạp phim \'Avengers: End Game\'', '<div class=\" row content\">\r         <div class=\"col-sm-12  \">\r             <h1 class=\"the-article-title\">\r                 Đòi nợ kiểu Trung Quốc: Bêu tên trong rạp phim \'Avengers: End Game\'\r             </h1>\r             <p class=\"title1\">Phim chiếu rap </p>\r             <a href=\"https://www.facebook.com/TuanPenSpinner\">\r                 <b>Nguyễn Thanh Tuấn</b></a>\r             <small>đăng lúc 20:50 13/04/2019</small>\r             <br>\r             <i>Tag</i> <a href=\"\">End game</a> ,<a href=\"\">Marvel</a>\r             <div class=\"main\">\r                 <p class=\"the-article-summary\">Tòa án quận Liên Đô cho rằng cách làm của họ sẽ “đến tai” hơn 2.000\r                     người mỗi ngày, khiến con nợ phải xấu hổ mà trả gấp. Câu chuyện này đang gây sốt trên Internet\r                     Trung Quốc.</p>\r                 <div class=\"the-article-body\">\r                     <p dir=\"ltr\">Những khán giả Trung Quốc tại Lệ Thủy, Chiết Giang khi đi xem suất chiếu \'Avengers:\r                         End Game\' hôm 24/4 đã bị buộc xem đoạn video độc đáo: Tên tuổi, hình ảnh 60 con nợ cùng với\r                         số tiền vay hiện rõ trên màn ảnh rộng.</p>\r                     <p dir=\"ltr\">Đoạn video này là ý tưởng của Tòa án Nhân dân quận Liên Đô. Trên trang Wechat chính\r                         thức, tòa án này cho hay họ hy vọng cách làm này sẽ đến được hơn 2.000 người xem mỗi ngày.\r                     </p>\r                     <p dir=\"ltr\">“Qua việc trình chiếu này, người dân có thể thấy được hậu quả của việc không hoàn\r                         thành trách nhiệm theo pháp luật. Đối với những ai có khả năng thanh toán nhưng từ chối hoặc\r                         gian lận tài sản, tòa sẽ thực hiện theo trình tự việc đóng băng tài sản, giam giữ và khởi tố\r                         hình sự”, trang chủ Wechat của tòa án cho biết.</p>\r                     <table class=\"picture\" align=\"center\">\r                         <tbody>\r                             <tr>\r                                 <td class=\"pic\"><img\r                                         alt=\"Doi no kieu Trung Quoc: Beu ten trong rap phim \'Avengers: End Game\' hinh anh 1 \"\r                                         src=\"https://znews-photo.zadn.vn/w660/Uploaded/lce_uxlcq/2019_04_25/de2859b8671211e9a2c3042d2f2c8874_image_hires_145851_1.jpg\"\r                                         class=\"pic\" /></td>\r                             </tr>\r                             <tr>\r                                 <td class=\"pCaption caption\">Đoạn video ghi danh sách con nợ được trình chiếu. Ảnh:\r                                     <em>Weixin.</em></td>\r                             </tr>\r                         </tbody>\r                     </table>\r                     <p dir=\"ltr\">Thực tế trong suốt năm qua, Tòa án quận Liên Đô cũng đã bêu tên các con nợ trong\r                         các rạp chiếu phim, màn hình kỹ thuật số ở nhiều cao ốc nhằm gây áp lực. Trong số 5.478 con\r                         nợ, đã có 80 người trả để thoát khỏi những phiền toái này.</p>\r                     <p dir=\"ltr\">Bài viết trên trang chủ Wechat còn đưa ra trường hợp một người đàn ông sau khi nhận\r                         được thông báo sẽ bị bêu tên trong một suất chiếu \'Avengers: End Game\' vì khoản vay 50.000\r                         tệ (khoảng 173 triệu đồng), đã nhanh chóng đi trả vì lo sợ con gái bị bẽ mặt trước bạn bè.\r                     </p>\r                     <p dir=\"ltr\">Trong một báo cáo hàng năm của Trung tâm Thông tin Tín dụng Công cộng Quốc gia,\r                         khoảng 17,46 triệu người Trung Quốc có “hạnh kiểm yếu” đã bị hạn chế mua vé máy bay, 5,47\r                         triệu người bị cấm mua vé cao tốc.</p>\r                     <figure class=\"video cms-video\" false\r                         source-url=\"/video-ac-nhan-thanos-quay-nat-los-angeles-trong-gta-v-post938298.html\"\r                         data-video-src=\"https://znews-mcloud-bf-s2.zadn.vn/6n2Fy9HAni0/68d74a05d2423b1c6253/5d05669981dc688231cd/720/THANOS_DESTROYS_TRAIN__INFINIT.mp4?authen=exp=1557177034~acl=/6n2Fy9HAni0/*~hmac=7a3320e48c30df8fbcbe8a3d1eaf8dad\">\r                         <div class=\"video-container formatted\"\r                             style=\"background-image: url(https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_21/thanos_endgames.jpg);\"\r                             aspect=\"16:9\"><video playsinline muted\r                                 src=\"https://znews-mcloud-bf-s2.zadn.vn/wUFuGvEd9So/35d2e5037d44941acd55/370dfe9219d7f089a9c6/480/THANOS_DESTROYS_TRAIN__INFINIT.mp4?authen=exp=1557177034~acl=/wUFuGvEd9So/*~hmac=2ddb2da8b962b2a8cddc8efd472c26fd\"\r                                 controls=\'controls\' allowads=\'true\' onlyvietnam=\'false\'\r                                 poster=\"https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_21/thanos_endgames.jpg\"\r                                 preload=\'none\' aspect=\'16:9\' mediaId=\'825a17fe54b9bde7e4a8\' class=\"pic\">\r                                 <source\r                                     src=\"https://znews-mcloud-mpl-s2.zadn.vn/O3xfhO1_F38/whls/vod/0/ukVcWCopiR6HaP97lY0/THANOS_DESTROYS_TRAIN__INFINIT.m3u8?authen=exp=1557133834~acl=/O3xfhO1_F38/*~hmac=07d212d1a50e2bc4faeaed05a5a277d3\"\r                                     type=\"application/x-mpegURL\" label=\"Auto\" />\r                                 <source\r                                     src=\"https://znews-mcloud-bf-s2.zadn.vn/wUFuGvEd9So/35d2e5037d44941acd55/370dfe9219d7f089a9c6/480/THANOS_DESTROYS_TRAIN__INFINIT.mp4?authen=exp=1557177034~acl=/wUFuGvEd9So/*~hmac=2ddb2da8b962b2a8cddc8efd472c26fd\"\r                                     type=\"video/mp4\" label=\"SD\" res=\"480\" />\r                                 <source\r                                     src=\"https://znews-mcloud-bf-s2.zadn.vn/6n2Fy9HAni0/68d74a05d2423b1c6253/5d05669981dc688231cd/720/THANOS_DESTROYS_TRAIN__INFINIT.mp4?authen=exp=1557177034~acl=/6n2Fy9HAni0/*~hmac=7a3320e48c30df8fbcbe8a3d1eaf8dad\"\r                                     type=\"video/mp4\" label=\"HD\" res=\"720\" /></video></div>\r                         <figcaption><strong><a\r                                     href=\"/video-ac-nhan-thanos-quay-nat-los-angeles-trong-gta-v-post938298.html\"\r                                     cate-id=\"731\" cate-name=\"Internet\" target=\"_blank\" class=\"autolink\">Ác nhân\r                                     Thanos quậy nát Los Angeles trong GTA V</a></strong> Với bản mod hình ảnh nhân\r                             vật và kỹ năng trong game Grand Theft Auto V, bạn sẽ biến thành siêu ác nhân Thanos và\r                             tự do tung hoành tại thành phố Los Angeles (Mỹ).</figcaption>\r                     </figure>\r \r                 </div>\r \r             </div>\r         </div>\r     </div>', 1, 0, 0, '2019-02-20 12:17:17', NULL, 'https://www.indiewire.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-14-at-12.26.00-PM.png?w=780', NULL),
(3, 'Google Assistant đã có thể phiên dịch trực tiếp tiếng Việt', '<div class=\" row content\">\n\n            <div class=\"col-sm-12  \">\n                <div style=\"margin-top:20px\">\n                    <a href=\"\">Trang chủ</a> >\n                    <a href=\"\">Công nghệ</a> >\n\n                </div>\n                <h1 class=\"the-article-title\">\n                    Google Assistant đã có thể phiên dịch trực tiếp tiếng Việt\n                </h1>\n                <p class=\"title1 CongNghe\">Công nghệ </p>\n                <a href=\"https://www.facebook.com/TuanPenSpinner\">\n                    <b>Nguyễn Thanh Tuấn</b></a>\n                <small>đăng lúc 20:50 13/04/2019</small>\n                <br>\n                <i>Tag</i> <a href=\"\">Google Assitant</a> ,<a href=\"\">Google</a>\n                <div class=\"main\">\n                    <p class=\"the-article-summary\">Google Assistant là sản phẩm được Google ưu ái tại CES 2019, với một\n                        loạt tính năng và công nghệ mới.</p>\n                    <div class=\"the-article-body\">\n                        <p>Tính năng đáng chú ý nhất mà <a href=\"https://news.zing.vn/tieu-diem/google.html\"\n                                title=\"Tin tức Google\" class=\"topic company autolink\" topic-id=\"3784\">Google</a> vừa\n                            giới thiệu là khả năng biến Assistant thành một phiên dịch với khả năng dịch trực tiếp 27\n                            ngôn ngữ. Tính năng tương tự đã được tích hợp trong Google Dịch, cho phép hai người nói\n                            chuyện bằng ngôn ngữ khác nhau và máy sẽ dịch ra ngôn ngữ của bạn theo dạng văn bản và giọng\n                            nói.</p>\n                        <p>Để kích hoạt tính năng dịch, người dùng cần nói với Google mình muốn dịch sang ngôn ngữ nào.\n                            Điểm mới của Google Assistant là bạn không cần nói ngôn ngữ của mình là gì, trợ lý ảo sẽ tự\n                            động nhận biết nếu như nó nằm trong các ngôn ngữ hỗ trợ. Bạn sẽ phải nói mọi câu vào micro\n                            của máy, Google Assistant không thể dịch khi hai người nói chuyện trực tiếp với nhau.</p>\n                        <table class=\"picture\" align=\"center\">\n                            <tbody>\n                                <tr>\n                                    <td class=\"pic\"><img\n                                            alt=\"Google Assistant da co the phien dich truc tiep tieng Viet hinh anh 1 \"\n                                            src=\"https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_01_09/Google_Home_Translate_2.jpg\"\n                                            class=\"pic\" /></td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pCaption caption\">Những thiết bị hỗ trợ Google Assistant sẽ dịch đoạn hội\n                                        thoại của hai người với hai ngôn ngữ khác nhau. Ảnh: <em>The Verge</em>.</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <p>Google Assistant hỗ trợ hầu hết ngôn ngữ phổ biến, trong đó có cả tiếng Việt. Với ứng dụng\n                            này, bạn có thể dùng tiếng Việt để trò chuyện ở phần lớn quốc gia trên thế giới. Tất nhiên,\n                            chất lượng dịch của Google vẫn chỉ tương đương một cỗ máy, nhiều chỗ ngô nghê, không thể\n                            bằng người biết ngôn ngữ thông thường.</p>\n                        <p>Đây không phải lần đầu tiên Google giới thiệu tính năng dịch thuật cho các thiết bị. Vào\n                            tháng 11/2017, hãng này giới thiệu tai nghe Pixel Buds, có thể dịch trực tiếp khi nói vào\n                            tai nghe. Tính năng này sau đó được tích hợp vào tất cả các loại tai nghe hỗ trợ Google\n                            Assistant.</p>\n                        <table class=\"picture\" align=\"center\">\n                            <tbody>\n                                <tr>\n                                    <td class=\"pic\"><img\n                                            alt=\"Google Assistant da co the phien dich truc tiep tieng Viet hinh anh 2 \"\n                                            src=\"https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_01_09/Google_Home_Hub_mini.jpg\"\n                                            class=\"pic\" /></td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pCaption caption\">Tính năng này sẽ được triển khai đầu tiên trên các\n                                        thiết bị Google Home Hub. Ảnh: <em>Getty</em>.</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <p>Theo <em>The Verge, </em>tính năng dịch mới sẽ được triển khai đầu tiên ở các thiết bị Google\n                            Home Hub. Hãng đã đặt các thiết bị này tại một số khách sạn của phóng viên tham gia CES\n                            2019. Những thiết bị hỗ trợ Google Home từ Lenovo, LG và JBL sẽ được cập nhật tính năng mới\n                            trong vài tháng.</p>\n                        <p>Tại CES 2019, nhiều đối tác cũng công bố sản phẩm mới hỗ trợ Google Assistant như đồng hồ báo\n                            thức đến từ Lenovo, loa thông minh của Sonos, màn hình của KitchenAid hay thậm chí là tẩu\n                            sạc trên xe hơi của Anker. Samsung cũng cho biết họ sẽ tích hợp Google Assistant vào các\n                            dòng Smart TV mới của mình.</p>\n                        <table align=\"center\" class=\"article\">\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div class=\"inner-article\"><a\n                                                href=\"/samsung-ra-mat-tv-8k-98-inch-lon-nhat-the-gioi-tich-hop-ai-post907076.html\">\n                                                <p class=\"cover formatted\"\n                                                    style=\"background-image:url(https://znews-photo.zadn.vn/w210/Uploaded/wyhktpu/2019_01_08/image001_3.jpg);\">\n                                                </p>\n                                                <h2 class=\"title\">Samsung ra mắt TV 8K 98 inch lớn nhất thế giới, tích\n                                                    hợp AI</h2>\n                                                <p class=\"summary\">Tích hợp AI, dòng Q900 của Samsung vừa ra mắt tại CES\n                                                    có thể nâng cấp các nội dung bình thường lên gần đạt chuẩn 8K. Giá\n                                                    của chiếc TV 8K này chưa được Samsung công bố.</p>\n                                            </a></div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <br />\n                        <figure class=\"video cms-video\" false\n                            source-url=\"/video-google-assistant-dich-thuat-truc-tiep-post907248.html\"\n                            data-video-src=\"https://znews-mcloud-bf-s2.zadn.vn/0JL6Ibb_VsI/11e82c66f5221c7c4533/e8c1f8cdef8806d65f99/720/Google_Assistants_interpreter_.mp4?authen=exp=1557198593~acl=/0JL6Ibb_VsI/*~hmac=2d3f95134341d3bf0bb81e18054d05d8\">\n                            <div class=\"video-container formatted\"\n                                style=\"background-image: url(https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_01_09/Google_Home_Translate_1.jpg);\"\n                                aspect=\"16:9\"><video playsinline muted\n                                    src=\"https://znews-mcloud-bf-s2.zadn.vn/FlburAqquTA/40116a9fb3db5a8503ca/410946055140b81ee151/480/Google_Assistants_interpreter_.mp4?authen=exp=1557198593~acl=/FlburAqquTA/*~hmac=68fa2e50a405a825086be8453ee69e76\"\n                                    controls=\'controls\' allowads=\'true\' onlyvietnam=\'false\'\n                                    poster=\"https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_01_09/Google_Home_Translate_1.jpg\"\n                                    preload=\'none\' aspect=\'16:9\' mediaId=\'05bda4d55691bfcfe680\'  class=\"pic\">\n                                    <source\n                                        src=\"https://znews-mcloud-mpl-s2.zadn.vn/X-b2WfCVlfs/whls/vod/0/30a8wsYcfwU7XuHDsZS/Google_Assistants_interpreter_.m3u8?authen=exp=1557155393~acl=/X-b2WfCVlfs/*~hmac=5446113f12d260c67f09f2f5c0d601ce\"\n                                        type=\"application/x-mpegURL\" label=\"Auto\" />\n                                    <source\n                                        src=\"https://znews-mcloud-bf-s2.zadn.vn/FlburAqquTA/40116a9fb3db5a8503ca/410946055140b81ee151/480/Google_Assistants_interpreter_.mp4?authen=exp=1557198593~acl=/FlburAqquTA/*~hmac=68fa2e50a405a825086be8453ee69e76\"\n                                        type=\"video/mp4\" label=\"SD\" res=\"480\" />\n                                    <source\n                                        src=\"https://znews-mcloud-bf-s2.zadn.vn/0JL6Ibb_VsI/11e82c66f5221c7c4533/e8c1f8cdef8806d65f99/720/Google_Assistants_interpreter_.mp4?authen=exp=1557198593~acl=/0JL6Ibb_VsI/*~hmac=2d3f95134341d3bf0bb81e18054d05d8\"\n                                        type=\"video/mp4\" label=\"HD\" res=\"720\" /></video></div>\n                            <figcaption><strong><a href=\"/video-google-assistant-dich-thuat-truc-tiep-post907248.html\"\n                                        cate-id=\"476\" cate-name=\"Công nghệ\" topic-id=\"company-3784,event-5041\"\n                                        target=\"_blank\" class=\"autolink\">Google Assistant dịch thuật trực\n                                        tiếp</a></strong> Trợ lý ảo của Google mới được cập nhật tính năng dịch thuật\n                                trực tiếp 27 ngôn ngữ, tích hợp trên các thiết bị thông minh.</figcaption>\n                        </figure>\n                    </div>\n                </div>\n            </div>\n        </div>', 1, 1, 1, '2019-02-01 14:17:17', NULL, 'https://cdn.trangcongnghe.com/uploads/posts/2018-09/tro-l253-ao-google-assistant-d227-c243-the-giao-tiep-bang-2-ng244n-ngu-c249ng-l250c_2.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog_status`
--

CREATE TABLE `blog_status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `blog_status`
--

INSERT INTO `blog_status` (`id`, `name`) VALUES
(1, 'Đang duyệt'),
(2, 'Đã duyệt thành công'),
(3, 'Bị từ chối');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Writer'),
(3, 'Editor'),
(4, 'Normal User');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` int(11) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `username`, `fullname`, `email`, `password`) VALUES
(3, 1, 'tuan', 'Nguyễn Thanh Tuấn', 'tuanpenspinner@gmail.com', '$2b$10$G7cidBtZUpngNhBRfGKBkuZ2jPDRJhpDk1BgDABhDWYNSY3HeWatS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_status`
--
ALTER TABLE `blog_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_status`
--
ALTER TABLE `blog_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
