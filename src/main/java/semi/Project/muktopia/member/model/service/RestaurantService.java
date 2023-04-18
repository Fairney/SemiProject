package semi.Project.muktopia.member.model.service;
import static semi.Project.muktopia.common.JDBCTemplate.*;
import java.util.List;

import java.sql.Connection;


import semi.Project.muktopia.member.model.dao.RestaurantDAO;
import semi.Project.muktopia.member.model.vo.Restaurant;



public class RestaurantService {
	
	public RestaurantService() {};
	
	private RestaurantDAO dao = new RestaurantDAO();
	
	Connection conn = getConnection();

	/** 레스토랑 전체 정보를 불러오는 service
	 * @return
	 */
	public List<Restaurant> loadResList() throws Exception {

		Connection conn = getConnection();
		List<Restaurant> resList = dao.loadResList(conn);
		
		return resList;
	}

	
	
	
	
	
	
	
}
