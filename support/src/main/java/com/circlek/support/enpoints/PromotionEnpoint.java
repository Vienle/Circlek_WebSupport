package com.circlek.support.enpoints;

import com.circlek.support.entities.product.ProductServer;
import com.circlek.support.entities.promotion.PromotionServer;
import com.circlek.support.entities.promotion.PromotionStore;
import com.circlek.support.service.PromotionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import javax.persistence.EntityManager;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class PromotionEnpoint {
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private PromotionService promotionService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Object> getall(@RequestParam(name = "store") String store,
                                         @RequestParam(name = "itemcode") String itemcode){
        HashMap<String,Object> response = new HashMap<>();
        List<PromotionServer> promotionServers = promotionService.getPromotionServerByItemcode(itemcode);
        response.put("server",promotionServers);

        HashMap<String,Object> reponsePromoStore = new HashMap<>();
        if (store.isEmpty()){

        }else{
            String[] storeList = store.split(",");
            for (String str:storeList
                 ) {
                str.toLowerCase();
                List<PromotionStore> list = promotionService.getPromotionByStoreByItem(str,itemcode);

                reponsePromoStore.put(str,list);
            }
        }
        response.put("store",reponsePromoStore);
       return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
