import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  a11yBodyPolicyLink: {
    id: 'a11yBodyPolicyLink',
    defaultMessage: 'Chính sách khả năng truy cập của website',
    description: 'Tiêu đề cho liên kết đến toàn văn chính sách về khả năng truy cập.',
  },
  a11yBodyPageHeader: {
    id: 'a11yBodyPageHeader',
    defaultMessage: 'Quy trình hỗ trợ khả năng truy cập dành cho người tạo khóa học',
    description: 'Tiêu đề cho trang chính sách khả năng truy cập của Studio.',
  },
  a11yBodyIntroGraph: {
    id: 'a11yBodyIntroGraph',
    defaultMessage: `Tại edX, chúng tôi luôn nỗ lực thấu hiểu và tôn trọng những nhu cầu và góc nhìn đa dạng của cộng đồng toàn cầu edX.
      Chúng tôi trân trọng mọi đội ngũ khóa học và cam kết mở rộng khả năng tiếp cận cho tất cả mọi người, bao gồm cả những người tạo
      khóa học và tác giả nội dung có khuyết tật. Vì vậy, chúng tôi đã ban hành {communityAccessibilityLink} cùng với quy trình này để
      cho phép người tạo khóa học và tác giả yêu cầu hỗ trợ nếu họ không thể phát triển và đăng nội dung lên nền tảng của chúng tôi
      thông qua Studio do hạn chế về khuyết tật của họ.`,
    description: 'Đoạn giới thiệu nêu lý do chúng tôi coi trọng khả năng truy cập và những gì đang thực hiện.',
  },
  a11yBodyStepsHeader: {
    id: 'a11yBodyStepsHeader',
    defaultMessage: 'Người tạo khóa học và tác giả cần hỗ trợ có thể thực hiện các bước sau:',
    description: 'Tiêu đề cho danh sách các bước mà tác giả có thể thực hiện để yêu cầu hỗ trợ về khả năng truy cập.',
  },
  a11yBodyEdxResponse: {
    id: 'a11yBodyEdxResponse',
    defaultMessage: `Chúng tôi sẽ trao đổi với bạn về nhu cầu và mong muốn của bạn để xác định giải pháp phù hợp. Tuy nhiên, quyết định cuối cùng
      sẽ do chúng tôi đưa ra, miễn là giải pháp đó hiệu quả và được triển khai đúng thời gian. Các yếu tố chúng tôi cân nhắc khi lựa chọn
      một giải pháp về khả năng truy cập bao gồm: mức độ hiệu quả; tính kịp thời (so với các mốc thời gian của bạn); mức độ dễ triển khai; và
      mức độ thuận tiện cho bạn khi sử dụng. Chúng tôi sẽ thông báo quyết định và giải thích lý do trong vòng 10 ngày làm việc kể từ khi trao đổi với bạn.`,
    description: 'Đoạn văn mô tả cách chúng tôi lựa chọn giải pháp hỗ trợ khả năng truy cập.',
  },
  a11yBodyEdxFollowUp: {
    id: 'a11yBodyEdxFollowUp',
    defaultMessage: `Sau đó, chúng tôi sẽ trao đổi với bạn hằng tuần về quá trình đánh giá, quyết định và tiến độ triển khai giải pháp khả năng truy cập.
      Chúng tôi sẽ thông báo khi việc triển khai giải pháp hoàn tất và tiếp tục liên hệ với bạn khi cần để đảm bảo giải pháp thực sự hiệu quả.`,
    description: 'Đoạn văn mô tả cách chúng tôi theo sát tình trạng hỗ trợ trong và sau khi triển khai giải pháp.',
  },
  a11yBodyOngoingSupport: {
    id: 'a11yBodyOngoingSupport',
    defaultMessage: 'EdX sẽ cung cấp hỗ trợ kỹ thuật thường xuyên khi cần thiết và xử lý mọi vấn đề phát sinh thêm sau giai đoạn tạo khóa học ban đầu.',
    description: 'Câu khẳng định cam kết hỗ trợ lâu dài.',
  },
  a11yBodyA11yFeedback: {
    id: 'a11yBodyA11yFeedback',
    defaultMessage: 'Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào về cách cải thiện khả năng truy cập của Studio, hãy liên hệ {emailElement} hoặc sử dụng biểu mẫu bên dưới. Chúng tôi luôn hoan nghênh phản hồi của bạn.',
    description: 'Thông tin liên hệ cho những người có vấn đề hoặc góp ý về khả năng truy cập.',
  },
  a11yBodyEmailHeading: {
    id: 'a11yBodyEmailHeading',
    defaultMessage: 'Vui lòng gửi email đến {emailElement} với các thông tin sau:',
    description: 'Tiêu đề cho danh sách thông tin cần có khi gửi email cho chúng tôi.',
  },
  a11yBodyNameEmail: {
    id: 'a11yBodyNameEmail',
    defaultMessage: 'họ tên và địa chỉ email của bạn;',
    description: 'Thông tin liên hệ của bạn.',
  },
  a11yBodyInstitution: {
    id: 'a11yBodyInstitution',
    defaultMessage: 'tổ chức/đơn vị thành viên edX mà bạn đang công tác hoặc liên kết;',
    description: 'Thông tin về đơn vị liên kết với edX.',
  },
  a11yBodyBarrier: {
    id: 'a11yBodyBarrier',
    defaultMessage: 'một mô tả ngắn gọn về khó khăn hoặc rào cản truy cập mà bạn đang gặp phải; và',
    description: 'Thông tin về vấn đề khả năng truy cập.',
  },
  a11yBodyTimeConstraints: {
    id: 'a11yBodyTimeConstraints',
    defaultMessage: 'thời điểm bạn cần có quyền truy cập và khoảng thời gian cần thiết (ví dụ: ngày dự kiến bắt đầu khóa học hoặc một hạn chót liên quan đến khóa học như hạn nộp bài luận cuối kỳ).',
    description: 'Thông tin về giới hạn thời gian.',
  },
  a11yBodyReceipt: {
    id: 'a11yBodyReceipt',
    defaultMessage: 'Nhóm Hỗ trợ edX sẽ phản hồi để xác nhận đã nhận được yêu cầu của bạn và chuyển tiếp yêu cầu đến Quản lý Đối tác edX phụ trách đơn vị của bạn cùng với Chuyên gia Khả năng Truy cập Website của edX.',
    description: 'Đoạn văn mô tả những bước edX sẽ thực hiện ngay sau khi nhận được yêu cầu.',
  },
  a11yBodyExtraInfo: {
    id: 'a11yBodyExtraInfo',
    defaultMessage: `Dưới sự tư vấn của Chuyên gia Khả năng Truy cập Website, edX sẽ liên hệ với bạn để trao đổi chi tiết hơn về yêu cầu, thu thập thêm thông tin
      về nhu cầu và mong đợi của bạn nhằm xác định một giải pháp phù hợp mà edX có thể hỗ trợ.`,
    description: 'Đoạn văn mô tả cách và thời điểm edX sẽ liên hệ với bạn.',
  },
  a11yBodyFixesListHeader: {
    id: 'a11yBodyFixesListHeader',
    defaultMessage: 'EdX sẽ hỗ trợ bạn kịp thời và đầy đủ để bạn có thể tạo nội dung trên CMS trong khung thời gian của mình. Các hỗ trợ này có thể bao gồm, nhưng không giới hạn ở:',
    description: 'Tiêu đề cho danh sách các hình thức hỗ trợ mà chúng tôi có thể cung cấp.',
  },
  a11yBodyThirdParty: {
    id: 'a11yBodyThirdParty',
    defaultMessage: 'Mua sắm công cụ hoặc phần mềm của bên thứ ba để sử dụng riêng, hỗ trợ bạn làm việc với Studio;',
    description: 'Mua phần mềm hỗ trợ từ bên thứ ba.',
  },
  a11yBodyContractor: {
    id: 'a11yBodyContractor',
    defaultMessage: 'Thuê cộng tác viên hoặc chuyên gia đã được đào tạo để hỗ trợ trực tiếp về mặt hình ảnh, lời nói và thao tác; hoặc',
    description: 'Thuê cộng tác viên hỗ trợ.',
  },
  a11yBodyCodeFix: {
    id: 'a11yBodyCodeFix',
    defaultMessage: 'Phát triển mã nguồn mới để triển khai một giải pháp kỹ thuật khắc phục vấn đề.',
    description: 'Thực hiện sửa lỗi hoặc cải tiến kỹ thuật.',
  },
});

export default messages;
