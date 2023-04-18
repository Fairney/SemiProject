package semi.Project.muktopia.member.model.dao;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import static semi.Project.muktopia.common.JDBCTemplate.*;

import semi.Project.muktopia.member.model.vo.Restaurant;

public class RestaurantDAO {
	

		Statement st;
		PreparedStatement pstmt;
		ResultSet rs;
		Properties prop;
		
		public RestaurantDAO() {
			
			try {
				prop = new Properties();
				String filePath = RestaurantDAO.class.getResource("/semi/Project/muktopia/sql/restaurant-sql.xml").getPath();
				prop.loadFromXML(new FileInputStream (filePath));
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	
	
	/**레스토랑 전체 정보를 가져오는 dao
	 * @param conn
	 * @return
	 * @throws SQLException 
	 */
	public List<Restaurant> loadResList(Connection conn) throws SQLException {
		List<Restaurant> resList = new ArrayList<>();
		
		try {
			String sql = prop.getProperty("restaurantList");
			pstmt=conn.prepareStatement(sql);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				String rest_id = rs.getString("RESTAURANT_ID");
				String rest_name = rs.getString("RESTAURANT_NAME");
				String rest_Addr = rs.getString("RESTAURANT_ADDR");
				long rest_x = rs.getLong("RESTAURANT_X");
				long rest_y = rs.getLong("RESTAURANT_Y");
				String rest_category=rs.getString("RESTAURANT_CATEGORY");
				String rest_sns=rs.getString("RESTAURANT_SNS");
				String rest_tel=rs.getString("RESTAURANT_TEL");
				String rest_time=rs.getString("RESTAURANT_TIME");
				
				Restaurant restaurant = new Restaurant(rest_id, rest_name, rest_Addr, rest_x, rest_y, rest_category, rest_sns, rest_tel, rest_time);
			    resList.add(restaurant);
				}

		}finally {
			close(rs);
			close(st);
			
			
		}
		
		return resList;
	}

	
}
