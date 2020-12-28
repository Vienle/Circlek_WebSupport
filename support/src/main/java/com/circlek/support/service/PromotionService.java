package com.circlek.support.service;

import com.circlek.support.entities.promotion.PromotionServer;
import com.circlek.support.entities.promotion.PromotionStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureQuery;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PromotionService {
    @Autowired
    private EntityManager entityManager;

    public List<PromotionServer> getPromotionServerByItemcode(String itemcode){

        List<PromotionServer> promotionServers = new ArrayList<>();
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("CK_PROMOTION_SEARCH");
        query.registerStoredProcedureParameter(1,String.class, ParameterMode.IN);
        query.setParameter(1,"105642");
        try {
            List<Object[]> list = query.getResultList();

            for (Object[] obj:list
            ) {
                PromotionServer promotionServer = new PromotionServer();
                promotionServer.setPm_promo((String)obj[0]);
                promotionServer.setPm_type((String)obj[1]);
                promotionServer.setPm_code((String)obj[2]);
                promotionServer.setPm_effdate((Date) obj[3]);
                promotionServer.setPm_expdate((Date)obj[4]);
                promotionServer.setPm_unit((String)obj[5]);
                promotionServer.setPm_disctp((Character) obj[6]);
                promotionServer.setPm_discval((BigDecimal) obj[7]);
                promotionServer.setPm_points((BigDecimal) obj[8]);
                promotionServer.setPm_qtysale((BigDecimal) obj[9]);
                promotionServer.setPm_qtysold((BigDecimal) obj[10]);
                promotionServer.setPm_qtycus((BigDecimal) obj[11]);
                promotionServer.setPm_othinfo((String)obj[12]);
                promotionServer.setPm_stid((String)obj[13]);
                promotionServers.add(promotionServer);
            }
        }catch (Exception ex){
        }
        return  promotionServers;
    }

    public List<PromotionStore> getPromotionByStoreByItem(String storeCode,String itemcode){
        List<PromotionStore> promotionStores = new ArrayList<>();

        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("CK_PROMOTION_SEARCH_STORE");
        query.registerStoredProcedureParameter(1,String.class, ParameterMode.IN);
        query.registerStoredProcedureParameter(2,String.class, ParameterMode.IN);
        query.setParameter(1,itemcode);
        query.setParameter(2,storeCode);
        try {
            List<Object[]> list = query.getResultList();

            for (Object[] obj:list
            ) {

                PromotionStore promotionStore = new PromotionStore();
                promotionStore.setPm_promo((String)obj[0]);
                promotionStore.setPm_type((String)obj[1]);
                promotionStore.setPm_code((String)obj[2]);
                promotionStore.setPm_effdate((Date) obj[3]);
                promotionStore.setPm_expdate((Date)obj[4]);
                promotionStore.setPm_unit((String)obj[5]);
                promotionStore.setPm_disctp((Character) obj[6]);
                promotionStore.setPm_discval((BigDecimal) obj[7]);
                promotionStore.setPm_points((BigDecimal) obj[8]);

//                if(storeCode.equals("HN069")){
//                    promotionStore.setPm_qtysale(Integer.parseInt ((BigDecimal) obj[9].intValue));
//                    promotionStore.setPm_qtysold((BigDecimal) obj[10]);
//                }

                promotionStore.setPm_qtysale((int) obj[9]);
                promotionStore.setPm_qtysold((int) obj[10]);
                promotionStore.setPm_qtycus((BigDecimal) obj[11]);
                promotionStore.setPm_othinfo((String)obj[12]);
                promotionStore.setPm_stid((String)obj[13]);
                promotionStores.add(promotionStore);
            }
        }catch (Exception ex){
           System.out.println(ex);
        }
        return promotionStores;
    }
}
