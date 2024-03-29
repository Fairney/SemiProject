package semi.Project.muktopia.member.controll;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/member/logout")
public class LogoutServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//로그아웃
		//Session Scope에 세팅된 회원 정보를 없앰
		
		//Session 얻어오기
		HttpSession session = req.getSession();
		
		// 1) Session에서 회원 정보만 없앰
//		session.removeAttribute("loginMember");
		
		// 2) Session 전체를 없애고 새로운 Session 만들기(더 많이 사용되는 방법)
		session.invalidate(); //세션 무효화.
		
		resp.sendRedirect(req.getContextPath());
	}
}